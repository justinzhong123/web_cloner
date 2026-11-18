#!/usr/bin/env node

/**
 * Initialize an export project for a cloned website.
 * Creates a complete Next.js project structure in export/<site-id>/
 * with all necessary configuration files copied from the template.
 */

import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * @typedef {Object} ExportProjectOptions
 * @property {string} siteId
 * @property {string} sourceUrl
 * @property {boolean} [force]
 */

function validateUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`Invalid URL: "${url}". Please provide a valid http(s) URL.`);
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error(`Invalid URL protocol: "${parsed.protocol}". Only http: and https: are supported.`);
  }
  if (!parsed.hostname) {
    throw new Error(`Invalid URL: "${url}". Missing hostname.`);
  }
  return parsed;
}

function normalizeUrlToSiteId(url) {
  const parsed = validateUrl(url);
  const hostname = parsed.hostname.toLowerCase().replace(/^www\./, '');
  let pathPart = parsed.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  
  // Replace non-alphanumeric chars with dash, collapse multiple dashes
  pathPart = pathPart
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
    .slice(0, 50);
  
  // If there are query params that affect page identity, add a short hash
  // This applies even for root paths to avoid collision between example.com and example.com?query=1
  if (parsed.search) {
    const hash = hashString(parsed.search).slice(0, 8);
    if (!pathPart || pathPart === '/') {
      return `${hostname}--${hash}`;
    }
    return `${hostname}--${pathPart}--${hash}`;
  }
  
  if (!pathPart || pathPart === '/') {
    return hostname;
  }
  
  return `${hostname}--${pathPart}`;
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

function getCleanGlobalsCss() {
  // Return a clean, generic globals.css without any site-specific design tokens
  return `@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "swiper/css";
@import "swiper/css/effect-fade";
@import "swiper/css/thumbs";
@import "swiper/css/navigation";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans, system-ui, sans-serif);
    font-size: 16px;
    line-height: 1.7;
  }
}

/* Lenis horizontal smoothness assist */
html.lenis,
html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}
.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
`;
}

function getCleanIconsTsx() {
  return `// Extracted SVG icons will be added here during cloning
// This file is intentionally empty in the clean template

export function Icon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return <svg className={className} {...props} />;
}
`;
}

async function initExportProject(options) {
  const { siteId, sourceUrl, force = false } = options;
  const hostname = validateUrl(sourceUrl).hostname.toLowerCase();
  const exportDir = join(ROOT, 'export', siteId);
  
  // Check for existing directory
  if (existsSync(exportDir) && !force) {
    throw new Error(
      `Export directory already exists: export/${siteId}\n` +
      `Use --force to overwrite or choose a different site ID.`
    );
  }
  
  // Remove existing if force
  if (existsSync(exportDir) && force) {
    rmSync(exportDir, { recursive: true, force: true });
  }
  
  // Create directory structure
  const dirs = [
    'src/app',
    'src/components/ui',
    'src/lib',
    'src/types',
    'src/hooks',
    'public/images',
    'public/videos',
    'public/seo',
    `docs/sites/${hostname}/research`,
    `docs/sites/${hostname}/specs`,
    `docs/sites/${hostname}/screenshots`,
    'scripts',
  ];
  
  for (const dir of dirs) {
    mkdirSync(join(exportDir, dir), { recursive: true });
  }
  
  // Files to copy from template root (only if they exist)
  const filesToCopy = [
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'next.config.ts',
    'postcss.config.mjs',
    'eslint.config.mjs',
    'components.json',
    'src/lib/utils.ts',
    'src/app/layout.tsx',
    'src/app/page.tsx',
    'src/components/ui/button.tsx',
  ];
  
  // Copy package.json and modify name
  const pkgJson = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
  pkgJson.name = `cloned-${siteId.replace(/[^a-z0-9]/gi, '-')}`;
  pkgJson.private = true;
  writeFileSync(join(exportDir, 'package.json'), JSON.stringify(pkgJson, null, 2));
  
  // Copy package-lock.json
  if (existsSync(join(ROOT, 'package-lock.json'))) {
    cpSync(join(ROOT, 'package-lock.json'), join(exportDir, 'package-lock.json'));
  }
  
  // Copy other config files (skip package.json and package-lock.json)
  for (const file of filesToCopy.slice(2)) {
    const src = join(ROOT, file);
    const dest = join(exportDir, file);
    if (existsSync(src)) {
      cpSync(src, dest, { recursive: true });
    }
  }
  
  // Write clean globals.css (without Etoha-specific design tokens)
  writeFileSync(join(exportDir, 'src/app/globals.css'), getCleanGlobalsCss());
  
  // Write clean icons.tsx (empty template)
  writeFileSync(join(exportDir, 'src/components/icons.tsx'), getCleanIconsTsx());
  
  // Create site-specific README
  const readmeContent = `# Cloned Website: ${siteId}

This is an independent Next.js project cloned from: **${sourceUrl}**

## Getting Started

\`\`\`bash
cd export/${siteId}
npm install
npm run dev
\`\`\`

## Commands

- \`npm run dev\` — Start development server
- \`npm run build\` — Production build
- \`npm run lint\` — ESLint check
- \`npm run typecheck\` — TypeScript check
- \`npm run check\` — Run lint + typecheck + build

## Project Structure

\`\`\`
export/${siteId}/
├── src/
│   ├── app/              # Next.js routes
│   ├── components/       # React components
│   │   ├── ui/           # shadcn/ui primitives
│   │   └── icons.tsx     # Extracted SVG icons
│   ├── lib/utils.ts      # cn() utility
│   ├── types/            # TypeScript interfaces
│   └── hooks/            # Custom React hooks
├── public/
│   ├── images/           # Downloaded images
│   ├── videos/           # Downloaded videos
│   └── seo/              # Favicons, OG images
├── docs/
│   └── sites/${hostname}/
│       ├── research/     # Findings and animation captures
│       ├── specs/        # Per-component specifications
│       └── screenshots/  # Visual references
└── scripts/
\`\`\`

## Notes

- This project is self-contained and does not depend on the template root.
- All extraction artifacts (specs, screenshots, animation logs) are in \`docs/\`.
- To deploy, run \`npm run build\` and deploy the \`.next/\` output or use Vercel.
`;
  
  writeFileSync(join(exportDir, 'README.md'), readmeContent);
  
  // Create export project .gitignore
  const gitignoreContent = `# Dependencies
node_modules/
.pnp
.pnp.js

# Build
.next/
out/
build/
dist/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# TypeScript
*.tsbuildinfo
next-env.d.ts

# Vercel
.vercel

# Browser MCP debug logs
.playwright-mcp/
`;
  
  writeFileSync(join(exportDir, '.gitignore'), gitignoreContent);
  
  // Create a simple manifest file
  const manifest = {
    siteId,
    sourceUrl,
    createdAt: new Date().toISOString(),
    templateVersion: '0.3.1',
  };
  
  writeFileSync(join(exportDir, 'export-manifest.json'), JSON.stringify(manifest, null, 2));
  
  return exportDir;
}

// CLI entry point
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/init-export-project.mjs <url> [--force]');
  process.exit(1);
}

const url = args[0];
const force = args.includes('--force');

let siteId;
try {
  siteId = normalizeUrlToSiteId(url);
} catch (error) {
  console.error(`✗ Error: ${error.message}`);
  process.exit(1);
}

try {
  const exportDir = await initExportProject({ siteId, sourceUrl: url, force });
  console.log(`✓ Export project created at: ${exportDir}`);
  console.log(`  Site ID: ${siteId}`);
  console.log(`  Source URL: ${url}`);
  console.log(`\nTo start developing:`);
  console.log(`  cd ${exportDir}`);
  console.log(`  npm install`);
  console.log(`  npm run dev`);
} catch (error) {
  console.error(`✗ Error: ${error.message}`);
  process.exit(1);
}
