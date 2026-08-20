"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import { Container } from "@/shared/ui/Container/Container";
import { Button } from "@/shared/ui/Button/Button";
import { ServicesMenu, SERVICE_COLUMNS } from "./ServicesMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "/cases" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacts", href: "/contacts" },
];

export function Header() {
  const pathname = usePathname();
  const onHero = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  const headerClasses = [
    styles.header,
    onHero && styles.onHero,
    menuOpen && styles.menuOpen,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          aiqonz
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li
                key={href}
                className={
                  label === "Services" ? "nav-item-services" : undefined
                }
              >
                <a href={href} className={styles.navLink} aria-label={label}>
                  {label}
                  {label === "Services" && (
                    <LuChevronDown size={15} className={styles.navChevron} />
                  )}
                </a>
                {label === "Services" && <ServicesMenu />}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button className={styles.cta}>Start a project</Button>
          {/* <LanguageSwitcher /> */}
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={
          menuOpen
            ? `${styles.mobilePanel} ${styles.mobilePanelOpen}`
            : styles.mobilePanel
        }
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map(({ label, href }) =>
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
                                  onClick={closeMenu}
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
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ),
            )}
          </ul>

          <Button className={styles.mobileCta} onClick={closeMenu}>
            Start a project
          </Button>
        </nav>
      </div>
    </header>
  );
}
