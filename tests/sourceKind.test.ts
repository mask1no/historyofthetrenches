import test from "node:test";
import assert from "node:assert/strict";
import { inferSourceKind, normalizeSourceKind } from "@/lib/events/sourceKind";

test("inferSourceKind classifies primary government links", () => {
  const kind = inferSourceKind({
    label: "SEC release",
    url: "https://www.sec.gov/news/press-release",
    publisher: "SEC",
    year: 2024
  });
  assert.equal(kind, "primary");
});

test("inferSourceKind classifies community sources", () => {
  const kind = inferSourceKind({
    label: "X post",
    url: "https://x.com/someuser/status/1",
    publisher: "X",
    year: 2024
  });
  assert.equal(kind, "community");
});

test("normalizeSourceKind honors explicit kind", () => {
  const kind = normalizeSourceKind({
    label: "Manual label",
    url: "https://example.com",
    publisher: "Example",
    year: 2024,
    kind: "secondary"
  });
  assert.equal(kind, "secondary");
});
