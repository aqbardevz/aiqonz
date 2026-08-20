import type { CSSProperties } from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import type { Project } from "@/shared/lib/projects";
import styles from "./Cases.module.css";

export function ProjectCard({ project }: { project: Project }) {
  const [primaryStat, secondaryStat] = project.results;
  const cardStyle = {
    "--project-accent": project.accentColor,
  } as CSSProperties;

  return (
    <Link
      href={`/cases/${project.slug}`}
      className={styles.card}
      style={cardStyle}
    >
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <div className={styles.badges}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.badge}>
                {tag}
              </span>
            ))}
          </div>

          <h3 className={styles.cardTitle}>{project.title}</h3>

          <span className={styles.cardCta}>
            View case study
            <LuArrowRight className={styles.cardCtaIcon} size={16} />
          </span>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{primaryStat.value}</span>
            <span className={styles.statLabel}>{primaryStat.label}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{secondaryStat.value}</span>
            <span className={styles.statLabel}>{secondaryStat.label}</span>
          </div>
        </div>
      </div>

      <div className={styles.cardImage}>
        <img src={project.images[0]} alt={project.imageAlt} />
      </div>
    </Link>
  );
}
