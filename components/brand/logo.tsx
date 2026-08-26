import Image from "next/image";
import { cn } from "@/lib/utils";

const NATURAL_WIDTH = 269;
const NATURAL_HEIGHT = 194;

interface LogoProps {
  height?: number;
  className?: string;
}

export function Logo({ height = 40, className }: LogoProps) {
  const width = Math.round((height * NATURAL_WIDTH) / NATURAL_HEIGHT);

  return (
    <Image
      src="/brand/logo-main.png"
      alt="NovaForça Jiu-Jitsu"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority
    />
  );
}
