import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { parseEventDate } from "@/lib/utils";

const baseUrl = "https://www.historyofthetrenches.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestEventDate = events.length
    ? Math.max(...events.map((event) => parseEventDate(event.date)))
    : Date.now();
  const staticLastModified = new Date(latestEventDate);
  const pagePriority: Record<string, number> = {
    "": 1.0,
    "/archive": 0.9,
    "/timeline": 0.9,
    "/kit": 0.7,
    "/hot": 0.7
  };
  const pageFrequency: Record<string, "weekly" | "monthly"> = {
    "": "weekly",
    "/archive": "weekly",
    "/timeline": "monthly",
    "/kit": "monthly",
    "/hot": "monthly"
  };
  const staticRoutes = Object.keys(pagePriority).map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: staticLastModified,
    changeFrequency: pageFrequency[path] ?? ("monthly" as const),
    priority: pagePriority[path] ?? 0.7
  }));

  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/event/${event.slug}`,
    lastModified: new Date(parseEventDate(event.date)),
    changeFrequency: "yearly" as "yearly",
    priority: event.hallOfFame ? 0.8 : 0.6
  }));

  return [...staticRoutes, ...eventRoutes];
}
