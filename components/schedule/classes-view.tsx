"use client";

import { useState } from "react";
import { Clock, Heart } from "lucide-react";
import { WeekStrip } from "@/components/schedule/week-strip";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { weekDays, weekSchedule } from "@/lib/mock-data";

interface ClassesViewProps {
  days: typeof weekDays;
  schedule: typeof weekSchedule;
}

export function ClassesView({ days, schedule }: ClassesViewProps) {
  const [active, setActive] = useState(days[1]?.key ?? days[0]?.key ?? "");
  const classes = schedule[active] ?? [];

  return (
    <div className="space-y-4">
      <WeekStrip days={days} active={active} onSelect={setActive} />

      <div className="space-y-2.5">
        {classes.length === 0 && (
          <p className="py-10 text-center text-sm text-ink-muted">No classes on this day.</p>
        )}
        {classes.map((c) => (
          <Card key={c.id} className="flex items-center gap-3 p-3.5">
            <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-surface-muted text-ink-muted">
              <Clock size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
                {c.time} · {c.name}
                {c.family && <Heart size={13} className="fill-accent text-accent" />}
              </p>
              <p className="truncate text-xs text-ink-muted">{c.instructor}</p>
            </div>
            <Badge tone={c.vagas ? "accent" : "neutral"}>
              {c.vagas ? "Spaces" : "Full"}
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}
