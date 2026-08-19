import { siTelegram } from "simple-icons";
import { Container } from "@/shared/ui/Container/Container";
import { ScrambleText } from "@/shared/ui/ScrambleText/ScrambleText";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "./SocialIcons";
import styles from "./Footer.module.css";
import { Button } from "@/shared/ui/Button/Button";

type FooterLink = { label: string; href: string };

const NAV_LINKS: FooterLink[] = [
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

const SOCIAL_LINKS: FooterLink[] = [
  { label: "Instagram", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Telegram", href: "#" },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const SOCIAL_ICONS = [
  { label: "X (Twitter)", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Telegram", href: "#", Icon: TelegramIcon },
];

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={siTelegram.path} />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <span className={styles.ctaBadge}>
          <span className={styles.ctaDot} aria-hidden="true" />
          Open for new projects
        </span>

        <h2 className={styles.ctaHeadline}>
          Your complete platform
          <br />
          for the <span className={styles.ctaAccent}>Blockchain.</span>
        </h2>

        <div className={styles.ctaButtons}>
          <Button size="lg" className={styles.ctaButton}>
            Start a project
          </Button>
        </div>
      </div>

      <Container className={styles.info}>
        <div className={styles.topRow}>
          <span className={styles.logo}>aiqonz</span>

          <div className={styles.socialRow}>
            <span className={styles.socialLabel}>Social Media</span>
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

        <div className={styles.divider} />

        <div className={styles.columnsRow}>
          <div className={styles.reachOut}>
            <span className={styles.groupLabel}>Reach out to us</span>
            <a
              href="https://t.me/akbar"
              target="_blank"
              rel="noreferrer"
              className={styles.telegramCard}
            >
              <span className={styles.telegramIcon}>
                <TelegramIcon />
              </span>
              <span className={styles.telegramText}>
                <span className={styles.telegramTitle}>
                  Contact us on Telegram
                </span>
                <span className={styles.telegramSub}>@aqbardevz</span>
              </span>
            </a>
          </div>

          <FooterColumn title="Main" links={NAV_LINKS} />
          <FooterColumn title="Web2 Development" links={SERVICES_LINKS} />
          <FooterColumn title="Web3 Development" links={SERVICES_LINKS} />
          <FooterColumn title="UX/UI Design" links={SERVICES_LINKS} />
          {/* <FooterColumn title="Social Media" links={SOCIAL_LINKS} /> */}
        </div>

        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © {year} aiqonz. All rights reserved.
          </span>

          <div className={styles.bottomLinks}>
            {LEGAL_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className={styles.bottomLink}>
                {label}
              </a>
            ))}
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
