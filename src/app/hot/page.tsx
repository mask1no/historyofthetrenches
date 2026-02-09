import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { curatorWallets, hotLinks, ritualReceipts } from "@/data/hot";

export const metadata: Metadata = {
  title: "$HOT | History of the Trenches",
  description: "A playful Web3 diary around the $HOT memecoin, with clear receipts and wallets.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/hot"
  },
  openGraph: {
    title: "$HOT | History of the Trenches",
    description: "A playful Web3 diary around the $HOT memecoin, with clear receipts and wallets.",
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
    description: "A playful Web3 diary around the $HOT memecoin, with clear receipts and wallets.",
    images: ["/og.png"]
  }
};

export default function HotPage() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            The $HOT Experiment
          </h1>
          <p className="max-w-3xl text-base text-muted">
            This page tracks a playful memecoin experiment. It is not financial advice and not a
            promise of returns—just a public record to keep the story honest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>What $HOT is</CardTitle>
              <p className="text-sm text-muted">
                A playful Web3 diary entry. It keeps the archive honest without promises, hype, or
                financial advice.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted">
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                $HOT is a public record: a small, repeatable action that keeps the narrative
                accountable. The value here is memory, not yield.
              </div>
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                Receipts are logged openly, and wallets are linked. The record stays visible, even
                when sentiment shifts.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to buy / How to participate</CardTitle>
              <p className="text-sm text-muted">Simple steps, if you choose to take part.</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted">
              <ol className="space-y-2 rounded-xl border border-border bg-bg/70 p-4">
                <li>
                  <span className="font-semibold text-fg">1)</span> Download Phantom
                </li>
                <li>
                  <span className="font-semibold text-fg">2)</span> Fund Phantom with SOL (Solana)
                </li>
                <li>
                  <span className="font-semibold text-fg">3)</span> Swap SOL → $HOT
                </li>
                <li>
                  <span className="font-semibold text-fg">4)</span> Participate in the community and
                  hodl
                </li>
              </ol>
              <div className="text-xs text-muted">
                If you are a jeet, please skip steps 1–3 and go touch grass.
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3" id="receipts">
            <CardHeader>
              <CardTitle>Proof-of-Receipts</CardTitle>
              <p className="text-sm text-muted">
                Timestamped actions with on-chain receipts. Links open in a new tab.
              </p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {ritualReceipts.map((receipt) => (
                <div
                  key={`${receipt.txUrl}-${receipt.label}`}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-bg/70 px-4 py-3 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <div className="font-semibold">{receipt.label}</div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
                      <Badge variant="muted">{receipt.chain}</Badge>
                      <span>{receipt.date}</span>
                      {receipt.commit && <span>commit {receipt.commit}</span>}
                    </div>
                    {receipt.note && (
                      <div className="mt-2 text-xs text-muted">{receipt.note}</div>
                    )}
                  </div>
                  <a
                    href={receipt.txUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-accentGold underline"
                  >
                    View receipt
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="md:col-span-3" id="wallets">
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
                    <div className="mt-1 text-xs text-muted">
                      {wallet.chain} • {wallet.address}
                    </div>
                  </div>
                  <a
                    href={wallet.explorerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-accentGold underline"
                  >
                    Open explorer
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
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
          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <p className="text-sm text-muted">Stay close to the updates.</p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted">
              <div className="flex flex-wrap gap-3">
                <a
                  href={hotLinks.communityXUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accentGold underline"
                >
                  Join the Community
                </a>
                {hotLinks.chartUrl && (
                  <a
                    href={hotLinks.chartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accentGold underline"
                  >
                    View Chart
                  </a>
                )}
                {hotLinks.buyUrl && (
                  <a
                    href={hotLinks.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accentGold underline"
                  >
                    Optional entry
                  </a>
                )}
              </div>
              <p className="text-xs text-muted">Not financial advice.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
