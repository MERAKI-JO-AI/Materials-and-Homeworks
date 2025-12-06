interface ToggleTabsProps {
  activeTab: 'materials' | 'homeworks';
  onTabChange: (tab: 'materials' | 'homeworks') => void;
}

export const ToggleTabs = ({ activeTab, onTabChange }: ToggleTabsProps) => {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 mb-8">
      <button
        onClick={() => onTabChange('materials')}
        className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
          activeTab === 'materials'
            ? 'bg-accent text-white border-accent shadow-lg shadow-accent/40'
            : 'bg-transparent text-gray-300 border-gray-500 hover:border-accent hover:text-white'
        }`}
      >
        Materials
      </button>
      <button
        onClick={() => onTabChange('homeworks')}
        className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
          activeTab === 'homeworks'
            ? 'bg-accent text-white border-accent shadow-lg shadow-accent/40'
            : 'bg-transparent text-gray-300 border-gray-500 hover:border-accent hover:text-white'
        }`}
      >
        Homeworks
      </button>
      
      {/* Active section indicator */}
      <span
        className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full text-xs font-semibold ${
          activeTab === 'materials'
            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/40'
            : 'bg-amber-500/10 text-amber-300 border border-amber-500/40'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-current" />
        <span className="hidden sm:inline">
          {activeTab === 'materials' ? 'Currently viewing: Materials' : 'Currently viewing: Homeworks'}
        </span>
        <span className="sm:hidden">
          {activeTab === 'materials' ? 'Materials' : 'Homeworks'}
        </span>
      </span>
    </div>
  );
};


