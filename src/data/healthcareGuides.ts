import { Heart, Stethoscope, AlertTriangle, BedDouble, Thermometer, Shield } from 'lucide-react';

export const healthcareGuides = [
  {
    category: "基本健康管理",
    sections: [
      {
        title: "定期健康檢查",
        icon: Stethoscope,
        items: [
          { point: "新生兒檢查", desc: "出生後、滿月各一次" },
          { point: "2-6個月", desc: "每月一次健康檢查" },
          { point: "7-12個月", desc: "每2-3個月一次檢查" },
          { point: "發展評估", desc: "依年齡進行各項發展篩檢" }
        ]
      },
      {
        title: "預防接種",
        icon: Heart,
        items: [
          { point: "出生時", desc: "B肝疫苗第一劑、卡介苗" },
          { point: "2個月", desc: "B肝第二劑、五合一疫苗第一劑" },
          { point: "4個月", desc: "五合一疫苗第二劑" },
          { point: "6個月", desc: "B肝第三劑、五合一疫苗第三劑" }
        ]
      },
      {
        title: "成長監測",
        icon: Thermometer,
        items: [
          { point: "身高體重", desc: "定期測量並記錄" },
          { point: "頭圍測量", desc: "評估大腦發展" },
          { point: "餵食紀錄", desc: "記錄進食量和次數" },
          { point: "大小便觀察", desc: "留意顏色和次數" }
        ]
      }
    ]
  },
  {
    category: "日常護理",
    sections: [
      {
        title: "基本護理",
        icon: Heart,
        items: [
          { point: "臍帶護理", desc: "保持乾燥，觀察是否發炎" },
          { point: "沐浴方式", desc: "注意水溫和環境安全" },
          { point: "口腔清潔", desc: "餵食後進行清潔" },
          { point: "皮膚照顧", desc: "預防紅疹和濕疹" }
        ]
      },
      {
        title: "睡眠照護",
        icon: BedDouble,
        items: [
          { point: "睡眠環境", desc: "溫度18-22度，濕度50-60%" },
          { point: "睡姿指導", desc: "建議仰睡，預防窒息" },
          { point: "睡眠時間", desc: "新生兒平均16-17小時" },
          { point: "睡眠安全", desc: "避免軟枕頭和鬆軟床具" }
        ]
      },
      {
        title: "環境安全",
        icon: Shield,
        items: [
          { point: "居家安全", desc: "預防跌倒和撞傷" },
          { point: "玩具安全", desc: "選擇適齡且安全的玩具" },
          { point: "空氣品質", desc: "保持通風，避免二手菸" },
          { point: "寵物互動", desc: "注意寵物衛生和安全" }
        ]
      }
    ]
  },
  {
    category: "緊急處理",
    sections: [
      {
        title: "警訊辨識",
        icon: AlertTriangle,
        items: [
          { point: "發燒處理", desc: "體溫超過38度需就醫" },
          { point: "嘔吐腹瀉", desc: "注意補充水分，避免脫水" },
          { point: "呼吸問題", desc: "呼吸急促或異常聲音" },
          { point: "異常哭鬧", desc: "持續哭鬧超過3小時" }
        ]
      },
      {
        title: "基本急救",
        icon: Heart,
        items: [
          { point: "異物梗塞", desc: "海姆立克法適用6個月以上" },
          { point: "燒燙傷", desc: "立即冷水沖洗20分鐘" },
          { point: "跌倒撞傷", desc: "觀察意識狀態" },
          { point: "流鼻血", desc: "頭部前傾，輕壓鼻翼" }
        ]
      },
      {
        title: "就醫指引",
        icon: Stethoscope,
        items: [
          { point: "需立即就醫", desc: "呼吸困難、嚴重外傷、抽搐" },
          { point: "24小時內就醫", desc: "持續發燒、嘔吐腹瀉" },
          { point: "門診追蹤", desc: "一般感冒症狀、輕微外傷" },
          { point: "居家觀察", desc: "食慾差、小感冒" }
        ]
      }
    ]
  }
];