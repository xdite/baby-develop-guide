import React, { useState } from 'react';
import FoodGuideCard from '../components/FoodGuideCard';
import { foodGuides } from '../data/foodGuides';

const FoodGuidePage = () => {
  const [selectedStage, setSelectedStage] = useState(foodGuides[0].stage);
  const selectedGuide = foodGuides.find((g) => g.stage === selectedStage);

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

      <div className="grid gap-6">
        {selectedGuide?.sections.map((section) => (
          <FoodGuideCard key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
};

export default FoodGuidePage;