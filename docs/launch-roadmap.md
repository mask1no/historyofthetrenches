# History of the Trenches — Launch Roadmap

Generated: 2026-03-01
Context: Post-audit comprehensive checklist of remaining work before the site is launch-ready.

---

## Priority Legend

- **P0 — LAUNCH BLOCKER**: Must fix before going live. Broken functionality or missing critical assets.
- **P1 — HIGH**: Significantly impacts credibility, UX, or SEO. Fix before or shortly after launch.
- **P2 — MEDIUM**: Noticeable polish issue. Can ship without, but should be done soon.
- **P3 — LOW**: Nice-to-have improvements. Backlog.

---

## P0 — LAUNCH BLOCKERS

### 1. Create `og.png` (OpenGraph image)

**File:** `public/og.png`
**Dimensions:** 1200 x 630px
**Why:** Every page's metadata references `/og.png` for Twitter cards and OpenGraph. Without it, every share on X, Discord, Telegram, etc. shows a broken image or generic fallback. This is the single most visible gap.
**Referenced in:** `src/app/layout.tsx` (line ~65), `src/app/archive/page.tsx`, `src/app/timeline/page.tsx`, `src/app/hot/page.tsx`, `src/app/kit/page.tsx`, `src/app/event/[slug]/page.tsx`
**Suggestion:** Gold accent (#d6b15e) on dark (#0d0d0d) background, site name "History of the Trenches" with tagline. Keep it clean and readable at thumbnail size.

### 2. Create `apple-touch-icon.png`

**File:** `public/apple-touch-icon.png`
**Dimensions:** 180 x 180px
**Why:** Referenced in `src/app/layout.tsx` (line 76) and `public/manifest.json` (line 15). Missing means no icon when users add to iOS home screen or bookmark on Safari.

### 3. Fill in `src/data/hot.ts` placeholder data

**File:** `src/data/hot.ts`
**What:** 9 instances of `REPLACE_ME` and 5 instances of `example.com`:
- **Line 29, 37, 45:** Wallet addresses for Dev, Public, and Burn wallets
- **Line 30, 38, 46:** Explorer URLs (use `https://solscan.io/account/YOUR_ADDRESS`)
- **Line 58:** Museum update stamp transaction URL
- **Line 66:** Treasury top-up transaction URL
- **Line 73:** DexScreener chart URL (use `https://dexscreener.com/solana/YOUR_TOKEN_ADDRESS`)
**Impact:** The entire `/hot` page Wallets section shows broken explorer links. The "View Chart" button links to a 404. The "Open explorer" links on each wallet card go nowhere.

### 4. Update Footer DexScreener link

**File:** `src/components/Footer.tsx` (line 13)
**Current:** `https://dexscreener.com` (generic homepage)
**Should be:** `https://dexscreener.com/solana/YOUR_TOKEN_ADDRESS`
**Also:** The Pump.fun link (line 14) is generic `https://pump.fun` — point it to the actual $HOT token page if one exists.

---

## P1 — HIGH PRIORITY

### 5. Verify remaining Wikipedia source URLs

**File:** `src/data/events.ts`
**Context:** The previous audit removed 61 fabricated chain-suffix duplicate sources and fixed 80+ primary Wikipedia URLs to point to real pages. However, some of the corrected URLs may still not resolve because Wikipedia might not have a dedicated article for every topic mapped.

**Events most likely to have non-existent Wikipedia pages (verify these first):**
- `euler-hack` → mapped to `https://en.wikipedia.org/wiki/Euler_Finance`
- `mango-markets-exploit` → mapped to `https://en.wikipedia.org/wiki/Mango_Markets`
- `badgerdao-exploit` → mapped to `https://en.wikipedia.org/wiki/BadgerDAO`
- `nomad-bridge-hack` → mapped to `https://en.wikipedia.org/wiki/Nomad_(bridge)`
- `steth-depeg-2022` → mapped to `https://en.wikipedia.org/wiki/Lido_Finance`
- `yam-finance-bug` → mapped to `https://en.wikipedia.org/wiki/Yam_Finance`
- `friend-tech-summer` → mapped to `https://en.wikipedia.org/wiki/Friend.tech`
- `base-mainnet-launch` → mapped to `https://en.wikipedia.org/wiki/Base_(blockchain)`
- `pump-fun-surge` → mapped to `https://en.wikipedia.org/wiki/Pump.fun`
- `bonk-solana` → mapped to `https://en.wikipedia.org/wiki/Bonk_(cryptocurrency)`
- `pepe-memecoin` → mapped to `https://en.wikipedia.org/wiki/Pepe_(cryptocurrency)`

**Action:** Run `pnpm audit:events` (the existing network audit script) to check which URLs return non-200 status codes. For any that fail, either find a real Wikipedia URL or replace with a quality news source (CoinDesk, The Block, Reuters, etc.).

**Existing tool:** `scripts/validate-links.ts` and `pnpm audit:events --network` already exist for this.

### 6. Events with ONLY Wikipedia sources (no primary/news sources)

These events rely entirely on Wikipedia and have no primary source, news article, or official reference. They need at least one authoritative non-Wikipedia source added:

- `bitcoin-run-2017` — add a CoinDesk or Reuters article about the 2017 bull run
- `coinbase-onboarding-2017` — add a TechCrunch or CNBC article about the app store surge
- `covid-black-swan` — add a CoinDesk or Bloomberg article about the March 2020 crash
- `dogecoin-run` — add a Reuters or BBC article about the 2021 Dogecoin rally
- `shiba-inu-run` — add a CoinDesk or Bloomberg article
- `anubisdao-rugpull` — add a Rekt News article
- `thodex-exit-scam` — add a Reuters or BBC article (Reuters covered the CEO arrest)
- `coinbase-ipo` — add the SEC S-1 filing or NASDAQ press release
- `terra-luna-collapse` — add a CoinDesk post-mortem or SEC complaint
- `celsius-bankruptcy` — add the Chapter 11 filing or CoinDesk timeline
- `three-arrows-capital` — add a CoinDesk or Financial Times article
- `alameda-balance-sheet-leak` — add the original CoinDesk exposé article
- `btc-etf-approval` — add the SEC order or a Bloomberg article
- `solana-revival-run` — add a CoinDesk or Messari article
- `pump-fun-surge` — add a CoinDesk or Decrypt article
- `ethereum-ico-launch` — add the Ethereum blog post or crowdsale page
- `axie-p2e-peak` — add a Rest of World or Bloomberg article
- `el-salvador-legal-tender` — add a Reuters article or the official law text
- `china-mining-ban` — add a Reuters or SCMP article

### 7. Resolve OpenClaw/Moltbook naming

**File:** `src/data/events.ts` — slugs `openclaw-moltbook-incident` and `openclaw-viral-sensation`
**Issue:** These events reference real incidents but use altered names:
- "Moltbook" appears to be a stand-in for "Bolt.new" (the AI code generation platform)
- "Clawdbot"/"OpenClaw" appears to reference the Claude/Cursor AI coding assistant situation
- "Peter Steinberger" may or may not be the real person's name

**The source URLs reference real articles** — the 404 Media and Wiz articles about exposed databases, and the Phemex/Decrypt articles about AI agent memecoins. But the event summaries use modified names.

**Decision needed:** For a history archive built on accuracy, decide whether to:
- (a) Use the real project/person names and verify the narrative matches
- (b) Remove these events if they can't be accurately attributed
- (c) Keep as-is with a note that names are modified (undermines the archive's credibility)

### 8. Normalize event `era` field values

**File:** `src/data/events.ts`
**Issue:** The `era` field on events uses free-text strings that don't match the era `id` values in `src/data/eras.ts`. This causes the gap report (`scripts/gap-report.ts`) to flag every single event as having an "unknown era."

**Current era IDs in `eras.ts`:** `genesis`, `ico-boom`, `defi-summer`, `nft-onboarding`, `cefi-contagion`, `pump-fun`

**Current era strings used in events:**
- `"Genesis"` (should map to `genesis`)
- `"Silk Road Era"` (no matching era — these are early 2008-2015 events that should be `genesis`)
- `"ICO Boom"` (should map to `ico-boom`)
- `"DeFi Summer"` (should map to `defi-summer`)
- `"NFT Summer"` (should map to `nft-onboarding`)
- `"Pump.fun Era"` (should map to `pump-fun`)
- `"CeFi Contagion"` (should map to `cefi-contagion`)

**Action:** Either normalize event era fields to match era IDs, or update the gap report script to handle the current naming. The eras.ts file filters by slug (not era field), so the timeline page works fine — but the data inconsistency is messy.

---

## P2 — MEDIUM PRIORITY

### 9. Remove dead code: `src/lib/rate-limit.ts`

**File:** `src/lib/rate-limit.ts` (22 lines)
**Issue:** Not imported by any file in the project. Likely a leftover from planned API routes.
**Action:** Delete or keep if API routes are planned (see backend roadmap).

### 10. Re-enable ESLint `react/jsx-key` rule

**File:** `.eslintrc.json`
**Current:** `"react/jsx-key": "off"`
**Issue:** This rule catches missing `key` props in `.map()` renders — a real bug source. It was likely disabled to suppress warnings during development.
**Action:** Re-enable (`"react/jsx-key": "warn"` or `"error"`), fix any violations.

### 11. Regenerate gap report

**File:** `reports/archive-gap-report.md`
**Issue:** The current report was generated 2026-02-07 and is now stale. Era reassignments, type corrections, and new events since then make it inaccurate.
**Action:** Run `pnpm check:data` to regenerate and verify the new data state.

### 12. Tag hygiene cleanup

**File:** `src/data/events.ts`
**Issue:** The gap report identified 40+ single-use tags. Many are too specific to be useful for filtering (e.g., `moltbook`, `nydfs`, `ftt`, `eip1559`, `integrity`). Consider:
- Consolidating: `dex` + `amm` could both just be `defi`
- Removing: `moltbook`, `integrity`, `reflections`, `controversial` add no filtering value
- Standardizing: `layer-2` vs `l2` (pick one), `smart-contracts` vs `smart-contract`

### 13. Event detail pages — pending sources display

**File:** `src/components/SourceList.tsx`
**Issue:** The `isPendingSource` function checks if a URL contains `example.com` or is missing. Currently only 1 source in events.ts has `kind: "pending"`. But with the Wikipedia cleanup, any source whose URL 404s will mislead users. Consider adding a visual distinction for Wikipedia-only sources vs. primary/news sources.

### 14. Add `buyUrl` to hot.ts (if applicable)

**File:** `src/data/hot.ts` (line 74)
**Current:** `buyUrl: undefined`
**Impact:** The "Optional entry" button on the $HOT page is conditionally rendered — it won't show with `undefined`. Once the token is live, add a Jupiter or Raydium swap link here.

---

## P3 — LOW PRIORITY / BACKLOG

### 15. Consider per-event OG images

Currently every page shares the same `/og.png`. For SEO and social sharing, dynamic OG images per event would be a significant upgrade. Next.js supports `opengraph-image.tsx` route handlers for this.

### 16. Add 404 handling for invalid event slugs with suggestions

The current event page calls `notFound()` on invalid slugs, which renders the global 404. A more helpful UX would show "Event not found" with similar event suggestions (fuzzy match on slug/title).

### 17. RSS/Atom feed

For a history archive, an RSS feed of new events would be valuable for researchers and followers. Can be implemented as an API route or static generation.

### 18. Implement contribution flow

The footer says "Sources > hype" and the project frames itself as community-maintained. Currently there's no way for the community to submit events or corrections. Consider a GitHub issue template, a contribution guide, or a simple form.

### 19. Search improvements

The archive search is client-side and searches title, tags, chain, and type. Consider adding:
- Search in summary text
- URL-persisted search/filter state (so users can share filtered views)
- Keyboard shortcut to focus search (e.g., `/` or `Cmd+K`)

### 20. Performance: lazy-load event data

All 91+ events are bundled into the client JS for the archive page (~130kB first load). As the archive grows past 200+ events, consider:
- Server-side filtering with search params
- Pagination or virtual scrolling
- Splitting event data into smaller chunks

### 21. Accessibility: marquee carousel

The BentoGrid's era carousel uses CSS animation (`marquee-scroll`). It pauses on hover (desktop) but has no pause control for keyboard/touch users. Add a pause/play button for motion-sensitive users, or respect `prefers-reduced-motion`.

### 22. CI pipeline enhancements

The current `.github/workflows/build.yml` runs install + build. Consider adding:
- `pnpm lint` step
- `pnpm check:data` step (validates event data integrity)
- `pnpm audit:events --network` on a cron schedule (weekly link checks)
- Lighthouse CI for performance regression tracking

---

## Files Reference

| File | What needs doing |
|------|-----------------|
| `public/og.png` | **CREATE** — 1200x630 social share image |
| `public/apple-touch-icon.png` | **CREATE** — 180x180 iOS icon |
| `src/data/hot.ts` | **EDIT** — Replace all 9 `REPLACE_ME` values with real wallet/tx data |
| `src/data/events.ts` | **EDIT** — Add primary sources for ~19 Wikipedia-only events, verify fixed URLs, normalize era field values |
| `src/components/Footer.tsx` | **EDIT** — Update DexScreener and Pump.fun links to $HOT-specific URLs |
| `src/lib/rate-limit.ts` | **DELETE** or keep for future API routes |
| `.eslintrc.json` | **EDIT** — Re-enable `react/jsx-key` rule |
| `reports/archive-gap-report.md` | **REGENERATE** — Run `pnpm check:data` |

---

## What Was Already Fixed (2026-03-01 Audit)

For context, these issues were identified and resolved in the prior audit session:

1. **Removed 61 fabricated chain-suffix Wikipedia duplicate sources** — Auto-generated URLs like `Wikipedia_Title_Bitcoin` that pointed to non-existent pages.
2. **Fixed 80+ primary Wikipedia URLs** — Mapped fabricated page names to real Wikipedia articles (e.g., `Mt._Gox_Collapse` → `Mt._Gox`).
3. **Renamed 87 Wikipedia source labels** — Changed formulaic "Wikipedia overview for X" to cleaner "X (Wikipedia)" format.
4. **Reclassified Terra/Luna** from `rugpull` to `collapse` (and updated title). Updated BentoGrid homepage card to "Hall of Fame Collapses."
5. **Reclassified Alameda Balance Sheet Leak** from `hack` to `milestone`.
6. **Fixed 9 era mismatches** — CryptoKitties (2017) moved from NFT Summer to ICO Boom; Squid Game Token moved from Pump.fun Era to NFT Summer; 7 events from 2023 moved from DeFi Summer to CeFi Contagion.
7. **Fixed desktop font-size** — Removed the 90% reduction on `md+` screens.
8. **Build verified** — 136/136 pages generated successfully, no TypeScript or lint errors.

---

## Quick Start Commands

```bash
# Validate event data integrity (offline)
pnpm check:data

# Validate event data + check source URLs (network)
pnpm audit:events

# Full validation suite
pnpm check:all

# Dev server
pnpm dev

# Production build
pnpm build
```
