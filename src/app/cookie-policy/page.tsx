import type { Metadata } from "next";
import { LegalPage } from "@/shared/ui/LegalPage/LegalPage";
import { TELEGRAM_HANDLE } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How AIQONZ uses cookies and how to manage them.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updatedAt="August 21, 2026"
      intro={[
        'This Cookie Policy explains how aiqonz ("we," "us," "our") uses cookies and similar technologies on aiqonz.com (the "Site").',
      ]}
      sections={[
        {
          heading: "1. What Are Cookies",
          blocks: [
            {
              type: "paragraph",
              text: "Cookies are small text files stored on your device when you visit a website. They help the site function properly, remember your preferences, and understand how visitors use it.",
            },
          ],
        },
        {
          heading: "2. Types of Cookies We Use",
          blocks: [
            {
              type: "list",
              items: [
                {
                  label: "Essential Cookies",
                  text: "Required for the Site to function correctly (e.g., remembering form input, security features). These cannot be disabled.",
                },
                {
                  label: "Analytics Cookies",
                  text: "Help us understand how visitors interact with the Site — which pages are viewed, how long visitors stay, and where they come from. We use privacy-friendly analytics tools to measure Site performance and improve the user experience.",
                },
                {
                  label: "Preference Cookies",
                  text: "Remember basic settings, such as display preferences, if applicable.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "We do not currently use advertising or third-party marketing cookies.",
            },
          ],
        },
        {
          heading: "3. Third-Party Cookies",
          blocks: [
            {
              type: "paragraph",
              text: "Some cookies may be set by third-party services embedded on the Site (e.g., analytics providers, embedded social content such as Telegram or X/Twitter widgets). These third parties have their own privacy and cookie policies, which we encourage you to review.",
            },
          ],
        },
        {
          heading: "4. Managing Cookies",
          blocks: [
            {
              type: "paragraph",
              text: "You can control or disable cookies through your browser settings. Most browsers allow you to:",
            },
            {
              type: "list",
              items: [
                "View what cookies are stored and delete them individually",
                "Block third-party cookies",
                "Block all cookies from a specific site",
                "Block all cookies entirely",
              ],
            },
            {
              type: "paragraph",
              text: "Note that disabling essential cookies may affect the functionality of the Site.",
            },
          ],
        },
        {
          heading: "5. Changes to This Policy",
          blocks: [
            {
              type: "paragraph",
              text: 'We may update this Cookie Policy from time to time. The "Last updated" date at the top reflects the most recent revision.',
            },
          ],
        },
        {
          heading: "6. Contact Us",
          blocks: [
            {
              type: "paragraph",
              text: "Questions about this Cookie Policy? Contact us at:",
            },
            {
              type: "list",
              items: [{ label: "Telegram", text: TELEGRAM_HANDLE }],
            },
          ],
        },
      ]}
      closingNote="aiqonz currently operates as an individual practice, not a registered company. This policy will be updated to reflect the legal entity name and registration details once formal registration is completed."
    />
  );
}
