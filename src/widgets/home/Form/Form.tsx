"use client";

import { useState } from "react";
import { Container } from "@/shared/ui/Container/Container";
import styles from "./Form.module.css";

const CHECKLIST = [
  "Expect a response from us within 24 hours",
  "We're happy to sign an NDA upon request.",
  "Get access to a team of dedicated product specialists.",
];

const BUDGET_OPTIONS = [
  "Less than $5K",
  "$5K - $10K",
  "$10K - $20K",
  "$20K - $50K",
  "More than $50K",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.3 2.3 4.7-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 13l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Form() {
  const [budget, setBudget] = useState<string | null>(null);

  return (
    <section className={styles.form}>
      <Container className={styles.card}>
        <div className={styles.info}>
          <span className={styles.badge}>Claim a $799 Consultation, on Us!</span>

          <h2 className={styles.headline}>
            Enhance Your Brand Potential
            <span className={styles.accent}> At No Cost!</span>
          </h2>

          <ul className={styles.checklist}>
            {CHECKLIST.map((point) => (
              <li key={point} className={styles.checklistItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className={styles.founder}>
            <div className={styles.founderPhoto} aria-hidden="true">
              AV
            </div>
            <div className={styles.founderName}>Adrian Voss</div>
            <div className={styles.founderRole}>Co-Founder &amp; CTO</div>

            <div className={styles.phone}>
              <PhoneIcon />
              +1 (716) 503-6335
            </div>
            <a href="#" className={styles.callLink}>
              Book a Call Directly
            </a>
          </div>
        </div>

        <form className={styles.fields}>
          <label className={styles.field}>
            <span className={styles.label}>Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className={styles.input}
            />
          </label>

          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>Your Email</span>
              <input
                type="email"
                name="email"
                placeholder="yourmail@gmail.com"
                className={styles.input}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Whatsapp Number</span>
              <input
                type="tel"
                name="phone"
                placeholder="123 456 7890"
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.field}>
            <span className={styles.label}>Project Budget</span>
            <div className={styles.budgetGrid}>
              {BUDGET_OPTIONS.map((option) => {
                const isActive = budget === option;
                return (
                  <button
                    key={option}
                    type="button"
                    className={
                      isActive
                        ? `${styles.budgetOption} ${styles.budgetOptionActive}`
                        : styles.budgetOption
                    }
                    aria-pressed={isActive}
                    onClick={() => setBudget(option)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Project Details</span>
            <textarea
              name="details"
              rows={4}
              placeholder="I want to redesign my website.."
              className={styles.textarea}
            />
          </label>

          <button type="submit" className={styles.submit}>
            Let&rsquo;s Connect
            <ArrowIcon />
          </button>
        </form>
      </Container>
    </section>
  );
}
