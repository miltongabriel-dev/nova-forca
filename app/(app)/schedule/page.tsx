import { CalendarDays } from "lucide-react";
import { SectionHeader } from "@/components/nav/section-header";
import { ScheduleTabs } from "@/components/schedule/schedule-tabs";
import { weekDays, weekSchedule, instructors, availableSlots, myBookings } from "@/lib/mock-data";

export default function SchedulePage() {
  return (
    <>
      <SectionHeader title="Schedule" subtitle="Classes and private lessons." icon={CalendarDays} />
      <main className="mx-auto max-w-lg px-4 py-5">
        <ScheduleTabs
          weekDays={weekDays}
          weekSchedule={weekSchedule}
          instructors={instructors}
          availableSlots={availableSlots}
          myBookings={myBookings}
        />
      </main>
    </>
  );
}
