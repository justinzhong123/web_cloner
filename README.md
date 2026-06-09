# AI Website Cloner Template

<a href="https://github.com/JCodesMore/ai-website-cloner-template/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" /></a> <a href="https://github.com/JCodesMore/ai-website-cloner-template/stargazers"><img src="https://img.shields.io/github/stars/JCodesMore/ai-website-cloner-template?style=flat" alt="Stars" /></a> <a href="https://discord.gg/hrTSX5yTpB"><img src="https://img.shields.io/discord/1400896964597383279?label=discord" alt="Discord" /></a>

A reusable template for reverse-engineering any website into a clean, modern Next.js codebase using AI coding agents — **with runtime JS animation interception** so GSAP, ScrollTrigger, Lenis, and friends survive the clone.

**Recommended: [Claude Code](https://docs.anthropic.com/en/docs/claude-code) with Opus 4.7 for best results** — but works with a variety of AI coding agents.

Point it at a URL, run `/clone-website`, and your AI agent will inspect the site, extract design tokens and assets, **hook the page's animation libraries at runtime to capture every tween's target/easing/duration/trigger**, write component specs, and dispatch parallel builders to reconstruct every section.

## What Makes This Version Different

Most reverse-engineering pipelines stop at CSS. They get the colors, the spacing, the fonts — and ship a clone that feels dead because every scroll-triggered fade, parallax, and pinned section is gone. That motion lives in compiled JS bundles, not stylesheets, so static inspection can't see it.

This template intercepts the animation libraries **at runtime, before the page's own code runs**, and records every call:

- **Detects** which libraries are loaded — GSAP, ScrollTrigger, Lenis, Locomotive Scroll, Framer Motion, AOS, Swiper, Three.js
- **Hooks GSAP** via `addInitScript` and wraps `gsap.to/from/fromTo/set/timeline` and `ScrollTrigger.create` before the page boots
- **Captures `@keyframes`** from every stylesheet in one pass
- **Replays the page** (reload + full scroll) so every entrance and scroll-triggered tween fires into the interceptor
- **Serializes everything** to `docs/research/animation-libraries.json` — exact targets, `vars` (easing, duration, scrub, trigger start/end), and timestamps

When builders are dispatched, the orchestrator filters that JSON down to the calls matching each section's selectors and inlines them in the prompt — so the builder reproduces the exact `ease: "power3.out"`, the exact `start: "top 80%"`, the exact `scrub: true`, not a guess.

## Demo

[![Watch the demo](docs/design-references/comparison.png)](https://youtu.be/O669pVZ_qr0)

> Click the image above to watch the full demo on YouTube.

## Quick Start

> **Important:** Start by making your own copy with GitHub's **Use this template** button. Do not clone this template repository directly for your website project, and do not open pull requests here with your generated website.

1. **Create your own repository from this template**

   On the GitHub page for this project, click **Use this template**, then click **Create a new repository**.

   Give your new repository a name, choose whether it should be public or private, then click **Create repository**. If GitHub shows an **Include all branches** option, you can leave it off.

   This gives you your own separate project to work in, so your website changes stay in your account instead of coming back to the main template.

2. **Open your new repository on your computer**

   After GitHub creates your copy, open that new repository. Click **Code** and open or clone your new repository with your preferred coding tool.

   If you use the terminal, the command will look like this:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-NEW-REPOSITORY.git
   cd YOUR-NEW-REPOSITORY
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start your AI agent** — Claude Code recommended:
   ```bash
   claude --chrome
   ```
5. **Run the skill**:
   ```
   /clone-website <target-url1> [<target-url2> ...]
   ```
6. **Customize** (optional) — after the base clone is built, modify as needed

> Using a different agent? Open `AGENTS.md` for project instructions — most agents pick it up automatically.

## Supported Platforms

| Agent                                                         | Status                     |
| ------------------------------------------------------------- | -------------------------- |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | **Recommended** — Opus 4.7 |
| [Codex CLI](https://github.com/openai/codex)                  | Supported                  |
| [OpenCode](https://opencode.ai/)                              | Supported                  |
| [GitHub Copilot](https://github.com/features/copilot)         | Supported                  |
| [Cursor](https://cursor.com/)                                 | Supported                  |
| [Windsurf](https://codeium.com/windsurf)                      | Supported                  |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli)     | Supported                  |
| [Cline](https://github.com/cline/cline)                       | Supported                  |
| [Roo Code](https://github.com/RooCodeInc/Roo-Code)            | Supported                  |
| [Continue](https://continue.dev/)                             | Supported                  |
| [Amazon Q](https://aws.amazon.com/q/developer/)               | Supported                  |
| [Augment Code](https://www.augmentcode.com/)                  | Supported                  |
| [Aider](https://aider.chat/)                                  | Supported                  |

## Prerequisites

- [Node.js](https://nodejs.org/) 24+
- A browser-automation MCP — **Chrome MCP recommended** (required for the runtime animation hook). Playwright MCP, Browserbase, or Puppeteer MCP also work as long as they expose an `addInitScript`-equivalent that runs before page scripts.
- An AI coding agent (see [Supported Platforms](#supported-platforms))

## Tech Stack

- **Next.js 16** — App Router, React 19, TypeScript strict
- **shadcn/ui** — Radix primitives + Tailwind CSS v4
- **Tailwind CSS v4** — oklch design tokens
- **Lucide React** — default icons (replaced by extracted SVGs during cloning)

## How It Works

The `/clone-website` skill runs a multi-phase pipeline:

1. **Reconnaissance** — screenshots, design token extraction, interaction sweep (scroll, click, hover, responsive)
2. **JS animation interception** — fingerprints loaded libraries, dumps every `@keyframes` rule, then injects a GSAP/ScrollTrigger hook with `addInitScript` so a single reload + full scroll captures every tween's `target`, `vars`, and timestamp into `docs/research/animation-libraries.json`
3. **Foundation** — updates fonts, colors, globals, downloads all assets
4. **Component Specs** — writes detailed spec files (`docs/research/components/`) with exact computed CSS values, states, behaviors, and content
5. **Parallel Build** — dispatches builder agents in git worktrees, one per section/component, with each section's matching animation calls inlined into the prompt
6. **Assembly & QA** — merges worktrees, wires up the page, runs visual diff against the original

Each builder agent receives the full component specification inline — exact `getComputedStyle()` values, interaction models, multi-state content, responsive breakpoints, asset paths, **and the precise GSAP/ScrollTrigger calls that target its DOM**. No guessing.

### Animation Capture in Detail

The interceptor lives in Phase 1 of `.claude/skills/clone-website/SKILL.md`. Three coordinated steps:

```javascript
// 1. Fingerprint loaded libraries
JSON.stringify({
  gsap: window.gsap ? { version: window.gsap.version } : false,
  scrollTrigger: !!(window.ScrollTrigger || window.gsap?.ScrollTrigger),
  lenis: !!(window.Lenis || window.lenis),
  locomotiveScroll: !!(window.LocomotiveScroll || window.locomotive),
  framerMotion: !!document.querySelector('[data-framer-motion],[data-projection-id]'),
  aos: !!(window.AOS || document.querySelector('[data-aos]')),
  swiper: !!(window.Swiper || document.querySelector('.swiper')),
  three: !!(window.THREE || document.querySelector('canvas')),
});

// 2. Inject BEFORE the page boots (addInitScript) — wrap gsap.to/from/fromTo/set/timeline
//    and ScrollTrigger.create so every call is recorded into window.__gsapCalls.

// 3. Reload, scroll the full page, then read back window.__gsapCalls.
```

The result is a structured JSON record like:

```json
{
  "detected": { "gsap": { "version": "3.12.5" }, "scrollTrigger": true },
  "cssKeyframes": [
    { "name": "fadeUp", "keyframes": [{ "key": "0%", "styles": "opacity: 0; transform: translateY(20px)" }] }
  ],
  "calls": [
    { "method": "to", "target": ".hero-title", "vars": { "y": 0, "opacity": 1, "duration": 1, "ease": "power3.out" } },
    { "method": "create", "target": ".case-list", "vars": { "trigger": ".case-list", "start": "top 80%", "scrub": true } }
  ]
}
```

If no JS animation library is detected, the file is still written with `detected` flags all `false` and an empty `calls` array — downstream phases check this file unconditionally.

## Use Cases

- **Platform migration** — rebuild a site you own from WordPress/Webflow/Squarespace into a modern Next.js codebase, **without losing the GSAP timeline that took weeks to tune**
- **Lost source code** — your site is live but the repo is gone, the developer left, or the stack is legacy. Get the code back in a modern format, animations included
- **Learning** — deconstruct how production sites achieve specific scroll-driven layouts, pinned sections, and parallax effects by working with real code and a captured animation log

## Not Intended For

- **Phishing or impersonation** — this project must not be used for deceptive purposes, impersonation, or any activity that breaks the law.
- **Passing off someone's design as your own** — logos, brand assets, and original copy belong to their owners.
- **Violating terms of service** — some sites explicitly prohibit scraping or reproduction. Check first.

## Project Structure

```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons
  lib/utils.ts      # cn() utility
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target
  videos/           # Downloaded videos from target
  seo/              # Favicons, OG images
docs/
  research/                    # Extraction output & component specs
    animation-libraries.json   # Runtime-captured GSAP/ScrollTrigger calls + @keyframes
    BEHAVIORS.md               # Interaction sweep findings
    PAGE_TOPOLOGY.md           # Section map & interaction models
    components/                # Per-component spec files
  design-references/           # Screenshots
scripts/
  sync-agent-rules.sh  # Regenerate agent instruction files
  sync-skills.mjs      # Regenerate /clone-website for all platforms
AGENTS.md           # Agent instructions (single source of truth)
CLAUDE.md           # Claude Code config (imports AGENTS.md)
GEMINI.md           # Gemini CLI config (imports AGENTS.md)
```

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint check
npm run typecheck # TypeScript check
npm run check  # Run lint + typecheck + build
```

### If using docker

```bash
docker compose up app --build # build and run the app
docker compose up dev --build # run the app in dev mode on port 3001
```

## Updating for Other Platforms

Two source-of-truth files power all platform support. Edit the source, then run the sync script:

| What                   | Source of truth                         | Sync command                       |
| ---------------------- | --------------------------------------- | ---------------------------------- |
| Project instructions   | `AGENTS.md`                             | `bash scripts/sync-agent-rules.sh` |
| `/clone-website` skill | `.claude/skills/clone-website/SKILL.md` | `node scripts/sync-skills.mjs`     |

Each script regenerates the platform-specific copies automatically. Agents that read the source files natively need no regeneration.


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=JCodesMore/ai-website-cloner-template&type=Date)](https://star-history.com/#JCodesMore/ai-website-cloner-template&Date)

## License

MIT
