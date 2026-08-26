import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { pendingApprovals } from "@/lib/mock-data";

export default function AdminApprovalsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Approvals</h1>
        <p className="text-sm text-ink-muted">
          New sign-ups waiting for confirmation before they can access the community.
        </p>
      </div>

      {pendingApprovals.length === 0 ? (
        <Card className="p-8 text-center text-sm text-ink-muted">
          No pending approvals. All caught up!
        </Card>
      ) : (
        <div className="space-y-3">
          {pendingApprovals.map((p) => (
            <Card key={p.id} className="flex items-center gap-3 p-4">
              <Avatar name={p.name} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-ink">{p.name}</p>
                <p className="text-xs text-ink-muted">
                  {p.relation} · {p.requestedAt}
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="!h-9 !w-9 !px-0">
                  <X size={16} />
                </Button>
                <Button size="sm" className="!h-9 !w-9 !px-0">
                  <Check size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
