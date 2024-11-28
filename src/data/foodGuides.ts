import { Baby, Apple, AlertTriangle, Clock, ChefHat } from 'lucide-react';

export const foodGuides = [
  {
    stage: "準備階段 (4-6個月)",
    sections: [
      {
        title: "準備度評估",
        icon: Baby,
        items: [
          { point: "能坐直且頭部穩固", desc: "確保吞嚥安全" },
          { point: "對食物表現出興趣", desc: "會注視他人進食" },
          { point: "舌頭推拒反射減弱", desc: "能將食物吞入而不立即吐出" },
          { point: "體重已達出生時2倍", desc: "身體發展達標" }
        ]
      },
      {
        title: "首選食材",
        icon: Apple,
        items: [
          { point: "精緻米糊", desc: "最基本的開始選擇" },
          { point: "蔬菜泥", desc: "南瓜泥、馬鈴薯泥" },
          { point: "水果泥", desc: "蘋果泥、梨子泥" },
          { point: "單一食材", desc: "方便觀察過敏反應" }
        ]
      },
      {
        title: "必備廚具",
        icon: ChefHat,
        items: [
          { point: "食物調理機", desc: "用於打碎食材成泥狀" },
          { point: "細密篩網", desc: "過濾較粗的顆粒" },
          { point: "副食品製冰盒", desc: "分裝冷凍保存" },
          { point: "軟質餵食湯匙", desc: "矽膠或塑膠材質" },
          { point: "防水圍兜", desc: "避免弄髒衣物" },
          { point: "食物分裝盒", desc: "可微波加熱的安全材質" },
          { point: "食物溫度計", desc: "確保食物溫度適中" }
        ]
      },
      {
        title: "注意事項",
        icon: AlertTriangle,
        items: [
          { point: "稀稠度要適中", desc: "應該像優格般的稀糊狀，不可太稀或太稠，可用湯匙餵食時不會快速流下" },
          { point: "餵食量從小開始", desc: "初期每餐從1-2湯匙開始，觀察寶寶接受度後逐漸增加至3-4湯匙" },
          { point: "觀察過敏反應", desc: "新食材間隔4-7天添加，留意是否出現皮膚紅疹、腹瀉、嘔吐等過敏症狀" },
          { point: "維持母乳/配方奶", desc: "副食品僅為輔助，6個月內母乳或配方奶仍是主要營養來源" },
          { point: "注意衛生安全", desc: "餐具需充分清潔消毒，食材新鮮且煮熟，製作後2小時內食用完畢" },
          { point: "觀察寶寶反應", desc: "若出現嗆咳、拒絕進食等狀況，應立即停止並評估原因" }
        ]
      }
    ]
  },
  {
    stage: "進階階段 (6-8個月)",
    sections: [
      {
        title: "食材選擇",
        icon: Apple,
        items: [
          { point: "根莖類", desc: "紅蘿蔔、地瓜" },
          { point: "豆類", desc: "豌豆泥、豆腐" },
          { point: "蛋黃", desc: "先從少量煮熟蛋黃開始" },
          { point: "穀類", desc: "燕麥、小米" }
        ]
      },
      {
        title: "製作方法",
        icon: ChefHat,
        items: [
          { point: "泥狀食物", desc: "細緻無顆粒" },
          { point: "粗泥狀", desc: "可有些微顆粒" },
          { point: "調味清淡", desc: "不添加鹽糖" },
          { point: "適量添加油脂", desc: "每餐約1/4-1/2茶匙" }
        ]
      },
      {
        title: "進食技巧",
        icon: Clock,
        items: [
          { point: "餐具選擇", desc: "使用軟質湯匙" },
          { point: "進食時間", desc: "每餐15-30分鐘" },
          { point: "姿勢要正確", desc: "坐直、頭部微前傾" },
          { point: "耐心餵食", desc: "不強迫進食" }
        ]
      }
    ]
  },
  {
    stage: "成熟階段 (8-12個月)",
    sections: [
      {
        title: "食材擴充",
        icon: Apple,
        items: [
          { point: "蛋白", desc: "全蛋、肉類泥" },
          { point: "海鮮", desc: "白肉魚泥" },
          { point: "堅果", desc: "花生醬(充分稀釋)" },
          { point: "乳製品", desc: "優格、起司" }
        ]
      },
      {
        title: "食物型態",
        icon: ChefHat,
        items: [
          { point: "軟質塊狀", desc: "可用手抓食用" },
          { point: "手指食物", desc: "煮軟的蔬果條" },
          { point: "小丁狀", desc: "可練習使用湯匙" },
          { point: "粗糙度增加", desc: "訓練咀嚼能力" }
        ]
      },
      {
        title: "餐食規劃",
        icon: Clock,
        items: [
          { point: "正餐2-3次", desc: "配合全家用餐時間" },
          { point: "點心1-2次", desc: "根據寶寶需求" },
          { point: "食材多樣化", desc: "確保營養均衡" },
          { point: "循序漸進", desc: "逐步培養獨立進食能力" }
        ]
      }
    ]
  }
];