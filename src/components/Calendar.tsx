import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface CalendarProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}

export default function Calendar({ selectedDate, onSelect }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const handlePrevMonth = () => {
    // Prevent navigating to months before the current real month
    const prev = new Date(year, month - 1, 1);
    if (prev < new Date(today.getFullYear(), today.getMonth(), 1)) return;
    setCurrentMonth(prev);
  };
  const handleNextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-10"></div>);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const isPast = date < today;
    const isSelected = selectedDate?.toDateString() === date.toDateString();
    const isToday = today.toDateString() === date.toDateString();

    days.push(
      <button
        key={d}
        disabled={isPast}
        onClick={() => onSelect(date)}
        className={cn(
          "h-10 w-10 text-sm rounded-full flex items-center justify-center transition-all mx-auto font-medium",
          isPast && "opacity-30 cursor-not-allowed text-on-surface-variant",
          !isPast && !isSelected && "hover:bg-surface-variant text-on-surface",
          isSelected && "bg-primary text-white shadow-md shadow-primary/30 font-bold",
          !isSelected && isToday && "ring-1 ring-primary text-primary"
        )}
      >
        {d}
      </button>
    );
  }

  const isPrevDisabled = currentMonth <= new Date(today.getFullYear(), today.getMonth(), 1);

  return (
    <div className="bg-surface-container-highest p-6 rounded-[1.5rem]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline font-extrabold text-xl text-on-surface tracking-tight">
          {monthNames[month]} {year}
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={handlePrevMonth} 
            disabled={isPrevDisabled}
            className="p-2 rounded-full bg-surface-container-low hover:bg-surface-variant transition-colors text-on-surface-variant disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={handleNextMonth} className="p-2 rounded-full bg-surface-container-low hover:bg-surface-variant transition-colors text-on-surface-variant">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-2">
        {days}
      </div>
    </div>
  );
}
