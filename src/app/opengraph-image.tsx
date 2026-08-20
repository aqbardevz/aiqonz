import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "AIQONZ — Full-Cycle Web3 & Web2 Product Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontsDir = join(process.cwd(), "public/assets/fonts/Web-TT");
  const [regular, bold] = await Promise.all([
    readFile(join(fontsDir, "Nohemi-Regular.ttf")),
    readFile(join(fontsDir, "Nohemi-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0a0a0a",
          fontFamily: "Nohemi",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#22c55e",
            }}
          />
          <span style={{ fontSize: 32, fontWeight: 700, color: "#ffffff" }}>
            AIQONZ
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            Your full-cycle partner
            <br />
            in the Web3 world
          </span>
          <span style={{ fontSize: 28, fontWeight: 400, color: "#9ca3af" }}>
            Blockchain engineering + product-grade design
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Nohemi", data: regular, weight: 400, style: "normal" },
        { name: "Nohemi", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
