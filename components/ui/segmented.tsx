"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SegmentedProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Segmented({ options, defaultValue, onChange, className }: SegmentedProps) {
  const [active, setActive] = useState(defaultValue ?? options[0]);

  function select(opt: string) {
    setActive(opt);
    onChange?.(opt);
  }

  return (
    <div className={cn("flex gap-2 overflow-x-auto no-scrollbar", className)}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => select(opt)}
          className={cn(
            "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            active === opt
              ? "bg-accent text-accent-on"
              : "bg-surface-muted text-ink-muted hover:text-ink",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
