"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarDays, Users, GraduationCap, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/schedule", label: "Schedule", icon: CalendarDays },
  { href: "/community", label: "Community", icon: Users },
  { href: "/growth", label: "Growth", icon: GraduationCap },
  { href: "/profile", label: "Profile", icon: UserRound },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface shadow-[0_-2px_12px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-lg items-stretch justify-around">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-semibold"
            >
              <Icon
                size={21}
                strokeWidth={active ? 2.5 : 2}
                className={active ? "text-accent" : "text-ink-faint"}
              />
              <span className={active ? "text-accent" : "text-ink-faint"}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
