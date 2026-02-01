"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
export function BentoGrid() {
  const [eraIndex, setEraIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const scrollRaf = useRef<number | null>(null);

  const clampedIndex = useMemo(
    () => Math.max(0, Math.min(eraIndex, eras.length - 1)),
    [eraIndex]
  );

  const scrollToEra = (nextIndex: number) => {
    const safeIndex = Math.max(0, Math.min(nextIndex, eras.length - 1));
    setEraIndex(safeIndex);
    const target = scrollRef.current?.children?.[safeIndex] as HTMLElement | undefined;
    if (target && scrollRef.current) {
      scrollRef.current.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }
  };

  const getScrollStep = () => {
    const container = scrollRef.current;
    if (!container) return 0;
    const firstChild = container.children[0] as HTMLElement | undefined;
    const styles = window.getComputedStyle(container);
    const gapValue = styles.columnGap || styles.gap || "0";
    const gap = Number.parseFloat(gapValue) || 0;
    const cardWidth = firstChild?.getBoundingClientRect().width ?? container.clientWidth * 0.8;
    return cardWidth + gap;
  };

  const scrollByStep = (direction: -1 | 1) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: direction * getScrollStep(), behavior: "smooth" });
  };

  const updateIndexFromScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = idx;
      }
    });
    setEraIndex((prev) => (prev === closestIndex ? prev : closestIndex));
  }, []);

  const handleScroll = () => {
    if (scrollRaf.current !== null) {
      cancelAnimationFrame(scrollRaf.current);
    }
    scrollRaf.current = requestAnimationFrame(updateIndexFromScroll);
  };

  const handleDragStart = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    dragState.current.isDown = true;
    setIsDragging(true);
    dragState.current.startX = event.clientX;
    dragState.current.scrollLeft = scrollRef.current.scrollLeft;
    scrollRef.current.setPointerCapture(event.pointerId);
  };

  const handleDragEnd = (event?: React.PointerEvent<HTMLDivElement>) => {
    if (event?.pointerId && scrollRef.current?.hasPointerCapture(event.pointerId)) {
      scrollRef.current.releasePointerCapture(event.pointerId);
    }
    dragState.current.isDown = false;
    setIsDragging(false);
  };

  const handleDragMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.isDown || !scrollRef.current) return;
    event.preventDefault();
    const x = event.clientX;
    const walk = x - dragState.current.startX;
    scrollRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  };

  useEffect(() => {
    return () => {
      if (scrollRaf.current !== null) {
        cancelAnimationFrame(scrollRaf.current);
      }
    };
  }, []);

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-12 md:grid-cols-12">
      <Card className="md:col-span-6 flex h-full flex-col border-l-4 border-l-accentRed bg-card/95 transition duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(196,77,77,0.12)]">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              Hall of Fame Rugpulls
            </CardTitle>
            <p className="text-sm text-muted">Lessons etched into the chain.</p>
          </div>
          <Badge variant="red">Rugs</Badge>
        </CardHeader>
        <CardContent className="grid flex-1 auto-rows-[minmax(72px,1fr)] gap-3">
          {rugs.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="flex h-full items-center justify-between gap-3 rounded-lg border border-accentRed/30 bg-accentRed/5 px-4 py-3 transition duration-500 ease-out hover:border-accentRed/60 hover:bg-accentRed/10"
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

      <Card className="md:col-span-6 flex h-full flex-col border-l-4 border-l-accentGreen bg-card/95 transition duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(47,158,111,0.12)]">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              Hall of Fame Runners
            </CardTitle>
            <p className="text-sm text-muted">Community-powered ascents.</p>
          </div>
          <Badge variant="green">Runners</Badge>
        </CardHeader>
        <CardContent className="grid flex-1 auto-rows-[minmax(72px,1fr)] gap-3">
          {runners.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="flex h-full items-center justify-between gap-3 rounded-lg border border-accentGreen/30 bg-accentGreen/5 px-4 py-3 transition duration-500 ease-out hover:border-accentGreen/60 hover:bg-accentGreen/10"
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

      <Card className="md:col-span-12 relative overflow-hidden border border-border/80 bg-card/95">
        <CardHeader className="flex flex-col items-start gap-2">
          <CardTitle className="text-xl">Crypto Onboarding Eras</CardTitle>
          <p className="text-sm text-muted">
            Snap through formative chapters and the events that defined them.
          </p>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="mb-3 flex items-center justify-between text-xs text-muted">
            <span>
              Era {clampedIndex + 1} of {eras.length}
            </span>
            <div className="flex items-center gap-1">
              {eras.map((era, idx) => (
                <button
                  key={era.id}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    idx === clampedIndex ? "bg-accentGold shadow-subtle" : "bg-border"
                  }`}
                  aria-label={`Go to ${era.title}`}
                  onClick={() => scrollToEra(idx)}
                />
              ))}
            </div>
          </div>
          <div className="relative flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-10 w-10 flex-shrink-0 border border-border bg-card shadow-subtle hover:border-accentGold sm:inline-flex z-10"
              onClick={() => scrollByStep(-1)}
              aria-label="Previous era"
              disabled={clampedIndex === 0}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="relative flex-1 min-w-0">
              <div
                ref={scrollRef}
                className={`flex gap-4 overflow-x-auto pb-4 pr-2 scroll-smooth snap-x snap-mandatory overscroll-x-contain touch-pan-x ${
                  isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                }`}
                onPointerDown={handleDragStart}
                onPointerUp={handleDragEnd}
                onPointerCancel={handleDragEnd}
                onPointerLeave={handleDragEnd}
                onPointerMove={handleDragMove}
                onScroll={handleScroll}
              >
                {eras.map((era) => (
                  <div
                    key={era.id}
                    className="flex-none snap-start basis-[70%] sm:basis-[48%] md:basis-[34%] lg:basis-[28%] xl:basis-[22%] max-w-[300px]"
                  >
                    <div className="flex h-full min-h-[220px] flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-subtle aspect-[4/5]">
                      <div className="text-xs font-semibold uppercase text-muted">{era.range}</div>
                      <div className="text-base font-semibold line-clamp-2">{era.title}</div>
                      <p className="mt-3 text-sm text-muted line-clamp-4">{era.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-10 w-10 flex-shrink-0 border border-border bg-card shadow-subtle hover:border-accentGold sm:inline-flex z-10"
              onClick={() => scrollByStep(1)}
              aria-label="Next era"
              disabled={clampedIndex === eras.length - 1}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-12" id="token">
        <CardHeader className="flex flex-col items-start gap-2">
          <CardTitle className="text-xl">$HOT Archive Note</CardTitle>
          <p className="text-sm text-muted">
            $HOT is the trench scribble in the margins: a reminder that memory outlasts mania.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accentGold" />
              Indexed in the archive, not pitched as a promise.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accentGreen" />
              Community rituals logged for continuity, not hype.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-accentRed" />
              A reminder to verify sources before chasing momentum.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="subtle" className="flex-1 min-w-[200px] justify-center">
              <a
                href="https://dexscreener.com/solana"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on DexScreener
              </a>
            </Button>
            <Button asChild variant="ghost" className="flex-1 min-w-[200px] justify-center">
              <a href="https://pump.fun" target="_blank" rel="noopener noreferrer">
                Buy on Pump.Fun
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

