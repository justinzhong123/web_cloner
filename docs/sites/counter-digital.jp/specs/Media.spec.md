# Counter Media Section Specification (p-top-media)

## Overview
- **Target file:** `src/components/MediaSection.tsx`
- **Screenshot:** `docs/design-references/desktop-section-media.png`
- **Interaction model:** static; decorative semicircle in upper-left

## DOM Structure
- Section bg white, with `<figure class="p-top-media__semicircle">` (176×176 orange decoration, absolute top-left)
- `(Counter Media)` Garamond label + EN/JP description
- Two stacked panels:
  - **COUNTER Channel:** big card with `media-channel-bg.svg` orange background, video thumbnail, 2 profile icons (宮田, 森)
  - **Owned Blog Media:** 3 article cards
- MORE link

## Per-State Content
### Channel
- Title: "COUNTER Channel"
- Hosts: 宮田 (media-miyata.webp), 森 (media-mori.webp)

### Blog Posts
1. 2026.05.16 — Webサイト制作時のヒアリング項目7つ！テンプレートやコツも紹介 — `/images/blog-hearing.jpg`
2. 2026.05.15 — Webサイト制作期間の平均？ページ数や依頼先ごとに整理して解説 — `/images/blog-term.jpg`
3. 2026.05.10 — Webサイト制作のスケジュールと流れ！タスクごとの納期一覧や管理方法も紹介 — `/images/blog-schedule.jpg`

## Text Content
- Label: "(Counter Media)"
- Desc: "COUNTERのデジタルナレッジをシェアするメディアです。マーケティングからクリエイティブに関することまで発信しています。"
- Channel title: "COUNTER Channel"
- Blog section title: "Owned Blog Media"
- More: "MORE"

## Responsive
- Desktop: side-by-side columns or stacked panels with horizontal blog cards
- Mobile: stacked single column
