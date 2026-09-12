export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  domain: string;
  roleBadge: string;
  primaryDomain: string;
  oneLiner: string;
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
  headline: "Software Engineer · AI Systems Builder",
  bio: "I build resilient web systems, technical developer tooling, and intelligent software architectures. Combining deep frontend systems execution with modern agentic AI workflows, I use AI as an engineering multiplier while retaining strict ownership over system architecture, code correctness, and engineering trade-offs.",
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
  status: "Available for technical roles & systems contracts",
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
    subtitle: "Qatar Facility Services Operating System",
    domain: "mayndstomir.com",
    roleBadge: "System Architect · Frontend Engineer",
    primaryDomain: "System Architecture, FSM, PWA",
    oneLiner:
      "On-demand facility maintenance operating system with real-time dispatch, technician quoting, and two-part billing.",
    image: "/images/projects/mayndstomir.jpg",
    tech: ["JavaScript (ES6+)", "PWA / Service Workers", "Tailwind CSS", "Geospatial APIs"],
    highlights: [
      "Designed the 7-stage service lifecycle from dispatch to dual-phase financial reconciliation.",
      "Integrated address geocoding autocomplete to convert text addresses into verified GPS coordinates.",
      "Built offline-first service worker caching so technicians can record diagnostics in signal-deprived utility rooms.",
    ],
    liveUrl: "https://mayndstomir.com",
    metrics: "On-Demand Maintenance OS & FSM Lifecycle",
  },
  {
    id: "msa",
    number: "02",
    title: "MindStormer Global Academy (MSA)",
    subtitle: "NERDC Curriculum Academic Portal & Headless Layout Compiler",
    domain: "msa.mayndstomir.com",
    roleBadge: "Lead Frontend Engineer & UI/UX Architect",
    primaryDomain: "Layout Compilers, Headless Tooling",
    oneLiner:
      "Digital academic portal and automated reporting system with headless asset generation and pixel-perfect A4 report cards.",
    image: "/images/projects/mindstormer.jpg",
    tech: ["JavaScript (ES6+)", "Playwright (Headless)", "A4 CSS Paged Media", "Tailwind CSS"],
    highlights: [
      "Automated Node.js + Playwright pipeline exporting 139 high-resolution course banners at 2x DPI.",
      "Engineered 3 official single-page A4 print layouts (@media print) with QR validation and electronic seals.",
      "Built unbiased grading threshold classes computing academic remarks and pacing indicators automatically.",
    ],
    liveUrl: "https://msa.mayndstomir.com",
    metrics: "139 Automated Assets · 555 Passing Tests · A4 Print Engine",
  },
  {
    id: "fix11y",
    number: "03",
    title: "fix11y Studio",
    subtitle: "Automated Web Accessibility Evaluation & Remediation Suite",
    domain: "fix11y.vercel.app",
    roleBadge: "Frontend Engineer · Accessibility Specialist",
    primaryDomain: "Rule Engines, Python Automation",
    oneLiner:
      "Automated web accessibility scanner that turns WCAG errors into copy-pasteable code fixes for engineering teams.",
    image: "/images/projects/fix11y.jpg",
    tech: ["Python", "TypeScript", "Next.js", "WCAG 2.2 Standards", "Tailwind CSS"],
    highlights: [
      "Rule assertion engine checking 4.5:1 color contrast, focus traps, and keyboard tab-stops across WCAG core principles.",
      "Actionable code-diff remediation engine translating raw DOM defects into copy-pasteable HTML/ARIA fixes.",
      "Built an accessible Next.js studio featuring 100% keyboard workflows and screen-reader live announcements.",
    ],
    liveUrl: "https://fix11y.vercel.app/",
    metrics: "Actionable WCAG 2.2 AA Rule Engine & Remediation",
  },
  {
    id: "vibecheck",
    number: "04",
    title: "VibeCheck",
    subtitle: "Real-Time Concurrent Text & Tone Engine",
    domain: "vibecheck.app",
    roleBadge: "Frontend Engineer · Performance Architecture",
    primaryDomain: "Web Workers, Runtime Concurrency",
    oneLiner:
      "Distraction-free real-time writing analysis tool engineered with Web Workers for a locked 60 FPS typing experience.",
    image: "/images/projects/vibecheck.jpg",
    tech: ["TypeScript", "Web Workers API", "React", "Next.js", "Tailwind CSS"],
    highlights: [
      "Multi-threaded Web Worker architecture offloading regex tokenization and sentiment math from the main thread.",
      "Debounced postMessage channels and requestAnimationFrame loops keeping typing locked at 60 FPS.",
      "Distraction-free editorial canvas with zero layout shift (CLS = 0.00) and memory-tuned string serialization.",
    ],
    liveUrl: "https://vibe-check-eta-ochre.vercel.app/",
    metrics: "Locked 60 FPS Typing · Off-Thread Web Workers",
  },
];

export const COMPETENCIES: CompetencyCategory[] = [
  {
    domain: "System Architecture & Product Flows",
    description:
      "Designing end-to-end service workflows, multi-step customer journeys, and reliable operational systems.",
    skills: [
      "Workflow & State Design",
      "Multi-Step Booking Flows",
      "Service Lifecycle Mapping",
      "Two-Part Pricing Models",
      "Maps & Address Lookup",
      "System Architecture",
    ],
  },
  {
    domain: "Frontend Systems & UI/UX",
    description:
      "Building polished, responsive web applications with smooth interactions and rock-solid mobile layouts.",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mobile Layout Optimization",
      "Smooth Page Scrolling",
      "Micro-Interactions",
    ],
  },
  {
    domain: "Application & Concurrency Architecture",
    description:
      "Running heavy text and data processing in the background so interfaces stay fast and responsive with zero lag.",
    skills: [
      "Background Web Workers",
      "Non-Blocking UI Threads",
      "Offline PWA Support",
      "Fast Page Loading",
      "Smooth 60 FPS Typing",
      "State Management",
    ],
  },
  {
    domain: "Accessibility Engineering (a11y)",
    description:
      "Ensuring web applications are fully usable, readable, and effortless to navigate for people of all abilities.",
    skills: [
      "Accessible Standards (WCAG)",
      "Keyboard Navigation",
      "Screen Reader Support",
      "Color Contrast & Readability",
      "Accessible Forms",
      "Clear Code Fixes",
    ],
  },
  {
    domain: "Automation & Developer Tooling",
    description:
      "Writing automated scripts and test suites that eliminate repetitive manual tasks and prevent bugs.",
    skills: [
      "Automated Browser Testing",
      "Bulk Asset Generation",
      "Python Web Scripts",
      "Print-Ready PDF Reports",
      "Automated QA Tests",
      "CI/CD Workflows",
    ],
  },
  {
    domain: "Agentic AI & Engineering Multiplier",
    description:
      "Using AI development tools as an engineering multiplier for speed while maintaining strict human architectural control.",
    skills: [
      "AI Coding Tools",
      "Workflow Automation",
      "Prompt Design",
      "Fast Prototyping",
      "Code Review & Testing",
      "Human Oversight",
    ],
  },
];
