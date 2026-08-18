import Link from "next/link";
import { Container } from "@/shared/ui/Container/Container";
import { ScrambleText } from "@/shared/ui/ScrambleText/ScrambleText";
import buttonStyles from "@/shared/ui/Button/Button.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "./SocialIcons";
import styles from "./Footer.module.css";

type FooterLink = { label: string; href: string };
type ServiceGroup = { title: string; items: string[] };

const NAV_LINKS: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "/cases" },
  { label: "About", href: "#about" },
  { label: "How we work?", href: "#how-we-work" },
  { label: "Contacts", href: "/contacts" },
];

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Web2",
    items: [
      "Web Development",
      "Backend Development",
      "Mobile Development",
      "API Integration",
    ],
  },
  {
    title: "Web3",
    items: [
      "Smart Contracts",
      "DeFi Development",
      "NFT Development",
      "Security Audits",
    ],
  },
  {
    title: "Design",
    items: ["UI/UX Design", "Web Design", "Branding", "Product Design"],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const SOCIAL_ICONS = [
  { label: "X (Twitter)", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "YouTube", href: "#", Icon: YouTubeIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.cta}>
        <span className={styles.ctaBadge}>
          <span className={styles.ctaDot} aria-hidden="true" />
          Available for new projects
        </span>

        <h2 className={styles.ctaHeadline}>
          Let&apos;s build something{" "}
          <span className={styles.ctaAccent}>secure</span> together
        </h2>

        <p className={styles.ctaDescription}>
          Tell us about your project — we usually reply within 24 hours.
        </p>

        <div className={styles.ctaActions}>
          <Link
            href="/contacts"
            className={`${buttonStyles.button} ${buttonStyles.lg}`}
          >
            <div className={buttonStyles.blob1} aria-hidden="true" />
            <div className={buttonStyles.blob2} aria-hidden="true" />
            <div className={buttonStyles.inner}>Start a project</div>
          </Link>

          <Link
            href="/cases"
            className={`${buttonStyles.button} ${buttonStyles.secondary} ${buttonStyles.lg}`}
          >
            <div className={buttonStyles.inner}>View our cases</div>
          </Link>
        </div>
      </Container>

      <Container className={styles.inner}>
        <div className={styles.about}>
          <h3 className={styles.heading}>aiqonz</h3>

          <p className={styles.tagline}>
            We help teams build, audit, and scale secure blockchain products.
          </p>

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

          <p className={styles.copyright}>
            © {year} aiqonz. All rights reserved.
          </p>
        </div>

        <FooterColumn title="Navigation" links={NAV_LINKS} />
        <ServicesColumn />
        <FooterColumn title="Legal" links={LEGAL_LINKS} />
      </Container>
    </footer>
  );
}

function ServicesColumn() {
  return (
    <div className={styles.column}>
      <h4 className={styles.columnTitle}>Services</h4>
      <div className={styles.serviceGroups}>
        {SERVICE_GROUPS.map((group) => (
          <div key={group.title} className={styles.serviceGroup}>
            <span className={styles.serviceGroupTitle}>{group.title}</span>
            <ul className={styles.columnList}>
              {group.items.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className={styles.columnLink}
                    aria-label={label}
                  >
                    <ScrambleText text={label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
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
