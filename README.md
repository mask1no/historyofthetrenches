## History of the Trenches

Community-maintained crypto history archive built with Next.js 14 (App Router), TypeScript, Tailwind, and shadcn-style UI components.

### Quickstart

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

### Project Structure

- `src/app` – App Router pages and layout
- `src/components` – UI building blocks (NavBar, Hero, BentoGrid, EventTable, EraTimeline, SourceList, RecentAdditions)
- `src/components/ui` – shadcn-inspired primitives (Button, Card, Badge, Input, Select)
- `src/data/events.ts` – seed events with sources (edit here)
- `src/data/eras.ts` – era definitions and featured events
- `src/lib/utils.ts` – class merging helper
- `src/app/globals.css` – design tokens and base styles
- `src/lib/supabase/*` – Supabase client helpers (browser/server)
- `supabase/schema.sql` – starter schema for profiles/notifications/subscriptions

### Data Model

Events (`src/data/events.ts`) include:

- `slug`, `title`, `type` (`rugpull` | `runner` | `milestone`)
- `chain`, `year`, `era`, `summary`, `tags`
- Optional `peakMetric`, `outcome`, `hallOfFame`, `status`
- `sources`: `{ label, url, publisher, year }[]`

Eras (`src/data/eras.ts`) reference featured events by filtering the events list.

### Pages

- `/` – landing with hero, bento grid, recent additions, footer
- `/archive` – filterable archive (type, chain, year, tag, search)
- `/timeline` – vertical chaptered era view with featured events and inline expand/collapse
- `/event/[slug]` – event detail with badges, sources, key facts, related events

### Supabase Auth Setup

- Add env vars (see `.env.example` template):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- In Supabase dashboard, enable Twitter/X OAuth and add your site URL as redirect.
- The login modal offers “Login with X” (Supabase OAuth) and a placeholder wallet option.
- Notification UI is client-only; schema is defined in `supabase/schema.sql` (profiles, notifications, subscriptions with RLS).

### Styling

Design tokens live in `globals.css`:

- `--bg`, `--fg`, `--muted`, `--card`, `--border`
- `--accentGold`, `--accentRed`, `--accentGreen`

Headings use Playfair Display; body uses Inter via `next/font`.

### Notes

- No external APIs are required; all data is local seed content.
- Adjust accent colors and typography in `globals.css` and `tailwind.config.ts`.
- Add new events/eras by editing the seed files; routes auto-update. 

