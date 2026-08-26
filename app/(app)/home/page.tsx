import Link from "next/link";
import { Radio } from "lucide-react";
import { GreetingHeader } from "@/components/nav/greeting-header";
import { NextClassCard } from "@/components/home/next-class-card";
import { QuickActions } from "@/components/home/quick-actions";
import { ValuesPreview } from "@/components/home/values-preview";
import { MissionBanner } from "@/components/home/mission-banner";
import { currentUser, nextClass, quickActions, values, liveSessions } from "@/lib/mock-data";

export default function HomePage() {
  const isLiveToday = liveSessions.some((s) => s.status === "scheduled");

  return (
    <>
      <GreetingHeader name={currentUser.name} />
      <main className="mx-auto max-w-lg space-y-6 px-4 py-5">
        {isLiveToday && (
          <Link
            href="/live"
            className="flex items-center gap-2 rounded-full bg-accent-soft px-4 py-2 text-xs font-bold uppercase tracking-wide text-accent-strong"
          >
            <Radio size={14} /> Live class today — tap to watch
          </Link>
        )}

        <NextClassCard {...nextClass} />

        <section>
          <h2 className="mb-3 font-display text-base text-ink">Quick actions</h2>
          <QuickActions actions={quickActions} />
        </section>

        <ValuesPreview values={values} />

        <MissionBanner />
      </main>
    </>
  );
}
