import React from 'react';
import { Baby } from 'lucide-react';

type NavbarProps = {
  currentPage: string;
  onPageChange: (page: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Baby className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">寶寶成長指南</span>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => onPageChange('milestones')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'milestones'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              發展里程碑
            </button>
            <button
              onClick={() => onPageChange('aids')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'aids'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              發展輔助指南
            </button>
            <button
              onClick={() => onPageChange('food')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'food'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              副食品指南
            </button>
            <button
              onClick={() => onPageChange('parent-child')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'parent-child'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              親子關係
            </button>
            <button
              onClick={() => onPageChange('healthcare')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'healthcare'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              健康照護
            </button>
            <button
              onClick={() => onPageChange('home-safety')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'home-safety'
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              居家安全
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;