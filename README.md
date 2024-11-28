# 寶寶成長指南 (Baby Development Guide)

這是一個專為新手父母設計的寶寶成長指南網站，提供全方位的育兒資訊和建議。

## 功能特點

- 📈 **發展里程碑追蹤**：按月齡查看寶寶發展指標
- 🎯 **發展輔助指南**：適齡玩具建議和發展測試方法
- 🍼 **副食品指南**：分階段的副食品添加建議
- 👨‍👩‍👦 **親子關係指導**：建立健康親子關係的實用建議
- 🏥 **健康照護指南**：基本健康管理和緊急處理方法
- 🏠 **居家安全評估**：居家安全建議和防護措施

## 技術棧

- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- Vite

## 開始使用

### 系統要求

- Node.js 16.0 或更高版本
- npm 7.0 或更高版本

### 安裝步驟

1. 克隆專案

```bash
git clone https://github.com/xdite/baby-develop-guide.git
cd baby-development-guide
```

2. 安裝依賴

```bash
npm install
```

3. 啟動開發服務器

```bash
npm run dev
```

4. 打開瀏覽器訪問 `http://localhost:5173`

### 建置專案

```bash
npm run build
```

## 專案結構

```
src/
├── components/     # UI 組件
│   ├── DevelopmentAids.tsx    # 發展輔助指南組件
│   ├── FoodGuideCard.tsx     # 副食品指南卡片組件
│   ├── GuideCard.tsx         # 通用指南卡片組件
│   ├── MilestoneCard.tsx     # 里程碑卡片組件
│   ├── Navbar.tsx            # 導航欄組件
│   └── ui/                   # UI 基礎組件
├── data/          # 靜態資料
│   ├── developmentGuides.ts  # 發展輔助指南數據
│   ├── foodGuides.ts         # 副食品指南數據
│   ├── healthcareGuides.ts   # 健康照護指南數據
│   ├── homeSafetyGuides.ts   # 居家安全指南數據
│   ├── milestones.ts         # 發展里程碑數據
│   └── parentChildGuides.ts  # 親子關係指南數據
├── pages/         # 頁面組件
│   ├── AidsPage.tsx          # 發展輔助頁面
│   ├── FoodGuidePage.tsx     # 副食品指南頁面
│   ├── HealthcarePage.tsx    # 健康照護頁面
│   ├── HomeSafetyPage.tsx    # 居家安全頁面
│   ├── MilestonesPage.tsx    # 里程碑頁面
│   └── ParentChildPage.tsx   # 親子關係頁面
├── App.tsx        # 主應用組件
└── main.tsx       # 應用入口

```

## 功能說明

### 發展里程碑追蹤
- 按月齡（0-2個月、3-4個月、5-6個月）查看寶寶在各個發展領域的指標
- 包含視覺、聽覺、動作、認知和社交等多個面向

### 發展輔助指南
- 提供適齡玩具建議
- 發展測試方法
- 安全注意事項

### 副食品指南
- 分為準備階段、進階階段和成熟階段
- 提供食材選擇、製作方法和餵食技巧
- 包含注意事項和安全提醒

### 親子關係指導
- 安全依附建立方法
- 互動活動建議
- 溝通技巧指導

### 健康照護指南
- 基本健康管理
- 日常護理方法
- 緊急狀況處理

### 居家安全評估
- 空間安全建議
- 成長階段防護措施
- 意外預防指南

## 貢獻指南

1. Fork 本專案
2. 創建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 版本歷史

- 1.0.0 (2024-01)
  - 初始版本發布
  - 實現基本功能架構
  - 完成六大主要功能模塊

## 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件

## 聯絡方式

如有任何問題或建議，歡迎：
- 提出 Issue
- 發送 Pull Request
- 聯繫專案維護者

## 致謝

- 感謝所有為本專案做出貢獻的開發者
- 特別感謝提供專業育兒建議的兒科醫生和育兒專家
- 感謝所有使用本網站並提供寶貴意見的家長們