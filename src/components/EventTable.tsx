"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { EventType } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { X } from "lucide-react";
import { AccentText } from "@/components/AccentText";
import { typeLabel, typeVariant } from "@/lib/eventType";
import { compareEventDatesAsc, compareEventDatesDesc } from "@/lib/utils";
import { canonicalizeChain } from "@/lib/events/taxonomy";
import type { Event, EventFilters } from "@/lib/events/schema";

type FilterState = {
  type: EventType | "all";
  chain: string;
  year: number | "all";
  tags: string[];
  search: string;
  sort: "newest" | "oldest";
};

const SEARCH_SYNC_DELAY_MS = 250;

const typeOptions = [
  { label: "All", value: "all" },
  { label: "Rugpull", value: "rugpull" },
  { label: "Collapse", value: "collapse" },
  { label: "Runner", value: "runner" },
  { label: "Milestone", value: "milestone" },
  { label: "Hack", value: "hack" },
  { label: "Seizure", value: "seizure" }
];

const sortOptions = [
  { label: "Newest → Oldest", value: "newest" },
  { label: "Oldest → Newest", value: "oldest" }
];

const chipBase =
  "rounded-full border px-3 py-1 text-xs uppercase tracking-[0.16em] transition focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const typeChipTone: Record<EventType, string> = {
  rugpull: "border-accentRed/40 bg-accentRed/10 text-fg",
  collapse: "border-border/70 bg-bg/70 text-fg",
  runner: "border-accentGreen/40 bg-accentGreen/10 text-fg",
  milestone: "border-accentGold/40 bg-accentGold/12 text-fg",
  hack: "border-border/70 bg-bg/70 text-fg",
  seizure: "border-border/70 bg-bg/70 text-fg"
};

const getTypeChipClass = (value: EventType | "all", active: boolean) => {
  if (!active) {
    return `${chipBase} border-border text-muted hover:border-accentGold`;
  }
  if (value === "all") {
    return `${chipBase} border-accentGold/40 bg-accentGold/12 text-fg`;
  }
  return `${chipBase} ${typeChipTone[value]}`;
};

const getChainChipClass = (active: boolean) =>
  `${chipBase} ${
    active
      ? "border-accentGreen/40 bg-accentGreen/10 text-fg"
      : "border-border text-muted hover:border-accentGold"
  }`;

const getYearChipClass = (active: boolean) =>
  `${chipBase} ${
    active
      ? "border-accentGold/40 bg-accentGold/12 text-fg"
      : "border-border text-muted hover:border-accentGold"
  }`;

const getTagChipClass = (active: boolean) =>
  `${chipBase} ${
    active
      ? "border-accentGold/40 bg-accentGold/12 text-fg"
      : "border-border text-muted hover:border-accentGold"
  }`;

function parseFiltersFromSearchParams(
  searchParams: ReturnType<typeof useSearchParams>,
  chains: string[],
  years: number[]
): FilterState {
  const typeParam = searchParams.get("type") ?? "all";
  const validTypes: (EventType | "all")[] = ["all", "rugpull", "collapse", "runner", "milestone", "hack", "seizure"];
  const type = validTypes.includes(typeParam as EventType | "all") ? (typeParam as EventType | "all") : "all";

  const chainParam = searchParams.get("chain") ?? "all";
  const canonicalChain = chainParam === "all" ? "all" : canonicalizeChain(chainParam);
  const chain = canonicalChain === "all" || chains.includes(canonicalChain) ? canonicalChain : "all";

  const yearParam = searchParams.get("year");
  let year: number | "all" = "all";
  if (yearParam && yearParam !== "all") {
    const y = Number(yearParam);
    year = Number.isFinite(y) && years.includes(y) ? y : "all";
  }

  const tagsParam = searchParams.get("tags");
  const tags = tagsParam ? tagsParam.split(",").map((t) => t.trim()).filter(Boolean) : [];

  const search = searchParams.get("search") ?? "";

  const sortParam = searchParams.get("sort") ?? "newest";
  const sort = sortParam === "oldest" ? "oldest" : "newest";

  return { type, chain, year, tags, search, sort };
}

type ArchiveApiResponse = {
  events: Event[];
  eventFilters: EventFilters;
};

