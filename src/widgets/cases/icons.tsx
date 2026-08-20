import type { ComponentType } from "react";
import {
  siSolidity,
  siEthers,
  siWalletconnect,
  siReact,
  siPython,
  siPostgresql,
  siGraphql,
  siChainlink,
  siNextdotjs,
} from "simple-icons";

type IconProps = { size?: number };

function BrandSvg({
  size = 20,
  path,
  hex,
}: IconProps & { path: string; hex: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={`#${hex}`}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export function SolidityIcon(props: IconProps) {
  return <BrandSvg {...props} path={siSolidity.path} hex={siSolidity.hex} />;
}

export function EthersJsIcon(props: IconProps) {
  return <BrandSvg {...props} path={siEthers.path} hex={siEthers.hex} />;
}

export function WalletConnectIcon(props: IconProps) {
  return (
    <BrandSvg {...props} path={siWalletconnect.path} hex={siWalletconnect.hex} />
  );
}

export function ReactIcon(props: IconProps) {
  return <BrandSvg {...props} path={siReact.path} hex={siReact.hex} />;
}

export function PythonIcon(props: IconProps) {
  return <BrandSvg {...props} path={siPython.path} hex={siPython.hex} />;
}

export function PostgresqlIcon(props: IconProps) {
  return <BrandSvg {...props} path={siPostgresql.path} hex={siPostgresql.hex} />;
}

export function GraphqlIcon(props: IconProps) {
  return <BrandSvg {...props} path={siGraphql.path} hex={siGraphql.hex} />;
}

export function ChainlinkIcon(props: IconProps) {
  return <BrandSvg {...props} path={siChainlink.path} hex={siChainlink.hex} />;
}

export function NextjsIcon(props: IconProps) {
  return <BrandSvg {...props} path={siNextdotjs.path} hex={siNextdotjs.hex} />;
}

/* ---- Custom marks (no official logo asset available) ---- */

export function TheGraphIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6747ED"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M7.6 7.6 10.4 10.4M13.6 10.4 16.4 7.6M10.4 13.6 7.6 16.4M13.6 13.6 16.4 16.4" />
    </svg>
  );
}

export function HardhatIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5DF4D"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 16.5a8 8 0 0 1 16 0" />
      <path d="M2 16.5h20" />
      <path d="M12 8.5v-3" />
      <circle cx="12" cy="4" r="1" fill="#F5DF4D" stroke="none" />
    </svg>
  );
}

// Keys are lower-cased stack labels as they appear in projects.ts. Entries
// with no established brand mark (e.g. "WebSocket") are simply omitted —
// their chip renders as text only.
const STACK_ICONS: Record<string, ComponentType<IconProps>> = {
  solidity: SolidityIcon,
  "ethers.js": EthersJsIcon,
  walletconnect: WalletConnectIcon,
  react: ReactIcon,
  "react native": ReactIcon,
  python: PythonIcon,
  postgresql: PostgresqlIcon,
  graphql: GraphqlIcon,
  chainlink: ChainlinkIcon,
  "next.js": NextjsIcon,
  "the graph": TheGraphIcon,
  hardhat: HardhatIcon,
};

export function getStackIcon(name: string): ComponentType<IconProps> | undefined {
  return STACK_ICONS[name.toLowerCase()];
}
