import { BeltBadge } from "@/components/ui/belt-badge";
import type { team as teamData } from "@/lib/mock-data";

export function InstructorGrid({ team }: { team: typeof teamData }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {team.map((coach) => (
        <div key={coach.id} className="flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-surface-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/instructor-default.png"
              alt={coach.name}
              className="h-[85%] w-[85%] object-contain"
            />
          </div>
          <p className="font-display mt-3 text-base text-ink">{coach.name}</p>
          <p className="text-xs font-bold uppercase tracking-wide text-accent">{coach.role}</p>
          <p className="mt-1 text-xs text-ink-muted">{coach.specialty}</p>
          <BeltBadge rank={coach.belt} className="mt-2" />
        </div>
      ))}
    </div>
  );
}
