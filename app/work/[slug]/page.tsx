import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

const SLUG_ORDER = ["maynd-stomir", "msa", "fix11y", "vibecheck"];

export function generateStaticParams() {
  return SLUG_ORDER.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const study = CASE_STUDIES[params.slug];
  if (!study) {
    return {
      title: "Case Study Not Found | Olamiposi David Akinwumi",
    };
  }

  return {
    title: `${study.title} — Case Study | Olamiposi David Akinwumi`,
    description: study.oneLiner,
    openGraph: {
      title: `${study.title} — Case Study`,
      description: study.oneLiner,
      images: [{ url: study.image }],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = CASE_STUDIES[params.slug];

  if (!study) {
    notFound();
  }

  const currentIndex = SLUG_ORDER.indexOf(params.slug);
  const nextSlug = SLUG_ORDER[(currentIndex + 1) % SLUG_ORDER.length];
  const nextStudy = CASE_STUDIES[nextSlug];

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Top Sticky Bar: Clean navigation, back link, and theme toggle (No redundant live link) */}
      <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/#works"
            className="group inline-flex items-center gap-2 min-h-[44px] text-xs sm:text-sm font-medium text-muted-fg hover:text-foreground transition-colors rounded-lg focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Back to Portfolio Overview"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-accent" />
            <span>Back to Overview</span>
          </Link>

          <ThemeToggle />
        </div>
      </header>

      {/* Main Container: Compact, comfortable vertical rhythm for desktop and mobile */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-[max(3rem,env(safe-area-inset-bottom))] space-y-10 sm:space-y-12">
        {/* Project Hero Header */}
        <section className="space-y-5">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full border border-border bg-surface text-[11px] font-mono text-muted-fg">
              {study.number} / 04
            </span>
            <span className="px-2.5 py-0.5 rounded-full border border-accent/40 bg-accent/10 text-[11px] font-mono text-accent font-medium">
              {study.roleBadge}
            </span>
            <span className="px-2.5 py-0.5 rounded-full border border-border bg-surface text-[11px] font-mono text-muted-fg">
              {study.primaryDomain}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {study.title}
            </h1>
            <p className="text-sm sm:text-base text-muted-fg font-sans leading-relaxed">
              {study.subtitle}
            </p>
          </div>

          {/* Single Clear Live CTA & Tech Stack Tags */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {study.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-sans rounded-md bg-surface-raised border border-border text-foreground/80 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-full border border-border bg-surface hover:ring-1 hover:ring-[#d4a359] hover:border-transparent text-xs sm:text-sm font-medium text-foreground hover:bg-surface-raised transition-all shadow-sm shrink-0 focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`Open ${study.title} live website in new tab`}
              >
                <span>{study.liveUrlLabel}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
              </a>
            )}
          </div>
        </section>

        {/* Screenshot Window Frame: Clean editorial browser preview */}
        <section>
          <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl border border-border bg-surface-raised overflow-hidden shadow-lg">
            {/* Window Chrome */}
            <div className="h-7 sm:h-8 px-3.5 border-b border-border/80 bg-surface/80 backdrop-blur-sm flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-border-hover" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-border-hover" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-border-hover" />
              </div>
              <span className="text-[11px] font-mono text-muted-fg font-normal truncate max-w-[200px] sm:max-w-none">
                {study.domain}
              </span>
              <div className="w-6" />
            </div>

            {/* Image Viewport */}
            <div className="relative w-full h-[calc(100%-1.75rem)] sm:h-[calc(100%-2rem)] bg-surface">
              <Image
                src={study.image}
                alt={`Interface screenshot of ${study.title}`}
                fill
                quality={90}
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Role & Ownership Breakdown: Clear division between personal and team scope */}
        <section className="p-5 sm:p-6 rounded-xl border border-border bg-surface/70 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent font-medium">
            Role & Ownership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm leading-relaxed">
            <div className="space-y-1">
              <span className="font-semibold text-foreground block">What I Owned</span>
              <p className="text-muted-fg">{study.roleOwnership.myRole}</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-foreground block">Team & Collaborators</span>
              <p className="text-muted-fg">{study.roleOwnership.teamRole}</p>
            </div>
          </div>
        </section>

        {/* The Problem: Max 2 sentences in plain English */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent font-medium">
            The Problem
          </h2>
          <p className="text-sm sm:text-base text-foreground/90 font-sans leading-relaxed">
            {study.problem}
          </p>
        </section>

        {/* What I Built: 4-5 concise, punchy bullet points */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent font-medium">
            What I Built
          </h2>
          <ul className="space-y-2.5">
            {study.whatIBuilt.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The Result: 1 short paragraph on how it helped */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-accent font-medium">
            The Result
          </h2>
          <p className="text-sm sm:text-base text-foreground/90 font-sans leading-relaxed">
            {study.theResult}
          </p>
        </section>

        {/* Bottom Navigation: Next Case Study & Return to Overview */}
        <section className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full border border-border bg-surface text-xs sm:text-sm font-medium text-foreground hover:bg-surface-raised transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-accent" />
            <span>Back to All Works</span>
          </Link>

          <Link
            href={`/work/${nextStudy.slug}`}
            className="group inline-flex items-center gap-3 px-5 py-2.5 min-h-[44px] rounded-full bg-foreground text-background text-xs sm:text-sm font-semibold hover:opacity-90 transition-all shadow-sm"
          >
            <div className="text-left">
              <span className="block text-[10px] uppercase font-mono tracking-wider opacity-70">
                Next Project
              </span>
              <span className="block font-medium">{nextStudy.title}</span>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </main>
    </div>
  );
}
