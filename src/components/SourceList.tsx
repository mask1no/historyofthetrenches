import type { Source } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { normalizeSourceKind } from "@/lib/events/sourceKind";

function isPendingSource(url?: string) {
  if (!url) return true;
  try {
    const parsed = new URL(url);
    const protocolAllowed = parsed.protocol === "https:" || parsed.protocol === "http:";
    return !protocolAllowed;
  } catch {
    return true;
  }
}

function isWikipediaSource(source: Source) {
  return source.publisher === "Wikipedia" || source.url?.includes("wikipedia.org");
}

const kindLabel: Record<string, string> = {
  primary: "Primary",
  secondary: "Secondary",
  community: "Community",
  pending: "Pending"
};

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <div className="space-y-3">
      {sources.map((source) => {
        const sourceKind = normalizeSourceKind(source);
        const pending = sourceKind === "pending" || isPendingSource(source.url);
        const wiki = !pending && isWikipediaSource(source);
        const Wrapper = pending ? "div" : "a";
        const wrapperProps = pending
          ? {}
          : {
              href: source.url,
              target: "_blank",
              rel: "noopener noreferrer"
            };

        return (
          <Wrapper
            key={(source.url ?? "") + source.label}
            {...wrapperProps}
            className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm transition hover:border-accentGold hover:shadow-subtle"
          >
            <div className="flex items-start gap-3">
              <div>
                <div className="font-semibold">{source.label}</div>
                <div className="text-xs text-muted">
                  {source.publisher} • {source.year}
                </div>
              </div>
              {pending && <Badge variant="muted">Pending</Badge>}
              {!pending && kindLabel[sourceKind] && (
                <Badge variant={sourceKind === "primary" ? "gold" : "muted"}>
                  {kindLabel[sourceKind]}
                </Badge>
              )}
              {wiki && !source.kind && (
                <Badge variant="muted">Reference</Badge>
              )}
            </div>
            {!pending && <span className="text-xs text-accentGold">Open</span>}
          </Wrapper>
        );
      })}
    </div>
  );
}

