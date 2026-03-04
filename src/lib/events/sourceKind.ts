import type { Source } from "@/lib/events/schema";

const PRIMARY_PUBLISHER_HINTS = [
  "sec",
  "u.s. sec",
  "treasury",
  "doj",
  "ofac",
  "europol",
  "nydfs",
  "fdic",
  "fincen",
  "ethereum foundation",
  "bitcoin core",
  "compound",
  "uniswap"
];

const COMMUNITY_PUBLISHER_HINTS = ["substack", "mirror", "x", "twitter", "discord", "telegram"];

const PRIMARY_DOMAIN_HINTS = [
  ".gov",
  "sec.gov",
  "justice.gov",
  "home.treasury.gov",
  "europa.eu",
  "europol.europa.eu"
];

const COMMUNITY_DOMAIN_HINTS = [
  "x.com",
  "twitter.com",
  "substack.com",
  "medium.com",
  "mirror.xyz",
  "bitcointalk.org"
];

const includesAny = (value: string, hints: string[]) =>
  hints.some((hint) => value.includes(hint));

export const inferSourceKind = (source: Source): NonNullable<Source["kind"]> => {
  const publisher = source.publisher.trim().toLowerCase();

  if (!source.url || source.url.trim().length === 0) {
    return "pending";
  }

  const urlValue = source.url.toLowerCase();

  if (includesAny(publisher, PRIMARY_PUBLISHER_HINTS) || includesAny(urlValue, PRIMARY_DOMAIN_HINTS)) {
    return "primary";
  }

  if (
    includesAny(publisher, COMMUNITY_PUBLISHER_HINTS) ||
    includesAny(urlValue, COMMUNITY_DOMAIN_HINTS)
  ) {
    return "community";
  }

  return "secondary";
};

export const normalizeSourceKind = (source: Source): NonNullable<Source["kind"]> =>
  source.kind ?? inferSourceKind(source);

