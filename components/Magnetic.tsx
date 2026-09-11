"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: React.ReactElement<{ className?: string }>;
  strength?: number;
}

export default function Magnetic({ children, strength = 0.2 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable magnetic pull on precision pointer devices (mouse)
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className="inline-block will-change-transform">
      {children}
    </div>
  );
}
