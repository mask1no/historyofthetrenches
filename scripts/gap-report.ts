import fs from "node:fs";
import path from "node:path";
import { events } from "../src/data/events";
import { eras } from "../src/data/eras";

type LinkIssue = {
  url: string;
  status?: number;
  error?: string;
  eventSlug: string;
  kind: "chart" | "source";
};

const reportPath = path.join(process.cwd(), "reports", "archive-gap-report.md");
const runNetworkChecks = process.argv.includes("--network");

const countBy = (values: string[]) => {
  const counts = new Map<string, number>();
  values.forEach((value) => {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  });
  return counts;
};

const toSortedEntries = (counts: Map<string, number>) =>
  Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);

const formatCountList = (counts: Map<string, number>) =>
  toSortedEntries(counts).map(([key, count]) => `- ${key}: ${count}`).join("\n");

const extraChainTags = new Set([
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

const eraIds = new Set(eras.map((era) => era.id));
const eraCounts = countBy(events.map((event) => event.era));
const typeCounts = countBy(events.map((event) => event.type));
const chainCounts = countBy(events.map((event) => event.chain));
const tagCounts = countBy(events.flatMap((event) => event.tags.map((tag) => tag.toLowerCase())));

const invalidEras = events.filter((event) => !eraIds.has(event.era));
const tagWhitespace = events.filter((event) => event.tags.some((tag) => tag.trim() !== tag));
const tagUppercase = events.filter((event) =>
  event.tags.some((tag) => tag !== tag.toLowerCase())
);
const chainLikeTags = events.filter((event) =>
  event.tags.some((tag) => extraChainTags.has(tag.toLowerCase()))
);

const underrepresentedTypes = toSortedEntries(typeCounts).filter(([, count]) => count <= 2);
const underrepresentedChains = toSortedEntries(chainCounts).filter(([, count]) => count <= 2);
const singleUseTags = toSortedEntries(tagCounts).filter(([, count]) => count === 1);

const uniqueUrls = Array.from(
  new Set(
    events.flatMap((event) => [
      ...(event.chartUrl ? [event.chartUrl] : []),
      ...event.sources.map((source) => source.url)
    ])
  )
);

const getTimeoutForUrl = (url: string) => (url.includes("web.archive.org") ? 15000 : 6000);

const fetchWithTimeout = async (url: string, method: "HEAD" | "GET") => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), getTimeoutForUrl(url));
  try {
    const response = await fetch(url, {
      method,
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });
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
    return response.status;
  } catch (error) {
    return error instanceof Error ? error.message : "Unknown error";
  }
};

const runNetworkAudit = async () => {
  const linkIssues: LinkIssue[] = [];
  const urlStatusMap = new Map<string, number | string>();
  const concurrency = 6;
  let index = 0;

  const workers = Array.from({ length: concurrency }, async () => {
    while (index < uniqueUrls.length) {
      const url = uniqueUrls[index];
      index += 1;
      if (!url || url.startsWith("https://web.archive.org/web/*/")) {
        continue;
      }
      const status = await checkUrl(url);
      urlStatusMap.set(url, status);
    }
  });

  await Promise.all(workers);

  events.forEach((event) => {
    if (event.chartUrl) {
      const status = urlStatusMap.get(event.chartUrl);
      if (typeof status === "number" && status >= 400 && status !== 429) {
        linkIssues.push({
          url: event.chartUrl,
          status,
          eventSlug: event.slug,
          kind: "chart"
        });
      } else if (typeof status === "string") {
        linkIssues.push({
          url: event.chartUrl,
          error: status,
          eventSlug: event.slug,
          kind: "chart"
        });
      }
    }
    event.sources.forEach((source) => {
      const status = urlStatusMap.get(source.url);
      if (typeof status === "number" && status >= 400 && status !== 429) {
        linkIssues.push({
          url: source.url,
          status,
          eventSlug: event.slug,
          kind: "source"
        });
      } else if (typeof status === "string") {
        linkIssues.push({
          url: source.url,
          error: status,
          eventSlug: event.slug,
          kind: "source"
        });
      }
    });
  });

  return linkIssues;
};

