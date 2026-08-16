import type { IconType } from "react-icons";
import {
  LuGlobe,
  LuDatabase,
  LuSmartphone,
  LuPlug,
  LuFileText,
  LuRefreshCw,
  LuImage,
  LuShieldCheck,
  LuPenLine,
  LuMonitor,
  LuRocket,
  LuLayers,
} from "react-icons/lu";
import styles from "./ServicesMenu.module.css";

type ServiceItem = {
  title: string;
  description: string;
  Icon: IconType;
};

type ServiceColumn = {
  title: string;
  tint: "blue" | "green" | "neutral";
  items: ServiceItem[];
};

const COLUMNS: ServiceColumn[] = [
  {
    title: "#Web2",
    tint: "blue",
    items: [
      {
        title: "Web Development",
        description: "Fast, scalable web apps.",
        Icon: LuGlobe,
      },
      {
        title: "Backend Development",
        description: "APIs & server infrastructure.",
        Icon: LuDatabase,
      },
      {
        title: "Mobile Development",
        description: "Native & cross-platform apps.",
        Icon: LuSmartphone,
      },
      {
        title: "API Integration",
        description: "Connect your stack seamlessly.",
        Icon: LuPlug,
      },
    ],
  },
  {
    title: "#Web3",
    tint: "green",
    items: [
      {
        title: "Smart Contracts",
        description: "Secure, audited Solidity code.",
        Icon: LuFileText,
      },
      {
        title: "DeFi Development",
        description: "Protocols built to scale.",
        Icon: LuRefreshCw,
      },
      {
        title: "NFT Development",
        description: "Mint, market & manage.",
        Icon: LuImage,
      },
      {
        title: "Security Audits",
        description: "Full-scope contract audits.",
        Icon: LuShieldCheck,
      },
    ],
  },
  {
    title: "#Design",
    tint: "neutral",
    items: [
      {
        title: "UI/UX Design",
        description: "Interfaces users trust.",
        Icon: LuPenLine,
      },
      {
        title: "Web Design",
        description: "Modern sites that convert.",
        Icon: LuMonitor,
      },
      {
        title: "Branding",
        description: "Identity that stands out.",
        Icon: LuRocket,
      },
      {
        title: "Product Design",
        description: "From concept to prototype.",
        Icon: LuLayers,
      },
    ],
  },
];

const TINT_CLASS: Record<ServiceColumn["tint"], string> = {
  blue: styles.tintBlue,
  green: styles.tintGreen,
  neutral: styles.tintNeutral,
};

export function ServicesMenu() {
  return (
    <div className={styles.servicesPanel}>
      <div className={styles.servicesPanelInner}>
        {COLUMNS.map((column, index) => (
          <div key={column.title} className={styles.servicesColumnWrap}>
            <div className={styles.servicesColumn}>
              <span
                className={`${styles.servicesColumnTitle} ${TINT_CLASS[column.tint]}`}
              >
                {column.title}
              </span>

              <ul className={styles.serviceList}>
                {column.items.map((item) => (
                  <li key={item.title} className={styles.serviceItem}>
                    <span className={styles.serviceIcon} aria-hidden="true">
                      <item.Icon size={18} />
                    </span>
                    <div>
                      <div className={styles.serviceItemTitle}>
                        {item.title}
                      </div>
                      <p className={styles.serviceItemDescription}>
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
