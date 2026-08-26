import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const tones = {
  accent: "bg-accent-soft text-accent-strong",
  neutral: "bg-surface-muted text-ink-muted",
  dark: "bg-ink text-bg",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: keyof typeof tones;
}

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
