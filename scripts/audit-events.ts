import { events } from "../src/data/events";

type AuditIssue = {
  level: "error" | "warn";
  message: string;
};

const issues: AuditIssue[] = [];

const requiredFields: Array<keyof (typeof events)[number]> = [
  "slug",
  "title",
  "type",
  "chain",
  "year",
  "date",
  "era",
  "summary",
  "tags",
  "sources"
];

const isValidDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value);
const isRealDate = (value: string) => {
  if (!isValidDate(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
};

const isValidUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const addIssue = (level: AuditIssue["level"], message: string) => {
  issues.push({ level, message });
};

const slugCounts = new Map<string, number>();
const titleCounts = new Map<string, number>();
const tagCounts = new Map<string, number>();

const tradingViewSymbolMap: Record<string, string> = {
  bitcoin: "BTC"
};

const checkChartSymbol = (
  eventSlug: string,
  eventTitle: string,
  chain: string,
  chartUrl?: string
) => {
  if (!chartUrl) return;
  const match = chartUrl.match(/tradingview\.com\/symbols\/([^/]+)\//i);
  if (!match) return;
  const symbol = match[1].toUpperCase();
  const expected = tradingViewSymbolMap[chain.toLowerCase()];
  if (!expected) return;
  if (
    expected === "BTC" &&
    symbol.includes("BCH") &&
    (eventSlug.includes("bch") || eventTitle.toLowerCase().includes("bitcoin cash"))
  ) {
    return;
  }
  if (!symbol.includes(expected)) {
    addIssue(
      "warn",
      `Chart URL symbol may not match chain on ${eventSlug}: "${chartUrl}".`
    );
  }
};

events.forEach((event) => {
  requiredFields.forEach((field) => {
    const value = event[field];
    if (value === undefined || value === null || value === "") {
      addIssue("error", `Missing required field "${field}" on ${event.slug}.`);
    }
  });

  if (!isValidDate(event.date)) {
    addIssue("error", `Invalid date format for ${event.slug}: "${event.date}".`);
  } else if (!isRealDate(event.date)) {
    addIssue("error", `Invalid calendar date for ${event.slug}: "${event.date}".`);
  }

  if (event.date && event.year && Number(event.date.slice(0, 4)) !== event.year) {
    addIssue(
      "error",
      `Year mismatch for ${event.slug}: year=${event.year}, date=${event.date}.`
    );
  }

  if (!Array.isArray(event.tags) || event.tags.length === 0) {
    addIssue("warn", `No tags listed for ${event.slug}.`);
  } else {
    const seenTags = new Set<string>();
    event.tags.forEach((tag) => {
      if (tag.trim() !== tag) {
        addIssue("warn", `Tag has leading/trailing whitespace on ${event.slug}: "${tag}".`);
      }
      if (tag !== tag.toLowerCase()) {
        addIssue("warn", `Tag should be lowercase on ${event.slug}: "${tag}".`);
      }
      if (seenTags.has(tag.toLowerCase())) {
        addIssue("warn", `Duplicate tag on ${event.slug}: "${tag}".`);
      }
      seenTags.add(tag.toLowerCase());
      tagCounts.set(tag.toLowerCase(), (tagCounts.get(tag.toLowerCase()) ?? 0) + 1);
    });
  }

  if (!Array.isArray(event.sources) || event.sources.length < 2) {
    addIssue("warn", `Less than two sources for ${event.slug}.`);
  }

  if (event.chartUrl && !isValidUrl(event.chartUrl)) {
    addIssue("error", `Invalid chartUrl on ${event.slug}: "${event.chartUrl}".`);
  } else if (event.chartUrl?.startsWith("http://")) {
    addIssue("warn", `Chart URL should use https on ${event.slug}: "${event.chartUrl}".`);
  }
  checkChartSymbol(event.slug, event.title, event.chain, event.chartUrl);

  event.sources.forEach((source) => {
    if (!source.url || !isValidUrl(source.url)) {
      addIssue(
        "error",
        `Invalid source URL on ${event.slug}: "${source.url ?? "missing"}".`
      );
    }
    if (source.url?.startsWith("http://")) {
      addIssue("warn", `Source URL should use https on ${event.slug}: "${source.url}".`);
    }
    if (!source.label || source.label.trim().length === 0) {
      addIssue("error", `Source label missing on ${event.slug}.`);
    }
    if (!source.publisher || source.publisher.trim().length === 0) {
      addIssue("error", `Source publisher missing on ${event.slug}.`);
    }
    if (!Number.isInteger(source.year) || source.year < 1990 || source.year > 2100) {
      addIssue("warn", `Source year looks invalid on ${event.slug}: "${source.year}".`);
    }
  });

  slugCounts.set(event.slug, (slugCounts.get(event.slug) ?? 0) + 1);
  titleCounts.set(event.title, (titleCounts.get(event.title) ?? 0) + 1);

  if (!/^[a-z0-9-]+$/.test(event.slug)) {
    addIssue("warn", `Slug should be lowercase kebab-case: "${event.slug}".`);
  }
});

Array.from(slugCounts.entries())
  .filter(([, count]) => count > 1)
  .forEach(([slug, count]) => {
    addIssue("error", `Duplicate slug "${slug}" found ${count} times.`);
  });

Array.from(titleCounts.entries())
  .filter(([, count]) => count > 1)
  .forEach(([title, count]) => {
    addIssue("warn", `Duplicate title "${title}" found ${count} times.`);
  });

const uniqueUrls = Array.from(
  new Set(
    events.flatMap((event) => [
      ...(event.chartUrl ? [event.chartUrl] : []),
      ...event.sources.map((source) => source.url)
    ])
  )
);

const runNetworkChecks = process.argv.includes("--network");

const getTimeoutForUrl = (url: string) => (url.includes("web.archive.org") ? 15000 : 6000);

const fetchWithTimeout = async (url: string, method: "HEAD" | "GET") => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), getTimeoutForUrl(url));
  try {
    const response = await fetch(url, { method, signal: controller.signal, redirect: "follow" });
    return response;
  } finally {
    clearTimeout(timeout);
  }
};

