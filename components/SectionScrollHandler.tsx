"use client";

import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/navigation";

export default function SectionScrollHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");

    if (section) {
      const timer = setTimeout(() => {
        smoothScrollTo(section);
        window.history.replaceState(null, "", window.location.pathname);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
