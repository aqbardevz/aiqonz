"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronDown } from "react-icons/lu";
import { Container } from "@/shared/ui/Container/Container";
import { Button } from "@/shared/ui/Button/Button";
import { ServicesMenu } from "./ServicesMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
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
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const headerClasses = [styles.header, onHero && styles.onHero]
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

        <BurgerMenu
          navLinks={NAV_LINKS}
          open={menuOpen}
          onToggle={() => setMenuOpen((prev) => !prev)}
          onClose={closeMenu}
        />
      </Container>
    </header>
  );
}
