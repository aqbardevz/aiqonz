import type { Metadata } from "next";
import { CasesPage } from "@/widgets/cases/CasesPage";

const TITLE = "Case Studies";
const DESCRIPTION =
  "A closer look at the Web3 and Web2 products AIQONZ has helped founders design, build, and ship — DeFi platforms, wallets, and dashboards with real, measurable results.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/cases",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/cases",
  },
};

export default function Page() {
  return <CasesPage />;
}
