import { Container } from "@/shared/ui/Container/Container";
import styles from "./Cases.module.css";

type Project = {
  company: string;
  location: string;
  flag: string;
  title: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    company: "Fluxa",
    location: "Lisbon, Portugal",
    flag: "🇵🇹",
    title: "Non-custodial multi-chain wallet app",
    tags: ["DeFi Wallet", "Mobile App", "B2C"],
    image: "/assets/projects/project-wallet.png",
    imageAlt: "Fluxa wallet app screens",
  },
  {
    company: "Smart Valor",
    location: "Zug, Switzerland",
    flag: "🇨🇭",
    title: "Web3 AI market intelligence platform",
    tags: ["Web3 AI", "Fintech Platform", "B2B SaaS"],
    image: "/assets/projects/project-smartvalor.png",
    imageAlt: "Smart Valor landing page",
  },
  {
    company: "CitaDAO",
    location: "Singapore",
    flag: "🇸🇬",
    title: "Real-world asset liquidity pools dashboard",
    tags: ["DeFi Dashboard", "Web3 SaaS", "B2B"],
    image: "/assets/projects/project-citadao.png",
    imageAlt: "CitaDAO liquidity pools dashboard",
  },
  {
    company: "CryptoProject",
    location: "Dubai, UAE",
    flag: "🇦🇪",
    title: "Non-custodial DeFi trading platform",
    tags: ["DeFi Platform", "Web3 SaaS", "B2C"],
    image: "/assets/projects/project-cryptoproject.png",
    imageAlt: "CryptoProject landing page",
  },
];

function CaseIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function Cases() {
  return (
    <section className={styles.cases}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>Featured projects</h2>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article key={project.company} className={styles.card}>
              <div className={styles.preview}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className={styles.previewImage}
                />
              </div>

              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.icon} aria-hidden="true">
                    <CaseIcon />
                  </span>
                  <span className={styles.company}>{project.company}</span>
                  <span className={styles.dot} aria-hidden="true">
                    |
                  </span>
                  <span className={styles.location}>
                    {project.flag} {project.location}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
