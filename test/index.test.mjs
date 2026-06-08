import test from "node:test";
import assert from "node:assert/strict";
import fixture from "../fixtures/sample.json" with { type: "json" };
import { formatSummary, summarizePortfolioSignal } from "../src/index.mjs";

test("summarizes portfolio signal fixture", () => {
  const summary = summarizePortfolioSignal(fixture);
  assert.equal(summary.laneCount, 3);
  assert.ok(summary.averageScore >= 70);
  assert.equal(summary.priorityLane, "investment");
  assert.match(formatSummary(summary), /signal confidence/);
});