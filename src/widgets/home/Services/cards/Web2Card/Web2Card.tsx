import { LuArrowRight } from "react-icons/lu";
import { siDjango, siNextdotjs, siPython, siTypescript } from "simple-icons";
import sharedStyles from "../../Services.module.css";
import styles from "./Web2Card.module.css";

const TAGS = [
  "Web Development",
  "Backend Development",
  "Mobile Development",
  "API Integration",
];

function BrandIcon({ path, hex }: { path: string; hex: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={`#${hex}`}
      className={styles.badgeSvg}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export function Web2Card() {
  return (
    <article className={`${sharedStyles.card} card-root`}>
      <div className={sharedStyles.cardHeader}>
        <h3 className={sharedStyles.cardTitle}>#WEB.2</h3>
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

      <div className={sharedStyles.imagePlaceholder}>
        <div className={styles.badges} aria-hidden="true">
          <span className={`${styles.badge} ${styles.badgeTopLeft}`}>
            <BrandIcon path={siNextdotjs.path} hex={siNextdotjs.hex} />
          </span>
          <span className={`${styles.badge} ${styles.badgeTopRight}`}>
            <BrandIcon path={siTypescript.path} hex={siTypescript.hex} />
          </span>
          <span className={`${styles.badge} ${styles.badgeMidRight}`}>
            <BrandIcon path={siPython.path} hex={siPython.hex} />
          </span>
          <span className={`${styles.badge} ${styles.badgeBottomRight}`}>
            <BrandIcon path={siDjango.path} hex={siDjango.hex} />
          </span>
        </div>

        <img
          src="/assets/images/website-mockup.png"
          alt=""
          className={styles.mockupImage}
        />
      </div>
    </article>
  );
}
