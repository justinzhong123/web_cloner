# Promise Section Specification (p-top-promise)

## Overview
- **Target file:** `src/components/PromiseSection.tsx`
- **Screenshot:** `docs/design-references/desktop-section-promise.png`
- **Interaction model:** scroll-driven entrance reveals + a horizontal infinite-marquee at top

## DOM Structure
- `<section class="p-top-promise">` — white bg, ~1087px tall
  - `<div class="p-top-promise__telop">` — full-width horizontal marquee at top, 84px tall, 45px orange Japanese text repeated 3+ times scrolling left.
  - `<div class="p-top-promise__wrap">` — content area, max-width ~1440px, padded.
    - `<h2 class="p-top-promise__title">` — "(Promise)", serif Garamond italic 36px orange
    - `<div class="p-top-promise__type">` — Japanese type "メインストリームを ひっくり返す。", 74px / 96.2px line-height, weight 500, color orange
    - `<div class="p-top-promise__message">` — long body paragraph, 25px / 32.5px, color orange

## Computed Styles

### Telop
- height: 83.5px
- font-size: 45px (text "デジタルコンテンツ支援で地域に活力をもたらす。")
- color: #FF552B
- font-family: Noto Sans JP, weight 500
- padding: 14px 0 10px
- overflow: hidden, white-space: nowrap

### Title `(Promise)`
- font-family: EB Garamond (italic style, sub for ITCGaramondStd-BkCond)
- font-size: 36px
- font-weight: 400
- color: #FF552B

### Type (big headline)
- font-family: Noto Sans JP
- font-size: 74px
- line-height: 96.2px
- font-weight: 500
- color: #FF552B

### Message (paragraph)
- font-family: Noto Sans JP
- font-size: 25px
- line-height: 32.5px
- color: #FF552B
- max-width: ~860px (centered or right-aligned within wrap)

## States & Behaviors
- Telop: CSS marquee animation, ~28-30s linear infinite, translateX 0 → -50%. Render the text 4× back-to-back, animate the whole strip.
- Title/type/message: mask-reveal on scroll-into-view (clip-path inset 100% 0 0 0 → inset 0). For first-pass clone, simple fade-up on intersection is acceptable.

## Per-State Content
N/A

## Assets
None.

## Text Content (verbatim)
- Telop: "デジタルコンテンツ支援で地域に活力をもたらす。" — repeat for marquee.
- Title: "(Promise)"
- Type headline: "メインストリームを\nひっくり返す。"
- Message: "マーケットには"負けないための作法"がある。だがそこに美意識はなく、汎用的な式が残るだけ。私たちは憂ます。"いっせーのーで"で、同じものをつくること。負けないために、同じものになろうとすること。ロジックとは違うリベラルアーツこそ、私たちが大切にすべきではないか。そんなふうに考えます。

  市場原理の外側には、魅力があるにも関わらず、気づかれていないモノやコトがあります。それらはそれぞれの環境で変形し、同じものはありません。私たちは決めました。本来の主役をデジタルの力で表舞台に押し上げることを。だから私たちは憂ません。スポットライトを当てたその対象に、また新たな影ができることを。かつての主役は、舞台ごと入れ替わる。さぁ、メインストリームをひっくり返そう。"

## Responsive Behavior
- Desktop (1440): as above
- Mobile (390): Type scales ~36px, message scales 16px, telop 28px. Padding reduces 80px → 24px.
