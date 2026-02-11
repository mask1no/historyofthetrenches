import { events } from "../src/data/events";

type LinkCheck = {
  url: string;
  ok: boolean;
  status?: number;
  redirected?: boolean;
  error?: string;
};

const paywallDomains = new Set([
  "nytimes.com",
  "wsj.com",
  "bloomberg.com",
  "ft.com",
  "economist.com",
  "theinformation.com",
  "reuters.com",
  "forbes.com",
  "thetimes.co.uk"
]);

const normalizeHost = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

const withTimeout = async (url: string, timeoutMs = 12000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "HOT-Link-Audit/1.0"
      }
    });
    return response;
  } finally {
    clearTimeout(id);
  }
};

const uniqueUrls = new Set<string>();
const eventLinks: { event: string; url: string; label: string }[] = [];

for (const event of events) {
  for (const source of event.sources) {
    if (source.url) {
      uniqueUrls.add(source.url);
      eventLinks.push({ event: event.slug, url: source.url, label: source.label });
    }
    if (source.archivedUrl) {
      uniqueUrls.add(source.archivedUrl);
      eventLinks.push({ event: event.slug, url: source.archivedUrl, label: `${source.label} (archive)` });
    }
  }
  if (event.chartUrl) {
    uniqueUrls.add(event.chartUrl);
    eventLinks.push({ event: event.slug, url: event.chartUrl, label: "chartUrl" });
  }
}

const results = new Map<string, LinkCheck>();

const run = async () => {
  const urls = Array.from(uniqueUrls);
  console.log(`Checking ${urls.length} unique URLs...`);
  for (const url of urls) {
    try {
      const res = await withTimeout(url);
      results.set(url, {
        url,
        ok: res.ok,
        status: res.status,
        redirected: res.redirected
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      results.set(url, { url, ok: false, error: message });
    }
  }

  const failures = Array.from(results.values()).filter((item) => !item.ok);
  const paywallHits = urls.filter((url) => paywallDomains.has(normalizeHost(url)));

  console.log("\nNon-OK links:");
  if (failures.length === 0) {
    console.log("None");
  } else {
    for (const item of failures) {
      console.log(`- ${item.url} ${item.status ?? ""} ${item.error ?? ""}`.trim());
    }
  }

  console.log("\nPotential paywall domains:");
  if (paywallHits.length === 0) {
    console.log("None");
  } else {
    for (const url of paywallHits) {
      console.log(`- ${url}`);
    }
  }

  console.log("\nEvent source index:");
  for (const link of eventLinks) {
    const status = results.get(link.url);
    if (!status || !status.ok || paywallDomains.has(normalizeHost(link.url))) {
      console.log(`- ${link.event}: ${link.label} -> ${link.url}`);
    }
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
