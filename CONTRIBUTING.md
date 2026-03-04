# Contributing

Thanks for helping improve History of the Trenches.

## Development Setup

1. `pnpm install`
2. `cp .env.example .env.local`
3. `pnpm dev`

## Before Opening a PR

Run these commands and fix any issues:

- `pnpm lint`
- `pnpm test`
- `pnpm check:data`
- `pnpm check:no-placeholders`
- `pnpm build`

## Data Entry Guidelines

- Keep dates in `YYYY-MM-DD` format.
- Include at least two sources per event.
- Use English-language source URLs.
- Prefer at least one non-Wikipedia source for important entries.
- Keep tags lowercase and consistent.

## Commit Style

- Keep commits focused and descriptive.
- Explain why the change is being made, not only what changed.
