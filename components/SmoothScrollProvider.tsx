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
    // Strict client execution guard
    if (typeof window === "undefined") return;

    // Register ScrollTrigger safely
    gsap.registerPlugin(ScrollTrigger);

    // Skip Lenis virtual touch scrolling on mobile viewports (< 1024px)
    // Mobile browsers have native hardware momentum scrolling on the GPU compositor thread
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      delete (window as any).lenis;
      return;
    }

    // Instantiate Lenis for desktop with touch completely disabled
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touch: false, // Critical: let native browser compositor handle any touch input
    } as any);

    // Expose lenis instance globally for programmatic smooth scrolling on desktop
    (window as any).lenis = lenis;

    // Synchronize Lenis scroll updates with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Ticker callback for unified 60 FPS requestAnimationFrame loop
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Clean up if window is resized down to mobile
    const handleResize = () => {
      if (window.innerWidth < 1024 && (window as any).lenis) {
        gsap.ticker.remove(tickerCallback);
        delete (window as any).lenis;
        lenis.destroy();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(tickerCallback);
      delete (window as any).lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
