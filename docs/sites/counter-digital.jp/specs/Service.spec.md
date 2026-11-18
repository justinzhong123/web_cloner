# Service Section Specification (p-top-service)

## Overview
- **Target file:** `src/components/ServiceSection.tsx`
- **Screenshot:** `docs/design-references/desktop-section-service-top.png` + `desktop-section-service-items.png`
- **Interaction model:** scroll-driven entrance reveals on items; sticky-feeling head with vertical type

## DOM Structure
- `<section class="p-top-service">` — 3449px tall, bg cream/peach `--color-brand-soft (#FCE0D9)` underneath an orange grid SVG pattern
  - `<div class="p-top-service__bg">` — the orange grid SVG (decorative)
  - `<div class="p-top-service__head">` — 900px tall sticky-feel header section
    - Vertical "デジタル起点 全方位支援" type (image `service-type.webp`, 269×768) on the right
    - `<h2 class="p-top-service__title">` — "(Service)" in Garamond 96px orange
  - `<div class="p-top-service__items">` — list of 3 service items, alternating layout
    - Item 1: デジタルマーケティング + marketing.webp image
    - Item 2: クリエイティブワーク + creative.webp image
    - Item 3: ローカルメディア運営 + media.webp image
  - `<div class="p-top-service__more">` — bottom MORE link with arrow

## Computed Styles

### Section
- background-color: #FFEAE2 (very light peach)
- padding: 225px 0 0 (top)

### Service title
- font-family: EB Garamond italic
- font-size: 96px
- color: #FF552B
- padding-left: 120px

### Service item title
- font-family: Noto Sans JP
- font-size: 32px
- font-weight: 500
- color: #FF552B
- margin-bottom: 16px

### Service item desc
- font-family: Noto Sans JP
- font-size: 14px
- line-height: 23.8px
- color: #FF552B

### Item layout
- Item 1 (デジタルマーケティング): left-aligned image (large laptop mockup) + right text
- Item 2 (クリエイティブワーク): right-aligned image + left text
- Item 3 (ローカルメディア運営): left-aligned image + right text

### MORE link
- font-size: 24px
- color: #FF552B
- height 60px
- text + ArrowDiagIcon

## States & Behaviors
- Each item gets `js-visible u-mask-block` → clip-reveal on enter viewport. For clone: simple fade-up at intersection threshold.
- `.jsGlitchPic` on images → subtle RGB glitch (animate-glitch utility, 3.2s)
- `._jsGlitchTxt` on the vertical Japanese type image — same glitch animation.

## Per-State Content
N/A

## Assets
- `/images/service-type.webp` (269×768) — vertical Japanese chars
- `/images/service-marketing.webp` (1124×580)
- `/images/service-creative.webp` (880×560)
- `/images/service-media.webp` (656×836)
- `bg-counter-grid-soft` utility for grid pattern

## Text Content (verbatim)
- Section label: "(Service)"
- Vertical type label: "デジタル起点 全方位支援"
- Item 1: title "デジタルマーケティング", desc "SEOコンサルティングを中心としたデジタルマーケティングサービスをご提供します。"
- Item 2: title "クリエイティブワーク", desc "Webサイトをはじめとした、クリエイティブ制作サービスをご提供します。"
- Item 3: title "ローカルメディア運営", desc "越谷市を中心とした、埼玉県のローカルメディアを運営しています。"
- More text: "デジタルマーケティング戦略からクリエイティブ制作までを一貫してご支援します。" + "MORE"

## Responsive Behavior
- Desktop (1440): 2-column item layouts
- Mobile (390): items stack single column, images full-width, padding 24px
