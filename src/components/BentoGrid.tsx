"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  "dogecoin-run",
  "shiba-inu-run",
  "pepe-memecoin",
  "solana-revival-run"
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
  const isInitialized = useRef(false);

  const loopEras = useMemo(() => [...eras, ...eras, ...eras], []);

  const clampedIndex = useMemo(
    () => Math.max(0, Math.min(eraIndex, eras.length - 1)),
    [eraIndex]
  );

  const getScrollStep = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 0;
    const firstChild = container.children[0] as HTMLElement | undefined;
    const styles = window.getComputedStyle(container);
    const gapValue = styles.columnGap || styles.gap || "0";
    const gap = Number.parseFloat(gapValue) || 0;
    const cardWidth = firstChild?.getBoundingClientRect().width ?? container.clientWidth * 0.8;
    return cardWidth + gap;
  }, []);

  const updateIndexFromScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const step = getScrollStep();
    if (!step) return;
    const total = eras.length;
    const sectionWidth = container.scrollWidth / 3;
    if (!Number.isFinite(sectionWidth) || sectionWidth === 0) return;

    const middleStart = sectionWidth;
    const middleEnd = sectionWidth * 2;
    const current = container.scrollLeft;

    if (current < middleStart * 0.5) {
      container.scrollLeft = current + sectionWidth;
      return;
    }

    if (current > middleEnd - middleStart * 0.5) {
      container.scrollLeft = current - sectionWidth;
      return;
    }

    const adjusted = current - middleStart;
    const rawIndex = Math.round(adjusted / step);
    const normalized = ((rawIndex % total) + total) % total;
    setEraIndex((prev) => (prev === normalized ? prev : normalized));
  }, [getScrollStep]);

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
    if (isInitialized.current) return;
    const container = scrollRef.current;
    if (!container) return;
    const step = getScrollStep();
    if (!step) return;
    container.scrollLeft = step * eras.length;
    isInitialized.current = true;
    setEraIndex(0);
  }, [getScrollStep]);

  useEffect(() => {
    const handleResize = () => updateIndexFromScroll();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollRaf.current !== null) {
        cancelAnimationFrame(scrollRaf.current);
      }
    };
  }, [updateIndexFromScroll]);

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 rounded-3xl border border-border/60 bg-card/90 px-6 pb-12 pt-6 shadow-subtle md:grid-cols-12">
      <Card className="md:col-span-6 flex h-full flex-col border-l-4 border-l-accentRed bg-card/95 transition duration-700 ease-out hover:shadow-[0_10px_24px_rgba(196,77,77,0.07)]">
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

      <Card className="md:col-span-6 flex h-full flex-col border-l-4 border-l-accentGreen bg-card/95 transition duration-700 ease-out hover:shadow-[0_10px_24px_rgba(47,158,111,0.07)]">
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
          <div className="mb-5 text-xs text-muted">
            Era {clampedIndex + 1} of {eras.length}
          </div>
          <div className="relative flex items-center gap-3">
            <div className="relative flex-1 min-w-0">
              <div
                ref={scrollRef}
                className={`no-scrollbar flex gap-4 overflow-x-auto pr-2 scroll-smooth snap-x snap-mandatory overscroll-x-contain touch-pan-x ${
                  isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                }`}
                onPointerDown={handleDragStart}
                onPointerUp={handleDragEnd}
                onPointerCancel={handleDragEnd}
                onPointerLeave={handleDragEnd}
                onPointerMove={handleDragMove}
                onScroll={handleScroll}
                style={{ scrollbarWidth: "none" }}
              >
                {loopEras.map((era, index) => (
                  <div
                    key={`${era.id}-${index}`}
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

