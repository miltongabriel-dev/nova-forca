"use client";

import { useState } from "react";
import { Segmented } from "@/components/ui/segmented";
import { ClassesView } from "@/components/schedule/classes-view";
import { PrivateView } from "@/components/schedule/private-view";
import type {
  weekDays as weekDaysData,
  weekSchedule as weekScheduleData,
  instructors as instructorsData,
  availableSlots as slotsData,
  myBookings as bookingsData,
} from "@/lib/mock-data";

interface ScheduleTabsProps {
  weekDays: typeof weekDaysData;
  weekSchedule: typeof weekScheduleData;
  instructors: typeof instructorsData;
  availableSlots: typeof slotsData;
  myBookings: typeof bookingsData;
}

export function ScheduleTabs({ weekDays, weekSchedule, instructors, availableSlots, myBookings }: ScheduleTabsProps) {
  const [tab, setTab] = useState("Classes");

  return (
    <div className="space-y-5">
      <Segmented options={["Classes", "Private"]} onChange={setTab} />
      {tab === "Classes" ? (
        <ClassesView days={weekDays} schedule={weekSchedule} />
      ) : (
        <PrivateView instructors={instructors} availableSlots={availableSlots} myBookings={myBookings} />
      )}
    </div>
  );
}
