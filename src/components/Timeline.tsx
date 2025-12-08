import { Week } from '../data/weeks';
import { WeekCard } from './WeekCard';

interface TimelineProps {
  weeks: Week[];
  onWeekClick: (week: Week) => void;
}

export const Timeline = ({ weeks, onWeekClick }: TimelineProps) => {
  return (
    <div className="mt-10 space-y-6 sm:space-y-12 max-w-4xl mx-auto">
      {weeks.map((week, index) => (
        <div
          key={week.id}
          className="flex gap-4 sm:gap-6 items-stretch"
        >
          {/* Timeline column for this week */}
          <div className="flex flex-col items-center w-6 sm:w-8 flex-shrink-0">
            {/* Line above dot (hidden for first item) */}
            <div
              className={
                "w-px flex-1 bg-gray-500/60 " +
                (index === 0 ? "invisible" : "")
              }
            />

            {/* Dot */}
            <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-accent border-2 border-accent shadow-lg flex-shrink-0"></div>

            {/* Line below dot (hidden for last item) */}
            <div
              className={
                "w-px flex-1 bg-gray-500/60 " +
                (index === weeks.length - 1 ? "invisible" : "")
              }
            />
          </div>

          {/* Week card column */}
          <div className="flex-1 w-full min-w-0">
            <WeekCard
              week={week}
              onClick={() => onWeekClick(week)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};



