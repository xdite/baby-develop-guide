import React, { useState, useEffect } from 'react';
import FoodGuideCard from '../components/FoodGuideCard';
import { foodGuides } from '../data/foodGuides';

const FoodGuidePage = () => {
  const [selectedStage, setSelectedStage] = useState(foodGuides[0].stage);
  const [shoppingList, setShoppingList] = useState<{[key: string]: boolean}>({});
  const selectedGuide = foodGuides.find((g) => g.stage === selectedStage);

  // 從 localStorage 讀取購物清單
  useEffect(() => {
    const savedList = localStorage.getItem('babyFoodShoppingList');
    if (savedList) {
      setShoppingList(JSON.parse(savedList));
    }
  }, []);

  // 儲存購物清單到 localStorage
  const toggleShoppingItem = (item: string) => {
    const newList = { ...shoppingList, [item]: !shoppingList[item] };
    setShoppingList(newList);
    localStorage.setItem('babyFoodShoppingList', JSON.stringify(newList));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">寶寶副食品添加指南</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          了解不同階段的副食品添加建議，幫助寶寶健康成長。
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {foodGuides.map((guide) => (
          <button
            key={guide.stage}
            onClick={() => setSelectedStage(guide.stage)}
            className={`px-6 py-2 rounded-full transition-all transform hover:scale-105
              ${selectedStage === guide.stage
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
          >
            {guide.stage}
          </button>
        ))}
      </div>

      <div className="flex gap-6">
        {/* 左側指南內容 */}
        <div className="flex-1 grid gap-6">
          {selectedGuide?.sections.map((section) => (
            <FoodGuideCard key={section.title} {...section} />
          ))}
        </div>

        {/* 右側採買清單 */}
        <div className="w-80 shrink-0">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">採買清單</h2>
            
            {/* 食材清單 */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">食材</h3>
              <div className="space-y-2">
                {selectedGuide?.sections
                  .filter(section => section.title.includes('食材'))
                  .map(section => (
                    section.items.map(item => (
                      <label key={item.point} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={!!shoppingList[item.point]}
                          onChange={() => toggleShoppingItem(item.point)}
                          className="rounded text-blue-500"
                        />
                        <span className="text-gray-700">{item.point}</span>
                      </label>
                    ))
                  ))}
              </div>
            </div>

            {/* 廚具清單 */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">廚具</h3>
              <div className="space-y-2">
                {selectedGuide?.sections
                  .filter(section => section.title.includes('廚具'))
                  .map(section => (
                    section.items.map(item => (
                      <label key={item.point} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={!!shoppingList[item.point]}
                          onChange={() => toggleShoppingItem(item.point)}
                          className="rounded text-blue-500"
                        />
                        <span className="text-gray-700">{item.point}</span>
                      </label>
                    ))
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodGuidePage;