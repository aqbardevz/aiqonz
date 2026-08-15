"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import styles from "./Cta.module.css";

const WORDS = ["Smart Contracts", "DeFi", "NFTs", "Tokenomics", "Web3"];
const TYPE_MS = 55;
const DELETE_MS = 30;
const HOLD_MS = 1400;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function RotatingWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reducedMotion) return;

    const word = WORDS[wordIndex];

    if (!deleting && length === word.length) {
      const id = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(id);
    }

    if (deleting && length === 0) {
      const id = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % WORDS.length);
      }, 0);
      return () => clearTimeout(id);
    }

    const id = setTimeout(
      () => setLength((l) => l + (deleting ? -1 : 1)),
      deleting ? DELETE_MS : TYPE_MS,
    );
    return () => clearTimeout(id);
  }, [length, deleting, wordIndex, reducedMotion]);

  const word = WORDS[wordIndex];
  const displayed = reducedMotion ? word : word.slice(0, length);

  return (
    <span className={styles.rotating}>
      {displayed}
      <span className={styles.cursor} aria-hidden="true" />
    </span>
  );
}
