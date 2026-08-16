import {
  siSolidity,
  siWeb3dotjs,
  siEthers,
  siIpfs,
  siPolygon,
  siOpenzeppelin,
} from "simple-icons";
import {
  NetworkTon,
  NetworkEthereum,
  NetworkBitcoin,
  NetworkSolana,
  NetworkBase,
  TokenLINK,
  WalletMetamask,
  WalletWalletConnect,
} from "@web3icons/react";

type IconProps = { size?: number };

// Some brand colors (e.g. Solidity's near-black gray) are unreadable
// against this marquee's dark background — swap those to white based on
// computed contrast instead of guessing per-icon.
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

function colorOnDark(hex: string): string {
  return relativeLuminance(hex) < 0.2 ? "#FFFFFF" : hex;
}

function BrandSvg({
  size = 24,
  path,
  hex,
}: IconProps & { path: string; hex: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={colorOnDark(`#${hex}`)}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

/* ---- Real brand marks (via @web3icons/react) ---- */

export function EthereumIcon({ size = 24 }: IconProps) {
  return <NetworkEthereum variant="branded" size={size} />;
}

export function BitcoinIcon({ size = 24 }: IconProps) {
  return <NetworkBitcoin variant="branded" size={size} />;
}

export function SolanaIcon({ size = 24 }: IconProps) {
  return <NetworkSolana variant="branded" size={size} />;
}

export function ChainlinkIcon({ size = 24 }: IconProps) {
  return <TokenLINK variant="branded" size={size} />;
}

export function WalletConnectIcon({ size = 24 }: IconProps) {
  return <WalletWalletConnect variant="branded" size={size} />;
}

export function TonIcon({ size = 24 }: IconProps) {
  return <NetworkTon variant="branded" size={size} />;
}

export function MetaMaskIcon({ size = 24 }: IconProps) {
  return <WalletMetamask variant="branded" size={size} />;
}

export function BaseIcon({ size = 24 }: IconProps) {
  return <NetworkBase variant="branded" size={size} />;
}

/* ---- Real brand marks (via simple-icons — not covered by @web3icons/react) ---- */

export function SolidityIcon(props: IconProps) {
  return <BrandSvg {...props} path={siSolidity.path} hex={siSolidity.hex} />;
}

export function Web3jsIcon(props: IconProps) {
  return <BrandSvg {...props} path={siWeb3dotjs.path} hex={siWeb3dotjs.hex} />;
}

export function EthersJsIcon(props: IconProps) {
  return <BrandSvg {...props} path={siEthers.path} hex={siEthers.hex} />;
}

export function IpfsIcon(props: IconProps) {
  return <BrandSvg {...props} path={siIpfs.path} hex={siIpfs.hex} />;
}

export function PolygonIcon(props: IconProps) {
  return <BrandSvg {...props} path={siPolygon.path} hex={siPolygon.hex} />;
}

export function OpenZeppelinIcon(props: IconProps) {
  return (
    <BrandSvg {...props} path={siOpenzeppelin.path} hex={siOpenzeppelin.hex} />
  );
}

/* ---- Custom marks (no official logo asset available anywhere) ---- */

export function HardhatIcon({ size = 24 }: IconProps) {
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
