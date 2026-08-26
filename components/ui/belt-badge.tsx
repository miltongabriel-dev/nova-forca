import { cn } from "@/lib/utils";

const beltColors: Record<string, string> = {
  white: "var(--belt-white)",
  grey: "var(--belt-white)",
  blue: "var(--belt-blue)",
  purple: "var(--belt-purple)",
  brown: "var(--belt-brown)",
  black: "var(--belt-black)",
};

interface BeltBadgeProps {
  rank: string;
  degree?: number;
  className?: string;
}

export function BeltBadge({ rank, degree = 0, className }: BeltBadgeProps) {
  const key = rank.toLowerCase();
  const color = beltColors[key] ?? beltColors.white;

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <div
        className="flex h-6 w-24 items-center overflow-hidden rounded-md border border-black/10 shadow-sm"
        style={{ backgroundColor: color }}
      >
        <div className="ml-auto flex h-full w-8 items-center justify-center gap-[3px] bg-ink">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-2.5 w-[3px] rounded-full",
                i < degree ? "bg-accent" : "bg-white/15",
              )}
            />
          ))}
        </div>
      </div>
      <span className="text-sm font-semibold capitalize text-ink">{key} belt</span>
    </div>
  );
}
