"use client";

import { cn } from "@/lib/utils";
import type { weekDays } from "@/lib/mock-data";

interface WeekStripProps {
  days: typeof weekDays;
  active: string;
  onSelect: (key: string) => void;
}

export function WeekStrip({ days, active, onSelect }: WeekStripProps) {
  return (
    <div className="flex justify-between gap-1.5">
      {days.map((d) => {
        const isActive = d.key === active;
        return (
          <button
            key={d.key}
            type="button"
            onClick={() => onSelect(d.key)}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 rounded-xl py-2.5 text-xs font-bold transition-colors",
              isActive ? "bg-accent text-accent-on" : "bg-surface text-ink-muted border border-border",
            )}
          >
            <span className="text-[10px] tracking-wide">{d.label}</span>
            <span className="font-display text-base leading-none">{d.date}</span>
          </button>
        );
      })}
    </div>
  );
}
