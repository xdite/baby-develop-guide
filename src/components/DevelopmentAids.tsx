import React, { useState, useEffect } from 'react';
import { developmentGuides } from '../data/developmentGuides';
import DevelopmentGuideCard from './DevelopmentGuideCard';

const DevelopmentAids = () => {
  const [selectedAge, setSelectedAge] = useState(developmentGuides[0].age);
  const [shoppingList, setShoppingList] = useState<{[key: string]: boolean}>({});
  const selectedGuide = developmentGuides.find((g) => g.age === selectedAge);

  // 從 localStorage 讀取購物清單
  useEffect(() => {
    const savedList = localStorage.getItem('babyDevelopmentShoppingList');
    if (savedList) {
      setShoppingList(JSON.parse(savedList));
    }
  }, []);

  // 儲存購物清單到 localStorage
  const toggleShoppingItem = (itemId: string) => {
    const newList = { ...shoppingList, [itemId]: !shoppingList[itemId] };
    setShoppingList(newList);
    localStorage.setItem('babyDevelopmentShoppingList', JSON.stringify(newList));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">寶寶發展指南</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          了解不同月齡的寶寶發展重點與建議玩具。
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {developmentGuides.map((guide) => (
          <button
            key={guide.age}
            onClick={() => setSelectedAge(guide.age)}
            className={`px-6 py-2 rounded-full transition-all transform hover:scale-105
              ${selectedAge === guide.age
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
          >
            {guide.age}
          </button>
        ))}
      </div>

      <div className="flex gap-6">
        {/* 左側指南內容 */}
        <div className="flex-1 grid gap-6">
          {selectedGuide?.sections.map((section) => (
            <DevelopmentGuideCard key={section.title} {...section} />
          ))}
        </div>

        {/* 右側採買清單 */}
        <div className="w-80 shrink-0">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">採買清單</h2>
            <div className="space-y-2">
              {selectedGuide?.shoppingList?.map((item) => (
                <label key={item.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!shoppingList[item.id]}
                    onChange={() => toggleShoppingItem(item.id)}
                    className="rounded text-blue-500"
                  />
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-gray-500 text-sm ml-auto">{item.price}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentAids;