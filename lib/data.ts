export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  domain: string;
  image: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: string;
}

export interface CompetencyCategory {
  domain: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Olamiposi David Akinwumi",
  firstName: "OLAMIPOSI",
  lastName: "AKINWUMI",
  headline: "Frontend Engineer & System Architect",
  bio: "I build fast, accessible, and carefully crafted web applications. Focused on thoughtful architectural foundations, smooth user interactions, and clean code that lasts.",
  email: "akinsdavid05@gmail.com",
  phone: "+234 905 487 7512",
  phoneFormatted: "+234 905 487 7512",
  whatsapp: "+234 906 566 7240",
  whatsappUrl: "https://wa.me/2349065667240",
  twitter: "https://x.com/akinsdavid05",
  twitterHandle: "@akinsdavid05",
  github: "https://github.com/13Dav-arc",
  githubUsername: "13Dav-arc",
  linkedin: "https://www.linkedin.com/in/olamiposi-akinwumi",
  linkedinUsername: "olamiposi-akinwumi",
  profileImage: "/images/profile.jpg",
  status: "Available for jobs",
};

export interface ToolItem {
  id: string;
  name: string;
}

export const TOOLS_I_USE: ToolItem[] = [
  { id: "claude", name: "Claude Code" },
  { id: "antigravity", name: "Antigravity" },
  { id: "github", name: "Git & GitHub" },
  { id: "vercel", name: "Vercel" },
];

export const MARQUEE_ITEMS = [
  "Thoughtful Architecture",
  "Accessible Interfaces",
  "Performance & Polish",
  "Resilient Web Applications",
  "Fluid User Experiences",
  "Clean Code",
];

export const PHILOSOPHY =
  "Great software starts with thoughtful planning long before the first line of code is written. I build web applications with clear architectural blueprints—making sure they are fast, reliable, accessible to everyone, and feel completely effortless to use.";

export const CRAFT_VALUES = [
  {
    title: "Thoughtful Planning",
    description:
      "Understanding data flow and user intent upfront to design clean blueprints and avoid unnecessary complexity.",
  },
  {
    title: "Accessibility First",
    description:
      "Ensuring navigation, forms, and contrast work naturally for everyone, including keyboard and screen reader users.",
  },
  {
    title: "Built for Reliability",
    description:
      "Writing clean, maintainable code with solid error handling that stays dependable under real-world conditions.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "maynd-stomir",
    number: "01",
    title: "Maynd Stomir",
    subtitle: "Qatar Facility Services Marketplace",
    domain: "mayndstomir.com",
    image: "/images/projects/mayndstomir.jpg",
    tech: ["JavaScript", "Supabase", "FastAPI", "PWA"],
    highlights: [
      "Connects homeowners and property managers with certified maintenance specialists across Qatar.",
      "Designed a bilingual (Arabic & English) location picker and booking flow for smooth RTL and LTR experiences.",
      "Built offline-first caching enabling field technicians to manage work orders on-site without disruption.",
    ],
    liveUrl: "https://mayndstomir.com",
    metrics: "Bilingual Service Marketplace",
  },
  {
    id: "msa-500",
    number: "02",
    title: "MSA / MindStormer Academy",
    subtitle: "K-8 School Learning Platform",
    domain: "msa.mayndstomir.com",
    image: "/images/projects/mindstormer.jpg",
    tech: ["Moodle", "SCSS", "Tailwind CSS", "Mustache"],
    highlights: [
      "A friendly, intuitive learning management portal for K-8 schools, teachers, and parents.",
      "Modernized institutional classroom workflows with a cohesive, accessible design system.",
      "Engineered an automated report card engine producing print-ready A4 reports aligned with regional curriculum standards.",
    ],
    liveUrl: "https://msa.mayndstomir.com",
    metrics: "School LMS & Report Generator",
  },
  {
    id: "fix11y",
    number: "03",
    title: "fix11y",
    subtitle: "Automated Web Accessibility Auditor",
    domain: "fix11y.vercel.app",
    image: "/images/projects/fix11y.jpg",
    tech: ["Python", "WCAG 2.2 Standards", "CLI & Web"],
    highlights: [
      "Scans web applications for accessibility roadblocks, low-contrast text, and broken forms before launch.",
      "Flags keyboard navigation traps and missing screen reader tags with clear, actionable fix suggestions.",
      "Generates plain-English accessibility summaries for engineering and product teams.",
    ],
    liveUrl: "https://fix11y.vercel.app/",
    metrics: "Automated Accessibility Scanner",
  },
  {
    id: "vibecheck",
    number: "04",
    title: "VibeCheck",
    subtitle: "Real-Time Text & Tone Analyzer",
    domain: "vibecheck.app",
    image: "/images/projects/vibecheck.jpg",
    tech: ["TypeScript", "Web Workers", "Modern Web APIs"],
    highlights: [
      "A distraction-free writing environment that evaluates sentiment, tone, and reading flow in real time.",
      "Processes complex text analysis in background threads so typing remains completely fluid without stutters.",
      "Built with responsive state handling to ensure instant visual feedback even on long essays.",
    ],
    liveUrl: "https://vibe-check-eta-ochre.vercel.app/",
    metrics: "Background Text Processing",
  },
];

export const COMPETENCIES: CompetencyCategory[] = [
  {
    domain: "Frontend Engineering",
    description:
      "Crafting intuitive, responsive interfaces with clean component architectures and fluid motion.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "State Management",
      "Responsive Layouts",
      "GSAP Motion",
    ],
  },
  {
    domain: "Web Accessibility (a11y)",
    description:
      "Ensuring digital products are inclusive and effortless to use for people of all abilities.",
    skills: [
      "WCAG 2.2 AA Standards",
      "Screen Reader Support",
      "Keyboard Navigation",
      "Accessible Forms",
      "High-Contrast Design",
      "ARIA Best Practices",
    ],
  },
  {
    domain: "Systems & Architecture",
    description:
      "Designing dependable data flows, background worker pipelines, and resilient offline runtimes.",
    skills: [
      "Offline-First (PWA)",
      "Web Workers API",
      "Performance Optimization",
      "Clean Component Systems",
      "API Integration",
      "Data Caching",
    ],
  },
];
