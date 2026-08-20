import { Container } from "@/shared/ui/Container/Container";
import { Web2Card } from "./cards/Web2Card/Web2Card";
import { Web3Card } from "./cards/Web3Card/Web3Card";
import { UxUiCard } from "./cards/UxUiCard/UxUiCard";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section className={styles.services}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>
          From smart contracts to pixel-perfect UI. We've got you covered.
        </h2>

        <div className={styles.grid}>
          <Web2Card />
          <Web3Card />
          <UxUiCard />
        </div>
      </Container>
    </section>
  );
}
