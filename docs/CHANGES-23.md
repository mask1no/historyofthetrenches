# CHANGES-23

## Phase 0 Baseline

- Branch created: `fix/hott-23`
- Baseline commands run: `pnpm install`, `pnpm dev`, `pnpm build`
- Found in:
  - HOT page (`What $HOT`): `src/app/hot/page.tsx`
  - Wallet tiles (`Phantom` / `Backpack`): `src/app/hot/page.tsx`, `src/app/kit/page.tsx`
  - Accent picker (`ACCENT` search surface): `src/components/AccentPicker.tsx`
  - Hall of Fame sections: `src/components/BentoGrid.tsx`
  - At a glance bento: `src/components/Hero.tsx`
  - Timeline footer CTA text: `src/components/EraTimeline.tsx`
  - Footer Notes bento: `src/components/Footer.tsx`

## 23 Improvements Implemented

1. Phantom + Backpack tile hovers switched to brand colors, with matching focus-visible rings and muted tints; no glow.  
   Paths: `src/app/hot/page.tsx`
2. Removed the wallet placeholder row ("Explorer links will appear here...").  
   Paths: `src/app/hot/page.tsx`
3. Replaced the high-volatility paragraph with the exact one-sentence nostalgic copy.  
   Paths: `src/app/hot/page.tsx`
4. Removed `-facing` phrasing and added the continuously-updated archive promise near HOT intro.  
   Paths: `src/app/hot/page.tsx`, `src/data/events.ts`
5. Added missing events: TRUMP, MELANIA, LIBRA scandal, Hawk Tuah rugpull.  
   Paths: `src/data/events.ts`
6. Principle / Goal / Signal blocks restyled as proper cards matching bento card treatment in dark mode.  
   Paths: `src/app/kit/page.tsx`
7. Reordered Infrastructure Kit so OpSec / Layering / Hygiene appears at the bottom.  
   Paths: `src/app/kit/page.tsx`
8. Timeline highlight logic updated so featured era events (including Bitcoin Pizza Day) are included in 2008-2015 highlights.  
   Paths: `src/lib/events/selectors.ts`
9. Removed bottom CTA block from timeline page.  
   Paths: `src/components/EraTimeline.tsx`, `src/app/timeline/page.tsx`
10. Chart sections now render only when chart URLs are usable; added per-event hide support and placeholder checks.  
    Paths: `src/lib/events/chart.ts`, `src/components/EventTable.tsx`, `src/app/event/[slug]/page.tsx`, `src/data/events.ts`, `scripts/audit-events.ts`
11. Dark-theme border tuning for subtler outlines and muted badge backgrounds to avoid bright white edge feel.  
    Paths: `src/app/globals.css`, `src/components/ui/badge.tsx`
12. Hall of Fame columns locked to explicit slug arrays (5 rugs / 5 runners), with Moltbook first rug and TRUMP first runner.  
    Paths: `src/components/BentoGrid.tsx`, `src/data/events.ts`
13. Wallets and On-Ramps restructured into clear grouped sub-sections.  
    Paths: `src/app/kit/page.tsx`
14. Fixed self-hosted infra copy and added non-Start9 alternatives (Umbrel, RaspiBlitz, myNode).  
    Paths: `src/app/kit/page.tsx`
15. Final audit pass completed with build/test sweeps across target pages and checks listed in prompt.  
    Paths: `src/**/*`, `scripts/audit-events.ts`
16. Accent picker duplicate red replaced with pink (`#EC4899`) in top-right slot of swatch grid.  
    Paths: `src/components/AccentPicker.tsx`
17. Added hover/focus-visible style (`#D6B15E`) to top-right accent/theme icon buttons.  
    Paths: `src/components/AccentPicker.tsx`, `src/components/NavBar.tsx`
18. Homepage hero copy changed to exact requested sentence with "archived" and no dash punctuation.  
    Paths: `src/components/Hero.tsx`
19. Reduced vertical gap between hero CTA block and "Markets forget. Communities don't."  
    Paths: `src/components/Hero.tsx`, `src/app/page.tsx`
20. Removed Notes bento card from footer.  
    Paths: `src/components/Footer.tsx`
21. Field Notes / Community Log / Explore cards aligned as strict desktop 3-column grid, stacked on mobile, equal-height card structure.  
    Paths: `src/components/Footer.tsx`
22. Removed footer hero glow/halo effects, leaving subtle bordered surface only.  
    Paths: `src/components/Footer.tsx`
23. Added bottom breathing room under footer (`pb-5`).  
    Paths: `src/components/Footer.tsx`
