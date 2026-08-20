import { LuSparkle } from "react-icons/lu";
import { Button } from "@/shared/ui/Button/Button";
import { Container } from "@/shared/ui/Container/Container";
import { ScrambleText } from "@/shared/ui/ScrambleText/ScrambleText";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./SocialIcons";
import styles from "./Footer.module.css";

type FooterLink = { label: string; href: string };

const PAGES_LINKS: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "/cases" },
  { label: "About", href: "#about" },
  { label: "Contacts", href: "/contacts" },
];

const WEB2_LINKS: FooterLink[] = [
  { label: "Web Development", href: "#" },
  { label: "Backend Development", href: "#" },
  { label: "Mobile Development", href: "#" },
  { label: "API Integration", href: "#" },
];

const WEB3_LINKS: FooterLink[] = [
  { label: "Smart Contracts", href: "#" },
  { label: "DeFi Development", href: "#" },
  { label: "NFT Development", href: "#" },
  { label: "Security Audits", href: "#" },
];

const UXUI_LINKS: FooterLink[] = [
  { label: "UI/UX Design", href: "#" },
  { label: "Web Design", href: "#" },
  { label: "Branding", href: "#" },
  { label: "Product Design", href: "#" },
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
              right by engineers who specialize in security, DeFi, and on-chain
              infrastructure.
            </p>

            <div className={styles.ctaButtons}>
              <Button href="/contacts" size="md">
                Get Started
              </Button>
              <Button href="/contacts" size="md" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.about}>
            <span className={styles.logo}>aiqonz</span>

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
          </div>

          <div className={styles.columns}>
            <FooterColumn title="Main" links={PAGES_LINKS} />
            <FooterColumn title="#WEB.2" links={WEB2_LINKS} />
            <FooterColumn title="#WEB.3" links={WEB3_LINKS} />
            <FooterColumn title="#UX/UI" links={UXUI_LINKS} />
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.legalBar}>
          <span className={styles.copyright}>
            © {year} aiqonz. All rights reserved.
          </span>

          <ul className={styles.legalLinks}>
            {LEGAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.legalLink}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
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
