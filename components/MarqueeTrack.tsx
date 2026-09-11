"use client";

import React, { useRef, useEffect } from "react";
import { MARQUEE_ITEMS } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MarqueeTrack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const track = trackRef.current;
    if (!track) return;

    let xPos = 0;
    // Micro-fractional percent delta for a calm, serene ambient glide (~30s full cycle)
    const baseSpeed = 0.035;
    let scrollVelocity = 0;

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity() / 1500);
          scrollVelocity = Math.min(velocity, 0.2);
        },
      });

      const tickerFunc = () => {
        // Pause animation when user hovers over the track
        if (isPausedRef.current) return;

        scrollVelocity *= 0.94; // Smooth decay
        const totalDelta = baseSpeed + scrollVelocity;
        xPos -= totalDelta;

        if (xPos <= -50) {
          xPos = 0;
        }

        gsap.set(track, { xPercent: xPos });
      };

      gsap.ticker.add(tickerFunc);

      return () => {
        gsap.ticker.remove(tickerFunc);
        st.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="marquee"
      ref={containerRef}
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
      className="relative w-full py-4 sm:py-5 bg-surface/50 border-y border-border overflow-hidden select-none transition-colors duration-300 cursor-default"
      aria-hidden="true"
    >
      <div className="flex w-fit whitespace-nowrap will-change-transform" ref={trackRef}>
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center gap-8 sm:gap-14 shrink-0 px-4 sm:px-6">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={`${copyIndex}-${idx}`} className="flex items-center gap-8 sm:gap-14">
                <span className="text-xs sm:text-sm font-sans tracking-wide text-muted-fg font-medium hover:text-foreground transition-colors">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-accent/60" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
