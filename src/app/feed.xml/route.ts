import { events } from "@/data/events";
import { compareEventDatesDesc } from "@/lib/utils";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const sorted = [...events].sort(compareEventDatesDesc);
  const baseUrl = "https://www.historyofthetrenches.xyz";

  const items = sorted
    .map(
      (event) => {
        const link = `${baseUrl}/event/${event.slug}`;
        return `    <item>
      <title>${escapeXml(event.title)}</title>
      <link>${escapeXml(link)}</link>
      <description>${escapeXml(event.summary)}</description>
      <pubDate>${new Date(event.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <category>${escapeXml(event.type)}</category>
    </item>`;
      }
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>History of the Trenches</title>
    <link>${baseUrl}</link>
    <description>Community-maintained crypto history archive and timeline.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
