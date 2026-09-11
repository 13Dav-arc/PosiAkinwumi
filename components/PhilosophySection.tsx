"use client";

import React, { useRef, useEffect } from "react";
import { PHILOSOPHY, CRAFT_VALUES } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const words = PHILOSOPHY.split(" ");

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        wordsRef.current.forEach((el) => {
          if (el) gsap.set(el, { opacity: 1 });
        });
        return;
      }

      // Word-by-word progressive illumination on scroll
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 50%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative w-full py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-background border-b border-border transition-colors duration-300 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-12">
          <span className="h-px w-6 bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-medium">
            Philosophy
          </span>
        </div>

        {/* Human Editorial Statement */}
        <div
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-semibold tracking-tight leading-[1.25] sm:leading-[1.2] text-foreground"
          aria-label={PHILOSOPHY}
        >
          {words.map((word, idx) => (
            <span
              key={idx}
              ref={(el) => {
                wordsRef.current[idx] = el;
              }}
              className="inline-block mr-[0.28em] will-change-[opacity] transition-colors duration-200"
            >
              {word}
            </span>
          ))}
        </div>

        {/* Human Craft Principles without numbering badges */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-10 border-t border-border">
          {CRAFT_VALUES.map((val) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl border border-border bg-surface hover:ring-1 hover:ring-[#d4a359] hover:border-transparent transition-all duration-200 shadow-sm"
            >
              <h3 className="text-base font-semibold text-foreground">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-fg mt-2.5 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
