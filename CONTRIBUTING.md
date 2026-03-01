# Contributing to History of the Trenches

Thanks for helping keep the record straight.

## Submitting a New Event

Use the [New Event issue template](../../issues/new?template=new-event.yml) to propose an event. Every submission must include:

- An exact date (YYYY-MM-DD)
- At least 2 verifiable sources (news articles, official docs, on-chain data)
- A concise 2-4 sentence summary

We prioritize accuracy over speed. Sources > hype.

## Reporting Corrections

Use the [Correction issue template](../../issues/new?template=correction.yml) to flag errors in existing events.

## Development

```bash
pnpm install
pnpm dev          # Start dev server
pnpm lint         # Run linter
pnpm check:data   # Validate event data
pnpm build        # Production build
```

## Data Structure

Events live in `src/data/events.ts`. Each event follows the `Event` type:

- `slug` — URL-safe kebab-case identifier
- `title` — Human-readable event name
- `type` — One of: milestone, hack, rugpull, collapse, runner, seizure
- `chain` — Primary blockchain (Bitcoin, Ethereum, Solana, etc.)
- `year` / `date` — Event year and exact date (YYYY-MM-DD)
- `era` — Must match an era ID from `src/data/eras.ts`
- `summary` — 2-4 sentence neutral description
- `tags` — Lowercase filtering tags
- `sources` — At least 2 verifiable Source objects

## Style Guidelines

- Keep summaries factual and neutral
- Use lowercase kebab-case for slugs and tags
- Every source needs a label, URL, publisher, and year
- Wikipedia alone is not sufficient — include at least one primary or news source
