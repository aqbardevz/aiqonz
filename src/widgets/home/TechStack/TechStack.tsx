import { Button } from "@/shared/ui/Button/Button";
import { Container } from "@/shared/ui/Container/Container";
import {
  ArrowRightIcon,
  BrandMarkIcon,
  TOOL_ICONS,
  iconColorOnDark,
  type ToolKey,
} from "./icons";
import styles from "./TechStack.module.css";

type Tool = {
  key: ToolKey;
  name: string;
};

const MARQUEE_ROW_1: Tool[] = [
  { key: "ethereum", name: "Ethereum" },
  { key: "solidity", name: "Solidity" },
  { key: "polygon", name: "Polygon" },
  { key: "chainlink", name: "Chainlink" },
  { key: "hardhat", name: "Hardhat" },
  { key: "foundry", name: "Foundry" },
  { key: "react", name: "React" },
  { key: "nextjs", name: "Next.js" },
  { key: "typescript", name: "TypeScript" },
  { key: "tailwind", name: "Tailwind CSS" },
  { key: "vercel", name: "Vercel" },
];

const MARQUEE_ROW_2: Tool[] = [
  { key: "openzeppelin", name: "OpenZeppelin" },
  { key: "ethersjs", name: "Ethers.js" },
  { key: "alchemy", name: "Alchemy" },
  { key: "nodejs", name: "Node.js" },
  { key: "postgresql", name: "PostgreSQL" },
  { key: "redis", name: "Redis" },
  { key: "graphql", name: "GraphQL" },
  { key: "docker", name: "Docker" },
];

type Phase = {
  title: string;
  tools: Tool[];
  produces: string[];
};

const PHASES: Phase[] = [
  {
    title: "Front-end",
    tools: [
      { key: "react", name: "React" },
      { key: "nextjs", name: "Next.js" },
      { key: "typescript", name: "TypeScript" },
      { key: "tailwind", name: "Tailwind CSS" },
    ],
    produces: ["UI Components", "Design System", "Responsive Layouts"],
  },
  {
    title: "Back-end",
    tools: [
      { key: "nodejs", name: "Node.js" },
      { key: "postgresql", name: "PostgreSQL" },
      { key: "graphql", name: "GraphQL" },
      { key: "redis", name: "Redis" },
    ],
    produces: ["REST & GraphQL APIs", "Database Schema", "Caching Layer"],
  },
  {
    title: "Blockchain",
    tools: [
      { key: "solidity", name: "Solidity" },
      { key: "hardhat", name: "Hardhat" },
      { key: "foundry", name: "Foundry" },
      { key: "openzeppelin", name: "OpenZeppelin" },
    ],
    produces: ["Smart Contracts", "Test Coverage", "Deployment Scripts"],
  },
  {
    title: "DevOps",
    tools: [
      { key: "docker", name: "Docker" },
      { key: "vercel", name: "Vercel" },
      { key: "slither", name: "Slither" },
      { key: "tenderly", name: "Tenderly" },
    ],
    produces: ["CI/CD Pipeline", "Security Scans", "Monitoring"],
  },
];

// x-positions (of 1000) for a 4-up grid: (i + 0.5) / 4 * 1000
const CARD_X = [125, 375, 625, 875];

// Repeated enough times that one loop-half comfortably spans very wide
// viewports at the larger tile size, so the scroll never runs out of tiles.
// Bumped up since trimming the tool lists shortened each loop-half.
const MARQUEE_REPEAT = 6;

function repeatTools(tools: Tool[], times: number): Tool[] {
  return Array.from({ length: times }, () => tools).flat();
}

const CONNECTOR_CENTER_X = 500;
const CONNECTOR_START_Y = 4;
const CONNECTOR_SPINE_Y = 28;
const CONNECTOR_END_Y = 60;
const CONNECTOR_RADIUS = 16;

