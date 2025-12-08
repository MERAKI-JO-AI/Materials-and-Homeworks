import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { ToggleTabs } from '../components/ToggleTabs';
import { Timeline } from '../components/Timeline';
import { WeekModal } from '../components/WeekModal';
import { weeks, Week } from '../data/weeks';

export const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState<'materials' | 'homeworks'>('materials');
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if user has access
  //   const hasAccess = localStorage.getItem('vibeAccess') === 'true';
  //   if (!hasAccess) {
  //     navigate('/access');
  //     return;
  //   }
  // }, [navigate]);

  // const handleLogout = () => {
  //   localStorage.removeItem('vibeAccess');
  //   navigate('/access');
  // };

  const handleWeekClick = (week: Week) => {
    setSelectedWeek(week);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWeek(null);
  };

  return (
    <div className="min-h-screen bg-navyDark text-white overflow-x-hidden">
      {/* <Navbar onLogout={handleLogout} /> */}

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Main title and subtitle */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Vibe Coding Learning Resources
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300">
            Your coding journey at a glance
          </p>
        </div>

        {/* Toggle tabs */}
        <ToggleTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Timeline */}
        <Timeline weeks={weeks} onWeekClick={handleWeekClick} />

        {/* Week Modal */}
        {selectedWeek && (
          <WeekModal
            week={selectedWeek}
            activeTab={activeTab}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </main>
    </div>
  );
};

