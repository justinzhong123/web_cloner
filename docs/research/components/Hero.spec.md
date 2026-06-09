# Hero Specification (p-top-mv)

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/desktop-section-hero.png`
- **Interaction model:** static + a small entrance animation (fade-up on load)

## DOM Structure
- `<section class="p-top-mv is-section-dark">` — relative, height 900px, bg orange (#FF552B), color white
  - `<div class="p-top-mv__noise">` — absolute inset-0, `background-image: url("bg-noise.webp")` (repeating noise grain overlay). z-index 1.
  - `<div class="p-top-creative__figure">` — absolute inset-0, the orange grid pattern background. z-index 0.
  - `<div class="p-top-mv__wrap">` — relative content container. Max-width 1440px. Padding ~120px left/right. Pt 220px.
    - `<p class="p-top-mv__en">` — top-positioned English description, 12px white, line-height ~1.3
    - `<div class="p-top-mv__type">` — the huge "BUILDING CUTTING-EDGE MODELS FROM LOCAL INNOVATION." headline, 110px / line-height 99px, weight 500, letter-spacing -5.5px, color white
    - `<p class="p-top-mv__ja">` — Japanese tagline "ローカルから最先端をつくる。", 25px white, line-height ~1.5

- Right-side overlay: vertical Japanese text + a small "SCROLL" indicator at bottom-right (the small white circle with down arrow + Japanese characters).
- Floating right cluster: two stacked white-pill CTAs (`資料ダウンロード`, `お問い合わせ`) at right ~24px.

## Computed Styles
### Hero section
- `position: relative`
- `height: 900px`
- `background-color: #FF552B`
- overflow hidden

### `.p-top-mv__type`
- font-family: Inter (display sub for HelveticaNeueeTextPro-Md)
- font-size: 110px
- line-height: 99px
- font-weight: 500
- letter-spacing: -5.5px (= -0.05em)
- color: #FFFFFF
- text-transform: uppercase
- max-width: ~1160px

### `.p-top-mv__en`
- font-family: Inter
- font-size: 12px
- line-height: 15.6px
- color: white
- max-width: ~360px
- positioned top-left, above the headline (~ top 210px, height 244px)

### `.p-top-mv__ja`
- font-family: Noto Sans JP (sub for Tazugane Gothic)
- font-size: 25px
- line-height: 37.5px
- color: white
- bottom area of hero

## States & Behaviors
- On load, headline fade-up animation (~0.8s, ease-out, cubic-bezier(0.22, 1, 0.36, 1))
- Vertical right-side Japanese text + "SCROLL" indicator (decorative)
- No scroll-triggered changes

## Per-State Content
N/A

## Assets
- `/images/bg-noise.webp` — applied via `.bg-noise` utility on the noise overlay
- `.bg-counter-grid` utility for the grid pattern

## Text Content (verbatim)
- EN: "We utilize our digital content and marketing expertise to overcome marketing challenges companies face."
- Headline: "BUILDING CUTTING-EDGE MODELS FROM LOCAL INNOVATION."
- JA tagline: "ローカルから最先端をつくる。"
- Right vertical text (Japanese): "ローカルから最先端をつくる" repeated vertically with "SCROLL" label below

## Responsive Behavior
- **Desktop (1440px):** Full width as above.
- **Mobile (390px):** Confirmed from screenshot — same layout but smaller font, headline wraps differently. Hero remains ~100vh.
- **Headline scales:** 110px desktop → ~46px mobile.
- **Padding:** 120px desktop → 24px mobile.
