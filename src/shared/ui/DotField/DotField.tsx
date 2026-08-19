"use client";

import { useEffect, useRef } from "react";
import styles from "./DotField.module.css";

export type DotFieldData = {
  cols: number;
  rows: number;
  pitchX: number;
  pitchY: number;
  /** Base64-encoded RGB triplets, row-major, one per lattice cell. */
  data: string;
};

type Rgb = [number, number, number];

export type DotFieldConfig = {
  /** Cells dimmer than this (0-255) aren't drawn at all. */
  threshold: number;
  /** Dot size as a fraction of its lattice cell. */
  dotWidth: number;
  dotHeight: number;
  /** Overall dot opacity; each dot also scales by its own brightness. */
  opacity: number;
  /** Contrast multiplier applied to each dot's sampled colour, >1 punches
   * shadows darker and highlights brighter around a mid-grey pivot. */
  contrast: number;
  /**
   * Elliptical falloff that keeps dots off overlaid copy. Radii are
   * fractions of the canvas half-size; strength is how much alpha is
   * removed dead centre.
   */
  fadeRadiusX: number;
  fadeRadiusY: number;
  fadeStrength: number;
  /**
   * Cursor influence. Dots are pushed radially away and lift slightly
   * rather than just swelling — scaling much past ~1.3 makes neighbours
   * merge.
   */
  pointerRadius: number;
  pointerPush: number;
  pointerScale: number;
  pointerLift: number;
  /** Per-frame lerp for both cursor position and influence ramp-up/down. */
  pointerEase: number;
  /** Entrance: each half slides in from its own edge, tips last. */
  revealMs: number;
  staggerMs: number;
  slideFrom: number;
  /** Colour dots lift toward as the cursor nears, and by how much. */
  highlightColor: Rgb;
  highlightMix: number;
  /**
   * CSS selector for the ancestor pointer events are tracked on. Wider
   * than the canvas itself when overlaid content (e.g. a headline sitting
   * on top of the field) would otherwise swallow pointer events. Null
   * tracks the canvas's immediate parent only.
   */
  pointerScopeSelector: string | null;
};

export const DEFAULT_DOT_FIELD_CONFIG: DotFieldConfig = {
  threshold: 30,
  dotWidth: 0.72,
  dotHeight: 0.72,
  opacity: 0.9,
  contrast: 1.15,
  fadeRadiusX: 0.46,
  fadeRadiusY: 0.5,
  fadeStrength: 0.85,
  pointerRadius: 170,
  pointerPush: 13,
  pointerScale: 1.25,
  pointerLift: 0.3,
  pointerEase: 0.14,
  revealMs: 900,
  staggerMs: 450,
  slideFrom: 0.14,
  highlightColor: [255, 255, 255],
  highlightMix: 0.6,
  pointerScopeSelector: null,
};

type Dot = {
  /** Lattice coordinates. */
  col: number;
  row: number;
  /** Source luminance, 0-1 — drives per-dot opacity. */
  value: number;
  /** Source colour, sampled straight from the reference image. */
  color: Rgb;
  /** Entrance delay, 0-1 of staggerMs — 0 at the outer edges. */
  delay: number;
  /** Which edge this dot slides in from: -1 left, 1 right. */
  side: -1 | 1;
};

function applyContrast(value: number, contrast: number) {
  const adjusted = (value - 128) * contrast + 128;
  return Math.min(255, Math.max(0, Math.round(adjusted)));
}

function decodeDots(field: DotFieldData, config: DotFieldConfig): Dot[] {
  const { cols, data } = field;
  const binary = atob(data);
  const cellCount = binary.length / 3;
  const dots: Dot[] = [];

  for (let i = 0; i < cellCount; i++) {
    const r = applyContrast(binary.charCodeAt(i * 3), config.contrast);
    const g = applyContrast(binary.charCodeAt(i * 3 + 1), config.contrast);
    const b = applyContrast(binary.charCodeAt(i * 3 + 2), config.contrast);
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (luminance <= config.threshold) continue;

    const col = i % cols;
    const row = Math.floor(i / cols);
    // 1 at the outer edges, 0 dead centre.
    const fromCentre = Math.abs((col / (cols - 1)) * 2 - 1);

    dots.push({
      col,
      row,
      value: luminance / 255,
      color: [r, g, b],
      delay: 1 - fromCentre,
      side: col < cols / 2 ? -1 : 1,
    });
  }

  return dots;
}

function rgbString([r, g, b]: Rgb) {
  return `rgb(${r} ${g} ${b})`;
}

