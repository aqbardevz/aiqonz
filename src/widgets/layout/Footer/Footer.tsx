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

type FooterLink = { label: string; href: string };

const NAV_LINKS: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "#cases" },
  { label: "About", href: "#about" },
  { label: "How we work?", href: "#how-we-work" },
  { label: "Contacts", href: "#contacts" },
];

const SERVICES_LINKS: FooterLink[] = [
  { label: "Smart Contracts", href: "#" },
  { label: "Security Audits", href: "#" },
  { label: "DeFi Development", href: "#" },
  { label: "NFT Development", href: "#" },
  { label: "Tokenomics", href: "#" },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Disclaimer", href: "#" },
];

const SOCIAL_LINKS: FooterLink[] = [
  { label: "X (Twitter)", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
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
        <FooterColumn title="Services" links={SERVICES_LINKS} />
        <FooterColumn title="Legal" links={LEGAL_LINKS} />
        {/* <FooterColumn title="Social" links={SOCIAL_LINKS} /> */}
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
            <a
              href={href}
              className={styles.columnLink}
              aria-label={label}
            >
              <ScrambleText text={label} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
