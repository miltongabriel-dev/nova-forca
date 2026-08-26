import Link from "next/link";
import { Bell } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Logo } from "@/components/brand/logo";

interface GreetingHeaderProps {
  name: string;
}

function firstName(name: string) {
  return name.trim().split(/\s+/)[0];
}

export function GreetingHeader({ name }: GreetingHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-lg items-center px-5 pt-3">
        <Logo height={24} />
      </div>
      <div className="mx-auto flex max-w-lg items-center gap-3 px-5 pb-4 pt-2">
        <Link href="/profile">
          <Avatar name={name} />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg leading-tight text-ink">Hi, {firstName(name)} 👋</p>
          <p className="text-xs text-ink-muted">Great to see you here!</p>
        </div>
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-full p-2 text-ink-muted hover:bg-surface-muted"
        >
          <Bell size={20} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
        </button>
      </div>
    </header>
  );
}
