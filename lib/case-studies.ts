export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  domain: string;
  roleBadge: string;
  primaryDomain: string;
  liveUrl?: string;
  liveUrlLabel: string;
  githubUrl?: string;
  image: string;
  metrics: string;
  oneLiner: string;
  roleOwnership: {
    myRole: string;
    teamRole: string;
  };
  problem: string;
  whatIBuilt: string[];
  theResult: string;
  tech: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "maynd-stomir": {
    slug: "maynd-stomir",
    number: "01",
    title: "Maynd Stomir",
    subtitle: "On-Demand Facility & Equipment Maintenance Platform",
    domain: "mayndstomir.com",
    roleBadge: "System Architect · Frontend Engineer",
    primaryDomain: "Service Workflow & Mobile Web App",
    liveUrl: "https://mayndstomir.com",
    liveUrlLabel: "View Live Project ↗",
    image: "/images/projects/mayndstomir.jpg",
    metrics: "On-Demand Maintenance OS · Qatar",
    oneLiner:
      "On-demand facility maintenance platform connecting clients, technicians, and dispatchers across Qatar.",
    roleOwnership: {
      myRole:
        "I designed the end-to-end customer journey, the technician quote flow, the two-part pricing structure, and engineered the mobile web app (PWA).",
      teamRole:
        "Backend team members handled database management, server infrastructure, and third-party payment gateways.",
    },
    problem:
      "Getting equipment repaired in Qatar was slow and frustrating because prices were opaque, addresses were hard to locate, and technicians frequently risked unpaid visits during initial diagnostic teardowns.",
    whatIBuilt: [
      "A multi-step booking form with smart address autocomplete that converts text locations into verified GPS coordinates for field crews.",
      "A live tracking portal where clients can check repair status in real time using their phone number—no account creation or app download required.",
      "A mobile field console for technicians to itemize replacement parts, supplier invoices, and labor hours on-site to generate instant quotes.",
      "A fair two-part billing structure with an upfront diagnostic fee plus a final repair charge billed only after customer approval.",
      "An offline-ready Progressive Web App (PWA) that stays fast and functional even in underground parking structures and basements with poor signal.",
    ],
    theResult:
      "Replaced chaotic phone calls and paper receipts with a transparent, trackable system that protects field contractors from unpaid labor and gives homeowners complete visibility from request to final payment.",
    tech: ["JavaScript (ES6+)", "HTML5 / PWA", "Tailwind CSS", "Google Maps API", "REST APIs"],
  },

  msa: {
    slug: "msa",
    number: "02",
    title: "MindStormer Global Academy (MSA)",
    subtitle: "Digital Academic Portal & Automated Report Card System",
    domain: "msa.mayndstomir.com",
    roleBadge: "Lead Frontend Engineer & UI/UX Architect",
    primaryDomain: "School Portals & Automated Report Cards",
    liveUrl: "https://msa.mayndstomir.com",
    liveUrlLabel: "View Live Project ↗",
    image: "/images/projects/mindstormer.jpg",
    metrics: "139 Automated Assets · 555 Passing Tests · A4 Print Engine",
    oneLiner:
      "Digital academic portal and automated reporting system with headless asset generation and pixel-perfect A4 report cards.",
    roleOwnership: {
      myRole:
        "I designed and built the responsive student and teacher portals, automated grade calculation rules, and print-ready report card templates.",
      teamRole:
        "Backend engineers managed the school's relational database and user authentication services.",
    },
    problem:
      "Teachers and administrators spent hundreds of manual hours every term calculating grades and formatting report cards across 135+ subjects, leading to arithmetic mistakes and stressful formatting delays during printing.",
    whatIBuilt: [
      "An automated browser script that generated 139 high-resolution course banners in minutes, eliminating graphic design bottlenecks.",
      "Three official, print-ready report card templates (mid-term, terminal, and cumulative transcripts) formatted for standard A4 paper with verification QR codes.",
      "Automated grading logic that calculates student remarks, pacing velocity, and promotion decisions instantly without human bias.",
      "A responsive portal with accessible curriculum tabs, a 10-week academic term stepper, and smooth touch-friendly course cards.",
      "An automated test suite with 555 checks verifying layout geometry, file export integrity, and form validation.",
    ],
    theResult:
      "Cut report-card preparation time from weeks to minutes, eliminated arithmetic errors, and delivered polished, official transcripts ready for parents and school archives.",
    tech: ["JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Playwright Automation", "Print CSS"],
  },

  fix11y: {
    slug: "fix11y",
    number: "03",
    title: "fix11y Studio",
    subtitle: "Automated Web Accessibility Evaluation & Code Fix Engine",
    domain: "fix11y.vercel.app",
    roleBadge: "Frontend Engineer · Accessibility Specialist",
    primaryDomain: "Automated Accessibility Testing & Code Fixes",
    liveUrl: "https://fix11y.vercel.app/",
    liveUrlLabel: "View Live Project ↗",
    image: "/images/projects/fix11y.jpg",
    metrics: "Automated WCAG 2.2 AA Auditing & Fixes",
    oneLiner:
      "Automated web accessibility scanner that turns WCAG errors into copy-pasteable code fixes for engineering teams.",
    roleOwnership: {
      myRole:
        "Sole creator and engineer. Built the accessibility auditing engine, the automated code-fix generator, Python scanning scripts, and the web application.",
      teamRole:
        "Independent engineering project created to set a gold standard for web accessibility and developer tooling.",
    },
    problem:
      "Most accessibility checkers give developers dense, confusing lists of legal compliance rules without explaining how to actually fix the code. As a result, websites keep launching with unreadable low-contrast text and broken keyboard controls.",
    whatIBuilt: [
      "An automated scanner that audits web pages for color contrast issues, missing image descriptions, form labels, and keyboard navigation traps.",
      "An actionable code-fix engine that generates copy-pasteable HTML snippets and accessible tags instead of generic warning messages.",
      "Modular Python scripts that crawl multi-page websites and export clean, structured CSV checklists for engineering teams.",
      "A reference web application engineered from the ground up to be 100% accessible with full keyboard support and screen reader live announcements.",
    ],
    theResult:
      "Transforms complicated accessibility guidelines into practical, copy-pasteable code fixes, helping developers find and fix usability barriers in minutes instead of hours.",
    tech: ["TypeScript", "React", "Next.js", "Python", "Tailwind CSS", "Web Accessibility (WCAG)"],
  },

  vibecheck: {
    slug: "vibecheck",
    number: "04",
    title: "VibeCheck",
    subtitle: "Real-Time Writing Analysis & Tone Feedback Tool",
    domain: "vibecheck.app",
    roleBadge: "Frontend Engineer · Performance Architecture",
    primaryDomain: "Real-Time Writing Analysis & Concurrency",
    liveUrl: "https://vibe-check-eta-ochre.vercel.app/",
    liveUrlLabel: "View Live Project ↗",
    image: "/images/projects/vibecheck.jpg",
    metrics: "Locked 60 FPS Typing · Background Web Workers",
    oneLiner:
      "Distraction-free real-time writing analysis tool engineered with Web Workers for a locked 60 FPS typing experience.",
    roleOwnership: {
      myRole:
        "Sole creator and engineer. Architected the background browser worker system, the smooth rendering pipeline, and the distraction-free editor interface.",
      teamRole:
        "Independent engineering project focused on browser runtime performance and thread concurrency.",
    },
    problem:
      "Evaluating text in real time for reading ease, syllables, and tone requires heavy calculations. Running these checks directly in the browser causes typing lag, cursor stutter, and dropped frames on longer documents.",
    whatIBuilt: [
      "A multi-threaded architecture that offloads all syllable counting, sentiment analysis, and reading scores to a background browser worker.",
      "An optimized messaging pipeline that schedules screen updates smoothly between keystrokes to keep typing locked at 60 frames per second.",
      "Memory optimizations that prevent browser freezes even when pasting and analyzing 10,000-word articles.",
      "A minimal writing interface with zero layout shift, subtle peripheral sentiment badges, and dark linen typography.",
    ],
    theResult:
      "Delivers instant writing feedback on readability and emotional tone without sacrificing the fluid, responsive feel of a modern text editor.",
    tech: ["TypeScript", "React", "Next.js", "Web Workers API", "Tailwind CSS"],
  },
};
