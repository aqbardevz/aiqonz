import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { Container } from "@/shared/ui/Container/Container";
import { PROJECTS } from "@/shared/lib/projects";
import styles from "./ProjectDetailPage.module.css";

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <Container className={styles.inner}>
        {/* <Link href="/cases" className={styles.back}>
          <LuArrowLeft />
          All projects
        </Link> */}

        <div className={styles.header}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.overview}>{project.overview}</p>

          {/* <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Client</span>
              <span className={styles.metaValue}>{project.company}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>{project.year}</span>
            </div>
            <div className={styles.metaTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div> */}
        </div>

        <img
          src={project.image}
          alt={project.imageAlt}
          className={styles.heroImage}
        />

        <div className={styles.columns}>
          <div>
            <h2 className={styles.columnHeading}>The challenge</h2>
            <p className={styles.columnText}>{project.challenge}</p>
          </div>
          <div>
            <h2 className={styles.columnHeading}>The solution</h2>
            <p className={styles.columnText}>{project.solution}</p>
          </div>
        </div>

        <div className={styles.results}>
          {project.results.map((result) => (
            <div key={result.label} className={styles.result}>
              <div className={styles.resultValue}>{result.value}</div>
              <div className={styles.resultLabel}>{result.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.stackSection}>
          <h2 className={styles.columnHeading}>Tech stack</h2>
          <div className={styles.stackList}>
            {project.stack.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
