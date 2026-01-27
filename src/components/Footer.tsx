import Link from "next/link";

const links = {
  explore: [
    { label: "Archive", href: "/archive" },
    { label: "Timeline", href: "/timeline" },
    { label: "Hall of Fame", href: "/#token" }
  ],
  community: [
    { label: "X (Twitter)", href: "https://x.com/historytrenches" },
    { label: "DexScreener", href: "https://dexscreener.com" },
    { label: "Pump.fun", href: "https://pump.fun" }
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <div className="space-y-3">
          <div className="text-lg font-semibold text-fg">History of the Trenches</div>
          <p className="max-w-xl text-sm text-muted">
            Built by the trenches. For memory, not hype. A living archive of crypto’s defining moments.
          </p>
          <div className="text-xs uppercase tracking-[0.2em] text-muted">
            historyofthetrenches.xyz
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
              Community
            </div>
            <div className="flex flex-col gap-2">
              {links.community.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
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
        <div className="flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} History of the Trenches</span>
          <span>All events include sources for verification.</span>
        </div>
      </div>
    </footer>
  );
}
