"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { events, type Event, type EventType } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { typeLabel, typeVariant } from "@/lib/eventType";

type FilterState = {
  type: EventType | "all";
  chain: string;
  year: string;
  tag: string;
  search: string;
  sort: "newest" | "oldest" | "hall-of-fame";
};

const chains = Array.from(new Set(events.map((e) => e.chain)));
const years = Array.from(new Set(events.map((e) => e.year))).sort(
  (a, b) => b - a
);
const tags = Array.from(new Set(events.flatMap((e) => e.tags))).sort();

const typeOptions = [
  { label: "All", value: "all" },
  { label: "Rugpull", value: "rugpull" },
  { label: "Runner", value: "runner" },
  { label: "Milestone", value: "milestone" },
  { label: "Hack", value: "hack" }
];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Hall of fame first", value: "hall-of-fame" }
];

function matchesFilters(event: Event, filters: FilterState) {
  const search = filters.search.toLowerCase();
  const tag = filters.tag.toLowerCase();
  const haystack = [
    event.title,
    event.summary,
    event.chain,
    event.type,
    ...event.tags
  ]
    .join(" ")
    .toLowerCase();
  return (
    (filters.type === "all" || event.type === filters.type) &&
    (filters.chain === "all" || event.chain === filters.chain) &&
    (filters.year === "all" || event.year === Number(filters.year)) &&
    (!tag || event.tags.some((t) => t.toLowerCase().includes(tag))) &&
    (!search || haystack.includes(search))
  );
}

export function EventTable() {
  const router = useRouter();
  const [filters, setFilters] = useState<FilterState>({
    type: "all",
    chain: "all",
    year: "all",
    tag: "",
    search: "",
    sort: "newest"
  });

  const filtered = useMemo(
    () => events.filter((event) => matchesFilters(event, filters)),
    [filters]
  );

  const sorted = useMemo(() => {
    const list = [...filtered];
    if (filters.sort === "hall-of-fame") {
      return list.sort((a, b) => Number(b.hallOfFame ?? false) - Number(a.hallOfFame ?? false));
    }
    if (filters.sort === "oldest") {
      return list.sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date)));
    }
    return list.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  }, [filtered, filters.sort]);

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-border bg-bg p-4 shadow-subtle">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
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
            value={filters.year}
            onChange={(value) => setFilters((prev) => ({ ...prev, year: value }))}
            options={[{ label: "All", value: "all" }, ...years.map((year) => ({ label: String(year), value: String(year) }))]}
          />
          <Input
            className="md:col-span-2"
            placeholder="Search title, tags, chain, or type"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
          />
          <Select
            label="Tag"
            value={filters.tag}
            onChange={(value) => setFilters((prev) => ({ ...prev, tag: value }))}
            options={[{ label: "Any", value: "" }, ...tags.map((tag) => ({ label: tag, value: tag }))]}
          />
          <Select
            label="Sort"
            value={filters.sort}
            onChange={(value) =>
              setFilters((prev) => ({ ...prev, sort: value as FilterState["sort"] }))
            }
            options={sortOptions}
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-subtle">
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

