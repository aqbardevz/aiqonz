import { Container } from "@/shared/ui/Container/Container";
import { TEAM } from "@/shared/lib/team";
import styles from "./Team.module.css";

const ROSTER = Object.entries(TEAM)
  .filter(([key]) => key !== "client")
  .map(([, member]) => member);

export function Team() {
  return (
    <section className={styles.team}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>Meet the Team</h2>

        <div className={styles.grid}>
          {ROSTER.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.photoWrap}>
                <img
                  src={member.photo}
                  alt={member.name}
                  className={styles.photo}
                />
              </div>

              <div className={styles.info}>
                <div className={styles.name}>{member.name}</div>
                <div className={styles.role}>{member.title}</div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
