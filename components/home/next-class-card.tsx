import Link from "next/link";
import { Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NextClassCardProps {
  name: string;
  time: string;
  instructor: string;
}

export function NextClassCard({ name, time, instructor }: NextClassCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl2 bg-accent p-5 text-accent-on shadow-lift">
      <Sparkle
        size={140}
        strokeWidth={1}
        className="pointer-events-none absolute -right-8 -top-8 text-white/10"
      />
      <p className="text-xs font-bold uppercase tracking-wide text-accent-on/70">Next class</p>
      <p className="font-display mt-1 text-2xl leading-tight">{name}</p>
      <p className="mt-1 text-sm text-accent-on/85">
        {time} · {instructor}
      </p>
      <Link href="/schedule">
        <Button
          size="sm"
          className="mt-4 bg-white/15 text-accent-on hover:bg-white/25"
        >
          View details
        </Button>
      </Link>
    </div>
  );
}
