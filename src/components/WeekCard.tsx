import { Week } from '../data/weeks';

interface WeekCardProps {
  week: Week;
  onClick: () => void;
}

export const WeekCard = ({ week, onClick }: WeekCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-card text-textMain shadow-[0_15px_40px_rgba(0,0,0,0.25)] rounded-2xl p-6 border border-transparent hover:border-accent hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ml-8 sm:ml-12"
    >
      <div className="text-xs font-semibold tracking-widest text-accent mb-2">
        {week.label.toUpperCase()}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-4">{week.label}</h3>
      <ul className="mt-3 space-y-1 text-sm md:text-base text-[#4B5563]">
        {week.lectures.map((lecture) => (
          <li key={lecture.id} className="flex items-start gap-2">
            <span className="text-[#4B5563] mt-1">•</span>
            <span>{lecture.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

