import { Container } from "@/shared/ui/Container/Container";
import styles from "./LegalPage.module.css";

type Section = {
  heading: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  updatedAt: string;
  sections: Section[];
};

export function LegalPage({ title, updatedAt, sections }: LegalPageProps) {
  return (
    <section className={styles.legal}>
      <Container className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.updated}>Last updated: {updatedAt}</p>

        <div className={styles.notice}>
          This page is a placeholder. It does not constitute a real,
          legally binding {title.toLowerCase()} — replace this content with
          your actual policy, reviewed by counsel, before launch.
        </div>

        <div className={styles.content}>
          {sections.map((section) => (
            <div key={section.heading} className={styles.section}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              <p className={styles.sectionBody}>{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
