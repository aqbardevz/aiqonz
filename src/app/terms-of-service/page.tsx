import type { Metadata } from "next";
import { LegalPage } from "@/shared/ui/LegalPage/LegalPage";
import { TELEGRAM_HANDLE } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of AIQONZ's site and services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updatedAt="August 21, 2026"
      intro={[
        'These Terms of Service ("Terms") govern your use of aiqonz.com (the "Site") and any services provided by aiqonz ("we," "us," "our"). By using the Site or engaging our services, you agree to these Terms.',
        "aiqonz is an independent digital studio founded and operated by Akbar K., based in Bishkek, Kyrgyzstan. At this stage, aiqonz operates as an individual practice and is not yet registered as a separate legal entity. Services are provided by Akbar K. personally.",
      ]}
      sections={[
        {
          heading: "1. Services",
          blocks: [
            {
              type: "paragraph",
              text: "We provide software development, design, and blockchain-related services, including but not limited to: web and mobile development, UI/UX design and branding, smart contract development, DeFi and NFT development, and smart contract security audits.",
            },
            {
              type: "paragraph",
              text: "The specific scope, deliverables, timeline, and price for any project will be agreed separately in writing (e.g., via a proposal, statement of work, or contract) before work begins.",
            },
          ],
        },
        {
          heading: "2. Getting Started",
          blocks: [
            {
              type: "paragraph",
              text: "Submitting a contact form or message does not create a binding agreement. A project begins only once both parties agree in writing on scope, timeline, and payment terms.",
            },
          ],
        },
        {
          heading: "3. Payment",
          blocks: [
            {
              type: "list",
              items: [
                "Payment terms (deposit, milestones, final payment) will be specified per project.",
                "Prices are quoted in USD unless otherwise agreed with the client.",
                "A deposit is typically required before work begins, with the remainder due on agreed milestones or upon completion.",
                "Late payments may result in paused work until outstanding amounts are settled.",
                "Refunds, if any, are handled on a case-by-case basis and specified in the individual project agreement.",
              ],
            },
          ],
        },
        {
          heading: "4. Client Responsibilities",
          blocks: [
            { type: "paragraph", text: "You agree to:" },
            {
              type: "list",
              items: [
                "Provide timely feedback, access, and materials needed to complete the project",
                "Ensure you have the legal right to any content, assets, or data you provide us",
                "Review deliverables and provide sign-off within agreed timeframes",
              ],
            },
            {
              type: "paragraph",
              text: "Delays caused by missing feedback or materials may extend project timelines accordingly.",
            },
          ],
        },
        {
          heading: "5. Intellectual Property",
          blocks: [
            {
              type: "list",
              items: [
                "Upon full payment, ownership of custom code and design deliverables created specifically for your project transfers to you, unless otherwise agreed in writing.",
                "We retain the right to use general knowledge, tools, frameworks, and non-client-specific components (e.g., internal libraries, boilerplate code) in future projects.",
                "We may reference completed projects in our portfolio and marketing materials unless you request otherwise in writing (e.g., for confidential projects).",
              ],
            },
          ],
        },
        {
          heading: "6. Smart Contract & Security Audit Disclaimer",
          blocks: [
            {
              type: "paragraph",
              text: "For blockchain-related work, including smart contract development and security audits:",
            },
            {
              type: "list",
              items: [
                {
                  label: "No guarantee of zero vulnerabilities.",
                  text: "Security audits identify known vulnerability patterns based on the code and information available at the time of review. No audit can guarantee the complete absence of bugs, exploits, or vulnerabilities.",
                },
                {
                  label: "Not financial or legal advice.",
                  text: "Nothing we build or advise on constitutes financial, investment, or legal advice.",
                },
                {
                  label: "Client responsibility.",
                  text: "You remain responsible for final testing, deployment decisions, and any regulatory compliance applicable to your product (e.g., securities law, KYC/AML requirements).",
                },
              ],
            },
            {
              type: "paragraph",
              text: "We strongly recommend independent audits for high-value or mission-critical smart contracts in addition to our review.",
            },
          ],
        },
        {
          heading: "7. Limitation of Liability",
          blocks: [
            {
              type: "paragraph",
              text: "To the maximum extent permitted by law:",
            },
            {
              type: "list",
              items: [
                "We are not liable for indirect, incidental, or consequential damages arising from the use of our services or deliverables.",
                "Our total liability for any claim related to a project is limited to the amount you paid us for that specific project.",
                "We are not liable for losses resulting from third-party services, blockchain network failures, smart contract exploits occurring after deployment, or client-side implementation errors.",
              ],
            },
          ],
        },
        {
          heading: "8. Confidentiality",
          blocks: [
            {
              type: "paragraph",
              text: "We treat project details, business information, and unreleased materials shared with us as confidential, and will not disclose them to third parties without your consent, except as required by law.",
            },
          ],
        },
        {
          heading: "9. Termination",
          blocks: [
            {
              type: "paragraph",
              text: "Either party may terminate an ongoing project with written notice, as specified in the individual project agreement. Work completed up to the termination date will be invoiced accordingly.",
            },
          ],
        },
        {
          heading: "10. Governing Law",
          blocks: [
            {
              type: "paragraph",
              text: "These Terms are governed by the laws of the Kyrgyz Republic. Any disputes will be resolved in the courts of Bishkek, Kyrgyzstan, unless otherwise agreed in a specific project contract.",
            },
          ],
        },
        {
          heading: "11. Changes to These Terms",
          blocks: [
            {
              type: "paragraph",
              text: "We may update these Terms from time to time. Continued use of the Site or ongoing engagement of our services after changes constitutes acceptance of the revised Terms.",
            },
          ],
        },
        {
          heading: "12. Contact Us",
          blocks: [
            { type: "paragraph", text: "Questions about these Terms? Contact us at:" },
            {
              type: "list",
              items: [{ label: "Telegram", text: TELEGRAM_HANDLE }],
            },
          ],
        },
      ]}
      closingNote="aiqonz currently operates as an individual practice, not a registered company. As such, contracts are entered into personally by Akbar K., who bears personal liability for obligations under these Terms. These Terms will be updated to reflect the legal entity name, registration number, and revised liability structure once formal business registration is completed."
    />
  );
}
