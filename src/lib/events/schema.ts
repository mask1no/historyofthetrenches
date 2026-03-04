import type { Event, EventType, Source } from "@/data/events";

export type { Event, EventType, Source };

export type EventStats = {
  total: number;
  sourcesTotal: number;
  chainsTotal: number;
  yearMin?: number;
  yearMax?: number;
  latestDate?: string;
};

export type EventFilters = {
  types: EventType[];
  chains: string[];
  years: number[];
  tags: string[];
};

