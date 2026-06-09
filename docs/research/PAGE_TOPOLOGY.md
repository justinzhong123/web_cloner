# Page Topology — counter-digital.jp

Total page height: **9418px** (desktop 1440)
Body color: `rgb(58, 55, 53)` (#3A3735)
Brand orange: `rgb(255, 85, 43)` (#FF552B)
Footer cream: `rgb(239, 236, 235)` (#EFECEB)
Hero is **dark section** (white text on orange).
Footer is **dark section** (cream text on patterned orange bg-assort.webp).

## Top-level layout
- `<div class="l-body-wrap">` — full-width container, no centering
  - `<header class="l-header">` — `position: fixed`, height 100px, `z-index: 500`. **Background transparent at all scroll positions** (confirmed: no change at scroll 1500). Contains logo (left), translucent white pill nav (center), EN toggle + hamburger (right).
  - `<main class="l-main">` — flow content, 8757px tall
  - `<aside class="l-aside">` — appears to be inline (static position) at bottom of main. Wraps footer CTAs.
  - `<footer class="l-footer is-section-dark">` — patterned orange/textured bg

## Sections (in order, with top/height)

| # | Class | Top | Height | Bg | Notes |
|---|---|---|---|---|---|
| 1 | `.p-top-mv` | 0 | 900 | Orange `#FF552B` + `bg-noise.webp` overlay + grid `p-top-creative__figure` | Hero. Dark section. Massive "BUILDING CUTTING-EDGE MODELS FROM LOCAL INNOVATION." in HelveticaNeue-Md 110px/99px tracking -5.5px. Sub-EN paragraph (12px) + vertical right-side Japanese text. Bottom JP tagline 25px. |
| 2 | `.p-top-promise` | 940 | 1087 | White | Top: horizontal scrolling telop ticker "デジタルコンテンツ支援で地域に活力をもたらす。" (45px orange, marquee). Below: `(Promise)` label in 36px Garamond, then huge orange JP type "メインストリームをひっくり返す。" 74px/96.2px, then long message paragraph. |
| 3 | `.p-top-service` | 2127 | 3449 | Has `.p-top-service__bg` underlay (light cream/peach `#FCE0D9`?) | Massive section. `(Service)` 96px Garamond label. Big vertical text "デジタル起点 全方位支援". Hero image (p-top-service-type.webp = vertical Japanese chars). Then 4 service items as alternating left/right layout cards: マーケティング, クリエイティブ, メディア/プロデュース. Each card has a `picture` + `__wrap` text block. Closes with `__more` "デジタルマーケティング戦略から…MORE" link. |
| 4 | `.p-top-creative` | 5576 | 705 | White (case study list section) | `(Casestudy)` 36px Garamond label. Below: horizontal scrollable list of 3-up project cards (1391×789 PNGs of corp sites). MORE button. |
| 5 | `.p-top-partnership` | 6281 | 437 | White | `(Partnership)` label. Single block titled "Aliance" with text list: ARUTEGA, LEOGRAPH, NOW, VILLAGE. |
| 6 | `.p-top-voice` | 6718 | 557 | White | `(Voice)` label. Horizontal row of 3 customer-quote cards (`c-card-case` 414px wide, 180px tall). MORE button. |
| 7 | `.p-top-media` | 7276 | 946 | White, semicircle decoration upper-left (`.p-top-media__semicircle` 176×176 orange shape) | `(Counter Media)` 36px Garamond label + EN+JP desc. Then two stacked panels: **COUNTER Channel** (video + 2 profile images for 宮田, 森) and **Owned Blog Media** (3 article cards). MORE link. |
| 8 | `.l-footer.is-section-dark` | 8757 | 661 | bg-assort.webp pattern (orange gradient/texture) | "SAITAMA越谷 ローカルから最先端をつくる。" headline + DOWNLOAD / CONTACT large CTA buttons + sitemap nav columns + copyright |

## Header internals
- Logo `figure.l-header-logo` — absolute, top 40px / left 40px. Inline SVG, 160×23 (a "COUNTER" wordmark).
- Pill nav `nav.l-header-nav` — absolute, top 35px / left 491px, width 458px, height 40.5px, **bg `rgba(255, 255, 255, 0.7)`**, contains 5 `c-btn-txt` links: about, service, Casestudy, Blog, News (each 14px, color `#FF552B`).
- Top-right area: "EN" toggle + hamburger button (visible in mobile-top screenshot — square pill with grid icon).
- The header has a hidden mega-menu (the `c-btn-round` entries: サイトTOP, 企業情報, etc., service sub-nav) that appears on hamburger click.

## Aside (floating right-side CTAs on hero only)
Looking at the desktop hero screenshot the right side shows two stacked white-pill buttons (`c-btn-aside`, white bg with orange text, 130×46, 11px font). These contain "資料ダウンロード" (download) and "お問い合わせ" (contact). They appear `position: absolute` rooted to the hero. Element `.l-aside` here in the topology dump shows static position at 8757 — that's a different `.l-aside` instance at the bottom housing footer CTAs.

The visible top-right grid icon is the hamburger menu trigger.

## Z-index layers
- Header: 500 (fixed, transparent → text overlays content)
- Mega-menu: would be above header when open
- Hero noise overlay: above hero bg, below text
- All other sections: default stacking

## No scroll container / smooth-scroll
- No Lenis, no Locomotive. Native browser scrolling.
- `OverlayScrollbars` library is loaded (the `os-scrollbar` divs at body root) but only used for the mega-menu / mobile drawer panes.

## Asset summary
- 27 `<img>` tags. Key reusable assets to download:
  - `p-top-service-type.webp` 269×768 (vertical "デジタル起点 全方位支援" Japanese chars block)
  - `p-top-service-marketing.webp` 1124×580
  - `p-top-service-creative.webp` 880×560
  - `p-top-service-media.webp` 656×836
  - `p-top-media-channel-bg.svg`
  - `media-miyata.webp`, `media-mori.webp` (160×160 profile)
  - `bg-noise.webp`, `bg-assort.webp` (decorative backgrounds)
  - Case study screenshots (PNG, ~1024-2560px wide)
  - Voice avatars (`hirano.png`, `aono.png`, `sakurai.png`)
  - Article thumbnails (`website-development-*.jpg`)
  - Favicons (32, 192, 180 apple-touch)
  - OGP image

## Build order
1. Foundation: globals.css colors, fonts, base typography. Download all assets. Extract SVG icons (hamburger, scroll arrow, MORE arrow, EN, logo).
2. Header + mega-menu skeleton
3. Section components in parallel via worktrees: Hero, Promise, Service, Casestudy, Partnership, Voice, Media, Footer
4. Page assembly + scroll behaviors (telop marquee, glitch animations, scroll-reveal `js-visible` triggers)
5. Visual QA at 1440 + 390
