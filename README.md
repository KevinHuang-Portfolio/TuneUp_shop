# 🎧 TuneUp Earphone E-shop

TuneUp 是一款基於 **Vue 3**、**TypeScript** 與 **Tailwind CSS v4** 打造的現代化耳機電商平台。專案整合了 **PrimeVue v4** 組件庫與 **JSON Server** 模擬後端資料，提供流暢的購物體驗。

---

## 🚀 技術棧 (Tech Stack)

- **前端框架**: Vue 3 (Composition API / `<script setup>`)
- **開發語言**: TypeScript (TS)
- **樣式系統**: 
  - Tailwind CSS v4 (高效佈局)
  - SCSS (進階樣式處理)
- **UI 組件庫**: PrimeVue v4 (搭配 Aura 主題)
- **開發環境**: Vite
- **模擬後端**: JSON Server (db.json)
- **狀態/路由**: Vue Router

---

## 📂 專案架構 (Project Structure)

```text
project-new/
├── src/
│   ├── assets/             # 圖片、圖示等靜態資源
│   ├── components/         # 可複用組件 (Navbar, Footer, Card 等)
│   ├── data/               # 資料介面與 API 串接邏輯 (api.ts)
│   ├── router/             # 路由配置 (index.ts)
│   ├── view/               # 頁面級組件 (Home, Category, ProductDetail, Cart)
│   ├── App.vue             # 根組件
│   ├── main.ts             # 入口文件
│   └── style.css           # 全域樣式 (含 Tailwind v4 引用)
├── public/                 # 公用靜態資源
├── db.json                 # JSON Server 資料庫
├── package.json            # 依賴與腳本
└── GEMINI.md               # 專案詳細規範與開發導引
```

---

## 🛠️ 開發與部署 (Getting Started)

### 1. 安裝依賴
```bash
npm install
```

### 2. 啟動開發伺服器
您可以同時啟動 Vite (前端) 與 JSON Server (後端)：
```bash
npm run dev:all
```
或者分開啟動：
- **前端**: `npm run dev` (預設為 http://localhost:5173)
- **API**: `npm run dev:api` (預設為 http://localhost:3000)

### 3. 編譯與打包
```bash
npm run build
```

---

## 🎨 開發規範

- **通用架構**: 所有頁面均包含 `AppNavbar` 與 `AppFooter`。
- **資料驅動**: 導覽列與產品列表優先採用 `db.json` 或 `api.ts` 內的資料結構。
- **樣式風格**:
  - 優先使用 **Tailwind CSS v4** 進行佈局。
  - 需要自定義動畫或複雜樣式時使用 **SCSS**。
- **UI 組件**: 使用 **PrimeVue** 提升開發效率。

---

## 📋 目前實作進度

- ✅ 基礎 UI 架構 (Navbar, Footer)
- ✅ 首頁 (HomeView) 區塊規劃
- ✅ 產品卡片多樣化設計 (General, New, Top Sales)
- ✅ 路由系統建置
- ⏳ 資料串接與 `db.json` 同步
- ⏳ 購物車功能邏輯實作
