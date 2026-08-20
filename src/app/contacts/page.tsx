import type { Metadata } from "next";
import { ContactsPage } from "@/widgets/contacts/ContactsPage";

const TITLE = "Contact Us";
const DESCRIPTION =
  "Tell AIQONZ about your Web3 or Web2 project and get a reply within 24 hours — straight to the founder, no account managers in between.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contacts",
  },
};

export default function Page() {
  return <ContactsPage />;
}
