# Proposal

## Why

The repository mixes the reusable cloning template, one COUNTER site implementation, research output, screenshots, and generated agent configurations. This makes it hard to tell which files are source, which are generated, and where a new clone should write its artifacts.

## What Changes

- Establish a documented directory map for application code, shared tooling, agent sources, and per-site research and visual output.
- Move the existing COUNTER research and screenshots into one named site workspace, then update references and the clone workflow to write each future site's output under its own workspace.
- Keep one canonical agent instruction file and one canonical clone skill; retain only the agent adapters needed for the supported workflow, with regeneration paths documented.
- Remove or consolidate unused template scaffolding only after checking references, and keep the existing COUNTER page, assets, URLs, and build behavior intact.
- **BREAKING**: research and screenshot paths used by scripts or external consumers will change to site-scoped paths.

## Capabilities

### New Capabilities

- `clone-artifact-organization`: A clone run writes traceable research, specifications, and visual references under a site-specific output hierarchy.
- `agent-configuration-maintenance`: Project agent instructions and clone workflow have clear canonical sources and reproducible adapters.

### Modified Capabilities

None.

## Impact

Affected areas include `docs/`, `.claude/skills/clone-website/`, agent adapter directories, `AGENTS.md`, sync scripts, `README.md`, and paths embedded in documentation and tooling. The Next.js page and its public asset URLs remain behaviorally equivalent.
