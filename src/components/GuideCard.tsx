import React from 'react';
import { LucideIcon } from 'lucide-react';

type GuideItem = {
  name: string;
  desc: string;
};

type GuideSection = {
  title: string;
  icon: LucideIcon;
  items: GuideItem[];
};

const GuideCard: React.FC<GuideSection> = ({ title, icon: Icon, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg">
            <div className="font-medium text-sm">{item.name}</div>
            <div className="text-sm text-gray-600">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideCard;