import { Container } from "@/shared/ui/Container/Container";
import styles from "./LegalPage.module.css";

type ListItem = string | { label: string; text: string };

type SectionBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: ListItem[] };

type Section = {
  heading: string;
  blocks: SectionBlock[];
};

type LegalPageProps = {
  title: string;
  updatedAt: string;
  intro?: string[];
  sections: Section[];
  closingNote?: string;
};

export function LegalPage({
  title,
  updatedAt,
  intro,
  sections,
  closingNote,
}: LegalPageProps) {
  return (
    <section className={styles.legal}>
      <Container className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.updated}>Last updated: {updatedAt}</p>

        {intro && intro.length > 0 && (
          <div className={styles.intro}>
            {intro.map((paragraph) => (
              <p key={paragraph} className={styles.introParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <div className={styles.content}>
          {sections.map((section) => (
            <div key={section.heading} className={styles.section}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              {section.blocks.map((block, index) =>
                block.type === "paragraph" ? (
                  <p key={index} className={styles.sectionBody}>
                    {block.text}
                  </p>
                ) : (
                  <ul key={index} className={styles.list}>
                    {block.items.map((item) => {
                      const key = typeof item === "string" ? item : item.label;
                      return (
                        <li key={key} className={styles.listItem}>
                          {typeof item === "string" ? (
                            item
                          ) : (
                            <>
                              <strong>{item.label}</strong> — {item.text}
                            </>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ),
              )}
            </div>
          ))}
        </div>

        {closingNote && <p className={styles.closingNote}>{closingNote}</p>}
      </Container>
    </section>
  );
}
