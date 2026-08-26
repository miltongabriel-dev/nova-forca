import { Play, Radio, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/nav/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { liveSessions, dependents } from "@/lib/mock-data";

export default function LivePage() {
  return (
    <>
      <SectionHeader title="Live" subtitle="Class livestreams." icon={Radio} />
      <main className="mx-auto max-w-lg space-y-6 px-4 py-5">
        <section className="space-y-3">
          {liveSessions.map((session) => {
            const isLive = session.status === "scheduled";
            return (
              <Card key={session.id} className="overflow-hidden">
                <div className="relative flex h-40 items-center justify-center bg-ink">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                    <Play size={24} fill="currentColor" />
                  </div>
                  {isLive && (
                    <Badge tone="accent" className="absolute left-3 top-3 bg-accent text-accent-on">
                      <Radio size={12} /> Live today
                    </Badge>
                  )}
                </div>
                <CardContent className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-ink">{session.className}</p>
                    <p className="text-xs text-ink-muted">{session.scheduledAt}</p>
                  </div>
                  <Button size="sm" variant={isLive ? "primary" : "outline"} disabled={!isLive}>
                    {isLive ? "Watch" : "Ended"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section>
          <h2 className="mb-1 font-display text-base uppercase tracking-wide text-ink">
            Kids class access
          </h2>
          <p className="mb-3 text-sm text-ink-muted">
            For safety, livestreams of kids classes are only released to a child's approved
            guardians.
          </p>
          <div className="space-y-2.5">
            {dependents.map((dep) => (
              <Card key={dep.id} className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-muted text-ink">
                  <ShieldCheck size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-ink">{dep.name}</p>
                  <p className="text-xs text-ink-muted">{dep.className}</p>
                </div>
                <Badge tone="dark">Access granted</Badge>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
