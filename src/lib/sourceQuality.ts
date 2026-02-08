import type { Event } from "@/data/events";

type SourceQualityLevel = "needs-receipts" | "secondary-only" | "primary-backed";

const isPendingSourceUrl = (url?: string) => {
  if (!url) return true;
  try {
    const parsed = new URL(url);
    return parsed.hostname.includes("example.com");
  } catch {
    return true;
  }
};

export const getEventSourceQuality = (event: Event) => {
  const sources = event.sources ?? [];
  const hasPending = sources.some(
    (source) => source.kind === "pending" || isPendingSourceUrl(source.url)
  );

  if (sources.length < 2 || hasPending) {
    return { level: "needs-receipts" as SourceQualityLevel, label: "Needs receipts" };
  }

  const hasPrimary = sources.some((source) => source.kind === "primary");
  const hasSecondary = sources.some((source) => source.kind === "secondary");

  if (hasPrimary && hasSecondary) {
    return { level: "primary-backed" as SourceQualityLevel, label: "Primary-backed" };
  }

  return { level: "secondary-only" as SourceQualityLevel, label: "Secondary-only" };
};
