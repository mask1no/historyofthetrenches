import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkIcon } from "@/components/LinkIcon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { curatorWallets, hotLinks } from "@/data/hot";
import { isHotFeatureEnabled } from "@/config/featureFlags";
import { Coins, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "$HOT | History of the Trenches",
  description: "Community diary for the $HOT experiment, with public wallets and transparent activity logs.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/hot"
  },
  openGraph: {
    title: "$HOT | History of the Trenches",
    description: "Community diary for the $HOT experiment, with public wallets and transparent activity logs.",
    url: "https://www.historyofthetrenches.xyz/hot",
    siteName: "History of the Trenches",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "History of the Trenches"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "$HOT | History of the Trenches",
    description: "Community diary for the $HOT experiment, with public wallets and transparent activity logs.",
    images: ["/og.png"]
  }
};

export default function HotPage() {
  if (!isHotFeatureEnabled) {
    notFound();
  }

  return (
    <main id="main-content" className="min-h-screen pb-16">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <Breadcrumbs items={[{ label: "$HOT", href: "/hot" }]} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>What $HOT is</CardTitle>
              <p className="text-sm text-muted">
                A community-facing experiment. This page tracks activity in public while the archive
                remains focused on historical records and sourced events.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted">
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                A portion of my savings each month goes toward buying the token. Every buy is logged
                publicly.
              </div>
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                All wallets are doxxed and directly linked.{" "}
                <a href="#wallets" className="link-accent font-medium">
                  View wallets
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>How to participate</CardTitle>
              <p className="text-sm text-muted">Simple steps, if you choose to take part.</p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted">
              <ol className="list-inside list-decimal space-y-2 rounded-xl border border-border bg-bg/70 p-4 link-underline marker:font-semibold marker:text-fg [&>li]:pl-2">
                <li>Download Phantom</li>
                <li>
                  Fund Phantom with SOL (
                  <a href="https://solana.com" target="_blank" rel="noopener noreferrer">
                    Solana
                  </a>
                  )
                </li>
                <li>Swap SOL → $HOT</li>
                <li>Participate in the community and hodl</li>
              </ol>
              <div className="grid gap-3 md:grid-cols-2">
                <a
                  href="https://phantom.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-bg/70 px-4 py-3 transition hover:border-accentGold"
                >
                  <Wallet className="h-4 w-4 text-accentGold" />
                  <div>
                    <div className="text-xs font-semibold uppercase text-muted">Wallet</div>
                    <div className="text-sm font-semibold text-fg">Phantom</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-bg/70 px-4 py-3">
                  <Coins className="h-4 w-4 text-accentGold" />
                  <div>
                    <div className="text-xs font-semibold uppercase text-muted">Chain</div>
                    <div className="text-sm font-semibold text-fg">Solana</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://jup.ag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold link-accent"
                >
                  Swap on Jupiter
                </a>
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold link-accent"
                >
                  <span className="mr-2 inline-flex align-middle">
                    <LinkIcon name="pumpfun" />
                  </span>
                  Pump.fun
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={hotLinks.communityXUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold link-accent"
                >
                  <span className="mr-2 inline-flex align-middle">
                    <LinkIcon name="x" />
                  </span>
                  Join the Community
                </a>
                {hotLinks.chartUrl && (
                  <a
                    href={hotLinks.chartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold link-accent"
                  >
                    View Chart
                  </a>
                )}
                {hotLinks.buyUrl && (
                  <a
                    href={hotLinks.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold link-accent"
                  >
                    Optional entry
                  </a>
                )}
              </div>
              <div className="text-xs text-muted">
                Participate thoughtfully and only with risk you can afford.
              </div>
            </CardContent>
          </Card>

          <Card className="scroll-mt-24 md:col-span-3" id="wallets">
            <CardHeader>
              <CardTitle>Wallets</CardTitle>
              <p className="text-sm text-muted">
                Public wallets tied to the archive and $HOT mechanics.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {curatorWallets.map((wallet) => (
                <div
                  key={`${wallet.address}-${wallet.label}`}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-bg/70 px-4 py-3 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="font-semibold">{wallet.label}</div>
                      <Badge variant="gold">Doxxed</Badge>
                    </div>
                    <div className="mt-2 text-xs text-muted">{wallet.purpose}</div>
                    <div className="mt-1 text-xs text-muted break-all">
                      {wallet.chain} • {wallet.address}
                    </div>
                  </div>
                  <a
                    href={wallet.explorerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold link-accent"
                  >
                    Open explorer
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>What $HOT is NOT</CardTitle>
              <p className="text-sm text-muted">
                Clear boundaries to keep the record honest.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted">
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                Not financial advice. Not a promise. Not a yield product.
              </div>
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                Participation is optional and should be thoughtful, not impulsive.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
