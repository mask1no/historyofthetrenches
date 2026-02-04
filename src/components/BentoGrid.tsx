"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

const useIntersectionObserver = (
  rootRef: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit
) => {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver((entries) => {
      setVisibleIndices((prev) => {
        const next = new Set(prev);
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (!Number.isFinite(index)) return;
          if (entry.isIntersecting) {
            next.add(index);
          } else {
            next.delete(index);
          }
        });
        return next;
      });
    }, options);

    itemRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold, rootRef]);

  return { visibleIndices, itemRefs };
};

class CarouselErrorBoundary extends React.Component<
  React.PropsWithChildren,
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted">
          Carousel temporarily unavailable.
        </div>
      );
    }
    return this.props.children;
  }
}
export function BentoGrid() {
  const [eraIndex, setEraIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const scrollRaf = useRef<number | null>(null);
  const isInitialized = useRef(false);

  const extendedEras = useMemo(() => {
    const buffer = 2;
    if (eras.length <= buffer) return eras;
    return [...eras.slice(-buffer), ...eras, ...eras.slice(0, buffer)];
  }, [eras]);
  const { visibleIndices, itemRefs } = useIntersectionObserver(scrollRef, {
    threshold: 0.5,
    rootMargin: "-50px"
  });

  const clampedIndex = useMemo(
    () => Math.max(0, Math.min(eraIndex, eras.length - 1)),
    [eraIndex]
  );

  const getItemWidth = useCallback(() => {
    const container = scrollRef.current;
    if (!container || extendedEras.length === 0) return 0;
    return container.scrollWidth / extendedEras.length;
  }, [extendedEras.length]);

  const handleScrollEnd = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = getItemWidth();
    if (!itemWidth) return;
    const currentScroll = container.scrollLeft;
    const centerPosition = eras.length * itemWidth;
    if (currentScroll < itemWidth * 2) {
      container.scrollLeft = currentScroll + centerPosition;
    } else if (currentScroll > itemWidth * (extendedEras.length - 2)) {
      container.scrollLeft = currentScroll - centerPosition;
    }
  }, [extendedEras.length, eras.length, getItemWidth]);

  const getVisibleIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 0;
    const itemWidth = getItemWidth();
    if (!itemWidth) return 0;
    const centerOffset = eras.length * itemWidth;
    const adjustedScroll = container.scrollLeft - centerOffset;
    const rawIndex = Math.round(adjustedScroll / itemWidth);
    return Math.max(0, Math.min(rawIndex, eras.length - 1));
  }, [eras.length, getItemWidth]);

  const updateIndexFromScroll = useCallback(() => {
    if (!eras.length) return;
    const normalized = getVisibleIndex();
    setEraIndex((prev) => (prev === normalized ? prev : normalized));
    handleScrollEnd();
  }, [eras.length, getVisibleIndex, handleScrollEnd]);

  const handleScroll = useCallback(() => {
    if (scrollRaf.current !== null) {
      cancelAnimationFrame(scrollRaf.current);
    }
    scrollRaf.current = requestAnimationFrame(() => {
      updateIndexFromScroll();
      scrollRaf.current = null;
    });
  }, [updateIndexFromScroll]);

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStart.current = {
      x: event.clientX,
      scrollLeft: scrollRef.current.scrollLeft
    };
    scrollRef.current.setPointerCapture(event.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging || !scrollRef.current) return;
      event.preventDefault();
      const walk = event.clientX - dragStart.current.x;
      scrollRef.current.scrollLeft = dragStart.current.scrollLeft - walk;
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(
    (event?: React.PointerEvent<HTMLDivElement>) => {
      if (event?.pointerId && scrollRef.current?.hasPointerCapture(event.pointerId)) {
        scrollRef.current.releasePointerCapture(event.pointerId);
      }
      setIsDragging(false);
      setTimeout(handleScrollEnd, 100);
    },
    [handleScrollEnd]
  );

  const scrollToItem = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container) return;
      const itemWidth = getItemWidth();
      if (!itemWidth) return;
      const clamped = Math.max(0, Math.min(index, eras.length - 1));
      const centerPosition = eras.length * itemWidth;
      container.scrollTo({
        left: centerPosition + clamped * itemWidth,
        behavior: isDragging ? "auto" : "smooth"
      });
    },
    [eras.length, getItemWidth, isDragging]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollToItem(eraIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollToItem(eraIndex + 1);
      }
    },
    [eraIndex, scrollToItem]
  );

  useEffect(() => {
    if (isInitialized.current) return;
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = getItemWidth();
    if (!itemWidth) return;
    const centerPosition = eras.length * itemWidth;
    container.scrollLeft = centerPosition;
    isInitialized.current = true;
    setEraIndex(0);
  }, [eras.length, getItemWidth]);

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
          <CarouselErrorBoundary>
            <div
              className="relative flex items-center gap-3"
              role="region"
              aria-label="Crypto onboarding eras carousel"
            >
              <div className="relative flex-1 min-w-0">
                <div
                  ref={scrollRef}
                  className={`no-scrollbar flex gap-4 overflow-x-auto pr-2 snap-x snap-mandatory overscroll-x-contain touch-pan-x ${
                    isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                  }`}
                  onPointerDown={handlePointerDown}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                  onPointerMove={handlePointerMove}
                  onScroll={handleScroll}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  aria-live="polite"
                  style={{
                    scrollbarWidth: "none",
                    scrollBehavior: isDragging ? "auto" : "smooth"
                  }}
                >
                  {extendedEras.map((era, index) => {
                    const isVisible = visibleIndices.size === 0 || visibleIndices.has(index);
                    return (
                    <div
                      key={`${era.id}-${index}`}
                      data-index={index}
                      className="flex-none snap-start basis-[70%] sm:basis-[48%] md:basis-[34%] lg:basis-[28%] xl:basis-[22%] max-w-[300px]"
                      aria-label={`${era.title} era`}
                      aria-hidden={!isVisible}
                      ref={(node) => {
                        itemRefs.current[index] = node;
                      }}
                    >
                      <div className="flex h-full min-h-[220px] flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-subtle aspect-[4/5]">
                        <div className="text-xs font-semibold uppercase text-muted">{era.range}</div>
                        <div className="text-base font-semibold line-clamp-2">{era.title}</div>
                        <p className="mt-3 text-sm text-muted line-clamp-4">{era.description}</p>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CarouselErrorBoundary>
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

