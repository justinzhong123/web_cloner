# Proposal

## Why

目前複製流程直接修改範本根目錄的 `src/` 與 `public/`。再次複製其他網站時，成品容易混在一起或互相覆蓋，也無法直接交付單一網站的完整專案。

## What Changes

- 每個目標網站產生一個 `export/<網站識別碼>/` 獨立 Next.js 專案。
- 同一網站的原始碼、靜態素材與擷取紀錄放在該專案內。
- 複製流程在建立輸出目錄時檢查命名衝突，不默默覆蓋既有成品。
- 完成後在輸出專案執行檢查，並回報該專案路徑與啟動方式。

## Capabilities

### New Capabilities

- `site-export`: 定義每個複製網站的獨立輸出目錄、內容、命名、衝突處理與驗證。

### Modified Capabilities

無。

## Impact

影響 `/clone-website` skill、README、輸出目錄規則及可能的專案產生腳本。範本根目錄仍保留為產生器；新網站的程式碼與素材寫入 `export/` 下各自的專案。
