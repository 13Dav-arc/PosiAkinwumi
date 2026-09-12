"use client";

import React, { useRef, useEffect } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/Magnetic";

export default function ContactOutro() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // GPU-composited smooth reveal on scroll (no letterSpacing layout reflow)
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0.6, y: 16 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 0.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={containerRef}
      className="relative w-full py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-background border-t border-border overflow-hidden transition-colors duration-300 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-muted-fg mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span>START A CONVERSATION</span>
        </div>

        {/* Editorial Tracking Headline */}
        <h2
          ref={headlineRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-foreground select-none will-change-transform leading-none tracking-tight"
        >
          LET&apos;S BUILD
        </h2>

        <p className="mt-6 text-base sm:text-xl text-muted-fg max-w-xl font-sans leading-relaxed">
          I am always open to discussing new engineering roles, architecture consulting, accessibility audits, or collaborative ideas.
        </p>

        {/* Contact Action Cards */}
        <div className="mt-12 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Magnetic strength={0.12}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group relative flex items-center justify-between gap-3 p-4 sm:p-5 min-h-[44px] rounded-2xl border border-border bg-surface hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-[0.98] transition-all duration-200 text-left shadow-sm focus-visible:ring-2 focus-visible:ring-accent overflow-hidden"
              aria-label={`Send email to ${PERSONAL_INFO.email}`}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-surface-raised text-accent border border-border group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-mono text-muted-fg block uppercase tracking-wider">
                    Email
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-fg group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          </Magnetic>

          <Magnetic strength={0.12}>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between gap-3 p-4 sm:p-5 min-h-[44px] rounded-2xl border border-border bg-surface hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-[0.98] transition-all duration-200 text-left shadow-sm focus-visible:ring-2 focus-visible:ring-accent overflow-hidden"
              aria-label="Chat on WhatsApp with Olamiposi David Akinwumi (opens in new tab)"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-surface-raised text-accent border border-border group-hover:scale-105 transition-transform shrink-0">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-mono text-muted-fg block uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate block">
                    {PERSONAL_INFO.whatsapp}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-fg group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          </Magnetic>

          <Magnetic strength={0.12}>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="group relative flex items-center justify-between gap-3 p-4 sm:p-5 min-h-[44px] rounded-2xl border border-border bg-surface hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-[0.98] transition-all duration-200 text-left shadow-sm focus-visible:ring-2 focus-visible:ring-accent overflow-hidden"
              aria-label={`Call ${PERSONAL_INFO.phoneFormatted}`}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-surface-raised text-accent border border-border group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-mono text-muted-fg block uppercase tracking-wider">
                    Telephone
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate block">
                    {PERSONAL_INFO.phoneFormatted}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-fg group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          </Magnetic>
        </div>

        {/* Social Nodes */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Magnetic strength={0.15}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full border border-border bg-surface text-xs font-mono text-muted-fg hover:text-foreground hover:ring-1 hover:ring-[#d4a359] hover:border-transparent active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
              aria-label="GitHub Profile 13Dav-arc (opens in new tab)"
            >
              <Github className="h-4 w-4 text-accent" />
              <span>13Dav-arc</span>
            </a>
          </Magnetic>

          <Magnetic strength={0.15}>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full border border-border bg-surface text-xs font-mono text-muted-fg hover:text-foreground hover:ring-1 hover:ring-[#d4a359] hover:border-transparent active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
              aria-label="LinkedIn Profile olamiposi-akinwumi (opens in new tab)"
            >
              <Linkedin className="h-4 w-4 text-accent" />
              <span>olamiposi-akinwumi</span>
            </a>
          </Magnetic>

          <Magnetic strength={0.15}>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full border border-border bg-surface text-xs font-mono text-muted-fg hover:text-foreground hover:ring-1 hover:ring-[#d4a359] hover:border-transparent active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
              aria-label="X Profile @akinsdavid05 (opens in new tab)"
            >
              <svg className="h-3.5 w-3.5 fill-current text-accent" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>@akinsdavid05</span>
            </a>
          </Magnetic>
        </div>

        {/* Minimal Footer Line without build stack watermark */}
        <div className="mt-20 pt-8 w-full border-t border-border flex items-center justify-center text-xs text-muted-fg font-sans">
          <span>© {new Date().getFullYear()} Olamiposi David Akinwumi. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
