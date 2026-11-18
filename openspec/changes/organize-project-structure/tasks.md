# Tasks

## 1. Site output hierarchy

- [x] 1.1 Move reusable inspection guidance to `docs/guides/` and COUNTER research, component specs, and screenshots to `docs/sites/counter-digital.jp/`; verify the original artifact count and content are preserved.
- [x] 1.2 Update canonical clone skill paths so each hostname writes research, specs, screenshots, and animation captures beneath `docs/sites/<hostname>/`; verify no active instruction points to the old flat output paths.
- [ ] 1.3 Update `AGENTS.md` and README directory map and links; verify every maintained local link and import resolves.

## 2. Agent configuration

- [ ] 2.1 Reduce `scripts/sync-skills.mjs` to generate only the retained Codex adapter from the canonical Claude skill; run it and verify generated content matches the source.
- [ ] 2.2 Remove unsupported agent adapters, obsolete rules sync tooling, and stale support claims; verify retained agent folders have a documented owner and regeneration path.

## 3. Integration verification

- [ ] 3.1 Scan repository references for removed paths, validate the OpenSpec change strictly, and run `npm run check`; verify no stale maintained references or build failures remain and the COUNTER public asset paths are unchanged.

## Workflow follow-up

- Review the completed refactor, then archive the OpenSpec change when appropriate.
