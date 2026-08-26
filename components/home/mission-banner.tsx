import { Heart } from "lucide-react";

export function MissionBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl2 bg-[#111111] p-6 text-[#ffffff]">
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/5" />
      <div className="absolute -bottom-8 left-10 h-24 w-24 rounded-full bg-white/5" />
      <Heart size={20} className="text-accent" fill="currentColor" />
      <p className="font-display mt-3 text-xl leading-tight">
        Here, we build character and family.
      </p>
      <p className="mt-2 text-sm text-[#ffffff]/70">
        Discipline on the mats. Respect for life. Family forever.
      </p>
    </div>
  );
}
