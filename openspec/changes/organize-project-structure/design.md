# Design

## Context

See proposal.md. `src/` is a single Next.js page with section components; `public/` contains assets used by URL. COUNTER inspection notes and screenshots currently sit directly under `docs/research/` and `docs/design-references/`. `AGENTS.md` imports `docs/research/INSPECTION_GUIDE.md`. The clone skill assumes those flat paths, and sync scripts generate adapters for many platforms. `.agents/skills/` contains OpenSpec skills and is currently untracked.

## Goals / Non-Goals

**Goals:**
- Make source code, reusable guidance, per-site output, and agent adapters easy to distinguish.
- Preserve the rendered COUNTER page and public asset URLs while moving internal artifacts.
- Keep a small, reproducible agent setup centered on the agents used in this repository.

**Non-Goals:**
- Redesigning the COUNTER page, changing its content, or introducing an app domain layer without a product need.
- Moving public assets, Next.js convention files, or configuration files that tools expect at repository root.

## Decisions

1. Use `docs/guides/INSPECTION_GUIDE.md` for reusable guidance and `docs/sites/<hostname>/research/`, `docs/sites/<hostname>/specs/`, and `docs/sites/<hostname>/screenshots/` for clone outputs. Move the COUNTER files to `docs/sites/counter-digital.jp/`. This gives each site a single review location. Alternative: keep separate top-level research and screenshots trees; that would continue scattering a site's work.
2. Keep `AGENTS.md` at the root as the project instruction source. Keep `.claude/skills/clone-website/SKILL.md` as the canonical clone skill and generate `.codex/skills/clone-website/SKILL.md` via a reduced `scripts/sync-skills.mjs`. Keep `.agents/skills/` for OpenSpec, which is managed by OpenSpec rather than the clone skill. Remove adapters for platforms not in the supported set (Claude Code and Codex), along with the rules sync script if no remaining consumer needs it. Alternative: keep every adapter and label it generated; this preserves broad compatibility but retains the directory noise the user wants removed.
3. Keep `src/app`, `src/components`, `src/lib`, and `public` in their current conventional locations. Group site-specific section components only if imports and names become clearer; avoid a broad code rewrite during file organization. Alternative: move the app into a deeper `features/` hierarchy; this adds indirection to a single-page site.
4. Treat `openspec/` as the requirements and change history, separate from clone research. Update README and skill references together, including generated Codex copy. Use a path scan to catch stale references.

## Risks / Trade-offs

- [External links to existing docs paths may break] → Document the move in README and update all maintained in-repository references.
- [Removing platform adapters reduces out-of-box support] → State the supported agent set clearly and retain generic `AGENTS.md` for other agents that can read it.
- [Skill path edits can leave generated copies stale] → Regenerate the Codex adapter and compare it with the canonical source.
- [Untracked OpenSpec files may be overlooked] → Include the OpenSpec change and required skill files in the final review of repository status; do not delete them as clutter.

## Migration Plan

1. Record the baseline file inventory and verification result.
2. Move reusable guidance and COUNTER artifacts with history-preserving moves where possible.
3. Update the canonical clone skill, `AGENTS.md`, README, and scripts to the new path contract.
4. Remove unsupported generated adapters and obsolete sync tooling; regenerate retained adapters.
5. Scan references, validate OpenSpec, run lint, typecheck, and build, and compare the page's public asset paths before and after.

Rollback is a single revert of this change; no deployed data migration is involved.
