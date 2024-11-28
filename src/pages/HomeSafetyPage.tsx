import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { homeSafetyGuides } from '../data/homeSafetyGuides';

const HomeSafetyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(homeSafetyGuides[0].category);
  const selectedGuide = homeSafetyGuides.find((g) => g.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">居家安全評估指南</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          為寶寶打造安全的成長環境，預防居家意外發生。
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {homeSafetyGuides.map((guide) => (
          <button
            key={guide.category}
            onClick={() => setSelectedCategory(guide.category)}
            className={`px-6 py-2 rounded-full transition-all transform hover:scale-105
              ${selectedCategory === guide.category
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
          >
            {guide.category}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {selectedGuide?.sections.map((section) => (
          <Card key={section.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <section.icon className="w-5 h-5 text-blue-500" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {section.items.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium text-sm">{item.point}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeSafetyPage;