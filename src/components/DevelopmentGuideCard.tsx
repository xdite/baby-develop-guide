import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DevelopmentGuideCardProps {
  title: string;
  icon: LucideIcon;
  items: {
    name: string;
    desc: string;
  }[];
}

const DevelopmentGuideCard = ({ title, icon: Icon, items }: DevelopmentGuideCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="flex gap-4">
            <div className="w-full">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentGuideCard; 