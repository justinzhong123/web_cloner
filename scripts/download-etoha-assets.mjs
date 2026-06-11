// Downloads all etoha-lab.co.jp assets into public/assets/.
// Run with: node scripts/download-etoha-assets.mjs

import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public", "assets");

const ASSETS = [
  // Site assets (the /assets/image/ tree)
  "https://etoha-lab.co.jp/assets/image/icon-hana_ao_saku.gif",
  "https://etoha-lab.co.jp/assets/image/icon-hana_saku.gif",
  "https://etoha-lab.co.jp/assets/image/global_nav-character.webp",
  "https://etoha-lab.co.jp/assets/image/global_nav-lines.webp",
  "https://etoha-lab.co.jp/assets/image/global_nav-obj_01.webp",
  "https://etoha-lab.co.jp/assets/image/global_nav-obj_02.webp",
  "https://etoha-lab.co.jp/assets/image/header-contact_texture.webp",
  "https://etoha-lab.co.jp/assets/image/arrow-bg.webp",
  "https://etoha-lab.co.jp/assets/image/btn-bg.webp",
  "https://etoha-lab.co.jp/assets/image/contact_sec-character.webp",
  // Index-specific images
  "https://etoha-lab.co.jp/assets/image/index/_service-character.gif",
  "https://etoha-lab.co.jp/assets/image/index/service-character.webp",
  "https://etoha-lab.co.jp/assets/image/index/service-image.webp",
  "https://etoha-lab.co.jp/assets/image/index/icon-fukidashi.gif",
  "https://etoha-lab.co.jp/assets/image/index/new-badge.webp",
  "https://etoha-lab.co.jp/assets/image/index/blog-character.webp",
  // Hero
  "https://etoha-lab.co.jp/assets/image/index/hero_bg-main_bg.webp",
  "https://etoha-lab.co.jp/assets/image/index/hero_bg-main_texture.webp",
  "https://etoha-lab.co.jp/assets/image/index/hero_bg-character.webp",
  "https://etoha-lab.co.jp/assets/image/index/hero-lines_balloon.webp",
  "https://etoha-lab.co.jp/assets/image/index/hero-lines_text.webp",
  "https://etoha-lab.co.jp/assets/image/index/hero-cta_balloon.webp",
  // Hero background tiles
  ...Array.from({ length: 11 }, (_, i) =>
    `https://etoha-lab.co.jp/assets/image/index/hero_bg-image_${String(i + 1).padStart(2, "0")}.webp`,
  ),
  // Member
  "https://etoha-lab.co.jp/assets/image/index/member-character.webp",
  "https://etoha-lab.co.jp/assets/image/index/member-balloon.webp",
  "https://etoha-lab.co.jp/assets/image/index/member-osuga.webp",
  "https://etoha-lab.co.jp/assets/image/index/member-imase.webp",
  "https://etoha-lab.co.jp/assets/image/index/member-kurosawa.webp",
  "https://etoha-lab.co.jp/assets/image/index/member-asaka.webp",
  "https://etoha-lab.co.jp/assets/image/index/member-shuri.webp",
  "https://etoha-lab.co.jp/assets/image/index/member-fuka.webp",
  // SEO
  "https://etoha-lab.co.jp/favicon.ico",
  "https://etoha-lab.co.jp/favicon.svg",
  "https://etoha-lab.co.jp/apple-touch-icon.png",
  "https://etoha-lab.co.jp/ogp.png",
];

// WordPress-uploaded work/blog images. Stored under public/assets/uploads/<basename>.
const WP_UPLOADS = [
  ["https://etoha-lab.co.jp/core-wp/wp-content/uploads/2026/05/サムネイル-1.png", "work-unisia.png"],
  ["https://etoha-lab.co.jp/core-wp/wp-content/uploads/2026/05/サムネイル-2.png", "work-pickup-2.png"],
  ["https://etoha-lab.co.jp/core-wp/wp-content/uploads/2026/05/サムネイル-4.png", "work-pickup-4.png"],
  ["https://etoha-lab.co.jp/core-wp/wp-content/uploads/2026/05/サムネイル-6.png", "work-pickup-6.png"],
  ["https://etoha-lab.co.jp/core-wp/wp-content/uploads/2026/05/スクリーンショット-2025-10-09-16.36.02-1-1.png", "work-screenshot.png"],
  ["https://etoha-lab.co.jp/core-wp/wp-content/uploads/2026/05/スクリーンショット-2026-05-27-11.57.12-1.jpg", "work-unisia-recruit.jpg"],
  ["https://etoha-lab.co.jp/core-wp/wp-content/uploads/2026/06/サムネイル-1.png", "blog-namechange.png"],
];

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function fetchOne(url, outPath) {
  if (await exists(outPath)) {
    return { url, outPath, status: "cached" };
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, buf);
  return { url, outPath, status: "downloaded", bytes: buf.length };
}

async function runBatched(items, concurrency = 4) {
  const results = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (i < items.length) {
        const { url, outPath, label } = items[i++];
        try {
          const r = await fetchOne(url, outPath);
          process.stdout.write(`${r.status === "cached" ? "·" : "✓"} ${label}\n`);
          results.push(r);
        } catch (err) {
          process.stdout.write(`✗ ${label}  ${err.message}\n`);
          results.push({ url, outPath, error: err.message });
        }
      }
    }),
  );
  return results;
}

function urlToPath(url) {
  // /assets/image/foo.webp → public/assets/image/foo.webp (drop /assets prefix → keep image/...)
  if (url.includes("/assets/image/")) {
    const rel = url.split("/assets/image/")[1];
    return { outPath: join(PUBLIC, "image", rel), label: `image/${rel}` };
  }
  if (url.endsWith("favicon.ico") || url.endsWith("favicon.svg") || url.endsWith("apple-touch-icon.png") || url.endsWith("ogp.png")) {
    const base = url.split("/").pop();
    return { outPath: join(PUBLIC, "seo", base), label: `seo/${base}` };
  }
  const base = url.split("/").pop();
  return { outPath: join(PUBLIC, base), label: base };
}

const jobs = [
  ...ASSETS.map(url => ({ url, ...urlToPath(url) })),
  ...WP_UPLOADS.map(([url, basename]) => ({ url, outPath: join(PUBLIC, "uploads", basename), label: `uploads/${basename}` })),
];

console.log(`Downloading ${jobs.length} assets to ${PUBLIC}/`);
const results = await runBatched(jobs, 4);
const downloaded = results.filter(r => r.status === "downloaded").length;
const cached = results.filter(r => r.status === "cached").length;
const failed = results.filter(r => r.error).length;
console.log(`\nDone. ${downloaded} downloaded, ${cached} already cached, ${failed} failed.`);
if (failed > 0) process.exit(1);
