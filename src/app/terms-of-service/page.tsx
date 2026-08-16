import { LegalPage } from "@/shared/ui/LegalPage/LegalPage";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updatedAt="Placeholder date"
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: "Placeholder text. State that by using the site or services, the user agrees to these terms.",
        },
        {
          heading: "2. Services Description",
          body: "Placeholder text. Summarize the services aiqonz provides and any relevant scope limitations.",
        },
        {
          heading: "3. User Responsibilities",
          body: "Placeholder text. Outline expectations around lawful use, accurate information, and account security.",
        },
        {
          heading: "4. Intellectual Property",
          body: "Placeholder text. Clarify ownership of site content, branding, and deliverables produced under engagements.",
        },
        {
          heading: "5. Limitation of Liability",
          body: "Placeholder text. Define the extent to which aiqonz is liable for damages arising from use of the services.",
        },
        {
          heading: "6. Termination",
          body: "Placeholder text. Describe the conditions under which access to services may be suspended or terminated.",
        },
        {
          heading: "7. Governing Law",
          body: "Placeholder text. Specify the jurisdiction and legal framework governing these terms.",
        },
      ]}
    />
  );
}
