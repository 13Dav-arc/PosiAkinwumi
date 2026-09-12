"use client";

import React from "react";
import { COMPETENCIES } from "@/lib/data";
import {
  Layout,
  Cpu,
  ShieldCheck,
  Workflow,
  Wrench,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  "System Architecture & Product Flows": <Cpu className="h-5 w-5 text-accent" />,
  "Frontend Systems & UI/UX": <Layout className="h-5 w-5 text-accent" />,
  "Application & Concurrency Architecture": <Workflow className="h-5 w-5 text-accent" />,
  "Accessibility Engineering (a11y)": <ShieldCheck className="h-5 w-5 text-accent" />,
  "Automation & Developer Tooling": <Wrench className="h-5 w-5 text-accent" />,
  "Agentic AI & Engineering Multiplier": <Sparkles className="h-5 w-5 text-accent" />,
};

export default function CompetenciesMatrix() {
  return (
    <section
      id="matrix"
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
          The technical domains, system architecture disciplines, and core engineering practices I bring to teams.
        </p>

        {/* 6-Domain Editorial Grid on Desktop, Clean Swipe on Mobile/Tablet (Zero Scroll Hijacking) */}
        <div
          className="flex lg:grid overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none gap-4 lg:gap-8 pb-4 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid-cols-3 overscroll-x-contain overscroll-y-auto"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x pan-y" }}
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
                    {DOMAIN_ICONS[category.domain] || <Cpu className="h-5 w-5 text-accent" />}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
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
                      className="px-2.5 py-1 text-xs font-sans rounded-lg bg-surface-raised border border-border text-foreground/85 hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:text-accent transition-all duration-200 cursor-default font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimal Card Footer */}
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-sans text-muted-fg">
                <span>Core Discipline</span>
                <span className="text-accent font-medium font-mono text-[11px]">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* How I Build: Engineering Methodology Callout */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl border border-border bg-surface/60 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Engineering Methodology</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                How I Build
              </h3>
              <p className="text-xs sm:text-sm text-muted-fg leading-relaxed">
                Research → Architecture & Flow Mapping → Development → Automated Verification → Human Review & Iteration. AI tools serve as an engineering multiplier for speed and breadth, while system design, correctness, and architectural judgment remain strictly human-led.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-xs shrink-0">
              <span className="px-2.5 py-1 rounded-md border border-border bg-surface-raised text-[11px] font-mono text-muted-fg">
                Architectural Ownership
              </span>
              <span className="px-2.5 py-1 rounded-md border border-border bg-surface-raised text-[11px] font-mono text-muted-fg">
                Human-in-the-Loop QA
              </span>
              <span className="px-2.5 py-1 rounded-md border border-border bg-surface-raised text-[11px] font-mono text-muted-fg">
                Automated Verification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
