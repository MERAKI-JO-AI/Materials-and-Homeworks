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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal */}
      <div
        className="relative bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with navy background */}
        <div className="bg-navy px-6 py-4 flex items-center justify-between">
          <h2 className="text-white text-xl font-semibold">
            {week.label} – Learning Resources
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors text-2xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] bg-card text-textMain">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">{heading}</h3>
          <div className="space-y-3">
            {week.lectures.map((lecture) => {
              const file =
                displayedType === 'material' ? lecture.material : lecture.homework;

              const isComingSoon = !file.url || file.label === 'Coming soon';

              return (
                <div
                  key={lecture.id}
                  className="rounded-xl border border-gray-200 bg-white/95 px-4 py-3 flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-semibold text-[#111827]">
                      {lecture.title}
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      {isComingSoon ? 'Coming soon' : file.label}
                    </div>
                  </div>

                  {isComingSoon ? (
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                      Coming soon
                    </span>
                  ) : (
                    <button
                      onClick={() => file.url && handleFileClick(file.url)}
                      className="text-xs px-3 py-1 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
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

