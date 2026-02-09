import Link from "next/link";

const links = {
  explore: [
    { label: "Stack", href: "/stack" },
    { label: "Archive", href: "/archive" },
    { label: "Timeline", href: "/timeline" },
    { label: "Transparency", href: "/hot#receipts" }
  ],
  community: [
    { label: "X (Twitter)", href: "https://x.com/historytrenches" },
    { label: "DexScreener", href: "https://dexscreener.com" },
    { label: "Pump.fun", href: "https://pump.fun" }
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg/85 p-6 shadow-subtle">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_90%_at_12%_12%,var(--footerGlow),transparent_65%)]" />
          <div className="relative flex flex-col gap-3">
            <div className="text-lg font-semibold text-fg">History of the Trenches</div>
            <p className="max-w-2xl text-sm text-muted">
              Built by the trenches. For memory, not hype. A living archive of crypto’s defining moments.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
              <span>historyofthetrenches.xyz</span>
              <span className="h-1 w-1 rounded-full bg-accentGold" />
              <span>Sources first</span>
            </div>
          </div>
        </div>
        <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Explore
            </div>
            <div className="flex flex-col gap-2">
              {links.explore.map((link) => (
                <Link key={link.href} href={link.href} className="text-fg hover:text-accentGold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Links
            </div>
            <div className="flex flex-col gap-2">
              {links.community.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg hover:text-accentGold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Download
            </div>
            <div className="flex flex-col gap-2">
              <a href="/trench-manual.pdf" download className="text-fg hover:text-accentGold">
                Trench Manual (PDF)
              </a>
              <span className="text-xs text-muted">Manual is in progress.</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg/60 p-4 shadow-subtle">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Field Notes
            </div>
            <p className="mt-2 text-sm text-muted">
              Every entry is anchored to sources so the next cycle remembers the last.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-bg/60 p-4 shadow-subtle">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Community Ritual
            </div>
            <p className="mt-2 text-sm text-muted">
              Monthly $HOT buys are logged for transparency, not promises. This is a living web3 diary.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-bg/60 p-4 shadow-subtle">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Explore
            </div>
            <p className="mt-2 text-sm text-muted">
              Start with the archive or jump to the eras timeline to trace the story.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-border/70 pt-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} History of the Trenches</span>
          <span>All events include sources for verification.</span>
        </div>
      </div>
    </footer>
  );
}
