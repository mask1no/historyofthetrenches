import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { parseEventDate } from "@/lib/utils";

const baseUrl = "https://www.historyofthetrenches.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestEventDate = events.length
    ? Math.max(...events.map((event) => parseEventDate(event.date)))
    : Date.now();
  const staticLastModified = new Date(latestEventDate);
  const staticRoutes = ["", "/archive", "/timeline", "/kit", "/hot"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: staticLastModified,
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.8
  }));

  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/event/${event.slug}`,
    lastModified: new Date(parseEventDate(event.date)),
    changeFrequency: "yearly" as "yearly",
    priority: 0.6
  }));

  return [...staticRoutes, ...eventRoutes];
}
