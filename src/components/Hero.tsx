import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
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
            Tracking 482 events curated by the community. Updated daily.
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
        <div className="mb-4 text-sm font-semibold text-muted">
          Markets forget. Communities don&apos;t.
        </div>
        <p className="text-sm text-muted">
          We catalogue rugs, runs, and milestones with sourced evidence so the
          next cycle remembers the last.
        </p>
        <ul className="mt-4 space-y-3 text-sm text-fg">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-accentGold" />
            Verifiable sources, curator notes, and era context.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-accentGreen" />
            Filters by chain, tag, and impact.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-accentRed" />
            Rug Hall of Fame: never forget the lessons.
          </li>
        </ul>
      </div>
    </section>
  );
}


