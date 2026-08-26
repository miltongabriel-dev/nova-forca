import Link from "next/link";
import { CalendarDays, GraduationCap, Users, Wallet, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Schedule: CalendarDays,
  "My Growth": GraduationCap,
  Community: Users,
  Membership: Wallet,
};

export function QuickActions({ actions }: { actions: { label: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {actions.map(({ label, href }) => {
        const Icon = icons[label] ?? CalendarDays;
        return (
          <Link
            key={label}
            href={href}
            className="flex flex-col items-center gap-2 rounded-xl2 border border-border bg-surface px-2 py-4 text-center shadow-soft"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon size={18} />
            </div>
            <span className="text-[11px] font-semibold leading-tight text-ink">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
