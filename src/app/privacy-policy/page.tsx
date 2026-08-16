import { LegalPage } from "@/shared/ui/LegalPage/LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="Placeholder date"
      sections={[
        {
          heading: "1. Information We Collect",
          body: "Placeholder text. Describe what personal data you collect — e.g. contact details submitted through forms, usage analytics, and cookies.",
        },
        {
          heading: "2. How We Use Your Information",
          body: "Placeholder text. Explain the purposes for processing this data, such as responding to inquiries, improving the site, and legal compliance.",
        },
        {
          heading: "3. Cookies & Tracking",
          body: "Placeholder text. Reference your Cookie Policy and describe what tracking technologies are used and why.",
        },
        {
          heading: "4. Data Sharing & Third Parties",
          body: "Placeholder text. List any third-party processors or services data may be shared with, and under what conditions.",
        },
        {
          heading: "5. Data Security",
          body: "Placeholder text. Describe the measures in place to protect user data from unauthorized access or disclosure.",
        },
        {
          heading: "6. Your Rights",
          body: "Placeholder text. Explain applicable rights (access, correction, deletion, etc.) under relevant privacy regulations.",
        },
        {
          heading: "7. Contact Us",
          body: "Placeholder text. Provide a contact channel for privacy-related questions or requests.",
        },
      ]}
    />
  );
}