function mix(from: Rgb, to: Rgb, t: number) {
  const r = Math.round(from[0] + (to[0] - from[0]) * t);
  const g = Math.round(from[1] + (to[1] - from[1]) * t);
  const b = Math.round(from[2] + (to[2] - from[2]) * t);
  return rgbString([r, g, b]);
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const smoothstep = (t: number) => t * t * (3 - 2 * t);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

type DotFieldProps = {
  /** The lattice data to render — see scripts/extract-dot-field.mjs. */
  field: DotFieldData;
  /** Overrides merged on top of DEFAULT_DOT_FIELD_CONFIG. */
  config?: Partial<DotFieldConfig>;
  className?: string;
};

/**
 * Canvas dot-matrix renderer: decodes a DotFieldData lattice and draws it as
 * a halftone of coloured dots that reveal on entrance and react to the
 * cursor. Config and data are read once on mount — this is imperative
 * canvas setup, not meant to re-run per render.
 */
export function DotField({ field, config: overrides, className }: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const config: DotFieldConfig = { ...DEFAULT_DOT_FIELD_CONFIG, ...overrides };

    // Overlaid content sitting on top of the canvas would otherwise
    // swallow pointer events, so track them on a wider ancestor instead.
    const pointerTarget = config.pointerScopeSelector
      ? (parent.closest(config.pointerScopeSelector) ?? parent)
      : parent;

    const dots = decodeDots(field, config);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let revealStart = reduceMotion ? -Infinity : 0;
    let visible = false;
    let frame = 0;

    /** Where the cursor actually is; null once it leaves. */
    let target: { x: number; y: number } | null = null;
    /** Smoothed cursor position and how strongly it's applied, both eased. */
    let pointerX = 0;
    let pointerY = 0;
    let strength = 0;

    function resize() {
      const rect = parent!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      context!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(now: number) {
      if (!width || !height) return;

      const { cols, rows, pitchX, pitchY } = field;

      // Cover the box the way `background-size: cover` would, keeping the
      // lattice's non-square cell ratio intact.
      const scale = Math.max(width / (cols * pitchX), height / (rows * pitchY));
      const cellW = pitchX * scale;
      const cellH = pitchY * scale;
      const offsetX = (width - cols * cellW) / 2;
      const offsetY = (height - rows * cellH) / 2;

      const baseW = cellW * config.dotWidth;
      const baseH = cellH * config.dotHeight;
      const elapsed = now - revealStart;
      const slide = width * config.slideFrom;

      // Ease the cursor toward its target so the effect trails the mouse
      // instead of snapping, and fades out once it leaves.
      if (target) {
        if (strength < 0.002) {
          pointerX = target.x;
          pointerY = target.y;
        }
        pointerX += (target.x - pointerX) * config.pointerEase;
        pointerY += (target.y - pointerY) * config.pointerEase;
        strength += (1 - strength) * config.pointerEase;
      } else {
        strength += -strength * config.pointerEase;
      }

      context!.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const progress = reduceMotion
          ? 1
          : clamp01((elapsed - dot.delay * config.staggerMs) / config.revealMs);
        if (progress <= 0) continue;

        const eased = easeOut(progress);

        let x = offsetX + (dot.col + 0.5) * cellW;
        let y = offsetY + (dot.row + 0.5) * cellH;

        // Entrance: still parked off its own edge until fully revealed.
        x += dot.side * slide * (1 - eased);

        // Elliptical falloff so the middle of the field stays legible.
        const nx = (x / width - 0.5) / config.fadeRadiusX;
        const ny = (y / height - 0.5) / config.fadeRadiusY;
        const clear = smoothstep(clamp01(Math.hypot(nx, ny)));
        const centre = 1 - config.fadeStrength * (1 - clear);

        let influence = 0;
        if (strength > 0.002) {
          const dx = x - pointerX;
          const dy = y - pointerY;
          const distance = Math.hypot(dx, dy);

          if (distance < config.pointerRadius && distance > 0.001) {
            influence =
              smoothstep(1 - distance / config.pointerRadius) * strength;
            const push = config.pointerPush * influence;
            x += (dx / distance) * push;
            y += (dy / distance) * push;
          }
        }

        const size = 1 + influence * (config.pointerScale - 1);
        const w = baseW * size * eased;
        const h = baseH * size * eased;

        // Each dot keeps its own sampled colour and lifts toward the
        // highlight colour as the cursor nears, like catching the light.
        context!.fillStyle =
          influence > 0.01
            ? mix(dot.color, config.highlightColor, influence * config.highlightMix)
            : rgbString(dot.color);

        context!.globalAlpha = clamp01(
          (dot.value * config.opacity + influence * config.pointerLift) *
            centre *
            eased,
        );
        context!.fillRect(x - w / 2, y - h / 2, w, h);
      }

      context!.globalAlpha = 1;
    }

    function needsAnimation(now: number) {
      if (target || strength > 0.002) return true;
      if (reduceMotion) return false;
      return now - revealStart < config.revealMs + config.staggerMs;
    }

    function loop(now: number) {
      draw(now);
      frame = needsAnimation(now) ? requestAnimationFrame(loop) : 0;
    }

    function wake() {
      if (!frame) frame = requestAnimationFrame(loop);
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      target = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      wake();
    }

    function onPointerLeave() {
      target = null;
      wake();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || visible) return;
        visible = true;
        // rAF is throttled in background tabs, which would freeze the reveal
        // part-way. Nobody is watching, so jump straight to the end state.
        revealStart = document.hidden ? -Infinity : performance.now();
        draw(performance.now());
        wake();
      },
      { threshold: 0.15 },
    );

    // Returning to the tab mid-reveal lands on a large elapsed time, so this
    // settles the canvas on the finished state.
    function onVisibilityChange() {
      if (document.hidden) return;
      draw(performance.now());
      wake();
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      wake();
      // Redraw immediately so a resize never leaves a blank frame behind.
      draw(performance.now());
    });

    resize();
    observer.observe(parent);
    resizeObserver.observe(parent);
    pointerTarget.addEventListener(
      "pointermove",
      onPointerMove as EventListener,
    );
    pointerTarget.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      pointerTarget.removeEventListener(
        "pointermove",
        onPointerMove as EventListener,
      );
      pointerTarget.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
    // Config/data are read once for this imperative canvas setup and aren't
    // meant to react to identity changes on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className ? `${styles.canvas} ${className}` : styles.canvas}
      aria-hidden="true"
    />
  );
}
