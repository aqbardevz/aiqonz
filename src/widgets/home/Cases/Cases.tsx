import { Container } from "@/shared/ui/Container/Container";
import { PROJECTS } from "@/shared/lib/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Cases.module.css";

export function Cases() {
  return (
    <section className={styles.cases}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>Featured projects</h2>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.company} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
