# Website audit report — History of the Trenches

**Scope:** Design, code quality, SEO (Ahrefs-style), and coverage of sources/events.  
**Date:** 2026-03-07.  
**Tone:** Honest and critical where it matters.

---

## 1. Design

### Strengths

- **Clear visual hierarchy:** Playfair Display for headings and Inter for body give a readable, editorial feel. Gold accent (`#d6b15e`) is used consistently for CTAs, links, and highlights.
- **Dark mode:** Implemented via `class="dark"` with a separate palette; theme persists in `localStorage` and respects `prefers-color-scheme` with a blocking script to avoid flash.
- **Accessibility basics:** Skip-to-content link, focus-visible outlines (accent gold), `aria-current`, `aria-label` on icon buttons, and reduced-motion handling for the marquee.
- **Responsive layout:** Breakpoints and stacking (e.g. Hero, EventTable, BentoGrid) are coherent; mobile nav is a drawer with focus trap and Escape to close.

### Issues and gaps

1. **Theme color inconsistency**  
   - Layout `viewport.themeColor`: dark is `#0b0b0b`.  
   - `globals.css` `.dark { --bg: #0d0d0d }`.  
   - Manifest `background_color`: `#0d0d0d`.  
   Status bar / PWA shell can show a slightly different dark than the page. Prefer a single dark value (e.g. `#0d0d0d`) everywhere.

2. **Marquee and motion**  
   - Marquee uses `prefers-reduced-motion: reduce` to pause animation, which is good.  
   - No way to pause from the UI; “Hover to pause” only works for pointer users. Consider a visible “Pause” control for keyboard and touch.

3. **Homepage hero density**  
   - Stats (events, sources, chains) and “At a glance” repeat similar information. Either remove one block or differentiate (e.g. “At a glance” = time range + latest entry only).

4. **BentoGrid “Hall of Fame” cards**  
   - Rugs and Runners are hardcoded slug lists (`FEATURED_RUGS`, `FEATURED_RUNNERS`). If an event is removed or slug changes, that slot can empty or show fewer than five. Prefer deriving from data (e.g. `hallOfFame` + type) with a fixed display limit so the grid stays consistent as data changes.

5. **Error and 404**  
   - `error.tsx` and `not-found.tsx` don’t sit inside the same visual system as the rest (e.g. no NavBar/Footer in the snippets you have). If they’re wrapped by the root layout, they’re fine; if not, they should so branding and navigation are consistent.

---

## 2. Code quality

### Strengths

- **Next.js 14 App Router:** Clear use of `layout.tsx`, `loading.tsx`, route handlers, and `generateStaticParams` for event pages. Metadata is defined at layout and per-route.
- **TypeScript:** Event/Source types are centralized in `data/events` and re-exported from `lib/events/schema`; selectors and filters are typed.
- **Security headers:** `next.config.js` sets Referrer-Policy, X-Content-Type-Options, X-Frame-Options, Permissions-Policy, CSP, HSTS. `poweredByHeader: false` is set.
- **CSP:** Restrictive; `script-src` and `style-src` use `'unsafe-inline'` (typical for Next hydration). If you move to nonce-based or strict hashes later, you can tighten further.
- **Archive API:** `/api/archive` uses `getPublicEvents()` and `getFilters()`, consistent with the rest of the app; cache headers (`s-maxage=3600`, `stale-while-revalidate`) are sensible.

### Issues and gaps

1. **Homepage has no page-level metadata**  
   `src/app/page.tsx` does not export `metadata`. The root layout’s title/description are used. For SEO and social sharing, the homepage should export its own `metadata` (e.g. title “History of the Trenches | Community crypto archive”, description focused on the homepage value).

2. **RSS feed not linked**  
   You have `src/app/feed.xml/route.ts` serving RSS at `/feed.xml`, but there is no `<link rel="alternate" type="application/rss+xml" href="/feed.xml">` in the document head. Crawlers and feed readers won’t discover it. Add this in `layout.tsx` (or a shared head component).

3. **RSS pubDate and timezone**  
   Feed uses `new Date(event.date).toUTCString()`. For date-only strings like `"2013-10-02"`, ECMAScript parses them as UTC midnight, so this is correct. If you ever add time components, parse explicitly as UTC (e.g. `Date.UTC(...)`) to avoid local-time shifts.

4. **Event page JSON-LD image**  
   Article JSON-LD uses a static `image: "https://www.historyofthetrenches.xyz/og.png"`. Event pages have dynamic OG images via `opengraph-image.tsx`. For consistency and rich results, consider using the per-event OG image URL in Article `image` (e.g. `https://www.historyofthetrenches.xyz/event/{slug}/opengraph-image` or the canonical URL if the platform serves it).

