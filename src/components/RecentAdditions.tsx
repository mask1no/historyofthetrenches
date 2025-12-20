import Link from "next/link";
import { events } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";
import { typeLabel, typeVariant } from "@/lib/eventType";

const recent = [...events]
  .sort((a, b) => b.year - a.year)
  .slice(0, 3);

export function RecentAdditions() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2
          className="text-2xl font-semibold text-fg"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Recently Added
        </h2>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <Bell className="h-4 w-4" />
          Opt in to notifications after login.
        </div>
      </div>
      <Link href="/archive" className="text-sm text-muted underline">
        View archive
      </Link>
      <div className="space-y-3">
        {recent.map((item) => (
          <Link
            key={item.slug}
            href={`/event/${item.slug}`}
            className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-subtle"
          >
            <div>
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="text-xs text-muted">
                {item.chain} • {item.date} • {item.summary}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={typeVariant[item.type]}>{typeLabel[item.type]}</Badge>
              <span className="text-xs text-muted uppercase tracking-wide">
                New
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

