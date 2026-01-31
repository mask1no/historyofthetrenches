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

events.forEach((event) => {
  requiredFields.forEach((field) => {
    const value = event[field];
    if (value === undefined || value === null || value === "") {
      addIssue("error", `Missing required field "${field}" on ${event.slug}.`);
    }
  });

  if (!isValidDate(event.date)) {
    addIssue("error", `Invalid date format for ${event.slug}: "${event.date}".`);
  }

  if (!Array.isArray(event.tags) || event.tags.length === 0) {
    addIssue("warn", `No tags listed for ${event.slug}.`);
  }

  if (!Array.isArray(event.sources) || event.sources.length < 2) {
    addIssue("warn", `Less than two sources for ${event.slug}.`);
  }

  if (event.chartUrl && !isValidUrl(event.chartUrl)) {
    addIssue("error", `Invalid chartUrl on ${event.slug}: "${event.chartUrl}".`);
  }

  event.sources.forEach((source) => {
    if (!source.url || !isValidUrl(source.url)) {
      addIssue(
        "error",
        `Invalid source URL on ${event.slug}: "${source.url ?? "missing"}".`
      );
    }
  });

  slugCounts.set(event.slug, (slugCounts.get(event.slug) ?? 0) + 1);
});

Array.from(slugCounts.entries())
  .filter(([, count]) => count > 1)
  .forEach(([slug, count]) => {
    addIssue("error", `Duplicate slug "${slug}" found ${count} times.`);
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

const fetchWithTimeout = async (url: string, method: "HEAD" | "GET") => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);
  try {
    const response = await fetch(url, { method, signal: controller.signal, redirect: "follow" });
    return response;
  } finally {
    clearTimeout(timeout);
  }
};

const checkUrl = async (url: string) => {
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
