"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/admin/members", label: "Members" },
  { href: "/admin/approvals", label: "Approvals" },
  { href: "/admin/announcements", label: "Announcements" },
];

export function AdminTabs() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 overflow-x-auto no-scrollbar">
      {tabs.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              active ? "bg-ink text-bg" : "text-ink-muted hover:bg-surface-muted",
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
