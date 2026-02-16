"use client";

import Link from "next/link";
import React from "react";
import { events } from "@/data/events";
import { eras } from "@/data/eras";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rugOrder = [
  "openclaw-moltbook-incident",
  "terra-luna-collapse",
  "anubisdao-rugpull",
  "thodex-exit-scam",
  "squid-game-token"
];
const runnerOrder = [
  "bitcoin-run-2017",
  "solana-revival-run",
  "dogecoin-run",
  "shiba-inu-run",
  "pepe-memecoin"
];

const rugs = events
  .filter((e) => e.type === "rugpull" && e.hallOfFame && rugOrder.includes(e.slug))
  .sort((a, b) => rugOrder.indexOf(a.slug) - rugOrder.indexOf(b.slug));
const runners = events
  .filter((e) => e.type === "runner" && e.hallOfFame && runnerOrder.includes(e.slug))
  .sort((a, b) => runnerOrder.indexOf(a.slug) - runnerOrder.indexOf(b.slug));

export function BentoGrid() {

  return (
    <section
      className="mx-auto grid max-w-6xl grid-cols-1 gap-6 rounded-3xl border border-border/60 bg-card/90 px-6 pb-12 pt-6 shadow-subtle dark:border-[rgba(255,255,255,0.04)] md:grid-cols-12"
      suppressHydrationWarning
    >
      <Card className="card-lift md:col-span-6 flex h-full flex-col border-l-4 border-l-accentRed bg-card/90 transition duration-700 ease-out hover:shadow-[0_10px_24px_rgba(196,77,77,0.07)] dark:hover:shadow-[0_10px_24px_rgba(0,0,0,0.45)]">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              Hall of Fame Rugpulls
            </CardTitle>
            <p className="text-sm text-muted">The most impactful collapses in web3 history.</p>
          </div>
          <Badge variant="red">Rugs</Badge>
        </CardHeader>
        <CardContent className="grid flex-1 auto-rows-[minmax(72px,1fr)] gap-3">
          {rugs.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="flex h-full items-center justify-between gap-3 rounded-lg border border-accentRed/30 bg-accentRed/5 px-4 py-3 transition duration-500 ease-out hover:border-accentRed/60 hover:bg-accentRed/10 dark:border-transparent"
            >
              <div className="min-w-0">
                <div className="text-sm font-semibold line-clamp-2">{event.title}</div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
                  <Badge variant="gold" className="text-[10px]">
                    Hall of Fame
                  </Badge>
                  <span className="line-clamp-1">
                    {event.chain} • {event.date}
                  </span>
                </div>
              </div>
              <div className="text-right text-xs font-semibold text-accentRed">
                {event.peakMetric ?? "—"}
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card className="card-lift md:col-span-6 flex h-full flex-col border-l-4 border-l-accentGreen bg-card/90 transition duration-700 ease-out hover:shadow-[0_10px_24px_rgba(47,158,111,0.07)] dark:hover:shadow-[0_10px_24px_rgba(0,0,0,0.45)]">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              Hall of Fame Runners
            </CardTitle>
            <p className="text-sm text-muted">The most impactful community runs in web3.</p>
          </div>
          <Badge variant="green">Runners</Badge>
        </CardHeader>
        <CardContent className="grid flex-1 auto-rows-[minmax(72px,1fr)] gap-3">
          {runners.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="flex h-full items-center justify-between gap-3 rounded-lg border border-accentGreen/30 bg-accentGreen/5 px-4 py-3 transition duration-500 ease-out hover:border-accentGreen/60 hover:bg-accentGreen/10 dark:border-transparent"
            >
              <div className="min-w-0">
                <div className="text-sm font-semibold line-clamp-2">{event.title}</div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
                  <Badge variant="gold" className="text-[10px]">
                    Hall of Fame
                  </Badge>
                  <span className="line-clamp-1">
                    {event.chain} • {event.date}
                  </span>
                </div>
              </div>
              <div className="text-right text-xs font-semibold text-accentGreen">
                {event.peakMetric ?? "—"}
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card className="md:col-span-12 relative overflow-hidden border border-border/80 bg-card/95 dark:border-[rgba(255,255,255,0.04)]">
        <CardHeader className="flex flex-col items-start gap-2">
          <CardTitle className="text-xl">Crypto Onboarding Eras</CardTitle>
          <p className="text-sm text-muted">
            Snap through formative chapters and the events that defined them.
          </p>
        </CardHeader>
        <CardContent className="relative overflow-hidden px-0">
          <div className="marquee" aria-label="Crypto onboarding eras carousel">
            <div className="marquee-track">
              <div className="marquee-group">
                {eras.map((era) => (
                  <Link
                    key={`era-${era.id}`}
                    href={`/timeline#era-${era.id}`}
                    className="flex-none basis-[70%] sm:basis-[48%] md:basis-[34%] lg:basis-[28%] xl:basis-[22%] max-w-[300px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accentGold focus-visible:outline-offset-2 rounded-2xl"
                  >
                    <div className="flex h-full min-h-[140px] flex-col rounded-2xl border border-border/80 bg-card px-4 py-3 shadow-subtle transition duration-500 ease-out hover:border-accentGold/70 hover:shadow-[0_0_0_1px_rgba(214,177,94,0.32),0_14px_28px_rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.04)] dark:hover:shadow-[0_0_0_1px_rgba(214,177,94,0.3),0_14px_28px_rgba(0,0,0,0.45)]">
                      <div className="text-xs font-semibold uppercase text-muted">{era.range}</div>
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
                    className="flex-none basis-[70%] sm:basis-[48%] md:basis-[34%] lg:basis-[28%] xl:basis-[22%] max-w-[300px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accentGold focus-visible:outline-offset-2 rounded-2xl"
                  >
                    <div className="flex h-full min-h-[140px] flex-col rounded-2xl border border-border/80 bg-card px-4 py-3 shadow-subtle transition duration-500 ease-out hover:border-accentGold/70 hover:shadow-[0_0_0_1px_rgba(214,177,94,0.32),0_14px_28px_rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.04)] dark:hover:shadow-[0_0_0_1px_rgba(214,177,94,0.3),0_14px_28px_rgba(0,0,0,0.45)]">
                      <div className="text-xs font-semibold uppercase text-muted">{era.range}</div>
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

      <Card className="card-lift md:col-span-12" id="transparency">
        <CardHeader className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl">Transparency</CardTitle>
            <p className="text-sm text-muted">
              Public accountability, verified wallets, and sources-first context.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="gold">Transparency</Badge>
            <Badge variant="gold">Doxxed</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
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
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="subtle" className="flex-1 min-w-[200px] justify-center">
              <Link href="/hot#wallets">View Wallets</Link>
            </Button>
            <Button asChild variant="ghost" className="flex-1 min-w-[200px] justify-center">
              <Link href="/hot">Visit $HOT</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

