import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { members } from "@/lib/mock-data";

const statusTone = {
  active: "accent",
  pending: "neutral",
  inactive: "neutral",
} as const;

export default function AdminMembersPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Members</h1>
        <p className="text-sm text-ink-muted">Students, guardians, instructors and dependants of the academy.</p>
      </div>

      <div className="relative">
        <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint" />
        <input
          placeholder="Search by name..."
          className="h-11 w-full rounded-xl border border-border bg-surface pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <Card className="divide-y divide-border overflow-hidden">
        {members.map((m) => (
          <div key={m.id} className="flex items-center gap-3 px-4 py-3.5">
            <Avatar name={m.name} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-ink">{m.name}</p>
              <p className="text-xs text-ink-muted">
                {m.role} · {m.belt} belt
              </p>
            </div>
            <Badge tone={statusTone[m.status]}>{m.status}</Badge>
          </div>
        ))}
      </Card>
    </div>
  );
}
