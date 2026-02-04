"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { events, type Event, type EventType } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { typeLabel, typeVariant } from "@/lib/eventType";
import { compareEventDatesAsc, compareEventDatesDesc } from "@/lib/utils";

type FilterState = {
  type: EventType | "all";
  chain: string;
  tags: string[];
  search: string;
  sort: "newest" | "oldest";
};

const chains = Array.from(new Set(events.map((e) => e.chain)));
const chainTagSet = new Set<string>();
const extraChainTags = [
  "bnb",
  "bsc",
  "eth",
  "ethereum",
  "btc",
  "bitcoin",
  "sol",
  "solana",
  "arb",
  "arbitrum",
  "op",
  "optimism",
  "matic",
  "polygon",
  "avax",
  "avalanche",
  "base"
];

chains.forEach((chain) => {
  chainTagSet.add(chain.toLowerCase());
  chain
    .split(/[^a-z0-9]+/i)
    .map((token) => token.toLowerCase())
    .filter((token) => token.length > 2)
    .forEach((token) => chainTagSet.add(token));
});

extraChainTags.forEach((tag) => chainTagSet.add(tag));

const tags = Array.from(
  new Set(events.flatMap((e) => e.tags.filter((tag) => !chainTagSet.has(tag.toLowerCase()))))
).sort();

const typeOptions = [
  { label: "All", value: "all" },
  { label: "Rugpull", value: "rugpull" },
  { label: "Collapse", value: "collapse" },
  { label: "Runner", value: "runner" },
  { label: "Milestone", value: "milestone" },
  { label: "Hack", value: "hack" }
];

const sortOptions = [
  { label: "Newest → Oldest", value: "newest" },
  { label: "Oldest → Newest", value: "oldest" }
];

function matchesFilters(event: Event, filters: FilterState) {
  const search = filters.search.toLowerCase();
  const haystack = [
    event.title,
    event.summary,
    event.chain,
    event.type,
    ...event.tags
  ]
    .join(" ")
    .toLowerCase();
  const selectedTags = filters.tags.map((tag) => tag.toLowerCase());
  return (
    (filters.type === "all" || event.type === filters.type) &&
    (filters.chain === "all" || event.chain === filters.chain) &&
    (selectedTags.length === 0 ||
      selectedTags.every((tag) => event.tags.some((t) => t.toLowerCase().includes(tag)))) &&
    (!search || haystack.includes(search))
  );
}

