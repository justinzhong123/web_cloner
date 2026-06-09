# Casestudy Section Specification (p-top-creative)

## Overview
- **Target file:** `src/components/CasestudySection.tsx`
- **Screenshot:** `docs/design-references/desktop-section-casestudy.png`
- **Interaction model:** static + scroll-reveal entrance; horizontal-scrollable card list on smaller screens

## DOM Structure
- `<section class="p-top-creative">` — white bg, ~705px tall
  - `<div class="p-top-creative__head">` — Garamond `(Casestudy)` label, 36px orange
  - `<ul class="p-top-creative__list">` — flex row of 3 large project cards. ~364px tall. Each card is large image + title overlay/below.
  - `<div class="p-top-creative__more">` — bottom MORE link

## Computed Styles
- Section padding ~80px top/bottom
- Label: font-serif italic 36px orange
- Cards: each ~33% width with image (object-fit cover) and title below

## Per-State Content
6 case studies (from extraction):
1. 日本瓦斯株式会社様 コーポレートサイト(BtoC領域) — `/images/case-nichigas.png`
2. エージェントグロー様 コーポレートサイト — `/images/case-ag-corp.png`
3. エージェントグロー様 採用サイト — `/images/case-ag-recruit.png`
4. 世界へボカン様 BtoBサービスサイト — `/images/case-bokan-full.png`
5. Ryokanbook OTAサイト — `/images/case-ryokanbook.png`
6. NEOlogi サービスサイト — `/images/case-misc-1.png`

## Assets
See above.

## Text Content
- Label: "(Casestudy)"
- Titles as above
- More: "MORE"

## Responsive
- Desktop: 3-column grid
- Mobile: horizontal swipe carousel OR stacked
