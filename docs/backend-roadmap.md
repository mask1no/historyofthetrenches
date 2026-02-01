Backend Hardening Roadmap
=========================

Goal: keep the current UI/UX unchanged while making data integrity, navigation behavior, and QA checks reliable.

Step-by-step plan (completed)
-----------------------------

1) Enforce data validity and consistency.
   - Validate ISO dates and real calendar dates.
   - Detect year/date mismatches.
   - Enforce tag hygiene (lowercase, no duplicates).
   - Validate source fields and URL protocols.
   Status: Completed (see `scripts/audit-events.ts`, `pnpm check:data`).

2) Add chart URL sanity checks.
   - Warn if TradingView symbols do not match expected chain tickers.
   Status: Completed (warnings only, no blocking).

3) Fix external link reliability.
   - Replace links that return 4xx with a stable archive fallback.
   Status: Completed (BlockFi court link).

4) Remove redundant chain tags from Archive filters.
   - Avoid duplicate filtering between chain and tags.
   Status: Completed (`EventTable` tag filtering).

5) Stabilize mobile navigation behavior.
   - Lock scroll when the drawer is open.
   - Prevent layout shifts from scrollbar removal.
   Status: Completed (`NavBar` scroll lock effect).

6) Normalize keyboard focus visibility.
   - Add consistent focus-visible outline for interactive elements.
   Status: Completed (global focus-visible styles).

7) Run continuous validation.
   - Lint, build, data audit, and optional network audit.
   Status: Completed (CI-ready via `pnpm lint`, `pnpm build`, `pnpm check:data`).

