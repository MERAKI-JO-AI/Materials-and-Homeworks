import { Week } from '../data/weeks';
import { WeekCard } from './WeekCard';

interface TimelineProps {
  weeks: Week[];
  onWeekClick: (week: Week) => void;
}

export const Timeline = ({ weeks, onWeekClick }: TimelineProps) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-500/60 rounded-full"></div>

      {/* Week cards */}
      <div className="space-y-12">
        {weeks.map((week) => (
          <div key={week.id} className="relative">
            {/* Dot */}
            <div className="absolute left-0 top-6 transform -translate-x-1/2">
              <div className="w-6 h-6 bg-accent rounded-full border-2 border-accent shadow-lg"></div>
            </div>

            {/* Week card */}
            <WeekCard 
              week={week} 
              onClick={() => onWeekClick(week)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};



