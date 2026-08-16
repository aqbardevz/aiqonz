import { Container } from "@/shared/ui/Container/Container";
import styles from "./Cases.module.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type Project = {
  company: string;
  title: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
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
                <Link href="#" className={styles.previewOverlay}>
                  About Project
                  <GoArrowUpRight />
                </Link>
              </div>

              <div className={styles.body}>
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
