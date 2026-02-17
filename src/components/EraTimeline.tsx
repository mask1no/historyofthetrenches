 "use client";

import Link from "next/link";
import { useState } from "react";
import { eras } from "@/data/eras";
import { Badge } from "@/components/ui/badge";
import { typeVariant } from "@/lib/eventType";

export function EraTimeline() {
  const [openEraIds, setOpenEraIds] = useState<string[]>([]);

  const toggleEra = (id: string) => {
    setOpenEraIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <section className="space-y-6">
      <p className="text-sm text-muted">Collapse eras to focus, or expand to view all highlights.</p>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-subtle">
        <div className="flex flex-col gap-6">
          {eras.map((era, idx) => {
            const orderedEvents = [...era.featured].sort((a, b) =>
              a.date.localeCompare(b.date)
            );
            const visibleEvents = openEraIds.includes(era.id)
              ? orderedEvents
              : orderedEvents.slice(0, 4);
            return (
              <div
                key={era.id}
                id={`era-${era.id}`}
                className="card-lift relative grid gap-3 overflow-hidden rounded-xl border border-border bg-card/70 p-5 shadow-sm transition duration-700 ease-in-out hover:-translate-y-0.5 hover:shadow-subtle md:grid-cols-[200px_1fr] scroll-mt-24"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-border/40" aria-hidden="true" />
                <div className="flex items-start gap-3">
                  <div className="relative mt-1 h-3 w-3 rounded-full bg-accentGold shadow-subtle" />
                  <div>
                    <div className="text-xs font-semibold uppercase text-muted">{era.range}</div>
                    <div className="text-lg font-semibold">{era.title}</div>
                    <p className="mt-2 text-sm text-muted line-clamp-3 md:line-clamp-none">
                      {era.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {visibleEvents.map((event) => (
                    <Link
                      key={event.slug}
                      href={`/event/${event.slug}`}
                      className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm transition duration-500 ease-in-out hover:border-accentGold focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    >
                      <span className="flex flex-col">
                        <span className="font-medium">{event.title}</span>
                        <span className="text-xs text-muted">{event.date}</span>
                      </span>
                      <Badge variant={typeVariant[event.type]}>{event.year}</Badge>
                    </Link>
                  ))}
                </div>
                {orderedEvents.length > 4 && (
                  <div className="md:col-span-2 flex justify-center pt-3">
                    <button
                      type="button"
                      onClick={() => toggleEra(era.id)}
                      className="text-xs font-semibold text-accentGold underline"
                    >
                      {openEraIds.includes(era.id) ? "Collapse" : "Expand"}
                    </button>
                  </div>
                )}
                {idx !== eras.length - 1 && (
                  <div className="absolute -bottom-4 left-8 h-4 w-px bg-transparent md:hidden" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-sm text-muted">
        Eras are maintained by the community; submit edits via the archive with sources.
      </p>
    </section>
  );
}

