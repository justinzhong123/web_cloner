# Page Topology — etoha-lab.co.jp

## Overall Layout
- Standard vertical-scroll page, viewport 1440x900, total document ≈ 10632 px tall.
- HTML class `_wide_aspect_device _is_loaded lenis` — Lenis smooth scroll active.
- Single `<main>` container; `<header>` and `<footer>` are direct children of `<body>`.
- Fixed overlays at body level: `.hero_overlay` and `.page_transition`.
- `#hero_bg` is the wireframe/grid background that lives behind the hero AND animates opacity with scroll (GSAP `to #hero_bg {opacity:0/1}`).

## Section Order (top → bottom)
| Order | id            | yTop  | Height | Heading                  | Notes |
|-------|---------------|-------|--------|--------------------------|-------|
| Fixed | `#header`     | 0     | ~80    | nav bar                  | Sticky, top of viewport |
| 1     | `#hero`       | 0     | 900    | これでいい じゃなく これがいい | Character + speech bubble + CTA over wireframe grid |
| 2     | `#about`      | 900   | 905    | ABOUT US                 | Intro text + cardboard character card with Swiper-like carousel |
| 3     | `#works`      | 1805  | 2135   | 美績紹介 / WORKS         | PICK UP featured case + 4-5 case cards in grid |
| 4     | `#service`    | 3940  | 4809   | 事業内容 / SERVICE       | **Scroll-driven** pinned tabs (4 cards), dark-blue bg, marquee belt |
| 5     | `#blog`       | 7540  | 860    | みんなのつぶやき / BLOG  | 2 latest blog cards + VIEW ALL button |
| 6     | `#member`     | 8400  | 1120   | ETOHA LAB のみんな / MEMBER | 6 character cards in 3-col grid |
| 7     | `#contact_sec`| 9521  | 766    | 相談してみる / CONTACT   | Big CTA on blue bg, character sits at curve |
| End   | `#footer`     | ~10287| ~345   | logo + nav + copyright   | Blue background, white logo, nav box |

## Layout Specifics
- `#service` is **scroll-driven, not click-tabs**. Its `.service__inner` (height 3600px) is pinned/sticky while user scrolls past it; the `.service__nav__list__item._active` class toggles based on which of 4 equal scroll segments is currently in view. Each card's `.service__contents__card_list__item._01/_02/_03/_04` fades/slides on segment change.
- `#about` has a Swiper carousel (1 instance detected on page).
- `#hero` has a character (`hero-character` style) with speech bubble (`hero-lines_balloon.webp`), and a CTA button with `hero-cta_balloon.webp`. Background is the `#hero_bg` element containing 11 image tiles (`hero_bg-image_01–11.webp`) arranged as a wireframe grid.
- `#contact_sec` has a `.contact_sec__character` element animated by GSAP (`set` + `to` with `yPercent`/`opacity` on enter), positioned via the bottom curve.
- `#footer` has a blue concave-curve top edge (full-width rounded shape).

## Global Overlays
- `.hero_overlay` (body-level) — full-screen overlay used for page-transition or initial reveal.
- `.page_transition` (body-level) — page-change transition overlay (likely for inter-page nav).
- `#header` is fixed-position with a translucent pill-shape backdrop (`global_nav` classes).

## Fonts
- Display + body: `"Zen Kaku Gothic New", sans-serif` (Google Fonts).
- Mono/labels: `Roboto, sans-serif` (Google Fonts).

## Colors (provisional, confirmed in extraction)
- Brand blue: `#1872DE` (approx — verified during component extraction)
- Hero card bg: same brand blue
- Body bg: cream/off-white
- Body text: near-black `#333` ish

## Mobile
- Below ~768px the layout collapses: full-width single column. Hero CTA pill stays. Member grid becomes 2-col then 1-col.

## Interaction Models (per section)
| Section | Model |
|---------|-------|
| header  | scroll-pinned, may change appearance on scroll |
| hero    | static + entrance GSAP fades + character speech-bubble animation |
| about   | swiper carousel of character cards |
| works   | static grid; arrow button hover state |
| service | **SCROLL-DRIVEN PINNED TABS** — sticky inner panel, scroll-segment-driven `_active` swap, fade/slide between cards |
| blog    | static cards |
| member  | static character grid + per-card keyframe `member_obj_character-slide` on view |
| contact | character GSAP entrance animation |
| footer  | static |
