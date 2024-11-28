import React, { useState } from 'react';
import GuideCard from './GuideCard';
import { developmentGuides } from '../data/developmentGuides';

const DevelopmentAids = () => {
  const [selectedAge, setSelectedAge] = useState(developmentGuides[0].age);
  const selectedGuide = developmentGuides.find((g) => g.age === selectedAge);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">寶寶發展輔助指南</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          為您提供適齡玩具建議、發展測試方法和安全注意事項，協助寶寶健康成長。
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
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

      <div className="grid gap-6">
        {selectedGuide?.sections.map((section) => (
          <GuideCard key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
};

export default DevelopmentAids;