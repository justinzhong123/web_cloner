# Footer Specification (l-footer)

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/desktop-section-footer.png`
- **Interaction model:** static

## DOM Structure
- `<footer class="l-footer is-section-dark">` — background `bg-assort.webp` patterned orange texture, cream text (#EFECEB)
- Top: "SAITAMA越谷" + "ローカルから最先端をつくる。" big tagline
- Two large CTA buttons: DOWNLOAD (資料ダウンロード) + Contact Us (お問い合わせ)
- Bottom: link columns (ABOUT US, SERVICE, CASESTUDY, VOICE, NEWS, Contact Us, PRIVACY, TERMS, YouTube COUNTER MEDIA X) + copyright

## Computed Styles
- color: #EFECEB
- padding: 34px 0 (was when scrolled)
- background-image: url("/images/bg-assort.webp"), cover

## Text Content (verbatim)
- "SAITAMA越谷"
- Tagline: "ローカルから最先端をつくる。"
- "Turn the mainstream upside down."
- CTAs: "DOWNLOAD" / "資料ダウンロード", "Contact Us" / "お問い合わせ"
- Nav: ABOUT US, SERVICE, CASESTUDY, VOICE, NEWS
- Bottom: PRIVACY, TERMS, YouTube COUNTER MEDIA, X
- Copyright: "© COUNTER co.ltd."

## Responsive
- Desktop: 3 columns of nav links
- Mobile: stacked
