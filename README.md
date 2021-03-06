## TPBL（Taiwan Professional Baseball League, 台灣職棒官網）
![TPBL-homepage](https://i.imgur.com/m2pi2Z5.png)
新版的台灣職業棒球官方網站，在這裡各位棒球迷可以迅速掌握台灣職棒的最新消息，每場比賽的即時戰況、球隊排名，以及選手各項成績的排行，一起來看看球吧！

> 網站連結：https://ai86109.github.io/TPBL-Frontend/#/

> 產品故事：https://github.com/Lidemy/mentor-program-4th-ai86109/pull/22/files


## 產品簡介
- 訪客可使用的功能：
  - 可以看到各年度球隊戰績（包括上下半季、整季）
  - 可以看到球員/球隊數據統計（單項數據排行）
  - 可以觀看新聞、賽程、單場比賽之比賽數據（未來將以真實數據串接）
  - 可以切換中英文，方便不同語言的使用者查詢
  - 提供不同螢幕大小的裝置適合的瀏覽畫面

## 使用技術
- Front-End Frameworks
  - React 
- Third-Party Tool
  - React Router
  - React-i18next
- Back-End Frameworks
  - Express
  - Sequelize
- Heroku
  - ClearDB MySQL
- Web Scraper
  - Cheerio

## 專案架構
![page component](https://i.imgur.com/YHkFI32.jpg)

## 專案 Demo
### **・網頁動線**
![website traffic flow](https://github.com/ai86109/TPBL-Frontend/blob/main/trafficFlow.gif)

### **・戰績查詢(Standings)**
![standings](https://github.com/ai86109/TPBL-Frontend/blob/main/standings.gif)

### **・數據查詢(Stats)**
![stats](https://github.com/ai86109/TPBL-Frontend/blob/main/stats.gif)

### **・網頁 RWD**
![RWD](https://github.com/ai86109/TPBL-Frontend/blob/main/rwd.gif)

### **・網頁語言切換**
![i18n](https://github.com/ai86109/TPBL-Frontend/blob/main/I18n.gif)

## 專案後端
連接資料庫並提供專案前端的 API 需求，使用 Express + Sequelize 進行開發
> github 連結：https://github.com/ai86109/TPBL_backend

## ToDo
- 管理者後台
  - 管理者可以透過後台系統，新增、編輯、排序、刪除新聞，讓新聞可以適當地露出於前台
- 使用者前台
  - 將各場次比賽相關資訊，依照正確日期顯示於首頁、比賽、賽程、boxscores
  - 將新聞顯示於首頁、新聞頁面
  - 網頁可以切換明暗模式
  - 新增棒球影音內容，提供使用者除了新聞外的另一個選擇
  - 提供當天比賽場地即時天氣資訊
