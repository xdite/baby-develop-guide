import { Home, Shield, AlertTriangle, Wrench, Baby } from 'lucide-react';

export const homeSafetyGuides = [
  {
    category: "空間安全",
    sections: [
      {
        title: "臥室安全",
        icon: Home,
        items: [
          { point: "嬰兒床規格", desc: "床欄高度至少60公分，欄杆間距不超過6公分" },
          { point: "寢具安全", desc: "避免鬆軟床墊、枕頭、棉被，預防窒息" },
          { point: "傢俱擺放", desc: "確保穩固性，避免可攀爬或傾倒風險" },
          { point: "電線收納", desc: "確實固定或收納所有電線，遠離寶寶" }
        ]
      },
      {
        title: "浴室安全",
        icon: Shield,
        items: [
          { point: "防滑措施", desc: "地面及浴缸需鋪設防滑墊" },
          { point: "水溫控制", desc: "安裝恆溫設備或確實測試水溫" },
          { point: "收納整理", desc: "清潔用品、藥品放置高處並上鎖" },
          { point: "電器防護", desc: "遠離水源，使用防水蓋板" }
        ]
      },
      {
        title: "客廳廚房",
        icon: Home,
        items: [
          { point: "尖角防護", desc: "傢俱尖角加裝防撞條" },
          { point: "插座防護", desc: "未使用的插座需加裝安全蓋" },
          { point: "櫥櫃安全", desc: "安裝櫥櫃安全鎖，收納危險物品" },
          { point: "爐具防護", desc: "使用爐具護欄，鍋柄向內放置" }
        ]
      }
    ]
  },
  {
    category: "成長階段防護",
    sections: [
      {
        title: "新生兒期(0-3個月)",
        icon: Baby,
        items: [
          { point: "睡眠安全", desc: "採仰睡姿勢，避免趴睡" },
          { point: "溫度控制", desc: "室溫維持24-26度" },
          { point: "換尿布檯", desc: "必須有防護欄或使用安全帶" },
          { point: "照明適中", desc: "避免過強或不足的光線" }
        ]
      },
      {
        title: "爬行期(6-12個月)",
        icon: Baby,
        items: [
          { point: "地面整理", desc: "移除小物品，預防誤食" },
          { point: "樓梯防護", desc: "安裝樓梯門" },
          { point: "傢俱固定", desc: "預防攀爬時傾倒" },
          { point: "門縫防護", desc: "預防手指夾傷" }
        ]
      },
      {
        title: "學步期(1-2歲)",
        icon: Baby,
        items: [
          { point: "活動空間", desc: "預留足夠且安全的活動空間" },
          { point: "窗戶防護", desc: "加裝窗戶護欄或限制開啟幅度" },
          { point: "玩具安全", desc: "選擇適齡且安全的玩具" },
          { point: "防墜措施", desc: "陽台、窗戶需加裝防護網" }
        ]
      }
    ]
  },
  {
    category: "意外預防",
    sections: [
      {
        title: "跌倒防範",
        icon: AlertTriangle,
        items: [
          { point: "地面平整", desc: "清除絆倒危險" },
          { point: "防滑措施", desc: "浴室、樓梯需鋪設防滑設施" },
          { point: "護欄設置", desc: "床邊、樓梯需安裝護欄" },
          { point: "照明充足", desc: "確保照明充足，特別是夜間" }
        ]
      },
      {
        title: "燙傷預防",
        icon: AlertTriangle,
        items: [
          { point: "熱水控制", desc: "水溫不超過50度" },
          { point: "廚房安全", desc: "烹飪時避免抱寶寶" },
          { point: "飲品放置", desc: "熱飲遠離寶寶可觸及範圍" },
          { point: "電器使用", desc: "電器線材收納整理" }
        ]
      },
      {
        title: "緊急應變",
        icon: Wrench,
        items: [
          { point: "急救包準備", desc: "準備基本急救用品" },
          { point: "緊急聯絡", desc: "張貼緊急聯絡電話" },
          { point: "逃生規劃", desc: "規劃逃生路線" },
          { point: "安全演練", desc: "定期進行安全演練" }
        ]
      }
    ]
  }
];