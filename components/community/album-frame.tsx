import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlbumFrameProps {
  className?: string;
}

export function AlbumFrame({ className }: AlbumFrameProps) {
  return (
    <div className={cn("relative aspect-[706/488] w-full overflow-hidden rounded-lg", className)}>
      <div className="absolute inset-[6%] flex items-center justify-center bg-surface-muted">
        <Camera size={28} className="text-ink-faint" strokeWidth={1.5} />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/frame.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-fill"
      />
    </div>
  );
}
