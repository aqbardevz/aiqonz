import { LegalPage } from "@/shared/ui/LegalPage/LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updatedAt="Placeholder date"
      sections={[
        {
          heading: "1. No Professional Advice",
          body: "Placeholder text. Clarify that site content is for general informational purposes and not financial, legal, or security advice.",
        },
        {
          heading: "2. No Warranties",
          body: "Placeholder text. State that services and content are provided \"as is\" without warranties of any kind.",
        },
        {
          heading: "3. Limitation of Liability",
          body: "Placeholder text. Define the extent to which aiqonz disclaims liability for losses arising from reliance on the site.",
        },
        {
          heading: "4. External Links",
          body: "Placeholder text. Note that links to third-party sites are provided for convenience and aiqonz isn't responsible for their content.",
        },
        {
          heading: "5. Blockchain & Financial Risk",
          body: "Placeholder text. Disclose the inherent risks of blockchain technology and digital assets, and that past results don't guarantee future outcomes.",
        },
      ]}
    />
  );
}
