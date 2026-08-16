import type { ReactElement } from "react";
import {
  SolidityIcon,
  EthereumIcon,
  TonIcon,
  Web3jsIcon,
  EthersJsIcon,
  IpfsIcon,
  WalletConnectIcon,
  ChainlinkIcon,
  BitcoinIcon,
  SolanaIcon,
  MetaMaskIcon,
  BaseIcon,
  PolygonIcon,
  OpenZeppelinIcon,
} from "./icons";
import styles from "./StackMarquee.module.css";

type Stack = {
  name: string;
  Icon: (props: { size?: number }) => ReactElement;
};

const STACKS: Stack[] = [
  { name: "Solidity", Icon: SolidityIcon },
  { name: "Ethereum", Icon: EthereumIcon },
  { name: "TON", Icon: TonIcon },
  { name: "Web3.js", Icon: Web3jsIcon },
  { name: "Ethers.js", Icon: EthersJsIcon },
  { name: "IPFS", Icon: IpfsIcon },
  { name: "WalletConnect", Icon: WalletConnectIcon },
  { name: "TON Connect", Icon: TonIcon },
  { name: "Chainlink", Icon: ChainlinkIcon },
  { name: "MetaMask", Icon: MetaMaskIcon },
  { name: "Bitcoin", Icon: BitcoinIcon },
  { name: "Solana", Icon: SolanaIcon },
  { name: "Base", Icon: BaseIcon },
  { name: "Polygon", Icon: PolygonIcon },
  { name: "OpenZeppelin", Icon: OpenZeppelinIcon },
];

const HALF = Array.from({ length: 3 }, () => STACKS).flat();
const TRACK = [...HALF, ...HALF];

export function StackMarquee() {
  return (
    <section className={styles.marquee}>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {TRACK.map((stack, index) => (
            <span key={`${stack.name}-${index}`} className={styles.item}>
              <stack.Icon size={22} />
              {stack.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
