export type ProjectResult = { label: string; value: string };

export type Project = {
  slug: string;
  company: string;
  title: string;
  tags: string[];
  image: string;
  imageAlt: string;
  /** Dominant accent colour sampled from the preview image, used for a
   * faint background tint on the project card. */
  accentColor: string;
  year: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  results: ProjectResult[];
  stack: string[];
};

// Shared by the homepage "Featured projects" teaser, the full /cases
// listing, and each project's own /cases/[slug] detail page, so all three
// reference the same placeholder case studies instead of drifting apart.
export const PROJECTS: Project[] = [
  {
    slug: "fluxa",
    company: "Fluxa",
    title: "Non-custodial multi-chain wallet app",
    tags: ["DeFi Wallet", "Mobile App", "B2C"],
    image: "/assets/projects/project-wallet2.png",
    imageAlt: "Fluxa wallet app screens",
    accentColor: "#22c55e",
    year: "2024",
    category: "DeFi Wallet",
    overview:
      "Fluxa needed a wallet that felt as fast and intuitive as a centralized exchange app, without ever holding custody of user funds.",
    challenge:
      "Supporting multiple chains meant juggling different signing standards, gas models, and RPC providers — while keeping the UI dead simple for non-technical users.",
    solution:
      "We built a unified transaction layer that abstracts chain-specific quirks behind one signing flow, paired with a WalletConnect-based session manager and biometric-gated key storage.",
    results: [
      { label: "Chains supported", value: "6" },
      { label: "Avg. transaction time", value: "1.8s" },
      { label: "Security audits passed", value: "2/2" },
    ],
    stack: ["Solidity", "Ethers.js", "WalletConnect", "React Native"],
  },
  {
    slug: "smart-valor",
    company: "Smart Valor",
    title: "Web3 AI market intelligence platform",
    tags: ["Web3 AI", "Fintech Platform", "B2B SaaS"],
    image: "/assets/projects/project-smartvalor.png",
    imageAlt: "Smart Valor landing page",
    accentColor: "#f0650a",
    year: "2024",
    category: "Fintech Platform",
    overview:
      "Smart Valor set out to give retail and institutional investors an AI-driven read on crypto markets, backed by real on-chain data instead of sentiment alone.",
    challenge:
      "The team needed to process massive volumes of on-chain and market data in near real time, then surface it through an interface non-technical investors could actually use.",
    solution:
      "We designed a data pipeline that ingests on-chain events via indexers, feeds them into a scoring model, and renders the output through a clean dashboard with plain-language insights.",
    results: [
      { label: "Data points processed / day", value: "40M+" },
      { label: "Model latency", value: "<400ms" },
      { label: "Beta users onboarded", value: "3,200" },
    ],
    stack: ["Python", "PostgreSQL", "GraphQL", "React"],
  },
  {
    slug: "citadao",
    company: "CitaDAO",
    title: "Real-world asset liquidity pools dashboard",
    tags: ["DeFi Dashboard", "Web3 SaaS", "B2B"],
    image: "/assets/projects/project-citadao.png",
    imageAlt: "CitaDAO liquidity pools dashboard",
    accentColor: "#1e5aff",
    year: "2023",
    category: "DeFi Dashboard",
    overview:
      "CitaDAO tokenizes real-world assets and needed a dashboard that made complex liquidity pool mechanics legible to both DeFi natives and traditional investors.",
    challenge:
      "Pool APRs, TVL, and allocation data changed by the block, and the existing interface buried the numbers investors actually cared about.",
    solution:
      "We rebuilt the dashboard around a live-updating pool table, added position-level breakdowns, and audited every smart contract touching pool funds before launch.",
    results: [
      { label: "TVL tracked", value: "$18M+" },
      { label: "Active pools", value: "24" },
      { label: "Page load time", value: "0.6s" },
    ],
    stack: ["Solidity", "Chainlink", "Next.js", "The Graph"],
  },
  {
    slug: "cryptoproject",
    company: "CryptoProject",
    title: "Non-custodial DeFi trading platform",
    tags: ["DeFi Platform", "Web3 SaaS", "B2C"],
    image: "/assets/projects/project-cryptoproject.png",
    imageAlt: "CryptoProject landing page",
    accentColor: "#2dbe8c",
    year: "2023",
    category: "DeFi Platform",
    overview:
      "CryptoProject wanted a trading platform that combined the performance of a centralized exchange with the trust guarantees of self-custody.",
    challenge:
      "Order execution needed to feel instant while every trade settled fully on-chain, with no custodial risk and no hidden intermediary.",
    solution:
      "We implemented a hybrid order-routing engine with on-chain settlement, hardened the core contracts through two independent audits, and shipped a real-time trading UI.",
    results: [
      { label: "Trades processed", value: "120K+" },
      { label: "Uptime", value: "99.98%" },
      { label: "Avg. slippage", value: "<0.3%" },
    ],
    stack: ["Solidity", "Hardhat", "WebSocket", "React"],
  },
];