export function EventTable() {
  const router = useRouter();
  const defaultFilters: FilterState = {
    type: "all",
    chain: "all",
    tags: [],
    search: "",
    sort: "newest"
  };
  const [filters, setFilters] = useState<FilterState>({
    type: "all",
    chain: "all",
    tags: [],
    search: "",
    sort: "newest"
  });
  const [showAllTags, setShowAllTags] = useState(false);
  const curatedTags = ["defi", "meme", "cefi", "regulation", "hack", "nft", "exchange"];
  const topTags = curatedTags.filter((tag) => tags.includes(tag));
  const trimmedSearch = filters.search.trim();
  const hasActiveFilters =
    filters.type !== "all" ||
    filters.chain !== "all" ||
    filters.tags.length > 0 ||
    trimmedSearch.length > 0;

  const filtered = useMemo(
    () => events.filter((event) => matchesFilters(event, filters)),
    [filters]
  );

  const sorted = useMemo(() => {
    const list = [...filtered];
    if (filters.sort === "oldest") {
      return list.sort(compareEventDatesAsc);
    }
    return list.sort(compareEventDatesDesc);
  }, [filtered, filters.sort]);

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-bg p-4 shadow-subtle">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6 items-end">
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
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Search
            </label>
            <Input
              className="h-11 rounded-2xl"
              placeholder="Search title, tags, chain, or type"
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, search: e.target.value }))
              }
            />
          </div>
          <Select
            label="Sort"
            value={filters.sort}
            onChange={(value) =>
              setFilters((prev) => ({ ...prev, sort: value as FilterState["sort"] }))
            }
            options={sortOptions}
            className="md:col-span-2"
          />
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              type="button"
              className={`rounded-full border px-3 py-1 uppercase tracking-[0.16em] transition focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                filters.tags.length === 0
                  ? "border-accentGold bg-accentGold/15 text-fg"
                  : "border-border text-muted hover:border-accentGold"
              }`}
              onClick={() => setFilters((prev) => ({ ...prev, tags: [] }))}
            >
              All tags
            </button>
            {topTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`rounded-full border px-3 py-1 uppercase tracking-[0.16em] transition focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                  filters.tags.includes(tag)
                    ? "border-accentGold bg-accentGold/15 text-fg"
                    : "border-border text-muted hover:border-accentGold"
                }`}
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
                    <span className="text-[10px] font-semibold">x</span>
                  )}
                </span>
              </button>
            ))}
            <button
              type="button"
              className="rounded-full border border-border px-3 py-1 uppercase tracking-[0.16em] text-muted transition hover:border-accentGold focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={() => setShowAllTags((prev) => !prev)}
            >
              {showAllTags ? "Less..." : "More..."}
            </button>
          </div>
          {showAllTags && (
            <div className="flex flex-wrap gap-2 border-t border-border/60 pt-2 text-xs">
              {tags
                .filter((tag) => !topTags.includes(tag))
                .map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`rounded-full border px-3 py-1 uppercase tracking-[0.16em] transition focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                      filters.tags.includes(tag)
                        ? "border-accentGold bg-accentGold/15 text-fg"
                        : "border-border text-muted hover:border-accentGold"
                    }`}
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
                        <span className="text-[10px] font-semibold">x</span>
                      )}
                    </span>
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted uppercase tracking-[0.18em]">Active</span>
          {filters.type !== "all" && (
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-muted transition hover:border-accentGold focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={() => setFilters((prev) => ({ ...prev, type: "all" }))}
              aria-label={`Clear type filter ${filters.type}`}
            >
              {filters.type}
              <span className="text-[10px] font-semibold">x</span>
            </button>
          )}
          {filters.chain !== "all" && (
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-muted transition hover:border-accentGold focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={() => setFilters((prev) => ({ ...prev, chain: "all" }))}
              aria-label={`Clear chain filter ${filters.chain}`}
            >
              {filters.chain}
              <span className="text-[10px] font-semibold">x</span>
            </button>
          )}
          {filters.tags.map((tag) => (
            <button
              key={`active-${tag}`}
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-muted transition hover:border-accentGold focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  tags: prev.tags.filter((value) => value !== tag)
                }))
              }
              aria-label={`Clear tag filter ${tag}`}
            >
              {tag}
              <span className="text-[10px] font-semibold">x</span>
            </button>
          ))}
          {trimmedSearch.length > 0 && (
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-muted transition hover:border-accentGold focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={() => setFilters((prev) => ({ ...prev, search: "" }))}
              aria-label="Clear search filter"
            >
              search
              <span className="text-[10px] font-semibold">x</span>
            </button>
          )}
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-muted transition hover:border-accentGold focus-visible:ring-2 focus-visible:ring-accentGold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            onClick={() => setFilters(defaultFilters)}
            aria-label="Clear all filters"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-subtle">
        <div className="border-b border-border px-4 py-3 text-xs uppercase tracking-[0.18em] text-muted">
          <span aria-live="polite">{sorted.length} events</span>
        </div>
        <div className="divide-y divide-border">
          {sorted.map((event) => (
            <div
              key={event.slug}
              role="button"
              tabIndex={0}
              className="flex flex-col gap-2 px-4 py-4 transition hover:bg-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-accentGold"
              onClick={() => router.push(`/event/${event.slug}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(`/event/${event.slug}`);
                }
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold">{event.title}</div>
                    {event.hallOfFame && <Badge variant="gold">Hall of Fame</Badge>}
                  </div>
                  <p className="text-xs text-muted line-clamp-2">{event.summary}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={typeVariant[event.type]} className="w-fit text-[11px]">
                    {typeLabel[event.type]}
                  </Badge>
                  <Badge variant="muted" className="text-[11px]">
                    {event.chain}
                  </Badge>
                  <span className="text-xs text-muted">{event.date}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {event.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
                {event.tags.length > 3 && (
                  <Badge variant="muted">+{event.tags.length - 3} more</Badge>
                )}
              </div>
              <div className="flex items-center justify-between gap-3 text-xs text-muted">
                <span>{event.outcome ?? "Outcome pending"}</span>
                {event.chartUrl && (
                  <a
                    href={event.chartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accentGold underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View chart
                  </a>
                )}
              </div>
            </div>
          ))}
          {sorted.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-muted">
              No events match the current filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

