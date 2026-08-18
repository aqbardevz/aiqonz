import { Container } from "@/shared/ui/Container/Container";
import { Form } from "@/widgets/home/Form/Form";
import { Faq } from "@/widgets/home/Faq/Faq";
import styles from "./ContactsPage.module.css";

export function ContactsPage() {
  return (
    <section className={styles.page}>
      <Container className={styles.inner}>
        <span className={styles.badge}>Get in Touch</span>
        <h1 className={styles.title}>Let&rsquo;s build something</h1>
        <p className={styles.description}>
          Tell us about your project and we&rsquo;ll get back to you within 24
          hours &mdash; no account managers, straight to the founder.
        </p>
      </Container>

      <Form />
      <Faq />
    </section>
  );
}
