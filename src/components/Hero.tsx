import { ArrowRight, Play, BookOpen, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AccentText } from "@/components/AccentText";
import type { EventStats } from "@/lib/events/schema";

type HeroProps = {
  stats: EventStats;
};

export function Hero({ stats }: HeroProps) {
  const totalEvents = stats.total;
  const earliestYear = stats.yearMin;
  const latestYear = stats.yearMax;
  const latestEventDate = stats.latestDate ?? "Unknown";
  const uniqueChains = stats.chainsTotal;
  const sourcesCount = stats.sourcesTotal;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(214,177,94,0.10),transparent_70%)]" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-7 px-4 pb-10 pt-8 sm:px-6 md:flex-row md:items-start md:gap-10 md:pt-12">
        <div className="flex-1 space-y-6">
          <p className="text-sm text-muted">Community-maintained crypto archive</p>
          <div className="space-y-4">
            <h1 className="font-display text-[1.95rem] font-bold leading-[1.08] text-fg sm:text-[2.6rem] md:text-[3.2rem]">
              History of the Trenches
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Every wave that brought people into crypto &mdash; sourced, preserved, and verified by the community.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-accentGold" aria-hidden="true" />
              <AccentText>{totalEvents}</AccentText> events
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-accentGold" aria-hidden="true" />
              <AccentText>{sourcesCount}</AccentText> sources
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-accentGold" aria-hidden="true" />
              <AccentText>{uniqueChains}</AccentText> chains
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-1 sm:gap-3">
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

        <div className="w-full max-w-sm rounded-xl border border-border bg-card p-4 shadow-subtle sm:p-5 md:mt-1">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xs font-semibold tracking-[0.12em] text-muted">
              At a glance
            </div>
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted">
              Live snapshot
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            <div className="rounded-lg border border-border/70 bg-bg/55 p-3 sm:col-span-2">
              <div className="text-[11px] text-muted">Years covered</div>
              <AccentText className="mt-1 text-base">
                {earliestYear && latestYear ? `${earliestYear} - ${latestYear}` : "Unknown"}
              </AccentText>
            </div>
            <div className="rounded-lg border border-border/70 bg-bg/55 p-3">
              <div className="text-[11px] text-muted">Events</div>
              <AccentText className="mt-1 text-lg">{totalEvents}</AccentText>
            </div>
            <div className="rounded-lg border border-border/70 bg-bg/55 p-3">
              <div className="text-[11px] text-muted">Sources</div>
              <AccentText className="mt-1 text-lg">{sourcesCount}</AccentText>
            </div>
            <div className="rounded-lg border border-border/70 bg-bg/55 p-3 sm:col-span-2">
              <div className="text-[11px] text-muted">Latest entry</div>
              <AccentText as="time" className="mt-1 text-sm">
                {latestEventDate}
              </AccentText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