export function EventTable() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [, startTransition] = useTransition();
  const [archiveData, setArchiveData] = useState<ArchiveApiResponse | null>(null);
  const [loadError, setLoadError] = useState(false);
  const chains = useMemo(() => archiveData?.eventFilters.chains ?? [], [archiveData]);
  const years = useMemo(() => archiveData?.eventFilters.years ?? [], [archiveData]);
  const tags = useMemo(() => archiveData?.eventFilters.tags ?? [], [archiveData]);

  const defaultFilters: FilterState = {
    type: "all",
    chain: "all",
    year: "all",
    tags: [],
    search: "",
    sort: "newest"
  };
  const [filters, setFilters] = useState<FilterState>(() =>
    parseFiltersFromSearchParams(searchParams, chains, years)
  );
  const [debouncedSearch, setDebouncedSearch] = useState(filters.search);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadArchiveData = async () => {
      try {
        const response = await fetch("/api/archive", { cache: "force-cache" });
        if (!response.ok) {
          throw new Error(`Archive request failed: ${response.status}`);
        }
        const data = (await response.json()) as ArchiveApiResponse;
        if (!cancelled) {
          setArchiveData(data);
          setLoadError(false);
        }
      } catch {
        if (!cancelled) {
          setLoadError(true);
        }
      }
    };

    loadArchiveData();
    return () => {
      cancelled = true;
    };
  }, []);

  // Read URL params on mount (handles hydration / client nav)
  useEffect(() => {
    setFilters(parseFiltersFromSearchParams(searchParams, chains, years));
  }, [searchParams, chains, years]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedSearch(filters.search);
    }, SEARCH_SYNC_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [filters.search]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.type !== "all") params.set("type", filters.type);
    if (filters.chain !== "all") params.set("chain", filters.chain);
    if (filters.year !== "all") params.set("year", String(filters.year));
    if (filters.tags.length > 0) params.set("tags", filters.tags.join(","));
    if (debouncedSearch.trim()) params.set("search", debouncedSearch.trim());
    if (filters.sort !== "newest") params.set("sort", filters.sort);
    const qs = params.toString();
    const currentQs = searchParams.toString();
    if (qs === currentQs) {
      return;
    }
    const pathname = window.location.pathname;
    const newUrl = qs ? `${pathname}?${qs}` : pathname;
    startTransition(() => {
      router.replace(newUrl, { scroll: false });
    });
  }, [
    filters.type,
    filters.chain,
    filters.year,
    filters.tags,
    filters.sort,
    debouncedSearch,
    router,
    searchParams,
    startTransition
  ]);

  // Keyboard shortcut: "/" to focus search (when not in input/textarea/select)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "/") return;
      const active = document.activeElement as HTMLElement | null;
      const tag = active?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      e.preventDefault();
      searchInputRef.current?.focus();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const [showAllTags, setShowAllTags] = useState(false);
  const curatedTags = ["defi", "meme", "cefi", "regulation", "hack", "nft", "exchange"];
  const topTags = curatedTags.filter((tag) => tags.includes(tag));
  const trimmedSearch = filters.search.trim();
  const hasActiveFilters =
    filters.type !== "all" ||
    filters.chain !== "all" ||
    filters.year !== "all" ||
    filters.tags.length > 0 ||
    trimmedSearch.length > 0;
  const mobileFilterCount =
    (filters.type !== "all" ? 1 : 0) +
    (filters.chain !== "all" ? 1 : 0) +
    (filters.year !== "all" ? 1 : 0) +
    filters.tags.length;

  const filtered = useMemo(() => {
    const search = filters.search.toLowerCase();
    const selectedTags = filters.tags.map((tag) => tag.toLowerCase());
    return (archiveData?.events ?? []).filter((event) => {
      const haystack = [
        event.title,
        event.summary,
        event.chain,
        canonicalizeChain(event.chain),
        event.type,
        ...event.tags
      ]
        .join(" ")
        .toLowerCase();
      return (
        (filters.type === "all" || event.type === filters.type) &&
        (filters.chain === "all" || canonicalizeChain(event.chain) === filters.chain) &&
        (filters.year === "all" || event.year === filters.year) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => event.tags.some((t) => t.toLowerCase().includes(tag)))) &&
        (!search || haystack.includes(search))
      );
    });
  }, [archiveData?.events, filters]);

  const sorted = useMemo(() => {
    const list = [...filtered];
    if (filters.sort === "oldest") {
      return list.sort(compareEventDatesAsc);
    }
    return list.sort(compareEventDatesDesc);
  }, [filtered, filters.sort]);

  const PAGE_SIZE = 25;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filters]);

  const visible = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  return (
    <section className="space-y-4">
      {loadError && (
        <div className="rounded-xl border border-accentRed/40 bg-accentRed/10 px-4 py-3 text-sm text-fg">
          Archive data failed to load. Refresh the page to retry.
        </div>
      )}
      <div className="card-lift rounded-xl border border-border bg-bg p-4 shadow-subtle dark:border-[color:var(--border-dark-soft)]">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Search
            <kbd className="ml-1 rounded border border-border px-1.5 py-0.5 text-[10px] font-mono text-muted">/</kbd>
          </label>
          <Input
            ref={searchInputRef}
            className="h-11 rounded-xl"
            placeholder="Search title, tags, chain, or type"
            value={filters.search}
            onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
          />
        </div>
        <div className="mt-3 md:hidden">
          <button
            type="button"
            className="inline-flex rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-fg transition hover:border-accentGold dark:border-[color:var(--border-dark-soft)]"
            onClick={() => setFiltersOpen((prev) => !prev)}
            aria-expanded={filtersOpen}
            aria-controls="event-filters-panel"
          >
            Filters ({mobileFilterCount})
          </button>
        </div>
        <div
          id="event-filters-panel"
          className={`${filtersOpen ? "block" : "hidden"} mt-4 space-y-2 md:block`}
        >
          <div className="grid grid-cols-1 items-end gap-3 md:grid-cols-8">
            <Select
              label="Type"
              value={filters.type}
              onChange={(value) => setFilters((prev) => ({ ...prev, type: value as any }))}
              options={typeOptions}
            />
            <Select
              label="Chain"
              value={filters.chain}
              onChange={(value) => setFilters((prev) => ({ ...prev, chain: value }))}
              options={[{ label: "All", value: "all" }, ...chains.map((chain) => ({ label: chain, value: chain }))]}
            />
            <Select
              label="Year"
              value={filters.year === "all" ? "all" : String(filters.year)}
              onChange={(value) =>
                setFilters((prev) => ({
                  ...prev,
                  year: value === "all" ? "all" : Number(value)
                }))
              }
              options={[{ label: "All", value: "all" }, ...years.map((year) => ({ label: String(year), value: String(year) }))]}
            />
            <Select
              label="Sort"
              value={filters.sort}
              onChange={(value) =>
                setFilters((prev) => ({ ...prev, sort: value as FilterState["sort"] }))
              }
              options={sortOptions}
              className="md:col-span-2 md:col-start-7"
            />
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button
                type="button"
                className={getTagChipClass(filters.tags.length === 0)}
                onClick={() => setFilters((prev) => ({ ...prev, tags: [] }))}
              >
                All tags
              </button>
              {topTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={getTagChipClass(filters.tags.includes(tag))}
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      tags: prev.tags.includes(tag)
                        ? prev.tags.filter((value) => value !== tag)
                        : [...prev.tags, tag]
                    }))
                  }
                >
                  <span className="flex items-center gap-1">
                    {tag}
                    {filters.tags.includes(tag) && (
                      <X className="h-3 w-3" />
                    )}
                  </span>
                </button>
              ))}
              <button
                type="button"
                className={`${chipBase} border-border text-muted hover:border-accentGold`}
                onClick={() => setShowAllTags((prev) => !prev)}
              >
                {showAllTags ? "Less..." : "More..."}
              </button>
            </div>
            {showAllTags && (
              <div className="flex flex-wrap gap-2 border-t border-border/60 pt-2 text-xs dark:border-[color:var(--border-dark-soft)]">
                {tags
                  .filter((tag) => !topTags.includes(tag))
                  .map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={getTagChipClass(filters.tags.includes(tag))}
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          tags: prev.tags.includes(tag)
                            ? prev.tags.filter((value) => value !== tag)
                            : [...prev.tags, tag]
                        }))
                      }
                    >
                      <span className="flex items-center gap-1">
                        {tag}
                        {filters.tags.includes(tag) && (
                          <X className="h-3 w-3" />
                        )}
                      </span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted uppercase tracking-[0.18em]">Active</span>
          {filters.type !== "all" && (
            <button
              type="button"
              className={getTypeChipClass(filters.type, true)}
              onClick={() => setFilters((prev) => ({ ...prev, type: "all" }))}
              aria-label={`Clear type filter ${filters.type}`}
            >
              {typeLabel[filters.type]}
              <X className="h-3 w-3" />
            </button>
          )}
          {filters.chain !== "all" && (
            <button
              type="button"
              className={getChainChipClass(true)}
              onClick={() => setFilters((prev) => ({ ...prev, chain: "all" }))}
              aria-label={`Clear chain filter ${filters.chain}`}
            >
              {filters.chain}
              <X className="h-3 w-3" />
            </button>
          )}
          {filters.year !== "all" && (
            <button
              type="button"
              className={getYearChipClass(true)}
              onClick={() => setFilters((prev) => ({ ...prev, year: "all" }))}
              aria-label={`Clear year filter ${filters.year}`}
            >
              {filters.year}
              <X className="h-3 w-3" />
            </button>
          )}
          {filters.tags.map((tag) => (
            <button
              key={`active-${tag}`}
              type="button"
              className={getTagChipClass(true)}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  tags: prev.tags.filter((value) => value !== tag)
                }))
              }
              aria-label={`Clear tag filter ${tag}`}
            >
              {tag}
              <X className="h-3 w-3" />
            </button>
          ))}
          {trimmedSearch.length > 0 && (
            <button
              type="button"
              className={`${chipBase} border-border text-muted hover:border-accentGold`}
              onClick={() => setFilters((prev) => ({ ...prev, search: "" }))}
              aria-label="Clear search filter"
            >
              search
              <X className="h-3 w-3" />
            </button>
          )}
          <button
            type="button"
            className={`${chipBase} border-border text-muted hover:border-accentGold`}
            onClick={() => setFilters(defaultFilters)}
            aria-label="Clear all filters"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-subtle dark:border-[color:var(--border-dark-soft)]">
        <div className="border-b border-border px-4 py-3 text-xs uppercase tracking-[0.18em] text-muted dark:border-[color:var(--border-dark-soft)]">
          <span aria-live="polite"><AccentText>{sorted.length}</AccentText> events</span>
        </div>
        <div className="divide-y divide-border">
          {visible.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="flex flex-col gap-2.5 px-4 py-4 transition hover:bg-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-accentGold"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1 md:flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold">{event.title}</div>
                    {event.hallOfFame && <Badge variant="gold">Hall of Fame</Badge>}
                  </div>
                  <p className="line-clamp-2 text-sm text-muted">{event.summary}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <Badge variant={typeVariant[event.type]} className="w-fit text-xs">
                      {typeLabel[event.type]}
                    </Badge>
                    <Badge variant="muted" className="text-xs">
                      {canonicalizeChain(event.chain)}
                    </Badge>
                    <time className="text-xs text-muted" dateTime={event.date}>{event.date}</time>
                  </div>
                </div>
              </div>
              <div className="hidden flex-wrap items-center gap-2 sm:flex">
                {event.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
                {event.tags.length > 3 && (
                  <Badge variant="muted">+{event.tags.length - 3} more</Badge>
                )}
              </div>
              <div className="flex items-center justify-between gap-3 text-xs text-muted sm:text-sm">
                <span>{event.outcome ?? "Outcome pending"}</span>
              </div>
            </Link>
          ))}
          {visible.length === 0 && (
            <div className="flex flex-col items-center gap-3 px-4 py-12 text-center">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
              </div>
              <div className="text-sm font-medium text-fg">No events found</div>
              <p className="max-w-xs text-xs text-muted">
                Try adjusting your filters or search to discover more events in the archive.
              </p>
              <button
                type="button"
                className="mt-1 rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-muted transition hover:border-accentGold hover:text-fg dark:border-[color:var(--border-dark-soft)]"
                onClick={() => setFilters(defaultFilters)}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        {hasMore && (
          <div className="border-t border-border px-4 py-3 text-center dark:border-[color:var(--border-dark-soft)]">
            <button
              type="button"
              className="rounded-full border border-border px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted transition hover:border-accentGold hover:text-fg dark:border-[color:var(--border-dark-soft)]"
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            >
              Show more ({sorted.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

