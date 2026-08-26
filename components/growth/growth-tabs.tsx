"use client";

import { useState } from "react";
import { Handshake, ShieldCheck, Waves, Landmark, Users, HeartHandshake } from "lucide-react";
import { Segmented } from "@/components/ui/segmented";
import { Card, CardContent } from "@/components/ui/card";
import { RadialGauge } from "@/components/ui/radial-gauge";
import { ValueBar } from "@/components/ui/value-bar";
import { BeltBadge } from "@/components/ui/belt-badge";
import type { values as valuesData, graduationHistory as historyData } from "@/lib/mock-data";

const icons = { Handshake, ShieldCheck, Waves, Landmark, Users };

interface GrowthTabsProps {
  values: typeof valuesData;
  average: number;
  currentRank: string;
  currentDegree: number;
  history: typeof historyData;
}

export function GrowthTabs({ values, average, currentRank, currentDegree, history }: GrowthTabsProps) {
  const [tab, setTab] = useState("Values");

  return (
    <div className="space-y-5">
      <Segmented options={["Values", "Belt"]} onChange={setTab} />

      {tab === "Values" ? (
        <div className="space-y-4">
          <Card>
            <CardContent className="flex items-center gap-4">
              <RadialGauge value={average} size={64} strokeWidth={6} />
              <div>
                <p className="text-sm font-bold text-ink">Overview</p>
                <p className="text-xs text-ink-muted">You're growing across every value. Keep it up!</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-5">
              {values.map((v) => (
                <ValueBar
                  key={v.id}
                  icon={icons[v.icon]}
                  name={v.name}
                  description={v.description}
                  score={v.score}
                  tone={v.tone}
                />
              ))}
            </CardContent>
          </Card>

          <div className="flex items-center gap-3 rounded-xl2 bg-accent p-5 text-accent-on shadow-soft">
            <HeartHandshake size={28} className="shrink-0" />
            <p className="text-sm leading-snug">
              <span className="font-display block text-base">Small actions, big change.</span>
              You're building a legacy that will stay with you for life.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <Card className="flex flex-col items-center gap-2 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Current belt</p>
            <BeltBadge rank={currentRank} degree={currentDegree} />
          </Card>

          <div>
            <h2 className="mb-3 font-display text-base text-ink">Grading history</h2>
            <div className="space-y-3">
              {history.map((g) => (
                <Card key={g.id} className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <BeltBadge rank={g.rank} degree={g.degree} />
                    <p className="shrink-0 text-xs font-bold text-ink-muted">{g.date}</p>
                  </div>
                  <p className="mt-2 text-xs text-ink-muted">{g.notes}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
