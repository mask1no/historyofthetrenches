import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "$HOT | History of the Trenches",
  description: "A playful Web3 diary around the $HOT memecoin, with a simple monthly buy ritual.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/hot"
  }
};

export default function HotPage() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="gold">$HOT</Badge>
            <Badge variant="muted">Web3 diary</Badge>
          </div>
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            The $HOT Experiment
          </h1>
          <p className="max-w-3xl text-base text-muted">
            This page tracks a playful memecoin experiment. It is not financial advice and not a
            promise of returns—just a public ritual to keep the story honest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Monthly Ritual</CardTitle>
              <p className="text-sm text-muted">
                Each month, I buy a small amount of $HOT as a personal Web3 diary checkpoint.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted">
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Why it exists
                </div>
                <p className="mt-2">
                  To keep the project playful, transparent, and community-led. No hype, no
                  expectations—just consistent participation.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  How it works
                </div>
                <p className="mt-2">
                  The ritual is simple: one small buy each month, logged as a milestone in the
                  project’s living archive.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Disclaimer
                </div>
                <p className="mt-2">
                  This is for fun and community storytelling. It’s not investment advice and not a
                  roadmap for profits.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Roadmap (lightweight)</CardTitle>
              <p className="text-sm text-muted">Just a simple cadence for community updates.</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start justify-between rounded-lg border border-border bg-bg/70 px-3 py-2">
                <div>
                  <div className="font-semibold">Month 1</div>
                  <div className="text-xs text-muted">Kickoff buy + log</div>
                </div>
                <Badge variant="muted">Now</Badge>
              </div>
              <div className="flex items-start justify-between rounded-lg border border-border bg-bg/70 px-3 py-2">
                <div>
                  <div className="font-semibold">Monthly cadence</div>
                  <div className="text-xs text-muted">One buy per month</div>
                </div>
                <Badge variant="muted">Ongoing</Badge>
              </div>
              <div className="flex items-start justify-between rounded-lg border border-border bg-bg/70 px-3 py-2">
                <div>
                  <div className="font-semibold">Community notes</div>
                  <div className="text-xs text-muted">Short recap each month</div>
                </div>
                <Badge variant="muted">Planned</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
