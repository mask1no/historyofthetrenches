"use client";

import Link from "next/link";
import React, { useState } from "react";
import { events } from "@/data/events";
import { eras } from "@/data/eras";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AccentText } from "@/components/AccentText";

const rugOrder = [
  "terra-luna-collapse",
  "anubisdao-rugpull",
  "thodex-exit-scam",
  "squid-game-token",
  "safemoon-drain",
  "meerkat-finance-rugpull"
];
const runnerOrder = [
  "bitcoin-run-2017",
  "solana-revival-run",
  "dogecoin-run",
  "shiba-inu-run",
  "pepe-memecoin"
];

const rugs = events
  .filter((e) => (e.type === "rugpull" || e.type === "collapse") && e.hallOfFame && rugOrder.includes(e.slug))
  .sort((a, b) => rugOrder.indexOf(a.slug) - rugOrder.indexOf(b.slug));
const runners = events
  .filter((e) => e.type === "runner" && e.hallOfFame && runnerOrder.includes(e.slug))
  .sort((a, b) => runnerOrder.indexOf(a.slug) - runnerOrder.indexOf(b.slug));

export function BentoGrid() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pb-10 pt-4 sm:gap-6 sm:px-6 sm:pb-12 sm:pt-6 md:grid-cols-12"
      suppressHydrationWarning
    >
      <Card className="card-lift md:col-span-6 flex h-full flex-col border-l-4 border-l-accentRed bg-card/90 transition duration-500 ease-out dark:border-transparent dark:border-l-accentRed">
        <CardHeader className="flex flex-row items-center justify-between p-4 pb-2 sm:p-6 sm:pb-3">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              Hall of Fame Collapses
            </CardTitle>
            <p className="text-sm text-muted">The most impactful collapses and rugpulls in web3 history.</p>
          </div>
          <Badge variant="red">Rugs</Badge>
        </CardHeader>
        <CardContent className="grid flex-1 auto-rows-[minmax(72px,1fr)] gap-2.5 p-4 pt-0 sm:gap-3 sm:p-6 sm:pt-0">
          {rugs.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="flex h-full items-center justify-between gap-2.5 rounded-lg border border-accentRed/30 bg-accentRed/5 px-3 py-2.5 transition duration-300 ease-out hover:border-accentRed/50 hover:bg-accentRed/10 dark:border-accentRed/20 sm:gap-3 sm:px-4 sm:py-3"
            >
              <div className="min-w-0">
                <div className="text-[13px] font-semibold line-clamp-2 sm:text-sm">{event.title}</div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
                  <Badge variant="gold" className="text-[10px]">
                    Hall of Fame
                  </Badge>
                  <span className="line-clamp-1">
                    {event.chain} • {event.date}
                  </span>
                </div>
              </div>
              <AccentText className="hidden text-right text-xs sm:block">
                {event.peakMetric ?? "N/A"}
              </AccentText>
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card className="card-lift md:col-span-6 flex h-full flex-col border-l-4 border-l-accentGreen bg-card/90 transition duration-500 ease-out dark:border-transparent dark:border-l-accentGreen">
        <CardHeader className="flex flex-row items-center justify-between p-4 pb-2 sm:p-6 sm:pb-3">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              Hall of Fame Runners
            </CardTitle>
            <p className="text-sm text-muted">The most impactful community runs in web3.</p>
          </div>
          <Badge variant="green">Runners</Badge>
        </CardHeader>
        <CardContent className="grid flex-1 auto-rows-[minmax(72px,1fr)] gap-2.5 p-4 pt-0 sm:gap-3 sm:p-6 sm:pt-0">
          {runners.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="flex h-full items-center justify-between gap-2.5 rounded-lg border border-accentGreen/30 bg-accentGreen/5 px-3 py-2.5 transition duration-300 ease-out hover:border-accentGreen/50 hover:bg-accentGreen/10 dark:border-accentGreen/20 sm:gap-3 sm:px-4 sm:py-3"
            >
              <div className="min-w-0">
                <div className="text-[13px] font-semibold line-clamp-2 sm:text-sm">{event.title}</div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
                  <Badge variant="gold" className="text-[10px]">
                    Hall of Fame
                  </Badge>
                  <span className="line-clamp-1">
                    {event.chain} • {event.date}
                  </span>
                </div>
              </div>
              <AccentText className="hidden text-right text-xs sm:block">
                {event.peakMetric ?? "N/A"}
              </AccentText>
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card className="md:col-span-12 relative overflow-hidden border border-border/80 bg-card/95 dark:border-transparent dark:shadow-[0_10px_28px_rgba(0,0,0,0.42)]">
        <CardHeader className="flex flex-col items-start gap-2 p-4 pb-2 sm:flex-row sm:items-center sm:justify-between sm:p-6 sm:pb-3">
          <div>
            <CardTitle className="text-xl">Crypto Onboarding Eras</CardTitle>
            <p className="text-sm text-muted">
              Snap through formative chapters and the events that defined them.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play carousel" : "Pause carousel"}
            className="shrink-0 self-end sm:self-auto rounded-full border border-border px-3 py-1 text-xs text-muted hover:border-accentGold transition"
          >
            {paused ? "Play" : "Pause"}
          </button>
        </CardHeader>
        <CardContent className="relative overflow-hidden px-0 pb-4 sm:pb-6">
          <div className="marquee" role="region" aria-roledescription="carousel" aria-label="Crypto onboarding eras carousel">
            <div className="marquee-track" style={paused ? { animationPlayState: "paused" } : undefined}>
              <div className="marquee-group">
                {eras.map((era) => (
                  <Link
                    key={`era-${era.id}`}
                    href={`/timeline#era-${era.id}`}
                    className="flex-none basis-[86%] sm:basis-[48%] md:basis-[34%] lg:basis-[28%] xl:basis-[22%] max-w-[300px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accentGold focus-visible:outline-offset-2 rounded-xl"
                  >
                    <div className="flex h-full min-h-[130px] md:min-h-[140px] flex-col rounded-xl border border-border/80 dark:border-transparent bg-card px-4 py-3 shadow-subtle transition duration-300 ease-out hover:border-border-subtle dark:shadow-[0_10px_24px_rgba(0,0,0,0.42)]">
                      <div className="text-xs font-semibold text-muted">{era.range}</div>
                      <div className="text-base font-semibold line-clamp-2">{era.title}</div>
                      <p className="mt-2 text-sm text-muted line-clamp-3">{era.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="marquee-group" aria-hidden="true">
                {eras.map((era) => (
                  <Link
                    key={`era-dup-${era.id}`}
                    href={`/timeline#era-${era.id}`}
                    className="flex-none basis-[86%] sm:basis-[48%] md:basis-[34%] lg:basis-[28%] xl:basis-[22%] max-w-[300px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accentGold focus-visible:outline-offset-2 rounded-xl"
                  >
                    <div className="flex h-full min-h-[130px] md:min-h-[140px] flex-col rounded-xl border border-border/80 dark:border-transparent bg-card px-4 py-3 shadow-subtle transition duration-300 ease-out hover:border-border-subtle dark:shadow-[0_10px_24px_rgba(0,0,0,0.42)]">
                      <div className="text-xs font-semibold text-muted">{era.range}</div>
                      <div className="text-base font-semibold line-clamp-2">{era.title}</div>
                      <p className="mt-2 text-sm text-muted line-clamp-3">{era.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="card-lift md:col-span-12 dark:border-transparent" id="transparency">
        <CardHeader className="flex flex-col items-start gap-3 p-4 pb-2 md:flex-row md:items-center md:justify-between md:p-6 md:pb-3">
          <div className="space-y-1">
            <CardTitle className="text-xl">Transparency</CardTitle>
            <p className="text-sm text-muted">
              Public accountability, verified wallets, and sources-first context.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="gold">Transparency.</Badge>
            <Badge variant="gold">Doxxed</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 p-4 pt-0 md:p-6 md:pt-0">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accentGold" />
              Updates are public and timestamped.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accentGreen" />
              Curator wallets are publicly linked.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accentRed" />
              Sources &gt; hype.
            </li>
          </ul>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <Button asChild variant="subtle" className="w-full justify-center sm:flex-1 sm:min-w-[200px]">
              <Link href="/hot#wallets">View Wallets</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-center sm:flex-1 sm:min-w-[200px]">
              <Link href="/hot">Visit $HOT</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

