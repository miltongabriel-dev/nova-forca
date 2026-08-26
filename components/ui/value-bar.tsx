import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueBarProps {
  icon: LucideIcon;
  name: string;
  description: string;
  score: number;
  max?: number;
  tone?: "accent" | "neutral";
  className?: string;
}

export function ValueBar({
  icon: Icon,
  name,
  description,
  score,
  max = 5,
  tone = "accent",
  className,
}: ValueBarProps) {
  const pct = Math.min((score / max) * 100, 100);

  return (
    <div className={cn("flex gap-3", className)}>
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
          tone === "accent" ? "bg-accent-soft text-accent" : "bg-surface-muted text-ink",
        )}
      >
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-sm font-bold text-ink">{name}</p>
          <p className="shrink-0 text-sm font-bold text-ink">
            {score.toFixed(1)}
            <span className="font-normal text-ink-faint">/{max}</span>
          </p>
        </div>
        <p className="text-xs text-ink-muted">{description}</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
          <div
            className={cn("h-full rounded-full", tone === "accent" ? "bg-accent" : "bg-ink")}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
