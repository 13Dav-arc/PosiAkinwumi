"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis | null = null;
    let tickerCallback: ((time: number) => void) | null = null;

    const initLenis = () => {
      // Mobile & Tablet (< 1024px): Skip Lenis for 100% native GPU compositor momentum
      if (window.innerWidth < 1024) {
        if (lenis) {
          if (tickerCallback) gsap.ticker.remove(tickerCallback);
          delete (window as any).lenis;
          lenis.destroy();
          lenis = null;
          tickerCallback = null;
        }
        return;
      }

      // Desktop (>= 1024px): Initialize smooth wheel with touch disabled
      if (!lenis) {
        lenis = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touch: false, // Strict: never hijack touch gestures
        } as any);

        (window as any).lenis = lenis;
        lenis.on("scroll", ScrollTrigger.update);

        tickerCallback = (time: number) => {
          lenis?.raf(time * 1000);
        };

        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);
      }
    };

    initLenis();
    window.addEventListener("resize", initLenis);

    return () => {
      window.removeEventListener("resize", initLenis);
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      if (lenis) {
        delete (window as any).lenis;
        lenis.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
