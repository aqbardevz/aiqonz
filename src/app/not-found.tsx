import Link from "next/link";
import { Container } from "@/shared/ui/Container/Container";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <Container className={styles.notFound}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.description}>
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have
        been moved.
      </p>
      <Link href="/" className={styles.link}>
        ← Back to homepage
      </Link>
    </Container>
  );
}
