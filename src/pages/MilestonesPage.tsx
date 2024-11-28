import React, { useState } from 'react';
import MilestoneCard from '../components/MilestoneCard';
import { milestones } from '../data/milestones';

const MilestonesPage = () => {
  const [selectedAge, setSelectedAge] = useState(milestones[0].age);
  const selectedMilestone = milestones.find((m) => m.age === selectedAge);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">寶寶發展里程碑</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          了解寶寶在不同月齡的發展指標，幫助您更好地關注寶寶的成長歷程。
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {milestones.map((milestone) => (
          <button
            key={milestone.age}
            onClick={() => setSelectedAge(milestone.age)}
            className={`px-6 py-2 rounded-full transition-all transform hover:scale-105
              ${selectedAge === milestone.age
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
          >
            {milestone.age}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedMilestone && <MilestoneCard {...selectedMilestone} />}
      </div>
    </div>
  );
};

export default MilestonesPage;