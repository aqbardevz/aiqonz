"use client";

import { useState } from "react";
import { Container } from "@/shared/ui/Container/Container";
import styles from "./Faq.module.css";

type FaqItem = { question: string; answer: string };

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is aiqonz?",
    answer:
      "aiqonz is a Web3 development studio specializing in smart contracts, security audits, DeFi, and NFT development. We help teams ship secure, production-ready blockchain products, fast.",
  },
  {
    question: "Which blockchains do you work with?",
    answer:
      "We build on Ethereum, Solana, Polygon, and most major EVM-compatible chains, plus emerging L2s. If your chain isn’t listed, just ask.",
  },
  {
    question: "Do you audit smart contracts?",
    answer:
      "Yes. Our security audits cover common vulnerabilities, gas optimization, and formal verification for critical contracts.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most smart contract builds ship in 2–6 weeks depending on scope; audits typically take 1–2 weeks.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a call or send us a brief. We’ll scope your project and get back to you within 24 hours.",
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
