import type { Metadata } from "next";
import { LegalPage } from "@/shared/ui/LegalPage/LegalPage";
import { TELEGRAM_HANDLE } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AIQONZ collects, uses, and protects your data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="August 21, 2026"
      intro={[
        'This Privacy Policy explains how aiqonz ("we," "us," "our") collects, uses, and protects information when you visit aiqonz.com (the "Site") or contact us about a project.',
        "aiqonz is an independent digital studio founded and operated by Akbar K., based in Bishkek, Kyrgyzstan. At this stage, aiqonz operates as an individual practice and is not yet registered as a separate legal entity.",
      ]}
      sections={[
        {
          heading: "1. Information We Collect",
          blocks: [
            {
              type: "paragraph",
              text: "When you use our contact form or reach out to us directly, we may collect:",
            },
            {
              type: "list",
              items: [
                {
                  label: "Contact details",
                  text: "your name, email address, and any messaging handle you provide (Telegram, WhatsApp, etc.)",
                },
                {
                  label: "Project information",
                  text: "details you share about your project, goals, budget, or requirements",
                },
                {
                  label: "Technical data",
                  text: "IP address, browser type, device information, and pages visited, collected automatically through standard web analytics",
                },
              ],
            },
            {
              type: "paragraph",
              text: "We do not collect payment information directly through the Site. Any payment details for a project are handled separately and directly with you, or through third-party payment processors where applicable.",
            },
          ],
        },
        {
          heading: "2. How We Use Your Information",
          blocks: [
            { type: "paragraph", text: "We use the information we collect to:" },
            {
              type: "list",
              items: [
                "Respond to your inquiries and discuss potential projects",
                "Provide, maintain, and improve our services",
                "Send project-related updates once you become a client",
                "Understand how visitors use the Site, in order to improve it",
              ],
            },
            {
              type: "paragraph",
              text: "We do not sell your personal information to third parties.",
            },
          ],
        },
        {
          heading: "3. How We Share Information",
          blocks: [
            { type: "paragraph", text: "We may share your information with:" },
            {
              type: "list",
              items: [
                {
                  label: "Service providers",
                  text: "who help us operate the Site (e.g., hosting, analytics, email delivery)",
                },
                {
                  label: "Communication platforms",
                  text: "you choose to use (Telegram, WhatsApp, email) — subject to those platforms' own privacy policies",
                },
                {
                  label: "Legal authorities",
                  text: "if required by law or to protect our legal rights",
                },
              ],
            },
            {
              type: "paragraph",
              text: "We do not share your information with third parties for their own marketing purposes.",
            },
          ],
        },
        {
          heading: "4. Data Storage and Retention",
          blocks: [
            {
              type: "paragraph",
              text: "Information submitted through our contact form is stored securely in our email and messaging systems. We retain your information only as long as necessary to respond to your inquiry or, if you become a client, for the duration of our working relationship and for a reasonable period afterward for record-keeping purposes.",
            },
          ],
        },
        {
          heading: "5. Your Rights",
          blocks: [
            {
              type: "paragraph",
              text: "Depending on your location, you may have the right to:",
            },
            {
              type: "list",
              items: [
                "Request access to the personal information we hold about you",
                "Request correction or deletion of your information",
                "Object to or restrict certain processing",
                "Withdraw consent where processing is based on consent",
              ],
            },
            {
              type: "paragraph",
              text: `To exercise any of these rights, contact us via Telegram at ${TELEGRAM_HANDLE}.`,
            },
          ],
        },
        {
          heading: "6. Cookies",
          blocks: [
            {
              type: "paragraph",
              text: "The Site may use cookies and similar technologies. See our Cookie Policy for details.",
            },
          ],
        },
        {
          heading: "7. Third-Party Links",
          blocks: [
            {
              type: "paragraph",
              text: "The Site may contain links to third-party websites (e.g., social media, portfolio pieces, GitHub). We are not responsible for the privacy practices of those sites.",
            },
          ],
        },
        {
          heading: "8. Security",
          blocks: [
            {
              type: "paragraph",
              text: "We take reasonable measures to protect the information you share with us, but no method of transmission or storage is 100% secure. We cannot guarantee absolute security.",
            },
          ],
        },
        {
          heading: "9. Children's Privacy",
          blocks: [
            {
              type: "paragraph",
              text: "The Site is not directed at individuals under 16, and we do not knowingly collect information from children.",
            },
          ],
        },
        {
          heading: "10. Changes to This Policy",
          blocks: [
            {
              type: "paragraph",
              text: 'We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the most recent revision. Continued use of the Site after changes constitutes acceptance of the updated policy.',
            },
          ],
        },
        {
          heading: "11. Contact Us",
          blocks: [
            {
              type: "paragraph",
              text: "If you have questions about this Privacy Policy, contact us at:",
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
