import type { MetadataRoute } from "next";
import { events } from "@/data/events";

const baseUrl = "https://www.historyofthetrenches.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/archive", "/timeline"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));

  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/event/${event.slug}`,
    lastModified: new Date(event.date)
  }));

  return [...staticRoutes, ...eventRoutes];
}
