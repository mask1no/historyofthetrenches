import test from "node:test";
import assert from "node:assert/strict";
import { isEnglishSourceUrl } from "@/lib/events/sourceLanguage";

test("accepts english wikipedia urls", () => {
  assert.equal(isEnglishSourceUrl("https://en.wikipedia.org/wiki/Bitcoin"), true);
});

test("rejects non-english wikipedia subdomains", () => {
  assert.equal(isEnglishSourceUrl("https://es.wikipedia.org/wiki/Bitcoin"), false);
});

test("rejects language path segments", () => {
  assert.equal(isEnglishSourceUrl("https://example.com/news/es/crypto-update"), false);
});
