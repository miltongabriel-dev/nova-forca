import Image from "next/image";
import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-8 w-8",
  md: "h-11 w-11",
  lg: "h-16 w-16",
};

interface AvatarProps {
  name: string;
  size?: keyof typeof sizes;
  className?: string;
}

export function Avatar({ name, size = "md", className }: AvatarProps) {
  return (
    <div className={cn("relative shrink-0 overflow-hidden rounded-full", sizes[size], className)}>
      <Image
        src="/brand/avatar-default.png"
        alt={name}
        fill
        sizes="64px"
        className="object-cover"
      />
    </div>
  );
}
