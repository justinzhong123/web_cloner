# Page Behaviors — counter-digital.jp

## Scroll behaviors

### Header
- `.l-header` is `position: fixed` with `z-index: 500`. **Background stays transparent at all scroll positions** (verified at scroll 0 and scroll 1500). No shrink, no bg change. Text/logo color stays the same — but on bright orange hero the logo+links read as orange/white, on white sections they read as orange/dark.
- The pill nav has a built-in translucent white bg `rgba(255, 255, 255, 0.7)` that gives the readability regardless of section.

### Hero (`p-top-mv`)
- Background image `bg-noise.webp` overlay; grid pattern from `p-top-creative__figure` div positioned absolutely behind text.
- `.p-top-mv__type` (the giant headline) and other elements have a `js-visible` class that switches to `is-visible` on load — opacity/mask reveal animation.
- `.p-top-mv__en` / `.p-top-mv__ja` use `js-split-text js-visible-span` — text is split into spans and each span reveals on a small stagger.
- Right side has vertical Japanese tagline + a "SCROLL" indicator (with arrow icon).

### Promise (`p-top-promise`)
- `.p-top-promise__telop` — horizontal **infinite marquee** of the phrase "デジタルコンテンツ支援で地域に活力をもたらす。" repeated 3+ times, 45px orange Tazugane Gothic. CSS keyframe animation, ~translateX(-50%) over ~30s linear infinite.
- `.p-top-promise__block.js-clone` — JS clones a block for marquee continuity.
- `.p-top-promise__type` (74px headline) and `.p-top-promise__message` use `u-mask-block` reveal — clipped reveal as element enters viewport via IntersectionObserver.

### Service (`p-top-service`)
- Massive sticky/parallax-style head. `.p-top-service__head` is 900px tall — likely **sticky** for parallax feel as user scrolls into items.
- Each `.p-top-service-item` has `js-visible u-mask-block` — clip-reveal on enter viewport.
- `.jsGlitchPic` and `._jsGlitchTxt` — small "glitch" decoration animation on images and the vertical Japanese type image (subtle RGB-shift / clip-displace keyframes).
- Items alternate left/right column placement.

### General reveal pattern (`js-visible`, `u-mask-block`, `u-block-reveal`, `js-split-text`)
- IntersectionObserver-driven. When element enters viewport (~rootMargin -20% 0px likely), it gets `is-visible` class.
- `u-mask-block` = clip-path rectangle that animates from inset(100% 0 0 0) to inset(0).
- `u-block-reveal` = horizontal block sweep over content.
- `js-split-text` = each span faded/translated up with stagger.

### Section labels — Garamond `( )` pattern
- All major section labels are wrapped in parens: `(Promise)`, `(Service)`, `(Casestudy)`, `(Partnership)`, `(Voice)`, `(Counter Media)`. Rendered in ITCGaramondStd-BkCond serif at 36px / 96px (Service is 96px, others 36px), color `#FF552B`.

## Click behaviors

### Header hamburger
- Click on top-right grid icon (visible in mobile-top screenshot) opens a full mega-menu drawer with the c-btn-round nav items and service sub-nav (visible in earlier extraction: サイトTOP, 企業情報, 制作実績, お客様成功事例, ブログ, ニュース, 資料請求, お問い合わせ, サービス + 20+ sub-services).
- Not critical for first-pass clone — render the hamburger button as closed state, optional drawer.

### EN/JP language toggle
- The "EN" pill in top-right toggles language. Not critical for first-pass.

### MORE buttons (`p-top-service__more`, `.p-top-creative__more`, `.p-top-voice__more`, `.p-top-media-blog__more`)
- Text link "MORE" with arrow icon. Routes to /service/, /creative-case/, /voice/, /counter-media/. Hover effect: underline or arrow translate.

### Cards (case studies, voice cards, media articles)
- Whole card is clickable link. Hover: subtle image scale / opacity shift.

## Hover behaviors
- Nav pill links: color stays orange but may underline. Sample.
- `c-btn-round` (in mega-menu): white pill on hover becomes inverted (filled bg).
- Project cards: image scales 1.05 / 1.1 on hover, brightness shift.

## Responsive breakpoints

- **Desktop (1440)**: Full layout as captured.
- **Tablet (~768)**: Service items stack to single column. Header pill nav probably hidden behind hamburger.
- **Mobile (390)**: Confirmed from mobile screenshot:
  - Header simplifies to: COUNTER logo (left) + hamburger only (right, small white square with grid icon)
  - Hero text scales: "BUILDING CUTTING-EDGE MODELS FROM LOCAL INNOVATION." stays large, wraps differently
  - Aside CTAs not shown (or move to bottom)
  - Sections stack single-column

## Animations to install
- `marquee` keyframe for the telop ticker
- `mask-reveal` keyframes for `.u-mask-block` (clip-path inset animation)
- `block-sweep` for `.u-block-reveal`
- `glitch-rgb` subtle for `.jsGlitchPic`
- `fadeUpStagger` for `.js-split-text` spans

These can be triggered via Intersection-Observer hooks in React or via simple CSS `@keyframes` + `data-visible` toggling.

## What we'll SKIP for the clone
- The mega-menu drawer (render hamburger as static decorative button)
- Language toggle behavior (static "EN" pill)
- WPCF7 contact form (link out to /contact/)
- reCAPTCHA badge
- Service sub-page routes
- SwiperJS slider (none used on the homepage)