const writeReport = async () => {
  const totalEvents = events.length;
  const eraOverview = formatCountList(eraCounts);
  const typeOverview = formatCountList(typeCounts);
  const chainOverview = formatCountList(chainCounts);
  const tagOverview = formatCountList(tagCounts);

  const lines: string[] = [];
  lines.push(`# Archive Gap Report`);
  lines.push(`Generated: ${new Date().toISOString().slice(0, 10)}`);
  lines.push("");
  lines.push(`## Coverage Overview`);
  lines.push(`- Total events: ${totalEvents}`);
  lines.push("");
  lines.push(`### Era coverage`);
  lines.push(eraOverview || "- None");
  lines.push("");
  lines.push(`### Type coverage`);
  lines.push(typeOverview || "- None");
  if (underrepresentedTypes.length > 0) {
    lines.push("");
    lines.push(`Underrepresented types (<=2 events):`);
    lines.push(underrepresentedTypes.map(([key, count]) => `- ${key}: ${count}`).join("\n"));
  }
  lines.push("");
  lines.push(`### Chain coverage`);
  lines.push(chainOverview || "- None");
  if (underrepresentedChains.length > 0) {
    lines.push("");
    lines.push(`Underrepresented chains (<=2 events):`);
    lines.push(underrepresentedChains.map(([key, count]) => `- ${key}: ${count}`).join("\n"));
  }
  lines.push("");
  lines.push(`### Tag coverage (all tags)`);
  lines.push(tagOverview || "- None");
  if (singleUseTags.length > 0) {
    lines.push("");
    lines.push(`Single‑use tags (count = 1):`);
    lines.push(singleUseTags.map(([key]) => `- ${key}`).slice(0, 40).join("\n"));
    if (singleUseTags.length > 40) {
      lines.push(`- …and ${singleUseTags.length - 40} more`);
    }
  }

  lines.push("");
  lines.push(`## Inconsistencies`);
  if (invalidEras.length === 0 && tagWhitespace.length === 0 && tagUppercase.length === 0) {
    lines.push("- None detected in schema checks.");
  } else {
    if (invalidEras.length > 0) {
      lines.push(`- Events with unknown era: ${invalidEras.map((e) => e.slug).join(", ")}`);
    }
    if (tagWhitespace.length > 0) {
      lines.push(`- Tags with whitespace: ${tagWhitespace.map((e) => e.slug).join(", ")}`);
    }
    if (tagUppercase.length > 0) {
      lines.push(`- Tags with uppercase: ${tagUppercase.map((e) => e.slug).join(", ")}`);
    }
  }
  if (chainLikeTags.length > 0) {
    lines.push(
      `- Chain-like tags present (should live in chain field): ${chainLikeTags
        .map((e) => e.slug)
        .join(", ")}`
    );
  }

  lines.push("");
  lines.push(`## Link Health`);
  if (!runNetworkChecks) {
    lines.push("- Network checks not run. Re-run with `--network` to validate live links.");
  } else {
    const linkIssues = await runNetworkAudit();
    const sourceIssues = linkIssues.filter((issue) => issue.kind === "source");
    const chartIssues = linkIssues.filter((issue) => issue.kind === "chart");
    lines.push(`- Broken source links: ${sourceIssues.length}`);
    lines.push(
      sourceIssues
        .slice(0, 20)
        .map(
          (issue) =>
            `  - ${issue.eventSlug}: ${issue.url} (${issue.status ?? issue.error ?? "unknown"})`
        )
        .join("\n") || "  - None"
    );
    lines.push(`- Broken chart links: ${chartIssues.length}`);
    lines.push(
      chartIssues
        .slice(0, 20)
        .map(
          (issue) =>
            `  - ${issue.eventSlug}: ${issue.url} (${issue.status ?? issue.error ?? "unknown"})`
        )
        .join("\n") || "  - None"
    );
    if (sourceIssues.length > 20 || chartIssues.length > 20) {
      lines.push("- See full log output for additional link failures.");
    }
  }

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join("\n"));
  console.log(`Gap report written to ${reportPath}`);
};

writeReport();
