import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MilestonesPage from './pages/MilestonesPage';
import AidsPage from './pages/AidsPage';
import FoodGuidePage from './pages/FoodGuidePage';
import ParentChildPage from './pages/ParentChildPage';
import HealthcarePage from './pages/HealthcarePage';
import HomeSafetyPage from './pages/HomeSafetyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('milestones');

  const renderPage = () => {
    switch (currentPage) {
      case 'milestones':
        return <MilestonesPage />;
      case 'aids':
        return <AidsPage />;
      case 'food':
        return <FoodGuidePage />;
      case 'parent-child':
        return <ParentChildPage />;
      case 'healthcare':
        return <HealthcarePage />;
      case 'home-safety':
        return <HomeSafetyPage />;
      default:
        return <MilestonesPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;