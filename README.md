# 🎧 耳機電商專案規範 (TuneUp Earphone E-shop)

## 0. 總架構（Web Frame）
```
TuneUp_shop/
├── src/                 # 源代碼
│   ├── assets/
│   │   ├── vue.svg
│   │   ├── banner.svg
│   │   ├── logo.svg
│   │   └── product_card/
│   ├── components
│   ├── App.vue
│   ├── main.ts                    
│   ├── style.css
├── index.html
```
## 1. 頁面通用架構 (Global Layout)
- **所有頁面** 必須包含 `Navbar` (導覽列) 與 `Footer` (頁尾)。
- 狀態管理：登入按鈕預設狀態為「尚未登入」。

## 2. 導覽列資料結構 (Navbar Data)
- **Logo**: 連結至首頁。
- **功能選單**: 採「資料驅動」模式，包含以下項目：
  1. 首頁 (Home)
  2. 入耳式 (In-ear)
  3. 耳塞式 (Earbuds)
  4. 耳罩式 (Over-ear)
  5. 其他耳機 (Others)
- **功能組件**: 搜尋 Bar、登入按鈕。

## 3. 首頁區塊規劃 (HomeView Sections)
- **主要編輯區 (`src/views/HomeView.vue`)**:
  - 區塊 A：優惠折扣 (Discounts)
  - 區塊 B：售出最多 (Best Sellers)
  - 區塊 C：新品上市 (New Arrivals)

## 4. 頁尾結構 (Footer)
- **連結區**: 常見問題 | 配送與退貨 | 售後與維修 | 聯絡我們
- **社群媒體**: FB、IG 圖示連結。

## 5. 開發技術要求 (Technical Requirements)
- **前端框架**: Vue 3 (Composition API / `<script setup>`)
- **開發語言**: TypeScript (TS)
- **樣式系統**: Tailwind CSS v4 + SCSS
- **UI 組件庫**: PrimeVue (搭配 Aura 主題)
- **開發環境**: Vite
- **專案路徑**: `C:\dev\project-new` (執行指令前務必先 `cd`)