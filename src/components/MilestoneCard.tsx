import React from 'react';
import { Eye, Ear, Brain, Heart, Users, Baby } from 'lucide-react';

type Development = {
  type: string;
  icon: React.ElementType;
  items: string[];
};

type MilestoneProps = {
  age: string;
  developments: Development[];
};

const MilestoneCard: React.FC<MilestoneProps> = ({ age, developments }) => {
  return (
    <>
      {developments.map((dev) => (
        <div key={dev.type} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center gap-2 mb-3">
            <dev.icon className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold">{dev.type}</h3>
          </div>
          <ul className="space-y-2">
            {dev.items.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default MilestoneCard;