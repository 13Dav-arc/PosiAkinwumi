"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WorksShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  // Monitor touch scroll position on mobile to update active project pill
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, offsetWidth } = mobileScrollRef.current;
    const index = Math.round(scrollLeft / (offsetWidth * 0.85));
    setActiveMobileIndex(Math.min(Math.max(index, 0), PROJECTS.length - 1));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: >= 1024px -> Horizontal pin & scrub
      mm.add("(min-width: 1024px)", () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        // Exact travel distance so the last card docks flush with the right edge
        const getDistance = () => {
          if (!track) return 0;
          return Math.max(0, track.scrollWidth - window.innerWidth);
        };

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${getDistance()}`,
            invalidateOnRefresh: true,
          },
        });
      });

      // Mobile / Tablet: < 1024px -> Gentle entrance reveal
      mm.add("(max-width: 1023px)", () => {
        const cards = mobileScrollRef.current?.querySelectorAll(".project-card");
        if (cards) {
          gsap.fromTo(
            cards,
            { opacity: 0.9, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out",
            }
          );
        }
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative w-full bg-background border-b border-border overflow-hidden transition-colors duration-300 scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-6 bg-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-medium">
                Projects
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Selected Work
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-fg max-w-xs font-sans">
            A collection of tools, platforms, and applications built with care for real people.
          </p>
        </div>
      </div>

      {/* DESKTOP VIEW: Horizontal Pin & Scrub Track (>= 1024px) */}
      <div className="hidden lg:block w-full pb-28 pt-4">
        <div
          ref={trackRef}
          className="flex gap-8 px-8 sm:px-12 w-fit will-change-transform"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} isDesktop />
          ))}
        </div>
      </div>

      {/* MOBILE VIEW: Touch-Adapted Snap Track (< 1024px) with data-lenis-prevent */}
      <div className="lg:hidden w-full pb-16 px-4">
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          data-lenis-prevent
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2 overscroll-x-contain"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x pan-y" }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card snap-center shrink-0 w-[88vw] max-w-[420px]"
            >
              <ProjectCard project={project} isDesktop={false} />
            </div>
          ))}
        </div>

        {/* Mobile Slide Indicators */}
        <div className="flex items-center justify-center gap-2 pt-2" aria-hidden="true">
          {PROJECTS.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeMobileIndex === idx
                  ? "w-8 bg-accent"
                  : "w-2 bg-border-hover"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isDesktop }: { project: Project; isDesktop: boolean }) {
  const CardWrapper = project.liveUrl ? "a" : "div";
  const wrapperProps = project.liveUrl
    ? {
        href: project.liveUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `View live website for ${project.title} (opens in new tab)`,
      }
    : {};

  return (
    <article
      className={`group relative flex flex-col ${
        isDesktop ? "w-[580px] lg:w-[620px] shrink-0" : "w-full"
      }`}
    >
      <CardWrapper
        {...(wrapperProps as any)}
        className="flex flex-col gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl cursor-pointer"
      >
        {/* Card Window: aspect-[16/10] rounded frame with hairline borders and 3 understated top window dots */}
        <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl border border-border bg-surface-raised overflow-hidden shadow-sm group-hover:ring-1 group-hover:ring-[#d4a359] group-hover:border-transparent group-hover:shadow-xl transition-all duration-300">
          {/* Understated Top Window Chrome: 3 subtle control dots */}
          <div className="h-7 sm:h-8 px-3.5 sm:px-4 border-b border-border/80 bg-surface/80 backdrop-blur-sm flex items-center select-none">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-border-hover" />
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-border-hover" />
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-border-hover" />
            </div>
          </div>

          {/* Screenshot Image Container */}
          <div className="relative w-full h-[calc(100%-1.75rem)] sm:h-[calc(100%-2rem)] overflow-hidden bg-surface">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
              className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              priority={project.number === "01"}
            />
          </div>
        </div>

        {/* Metadata Placement: Directly beneath the browser frame */}
        <div className="flex items-start justify-between gap-4 px-1">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              {project.liveUrl && (
                <ArrowUpRight className="h-4 w-4 text-muted-fg group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
              )}
            </div>
            <p className="text-xs sm:text-sm text-muted-fg font-sans mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap items-center justify-end gap-1.5 max-w-[45%]">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-sans rounded-md bg-surface-raised border border-border text-muted-fg font-medium transition-all duration-200 hover:ring-1 hover:ring-[#d4a359] hover:border-transparent cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </CardWrapper>
    </article>
  );
}
