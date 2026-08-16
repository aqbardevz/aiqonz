import { Container } from "@/shared/ui/Container/Container";
import styles from "./Services.module.css";

type ServiceCard = {
  title: string;
  tags: string[];
  description: string;
  highlight?: boolean;
};

const CARDS: ServiceCard[] = [
  {
    title: "#Web2",
    tags: ["Web Development", "Backend Development", "Mobile Development", "API Integration"],
    description:
      "From backend infrastructure to polished frontends — we build fast, scalable web apps ready to grow with your business.",
  },
  {
    title: "#Web3",
    tags: ["Smart Contracts", "DeFi Development", "NFT Development", "Security Audits"],
    description:
      "Security-first blockchain engineering — audited smart contracts, DeFi protocols, and infrastructure built to handle real value.",
    highlight: true,
  },
  {
    title: "#Design",
    tags: ["UI/UX Design", "Web Design", "Branding", "Product Design"],
    description:
      "Interfaces users trust and identities that stand out — from the first wireframe to the final pixel.",
  },
];

export function Services() {
  return (
    <section className={styles.services}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>Our Services</h2>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article
              key={card.title}
              className={
                card.highlight
                  ? `${styles.card} ${styles.cardHighlight}`
                  : styles.card
              }
            >
              <h3 className={styles.cardTitle}>{card.title}</h3>

              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className={styles.description}>{card.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
