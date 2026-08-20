"use client";

import { useState } from "react";
import { Container } from "@/shared/ui/Container/Container";
import styles from "./Faq.module.css";

type FaqItem = { question: string; answer: string };

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is aiqonz?",
    answer:
      "aiqonz is a full-cycle digital studio. We build Web2 products, Web3 solutions — smart contracts, DeFi, NFTs — and everything in between, from UI/UX design to production-ready code.",
  },
  {
    question: "Which blockchains do you work with?",
    answer:
      "Ethereum, Solana, Polygon, and most major EVM-compatible chains, plus emerging L2s. Don't see your chain? Just ask — we probably support it.",
  },
  {
    question: "Do you audit smart contracts?",
    answer:
      "Yes. Our audits cover common vulnerabilities, gas optimization, and thorough manual review before anything goes to mainnet.",
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Yes — that's the point. One team handles your UI/UX, frontend, backend, and smart contracts, so nothing gets lost between handoffs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most builds ship in 2–6 weeks depending on scope. Audits usually take 1–2 weeks. You'll get a clear timeline after our first call.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us a brief or book a call. We'll reply within 3 hours and map out the scope, timeline, and next steps.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faq}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.subtitle}>
          Find answers to common questions about our Web3 development
        </p>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = index === openIndex;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={item.question} className={styles.item}>
                <button
                  type="button"
                  id={questionId}
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={styles.bubble}>{item.question}</span>
                  <span
                    className={
                      isOpen
                        ? `${styles.toggle} ${styles.toggleOpen}`
                        : styles.toggle
                    }
                    aria-hidden="true"
                  >
                    <span className={styles.toggleLineH} />
                    <span className={styles.toggleLineV} />
                  </span>
                </button>

                <div
                  className={
                    isOpen
                      ? `${styles.answerWrap} ${styles.answerWrapOpen}`
                      : styles.answerWrap
                  }
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                >
                  <div className={styles.answerInner}>
                    <div className={styles.answerRow}>
                      <p className={styles.answer}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
