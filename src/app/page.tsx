import { BentoGrid } from "@/components/BentoGrid";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { RecentAdditions } from "@/components/RecentAdditions";

export default function HomePage() {
  return (
    <main className="min-h-screen pb-16">
      <NavBar />
      <Hero />
      <div className="mx-auto max-w-6xl px-6 pb-10 mt-6 md:mt-8">
        <div className="mb-6 max-w-2xl space-y-2">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Markets forget. Communities don&apos;t.
          </h2>
          <p className="text-sm text-muted">
            We keep receipts with sources, context, and community commentary so the next
            cycle remembers the last.
          </p>
        </div>
      </div>
      <BentoGrid />
      <RecentAdditions />
      <footer className="border-t border-border/80 bg-card py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
            <span className="font-semibold text-fg">historyofthetrenches.xyz</span>
            <span>Built by the trenches. For memory, not hype.</span>
          </div>
          <div className="flex items-center gap-3 text-muted">
            <a
              href="https://x.com"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border px-3 text-xs uppercase tracking-wide transition hover:border-accentGold"
            >
              X
            </a>
            <a
              href="https://dexscreener.com"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border px-2 text-[11px] uppercase tracking-wide transition hover:border-accentGold"
            >
              DS
            </a>
            <a
              href="https://pump.fun"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border px-2 text-[11px] uppercase tracking-wide transition hover:border-accentGold"
            >
              PF
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