5. **Missing assets referenced in metadata**  
   - Layout and manifest reference `/apple-touch-icon.png` (180×180).  
   - Layout and multiple pages reference `/og.png` (1200×630).  
   In `public/` only `favicon.svg` and `manifest.json` were present in the tree. If `og.png` and `apple-touch-icon.png` are not committed or not built, social shares and PWA install will get 404s. Add these files or remove the references until they exist.

6. **Breadcrumbs JSON-LD and Script**  
   Breadcrumbs use `<Script>` with `dangerouslySetInnerHTML` for JSON-LD. Next.js recommends structured data in the initial HTML where possible. For static breadcrumbs, you could output a `<script type="application/ld+json">` in the server-rendered HTML instead of a client Script component, to avoid any flash or duplication.

7. **EventTable filter state and URL**  
   Filter state is synced to the URL and read from `searchParams`; when `chains`/`years` load asynchronously from the archive API, initial `parseFiltersFromSearchParams` runs with empty arrays, so `chain`/`year` from the URL can be reset to `"all"` until data loads. Consider passing initial filters from server (e.g. from the same archive data) so the first paint matches the URL, or document the short window where URL and visible filters can differ.

8. **SourceList key**  
   Key is `(source.url ?? "") + source.label`. Two sources with the same URL and label would collide. Unlikely in practice, but a more stable key (e.g. index plus a hash, or a server-provided id if you add one) would be safer.

9. **Next.js 15 and `params`**  
   In Next 15, dynamic `params` in pages and `generateMetadata` can be Promises. Your `generateMetadata({ params })` uses `params.slug` synchronously. When you upgrade, you may need `const { slug } = await params` and async `generateMetadata`.

10. **Lint and install**  
    `pnpm run lint` failed in the audit environment because `node_modules` was missing. In CI and locally, ensure `pnpm install` (or equivalent) runs before lint so the project stays lint-clean.

---

## 3. SEO and “Ahrefs-style” health

(Ahrefs score is driven by backlinks, referring domains, and traffic; the following is about on-site and technical SEO that supports that.)

### Strengths

- **Canonicals:** Set on layout (`canonicalSiteUrl`) and on archive, timeline, kit, hot, and event pages. Good.
- **Sitemap:** `sitemap.ts` includes static routes (/, /archive, /timeline, /kit, /hot) and every event from `events` with `lastmod`, `changefreq`, and `priority`. Aligned with `getPublicEvents()` (same data).
- **Robots:** `robots.ts` allows all user agents, allows `/`, and points to the correct sitemap and host.
- **Structured data:** Organization and WebSite in layout; BreadcrumbList on subpages; Article on event pages. Helps rich results and entity understanding.
- **Meta and OG:** Title/description and Open Graph / Twitter cards are set at layout and per page; event pages use dynamic OG images.
- **Semantic HTML:** `<main id="main-content">`, `<nav>`, `<time dateTime>`, headings hierarchy. Good for accessibility and crawlers.
- **Internal linking:** Archive, timeline, event related/prev/next, and BentoGrid link into events; 404 links to archive and homepage.

### Issues and gaps

1. **Homepage metadata**  
   As above: give the homepage an explicit title and description (and optional OG overrides) so search and social see a dedicated homepage snippet, not only the default layout.

2. **RSS discovery**  
   Add `<link rel="alternate" type="application/rss+xml" href="https://www.historyofthetrenches.xyz/feed.xml" title="History of the Trenches">` in the head. Helps discovery and any tool that uses RSS for indexing or backlinks.

3. **Missing og.png and apple-touch-icon**  
   Broken or missing image URLs for OG and Apple touch icon can hurt click-through and trust in SERPs and when shared. Fix asset presence or references.

4. **Event Article JSON-LD image**  
   Using the event-specific OG image in Article `image` improves consistency and potential for rich results.

5. **404 and error pages**  
   If `not-found.tsx` and `error.tsx` are not under a layout that sets `robots: { index: false }`, ensure the 404 response sends `X-Robots-Tag: noindex` or that the not-found route is excluded from sitemap (it already is). No change needed if the framework handles 404 as noindex by default.

6. **Sitemap event lastModified**  
   You use `new Date(parseEventDate(event.date))` for event URLs. `parseEventDate` returns a number (timestamp); using it as `Date` is correct. No bug, but keep in mind that “last modified” here is the event date, not content edit time—acceptable for a historical archive.

7. **Language**  
   `layout` has `lang="en"` and `alternates.languages["en-US"]`. Fine for an English-only site. If you add locales later, add hreflang and locale-specific canonicals.

8. **Core Web Vitals / performance**  
   Not fully audited here. Fonts use `display: "swap"`. Large `events` array is used in multiple places; ensure tree-shaking and that event pages are statically generated so TTFB and LCP stay good. Consider auditing with Lighthouse and fixing any CLS (e.g. from theme or images).

