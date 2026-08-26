import { Clock } from "lucide-react";
import type { weekDays as weekDaysData, weekSchedule as weekScheduleData } from "@/lib/mock-data";

interface WeeklyScheduleCardsProps {
  weekDays: typeof weekDaysData;
  weekSchedule: typeof weekScheduleData;
}

export function WeeklyScheduleCards({ weekDays, weekSchedule }: WeeklyScheduleCardsProps) {
  const days = weekDays.filter((d) => weekSchedule[d.key]?.length);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {days.map((day) => {
        const first = weekSchedule[day.key]?.[0];
        if (!first) return null;
        return (
          <div key={day.key} className="rounded-xl2 bg-[#111111] p-4 text-white">
            <Clock size={16} className="text-accent" />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-white/60">
              {day.label}
            </p>
            <p className="font-display mt-1 text-sm leading-tight">{first.name}</p>
            <p className="mt-1 text-xs text-white/60">{first.time}</p>
          </div>
        );
      })}
    </div>
  );
}
