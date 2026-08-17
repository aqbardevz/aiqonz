import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import type { Project } from "@/shared/lib/projects";
import styles from "./Cases.module.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.preview}>
        <img
          src={project.image}
          alt={project.imageAlt}
          className={styles.previewImage}
        />
        <Link href={`/cases/${project.slug}`} className={styles.previewOverlay}>
          About Project
          <GoArrowUpRight />
        </Link>
      </div>

      <div className={styles.body}>
        <h3 className={styles.cardTitle}>{project.title}</h3>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
