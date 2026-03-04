import test from "node:test";
import assert from "node:assert/strict";
import { canonicalizeChain, canonicalizeChains } from "@/lib/events/taxonomy";

test("canonicalizeChain normalizes known aliases", () => {
  assert.equal(canonicalizeChain("bsc"), "BNB Chain");
  assert.equal(canonicalizeChain("eth l2"), "Ethereum L2");
});

test("canonicalizeChain preserves unknown chains", () => {
  assert.equal(canonicalizeChain("Solana"), "Solana");
});

test("canonicalizeChains deduplicates canonical values", () => {
  const chains = canonicalizeChains(["bsc", "BNB Chain", "ethereum", "ethereum"]);
  assert.deepEqual(chains, ["BNB Chain", "ethereum"]);
});
