import { LuSparkle } from "react-icons/lu";
import { Button } from "@/shared/ui/Button/Button";
import { Container } from "@/shared/ui/Container/Container";
import { ScrambleText } from "@/shared/ui/ScrambleText/ScrambleText";
import {
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
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

// Akbar's personal accounts, not aiqonz's — this section is intentionally
// framed as the founder's socials (see .connectLabel below).
const SOCIAL_ICONS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/aqbardevz/",
    Icon: InstagramIcon,
  },
  { label: "X (Twitter)", href: "https://x.com/aqbardevz", Icon: XIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aqbardevz",
    Icon: LinkedInIcon,
  },
  { label: "Telegram", href: "https://t.me/aqbardevz", Icon: TelegramIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.cta}>
          <h2 className={styles.ctaHeadline}>
            Let&rsquo;s build your next big thing.
          </h2>

          <div className={styles.ctaRight}>
            <p className={styles.ctaDescription}>
              No long onboarding, no bloated teams — just a direct line to the
              people who&rsquo;ll build your product.
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
              <span className={styles.connectLabel}>
                Connect with our founder, Akbar:
              </span>
              <div className={styles.socialIcons}>
                {SOCIAL_ICONS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
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
