import Link from "next/link";
import { ChevronRight, LogOut, Bell, ShieldCheck, HelpCircle, Plus, Wallet, UserRound } from "lucide-react";
import { SectionHeader } from "@/components/nav/section-header";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { BeltBadge } from "@/components/ui/belt-badge";
import { Button } from "@/components/ui/button";
import { currentUser, dependents } from "@/lib/mock-data";

const menu = [
  { label: "Membership", icon: Wallet, href: "/membership" },
  { label: "Notifications", icon: Bell, href: "#" },
  { label: "Privacy & livestream access", icon: ShieldCheck, href: "#" },
  { label: "Help & support", icon: HelpCircle, href: "#" },
];

export default function ProfilePage() {
  return (
    <>
      <SectionHeader title="Profile" subtitle="Your account and your family on the mats." icon={UserRound} />
      <main className="mx-auto max-w-lg space-y-5 px-4 py-5">
        <Card className="flex flex-col items-center gap-3 p-6 text-center">
          <Avatar name={currentUser.name} size="lg" />
          <div>
            <p className="font-display text-xl text-ink">{currentUser.name}</p>
            <p className="text-sm text-ink-muted">Guardian · Adult student</p>
          </div>
          <div className="flex items-center gap-3">
            <BeltBadge rank={currentUser.beltRank} degree={currentUser.beltDegree} />
            <Link href="/growth" className="text-xs font-semibold text-accent">
              View progress →
            </Link>
          </div>
        </Card>

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-base text-ink">My family on the mats</h2>
            <button className="flex items-center gap-1 text-xs font-semibold text-accent">
              <Plus size={14} /> Add
            </button>
          </div>
          <div className="space-y-3">
            {dependents.map((dep) => (
              <Card key={dep.id} className="flex items-center gap-3 p-4">
                <Avatar name={dep.name} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-ink">
                    {dep.name} <span className="font-normal text-ink-muted">· {dep.age} yrs</span>
                  </p>
                  <p className="truncate text-xs text-ink-muted">{dep.className}</p>
                  <div className="mt-1.5">
                    <BeltBadge rank={dep.beltRank} degree={dep.beltDegree} />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display text-lg text-accent">{dep.attendanceRate}%</p>
                  <p className="text-[10px] uppercase tracking-wide text-ink-faint">attendance</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 font-display text-base text-ink">Account</h2>
          <Card className="divide-y divide-border overflow-hidden">
            {menu.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-sm font-medium text-ink hover:bg-surface-muted"
              >
                <Icon size={18} className="text-ink-muted" />
                <span className="flex-1">{label}</span>
                <ChevronRight size={16} className="text-ink-faint" />
              </Link>
            ))}
          </Card>
        </section>

        <Button variant="outline" className="w-full">
          <LogOut size={16} /> Sign out
        </Button>
      </main>
    </>
  );
}
