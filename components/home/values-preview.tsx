import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RadialGauge } from "@/components/ui/radial-gauge";
import type { values as valuesData } from "@/lib/mock-data";

export function ValuesPreview({ values }: { values: typeof valuesData }) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-base text-ink">My values</h2>
        <Link href="/growth" className="flex items-center gap-0.5 text-xs font-semibold text-accent">
          View all <ChevronRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {values.slice(0, 4).map((v) => (
          <RadialGauge key={v.id} value={v.score} size={56} strokeWidth={5} label={v.name} />
        ))}
      </div>
    </section>
  );
}
