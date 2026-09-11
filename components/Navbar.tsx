"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";
import Magnetic from "@/components/Magnetic";
import { ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Work", href: "#works" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Capabilities", href: "#matrix" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll and halt Lenis momentum when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close automatically on desktop resize (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Smooth hash navigation without aborting
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      // Close the drawer first to restore body & Lenis scrolling
      setIsOpen(false);

      // Smoothly scroll to the target after unblocking the scroll
      requestAnimationFrame(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = href;
        }
      });
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-accent focus:text-accent-fg focus:font-mono focus:text-sm focus:rounded-md focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Monogram */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3 text-sm font-medium tracking-tight text-foreground hover:text-accent transition-colors p-1 focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            aria-label="Olamiposi David Akinwumi — Home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-xs font-mono font-semibold text-foreground group-hover:border-transparent group-hover:ring-1 group-hover:ring-[#d4a359] transition-all">
              OA
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-foreground leading-tight">
                Olamiposi Akinwumi
              </span>
              <span className="text-[11px] text-muted-fg font-normal hidden sm:inline">
                Frontend & Systems
              </span>
            </div>
          </Link>

          {/* Editorial Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-medium tracking-wide text-muted-fg"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="editorial-link hover:text-foreground transition-colors py-2 focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Theme Toggle, Connect CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Dark / Light Mode Toggle */}
            <ThemeToggle />

            {/* Magnetic Connect Button (Desktop / Tablet) */}
            <Magnetic strength={0.15}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-full border border-border bg-surface text-xs sm:text-sm font-medium text-foreground hover:bg-surface-raised hover:ring-1 hover:ring-[#d4a359] hover:border-transparent active:scale-95 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                aria-label="Send direct email to Olamiposi David Akinwumi"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              </a>
            </Magnetic>

            {/* Mobile Hamburger Navigation Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex lg:hidden items-center justify-center h-11 w-11 min-h-[44px] min-w-[44px] rounded-full border border-border bg-surface text-foreground hover:bg-surface-raised hover:ring-1 hover:ring-[#d4a359] hover:border-transparent active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? (
                <svg
                  className="h-5 w-5 text-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Minimalist Top-Down Dropdown (< lg) */}
      {isOpen && (
        <>
          {/* Subtle backdrop to dismiss on tap outside */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity lg:hidden animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Sleek, Content-Hugging Dropdown Panel */}
          <div
            id="mobile-nav-menu"
            data-lenis-prevent
            className="fixed inset-x-0 top-16 sm:top-20 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl px-6 py-3 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-medium text-muted-fg hover:text-[#d4a359] transition-colors py-3 flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  {/* Subtle warm gold hover indicator dot */}
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d4a359] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
