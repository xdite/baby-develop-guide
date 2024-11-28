import { Eye, Ear, Brain, Users, Baby } from 'lucide-react';

export const milestones = [
  {
    age: "0-2個月",
    developments: [
      { type: "視覺", icon: Eye, items: ["能注視臉部", "追視物體", "對高對比度圖案有興趣"] },
      { type: "聽覺", icon: Ear, items: ["對聲音有反應", "特別對熟悉的聲音敏感"] },
      { type: "動作", icon: Baby, items: ["趴著時可短暫抬頭", "手腳會自發性動作"] },
      { type: "認知", icon: Brain, items: ["會發出咕咕聲", "開始有簡單的反射動作"] },
      { type: "社交", icon: Users, items: ["會對人露出社交性微笑", "開始認得主要照顧者"] }
    ]
  },
  {
    age: "3-4個月",
    developments: [
      { type: "視覺", icon: Eye, items: ["能追視快速移動物體", "辨識顏色能力增強"] },
      { type: "聽覺", icon: Ear, items: ["對不同音調有反應", "開始分辨聲音來源"] },
      { type: "動作", icon: Baby, items: ["可以自主抬頭90度", "開始嘗試翻身"] },
      { type: "認知", icon: Brain, items: ["會抓握玩具", "對新事物表現好奇"] },
      { type: "社交", icon: Users, items: ["會咯咯笑出聲", "喜歡與人互動"] }
    ]
  },
  {
    age: "5-6個月",
    developments: [
      { type: "視覺", icon: Eye, items: ["能看較遠的物體", "空間感知增強"] },
      { type: "聽覺", icon: Ear, items: ["能分辨不同的說話語氣", "對音樂有反應"] },
      { type: "動作", icon: Baby, items: ["能獨自翻身", "扶著可以坐"] },
      { type: "認知", icon: Brain, items: ["會伸手拿東西", "記憶力開始發展"] },
      { type: "社交", icon: Users, items: ["會發出較多音節", "能表達喜怒哀樂"] }
    ]
  }
];