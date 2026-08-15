import { Container } from "@/shared/ui/Container/Container";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./Cta.module.css";

export function Cta() {
  return (
    <section className={styles.cta}>
      <Container className={styles.inner}>
        <div className={styles.frame}>
          <span className={styles.statusBadge}>
            <span className={styles.statusDot} aria-hidden="true" />
            Open for new projects
          </span>
          <h1 className={styles.headline}>
            Your complete platform
            <br className={styles.mobileHide} />
            for the <span className={styles.accent}>Blockchain.</span>
          </h1>

          {/* <p className={styles.description}>
            Smart contracts, audits, and full-stack Web3 development — done
            right.
          </p> */}

          <div className={styles.actions}>
            <Button size="md">Start a project</Button>
            <Button size="md" variant="secondary">
              Book a call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
