import { LegalPage } from "@/shared/ui/LegalPage/LegalPage";

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updatedAt="Placeholder date"
      sections={[
        {
          heading: "1. What Are Cookies",
          body: "Placeholder text. Briefly explain what cookies are and how they're used in general terms.",
        },
        {
          heading: "2. How We Use Cookies",
          body: "Placeholder text. Describe the specific purposes cookies serve on this site — analytics, preferences, session handling, etc.",
        },
        {
          heading: "3. Types of Cookies We Use",
          body: "Placeholder text. Break down categories such as essential, analytics, and marketing cookies, if applicable.",
        },
        {
          heading: "4. Managing Cookies",
          body: "Placeholder text. Explain how users can control or disable cookies via browser settings or a consent tool.",
        },
        {
          heading: "5. Changes to This Policy",
          body: "Placeholder text. Note that this policy may be updated periodically and how changes will be communicated.",
        },
      ]}
    />
  );
}
