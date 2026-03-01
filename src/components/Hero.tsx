import { ArrowRight, Play, BookOpen, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { compareEventDatesDesc } from "@/lib/utils";

export function Hero() {
  const totalEvents = events.length;
  const years = events.map((event) => event.year);
  const earliestYear = years.length ? Math.min(...years) : undefined;
  const latestYear = years.length ? Math.max(...years) : undefined;
  const latestEventDate = [...events].sort(compareEventDatesDesc)[0]?.date ?? "Unknown";
  const uniqueChains = new Set(events.map((e) => e.chain)).size;
  const sourcesCount = events.reduce((sum, e) => sum + e.sources.length, 0);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(214,177,94,0.10),transparent_70%)]" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-12 pt-10 md:flex-row md:items-start md:gap-10 md:pt-12">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">
            Community&#8209;Maintained Crypto Archive
          </p>
          <div className="space-y-4">
            <h1 className="font-display text-[2.1rem] font-bold leading-[1.1] text-fg sm:text-[2.6rem] md:text-[3.2rem]">
              History of the Trenches
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              Every wave that brought people into crypto &mdash; sourced, preserved, and verified by the community.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-accentGold" aria-hidden="true" />
              <strong className="font-semibold text-fg">{totalEvents}</strong> events
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-accentGold" aria-hidden="true" />
              <strong className="font-semibold text-fg">{sourcesCount}</strong> sources
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-accentGold" aria-hidden="true" />
              <strong className="font-semibold text-fg">{uniqueChains}</strong> chains
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild size="sm" className="shadow-subtle sm:py-2.5">
              <Link href="/archive">
                Enter the Archive
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="sm" variant="subtle" className="sm:py-2.5">
              <Link href="/timeline">
                Explore the Timeline
                <Play className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-4 rounded-xl border border-border bg-card p-5 shadow-subtle md:mt-1">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            At a glance
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-semibold">Years covered</div>
                <div className="text-xs text-muted">From genesis to today.</div>
              </div>
              <span className="text-sm font-semibold text-fg tabular-nums">
                {earliestYear && latestYear ? `${earliestYear}\u2009\u2013\u2009${latestYear}` : "Unknown"}
              </span>
            </div>
            <div className="h-px bg-border/40 dark:bg-border-subtle" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-semibold">Total events</div>
                <div className="text-xs text-muted">Complete archive count.</div>
              </div>
              <span className="text-lg font-semibold text-accentGold tabular-nums">
                {totalEvents}
              </span>
            </div>
            <div className="h-px bg-border/40 dark:bg-border-subtle" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-sm font-semibold">Latest entry</div>
                <div className="text-xs text-muted">Most recent archive date.</div>
              </div>
              <time className="text-sm font-semibold text-fg tabular-nums" dateTime={latestEventDate}>
                {latestEventDate}
              </time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
