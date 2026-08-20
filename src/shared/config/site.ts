// Single source of truth for site-wide SEO facts — metadata, JSON-LD, and
// the sitemap/robots routes all read from here instead of hardcoding the
// domain or brand copy in multiple places.

export const SITE_URL = "https://aiqonz.com";
export const SITE_NAME = "AIQONZ";

export const SITE_TITLE = "AIQONZ — Full-Cycle Web3 & Web2 Product Studio";
export const SITE_DESCRIPTION =
  "AIQONZ is a full-cycle Web3 and Web2 product studio. We pair deep blockchain engineering — smart contracts, DeFi, wallets — with product-grade UI/UX design to help founders launch faster and scale further.";

// Founder's personal accounts, surfaced sitewide via the footer; reused here
// as Organization.sameAs so search engines can tie the brand to real profiles.
export const SOCIAL_LINKS = [
  "https://www.instagram.com/aqbardevz/",
  "https://x.com/aqbardevz",
  "https://www.linkedin.com/in/aqbardevz",
  "https://t.me/aqbardevz",
];

// Primary contact channel referenced on the legal pages.
export const TELEGRAM_HANDLE = "@aqbardevz";
