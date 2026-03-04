## Done Definition
- Runtime pages contain no public placeholder strings (`REPLACE_ME`, `example.com`, `coming soon`, `TODO`).
- App shell uses one canonical header/footer from `src/app/layout.tsx`.
- Home/archive/timeline/event data views are powered by canonical selectors in `src/lib/events`.
- Timeline highlights are quality-gated (min 2 sources, non-Wikipedia requirement, primary-source requirement for legal/seizure context).
- Archive chain filters use curated canonical taxonomy values.
- Core accessibility affordances remain intact (focus-visible, labels, keyboard navigation).

## Verification Commands
- `pnpm lint`
- `pnpm build`
- `pnpm check:data`
- `pnpm check:no-placeholders`

## Smoke Matrix
- Widths: `375`, `768`, `1440`
- Themes: `light`, `dark`
- Routes:
  - `/`
  - `/archive`
  - `/timeline`
  - `/event/silk-road-closure`
  - `/kit`
  - `/hot` (feature-gated)

## Optional Follow-Ups
- Add missing `source.kind` values across legacy event records to reduce `check:data` warnings.
- Add explicit `language` metadata on source entries to replace URL-heuristic language checks.
- Add automated CI browser smoke test job for the matrix above.
- Work through `docs/SOURCE-REMEDIATION.md` to drive low-source warning count to zero.
