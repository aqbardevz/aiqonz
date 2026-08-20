"use client";

import { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import { SERVICE_COLUMNS } from "../ServicesMenu";
import styles from "./BurgerMenu.module.css";

type NavLink = { label: string; href: string };

type BurgerMenuProps = {
  navLinks: NavLink[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function BurgerMenu({ navLinks, open, onToggle, onClose }: BurgerMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    // The toggle button has its own open/close handler, so it's excluded
    // here — otherwise this would close the menu and the button's onClick
    // would immediately reopen it.
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open, onClose]);

  const panelClasses = [
    styles.mobilePanel,
    "burger-panel",
    open && styles.mobilePanelOpen,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={`${styles.menuToggle} burger-toggle`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={onToggle}
      >
        {open ? <LuX size={24} /> : <LuMenu size={24} />}
      </button>

      <div id="mobile-nav" ref={panelRef} className={panelClasses}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          <ul className={styles.mobileNavList}>
            {navLinks.map(({ label, href }) =>
              label === "Services" ? (
                <li key={href} className={styles.mobileNavItem}>
                  <button
                    type="button"
                    className={styles.mobileNavLink}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services"
                    onClick={() => setServicesOpen((prev) => !prev)}
                  >
                    {label}
                    <LuChevronDown
                      size={18}
                      className={
                        servicesOpen
                          ? `${styles.mobileChevron} ${styles.mobileChevronOpen}`
                          : styles.mobileChevron
                      }
                    />
                  </button>

                  <div
                    id="mobile-services"
                    className={
                      servicesOpen
                        ? `${styles.mobileServices} ${styles.mobileServicesOpen}`
                        : styles.mobileServices
                    }
                  >
                    <div className={styles.mobileServicesInner}>
                      {SERVICE_COLUMNS.map((column) => (
                        <div
                          key={column.title}
                          className={styles.mobileServicesGroup}
                        >
                          <span className={styles.mobileServicesGroupTitle}>
                            {column.title}
                          </span>
                          <ul className={styles.mobileServicesList}>
                            {column.items.map((item) => (
                              <li key={item.title}>
                                <a
                                  href="#services"
                                  className={styles.mobileServiceLink}
                                  onClick={onClose}
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={href}>
                  <a
                    href={href}
                    className={styles.mobileNavLink}
                    onClick={onClose}
                  >
                    {label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
