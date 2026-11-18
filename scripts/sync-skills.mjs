#!/usr/bin/env node

/**
 * Copy the canonical Claude clone workflow to the Codex adapter.
 * AGENTS.md is the project instruction source; CLAUDE.md imports it directly.
 * OpenSpec owns .agents/skills, so this script does not generate those skills.
 *
 * Run after editing .claude/skills/clone-website/SKILL.md:
 *   node scripts/sync-skills.mjs
 */

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, '.claude', 'skills', 'clone-website', 'SKILL.md');
const target = join(root, '.codex', 'skills', 'clone-website', 'SKILL.md');

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
console.log('Copied .claude/skills/clone-website/SKILL.md to .codex/skills/clone-website/SKILL.md');
