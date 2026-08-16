"use client";

import { useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import styles from "./LanguageSwitcher.module.css";

const LANGUAGES = ["EN", "RU"];

export function LanguageSwitcher() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.switcher}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {LANGUAGES[selected]}
        <LuChevronDown
          size={16}
          className={open ? styles.chevronOpen : styles.chevron}
        />
      </button>

      {open && (
        <ul className={styles.dropdown} role="listbox">
          {LANGUAGES.map((language, index) => (
            <li key={language}>
              <button
                type="button"
                role="option"
                aria-selected={index === selected}
                className={
                  index === selected
                    ? `${styles.option} ${styles.optionActive}`
                    : styles.option
                }
                onClick={() => {
                  setSelected(index);
                  setOpen(false);
                }}
              >
                {language}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
