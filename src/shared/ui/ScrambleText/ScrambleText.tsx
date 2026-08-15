"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./ScrambleText.module.css";

const SCRAMBLE_CHARS = "0123456789abcde";
const SCRAMBLE_FRAMES = 5;
const REVEAL_SPREAD_FRAMES = 15;
const NBSP = " ";

type ScrambleTextProps = {
  text: string;
  className?: string;
};

type Char = { char: string; locked: boolean };

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

function randomNoiseClass() {
  return Math.random() < 0.5 ? styles.charBlue : styles.charGreen;
}

function toChars(text: string): Char[] {
  return text
    .split("")
    .map((char) => ({ char: char === " " ? NBSP : char, locked: true }));
}

export function ScrambleText({ text, className }: ScrambleTextProps) {
  const [chars, setChars] = useState<Char[]>(() => toChars(text));
  const frameRef = useRef<number | null>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [lockedWidth, setLockedWidth] = useState<number>();

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      setLockedWidth(wrapperRef.current.getBoundingClientRect().width);
    }
  }, [text]);

  function play() {
    if (frameRef.current !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const totalFrames = SCRAMBLE_FRAMES + REVEAL_SPREAD_FRAMES;
    let frame = 0;

    const tick = () => {
      setChars(
        text.split("").map((char, i) => {
          if (char === " ") return { char: NBSP, locked: true };
          const lockFrame =
            SCRAMBLE_FRAMES + (i / text.length) * REVEAL_SPREAD_FRAMES;
          const locked = frame >= lockFrame;
          return { char: locked ? char : randomChar(), locked };
        }),
      );
      frame += 1;

      if (frame <= totalFrames) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setChars(toChars(text));
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  }

  const classes = [styles.scramble, className].filter(Boolean).join(" ");

  return (
    <span
      ref={wrapperRef}
      className={classes}
      style={lockedWidth ? { width: lockedWidth } : undefined}
      onMouseEnter={play}
      onFocus={play}
      aria-hidden="true"
    >
      {chars.map((c, i) =>
        c.locked ? (
          <span key={i}>{c.char}</span>
        ) : (
          <span key={i} className={randomNoiseClass()}>
            {c.char}
          </span>
        ),
      )}
    </span>
  );
}
