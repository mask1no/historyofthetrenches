"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { events } from "@/data/events";
import { eras } from "@/data/eras";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const rugOrder = [
  "mt-gox-bankruptcy",
  "squid-game-token",
  "terra-luna-collapse",
  "ftx-collapse",
  "bitconnect-collapse"
];
const runnerOrder = [
  "bitcoin-run-2017",
  "dogecoin-run",
  "shiba-inu-run",
  "pepe-memecoin",
  "bonk-solana"
];

const rugs = events
  .filter((e) => e.type === "rugpull" && e.hallOfFame && rugOrder.includes(e.slug))
  .sort((a, b) => rugOrder.indexOf(a.slug) - rugOrder.indexOf(b.slug));
const runners = events
  .filter((e) => e.type === "runner" && e.hallOfFame && runnerOrder.includes(e.slug))
  .sort((a, b) => runnerOrder.indexOf(a.slug) - runnerOrder.indexOf(b.slug));
const HOT_CONTRACT_ADDRESS = "So11111111111111111111111111111111111111112";

export function BentoGrid() {
  const [copied, setCopied] = useState(false);
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const [eraIndex, setEraIndex] = useState(0);

  const clampedIndex = useMemo(
    () => Math.max(0, Math.min(eraIndex, eras.length - 1)),
    [eraIndex]
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(HOT_CONTRACT_ADDRESS).then(() => {
      setCopied(true);
      setShowCopiedToast(true);
      setTimeout(() => setCopied(false), 1200);
      setTimeout(() => setShowCopiedToast(false), 1400);
    });
  };

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-12 md:grid-cols-12">
      <Card className="md:col-span-6 md:col-start-1 border-l-4 border-l-accentRed bg-card/95 transition duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(196,77,77,0.12)]">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              Hall of Fame Rugpulls
            </CardTitle>
            <p className="text-sm text-muted">Lessons etched into the chain.</p>
          </div>
          <Badge variant="red">Rugs</Badge>
        </CardHeader>
        <CardContent className="space-y-3">
          {rugs.map((event) => (
            <div
              key={event.slug}
              className="flex items-center justify-between rounded-lg border border-accentRed/30 bg-accentRed/5 px-4 py-3 transition duration-500 ease-out"
            >
              <div>
                <div className="text-sm font-semibold">{event.title}</div>
                <div className="text-xs text-muted">
                  {event.chain} • {event.date} • {event.status}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted font-medium text-accentRed">
                {event.outcome ?? "—"}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="md:col-span-6 md:col-start-7 border-l-4 border-l-accentGreen bg-card/95 transition duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(47,158,111,0.12)]">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              Hall of Fame Runners
            </CardTitle>
            <p className="text-sm text-muted">Community-powered ascents.</p>
          </div>
          <Badge variant="green">Runners</Badge>
        </CardHeader>
        <CardContent className="space-y-3">
          {runners.map((event) => (
            <div
              key={event.slug}
              className="flex items-center justify-between rounded-lg border border-accentGreen/30 bg-accentGreen/5 px-4 py-3 transition duration-500 ease-out"
            >
              <div>
                <div className="text-sm font-semibold">{event.title}</div>
                <div className="text-xs text-muted">
                  {event.chain} • {event.date} • {event.status}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted font-medium text-accentGreen">
                {event.peakMetric ?? "—"}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="md:col-span-12">
        <CardHeader className="flex flex-col items-start gap-2">
          <CardTitle className="text-xl">Crypto Onboarding Eras</CardTitle>
          <p className="text-sm text-muted">
            Snap through formative chapters and the events that defined them.
          </p>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-card to-transparent" />
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 border border-border bg-card shadow-subtle hover:border-accentGold"
              onClick={() => setEraIndex((i) => Math.max(0, i - 1))}
              aria-label="Previous era"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="relative flex-1 overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${clampedIndex * 100}%)` }}
              >
                {eras.map((era) => (
                  <div
                    key={era.id}
                    className="min-w-full md:min-w-[85%] flex-1 rounded-xl border border-border bg-bg p-5 shadow-sm"
                  >
                    <div className="text-xs font-semibold uppercase text-muted">{era.range}</div>
                    <div className="text-base font-semibold">{era.title}</div>
                    <p className="mt-3 text-sm text-muted">{era.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 border border-border bg-card shadow-subtle hover:border-accentGold"
              onClick={() => setEraIndex((i) => Math.min(eras.length - 1, i + 1))}
              aria-label="Next era"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-12" id="token">
        <CardHeader className="flex flex-col items-start gap-2">
          <CardTitle className="text-xl">Community &amp; $HOT</CardTitle>
          <p className="text-sm text-muted">
            Participation-first. The token is a coordination tool, not a promise.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accentGold" />
              Curation bounties for sourced event submissions.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accentGreen" />
              Governance on what makes the Hall of Fame.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accentRed" />
              Red flags registry shared with partner communities.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button
              className="relative flex-1 min-w-[200px] justify-center bg-gradient-to-r from-accentGold/90 to-accentGold/80 text-fg shadow-[0_12px_26px_rgba(214,177,94,0.18)] transition duration-400 ease-out hover:shadow-[0_14px_32px_rgba(214,177,94,0.22)]"
              onClick={handleCopy}
            >
              {copied ? "Copied" : "Copy contract"}
              {showCopiedToast && (
                <span className="absolute left-1/2 top-12 -translate-x-1/2 rounded-xl border border-border bg-card px-3 py-1 text-xs text-accentGold shadow-subtle">
                  Copied!
                </span>
              )}
            </Button>
            <Button
              variant="subtle"
              className="flex-1 min-w-[200px] justify-center gap-2 border border-accentGold/60 bg-card text-fg shadow-[0_12px_26px_rgba(214,177,94,0.12)] transition duration-400 ease-out hover:border-accentGold"
              asChild
            >
              <Link href="https://dexscreener.com/solana/placeholder" target="_blank">
                View on DexScreener
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

