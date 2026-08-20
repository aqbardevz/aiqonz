"use client";

import { useState } from "react";
import Link from "next/link";
import { siTelegram, siWhatsapp } from "simple-icons";
import {
  LuGauge,
  LuSignpostBig,
  LuHandshake,
  LuHeadphones,
  LuTrash2,
  LuImage,
  LuMail,
} from "react-icons/lu";
import { Container } from "@/shared/ui/Container/Container";
import { XIcon, LinkedInIcon } from "@/widgets/layout/Footer/SocialIcons";
import styles from "./Form.module.css";

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={siTelegram.path} />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={siWhatsapp.path} />
    </svg>
  );
}

const PERKS = [
  {
    Icon: LuGauge,
    title: "Quick response.",
    text: "We'll reply within 3 hours to discuss your goals and next steps.",
  },
  {
    Icon: LuSignpostBig,
    title: "Clear next steps.",
    text: "After a quick call, you'll get a clear plan, timeline, and scope — no guesswork.",
  },
  {
    Icon: LuHandshake,
    title: "Direct access.",
    text: "You'll work directly with the founder — no account managers, no middlemen.",
  },
];

const CONTACT_METHODS = [
  {
    key: "email",
    label: "Email",
    Icon: LuMail,
    type: "email",
    placeholder: "your@email.com",
  },
  {
    key: "telegram",
    label: "Telegram",
    Icon: TelegramIcon,
    type: "text",
    placeholder: "@username",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    Icon: WhatsAppIcon,
    type: "tel",
    placeholder: "+1 234 567 8900",
  },
];

export function Form() {
  const [selected, setSelected] = useState<string | null>(null);
  const [contactMethod, setContactMethod] = useState(CONTACT_METHODS[0].key);
  const activeMethod =
    CONTACT_METHODS.find((method) => method.key === contactMethod) ??
    CONTACT_METHODS[0];

  return (
    <section className={styles.form}>
      <Container className={styles.grid}>
        <div className={styles.info}>
          <h2 className={styles.headline}>Let&rsquo;s talk</h2>

          <p className={styles.description}>
            <span className={styles.descriptionStrong}>
              Have an idea, a product, or just a question?
            </span>{" "}
            Tell us what you&rsquo;re building.
          </p>

          <ul className={styles.perks}>
            {PERKS.map(({ Icon, title, text }) => (
              <li key={title} className={styles.perk}>
                <span className={styles.perkIcon} aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <div className={styles.perkTitle}>{title}</div>
                  <p className={styles.perkText}>{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.contact}>
            <img
              src="/assets/images/founder.png"
              alt="Akbar"
              className={styles.contactPhoto}
            />

            <div className={styles.contactBody}>
              <div className={styles.contactNameRow}>
                <div>
                  <div className={styles.contactName}>Akbar K.</div>
                  <div className={styles.contactRole}>Founder of Aiqonz</div>
                </div>
              </div>

              <a
                href="https://t.me/aqbardevz"
                target="_blank"
                rel="noreferrer"
                className={styles.telegramCta}
              >
                <TelegramIcon />
                <span className={styles.telegramCtaFull}>
                  Message me directly on Telegram
                </span>
                <span className={styles.telegramCtaShort}>
                  Message me on TG
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardHeadline}>
            Have a project
            <span className={styles.cardHeadlineMuted}> in mind?</span>
          </h3>

          <form className={styles.fields}>
            <label className={styles.field}>
              <span className={styles.label}>
                How should we call you?
                <span className={styles.required}>*</span>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={styles.input}
              />
            </label>

            <div className={styles.field}>
              <span className={styles.label}>Preferred contact method</span>
              <div className={styles.methodOptions}>
                {CONTACT_METHODS.map(({ key, label, Icon }) => {
                  const isActive = contactMethod === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-label={label}
                      aria-pressed={isActive}
                      className={
                        isActive
                          ? `${styles.methodOption} ${styles.methodOptionActive}`
                          : styles.methodOption
                      }
                      onClick={() => setContactMethod(key)}
                    >
                      <Icon />
                      {isActive && (
                        <span className={styles.methodOptionLabel}>
                          {label}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>
                {activeMethod.label}
                <span className={styles.required}>*</span>
              </span>
              <input
                type={activeMethod.type}
                name="contact"
                placeholder={activeMethod.placeholder}
                className={styles.input}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>
                Message<span className={styles.required}>*</span>
              </span>
              <input
                type="text"
                name="message"
                placeholder="Your message"
                className={styles.input}
              />
            </label>

            <button type="submit" className={styles.submit}>
              Send Message
            </button>

            <p className={styles.legal}>
              By submitting, you agree to our{" "}
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/cookie-policy" className={styles.legalLink}>
                Cookie Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
