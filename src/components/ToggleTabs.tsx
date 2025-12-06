interface ToggleTabsProps {
  activeTab: 'materials' | 'homeworks';
  onTabChange: (tab: 'materials' | 'homeworks') => void;
}

export const ToggleTabs = ({ activeTab, onTabChange }: ToggleTabsProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="flex justify-center gap-3">
        <button
          onClick={() => onTabChange('materials')}
          className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all ${
            activeTab === 'materials'
              ? 'bg-accent text-white border-accent shadow-lg shadow-accent/40'
              : 'bg-transparent text-gray-300 border-gray-500 hover:border-accent hover:text-white'
          }`}
        >
          Materials
        </button>
        <button
          onClick={() => onTabChange('homeworks')}
          className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all ${
            activeTab === 'homeworks'
              ? 'bg-accent text-white border-accent shadow-lg shadow-accent/40'
              : 'bg-transparent text-gray-300 border-gray-500 hover:border-accent hover:text-white'
          }`}
        >
          Homeworks
        </button>
      </div>
      
      {/* Active section indicator */}
      <span
        className={`mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold ${
          activeTab === 'materials'
            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/40'
            : 'bg-amber-500/10 text-amber-300 border border-amber-500/40'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-current" />
        {activeTab === 'materials' ? 'Currently viewing: Materials' : 'Currently viewing: Homeworks'}
      </span>
    </div>
  );
};


