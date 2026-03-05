import { events } from "@/data/events";
import { eras } from "@/data/eras";
import { compareEventDatesDesc } from "@/lib/utils";
import type { Event, EventFilters, EventStats, Source } from "@/lib/events/schema";
import { canonicalizeChain, canonicalizeChains } from "@/lib/events/taxonomy";
import { normalizeSourceKind } from "@/lib/events/sourceKind";
import { isEnglishSourceUrl } from "@/lib/events/sourceLanguage";

const CHAIN_TAG_ALIASES = new Set([
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
]);

const LEGAL_OR_SEIZURE_TAGS = new Set(["regulation", "policy", "seizure", "enforcement", "legal"]);
const isWikipediaSource = (source: Source) =>
  source.publisher.toLowerCase().includes("wikipedia") || source.url.includes("wikipedia.org");

export const isEnglishSource = (source: Source) => {
  return isEnglishSourceUrl(source.url);
};

const isLegalOrSeizureEvent = (event: Event) =>
  event.type === "seizure" || event.tags.some((tag) => LEGAL_OR_SEIZURE_TAGS.has(tag.toLowerCase()));

export const getPublicEvents = () => events;

export const getEventBySlug = (slug: string) =>
  getPublicEvents().find((event) => event.slug === slug);

export const getStats = (inputEvents: Event[]): EventStats => {
  const years = inputEvents.map((event) => event.year);
  const yearMin = years.length > 0 ? Math.min(...years) : undefined;
  const yearMax = years.length > 0 ? Math.max(...years) : undefined;
  const latestDate = [...inputEvents].sort(compareEventDatesDesc)[0]?.date;

  return {
    total: inputEvents.length,
    sourcesTotal: inputEvents.reduce((sum, event) => sum + event.sources.length, 0),
    chainsTotal: canonicalizeChains(inputEvents.map((event) => event.chain)).length,
    yearMin,
    yearMax,
    latestDate
  };
};

export const getFilters = (inputEvents: Event[]): EventFilters => {
  const chainTagSet = new Set<string>();
  const chains = canonicalizeChains(inputEvents.map((event) => event.chain)).sort((a, b) =>
    a.localeCompare(b)
  );
  const years = Array.from(new Set(inputEvents.map((event) => event.year))).sort((a, b) => b - a);
  const types = Array.from(new Set(inputEvents.map((event) => event.type)));

  chains.forEach((chain) => {
    chainTagSet.add(chain.toLowerCase());
    chain
      .split(/[^a-z0-9]+/i)
      .map((token) => token.toLowerCase())
      .filter((token) => token.length > 2)
      .forEach((token) => chainTagSet.add(token));
  });

  CHAIN_TAG_ALIASES.forEach((tag) => chainTagSet.add(tag));

  const tags = Array.from(
    new Set(
      inputEvents.flatMap((event) =>
        event.tags.filter((tag) => !chainTagSet.has(tag.toLowerCase()))
      )
    )
  ).sort((a, b) => a.localeCompare(b));

  return { types, chains, years, tags };
};

export const getVerificationReasons = (event: Event) => {
  const reasons: string[] = [];
  const hasEnoughSources = event.sources.length >= 2;
  const hasNonWikipediaSource = event.sources.some((source) => !isWikipediaSource(source));
  const hasPrimaryForLegal = !isLegalOrSeizureEvent(event)
    ? true
    : event.sources.some((source) => normalizeSourceKind(source) === "primary");
  const hasOnlyEnglishSources = event.sources.every((source) => isEnglishSource(source));

  if (!hasEnoughSources) {
    reasons.push("At least two sources are required.");
  }
  if (!hasNonWikipediaSource) {
    reasons.push("At least one non-Wikipedia source is required.");
  }
  if (!hasPrimaryForLegal) {
    reasons.push("Legal/regulatory/seizure entries require at least one primary source.");
  }
  if (!hasOnlyEnglishSources) {
    reasons.push("All accepted sources must be English-language links.");
  }

  return reasons;
};

const isHighlightEligible = (event: Event) => getVerificationReasons(event).length === 0;

export const isVerificationPending = (event: Event) => getVerificationReasons(event).length > 0;

const FEATURED_ERA_SLUGS = new Set(eras.flatMap((era) => era.featured.map((event) => event.slug)));

export const getHighlights = (inputEvents: Event[]) =>
  inputEvents
    .filter((event) => event.hallOfFame || FEATURED_ERA_SLUGS.has(event.slug))
    .filter((event) => isHighlightEligible(event))
    .sort(compareEventDatesDesc);

export const getCanonicalChainForEvent = (event: Event) => canonicalizeChain(event.chain);

