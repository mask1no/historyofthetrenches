import Link from "next/link";
import { events } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";
import { typeLabel, typeVariant } from "@/lib/eventType";

const recent = [...events]
  .sort((a, b) => b.year - a.year)
  .slice(0, 3);

export function RecentAdditions() {
  const typeDot: Record<string, string> = {
    rugpull: "bg-accentRed",
    runner: "bg-accentGreen",
    milestone: "bg-accentGold",
    hack: "bg-border"
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2
          className="text-2xl font-semibold text-fg"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Archive Picks
        </h2>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <Bell className="h-4 w-4" />
          Follow{" "}
          <a
            href="https://x.com/historytrenches"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @historytrenches
          </a>{" "}
          for new entries.
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
            className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition duration-700 ease-out hover:-translate-y-0.5 hover:border-accentGold hover:shadow-subtle"
          >
            <span
              className={`absolute inset-y-0 left-0 w-1 ${typeDot[item.type] ?? "bg-border"}`}
              aria-hidden
            />
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>{item.title}</span>
              </div>
              <div className="text-xs text-muted">
                {item.chain} • {item.date} • {item.summary}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={typeVariant[item.type]}>{typeLabel[item.type]}</Badge>
              {item.hallOfFame && <Badge variant="gold">Hall of Fame</Badge>}
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

