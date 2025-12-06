import { Week } from '../data/weeks';

interface WeekModalProps {
  week: Week;
  activeTab: 'materials' | 'homeworks';
  isOpen: boolean;
  onClose: () => void;
}

export const WeekModal = ({
  week,
  activeTab,
  isOpen,
  onClose,
}: WeekModalProps) => {
  if (!isOpen) return null;

  const displayedType = activeTab === 'materials' ? 'material' : 'homework';
  const heading = activeTab === 'materials' ? 'Materials' : 'Homeworks';

  const handleFileClick = (url: string | null) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const getFileIcon = (label: string) => {
    if (label.toLowerCase().includes('homework')) {
      return '📝';
    }
    return '📄';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 overflow-x-hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal */}
      <div
        className="relative bg-card rounded-2xl shadow-2xl max-w-lg sm:max-w-xl w-full max-w-[calc(100vw-1.5rem)] max-h-[90vh] overflow-hidden transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with navy background */}
        <div className="bg-navy px-4 sm:px-6 py-4 flex items-center justify-between">
          <h2 className="text-white text-base sm:text-lg lg:text-xl font-semibold">
            {week.label} – Learning Resources
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors text-xl sm:text-2xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[80vh] overflow-y-auto px-4 sm:px-6 py-4 sm:py-5 bg-card text-textMain">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">{heading}</h3>
          <div className="space-y-3">
            {week.lectures.map((lecture) => {
              const file =
                displayedType === 'material' ? lecture.material : lecture.homework;

              const isComingSoon = !file.url || file.label === 'Coming soon';

              return (
                <div
                  key={lecture.id}
                  className="mb-3 flex items-center justify-between rounded-xl border border-gray-200 bg-white/95 px-4 py-3 gap-3"
                >
                  <div className="pr-3 flex-1 min-w-0">
                    <div className="text-sm sm:text-base font-semibold text-[#111827] break-words">
                      {lecture.title}
                    </div>
                  </div>

                  {isComingSoon ? (
                    <span className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                      Coming soon
                    </span>
                  ) : (
                    <button
                      onClick={() => file.url && handleFileClick(file.url)}
                      className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
                    >
                      Open PDF
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

