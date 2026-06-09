# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/desktop-section-hero.png` (top 100px)
- **Interaction model:** static (no scroll behavior — header stays transparent throughout)

## DOM Structure
- `<header class="l-header">` — fixed position, transparent bg, z-index 500, height 100px, width 100%
  - `<figure class="l-header-logo">` — absolute top-40px left-40px. Contains the COUNTER inline SVG (160×23) linking to `/`.
  - `<nav class="l-header-nav">` — absolute top-35px left-491px (centered horizontally). Pill shape, `rgba(255,255,255,0.7)` bg, padded ~20px horizontal × 8px vertical, ~458×40.5. Contains 5 links: about, service, Casestudy, Blog, News. Each link is `c-btn-txt` (14px, color #FF552B).
  - Right-side controls: "EN" pill + grid-icon menu button (MenuGridIcon, 40×40 white circle with orange grid inside).

## Computed Styles
- Header: `position: fixed; top: 0; height: 100px; z-index: 500; width: 100%`. Background **stays transparent at all scroll positions** (verified at scroll 0 and 1500).
- `.l-header-logo`: position absolute, top 40px, left 40px, color inherits white on hero, dark elsewhere — but the SVG fill is `currentColor` so we render it white on hero (overlap with orange bg).
  Actually visible logo on hero is **white** (against orange). Across the rest of the page it transitions to body color (#3A3735) since header is transparent.
- `.l-header-nav`: position absolute. Centered horizontally. backgroundColor `rgba(255, 255, 255, 0.7)`. Padding: `5px 20px`. Border radius: full pill ~25px. Display flex, gap ~16px.
- `.c-btn-txt`: color #FF552B, font-size 14px, font-weight 500, no underline. Hover: underline.
- EN pill: small white pill, 40×40, with text "EN" centered, color #3A3735 or orange.
- Menu icon: 40×40 SVG (MenuGridIcon component already in icons.tsx).

## States & Behaviors
- **No scroll-triggered changes.** Header is transparent throughout. The pill nav has its own translucent white bg for readability over any section.
- Hover on nav links: color stays orange, underline appears OR slight opacity change.
- Click on menu icon: opens a mega-menu drawer (out of scope for clone — render as a closed button).
- Click on EN: language toggle (out of scope — static button).

## Per-State Content
N/A (static header).

## Assets
- Inline `CounterLogo` from `icons.tsx`
- Inline `MenuGridIcon` from `icons.tsx`

## Text Content
- Nav: "about", "service", "Casestudy", "Blog", "News"
- "EN" text
- Aria-label for menu: "メニューを開く"

## Responsive Behavior
- **Desktop (1440px):** as above.
- **Tablet/Mobile (<1024px):** Pill nav hidden. Only logo (left) + menu button (right) visible. Confirmed in mobile screenshot.
- **Breakpoint:** ~1024px (header pill collapses to hamburger-only).
