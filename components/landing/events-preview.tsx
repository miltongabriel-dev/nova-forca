import { PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/lib/mock-data";

export function EventsPreview() {
  const events = posts.filter((p) => p.category === "event" || p.category === "action");

  return (
    <div className="space-y-3">
      {events.map((event) => (
        <Card key={event.id} className="p-4">
          <Badge tone="dark" className="mb-2">
            <PartyPopper size={12} /> {event.category === "event" ? "Event" : "Community Action"}
          </Badge>
          <p className="font-display text-base leading-tight text-ink">{event.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">{event.body}</p>
        </Card>
      ))}
    </div>
  );
}
