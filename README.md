# History of the Trenches

Community-maintained crypto history archive and timeline built with Next.js.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- pnpm

## Getting Started

1. Install dependencies:
   - `pnpm install`
2. Copy env template:
   - `cp .env.example .env.local`
3. Run dev server:
   - `pnpm dev`

## Quality Commands

- `pnpm lint` - lint the app
- `pnpm test` - run unit tests
- `pnpm check:data` - validate event data quality
- `pnpm check:no-placeholders` - reject placeholder strings
- `pnpm build` - production build

## Project Notes

- Event records live in `src/data/events.ts`.
- Archive and timeline pages use shared selector logic in `src/lib/events/`.
- Data quality and link validation scripts are in `scripts/`.
