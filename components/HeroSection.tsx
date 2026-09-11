"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { PERSONAL_INFO, TOOLS_I_USE } from "@/lib/data";
import { Mail, Phone, Github, Linkedin, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/Magnetic";

const TOOL_ICONS: Record<string, React.ReactNode> = {
  claude: (
    <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
    </svg>
  ),
  antigravity: (
    <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.025 2q2.025 0 3.163 1.525T17.125 7q.65 1.575 1.25 3.5t1.275 3.875q.65 1.875 1.425 3.525t1.8 2.825q.2.225.175.525t-.225.525t-.475.25t-.55-.175q-1.975-1.55-3.25-3.463t-2.575-3.337q-.85-.95-1.812-1.5T12.025 13t-2.137.55t-1.813 1.5q-1.3 1.425-2.575 3.338T2.25 21.85q-.275.2-.55.175t-.475-.25T1 21.25t.175-.525Q2.2 19.55 2.975 17.9T4.4 14.375q.675-1.95 1.275-3.875T6.925 7q.8-1.95 1.938-3.475T12.025 2" />
    </svg>
  ),
  github: (
    <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  ),
  vercel: (
    <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  ),
};

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const TECH_STACK: TechItem[] = [
  {
    name: "Next.js",
    icon: (
      <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.6 2h3.2v20H3.6V2zm13.2 0h3.6v20h-3.6V2zM6.8 2l11.4 17.2V2h2.2v20h-3.2L5.8 4.8V22H3.6V2h3.2z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="h-3.5 w-3.5 flex-shrink-0 fill-none stroke-current" strokeWidth="1.8" viewBox="-11.5 -10.23174 23 20.46348" aria-hidden="true">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 5h8v2.5H7.2v11.5H4.8V7.5H2V5zm10.2 6.8c.8-.8 1.8-1.2 3.1-1.2 1.4 0 2.5.4 3.3 1.2.8.8 1.2 1.9 1.2 3.2 0 1.4-.4 2.5-1.2 3.3-.8.8-2 1.2-3.4 1.2-1.2 0-2.3-.3-3.2-.9l.9-1.9c.7.5 1.5.8 2.3.8.7 0 1.3-.2 1.8-.6.5-.4.7-.9.7-1.6 0-.6-.2-1.1-.7-1.5-.5-.4-1.2-.6-2.2-.8-1.4-.3-2.4-.7-3.1-1.4-.7-.7-1-1.6-1-2.7 0-1.2.4-2.1 1.2-2.8.8-.7 1.8-1.1 3.1-1.1 1.1 0 2.1.3 2.9.8l-.9 1.9c-.6-.4-1.3-.7-2-.7-.6 0-1.1.2-1.5.5-.4.3-.6.8-.6 1.4 0 .5.2.9.6 1.3.4.3 1.1.6 2 .8z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.914 0C5.833 0 6.2 2.645 6.2 2.645l.007 2.742h5.792v.822H3.896S0 5.762 0 11.905c0 6.14 3.4 5.925 3.4 5.925h2.029v-2.84s-.11-3.4 3.344-3.4h5.759s3.23.053 3.23-3.12V3.12S18.312 0 11.914 0zm-2.02 1.705a1.008 1.008 0 1 1 0 2.016 1.008 1.008 0 0 1 0-2.016zm4.192 22.295c6.08 0 5.714-2.645 5.714-2.645l-.007-2.742h-5.792v-.822h8.103s3.896.448 3.896-5.695c0-6.14-3.4-5.925-3.4-5.925h-2.03v2.84s.11 3.4-3.343 3.4H8.866s-3.23-.053-3.23 3.12v5.337s-.553 3.12 5.845 3.12zm2.02-1.705a1.008 1.008 0 1 1 0-2.016 1.008 1.008 0 0 1 0 2.016z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.354 0a1.002 1.002 0 0 0-.845.474L4.17 14.168a.998.998 0 0 0 .845 1.526h6.732l-1.096 8.306a1.002 1.002 0 0 0 1.69.757L20.68 9.063a.998.998 0 0 0-.845-1.526h-6.48l1.096-7.537A1.002 1.002 0 0 0 13.354 0z" />
      </svg>
    ),
  },
  {
    name: "FastAPI",
    icon: (
      <svg className="h-3.5 w-3.5 flex-shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm-.92 18.23l-3.34-6.48 4.26-1.5-1.92-3.8 6.26 6.32-4.32 1.63 1.92 3.83z" />
      </svg>
    ),
  },
];

interface HeroPortraitProps {
  isMobile?: boolean;
}

function HeroPortrait({ isMobile = false }: HeroPortraitProps) {
  return (
    <div
      className={`hero-portrait-frame group relative w-64 sm:w-72 lg:w-80 rounded-2xl overflow-hidden border border-border bg-surface shadow-xl transition-all duration-500 will-change-transform ${
        isMobile ? "mx-auto" : ""
      }`}
    >
      {/* Inner Parallax Wrapper */}
      <div className="hero-portrait-img relative aspect-[4/5] w-full overflow-hidden will-change-transform">
        <Image
          src={PERSONAL_INFO.profileImage}
          alt="Portrait of Olamiposi David Akinwumi"
          fill
          priority={!isMobile}
          sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
          className="object-cover object-top filter grayscale contrast-105 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Minimal, Quiet Caption */}
      <div className="p-3.5 border-t border-border flex items-center justify-between text-xs text-muted-fg font-sans">
        <span className="font-medium text-foreground">Olamiposi David Akinwumi</span>
        <span className="text-accent font-mono text-[11px]">Engineering</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const portraitFrames = gsap.utils.toArray<HTMLElement>(".hero-portrait-frame");
      const portraitImgs = gsap.utils.toArray<HTMLElement>(".hero-portrait-img");

      if (prefersReduced) {
        gsap.set(
          [line1Ref.current, line2Ref.current, ...portraitFrames, bioRef.current, actionsRef.current],
          { opacity: 1, y: 0 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Line-by-line typographic entrance
      tl.fromTo(
        [line1Ref.current, line2Ref.current],
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.14,
          delay: 0.1,
        }
      )
        // Gentle portrait unmasking
        .fromTo(
          portraitFrames,
          { clipPath: "inset(12% 0 12% 0)", opacity: 0, y: 20 },
          { clipPath: "inset(0% 0 0% 0)", opacity: 1, y: 0, duration: 1.1, ease: "power3.inOut" },
          "-=0.8"
        )
        // Bio statement reveal
        .fromTo(
          bioRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        // Action nodes stagger
        .fromTo(
          actionsRef.current?.children ? Array.from(actionsRef.current.children) : [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" },
          "-=0.4"
        );

      // Subtle scroll parallax on the portrait
      if (portraitImgs.length > 0 && containerRef.current) {
        gsap.fromTo(
          portraitImgs,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="main-content"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-background bg-grid-editorial transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-14">
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Headline and Narrative Column */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* 1. Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-fg mb-6 sm:mb-8 transition-all duration-200 hover:ring-1 hover:ring-[#d4a359] hover:border-transparent cursor-default w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-medium tracking-tight">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* 2. Name and Headline */}
            <h1 className="font-bold tracking-tight leading-[0.92] select-none text-[clamp(2.75rem,9.5vw,7.5rem)] text-foreground">
              <span className="block overflow-hidden pb-1 sm:pb-2">
                <span ref={line1Ref} className="block will-change-transform">
                  {PERSONAL_INFO.firstName}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  ref={line2Ref}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-accent will-change-transform"
                >
                  {PERSONAL_INFO.lastName}
                </span>
              </span>
            </h1>

            {/* 3. Role & Editorial Bio */}
            <div ref={bioRef} className="mt-6 sm:mt-8 space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl font-medium text-foreground/90 tracking-tight">
                {PERSONAL_INFO.headline}
              </p>
              <p className="text-sm sm:text-base text-muted-fg font-sans leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* 4. Mobile & Tablet Portrait Card (< lg) */}
            <div className="block lg:hidden my-7 sm:my-9">
              <HeroPortrait isMobile />
            </div>

            {/* 5. Tools I Use & Tech Stack Module */}
            <div className="mt-8 pt-6 border-t border-border/40 space-y-5">
              {/* Tools I Use */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-fg font-medium block mb-2.5">
                  Tools I use
                </span>
                <div className="flex flex-wrap gap-2.5 items-center">
                  {TOOLS_I_USE.map((tool) => (
                    <span
                      key={tool.id}
                      className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-surface-raised border border-border text-foreground transition-all duration-200 hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:text-[#d4a359] cursor-default select-none"
                    >
                      <span className="text-foreground/80 group-hover:text-[#d4a359] transition-colors duration-200 flex items-center justify-center shrink-0" aria-hidden="true">
                        {TOOL_ICONS[tool.id]}
                      </span>
                      <span>{tool.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-fg font-medium block mb-2.5">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2.5 items-center">
                  {TECH_STACK.map((tech) => (
                    <span
                      key={tech.name}
                      className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-surface-raised border border-border text-foreground transition-all duration-200 hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:text-[#d4a359] cursor-default select-none"
                    >
                      <span className="text-foreground/80 group-hover:text-[#d4a359] transition-colors duration-200 flex items-center justify-center shrink-0" aria-hidden="true">
                        {tech.icon}
                      </span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Tactile Contact Action Bar (Call-to-Action) */}
            <div
              ref={actionsRef}
              className="mt-8 sm:mt-10 pt-6 border-t border-border/40 flex flex-wrap items-center gap-3"
              aria-label="Direct Contact Links"
            >
              <Magnetic strength={0.15}>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-full border border-border bg-surface text-xs sm:text-sm font-medium text-foreground hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                  aria-label="Email Olamiposi David Akinwumi"
                >
                  <Mail className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.15}>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="group flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-full border border-border bg-surface text-xs sm:text-sm font-medium text-foreground hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                  aria-label="Call Olamiposi David Akinwumi"
                >
                  <Phone className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
                  <span>{PERSONAL_INFO.phoneFormatted}</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.15}>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-full border border-border bg-surface text-xs sm:text-sm font-medium text-foreground hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                  aria-label="Chat on WhatsApp with Olamiposi David Akinwumi (opens in new tab)"
                >
                  <svg className="h-4 w-4 text-accent fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </Magnetic>

              <div className="flex items-center gap-3">
                <Magnetic strength={0.2}>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-11 w-11 min-h-[44px] min-w-[44px] rounded-full border border-border bg-surface text-foreground/80 hover:text-foreground hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-[0.97] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                    aria-label="GitHub Profile (opens in new tab)"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-11 w-11 min-h-[44px] min-w-[44px] rounded-full border border-border bg-surface text-foreground/80 hover:text-foreground hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-[0.97] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                    aria-label="LinkedIn Profile (opens in new tab)"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-11 w-11 min-h-[44px] min-w-[44px] rounded-full border border-border bg-surface text-foreground/80 hover:text-foreground hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-[0.97] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                    aria-label="X Profile @akinsdavid05 (opens in new tab)"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Desktop Portrait Column (lg:) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-center lg:items-end">
            <HeroPortrait />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pt-4 border-t border-border text-xs text-muted-fg font-sans">
        <span>OVERVIEW</span>
        <a
          href="#works"
          className="editorial-link flex items-center gap-1.5 hover:text-foreground transition-colors py-2 focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <span>Selected Work</span>
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </a>
        <span className="hidden sm:inline">2026 ARCHIVE</span>
      </div>
    </section>
  );
}
