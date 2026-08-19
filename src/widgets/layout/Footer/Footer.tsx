import { LuArrowUpRight, LuSparkle } from "react-icons/lu";
import { Button } from "@/shared/ui/Button/Button";
import { Container } from "@/shared/ui/Container/Container";
import { ScrambleText } from "@/shared/ui/ScrambleText/ScrambleText";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "./SocialIcons";
import styles from "./Footer.module.css";

type FooterLink = { label: string; href: string };

const PAGES_LINKS: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "/cases" },
  { label: "About", href: "#about" },
  { label: "Contacts", href: "/contacts" },
];

const SERVICES_LINKS: FooterLink[] = [
  { label: "Smart Contracts", href: "#" },
  { label: "Security Audits", href: "#" },
  { label: "DeFi Development", href: "#" },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const SOCIAL_ICONS = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "X (Twitter)", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.cta}>
          <h2 className={styles.ctaHeadline}>
            Engineered for Security.
            <br />
            Built to Scale.
          </h2>

          <div className={styles.ctaRight}>
            <p className={styles.ctaDescription}>
              Smart contracts, audits, and full-stack Web3 development — done
              right by engineers who specialize in security, DeFi, and
              on-chain infrastructure.
            </p>

            <div className={styles.ctaButtons}>
              <Button href="/contacts" size="lg">
                Get Started
                <LuArrowUpRight />
              </Button>
              <Button href="/contacts" size="lg" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.about}>
            <span className={styles.logo}>
              <LuSparkle className={styles.logoIcon} aria-hidden="true" />
              aiqonz.
            </span>

            <div className={styles.connect}>
              <span className={styles.connectLabel}>Connect with us:</span>
              <div className={styles.socialIcons}>
                {SOCIAL_ICONS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={styles.iconLink}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <p className={styles.copyright}>© {year}. All Rights Reserved.</p>
          </div>

          <div className={styles.columns}>
            <FooterColumn title="Pages" links={PAGES_LINKS} />
            <FooterColumn title="Services" links={SERVICES_LINKS} />
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className={styles.column}>
      <h4 className={styles.columnTitle}>{title}</h4>
      <ul className={styles.columnList}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className={styles.columnLink} aria-label={label}>
              <ScrambleText text={label} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
