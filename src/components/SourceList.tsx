import type { Source } from "@/data/events";

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <div className="space-y-3">
      {sources.map((source) => (
        <a
          key={source.url + source.label}
          href={source.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm transition hover:border-accentGold hover:shadow-subtle"
        >
          <div>
            <div className="font-semibold">{source.label}</div>
            <div className="text-xs text-muted">
              {source.publisher} • {source.year}
            </div>
          </div>
          <span className="text-xs text-accentGold">Open</span>
        </a>
      ))}
    </div>
  );
}


