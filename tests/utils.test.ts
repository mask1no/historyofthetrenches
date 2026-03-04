import test from "node:test";
import assert from "node:assert/strict";
import { compareEventDatesAsc, compareEventDatesDesc, parseEventDate } from "@/lib/utils";

test("parseEventDate handles full ISO date", () => {
  assert.equal(parseEventDate("2024-05-12"), Date.parse("2024-05-12"));
});

test("parseEventDate falls back to year-only prefix", () => {
  assert.equal(parseEventDate("2017 something"), Date.parse("2017-01-01"));
});

test("parseEventDate returns zero for invalid input", () => {
  assert.equal(parseEventDate("unknown"), 0);
});

test("date sort helpers order newest/oldest correctly", () => {
  const items = [{ date: "2020-01-01" }, { date: "2022-01-01" }, { date: "2021-01-01" }];
  const newestFirst = [...items].sort(compareEventDatesDesc);
  const oldestFirst = [...items].sort(compareEventDatesAsc);

  assert.deepEqual(newestFirst.map((item) => item.date), ["2022-01-01", "2021-01-01", "2020-01-01"]);
  assert.deepEqual(oldestFirst.map((item) => item.date), ["2020-01-01", "2021-01-01", "2022-01-01"]);
});
