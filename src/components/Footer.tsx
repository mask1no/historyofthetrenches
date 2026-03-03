import Link from "next/link";
import { LinkIcon } from "@/components/LinkIcon";
import { BookOpen, Flame, Compass } from "lucide-react";

const links = {
  explore: [
    { label: "Archive", href: "/archive" },
    { label: "Timeline", href: "/timeline" },
    { label: "Kit", href: "/kit" },
    { label: "Transparency", href: "/hot#wallets" }
  ],
  community: [
    { label: "X (Twitter)", href: "https://x.com/historytrenches", icon: "X" },
    { label: "DexScreener", href: "https://dexscreener.com", icon: "DX" },
    { label: "Pump.fun", href: "https://pump.fun", icon: "PF" }
  ]
};

const pillars = [
  {
    icon: BookOpen,
    title: "Field Notes",
    text: "Every entry is source-backed, preserving hard lessons so each cycle starts smarter than the last."
  },
  {
    icon: Flame,
    title: "Community Log",
    text: "$HOT activity is published separately as a community diary, not archival evidence."
  },
  {
    icon: Compass,
    title: "Explore",
    text: "Start with the archive or jump to the biggest crypto onboarding eras in timeline."
  }
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card dark:border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-12 pb-0">
        <div className="relative overflow-hidden rounded-xl border border-border/40 bg-card p-6 shadow-subtle dark:border-border-subtle sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_10%_10%,var(--footerGlow),transparent_60%)]" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <div className="font-display text-xl font-semibold text-fg sm:text-2xl">
                History of the Trenches
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted">
                A living record of crypto&apos;s defining moments, sourced and preserved by the
                community. Archive pages prioritize factual chronology and transparent sourcing.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span>historyofthetrenches.xyz</span>
              <span className="h-1 w-1 rounded-full bg-accentGold" aria-hidden="true" />
              <span>Sources&#8209;first</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-3 rounded-xl border border-border/40 bg-card p-4 shadow-subtle dark:border-border-subtle"
            >
              <pillar.icon className="mt-0.5 h-4 w-4 shrink-0 text-accentGold" aria-hidden="true" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-fg">
                  {pillar.title}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Explore
            </div>
            <nav className="flex flex-col gap-2 link-underline" aria-label="Footer explore links">
              {links.explore.map((link) => (
                <Link key={link.href} href={link.href} className="text-fg">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Community
            </div>
            <nav className="flex flex-col gap-2 link-underline" aria-label="Footer community links">
              {links.community.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-fg"
                >
                  {link.icon === "X" && <LinkIcon name="x" />}
                  {link.icon === "DX" && <LinkIcon name="dexscreener" />}
                  {link.icon === "PF" && <LinkIcon name="pumpfun" />}
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Resources
            </div>
            <div className="flex flex-col gap-2 link-underline">
              <a href="/trench-manual.pdf" download className="text-fg">
                Trench Manual (PDF)
              </a>
              <Link href="/kit" className="text-fg">
                Starter Kit
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Community
            </div>
            <div className="flex flex-col gap-2 link-underline">
              <Link href="/hot" className="text-fg">
                $HOT Diary
              </Link>
              <Link href="/hot#wallets" className="text-fg">
                Public Wallets
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/40 pt-6 text-xs text-muted dark:border-border-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} History of the Trenches</span>
          <span>Events publish source status so verification quality stays visible.</span>
        </div>
      </div>
    </footer>
  );
}