const checkUrl = async (url: string) => {
  if (url.startsWith("https://web.archive.org/web/*/")) {
    return;
  }
  try {
    let response = await fetchWithTimeout(url, "HEAD");
    if (response.status === 405 || response.status === 403) {
      response = await fetchWithTimeout(url, "GET");
    }

    if (response.status >= 400 && response.status < 500 && response.status !== 429) {
      addIssue("warn", `Link returned ${response.status}: ${url}`);
      return;
    }

    if (response.status >= 500) {
      addIssue("warn", `Server error ${response.status}: ${url}`);
    }
  } catch (error) {
    addIssue("warn", `Network check failed for ${url}: ${(error as Error).message}`);
  }
};

const runNetworkAudit = async () => {
  const concurrency = 6;
  let index = 0;

  const workers = Array.from({ length: concurrency }, async () => {
    while (index < uniqueUrls.length) {
      const url = uniqueUrls[index];
      index += 1;
      if (url) {
        await checkUrl(url);
      }
    }
  });

  await Promise.all(workers);
};

const run = async () => {
  if (runNetworkChecks) {
    await runNetworkAudit();
  }

  if (issues.length === 0) {
    console.log("Audit complete: no issues found.");
    return;
  }

  const errors = issues.filter((issue) => issue.level === "error");
  const warnings = issues.filter((issue) => issue.level === "warn");

  console.log("Audit complete:");
  errors.forEach((issue) => console.log(`ERROR: ${issue.message}`));
  warnings.forEach((issue) => console.log(`WARN: ${issue.message}`));
  console.log(`Summary: ${errors.length} error(s), ${warnings.length} warning(s).`);

  if (errors.length > 0) {
    process.exitCode = 1;
  }
};

run();
