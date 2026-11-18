# Voice Section Specification (p-top-voice)

## Overview
- **Target file:** `src/components/VoiceSection.tsx`
- **Screenshot:** `docs/design-references/desktop-section-voice.png`
- **Interaction model:** static + entrance reveal

## DOM Structure
- Section bg white
- `(Voice)` Garamond label
- Horizontal row of 3 `c-card-case` (414×180 each) with client name + quote + avatar image
- MORE link below

## Per-State Content
3 voice cards:
1. HAIR SALON ACT — "短い期間の中でスピーディかつ品質の高いWEBサイトを作成いただきました。" — `/images/voice-hirano.png`
2. 株式会社Play Blue — "決め手は高い提案力。プロジェクトも安心してお任せできました。" — `/images/voice-aono.png`
3. 株式会社HONE — "企業のマーケティング戦略から実行まで、プロの提案力に驚きました。" — `/images/voice-sakurai.png`

## Text Content
- Label: "(Voice)"
- See above
- More: "MORE"

## Responsive
- Desktop: 3-column row
- Mobile: stacked single column
