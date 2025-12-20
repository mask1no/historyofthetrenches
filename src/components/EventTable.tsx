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

function matchesFilters(event: Event, filters: FilterState) {
  const search = filters.search.toLowerCase();
  const tag = filters.tag.toLowerCase();
  return (
    (filters.type === "all" || event.type === filters.type) &&
    (filters.chain === "all" || event.chain === filters.chain) &&
    (filters.year === "all" || event.year === Number(filters.year)) &&
    (!tag || event.tags.some((t) => t.toLowerCase().includes(tag))) &&
    (!search ||
      event.title.toLowerCase().includes(search) ||
      event.summary.toLowerCase().includes(search))
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
      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        <Select
          label="Type"
          value={filters.type}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, type: e.target.value as any }))
          }
        >
          <option value="all">All</option>
          <option value="rugpull">Rugpull</option>
          <option value="runner">Runner</option>
          <option value="milestone">Milestone</option>
          <option value="hack">Hack</option>
        </Select>
        <Select
          label="Chain"
          value={filters.chain}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, chain: e.target.value }))
          }
        >
          <option value="all">All</option>
          {chains.map((chain) => (
            <option key={chain} value={chain}>
              {chain}
            </option>
          ))}
        </Select>
        <Select
          label="Year"
          value={filters.year}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, year: e.target.value }))
          }
        >
          <option value="all">All</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
        <Input
          placeholder="Search title or summary"
          value={filters.search}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, search: e.target.value }))
          }
        />
        <Select
          label="Tag"
          value={filters.tag}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, tag: e.target.value }))
          }
        >
          <option value="">Any</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </Select>
        <Select
          label="Sort"
          value={filters.sort}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, sort: e.target.value as FilterState["sort"] }))
          }
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="hall-of-fame">Hall of fame first</option>
        </Select>
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
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3 text-xs text-muted">
                <span>{event.outcome ?? "Outcome pending"}</span>
                {event.chartUrl && (
                  <a
                    href={event.chartUrl}
                    target="_blank"
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