// Rounded "down, across, down" elbow: a smooth polyline built from straight
// segments with quadratic-bezier corners (control point = the sharp corner
// itself). Using Q instead of an SVG arc sidesteps sweep-flag direction
// bugs entirely — the curve always bulges toward the corner, regardless of
// whether the branch goes left or right of center.
function elbowPath(cardX: number) {
  const dir = cardX === CONNECTOR_CENTER_X ? 0 : cardX > CONNECTOR_CENTER_X ? 1 : -1;
  if (dir === 0) {
    return `M ${CONNECTOR_CENTER_X} ${CONNECTOR_START_Y} L ${cardX} ${CONNECTOR_END_Y}`;
  }

  const r = Math.min(
    CONNECTOR_RADIUS,
    Math.abs(cardX - CONNECTOR_CENTER_X) / 2,
    CONNECTOR_SPINE_Y - CONNECTOR_START_Y,
    CONNECTOR_END_Y - CONNECTOR_SPINE_Y,
  );

  return [
    `M ${CONNECTOR_CENTER_X} ${CONNECTOR_START_Y}`,
    `L ${CONNECTOR_CENTER_X} ${CONNECTOR_SPINE_Y - r}`,
    `Q ${CONNECTOR_CENTER_X} ${CONNECTOR_SPINE_Y} ${CONNECTOR_CENTER_X + dir * r} ${CONNECTOR_SPINE_Y}`,
    `L ${cardX - dir * r} ${CONNECTOR_SPINE_Y}`,
    `Q ${cardX} ${CONNECTOR_SPINE_Y} ${cardX} ${CONNECTOR_SPINE_Y + r}`,
    `L ${cardX} ${CONNECTOR_END_Y}`,
  ].join(" ");
}

function ConnectorLines() {
  return (
    <svg
      className={styles.connector}
      viewBox={`0 0 1000 ${CONNECTOR_END_Y + 4}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {CARD_X.map((x) => (
        <path
          key={x}
          d={elbowPath(x)}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      <circle
        cx={CONNECTOR_CENTER_X}
        cy={CONNECTOR_START_Y}
        r={4}
        fill="var(--color-accent)"
      />
      {CARD_X.map((x) => (
        <circle
          key={`dot-${x}`}
          cx={x}
          cy={CONNECTOR_END_Y}
          r={4}
          fill="var(--color-accent)"
        />
      ))}
    </svg>
  );
}

export function TechStack() {
  return (
    <section className={styles.techStack}>
      <Container className={styles.inner}>
        <h2 className={styles.headline}>Modern Stack</h2>

        <p className={styles.subtitle}>
          From architecture to mainnet, we pair audited tooling with hands-on
          engineering to ship secure, production-ready blockchain products.
        </p>

        <div className={styles.marqueeWrap} aria-hidden="true">
          <div className={styles.marquee}>
            <div
              className={`${styles.marqueeTrack} ${styles.marqueeTrackLeft}`}
            >
              {repeatTools(MARQUEE_ROW_1, MARQUEE_REPEAT * 2).map(
                (tool, index) => {
                  const { Icon, color } = TOOL_ICONS[tool.key];
                  return (
                    <span
                      key={index}
                      className={styles.marqueeTile}
                      style={{ color }}
                      title={tool.name}
                    >
                      <Icon size={28} />
                    </span>
                  );
                },
              )}
            </div>
          </div>

          <div className={styles.marquee}>
            <div
              className={`${styles.marqueeTrack} ${styles.marqueeTrackRight}`}
            >
              {repeatTools(MARQUEE_ROW_2, MARQUEE_REPEAT * 2).map(
                (tool, index) => {
                  const { Icon, color } = TOOL_ICONS[tool.key];
                  return (
                    <span
                      key={index}
                      className={styles.marqueeTile}
                      style={{ color }}
                      title={tool.name}
                    >
                      <Icon size={28} />
                    </span>
                  );
                },
              )}
            </div>
          </div>

          <div className={styles.marqueeVignette} aria-hidden="true" />

          <div className={styles.centerEmblem}>
            <div className={styles.centerGlow} />
            <div className={styles.centerTile}>
              <BrandMarkIcon size={26} />
            </div>
          </div>
        </div>

        <div>
          <ConnectorLines />

          <div className={styles.phases}>
            {PHASES.map((phase) => (
              <div key={phase.title} className={styles.phaseCard}>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>

                <div className={styles.phaseTools}>
                  {phase.tools.map((tool) => {
                    const { Icon, color } = TOOL_ICONS[tool.key];
                    return (
                      <span
                        key={tool.key}
                        className={styles.toolTile}
                        style={{ color: iconColorOnDark(color) }}
                        title={tool.name}
                      >
                        <Icon size={20} />
                      </span>
                    );
                  })}
                </div>

                <span className={styles.producesLabel}>Produces:</span>
                <div className={styles.tags}>
                  {phase.produces.map((item) => (
                    <span key={item} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
