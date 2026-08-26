interface SplashScreenProps {
  reduceMotion: boolean;
}

const OUTLINE = "#ffffff";

export function SplashScreen({ reduceMotion }: SplashScreenProps) {
  const cls = (animated: string) => (reduceMotion ? "" : animated);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111111] ${cls("splash-overlay")}`}
      aria-hidden
    >
      <svg
        width="180"
        height="120"
        viewBox="0 0 240 160"
        fill="none"
        className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
      >
        <rect
          x="6"
          y="68"
          width="110"
          height="22"
          rx="11"
          stroke={OUTLINE}
          strokeWidth="2"
          className={reduceMotion ? "" : "splash-strap splash-strap-left"}
          style={reduceMotion ? { fill: "var(--belt-black)" } : undefined}
        />
        <rect
          x="124"
          y="68"
          width="110"
          height="22"
          rx="11"
          stroke={OUTLINE}
          strokeWidth="2"
          className={reduceMotion ? "" : "splash-strap splash-strap-right"}
          style={reduceMotion ? { fill: "var(--belt-black)" } : undefined}
        />
        <path
          d="M112 96 C 104 112, 96 122, 92 138"
          stroke={OUTLINE}
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          className={cls("splash-tail")}
          style={reduceMotion ? { opacity: 1 } : undefined}
        />
        <path
          d="M128 96 C 136 112, 144 122, 148 138"
          stroke={OUTLINE}
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          className={cls("splash-tail")}
          style={reduceMotion ? { opacity: 1 } : undefined}
        />
        <rect
          x="100"
          y="56"
          width="40"
          height="46"
          rx="12"
          stroke={OUTLINE}
          strokeWidth="2"
          className={cls("splash-knot")}
          style={reduceMotion ? { opacity: 1, fill: "var(--belt-black)" } : undefined}
        />
      </svg>

      <p
        className={`font-display mt-5 text-2xl text-white ${cls("splash-wordmark")}`}
        style={reduceMotion ? { opacity: 1 } : undefined}
      >
        Nova<span className="text-[#ff4438]">Força</span>
      </p>
    </div>
  );
}
