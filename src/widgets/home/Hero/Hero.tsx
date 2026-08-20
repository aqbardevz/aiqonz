import { Container } from "@/shared/ui/Container/Container";
import { Button } from "@/shared/ui/Button/Button";
import { StackMarquee } from "@/widgets/home/StackMarquee/StackMarquee";
import { HandsField } from "./HandsField/HandsField";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.handsField}>
          <HandsField />
        </div>

        <div className={styles.content}>
          <h1 className={styles.headline}>
            Your <span className={styles.accent}>full-cycle</span>
            <br className={styles.breakMobile} /> partner
            <br className={styles.breakDesktop} /> in the
            <br className={styles.breakMobile} />{" "}
            <span className={styles.accent2}>Web3 world</span>
          </h1>

          <p className={styles.description}>
            aiqonz is a team of blockchain engineers and security researchers
            helping startups ship smart contracts, DeFi protocols, and audited
            infrastructure
          </p>

          <div className={styles.actions}>
            <Button size="lg">View our cases</Button>
            <Button size="lg" variant="secondary">
              Book a call
            </Button>
          </div>
        </div>

        <div className={styles.marqueeSlot}>
          <StackMarquee />
        </div>
      </div>
    </section>
  );
}
