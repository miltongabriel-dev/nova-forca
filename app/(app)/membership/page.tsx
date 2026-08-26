import { Wallet, CheckCircle2, CreditCard, Receipt } from "lucide-react";
import { SectionHeader } from "@/components/nav/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { membership } from "@/lib/mock-data";

export default function MembershipPage() {
  return (
    <>
      <SectionHeader title="Membership" subtitle="Your plan and payments." icon={Wallet} />
      <main className="mx-auto max-w-lg space-y-5 px-4 py-5">
        <Card>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-ink">{membership.plan}</p>
              <Badge tone="accent">
                <CheckCircle2 size={12} /> {membership.status}
              </Badge>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-surface-muted p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-ink-muted">
                <Receipt size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-ink-muted">Next payment</p>
                <p className="text-sm font-bold text-ink">
                  {membership.nextCharge} · {membership.amount}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-surface-muted p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-ink-muted">
                <CreditCard size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-ink-muted">Payment method</p>
                <p className="text-sm font-bold text-ink">{membership.method}</p>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              View payment history
            </Button>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
