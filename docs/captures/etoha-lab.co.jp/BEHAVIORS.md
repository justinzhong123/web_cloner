# Behaviors — etoha-lab.co.jp

## Scroll Sweep

### Header
- Header is pinned (fixed at top). It uses a translucent pill background (`.global_nav` container).
- Does not visibly shrink/change appearance on scroll within the viewport sweep tested (but the pill styling stays consistent over both light and dark backgrounds).

### Hero
- `#hero_bg` (wireframe-tile grid behind content) responds to scroll: GSAP captures `to #hero_bg {opacity: 0, duration: 0.3}` and `to #hero_bg {opacity: 1, duration: 0.3}`. So it fades out on scroll-down and back in when returning to top.
- Speech-bubble and CTA-balloon (PNG/WebP overlays) appear with the hero — no scroll-triggered changes within hero.

### About
- Static text on left; swiper carousel of card characters on right.
- No scroll-pin in the about section.

### Works
- Static grid. Each `.works__list__item__arrow` has a `arrow-bg.webp` background image — likely hover-rotates or scales.
- PICK UP badge (yellow rosette) is a fixed decoration at top-left of the featured card area.

### Service — **scroll-driven pinned section**
This is the most complex section.
- `#service` total height = 4809 px, `.service__inner` = 3600 px, viewport = 900 px.
- During scroll between `y = 4500` and `y = 6800`, the inner panel stays positioned at viewport (top = 0) — i.e. it's `position: sticky` or pinned via GSAP `ScrollTrigger.create({pin: true})`.
- 4 card slides exist: `.service__contents__card_list__item._01/_02/_03/_04` (GRAPHIC DESIGN, WEB SITE, PROMOTION, MOVIE).
- 4 nav items: `.service__nav__list__item` — one carries `._active` at any time. Observed transitions during scroll:
  - y ≤ 4500 → `_active` on item 1 (GRAPHIC DESIGN)
  - y 5200 → `_active` on item 2 (WEB SITE)
  - y 6000 → `_active` on item 3 (PROMOTION)
  - y 6800 → `_active` on item 4 (MOVIE)
- Card panel z-index stacking: when a new tab becomes active, the corresponding card animates in (opacity + transform). Likely GSAP timeline or CSS transition driven by `_active` class.
- A horizontal marquee belt of large text runs at bottom of the section (`.service__obj__belt__item` × 2, with CSS keyframe `service_obj_belt-loop` translating `-50%`). Speed: continuous loop.

### Blog
- Static cards. `cmn_btn` (VIEW ALL) has `btn-bg.webp` background which is likely a texture/noise overlay.

### Member
- 6 character cards in a 3-col grid (desktop). Each card has a number tag, a colored character (line-art) and a name+role pair.
- CSS keyframe `member_obj_character-slide` (y -130% → 0, opacity 0 → 1, 10 % delay before move-in) plays on viewport entry — character slides DOWN into the frame.
- Keyframe `member_list_item-pop_in` (scale 0.85 → 1.03 → 1) animates each card's entrance.
- A separate `member_list_item_new_icon-fade_in` keyframe handles the "今年入社" (new this year) black-bubble badge.

### Contact section
- GSAP captures `set('contact_sec__character', {xPercent:-50, yPercent:-75, opacity:0})` then `to('contact_sec__character', {opacity:0, yPercent:-75, scaleX:1, scaleY:1, duration:0.4, ease:'power1.in'})` — the meditating character animates into place above the curve. Likely a `timeline` paired with ScrollTrigger.

### Footer
- Static. Blue concave curve at top (negative-curve mask). Footer nav box is positioned bottom-right inside the blue band.

## Click Sweep
- Header items (ABOUT US / WORKS / SERVICE / BLOG) likely anchor-scroll to corresponding section. CONTACT button is a pill with arrow — opens contact form route.
- Service-section nav items appear clickable (cursor likely changes), but actual content driver is scroll. Clicking probably jumps the scroll position to the matching segment (GSAP `ScrollToPlugin` or `lenis.scrollTo()`).
- VIEW ALL button on blog → /blog page.
- WORKS arrow buttons → individual case pages.

## Hover Sweep
- `cmn_btn` and CONTACT pill: have hover effects (likely scale/color/elevation transition — extract per-component).
- Works case cards: arrow rotation/scale on hover (the `arrow-bg.webp` decoration suggests a spinning element).
- Member cards: hover may scale or surface the character.

## Responsive Sweep
- Desktop 1440 px: layout matches the screenshots in `docs/design-references/etoha-lab.co.jp/`.
- Tablet 768 px: not separately captured — likely 2-column for member, single column for cards.
- Mobile 390 px: full-page snapshot captured as `mobile-full.png` and `mobile-hero.png`. Hero collapses to single column, nav becomes hamburger / pill toggle, character/balloon stack vertically.

## Animation Libraries Detected
- **GSAP** 3.12.5 (used for hero_bg opacity and contact_sec__character entrance)
- **ScrollTrigger** (for pinning + scroll-segment detection on `#service`)
- **Lenis** (smooth scroll)
- **Swiper** (1 instance, likely in `#about` carousel)
- No Framer Motion, AOS, Locomotive, Three.

## Global Patterns
- All buttons share `cmn_btn` class + `btn-bg.webp` background (subtle paper-texture).
- Big circles use `icon-hana_*.gif` GIFs (a flower bloom emoji-like motif) for organic accent.
- Character mascot (blue-hat baby) appears in: hero card, top-right of nav (after scroll), blog corner, contact section. All from `assets/image/global_nav-character.webp` and `member-character.webp` family.
