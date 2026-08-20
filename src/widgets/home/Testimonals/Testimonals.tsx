"use client";

import { useRef } from "react";
import { Container } from "@/shared/ui/Container/Container";
import styles from "./Testimonals.module.css";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
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

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function NavArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "prev" ? (
        <path d="M19 12H5M11 6l-6 6 6 6" />
      ) : (
        <path d="M5 12h14M13 6l6 6-6 6" />
      )}
    </svg>
  );
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "aiqonz shipped our audited smart contract in record time. Sharp, fast, and genuinely careful about security.",
    name: "Alex Rivera",
    role: "CEO of Nexchain",
  },
  {
    quote:
      "We've seen incredible results with aiqonz. Their expertise and dedication are unmatched.",
    name: "Priya Nair",
    role: "CTO of Mintlayer",
  },
  {
    quote:
      "Their team is highly professional, and their protocol architecture completely transformed how we scale.",
    name: "Maria Chen",
    role: "CTO of Loopfi",
  },
  {
    quote:
      "We're extremely satisfied with aiqonz. Their audit caught issues we'd completely missed.",
    name: "Daniel Kim",
    role: "Founder of Vaultly",
  },
  {
    quote:
      "aiqonz has been a key partner in our DeFi launch — rock-solid contracts, zero surprises.",
    name: "Sara Yilmaz",
    role: "CEO of Driftmark",
  },
  {
    quote:
      "aiqonz has been a true game-changer for us. Their expertise and commitment to excellence made a real impact on our business.",
    name: "Noah Bennett",
    role: "CTO of Spectra",
  },
];

export function Testimonals() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "prev" | "next") {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!viewport || !track || !firstCard) return;

    // Measure the actual rendered card width + gap instead of a hardcoded
    // pixel amount, so one click always advances exactly one card — at
    // any breakpoint, without the two staying in sync by hand.
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const amount = firstCard.offsetWidth + gap;

    viewport.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  }

  const navButtons = (
    <>
      <button
        type="button"
        className={styles.navButton}
        aria-label="Previous testimonial"
        onClick={() => scroll("prev")}
      >
        <NavArrowIcon direction="prev" />
      </button>
      <button
        type="button"
        className={styles.navButton}
        aria-label="Next testimonial"
        onClick={() => scroll("next")}
      >
        <NavArrowIcon direction="next" />
      </button>
    </>
  );

  return (
    <section className={styles.testimonals}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>What our clients say</h2>

          <div className={styles.navButtons}>{navButtons}</div>
        </div>

        <p className={styles.subtitle}>
          Hear what our clients have to say about working with aiqonz.
        </p>
      </Container>

      <div className={styles.sliderViewport} ref={viewportRef}>
        <div className={styles.slider} ref={trackRef}>
          {TESTIMONIALS.map((card) => (
            <article key={card.name} className={styles.card}>
              <blockquote className={styles.quote}>
                &ldquo;{card.quote}&rdquo;
              </blockquote>

              <a href="#" className={styles.caseStudyLink}>
                Case Study
                <ArrowIcon />
              </a>

              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">
                  {initials(card.name)}
                </span>
                <div>
                  <div className={styles.name}>{card.name}</div>
                  <div className={styles.role}>{card.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.navButtonsMobile}>{navButtons}</div>

      {/* <Container>
        <div className={styles.helpBanner}>
          <span className={styles.helpIcon} aria-hidden="true">
            <ChatIcon />
          </span>
          <p className={styles.helpText}>
            Looking for help defining what you need?
          </p>
          <a href="#" className={styles.helpButton}>
            Contact us
          </a>
        </div>
      </Container> */}
    </section>
  );
}
