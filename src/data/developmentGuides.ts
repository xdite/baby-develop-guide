import { GamepadIcon, TestTubes, ShieldAlert } from 'lucide-react';

export const developmentGuides = [
  {
    age: "0-2個月",
    sections: [
      {
        title: "建議玩具",
        icon: GamepadIcon,
        items: [
          { name: "黑白對比圖卡", desc: "訓練視覺能力，可在餵奶時展示" },
          { name: "小手鈴/搖鈴", desc: "訓練聽覺能力和聲音追蹤" },
          { name: "柔軟布書", desc: "增加觸覺刺激和視覺興趣" },
          { name: "趴姿墊/遊戲墊", desc: "支持抬頭訓練和感官刺激" }
        ]
      },
      {
        title: "發展測試",
        icon: TestTubes,
        items: [
          { name: "視覺追視測試", desc: "用物體在寶寶眼前緩慢移動，觀察是否能追視" },
          { name: "聲音反應測試", desc: "在寶寶耳邊製造輕柔聲響，觀察是否有反應" },
          { name: "抬頭能力測試", desc: "趴姿時觀察是否能短暫抬頭" }
        ]
      },
      {
        title: "安全提醒",
        icon: ShieldAlert,
        items: [
          { name: "玩具大小", desc: "必須大於3.5公分，避免吞食危險" },
          { name: "材質安全", desc: "選擇無毒、不易脫落塗料的玩具" },
          { name: "清潔消毒", desc: "定期清洗消毒玩具" }
        ]
      }
    ]
  },
  {
    age: "3-4個月",
    sections: [
      {
        title: "建議玩具",
        icon: GamepadIcon,
        items: [
          { name: "手搖鈴/抓握玩具", desc: "訓練抓握能力" },
          { name: "健力架/遊戲健身架", desc: "訓練手眼協調和抓握能力" },
          { name: "軟質觸摸書", desc: "增加觸覺刺激和認知能力" },
          { name: "音樂玩具", desc: "刺激聽覺發展和節奏感" }
        ]
      },
      {
        title: "發展測試",
        icon: TestTubes,
        items: [
          { name: "抓握測試", desc: "觀察是否能自主抓握玩具" },
          { name: "頸部支撐測試", desc: "確認是否能穩定抬頭90度" },
          { name: "翻身準備度測試", desc: "觀察是否有翻身意圖" }
        ]
      },
      {
        title: "安全提醒",
        icon: ShieldAlert,
        items: [
          { name: "玩具堅固度", desc: "確保玩具不會輕易破損" },
          { name: "避免尖銳邊角", desc: "選擇圓潤設計的玩具" },
          { name: "使用時間", desc: "控制每次玩耍時間，避免過度刺激" }
        ]
      }
    ]
  },
  {
    age: "5-6個月",
    sections: [
      {
        title: "建議玩具",
        icon: GamepadIcon,
        items: [
          { name: "疊疊樂/積木", desc: "訓練手眼協調能力" },
          { name: "固齒器/咬咬玩具", desc: "舒緩長牙不適" },
          { name: "帶把手的玩具", desc: "訓練雙手協調能力" },
          { name: "感官球", desc: "訓練抓握和觸覺能力" }
        ]
      },
      {
        title: "發展測試",
        icon: TestTubes,
        items: [
          { name: "坐姿穩定度測試", desc: "觀察扶持下的坐姿能力" },
          { name: "物品轉移測試", desc: "觀察物品在雙手轉換的能力" },
          { name: "聲音模仿測試", desc: "觀察是否會嘗試發出音節" }
        ]
      },
      {
        title: "安全提醒",
        icon: ShieldAlert,
        items: [
          { name: "玩具衛生", desc: "特別注意咬咬玩具的清潔" },
          { name: "防跌倒措施", desc: "開始坐立時需要軟墊保護" },
          { name: "遊戲環境", desc: "確保活動空間安全" }
        ]
      }
    ]
  }
];