"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { siTelegram, siWhatsapp } from "simple-icons";
import {
  LuGauge,
  LuSignpostBig,
  LuHandshake,
  LuMail,
  LuCheck,
} from "react-icons/lu";
import { Container } from "@/shared/ui/Container/Container";
import { Modal } from "@/shared/ui/Modal/Modal";
import styles from "./Form.module.css";
import {
  validateContactForm,
  validateName,
  validateContact,
  validateMessage,
  CONTACT_METHOD_LABELS,
  type ContactFormErrors,
  type ContactMethod,
} from "@/shared/lib/contactForm";
import { Button } from "@/shared/ui/Button/Button";

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

const CONTACT_METHODS: {
  key: ContactMethod;
  label: string;
  Icon: typeof LuMail;
  type: string;
  placeholder: string;
}[] = [
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

type FieldName = "name" | "contact" | "message";

const initialValues = { name: "", contact: "", message: "", company: "" };

export function Form() {
  const [contactMethod, setContactMethod] = useState<ContactMethod>(
    CONTACT_METHODS[0].key,
  );
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>(
    {},
  );
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<{
    name: string;
    method: ContactMethod;
    contact: string;
  } | null>(null);

  const activeMethod =
    CONTACT_METHODS.find((method) => method.key === contactMethod) ??
    CONTACT_METHODS[0];

  function validateField(field: FieldName, value: string) {
    if (field === "name") return validateName(value);
    if (field === "contact") return validateContact(contactMethod, value);
    return validateMessage(value);
  }

  function handleChange(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  }

  function handleBlur(field: FieldName) {
    return () => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, values[field]),
      }));
    };
  }

  function handleMethodChange(method: ContactMethod) {
    setContactMethod(method);
    if (touched.contact) {
      setErrors((prev) => ({
        ...prev,
        contact: validateContact(method, values.contact),
      }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formErrors = validateContactForm({
      name: values.name,
      contactMethod,
      contact: values.contact,
      message: values.message,
    });
    setErrors(formErrors);
    setTouched({ name: true, contact: true, message: true });

    if (Object.keys(formErrors).length > 0) return;

    setStatus("submitting");
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          contactMethod,
          contact: values.contact,
          message: values.message,
          company: values.company,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
          setStatus("idle");
          return;
        }
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setSubmitted({
        name: values.name,
        method: contactMethod,
        contact: values.contact,
      });
      setValues(initialValues);
      setTouched({});
      setErrors({});
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or message us directly on Telegram.",
      );
    }
  }

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

          <form className={styles.fields} onSubmit={handleSubmit} noValidate>
            <label className={styles.field}>
              <span className={styles.label}>
                How should we call you?
                <span className={styles.required}>*</span>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={
                  errors.name
                    ? `${styles.input} ${styles.inputError}`
                    : styles.input
                }
                value={values.name}
                onChange={(event) => handleChange("name", event.target.value)}
                onBlur={handleBlur("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "field-name-error" : undefined}
              />
              {errors.name && (
                <span id="field-name-error" className={styles.errorText}>
                  {errors.name}
                </span>
              )}
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
                      onClick={() => handleMethodChange(key)}
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
                className={
                  errors.contact
                    ? `${styles.input} ${styles.inputError}`
                    : styles.input
                }
                value={values.contact}
                onChange={(event) =>
                  handleChange("contact", event.target.value)
                }
                onBlur={handleBlur("contact")}
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={
                  errors.contact ? "field-contact-error" : undefined
                }
              />
              {errors.contact && (
                <span id="field-contact-error" className={styles.errorText}>
                  {errors.contact}
                </span>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.label}>
                Message<span className={styles.required}>*</span>
              </span>
              <textarea
                name="message"
                placeholder="Tell us about your project, goals, and timeline"
                rows={4}
                className={
                  errors.message
                    ? `${styles.input} ${styles.textarea} ${styles.inputError}`
                    : `${styles.input} ${styles.textarea}`
                }
                value={values.message}
                onChange={(event) =>
                  handleChange("message", event.target.value)
                }
                onBlur={handleBlur("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "field-message-error" : undefined
                }
              />
              {errors.message && (
                <span id="field-message-error" className={styles.errorText}>
                  {errors.message}
                </span>
              )}
            </label>

            {/* Honeypot — hidden from real visitors via CSS, left empty by
                them; bots that auto-fill every field trip it. */}
            <label className={styles.honeypot} aria-hidden="true">
              Company
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={values.company}
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    company: event.target.value,
                  }))
                }
              />
            </label>

            <button
              type="submit"
              className={styles.submit}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>

            {status === "error" && statusMessage && (
              <p className={styles.formError} role="alert">
                {statusMessage}
              </p>
            )}

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

      <Modal
        open={status === "success"}
        onClose={() => setStatus("idle")}
        labelledBy="contact-success-title"
        describedBy="contact-success-text"
      >
        <div className={styles.successState}>
          <span className={styles.successIcon} aria-hidden="true">
            <LuCheck size={22} />
          </span>
          <p id="contact-success-title" className={styles.successTitle}>
            Message sent
          </p>
          <p id="contact-success-text" className={styles.successText}>
            {submitted?.name ? `Thanks, ${submitted.name}! ` : "Thanks! "}
            We&rsquo;ll reply
            {submitted
              ? ` via ${CONTACT_METHOD_LABELS[submitted.method]} at ${submitted.contact}`
              : ""}{" "}
            within a few hours.
          </p>

          <a
            href="https://t.me/aqbardevz"
            target="_blank"
            rel="noreferrer"
            className={styles.successTelegramLink}
          >
            <TelegramIcon />
            Message me on Telegram instead
          </a>
        </div>
      </Modal>
    </section>
  );
}
