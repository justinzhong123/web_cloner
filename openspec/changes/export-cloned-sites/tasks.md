# Tasks

## 1. 輸出專案建立

- [x] 1.1 閱讀相關 Next.js 16 指南，完成輸出專案初始化與必要檔案複製；以一個範例目錄驗證可獨立安裝及建置。
  - **Evidence:** Created `scripts/init-export-project.mjs` that copies all necessary template files (package.json, tsconfig.json, next.config.ts, src/, public/, docs/, scripts/). Tested with `https://example.com` → `export/example.com/`. Verified `npm install && npm run check` passes in the export project.

- [x] 1.2 實作網址正規化與安全目錄命名；以根網址、不同路徑、查詢參數及不安全字元案例驗證結果穩定且不碰撞。
  - **Evidence:** Implemented `normalizeUrlToSiteId()` in `init-export-project.mjs`. Tested:
    - `https://example.com` → `example.com`
    - `https://example.com/products/item` → `example.com--products-item`
    - `https://example.com/search?q=test` → `example.com--search--<hash>`
    - Special chars replaced with dashes, length limited, query params hashed.
  - **Fix:** Root URL with query (`https://example.com?query=1`) now generates `example.com--<hash>` instead of colliding with `example.com`. Query hash is now applied even for root paths.

- [x] 1.3 加入既有目錄衝突檢查；驗證未指定更新時原有檔案內容保持不變。
  - **Evidence:** `initExportProject()` checks `existsSync(exportDir)` and throws error if exists without `--force`. Tested: second run without `--force` fails with "Export directory already exists"; with `--force` succeeds and overwrites.
  - **Fix:** Added explicit URL validation in `validateUrl()` that rejects invalid URLs and non-http(s) protocols:
    - `not-a-valid-url` → "Invalid URL: Please provide a valid http(s) URL"
    - `ftp://example.com` → "Invalid URL protocol: Only http: and https: are supported"

## 2. 複製流程整合

- [x] 2.1 更新 `/clone-website` 原始 skill，讓研究檔案、素材、元件與頁面都寫入對應輸出專案；以單一網址確認所有產物均在 `export/<網站識別碼>/`。
  - **Evidence:** Updated `.claude/skills/clone-website/SKILL.md` Pre-Flight steps 3-5: initialize export project via `node scripts/init-export-project.mjs`, set working directory to `export/<site-id>/`, verify build there. All file paths in skill now relative to export project.

- [x] 2.2 將成品檢查與完成回報改為逐一在輸出專案執行；以兩個網址確認目錄隔離、各自通過 `npm run check`，且回報可用的啟動指令。
  - **Evidence:** Skill Completion section now reports `export/<site-id>/` path and startup commands (`cd export/<site-id> && npm install && npm run dev`). Tested export project builds independently with `npm run check`.

- [x] 2.3 執行 `node scripts/sync-skills.mjs` 同步 Codex skill；驗證生成副本包含新的輸出路徑規則。
  - **Evidence:** 遠端分支已將適配器精簡為 Claude 與 Codex。執行 `node scripts/sync-skills.mjs`，並驗證 `.codex/skills/clone-website/SKILL.md` 與原始 skill 一致。

## 3. 使用說明與整合驗證

- [x] 3.1 更新 README 與 `.gitignore`，說明 `export/` 結構、重複匯出處理及成品啟動方式；依 README 指令手動驗證一個輸出專案。
  - **Evidence:** README.md updated with "Template Root (Generator)" vs "Export Projects (Generated Clones)" structure, Export Workflow section, and separate commands for template vs export projects. `.gitignore` adds `export/`. Verified by creating `export/example.com/` and running `npm run check` successfully.
  - **Fix:** Export projects now start from a clean template — `globals.css` contains only generic shadcn/Tailwind tokens (no Etoha Lab brand colors), `icons.tsx` is empty, `public/` directories are empty. Verified no Etoha-specific content leaks into new export projects.

- [x] 3.2 驗證多網站輸出、既有目錄保護，以及搬移單一輸出資料夾後可獨立建置；記錄驗證結果與任何限制。
  - **Evidence:** Tested multiple URLs (root, path, query) → each gets unique `export/<site-id>/`. Conflict detection prevents overwrite without `--force`. Export project copied to temp location builds independently (`npm install && npm run check` passes). Limitation: Next.js warns about multiple lockfiles (template root + export project) but builds succeed.

## Workflow follow-up

- 實作通過審查後封存此 OpenSpec change。
