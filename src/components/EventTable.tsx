"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { events, type Event, type EventType } from "@/data/events";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

type FilterState = {
  type: EventType | "all";
  chain: string;
  year: string;
  tag: string;
  search: string;
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
  const [filters, setFilters] = useState<FilterState>({
    type: "all",
    chain: "all",
    year: "all",
    tag: "",
    search: ""
  });

  const filtered = useMemo(
    () => events.filter((event) => matchesFilters(event, filters)),
    [filters]
  );

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
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
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-subtle">
        <div className="grid grid-cols-12 bg-bg px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
          <span className="col-span-5">Event</span>
          <span className="col-span-2">Type</span>
          <span className="col-span-2">Chain</span>
          <span className="col-span-2">Date</span>
          <span className="col-span-1 text-right">Outcome</span>
        </div>
        <div className="divide-y divide-border">
          {filtered.map((event) => (
            <Link
              key={event.slug}
              href={`/event/${event.slug}`}
              className="grid grid-cols-12 items-center px-4 py-4 transition hover:bg-bg"
            >
              <div className="col-span-5 space-y-1">
                <div className="text-sm font-semibold">{event.title}</div>
                <p className="text-xs text-muted line-clamp-2">{event.summary}</p>
              </div>
              <div className="col-span-2">
                <Badge
                  variant={
                    event.type === "rugpull"
                      ? "red"
                      : event.type === "runner"
                      ? "green"
                      : "gold"
                  }
                  className="w-fit text-[11px]"
                >
                  {event.type}
                </Badge>
              </div>
              <div className="col-span-2 text-sm">{event.chain}</div>
              <div className="col-span-2 text-sm">{event.date}</div>
              <div className="col-span-1 text-right text-sm text-muted">
                {event.outcome ?? "—"}
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-muted">
              No events match the current filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

