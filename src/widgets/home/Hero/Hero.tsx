import { Container } from "@/shared/ui/Container/Container";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./Hero.module.css";

function PlayIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <span className={styles.badge}>Web3 Development Studio</span>

        <h1 className={styles.headline}>
          Building secure products for the{" "}
          <span className={styles.accent}>Web3</span> economy.
        </h1>

        <p className={styles.description}>
          aiqonz is a team of blockchain engineers and security researchers
          helping startups ship smart contracts, DeFi protocols, and audited
          infrastructure.
        </p>

        <div className={styles.actions}>
          <Button size="md">Start a project</Button>
          <Button size="md" variant="secondary">
            Book a call
          </Button>
        </div>

        <div className={styles.videoPlaceholder}>
          <span className={styles.playButton} aria-hidden="true">
            <PlayIcon />
          </span>
        </div>
      </Container>
    </section>
  );
}
