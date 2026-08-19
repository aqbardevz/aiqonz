import { LuArrowRight } from "react-icons/lu";
import { Container } from "@/shared/ui/Container/Container";
import styles from "./Services.module.css";

type ServiceCard = {
  title: string;
  tags: string[];
  highlight?: boolean;
};

const CARDS: ServiceCard[] = [
  {
    title: "#Web2",
    tags: [
      "Web Development",
      "Backend Development",
      "Mobile Development",
      "API Integration",
    ],
  },
  {
    title: "#Web3",
    tags: [
      "Smart Contracts",
      "DeFi Development",
      "NFT Development",
      "Security Audits",
    ],
    highlight: true,
  },
  {
    title: "#Design",
    tags: ["UI/UX Design", "Web Design", "Branding", "Product Design"],
  },
];

export function Services() {
  return (
    <section className={styles.services}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>
          We design, build, and integrate systems that drive growth
        </h2>

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
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <span className={styles.cardArrow} aria-hidden="true">
                  <LuArrowRight />
                </span>
              </div>

              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.imagePlaceholder} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
