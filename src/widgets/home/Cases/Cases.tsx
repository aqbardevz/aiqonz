import { LuAsterisk, LuRocket } from "react-icons/lu";
import { Container } from "@/shared/ui/Container/Container";
import { PROJECTS } from "@/shared/lib/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Cases.module.css";

const FEATURED_PROJECTS = PROJECTS.slice(0, 3);

export function Cases() {
  return (
    <section className={styles.cases}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>What We've Shipped</h2>

        <div className={styles.grid}>
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.company} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
