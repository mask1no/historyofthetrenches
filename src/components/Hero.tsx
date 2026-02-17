import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { compareEventDatesDesc } from "@/lib/utils";

export function Hero() {
  const totalEvents = events.length;
  const years = events.map((event) => event.year);
  const earliestYear = years.length ? Math.min(...years) : undefined;
  const latestYear = years.length ? Math.max(...years) : undefined;
  const latestEventDate = [...events].sort(compareEventDatesDesc)[0]?.date ?? "—";

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-8 md:flex-row md:items-start md:gap-10">
      <div className="flex-1 space-y-6">
        <p className="text-sm uppercase tracking-[0.18em] text-muted">
          Digital Community Maintained Archive
        </p>
        <div className="space-y-4">
          <h1
            className="text-[2.1rem] font-bold leading-tight text-fg sm:text-[2.6rem] md:text-[3.1rem]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            History of the Trenches
          </h1>
          <p className="text-lg text-muted">
            A living record of crypto&apos;s defining moments—kept by the community.
          </p>
          <p className="text-sm font-medium text-fg">
            {events.length > 0
              ? `Tracking ${events.length} archived events curated by the community.`
              : "Tracking a growing archive of crypto’s defining moments."}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2 sm:flex sm:flex-wrap sm:gap-3">
          <Link href="/archive" className="w-full">
            <Button size="sm" className="w-full shadow-subtle sm:w-auto sm:py-2.5">
              Enter the Archive
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/timeline" className="w-full">
            <Button size="sm" variant="subtle" className="w-full sm:w-auto sm:py-2.5">
              Explore the Timeline
              <Play className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-subtle md:mt-1">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          At a glance
        </div>
        <div className="mt-3 overflow-hidden rounded-xl border border-border bg-bg/60">
          <div className="divide-y divide-border">
            <div className="flex items-center justify-between px-4 py-2.5">
              <div className="space-y-0.5">
                <div className="text-sm font-semibold">Years covered</div>
                <div className="text-xs text-muted">From genesis to today.</div>
              </div>
              <span className="text-sm font-semibold text-fg tabular-nums">
                {earliestYear && latestYear ? `${earliestYear}–${latestYear}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-2.5">
              <div className="space-y-0.5">
                <div className="text-sm font-semibold">Total events</div>
                <div className="text-xs text-muted">Complete archive count.</div>
              </div>
              <span className="text-lg font-semibold text-accentGold tabular-nums">
                {totalEvents}
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-2.5">
              <div className="space-y-0.5">
                <div className="text-sm font-semibold">Latest entry</div>
                <div className="text-xs text-muted">Most recent archive date.</div>
              </div>
              <span className="text-sm font-semibold text-fg tabular-nums">
                {latestEventDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


