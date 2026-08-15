import Link from "next/link";
import { Container } from "@/shared/ui/Container/Container";
import { Button } from "@/shared/ui/Button/Button";
import { ScrambleText } from "@/shared/ui/ScrambleText/ScrambleText";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "#cases" },
  { label: "About", href: "#about" },
  { label: "How we work?", href: "#how-we-work" },
  { label: "Contacts", href: "#contacts" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.logo}>
          aiqonz
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.navLink} aria-label={label}>
                  <ScrambleText text={label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button className={styles.cta}>Start a project</Button>
      </Container>
    </header>
  );
}
