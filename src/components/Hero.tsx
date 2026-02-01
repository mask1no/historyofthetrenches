import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { compareEventDatesDesc } from "@/lib/utils";

export function Hero() {
  const totalEvents = events.length;
  const hallOfFameRugs = events.filter((e) => e.hallOfFame && e.type === "rugpull").length;
  const latestEventDate = [...events].sort(compareEventDatesDesc)[0]?.date ?? "—";

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-12 pt-10 md:flex-row md:items-start md:gap-12">
      <div className="flex-1 space-y-6">
        <p className="text-sm uppercase tracking-[0.18em] text-muted">
          Community-Maintained Archive
        </p>
        <div className="space-y-4">
          <h1
            className="text-4xl font-bold leading-tight text-fg sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            History of the Trenches
          </h1>
          <p className="text-lg text-muted">
            A living record of crypto&apos;s defining moments—built by and for
            the community.
          </p>
          <p className="text-sm font-medium text-fg">
            {events.length > 0
              ? `Tracking ${events.length} archived events curated by the community.`
              : "Tracking a growing archive of crypto’s defining moments."}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/archive">
            <Button size="lg" className="shadow-subtle">
              Enter the Archive
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/timeline">
            <Button size="lg" variant="subtle">
              Explore the Timeline
              <Play className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-subtle">
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
          At a glance
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-xl border border-border bg-bg px-3 py-3">
            <div className="space-y-1">
              <div className="text-sm font-semibold">Total events</div>
              <div className="text-xs text-muted">All archived entries.</div>
            </div>
            <span className="text-lg font-semibold text-accentGold">{totalEvents}</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border bg-bg px-3 py-3">
            <div className="space-y-1">
              <div className="text-sm font-semibold">Hall of Fame rugpulls</div>
              <div className="text-xs text-muted">Highest-impact failures tracked.</div>
            </div>
            <span className="text-lg font-semibold text-accentRed">{hallOfFameRugs}</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border bg-bg px-3 py-3">
            <div className="space-y-1">
              <div className="text-sm font-semibold">Latest entry</div>
              <div className="text-xs text-muted">Most recent archive date.</div>
            </div>
            <span className="text-sm font-semibold text-fg">{latestEventDate}</span>
          </div>
        </div>
      </div>
    </section>
  );
}


