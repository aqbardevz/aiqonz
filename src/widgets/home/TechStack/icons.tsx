import type { ReactNode } from "react";
import {
  siEthereum,
  siSolidity,
  siPolygon,
  siChainlink,
  siIpfs,
  siOpenzeppelin,
  siWagmi,
  siAlchemy,
  siNotion,
  siFigma,
  siMiro,
  siEthers,
  siReact,
  siNextdotjs,
  siTypescript,
  siNodedotjs,
  siPostgresql,
  siRedis,
  siGraphql,
  siDocker,
  siTailwindcss,
  siVercel,
} from "simple-icons";

type IconProps = {
  size?: number;
  className?: string;
};

const strokeBase = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({
  size = 20,
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...strokeBase}
    >
      {children}
    </svg>
  );
}

function BrandSvg({
  size = 20,
  className,
  path,
}: IconProps & { path: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={path} />
    </svg>
  );
}

/* ---- Real brand marks (via simple-icons) ---- */

export function EthereumIcon(props: IconProps) {
  return <BrandSvg {...props} path={siEthereum.path} />;
}

export function SolidityIcon(props: IconProps) {
  return <BrandSvg {...props} path={siSolidity.path} />;
}

export function PolygonIcon(props: IconProps) {
  return <BrandSvg {...props} path={siPolygon.path} />;
}

export function ChainlinkIcon(props: IconProps) {
  return <BrandSvg {...props} path={siChainlink.path} />;
}

export function IpfsIcon(props: IconProps) {
  return <BrandSvg {...props} path={siIpfs.path} />;
}

export function OpenZeppelinIcon(props: IconProps) {
  return <BrandSvg {...props} path={siOpenzeppelin.path} />;
}

export function WagmiIcon(props: IconProps) {
  return <BrandSvg {...props} path={siWagmi.path} />;
}

export function AlchemyIcon(props: IconProps) {
  return <BrandSvg {...props} path={siAlchemy.path} />;
}

export function NotionIcon(props: IconProps) {
  return <BrandSvg {...props} path={siNotion.path} />;
}

export function FigmaIcon(props: IconProps) {
  return <BrandSvg {...props} path={siFigma.path} />;
}

export function MiroIcon(props: IconProps) {
  return <BrandSvg {...props} path={siMiro.path} />;
}

export function EthersJsIcon(props: IconProps) {
  return <BrandSvg {...props} path={siEthers.path} />;
}

export function ReactIcon(props: IconProps) {
  return <BrandSvg {...props} path={siReact.path} />;
}

export function NextjsIcon(props: IconProps) {
  return <BrandSvg {...props} path={siNextdotjs.path} />;
}

export function TypeScriptIcon(props: IconProps) {
  return <BrandSvg {...props} path={siTypescript.path} />;
}

export function NodejsIcon(props: IconProps) {
  return <BrandSvg {...props} path={siNodedotjs.path} />;
}

export function PostgresqlIcon(props: IconProps) {
  return <BrandSvg {...props} path={siPostgresql.path} />;
}

export function RedisIcon(props: IconProps) {
  return <BrandSvg {...props} path={siRedis.path} />;
}

export function GraphqlIcon(props: IconProps) {
  return <BrandSvg {...props} path={siGraphql.path} />;
}

export function DockerIcon(props: IconProps) {
  return <BrandSvg {...props} path={siDocker.path} />;
}

export function TailwindIcon(props: IconProps) {
  return <BrandSvg {...props} path={siTailwindcss.path} />;
}

export function VercelIcon(props: IconProps) {
  return <BrandSvg {...props} path={siVercel.path} />;
}

/* ---- Custom marks (no official logo asset available) ---- */

export function TheGraphIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M7.6 7.6 10.4 10.4M13.6 10.4 16.4 7.6M10.4 13.6 7.6 16.4M13.6 13.6 16.4 16.4" />
    </Svg>
  );
}

export function HardhatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 16.5a8 8 0 0 1 16 0" />
      <path d="M2 16.5h20" />
      <path d="M12 8.5v-3" />
      <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function FoundryIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-2-1-3-1-3s1 4-2 4-3-3-2-5c0 0-2 0-1-3Z" />
      <path d="M6 22c0-3 2-4 2-4" />
      <path d="M18 22c0-3-2-4-2-4" />
    </Svg>
  );
}

