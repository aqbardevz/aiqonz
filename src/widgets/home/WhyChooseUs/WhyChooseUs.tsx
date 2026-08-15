import type { ReactElement } from "react";
import { Container } from "@/shared/ui/Container/Container";
import {
  AgencyIcon,
  CheckIcon,
  FreelancerIcon,
  ShieldIcon,
  TeamIcon,
  TemplateIcon,
  XIcon,
} from "./icons";
import styles from "./WhyChooseUs.module.css";

const METRICS = [
  "Speed",
  "Security",
  "Quality",
  "Scalability",
  "Affordability",
];

type Row = {
  title: string;
  description: string;
  Icon: (props: { size?: number }) => ReactElement;
  results: boolean[];
  highlight?: boolean;
};

const ROWS: Row[] = [
  {
    title: "In-House Team",
    description:
      "Rare and expensive Web3 security expertise to build internally.",
    Icon: TeamIcon,
    results: [false, false, false, true, false],
  },
  {
    title: "Dev Agencies",
    description: "High costs, long timelines, shallow audit expertise.",
    Icon: AgencyIcon,
    results: [false, false, true, true, false],
  },
  {
    title: "Freelancers",
    description:
      "Flexible and affordable, but lack rigor and long-term support.",
    Icon: FreelancerIcon,
    results: [false, true, false, false, true],
  },
  {
    title: "No-Code Tools",
    description: "Quick to launch, but you can't audit code you didn't write.",
    Icon: TemplateIcon,
    results: [false, false, true, true, false],
  },
  {
    title: "aiqonz",
    description:
      "Security-first blockchain engineering with full-stack delivery.",
    Icon: ShieldIcon,
    results: [true, true, true, true, true],
    highlight: true,
  },
];

export function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <Container className={styles.inner}>
        <span className={styles.badge}>Why Choose Us</span>

        <h2 className={styles.headline}>
          <span className={styles.headlineAccent}>aiqonz&rsquo;s</span>{" "}
          Alternative?
          <br />
          <span className={styles.headlineAccent}>Think</span> One More Time!
        </h2>

        <div className={styles.tableScroll}>
          <div className={styles.table}>
            <div className={styles.headerRow}>
              <span className={styles.headerCell}>Platform</span>
              {METRICS.map((metric) => (
                <span key={metric} className={styles.headerCell}>
                  {metric}
                </span>
              ))}
            </div>

            {ROWS.map((row) => (
              <div
                key={row.title}
                className={
                  row.highlight
                    ? `${styles.row} ${styles.rowHighlight}`
                    : styles.row
                }
              >
                <div className={styles.platformCell}>
                  <span className={styles.avatar}>
                    <row.Icon size={22} />
                  </span>
                  <div>
                    <div className={styles.rowTitle}>{row.title}</div>
                    <p className={styles.rowDescription}>{row.description}</p>
                  </div>
                </div>

                {row.results.map((result, index) => (
                  <div
                    key={index}
                    className={`${styles.resultCell} ${
                      result ? styles.resultYes : styles.resultNo
                    }`}
                  >
                    {result ? <CheckIcon size={24} /> : <XIcon size={24} />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
