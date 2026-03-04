import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPublicEvents } from "@/lib/events/selectors";
import { typeLabel, typeVariant } from "@/lib/eventType";
import { compareEventDatesDesc } from "@/lib/utils";

const featuredEvents = [...getPublicEvents()]
  .filter((e) => e.hallOfFame === true)
  .sort(compareEventDatesDesc)
  .slice(0, 5);

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">404</div>
        <h1 className="font-display text-4xl font-semibold">
          Page not found
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          The route may be outdated or the page may have moved. Use the links below to get back on
          track.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="shadow-subtle">
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button asChild variant="subtle">
            <Link href="/archive">Go to Archive</Link>
          </Button>
        </div>

        {featuredEvents.length > 0 && (
          <div className="mt-8 w-full">
            <h2 className="font-display text-xl font-semibold">
              Explore featured events
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {featuredEvents.map((item) => (
                <Link
                  key={item.slug}
                  href={`/event/${item.slug}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition hover:border-accentGold"
                >
                  <div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-muted">
                      {item.chain} • {item.date}
                    </div>
                  </div>
                  <Badge variant={typeVariant[item.type]}>
                    {typeLabel[item.type]}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
