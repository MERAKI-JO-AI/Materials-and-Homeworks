import { Week } from '../data/weeks';

interface WeekCardProps {
  week: Week;
  onClick: () => void;
}

export const WeekCard = ({ week, onClick }: WeekCardProps) => {
  return (
    <div
      onClick={onClick}
      className="w-full rounded-2xl bg-card text-textMain shadow-lg px-4 py-4 sm:px-6 sm:py-5 border border-transparent hover:border-accent hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
    >
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111827] mb-4">
        Week {week.id}
      </h3>
      <ul className="mt-3 space-y-1 text-xs sm:text-sm md:text-base text-[#4B5563]">
        {week.lectures.map((lecture) => (
          <li key={lecture.id} className="flex items-start gap-2">
            <span className="text-[#4B5563] mt-1 flex-shrink-0">•</span>
            <span className="break-words">{lecture.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

