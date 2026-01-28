import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { EraTimeline } from "@/components/EraTimeline";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getEventBySlug } from "@/data/events";

export const metadata: Metadata = {
  title: "Crypto Timeline | History of the Trenches",
  description: "Chronological chapters with featured events that led to major onboarding waves.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/timeline"
  }
};

export default function TimelinePage() {
  const genesisEvent = getEventBySlug("bitcoin-genesis-block");

  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <h1
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Crypto Timeline
          </h1>
          <p className="text-base text-muted">
            Chronological chapters with featured events that led to major onboarding waves.
          </p>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          <Card className="md:col-span-5 border-l-4 border-l-accentGold bg-card/95 shadow-subtle">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-xl">
                  Bitcoin Genesis
                </CardTitle>
                <p className="text-sm text-muted">Block zero, January 3, 2009.</p>
              </div>
              <Badge variant="gold">2009</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg border border-accentGold/30 bg-accentGold/5 px-4 py-3 text-sm text-muted">
                {genesisEvent?.summary ??
                  "Satoshi mined the first Bitcoin block, planting the seed for a new monetary network."}
              </div>
              {genesisEvent ? (
                <Button
                  asChild
                  variant="subtle"
                  className="w-full justify-center border border-accentGold/60"
                >
                  <Link href={`/event/${genesisEvent.slug}`}>Read the genesis story</Link>
                </Button>
              ) : (
                <Button
                  variant="subtle"
                  className="w-full justify-center border border-accentGold/60"
                >
                  Event coming soon
                </Button>
              )}
            </CardContent>
          </Card>
          <Card className="md:col-span-7 border border-border/80 bg-card/90">
            <CardHeader>
              <CardTitle className="text-xl">Timeline Overview</CardTitle>
              <p className="text-sm text-muted">
                From early infrastructure to meme liquidity, each era maps the shifts that shaped
                the market.
              </p>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              <div className="flex items-start justify-between rounded-lg border border-border bg-bg/60 px-4 py-3">
                <div>
                  <div className="font-semibold">Genesis → ICO Boom</div>
                  <div className="text-xs text-muted">Foundation years and early market plumbing.</div>
                </div>
                <Badge variant="muted">2010–2018</Badge>
              </div>
              <div className="flex items-start justify-between rounded-lg border border-border bg-bg/60 px-4 py-3">
                <div>
                  <div className="font-semibold">DeFi + NFT Expansion</div>
                  <div className="text-xs text-muted">On-chain liquidity and consumer discovery.</div>
                </div>
                <Badge variant="muted">2020–2021</Badge>
              </div>
              <div className="flex items-start justify-between rounded-lg border border-border bg-bg/60 px-4 py-3">
                <div>
                  <div className="font-semibold">CeFi Contagion → Meme Rails</div>
                  <div className="text-xs text-muted">Risk resets and new launch dynamics.</div>
                </div>
                <Badge variant="muted">2022–2024</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <EraTimeline />
      </section>
    </main>
  );
}

