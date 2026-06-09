#!/usr/bin/env node
// Download all counter-digital.jp assets into ./public
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const PUBLIC_DIR = join(ROOT, 'public');

const ASSETS = [
  // Brand background textures
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/bg-noise.webp', 'images/bg-noise.webp'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/bg-assort.webp', 'images/bg-assort.webp'],

  // Service section assets (desktop + sp variants)
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/p-top-service-type.webp', 'images/service-type.webp'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/p-top-service-marketing.webp', 'images/service-marketing.webp'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/p-top-service-marketing-sp.webp', 'images/service-marketing-sp.webp'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/p-top-service-creative.webp', 'images/service-creative.webp'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/p-top-service-creative-sp.webp', 'images/service-creative-sp.webp'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/p-top-service-media.webp', 'images/service-media.webp'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/p-top-service-media-sp.webp', 'images/service-media-sp.webp'],

  // Media section assets
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/p-top-media-channel-bg.svg', 'images/media-channel-bg.svg'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/p-top-media-channel-bg-sp.svg', 'images/media-channel-bg-sp.svg'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/media-miyata.webp', 'images/media-miyata.webp'],
  ['https://counter-digital.jp/wp-content/themes/counter2025/assets/img/media-mori.webp', 'images/media-mori.webp'],

  // Casestudy thumbnails (corporate website work)
  ['https://counter-digital.jp/wp-content/uploads/2026/03/05a5f6ecc700ce2836979b5d94aa196d.png', 'images/case-nichigas.png'],
  ['https://counter-digital.jp/wp-content/uploads/2025/11/ag_corp-1.png', 'images/case-ag-corp.png'],
  ['https://counter-digital.jp/wp-content/uploads/2025/11/ag_recruit.png', 'images/case-ag-recruit.png'],
  ['https://counter-digital.jp/wp-content/uploads/2025/02/thumbnail_bokan-1024x598.png', 'images/case-bokan.png'],
  ['https://counter-digital.jp/wp-content/uploads/2025/02/thumbnail_bokan.png', 'images/case-bokan-full.png'],
  ['https://counter-digital.jp/wp-content/uploads/2025/11/ryokanbook.png', 'images/case-ryokanbook.png'],
  ['https://counter-digital.jp/wp-content/uploads/2025/11/7471ef18e940a0e8f95d5223876576a8.png', 'images/case-misc-1.png'],
  ['https://counter-digital.jp/wp-content/uploads/2025/11/bb673cd0876de7eb1fd137c9e0b8d6ae.png', 'images/case-misc-2.png'],
  ['https://counter-digital.jp/wp-content/uploads/2026/01/cyand_01.png', 'images/case-cyand.png'],
  ['https://counter-digital.jp/wp-content/uploads/2026/04/ricoas_01.png', 'images/case-ricoas.png'],
  ['https://counter-digital.jp/wp-content/uploads/2024/06/technication.jpg', 'images/case-technication.jpg'],

  // Voice section testimonial avatars
  ['https://counter-digital.jp/wp-content/uploads/2024/01/hirano.png', 'images/voice-hirano.png'],
  ['https://counter-digital.jp/wp-content/uploads/2024/01/aono.png', 'images/voice-aono.png'],
  ['https://counter-digital.jp/wp-content/uploads/2024/01/sakurai.png', 'images/voice-sakurai.png'],

  // Blog article thumbnails
  ['https://counter-digital.jp/wp-content/uploads/2026/05/website-development-hearing.jpg', 'images/blog-hearing.jpg'],
  ['https://counter-digital.jp/wp-content/uploads/2026/05/website-development-term.jpg', 'images/blog-term.jpg'],
  ['https://counter-digital.jp/wp-content/uploads/2026/05/website-development-schedule.jpg', 'images/blog-schedule.jpg'],

  // Favicons + OGP
  ['https://counter-digital.jp/wp-content/uploads/2024/02/cropped-favicon_01-32x32.png', 'seo/favicon-32.png'],
  ['https://counter-digital.jp/wp-content/uploads/2024/02/cropped-favicon_01-192x192.png', 'seo/favicon-192.png'],
  ['https://counter-digital.jp/wp-content/uploads/2024/02/cropped-favicon_01-180x180.png', 'seo/apple-touch-icon.png'],
  ['https://counter-digital.jp/wp-content/uploads/2025/11/ogp.png', 'seo/ogp.png'],
];

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function download([url, rel]) {
  const out = join(PUBLIC_DIR, rel);
  if (await fileExists(out)) {
    return `· skipped (exists): ${rel}`;
  }
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (clone)' } });
    if (!res.ok) return `✗ ${res.status} ${url}`;
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    return `✓ ${rel} (${(buf.length / 1024).toFixed(1)} KB)`;
  } catch (e) {
    return `✗ ${url} — ${e.message}`;
  }
}

// Batched parallel: 4 at a time
async function batch(items, n) {
  const out = [];
  for (let i = 0; i < items.length; i += n) {
    const slice = items.slice(i, i + n);
    out.push(...await Promise.all(slice.map(download)));
  }
  return out;
}

const results = await batch(ASSETS, 4);
results.forEach(r => console.log(r));
console.log(`\nTotal: ${results.length} assets`);
