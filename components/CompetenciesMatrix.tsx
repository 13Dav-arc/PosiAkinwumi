"use client";

import React, { useRef, useEffect } from "react";
import { COMPETENCIES } from "@/lib/data";
import { Layout, Cpu, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  "Frontend Engineering": <Layout className="h-5 w-5 text-accent" />,
  "Web Accessibility (a11y)": <ShieldCheck className="h-5 w-5 text-accent" />,
  "Systems & Architecture": <Cpu className="h-5 w-5 text-accent" />,
};

export default function CompetenciesMatrix() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children ? Array.from(cardsRef.current.children) : [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="matrix"
      ref={containerRef}
      className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background border-b border-border transition-colors duration-300 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="h-px w-6 bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-medium">
            Capabilities
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
          What I Do
        </h2>
        <p className="text-muted-fg text-sm sm:text-base max-w-2xl font-sans mb-12 leading-relaxed">
          The technical domains and core tools I bring to engineering teams and digital products.
        </p>

        {/* 3-Domain Editorial Grid on Desktop, Horizontal Swipe Carousel on Mobile/Tablet */}
        <div
          ref={cardsRef}
          data-lenis-prevent
          className="flex lg:grid overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none gap-4 lg:gap-8 pb-4 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid-cols-3"
        >
          {COMPETENCIES.map((category) => (
            <div
              key={category.domain}
              className="w-[82vw] sm:w-[60vw] lg:w-auto shrink-0 lg:shrink snap-center group p-6 sm:p-8 rounded-2xl border border-border bg-surface hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised transition-all duration-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-raised">
                    {DOMAIN_ICONS[category.domain]}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {category.domain}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-fg mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 text-xs font-sans rounded-lg bg-surface-raised border border-border text-foreground/85 hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:text-accent transition-all duration-200 cursor-default font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimal Card Footer */}
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-sans text-muted-fg">
                <span>Core Discipline</span>
                <span className="text-accent font-medium">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
