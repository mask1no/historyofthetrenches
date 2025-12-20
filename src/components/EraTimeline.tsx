 "use client";

import Link from "next/link";
import { useState } from "react";
import { eras } from "@/data/eras";
import { Badge } from "@/components/ui/badge";

export function EraTimeline() {
  const [openEraIds, setOpenEraIds] = useState<string[]>([]);

  const toggleEra = (id: string) => {
    setOpenEraIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2
          className="text-3xl font-semibold text-fg"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Crypto Onboarding Eras
        </h2>
        <span className="text-sm text-muted">
          Click into an era to see its featured events.
        </span>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-subtle">
        <div className="absolute left-8 top-10 bottom-8 w-px bg-border" />
        <div className="flex flex-col gap-6">
          {eras.map((era, idx) => (
            <div key={era.id} className="relative grid gap-3 rounded-xl border border-border bg-bg p-5 shadow-sm transition duration-400 ease-out hover:-translate-y-0.5 hover:shadow-subtle md:grid-cols-[200px_1fr]">
              <div className="flex items-start gap-3">
                <div className="relative mt-1 h-3 w-3 rounded-full bg-accentGold shadow-subtle">
                  <span className="absolute left-1/2 top-3 h-full w-px -translate-x-1/2 bg-border/60" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-muted">{era.range}</div>
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-semibold">{era.title}</div>
                    <button
                      type="button"
                      onClick={() => toggleEra(era.id)}
                      className="text-xs text-accentGold underline"
                    >
                      {openEraIds.includes(era.id) ? "Collapse" : "Expand"}
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-muted">{era.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {(openEraIds.includes(era.id) ? era.featured : era.featured.slice(0, 2)).map(
                  (event) => (
                    <Link
                      key={event.slug}
                      href={`/event/${event.slug}`}
                      className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm transition duration-400 ease-out hover:border-accentGold"
                    >
                      <span className="flex flex-col">
                        <span className="font-medium">{event.title}</span>
                        <span className="text-xs text-muted">{event.date}</span>
                      </span>
                      <Badge
                        variant={
                          event.type === "rugpull"
                            ? "red"
                            : event.type === "runner"
                            ? "green"
                            : "gold"
                        }
                      >
                        {event.year}
                      </Badge>
                    </Link>
                  )
                )}
                {era.featured.length > 2 && !openEraIds.includes(era.id) && (
                  <div className="text-xs text-muted">+{era.featured.length - 2} more in era</div>
                )}
              </div>
              {idx !== eras.length - 1 && (
                <div className="absolute -bottom-4 left-8 h-4 w-px bg-transparent md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted">
        Eras are maintained by the community; submit edits via the archive with sources.
      </p>
    </section>
  );
}

