import { Heart, Calendar, Lightbulb, Shield, MessageSquare } from 'lucide-react';

export const parentChildGuides = [
  {
    category: "安全依附建立",
    sections: [
      {
        title: "日常互動",
        icon: Heart,
        items: [
          { point: "即時回應哭鬧", desc: "建立基本信任感" },
          { point: "有效的目光接觸", desc: "微笑、對視增進情感連結" },
          { point: "身體接觸", desc: "擁抱、輕撫、按摩" },
          { point: "情緒共鳴", desc: "理解並回應寶寶的情緒需求" }
        ]
      },
      {
        title: "建立規律",
        icon: Calendar,
        items: [
          { point: "固定的作息", desc: "讓寶寶感到安全和可預期" },
          { point: "一致的照顧方式", desc: "讓寶寶感到穩定" },
          { point: "溫和的界限", desc: "在安全範圍內給予自由" },
          { point: "儀式感", desc: "建立特別的親子互動時光" }
        ]
      },
      {
        title: "關係技巧",
        icon: MessageSquare,
        items: [
          { point: "耐心傾聽", desc: "即使是咿咿呀呀也要認真回應" },
          { point: "正向回饋", desc: "多用鼓勵和讚美" },
          { point: "同理心", desc: "試著從寶寶角度思考" },
          { point: "情緒調節", desc: "幫助寶寶學習處理情緒" }
        ]
      }
    ]
  },
  {
    category: "互動活動建議",
    sections: [
      {
        title: "日常遊戲",
        icon: Lightbulb,
        items: [
          { point: "躲貓貓", desc: "訓練物體恆存概念" },
          { point: "律動遊戲", desc: "搭配音樂做互動" },
          { point: "閱讀繪本", desc: "培養專注力和語言能力" },
          { point: "感官遊戲", desc: "觸摸不同質地的安全物品" }
        ]
      },
      {
        title: "學習型互動",
        icon: Shield,
        items: [
          { point: "生活情境教學", desc: "解說日常生活中的事物" },
          { point: "模仿遊戲", desc: "鼓勵寶寶模仿簡單動作" },
          { point: "角色扮演", desc: "從簡單的互動開始" },
          { point: "自然探索", desc: "安全環境下接觸大自然" }
        ]
      },
      {
        title: "情感交流",
        icon: Heart,
        items: [
          { point: "專注時光", desc: "每天固定專心陪伴時間" },
          { point: "親子按摩", desc: "增進身體接觸" },
          { point: "同步互動", desc: "跟著寶寶的節奏互動" },
          { point: "情緒分享", desc: "分享並表達正向情緒" }
        ]
      }
    ]
  },
  {
    category: "溝通技巧",
    sections: [
      {
        title: "語言互動",
        icon: MessageSquare,
        items: [
          { point: "豐富的語言環境", desc: "多說話，描述日常活動" },
          { point: "回應式對話", desc: "對寶寶的聲音做出回應" },
          { point: "情緒表達", desc: "幫寶寶說出感受" },
          { point: "正向用語", desc: "使用溫和正向的語言" }
        ]
      },
      {
        title: "非語言溝通",
        icon: Heart,
        items: [
          { point: "眼神接觸", desc: "保持適度的眼神交流" },
          { point: "面部表情", desc: "展現豐富的表情" },
          { point: "肢體語言", desc: "溫和的動作和姿態" },
          { point: "空間距離", desc: "保持適當的互動距離" }
        ]
      },
      {
        title: "情緒連結",
        icon: Shield,
        items: [
          { point: "情緒觀察", desc: "察覺寶寶的情緒變化" },
          { point: "情緒命名", desc: "幫助認識不同情緒" },
          { point: "情緒接納", desc: "接納各種情緒表現" },
          { point: "情緒調節", desc: "協助找到適當表達方式" }
        ]
      }
    ]
  }
];