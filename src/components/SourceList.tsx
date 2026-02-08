import type { Source } from "@/data/events";
import { Badge } from "@/components/ui/badge";

function isPendingSource(url?: string) {
  if (!url) return true;
  try {
    const parsed = new URL(url);
    return parsed.hostname.includes("example.com");
  } catch {
    return true;
  }
}

function isValidUrl(url?: string) {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

const kindVariants: Record<NonNullable<Source["kind"]>, "muted" | "gold" | "green" | "dark"> = {
  primary: "green",
  secondary: "gold",
  community: "dark",
  pending: "muted"
};

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <div className="space-y-3">
      {sources.map((source) => {
        const pending = source.kind === "pending" || isPendingSource(source.url);
        const pendingLabel = source.kind === "pending" ? "Pending" : "Source pending";
        const showArchive = isValidUrl(source.archivedUrl);

        return (
          <div
            key={(source.url ?? "") + source.label}
            className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm transition hover:border-accentGold hover:shadow-subtle"
          >
            <div className="flex items-start gap-3">
              <div>
                <div className="font-semibold">{source.label}</div>
                <div className="text-xs text-muted">
                  {source.publisher} • {source.year}
                </div>
                {source.excerpt && (
                  <div className="mt-1 text-xs text-muted">{source.excerpt}</div>
                )}
              </div>
              {source.kind && (
                <Badge variant={kindVariants[source.kind]}>{source.kind}</Badge>
              )}
              {pending && !source.kind && <Badge variant="muted">{pendingLabel}</Badge>}
            </div>
            <div className="flex items-center gap-3 text-xs">
              {showArchive && (
                <a
                  href={source.archivedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline"
                >
                  Archive
                </a>
              )}
              {!pending && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accentGold underline"
                >
                  Open
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

