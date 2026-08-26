"use client";

import { useEffect, useState } from "react";
import { SplashScreen } from "@/components/splash/splash-screen";

export function SplashGate({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const timer = setTimeout(() => setVisible(false), mq.matches ? 550 : 2150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      {visible && <SplashScreen reduceMotion={reduceMotion} />}
    </>
  );
}
