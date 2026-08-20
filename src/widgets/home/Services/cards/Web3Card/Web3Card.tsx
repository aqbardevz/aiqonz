import { LuArrowRight } from "react-icons/lu";
import {
  NetworkBitcoin,
  NetworkEthereum,
  NetworkSolana,
  NetworkTon,
} from "@web3icons/react";
import sharedStyles from "../../Services.module.css";
import styles from "./Web3Card.module.css";

const TAGS = [
  "Smart Contracts",
  "DeFi Development",
  "NFT Development",
  "Security Audits",
];

export function Web3Card() {
  return (
    <article
      className={`${sharedStyles.card} ${sharedStyles.cardHighlight} card-root`}
    >
      <div className={sharedStyles.cardHeader}>
        <h3 className={sharedStyles.cardTitle}>#WEB.3</h3>
        <span className={sharedStyles.cardArrow} aria-hidden="true">
          <LuArrowRight />
        </span>
      </div>

      <div className={sharedStyles.tags}>
        {TAGS.map((tag) => (
          <span key={tag} className={sharedStyles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div
        className={`${sharedStyles.imagePlaceholder} ${sharedStyles.imagePlaceholderDark}`}
      >
        <span
          className={`${styles.floatIcon} ${styles.floatBehind} ${styles.floatTopLeft}`}
          aria-hidden="true"
        >
          <NetworkEthereum
            variant="background"
            className={styles.floatIconSvg}
          />
        </span>

        <div className={styles.floatIcons} aria-hidden="true">
          <span className={`${styles.floatIcon} ${styles.floatTopRight}`}>
            <NetworkBitcoin
              variant="background"
              className={styles.floatIconSvg}
            />
          </span>
          <span className={`${styles.floatIcon} ${styles.floatBottomLeft}`}>
            <NetworkSolana
              variant="background"
              className={styles.floatIconSvg}
            />
          </span>
          <span className={`${styles.floatIcon} ${styles.floatBottomRight}`}>
            <NetworkTon
              variant="background"
              className={styles.floatIconSvg}
            />
          </span>
        </div>

        <img
          src="/assets/images/crypto-wallet-demo.png"
          alt=""
          className={styles.walletImage}
        />
      </div>
    </article>
  );
}
