import {
  LuArrowRight,
  LuCircle,
  LuMousePointer2,
  LuStar,
  LuTriangle,
} from "react-icons/lu";
import {
  NetworkBitcoin,
  NetworkEthereum,
  NetworkSolana,
  NetworkTon,
} from "@web3icons/react";
import {
  siDjango,
  siFigma,
  siFramer,
  siNextdotjs,
  siPython,
  siTypescript,
} from "simple-icons";
import { Container } from "@/shared/ui/Container/Container";
import styles from "./Services.module.css";

function BrandIcon({ path, hex }: { path: string; hex: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={`#${hex}`}
      className={styles.web2IconSvg}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

type ServiceCard = {
  title: string;
  tags: string[];
  highlight?: boolean;
  image?: string;
  techIcons?: boolean;
  designMockup?: boolean;
};

const CARDS: ServiceCard[] = [
  {
    title: "#WEB.2",
    tags: [
      "Web Development",
      "Backend Development",
      "Mobile Development",
      "API Integration",
    ],
    image: "/assets/images/website-mockup.png",
    techIcons: true,
  },
  {
    title: "#WEB.3",
    tags: [
      "Smart Contracts",
      "DeFi Development",
      "NFT Development",
      "Security Audits",
    ],
    highlight: true,
    image: "/assets/images/crypto-wallet-demo.png",
  },
  {
    title: "#UX/UI",
    tags: ["UI/UX Design", "Web Design", "Branding", "Product Design"],
    designMockup: true,
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

              <div
                className={
                  card.highlight
                    ? `${styles.imagePlaceholder} ${styles.imagePlaceholderDark}`
                    : styles.imagePlaceholder
                }
              >
                {card.highlight && (
                  <span
                    className={`${styles.floatIcon} ${styles.floatBehind} ${styles.floatTopLeft}`}
                    aria-hidden="true"
                  >
                    <NetworkEthereum
                      variant="background"
                      className={styles.floatIconSvg}
                    />
                  </span>
                )}

                {card.highlight && (
                  <div className={styles.floatIcons} aria-hidden="true">
                    <span
                      className={`${styles.floatIcon} ${styles.floatTopRight}`}
                    >
                      <NetworkBitcoin
                        variant="background"
                        className={styles.floatIconSvg}
                      />
                    </span>
                    <span
                      className={`${styles.floatIcon} ${styles.floatBottomLeft}`}
                    >
                      <NetworkSolana
                        variant="background"
                        className={styles.floatIconSvg}
                      />
                    </span>
                    <span
                      className={`${styles.floatIcon} ${styles.floatBottomRight}`}
                    >
                      <NetworkTon
                        variant="background"
                        className={styles.floatIconSvg}
                      />
                    </span>
                  </div>
                )}

                {card.techIcons && (
                  <div className={styles.web2Icons} aria-hidden="true">
                    <span
                      className={`${styles.web2Icon} ${styles.web2IconTopLeft}`}
                    >
                      <BrandIcon
                        path={siNextdotjs.path}
                        hex={siNextdotjs.hex}
                      />
                    </span>
                    <span
                      className={`${styles.web2Icon} ${styles.web2IconTopRight}`}
                    >
                      <BrandIcon
                        path={siTypescript.path}
                        hex={siTypescript.hex}
                      />
                    </span>
                    <span
                      className={`${styles.web2Icon} ${styles.web2IconMidRight}`}
                    >
                      <BrandIcon path={siPython.path} hex={siPython.hex} />
                    </span>
                    <span
                      className={`${styles.web2Icon} ${styles.web2IconBottomRight}`}
                    >
                      <BrandIcon path={siDjango.path} hex={siDjango.hex} />
                    </span>
                  </div>
                )}

                {card.designMockup && (
                  <div className={styles.uxMockup} aria-hidden="true">
                    <div className={styles.uxStack}>
                      <div
                        className={`${styles.uxButton} ${styles.uxButtonWhite} ${styles.uxButtonSquare}`}
                      >
                        <LuCircle className={styles.uxIcon} />
                        Button
                      </div>
                      <div className={`${styles.uxHatch} ${styles.uxHatchSm}`}>
                        <span className={styles.uxHatchLabel}>8px</span>
                      </div>
                      <div
                        className={`${styles.uxButton} ${styles.uxButtonAccent} ${styles.uxButtonRound}`}
                      >
                        <LuStar className={styles.uxIconLight} />
                        Button
                      </div>
                      <div className={`${styles.uxHatch} ${styles.uxHatchLg}`}>
                        <span className={styles.uxHatchLabel}>20px</span>
                      </div>
                      <div
                        className={`${styles.uxButton} ${styles.uxButtonDark} ${styles.uxButtonPill}`}
                      >
                        <LuTriangle className={styles.uxIconLight} />
                        Button
                      </div>
                    </div>

                    <span
                      className={`${styles.uxCursor} ${styles.uxCursorDark}`}
                    >
                      <LuMousePointer2 />
                    </span>
                    <span
                      className={`${styles.uxCursor} ${styles.uxCursorAccent}`}
                    >
                      <LuMousePointer2 />
                    </span>

                    <span
                      className={`${styles.web2Icon} ${styles.uxIconFigma}`}
                    >
                      <BrandIcon path={siFigma.path} hex={siFigma.hex} />
                    </span>
                    <span
                      className={`${styles.web2Icon} ${styles.uxIconFramer}`}
                    >
                      <BrandIcon path={siFramer.path} hex={siFramer.hex} />
                    </span>
                  </div>
                )}

                {card.image && (
                  <img
                    src={card.image}
                    alt=""
                    className={card.highlight ? styles.image : styles.imageWeb2}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
