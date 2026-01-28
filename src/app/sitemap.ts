import type { MetadataRoute } from "next";
import { events } from "@/data/events";

const baseUrl = "https://www.historyofthetrenches.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/archive", "/timeline", "/community", "/hot"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.8
  }));

  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/event/${event.slug}`,
    lastModified: new Date(event.date),
    changeFrequency: "yearly" as "yearly",
    priority: 0.6
  }));

  return [...staticRoutes, ...eventRoutes];
}
