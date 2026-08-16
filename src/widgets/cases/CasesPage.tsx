import { Container } from "@/shared/ui/Container/Container";
import { PROJECTS } from "@/shared/lib/projects";
import { ProjectCard } from "@/widgets/home/Cases/ProjectCard";
import caseStyles from "@/widgets/home/Cases/Cases.module.css";
import styles from "./CasesPage.module.css";
import { Cta } from "../layout/Cta/Cta";
import { Faq } from "../home/Faq/Faq";
import { Form } from "../home/Form/Form";
import { Testimonals } from "../home/Testimonals/Testimonals";

export function CasesPage() {
  return (
    <section className={styles.page}>
      <Container className={styles.inner}>
        <span className={styles.badge}>Our Work</span>
        <h1 className={styles.title}>Case studies</h1>
        <p className={styles.description}>
          A closer look at the products we&rsquo;ve helped teams design, build,
          and ship.
        </p>

        <div className={caseStyles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.company} project={project} />
          ))}
        </div>
      </Container>
      <Testimonals />
      <Form />
      <Faq />
    </section>
  );
}