---

## 4. Sources and events coverage

### Data and selectors

- **Single source of truth:** All events live in `src/data/events.ts`; `getPublicEvents()` returns that array (no server-side filtering). Archive API, sitemap, feed, and UI all use the same set. Good.
- **Event shape:** Each event has `sources: Source[]`; Source has `label`, `url`, `publisher`, `year`, optional `kind`, `dateAccessed`, `archivedUrl`, `excerpt`. Enough for display and light verification.
- **Verification rules:** `getVerificationReasons()` enforces: ≥2 sources, ≥1 non-Wikipedia source, primary source for legal/seizure, all English. Event pages show “Verification pending” when reasons exist; timeline highlights only show events that pass. Logic is clear and consistent.

### Consistency checks

1. **Sitemap vs routes**  
   Sitemap is built from `events` in `data/events`; `generateStaticParams` for event pages uses `getPublicEvents()` (same array). So every event in the sitemap has a corresponding static route. No mismatch.

2. **RSS feed**  
   Feed is built from `events` and `compareEventDatesDesc`; same dataset. No filtering. All events appear in the feed.

3. **BentoGrid featured lists**  
   `FEATURED_RUGS` and `FEATURED_RUNNERS` are fixed slug arrays. If a slug is renamed or removed from `events`, that card can show fewer items or a missing link. Prefer deriving from data (e.g. `hallOfFame` + type) with a defined sort and limit.

4. **Eras**  
   `eras` in `src/data/eras.ts` reference event slugs and filter `events` to build `featured`. If a slug is removed, that era’s featured list shrinks; no crash. Timeline uses `getHighlights(getPublicEvents())`, which filters by `hallOfFame` or era featured and verification. So timeline and eras stay in sync with the same event list.

5. **Archive and EventTable**  
   EventTable loads from `/api/archive`, which returns `getPublicEvents()` and `getFilters(events)`. So the table shows the same events as the rest of the site. Filters (type, chain, year, tags, search, sort) are applied client-side; no discrepancy.

### Gaps and recommendations

1. **RSS not linked**  
   Already noted: add the feed link in the head so all “events on the website” are discoverable via RSS as well as HTML.

2. **No dedicated “sources” index**  
   Sources are only visible per event (SourceList on event pages). If you want to surface “all sources” for transparency or SEO, consider a sources index page or an optional sitemap section for key source URLs (only if you serve them).

3. **Audit script**  
   `scripts/audit-events.ts` checks required fields, date validity, URLs, source kinds, legal tags, etc. Keep running it in CI (`check:data`, `audit:events`) so new events and sources don’t break rules.

4. **Placeholders**  
   `scripts/no-placeholders.ts` is intended to catch placeholder text. Ensure it’s part of your pre-commit or CI so no “TBD” or “Lorem” slips into production.

---

## 5. Summary table

| Area              | Verdict | Critical issues |
|-------------------|--------|------------------|
| Design            | Good   | Theme color mismatch; marquee no UI pause; BentoGrid hardcoded slugs. |
| Code              | Good   | Homepage metadata; RSS not linked; missing og.png / apple-touch-icon; small key/CSP/params notes. |
| SEO / Ahrefs-style| Good   | Same as code (metadata, RSS, images); Article image could be per-event. |
| Sources/events    | Good   | All events/sources from one dataset; sitemap, feed, archive, timeline consistent. Add RSS link. |

---

## 6. Recommended action list (priority order)

1. **Add missing assets**  
   Add `public/og.png` (1200×630) and `public/apple-touch-icon.png` (180×180), or remove their references until they exist.

2. **Homepage metadata**  
   In `src/app/page.tsx`, export `metadata` with a clear title and description (and optional OG overrides).

3. **RSS discovery**  
   In `layout.tsx` (or equivalent head), add `<link rel="alternate" type="application/rss+xml" href="https://www.historyofthetrenches.xyz/feed.xml" title="History of the Trenches">`.

4. **Unify dark theme color**  
   Use one dark value (e.g. `#0d0d0d`) for `viewport.themeColor`, `--bg` in `.dark`, and manifest `background_color`.

5. **BentoGrid**  
   Replace hardcoded `FEATURED_RUGS` / `FEATURED_RUNNERS` with data-driven selection (e.g. `hallOfFame` + type, sorted, slice(0, 5)).

6. **Event Article JSON-LD**  
   Set `image` to the event-specific OG image URL where possible.

7. **CI**  
   Ensure `pnpm install` (or equivalent) runs before `pnpm run lint` and that `check:data` / `audit:events` (and optionally `no-placeholders`) run on every build or PR.

After these, the site will be in strong shape for design consistency, code quality, SEO, and reliable coverage of all sources and events.