export function SlitherIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 8c2-3 5-3 6 0s4 3 6 0 5-3 6 0" />
      <path d="M4 15c2 3 5 3 6 0s4-3 6 0 5 3 6 0" />
    </Svg>
  );
}

export function MythXIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </Svg>
  );
}

export function CertoraIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9.3 9l1.8 1.8L14.7 7" />
      <path d="M8.5 14.3 6 21l6-3 6 3-2.5-6.7" />
    </Svg>
  );
}

export function TenderlyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 12h4l2-7 4 14 2-7h6" />
    </Svg>
  );
}

export function BrandMarkIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2 20.5 7v10L12 22 3.5 17V7Z" />
      <path d="M12 8v8M8 10.2l8 3.6M16 10.2l-8 3.6" strokeWidth={1.3} />
    </Svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export const TOOL_ICONS = {
  ethereum: { Icon: EthereumIcon, color: `#${siEthereum.hex}` },
  solidity: { Icon: SolidityIcon, color: `#${siSolidity.hex}` },
  polygon: { Icon: PolygonIcon, color: `#${siPolygon.hex}` },
  chainlink: { Icon: ChainlinkIcon, color: `#${siChainlink.hex}` },
  ipfs: { Icon: IpfsIcon, color: `#${siIpfs.hex}` },
  openzeppelin: { Icon: OpenZeppelinIcon, color: `#${siOpenzeppelin.hex}` },
  wagmi: { Icon: WagmiIcon, color: `#${siWagmi.hex}` },
  alchemy: { Icon: AlchemyIcon, color: `#${siAlchemy.hex}` },
  notion: { Icon: NotionIcon, color: `#${siNotion.hex}` },
  figma: { Icon: FigmaIcon, color: `#${siFigma.hex}` },
  miro: { Icon: MiroIcon, color: `#${siMiro.hex}` },
  ethersjs: { Icon: EthersJsIcon, color: `#${siEthers.hex}` },
  thegraph: { Icon: TheGraphIcon, color: "#6747ED" },
  hardhat: { Icon: HardhatIcon, color: "#F5DF4D" },
  foundry: { Icon: FoundryIcon, color: "#F16E1D" },
  slither: { Icon: SlitherIcon, color: "#14B8A6" },
  mythx: { Icon: MythXIcon, color: "#00BFA5" },
  certora: { Icon: CertoraIcon, color: "#2563EB" },
  tenderly: { Icon: TenderlyIcon, color: "#00C896" },
  react: { Icon: ReactIcon, color: `#${siReact.hex}` },
  nextjs: { Icon: NextjsIcon, color: `#${siNextdotjs.hex}` },
  typescript: { Icon: TypeScriptIcon, color: `#${siTypescript.hex}` },
  nodejs: { Icon: NodejsIcon, color: `#${siNodedotjs.hex}` },
  postgresql: { Icon: PostgresqlIcon, color: `#${siPostgresql.hex}` },
  redis: { Icon: RedisIcon, color: `#${siRedis.hex}` },
  graphql: { Icon: GraphqlIcon, color: `#${siGraphql.hex}` },
  docker: { Icon: DockerIcon, color: `#${siDocker.hex}` },
  tailwind: { Icon: TailwindIcon, color: `#${siTailwindcss.hex}` },
  vercel: { Icon: VercelIcon, color: `#${siVercel.hex}` },
} as const;

export type ToolKey = keyof typeof TOOL_ICONS;

// Brand colors come from simple-icons and vary wildly in lightness — some
// (Ethereum, Solidity, Notion, ...) are near-black and disappear against a
// dark tile. Swap those to white based on computed contrast instead of
// guessing per-tool, so every icon stays legible regardless of its brand hue.
function relativeLuminance(hex: string): number {
  const clean = hex.replace("#", "");
  const channels = [0, 2, 4].map(
    (i) => parseInt(clean.slice(i, i + 2), 16) / 255,
  );
  const [r, g, b] = channels.map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4),
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function iconColorOnDark(hex: string): string {
  return relativeLuminance(hex) < 0.2 ? "#FFFFFF" : hex;
}
