import { type LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  action?: React.ReactNode;
}

export function SectionHeader({ title, subtitle, icon: Icon, action }: SectionHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-accent px-5 pb-5 pt-6 text-accent-on">
      <div className="mx-auto flex max-w-lg items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
            <Icon size={18} />
          </div>
          <div>
            <h1 className="font-display text-2xl leading-tight">{title}</h1>
            {subtitle && <p className="text-sm text-accent-on/80">{subtitle}</p>}
          </div>
        </div>
        {action}
      </div>
    </header>
  );
}
