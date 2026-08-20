"use client";

import { useEffect, useRef, useState } from "react";
import {
  LuArrowRight,
  LuCircle,
  LuMousePointer2,
  LuStar,
  LuTriangle,
} from "react-icons/lu";
import { siFigma, siFramer } from "simple-icons";
import { Button } from "@/shared/ui/Button/Button";
import sharedStyles from "../../Services.module.css";
import styles from "./UxUiCard.module.css";

const TAGS = ["UI/UX Design", "Web Design", "Branding", "Product Design"];
const COUNT_MS = 350;

function BrandIcon({ path, hex }: { path: string; hex: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={`#${hex}`}
      className={styles.badgeSvg}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

/** Counts between `from` and `to` over COUNT_MS whenever `active` flips —
 * drives both the shown px label and the actual gap height, so they can
 * never drift out of sync with each other. */
function useCounter(from: number, to: number, active: boolean) {
  const [value, setValue] = useState(from);
  const valueRef = useRef(from);
  const frameRef = useRef(0);

  useEffect(() => {
    const start = valueRef.current;
    const end = active ? to : from;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / COUNT_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      const next = Math.round(start + (end - start) * eased);
      valueRef.current = next;
      setValue(next);
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, from, to]);

  return value;
}

export function UxUiCard() {
  const [hovered, setHovered] = useState(false);
  const smallGap = useCounter(8, 20, hovered);
  const largeGap = useCounter(20, 8, hovered);

  return (
    <article
      className={`${sharedStyles.card} card-root`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={sharedStyles.cardHeader}>
        <h3 className={sharedStyles.cardTitle}>#UX/UI</h3>
        <span className={sharedStyles.cardArrow} aria-hidden="true">
          <LuArrowRight />
        </span>
      </div>

      <div className={sharedStyles.tags}>
        {TAGS.map((tag) => (
          <span key={tag} className={sharedStyles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={sharedStyles.imagePlaceholder}>
        <div className={styles.mockup} aria-hidden="true">
          <div className={styles.stack}>
            <div
              className={`${styles.button} ${styles.buttonWhite} ${styles.buttonSquare}`}
            >
              <LuCircle className={styles.icon} />
              Button
            </div>
            <div className={styles.hatch} style={{ height: smallGap }}>
              <span className={styles.hatchLabel}>{smallGap}px</span>
            </div>
            <div
              className={`${styles.button} ${styles.buttonAccent} ${styles.buttonRound}`}
            >
              <LuStar className={styles.iconLight} />
              Button
            </div>
            <div className={styles.hatch} style={{ height: largeGap }}>
              <span className={styles.hatchLabel}>{largeGap}px</span>
            </div>
            <Button size="md" tabIndex={-1}>
              <LuTriangle />
              Button
            </Button>
          </div>

          <span className={`${styles.cursor} ${styles.cursorDark}`}>
            <LuMousePointer2 />
          </span>
          <span className={`${styles.cursor} ${styles.cursorAccent}`}>
            <LuMousePointer2 />
          </span>

          <span className={`${styles.badge} ${styles.badgeFigma}`}>
            <BrandIcon path={siFigma.path} hex={siFigma.hex} />
          </span>
          <span className={`${styles.badge} ${styles.badgeFramer}`}>
            <BrandIcon path={siFramer.path} hex={siFramer.hex} />
          </span>
        </div>
      </div>
    </article>
  );
}
