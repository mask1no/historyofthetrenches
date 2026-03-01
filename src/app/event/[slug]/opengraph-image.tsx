import { ImageResponse } from "next/og";
import { getEventBySlug } from "@/data/events";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const typeColor: Record<string, string> = {
  rugpull: "#c44d4d",
  collapse: "#c44d4d",
  runner: "#2f9e6f",
  milestone: "#d6b15e",
  hack: "#9a948b",
  seizure: "#9a948b"
};

const typeLabel: Record<string, string> = {
  rugpull: "Rugpull",
  collapse: "Collapse",
  runner: "Runner",
  milestone: "Milestone",
  hack: "Hack",
  seizure: "Seizure"
};

export default async function OGImage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return new ImageResponse(
      (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0d0d0d",
          color: "#d6b15e",
          fontSize: 48,
          fontWeight: 700,
        }}>
          History of the Trenches
        </div>
      ),
      size
    );
  }

  const color = typeColor[event.type] ?? "#9a948b";

  return new ImageResponse(
    (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        backgroundColor: "#0d0d0d",
        padding: "60px 80px",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}>
            <div style={{
              backgroundColor: color,
              color: "#0d0d0d",
              padding: "6px 18px",
              borderRadius: "20px",
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
            }}>
              {typeLabel[event.type] ?? event.type}
            </div>
            <div style={{
              color: "#9a948b",
              fontSize: 20,
            }}>
              {event.chain} &bull; {event.date}
            </div>
          </div>
          <div style={{
            color: "#d6b15e",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "900px",
          }}>
            {event.title}
          </div>
          <div style={{
            color: "#9a948b",
            fontSize: 24,
            lineHeight: 1.4,
            maxWidth: "900px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}>
            {event.summary.length > 200
              ? event.summary.slice(0, 200).trim() + "..."
              : event.summary}
          </div>
        </div>
        <div style={{
          color: "#4b4b4b",
          fontSize: 18,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
        }}>
          History of the Trenches
        </div>
      </div>
    ),
    size
  );
}
