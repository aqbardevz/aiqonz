export type Project = {
  company: string;
  title: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

// Shared by the homepage "Featured projects" teaser and the full /cases
// page, so both list the same placeholder case studies instead of two
// different fictional rosters.
export const PROJECTS: Project[] = [
  {
    company: "Fluxa",
    title: "Non-custodial multi-chain wallet app",
    tags: ["DeFi Wallet", "Mobile App", "B2C"],
    image: "/assets/projects/project-wallet2.png",
    imageAlt: "Fluxa wallet app screens",
  },
  {
    company: "Smart Valor",
    title: "Web3 AI market intelligence platform",
    tags: ["Web3 AI", "Fintech Platform", "B2B SaaS"],
    image: "/assets/projects/project-smartvalor.png",
    imageAlt: "Smart Valor landing page",
  },
  {
    company: "CitaDAO",
    title: "Real-world asset liquidity pools dashboard",
    tags: ["DeFi Dashboard", "Web3 SaaS", "B2B"],
    image: "/assets/projects/project-citadao.png",
    imageAlt: "CitaDAO liquidity pools dashboard",
  },
  {
    company: "CryptoProject",
    title: "Non-custodial DeFi trading platform",
    tags: ["DeFi Platform", "Web3 SaaS", "B2C"],
    image: "/assets/projects/project-cryptoproject.png",
    imageAlt: "CryptoProject landing page",
  },
];
