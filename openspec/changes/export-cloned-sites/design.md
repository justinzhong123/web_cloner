# Design

## Context

見 [proposal.md](proposal.md)。目前 `/clone-website` 以範本根目錄作為工作區，研究資料收在 `docs/sites/<hostname>/`。這個結構無法讓多個成品各自成為完整專案。專案使用 Next.js 16；實作前須先閱讀 `node_modules/next/dist/docs/` 中相關指南。

## Goals / Non-Goals

**Goals:**

- 複製流程從一開始就在指定輸出專案內工作，避免完成後再搬移造成路徑錯誤。
- 每個成品可單獨執行 `npm install`、`npm run check` 和 `npm run dev`。
- 保留可追溯的擷取資料，並讓多個成品彼此隔離。

**Non-Goals:**

- 自動部署或建立遠端 Git 儲存庫。
- 將既有根目錄中的網站自動遷移到 `export/`。

## Decisions

### 1. 每個網站是一個完整 Next.js 專案

目錄範例：

```text
export/
  example.com/
    package.json
    package-lock.json
    next.config.ts
    tsconfig.json
    src/
    public/
    docs/sites/example.com/
    README.md
```

以範本的必要設定與基礎程式碼建立輸出專案，排除 `.git/`、`node_modules/`、`.next/`、既有網站的擷取內容與其他 `export/`。複製 agent 的建置與驗證工作目錄改為該輸出專案。相較於最後才從根目錄搬移，這能讓素材路徑與專案設定在整個流程中保持一致。

### 2. 以正規化網址產生識別碼

根路徑使用小寫 hostname，例如 `example.com`；非根路徑附加清理後的 pathname，例如 `example.com--products--item`。忽略 fragment；query 參數若影響頁面身分，以穩定短雜湊附加，避免把敏感或不安全字元直接放入路徑。名稱限制在單一目錄層級，防止路徑跳脫。完整來源網址記錄在輸出專案的 README 或 manifest。

### 3. 已有目錄預設停止寫入

建立專案前先檢查目標路徑。已有內容時，agent 回報衝突，僅在使用者明確指定更新該成品時繼續；如需保留舊版，可用帶序號的新目錄。此規則避免另一輪複製覆蓋既有成果。

### 4. 擷取資料與驗證跟隨成品

截圖、拓樸、互動紀錄、動畫紀錄與元件規格寫入輸出專案的 `docs/sites/<hostname>/`，分別放在 `research/`、`specs/`、`screenshots/`。在輸出專案執行 `npm run check`，並檢查桌面與手機畫面。根目錄只保留範本及規格，不承載新成品。

## Risks / Trade-offs

- [每個成品複製設定與鎖檔，佔用更多空間] → 排除建置快取與相依套件目錄，讓使用者在成品目錄自行安裝。
- [同網域不同網址可能產生命名碰撞] → 路徑加入名稱，必要時加入 query 雜湊，建立前仍檢查衝突。
- [既有 skill 的相對路徑指向範本根目錄] → 將 skill 中的工作目錄與成品路徑統一改為輸出專案，並以多網址情境驗證。

## Migration Plan

1. 新增輸出專案初始化流程與命名規則。
2. 更新 `/clone-website` skill，使所有寫入與驗證對準輸出專案。
3. 更新 README 與 `.gitignore` 的成品追蹤策略；同步各平台 skill 副本。
4. 用兩個目標網址驗證隔離與獨立建置。既有根目錄網站暫時保留；如需遷移，另行執行一次性搬移。

回退時可恢復原 skill 流程；已產生的 `export/` 成品不需刪除。
