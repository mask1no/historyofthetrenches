"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { events } from "@/data/events";
import { eras } from "@/data/eras";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

// Infinite carousel hook with auto-scroll and smooth performance
function useInfiniteCarousel(eras: any[], itemWidth: number = 320) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const lastFrameTimeRef = useRef(0);
  const currentIndexRef = useRef(0);

  // Create infinite array by duplicating items
  const infiniteEras = useMemo(() => {
    if (!eras.length) return [];
    // Create enough duplicates for smooth infinite scroll
    return [...eras, ...eras, ...eras, ...eras, ...eras];
  }, [eras]);

  // Auto-scroll functionality (continuous, smooth)
  useEffect(() => {
    if (!isAutoScrolling || isDragging || !eras.length) return;

    const container = containerRef.current;
    if (!container) return;

    const itemWidthWithGap = itemWidth + 16;
    const totalItems = eras.length;
    const totalWidth = totalItems * itemWidthWithGap;
    const speed = 28; // px per second

    const tick = (time: number) => {
      if (!containerRef.current) return;

      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = time;
      }

      const delta = time - lastFrameTimeRef.current;
      lastFrameTimeRef.current = time;
      containerRef.current.scrollLeft += (speed * delta) / 1000;

      // Keep the scroll within the middle copies for seamless looping
      if (containerRef.current.scrollLeft >= totalWidth * 4) {
        containerRef.current.scrollLeft -= totalWidth * 2;
      } else if (containerRef.current.scrollLeft <= totalWidth) {
        containerRef.current.scrollLeft += totalWidth * 2;
      }

      const itemIndex = Math.round(containerRef.current.scrollLeft / itemWidthWithGap);
      const normalizedIndex = ((itemIndex % totalItems) + totalItems) % totalItems;
      if (normalizedIndex !== currentIndexRef.current) {
        currentIndexRef.current = normalizedIndex;
        setCurrentIndex(normalizedIndex);
      }

      autoScrollRef.current = requestAnimationFrame(tick);
    };

    autoScrollRef.current = requestAnimationFrame(tick);

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      lastFrameTimeRef.current = 0;
    };
  }, [isAutoScrolling, isDragging, eras.length, itemWidth]);

  // Pause auto-scroll on hover/interaction
  const pauseAutoScroll = useCallback(() => {
    setIsAutoScrolling(false);
  }, []);

  const resumeAutoScroll = useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => setIsAutoScrolling(true), 1000);
  }, []);

  // Handle drag start
  const handleDragStart = useCallback((e: React.PointerEvent) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    setIsAutoScrolling(false);
    dragStartRef.current = {
      x: e.clientX,
      scrollLeft: containerRef.current.scrollLeft
    };
    containerRef.current.setPointerCapture(e.pointerId);
  }, []);

  // Handle drag move with smooth performance
  const handleDragMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;

    e.preventDefault();
    const walk = e.clientX - dragStartRef.current.x;
    containerRef.current.scrollLeft = dragStartRef.current.scrollLeft - walk;
  }, [isDragging]);

  // Handle drag end and adjust for infinite scroll
  const handleDragEnd = useCallback((e?: React.PointerEvent) => {
    if (e?.pointerId && containerRef.current?.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }

    setIsDragging(false);
    resumeAutoScroll();

    // Adjust scroll position for infinite effect
    const container = containerRef.current;
    if (!container || !eras.length) return;

    const itemWidthWithGap = itemWidth + 16; // Assuming 16px gap
    const totalItems = eras.length;
    const scrollLeft = container.scrollLeft;
    const itemIndex = Math.round(scrollLeft / itemWidthWithGap);

    // If we're in the first copy, jump to the middle copy
    if (itemIndex < totalItems) {
      container.scrollLeft = scrollLeft + (totalItems * itemWidthWithGap);
    }
    // If we're in the last copy, jump to the middle copy
    else if (itemIndex >= totalItems * 4) {
      container.scrollLeft = scrollLeft - (totalItems * itemWidthWithGap);
    }

    // Update current index
    const normalizedIndex = ((itemIndex % totalItems) + totalItems) % totalItems;
    currentIndexRef.current = normalizedIndex;
    setCurrentIndex(normalizedIndex);
  }, [eras.length, itemWidth, resumeAutoScroll]);

  // Manual navigation
  const goToNext = useCallback(() => {
    pauseAutoScroll();
    setCurrentIndex(prev => prev + 1);
    resumeAutoScroll();
  }, [pauseAutoScroll, resumeAutoScroll]);

  const goToPrev = useCallback(() => {
    pauseAutoScroll();
    setCurrentIndex(prev => prev - 1);
    resumeAutoScroll();
  }, [pauseAutoScroll, resumeAutoScroll]);

  // Smooth scroll to position
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !eras.length || isAutoScrolling || isDragging) return;

    const itemWidthWithGap = itemWidth + 16;
    const totalItems = eras.length;
    const middleOffset = totalItems * itemWidthWithGap; // Start in middle copy
    const targetScroll = middleOffset + (currentIndex * itemWidthWithGap);

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }, [currentIndex, eras.length, itemWidth, isAutoScrolling, isDragging]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !eras.length) return;

    const itemWidthWithGap = itemWidth + 16;
    const totalItems = eras.length;
    const middleOffset = totalItems * itemWidthWithGap * 2;
    container.scrollLeft = middleOffset;
  }, [eras.length, itemWidth]);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  return {
    containerRef,
    infiniteEras,
    currentIndex: ((currentIndex % eras.length) + eras.length) % eras.length,
    isDragging,
    isAutoScrolling,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    goToNext,
    goToPrev,
    pauseAutoScroll,
    resumeAutoScroll
  };
}

export function BentoGrid() {
  const {
    containerRef,
    infiniteEras,
    currentIndex,
    isDragging,
    isAutoScrolling,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    goToNext,
    goToPrev,
    pauseAutoScroll,
    resumeAutoScroll
  } = useInfiniteCarousel(eras, 320);

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
            Era {currentIndex + 1} of {eras.length}
          </div>
          <div className="relative flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-10 w-10 flex-shrink-0 border border-border bg-card shadow-subtle hover:border-accentGold sm:inline-flex z-10"
              onClick={goToPrev}
              aria-label="Previous era"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="relative flex-1 min-w-0">
              <div
                ref={containerRef}
                className={`flex gap-4 overflow-x-auto pb-4 pr-2 overscroll-x-contain touch-pan-x ${
                  isAutoScrolling ? "scroll-auto" : "scroll-smooth snap-x snap-mandatory"
                } ${
                  isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                }`}
                onPointerDown={handleDragStart}
                onPointerUp={handleDragEnd}
                onPointerCancel={handleDragEnd}
                onPointerLeave={handleDragEnd}
                onPointerMove={handleDragMove}
                onMouseEnter={pauseAutoScroll}
                onMouseLeave={resumeAutoScroll}
              >
                {infiniteEras.map((era, index) => (
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
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-10 w-10 flex-shrink-0 border border-border bg-card shadow-subtle hover:border-accentGold sm:inline-flex z-10"
              onClick={goToNext}
              aria-label="Next era"
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

