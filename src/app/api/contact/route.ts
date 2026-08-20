import { NextResponse } from "next/server";
import {
  CONTACT_METHOD_LABELS,
  isContactMethod,
  validateContactForm,
  type ContactFormInput,
} from "@/shared/lib/contactForm";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);

  if (!isRecord(body)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const input: ContactFormInput = {
    name: asString(body.name),
    contactMethod: asString(body.contactMethod),
    contact: asString(body.contact),
    message: asString(body.message),
    company: asString(body.company),
  };

  // Honeypot: real visitors never fill this hidden field. Bots that do get a
  // fake success response, so they don't learn to look for a real signal.
  if (input.company.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  const errors = validateContactForm(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error(
      "Contact form: TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not configured.",
    );
    return NextResponse.json(
      { error: "Server is not configured to receive messages." },
      { status: 500 },
    );
  }

  const method = isContactMethod(input.contactMethod)
    ? input.contactMethod
    : "email";
  const methodLabel = CONTACT_METHOD_LABELS[method];

  const text = [
    "New inquiry from the AIQONZ site",
    "",
    `Name: ${input.name.trim()}`,
    `${methodLabel}: ${input.contact.trim()}`,
    "",
    "Message:",
    input.message.trim(),
  ].join("\n");

  let telegramRes: Response;
  try {
    telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      },
    );
  } catch (error) {
    console.error("Contact form: failed to reach Telegram API.", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  if (!telegramRes.ok) {
    console.error(
      "Contact form: Telegram API responded with an error.",
      await telegramRes.text().catch(() => ""),
    );
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
