import { Clock, CalendarCheck2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { instructors as instructorsData, availableSlots as slotsData, myBookings as bookingsData } from "@/lib/mock-data";

interface PrivateViewProps {
  instructors: typeof instructorsData;
  availableSlots: typeof slotsData;
  myBookings: typeof bookingsData;
}

export function PrivateView({ instructors, availableSlots, myBookings }: PrivateViewProps) {
  return (
    <div className="space-y-6">
      {myBookings.length > 0 && (
        <section>
          <h2 className="mb-3 font-display text-base text-ink">My private lessons</h2>
          <div className="space-y-3">
            {myBookings.map((b) => (
              <Card key={b.id} className="flex items-center gap-3 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <CalendarCheck2 size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-ink">{b.instructor}</p>
                  <p className="text-xs text-ink-muted">
                    {b.date} · {b.time}
                  </p>
                </div>
                <Badge tone="accent">{b.status}</Badge>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-3 font-display text-base text-ink">Available coaches</h2>
        <div className="space-y-3">
          {instructors.map((inst) => (
            <Card key={inst.id}>
              <CardContent className="flex gap-3">
                <Avatar name={inst.avatarSeed} size="lg" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-ink">{inst.name}</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {inst.specialties.map((s) => (
                      <Badge key={s} tone="neutral">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-ink-muted">
                    Private lesson ·{" "}
                    <span className="font-bold text-ink">£{inst.price}</span>/hour
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-display text-base text-ink">Open slots this week</h2>
        <div className="space-y-2.5">
          {availableSlots.map((slot) => {
            const inst = instructors.find((i) => i.id === slot.instructorId);
            return (
              <Card key={slot.id} className="flex items-center gap-3 p-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-muted text-ink-muted">
                  <Clock size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-ink">
                    {slot.weekday}, {slot.time}
                  </p>
                  <p className="text-xs text-ink-muted">{inst?.name}</p>
                </div>
                <Button size="sm">Book</Button>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
