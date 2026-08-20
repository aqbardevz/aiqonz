// Validation shared by the client form (inline feedback) and the /api/contact
// route (the source of truth — the client check alone is trivially bypassed).

export type ContactMethod = "email" | "telegram" | "whatsapp";

export const CONTACT_METHOD_LABELS: Record<ContactMethod, string> = {
  email: "Email",
  telegram: "Telegram",
  whatsapp: "WhatsApp",
};

export type ContactFormInput = {
  name: string;
  contactMethod: string;
  contact: string;
  message: string;
  /** Honeypot — real visitors never see or fill this field. */
  company: string;
};

export type ContactFormErrors = Partial<
  Record<"name" | "contact" | "message", string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEGRAM_RE = /^@?[a-zA-Z][a-zA-Z0-9_]{4,31}$/;

export function isContactMethod(value: string): value is ContactMethod {
  return value === "email" || value === "telegram" || value === "whatsapp";
}

export function validateName(name: string): string | undefined {
  const trimmed = name.trim();
  if (!trimmed) return "Please tell us your name.";
  if (trimmed.length < 2) return "Name looks too short.";
  if (trimmed.length > 80) return "Name is too long.";
  return undefined;
}

export function validateContact(
  method: ContactMethod,
  value: string,
): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "This field is required.";

  if (method === "email") {
    if (trimmed.length > 254 || !EMAIL_RE.test(trimmed)) {
      return "Enter a valid email address.";
    }
    return undefined;
  }

  if (method === "telegram") {
    if (!TELEGRAM_RE.test(trimmed)) {
      return "Enter a valid Telegram username (5–32 characters, e.g. @username).";
    }
    return undefined;
  }

  // whatsapp
  const digits = trimmed.replace(/\D/g, "");
  if (!/^[0-9()+\-\s]+$/.test(trimmed) || digits.length < 7 || digits.length > 15) {
    return "Enter a valid phone number, digits only aside from +, -, ( ).";
  }
  return undefined;
}

export function validateMessage(message: string): string | undefined {
  const trimmed = message.trim();
  if (!trimmed) return "Tell us a bit about your project.";
  if (trimmed.length < 10) return "A few more details would help (10+ characters).";
  if (trimmed.length > 3000) return "Message is too long (max 3000 characters).";
  return undefined;
}

export function validateContactForm(
  input: Pick<ContactFormInput, "name" | "contactMethod" | "contact" | "message">,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const nameError = validateName(input.name);
  if (nameError) errors.name = nameError;

  const method: ContactMethod = isContactMethod(input.contactMethod)
    ? input.contactMethod
    : "email";
  const contactError = validateContact(method, input.contact);
  if (contactError) errors.contact = contactError;

  const messageError = validateMessage(input.message);
  if (messageError) errors.message = messageError;

  return errors;
}
