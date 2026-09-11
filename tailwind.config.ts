import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--fg)",
        surface: "var(--surface)",
        "surface-raised": "var(--surface-raised)",
        muted: "var(--muted)",
        "muted-fg": "var(--muted-fg)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        accent: {
          DEFAULT: "var(--accent)",
          fg: "var(--accent-fg)",
        },
        "accent-tint": "var(--accent-tint)",
        gold: {
          DEFAULT: "#d4a359",
          dark: "#c59b27",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
