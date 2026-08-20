export type ProjectResult = { label: string; value: string };

export type ProjectTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Project = {
  slug: string;
  company: string;
  title: string;
  tags: string[];
  /** Preview/gallery screenshots. Currently the same placeholder image
   * repeated — swap in real screenshots per project ahead of launch. */
  images: string[];
  imageAlt: string;
  /** Dominant accent colour sampled from the preview image, used for a
   * faint background tint on the project card. */
  accentColor: string;
  year: string;
  category: string;
  overview: string;
  challenge: string;
  /** Short, scannable "how we worked" bullets — not another paragraph. */
  approach: string[];
  solution: string;
  results: ProjectResult[];
  /** Prose summary of `results`, for the detail page's "Result" copy
   * section — `results` itself stays structured data for ProjectCard. */
  resultsSummary: string;
  stack: string[];
  testimonial: ProjectTestimonial;
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
    images: [
      "/assets/projects/project-wallet2.png",
      "/assets/projects/project-wallet2.png",
      "/assets/projects/project-wallet2.png",
    ],
    imageAlt: "Fluxa wallet app screens",
    accentColor: "#22c55e",
    year: "2024",
    category: "DeFi Wallet",
    overview:
      "Fluxa needed a wallet that felt as fast and intuitive as a centralized exchange app, without ever holding custody of user funds.",
    challenge:
      "Supporting multiple chains meant juggling different signing standards, gas models, and RPC providers — while keeping the UI dead simple for non-technical users.",
    approach: [
      "Mapped every target chain's signing quirks before writing a single line of the abstraction layer",
      "Built the WalletConnect session manager and biometric key storage as one integrated flow, not bolted-on afterthoughts",
      "Rolled out to a small user cohort behind a feature flag before the full launch",
    ],
    solution:
      "We built a unified transaction layer that abstracts chain-specific quirks behind one signing flow, paired with a WalletConnect-based session manager and biometric-gated key storage.",
    results: [
      { label: "Chains supported", value: "6" },
      { label: "Avg. transaction time", value: "1.8s" },
      { label: "Security audits passed", value: "2/2" },
    ],
    resultsSummary:
      "Fluxa now supports six chains through one unified wallet flow, with transactions confirming in under two seconds and a clean track record across two independent security audits.",
    stack: ["Solidity", "Ethers.js", "WalletConnect", "React Native"],
    testimonial: {
      quote:
        "The wallet feels like a CEX app, but our users never have to trust us with their keys. That balance was exactly what we needed.",
      name: "Jordan Reyes",
      role: "Co-founder, Fluxa",
    },
  },
  {
    slug: "smart-valor",
    company: "Smart Valor",
    title: "Web3 AI market intelligence platform",
    tags: ["Web3 AI", "Fintech Platform", "B2B SaaS"],
    images: [
      "/assets/projects/project-smartvalor.png",
      "/assets/projects/project-smartvalor.png",
      "/assets/projects/project-smartvalor.png",
    ],
    imageAlt: "Smart Valor landing page",
    accentColor: "#f0650a",
    year: "2024",
    category: "Fintech Platform",
    overview:
      "Smart Valor set out to give retail and institutional investors an AI-driven read on crypto markets, backed by real on-chain data instead of sentiment alone.",
    challenge:
      "The team needed to process massive volumes of on-chain and market data in near real time, then surface it through an interface non-technical investors could actually use.",
    approach: [
      "Started with the indexer pipeline so the scoring model never waited on stale data",
      "Designed the dashboard around three questions investors actually ask, not every metric we could surface",
      "Ran the scoring model against 12 months of historical data before it touched a live dashboard",
    ],
    solution:
      "We designed a data pipeline that ingests on-chain events via indexers, feeds them into a scoring model, and renders the output through a clean dashboard with plain-language insights.",
    results: [
      { label: "Data points processed / day", value: "40M+" },
      { label: "Model latency", value: "<400ms" },
      { label: "Beta users onboarded", value: "3,200" },
    ],
    resultsSummary:
      "The platform now processes over 40 million data points a day with model latency under 400ms, and onboarded 3,200 beta users in its first weeks live.",
    stack: ["Python", "PostgreSQL", "GraphQL", "React"],
    testimonial: {
      quote:
        "We went from raw on-chain noise to insights our non-technical investors actually act on. The team understood the data problem as well as the design problem.",
      name: "Elena Kovacs",
      role: "Head of Product, Smart Valor",
    },
  },
  {
    slug: "citadao",
    company: "CitaDAO",
    title: "Real-world asset liquidity pools dashboard",
    tags: ["DeFi Dashboard", "Web3 SaaS", "B2B"],
    images: [
      "/assets/projects/project-citadao.png",
      "/assets/projects/project-citadao.png",
      "/assets/projects/project-citadao.png",
    ],
    imageAlt: "CitaDAO liquidity pools dashboard",
    accentColor: "#1e5aff",
    year: "2023",
    category: "DeFi Dashboard",
    overview:
      "CitaDAO tokenizes real-world assets and needed a dashboard that made complex liquidity pool mechanics legible to both DeFi natives and traditional investors.",
    challenge:
      "Pool APRs, TVL, and allocation data changed by the block, and the existing interface buried the numbers investors actually cared about.",
    approach: [
      "Rebuilt the pool table as a live-updating view instead of a page investors had to manually refresh",
      "Added position-level breakdowns so investors could see their own exposure, not just pool-wide stats",
      "Audited every contract touching pool funds before any of it shipped to production",
    ],
    solution:
      "We rebuilt the dashboard around a live-updating pool table, added position-level breakdowns, and audited every smart contract touching pool funds before launch.",
    results: [
      { label: "TVL tracked", value: "$18M+" },
      { label: "Active pools", value: "24" },
      { label: "Page load time", value: "0.6s" },
    ],
    resultsSummary:
      "The rebuilt dashboard tracks over $18M in TVL across 24 active pools, loading in well under a second — numbers investors now check without a second thought.",
    stack: ["Solidity", "Chainlink", "Next.js", "The Graph"],
    testimonial: {
      quote:
        "Investors finally trust the numbers on screen because they update in real time and every contract behind them has been audited.",
      name: "Marcus Tan",
      role: "CTO, CitaDAO",
    },
  },
  {
    slug: "cryptoproject",
    company: "CryptoProject",
    title: "Non-custodial DeFi trading platform",
    tags: ["DeFi Platform", "Web3 SaaS", "B2C"],
    images: [
      "/assets/projects/project-cryptoproject.png",
      "/assets/projects/project-cryptoproject.png",
      "/assets/projects/project-cryptoproject.png",
    ],
    imageAlt: "CryptoProject landing page",
    accentColor: "#2dbe8c",
    year: "2023",
    category: "DeFi Platform",
    overview:
      "CryptoProject wanted a trading platform that combined the performance of a centralized exchange with the trust guarantees of self-custody.",
    challenge:
      "Order execution needed to feel instant while every trade settled fully on-chain, with no custodial risk and no hidden intermediary.",
    approach: [
      "Benchmarked order-routing latency against centralized exchanges before settling on the hybrid architecture",
      "Kept settlement fully on-chain while routing orders off-chain for speed",
      "Ran two independent security audits on the core contracts ahead of launch",
    ],
    solution:
      "We implemented a hybrid order-routing engine with on-chain settlement, hardened the core contracts through two independent audits, and shipped a real-time trading UI.",
    results: [
      { label: "Trades processed", value: "120K+" },
      { label: "Uptime", value: "99.98%" },
      { label: "Avg. slippage", value: "<0.3%" },
    ],
    resultsSummary:
      "CryptoProject has processed over 120,000 trades at 99.98% uptime, with average slippage held under 0.3% since launch.",
    stack: ["Solidity", "Hardhat", "WebSocket", "React"],
    testimonial: {
      quote:
        "Order execution feels instant, settlement is fully on-chain, and we haven't had a single custody-related support ticket since launch.",
      name: "Sofia Marchetti",
      role: "Founder, CryptoProject",
    },
  },
];
