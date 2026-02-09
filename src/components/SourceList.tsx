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

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <div className="space-y-3">
      {sources.map((source) => {
        const pending = source.kind === "pending" || isPendingSource(source.url);
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
              {pending && <Badge variant="muted">Source pending</Badge>}
            </div>
            {!pending && <span className="text-xs text-accentGold">Open</span>}
          </Wrapper>
        );
      })}
    </div>
  );
}

