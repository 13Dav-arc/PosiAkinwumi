"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full border border-border bg-surface/50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group relative flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-border bg-surface hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:bg-surface-raised active:scale-95 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <div className="relative w-4 h-4 text-foreground/80 group-hover:text-foreground transition-colors">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-500 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-500 rotate-0 scale-100 text-slate-700" />
        )}
      </div>
    </button>
  );
}
