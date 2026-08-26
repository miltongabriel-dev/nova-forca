import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className, ...props }, ref) => (
    <label className="block" htmlFor={id}>
      {label && (
        <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          "h-12 w-full rounded-xl border border-border bg-surface px-4 text-[15px] text-ink placeholder:text-ink-faint",
          "outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20",
          className,
        )}
        {...props}
      />
    </label>
  ),
);
Input.displayName = "Input";
