# Personal Portfolio Specification: Olamiposi David Akinwumi

## 1. Project Overview & Vision
Build an ultra-modern, high-performance, single-page personal portfolio balancing high-end editorial poise, progressive UI mechanics, and fluid motion with rock-solid frontend performance (60 FPS, GPU-accelerated transforms, zero layout shifts) and strict WCAG 2.2 AA accessibility compliance across both desktop and mobile devices.

### Visual Benchmark & Editorial Poise
* **Inspiration:** High-craft editorial elegance and calm pacing (benchmark: `ayoolatosin.work`).
* **Tone:** Grounded, human, and articulate craftsperson. Zero robotic jargon, terminal buzzwords ("60 FPS", "telemetry", "SYS.RUNTIME"), or artificial numbering markers.

#### Core Personal Information & Links
* **Name:** Olamiposi David Akinwumi
* **Role / Headline:** Frontend Engineer & System Architect
* **Bio:** *"I build fast, accessible, and carefully crafted web applications. Focused on thoughtful architectural foundations, smooth user interactions, and clean code that lasts."*
* **Email:** akinsdavid05@gmail.com
* **Phone:** +234 905 487 7512
* **WhatsApp:** [+234 906 566 7240](https://wa.me/2349065667240)
* **X (Twitter):** [@akinsdavid05](https://x.com/akinsdavid05)
* **GitHub:** [https://github.com/13Dav-arc](https://github.com/13Dav-arc)
* **LinkedIn:** [https://www.linkedin.com/in/olamiposi-akinwumi](https://www.linkedin.com/in/olamiposi-akinwumi)
* **Profile Image Path:** `/public/images/profile.jpg`
* **Status Badge:** `"Available for jobs"` (rendered once in Hero)
* **Privacy Constraint:** Do not display physical location or educational background.

---

## 2. Technical Stack & Motion Architecture
* **Framework:** Next.js (App Router), React 18, TypeScript
* **Styling:** Tailwind CSS, PostCSS, CSS Variables (Warm Obsidian Dark & Archival Linen Light)
* **Theme Management:** `next-themes` (Class-based, zero-FOUC with `disableTransitionOnChange`)
* **Virtual Smooth Scrolling:** `lenis`
  * Synchronized to GSAP internal ticker (`gsap.ticker.add((time) => lenis.raf(time * 1000))`) with `lagSmoothing(0)` and `syncTouch: false`.
* **Animation Orchestration:** `GSAP` + `ScrollTrigger`
  * Client execution guarded: `if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger)`
  * Scoped lifecycle cleanup using `gsap.context()` inside `useEffect`.
  * Responsive branching using `gsap.matchMedia()`.
* **Icons:** `lucide-react` + inline brand SVGs for WhatsApp and X
* **Images:** `next/image` with responsive `sizes` and priority loading.
* **Micro-Interactions:** Custom desktop magnetic pull (`Magnetic.tsx`) and CSS fluid link underlines.

---

## 3. Dual-Theme Palette & Contrast Standards

### Dark Theme: Warm Espresso Obsidian
* **Canvas / Background:** `#121110` (warm espresso obsidian undertone, avoiding pitch black)
* **Surface / Cards:** `#1a1817` / `#22201e` (warm stone charcoal)
* **Hairline Borders:** `rgba(244, 239, 230, 0.08)`
* **Hover Borders:** `rgba(212, 163, 89, 0.35)`
* **Primary Text:** `#f4efe6` (soft warm ivory — WCAG AAA contrast)
* **Muted Text:** `#a8a29e` (warm stone gray — WCAG AAA contrast)
* **Accent (Warm Gold):** `#d4a359` with subtle tint `rgba(212, 163, 89, 0.12)`

### Light Theme: Tactile Archival Linen
* **Canvas / Background:** `#f7f4ed` (tactile archival linen paper, avoiding sterile white)
* **Surface / Cards:** `#eeeae0` / `#e5e0d4` (warm linen card surfaces)
* **Hairline Borders:** `rgba(60, 50, 40, 0.08)`
* **Hover Borders:** `rgba(197, 155, 39, 0.35)`
* **Primary Text:** `#1c1917` (deep espresso charcoal ink — WCAG AAA contrast)
* **Muted Text:** `#78716c` (warm stone — WCAG AAA contrast)
* **Accent (Warm Gold):** `#c59b27` / `#d4a359` with subtle tint `rgba(212, 163, 89, 0.12)`

### Interactive States & Hover Outlines
* **Warm Gold Hover Rings:** All interactive cards, pills, contact badges, and action buttons feature a crisp warm gold outline on hover (`hover:ring-1 hover:ring-[#d4a359] hover:border-transparent transition-all duration-200`) with zero layout shift (CLS = 0.00).

---

## 4. Page Structure & Component Specifications

### Header & Navigation (`Navbar.tsx`)
* Brand monogram (`OA`) linking to home with gold hover ring.
* Desktop navigation links (`hidden lg:flex`): `Work`, `Philosophy`, `Capabilities`, `Contact`.
* Integrated `ThemeToggle` (Sun/Moon morph) with gold hover ring.
* Magnetic `Get in touch` action button with gold hover ring.
* **Mobile Minimalist Dropdown Navigation (`flex lg:hidden`):**
  * Tactile toggle button ($44 \times 44\text{ px}$ touch target) with gold hover outline (`hover:ring-1 hover:ring-[#d4a359]`).
  * Official vector icons from `icones.js.org`: `lucide:menu` (closed) and `lucide:x` (opened).
  * Sleek, top-down compact dropdown attached directly under the header (`bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl`).
  * Clean typography: `text-lg font-medium text-muted-fg hover:text-[#d4a359]` with subtle warm gold dot indicator on hover/active.
  * Essential links: `Work`, `Philosophy`, `Capabilities`, `Contact` (zero visual bloat, no numbered indexes, no dividers, no redundant footers).
  * Subtle backdrop overlay for tap-outside dismissal.
  * Auto-closes upon link selection, Escape key press, or desktop resize ($\ge 1024\text{ px}$).
  * Dynamic body scroll locking with Lenis synchronization (`lenis-stopped`) while open.
* Skip-to-content accessible anchor.
* All section targets configured with `scroll-mt-20 sm:scroll-mt-24` to prevent header overlap.

### Section 01: Hero / Entrance (`HeroSection.tsx`)
* **Responsive Layout Ordering Across Viewports:**
  * **Desktop (`lg:` $\ge 1024\text{ px}$):** 2-column grid (`grid-cols-12`).
    * **Left Column (`lg:col-span-8`):** Top to bottom:
      1. Availability status badge (*"Available for jobs"* with ping indicator)
      2. Typographic reveal (`OLAMIPOSI` & `AKINWUMI` with gradient text)
      3. Editorial headline & bio paragraph
      4. "Tools I Use" & "Tech Stack" modules with horizontal wrapping room
      5. Contact Action Bar (Call-to-Action) with magnetic nodes for Email, Phone, WhatsApp, GitHub, LinkedIn, and X
    * **Right Column (`hidden lg:flex lg:col-span-4`):** Dedicated portrait frame (`w-64 sm:w-72 lg:w-80`) with entrance unmasking, scrub parallax, and caption.
  * **Mobile & Tablet (`< lg` $< 1024\text{ px}$):** Strict single linear column:
    1. Availability status badge
    2. Typographic reveal (`OLAMIPOSI` & `AKINWUMI`)
    3. Editorial headline & bio paragraph
    4. **Portrait Card** (`block lg:hidden`) centered between bio and tools
    5. "Tools I Use" & "Tech Stack" modules
    6. Contact Action Bar (closing CTA)
* **Portrait Image Frame:** Clean rounded container (`w-64 sm:w-72 lg:w-80`) using `/public/images/profile.jpg` with entrance unmasking, gentle ScrollTrigger scrub parallax (`yPercent: ±6%`), and grayscale-to-color transition on hover/touch.
* **Tools I Use & Tech Stack Modules:**
  * **Tools I Use:** `Claude Code` (Anthropic Claude multi-spoke sunburst mark), `Antigravity` (authentic Icônes `material-symbols:antigravity` path), `Git & GitHub` (official GitHub Octocat silhouette), `Vercel` (clean solid triangle glyph ▲).
  * **Tech Stack:** 7 core technologies with standalone crisp vectors: `Next.js` (standalone "N" lettermark), `React` (orbital atom vector), `TypeScript` (crisp "TS" letter ligature), `Python` (dual serpentine emblem), `Tailwind CSS` (dual wave glyph), `Supabase` (lightning bolt vector), and `FastAPI` (circular bolt emblem).
  * **Pill Geometry & Gold Hover Transition:** All pills styled with `group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-surface-raised border border-border text-foreground transition-all duration-200 hover:ring-1 hover:ring-[#d4a359] hover:border-transparent hover:text-[#d4a359]` with simultaneous icon gold transition (`group-hover:text-[#d4a359]`) and zero layout shift (CLS = 0.00).
* Fluid headline scaling via CSS `clamp(2.75rem, 9.5vw, 7.5rem)`.
* Full-bleed `min-h-[100dvh]` viewport handling.

### Section 02: Ambient Marquee Track (`MarqueeTrack.tsx`)
* Serene ambient glide pace (~30s per half-cycle).
* Pause on hover (`mouseenter` / `mouseleave` ticker halt).
* Content:
  `Thoughtful Architecture • Accessible Interfaces • Performance & Polish • Resilient Web Applications • Fluid User Experiences • Clean Code`

### Section 03: The Philosophy (`PhilosophySection.tsx`)
* Editorial Statement:
  > *"Great software starts with thoughtful planning long before the first line of code is written. I build web applications with clear architectural blueprints—making sure they are fast, reliable, accessible to everyone, and feel completely effortless to use."*
* Animation: Word-by-word progressive illumination scrubbed on scroll.
* Three Craft Principles (no artificial numbering markers):
  1. **Thoughtful Planning:** Understanding data flow and user intent upfront to design clean blueprints and avoid unnecessary complexity.
  2. **Accessibility First:** Ensuring navigation, forms, and contrast work naturally for everyone, including keyboard and screen reader users.
  3. **Built for Reliability:** Writing clean, maintainable code with solid error handling that stays dependable under real-world conditions.

### Section 04: Selected Work (`WorksShowcase.tsx`)
* **Visual Browser Mockups:**
  * Frame: `aspect-[16/10]` rounded window (`rounded-xl sm:rounded-2xl`) with hairline borders (`border border-border`) and 3 understated top window control dots on the left (zero fake URL pills or corner numbering).
  * Screenshot Area: Next.js `<Image>` fill (`object-cover object-top`, `quality={90}`, `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"`) with smooth `group-hover:scale-[1.03]` transition. High-DPI and Retina screens receive double intrinsic resolution to preserve fine UI text and hairline borders.
  * Metadata Placement: Project title, category subtitle, tech tags, and external link arrow (↗) positioned directly beneath each browser frame.
  * Image Assets: Wired to `/public/images/projects/[project-name].jpg`.
* **Desktop ($\ge 1024\text{px}$):** Screen pins vertically while cards translate horizontally.
  * **Exact Travel Formula:**
    $$\text{distance} = \text{track.scrollWidth} - \text{window.innerWidth}$$
  * `x: () => -distance` and `end: () => "+=" + distance` with `invalidateOnRefresh: true` and layout settling timer.
  * The final card docks cleanly on the right edge of the screen and releases the pin immediately with zero trailing blank space.
* **Mobile ($< 1024\text{px}$):**
  * Native touch snap track (`snap-x snap-mandatory overflow-x-auto`) with `data-lenis-prevent`.
  * `touch-action: pan-x pan-y` and `overscroll-behavior-x: contain` to eliminate iOS Safari edge-swipe back navigation conflicts.
  * Visible slide progress indicators.

#### Featured Projects (4 Core Products):
1. **Maynd Stomir (Qatar Facility Services Marketplace):**
   * Bilingual (Arabic & English) location picker and booking flow for smooth RTL and LTR experiences.
   * Offline-first caching for field technicians on-site.
   * Image: `/public/images/projects/mayndstomir.jpg`
   * Live Demo: [https://mayndstomir.com](https://mayndstomir.com)
   * Tech: JavaScript, Supabase, FastAPI, PWA.
2. **MSA / MindStormer Academy (K-8 School Learning Platform):**
   * Accessible, unified school management portal for teachers, students, and parents.
   * Automated report card generator producing print-ready A4 sheets aligned with regional standards.
   * Image: `/public/images/projects/mindstormer.jpg`
   * Live Demo: [https://msa.mayndstomir.com](https://msa.mayndstomir.com)
   * Tech: Moodle, SCSS, Tailwind CSS, Mustache.
3. **fix11y (Automated Web Accessibility Auditor):**
   * Scans web applications for accessibility roadblocks, low-contrast text, and broken forms.
   * Plain-English remediation reports.
   * Image: `/public/images/projects/fix11y.jpg`
   * Live Demo: [https://fix11y.vercel.app/](https://fix11y.vercel.app/)
   * Tech: Python, WCAG 2.2 Standards, CLI & Web.
4. **VibeCheck (Real-Time Text & Tone Analyzer):**
   * Distraction-free writing environment evaluating sentiment and reading flow.
   * Background Web Worker processing preventing typing lag or stutters.
   * Image: `/public/images/projects/vibecheck.jpg`
   * Live Demo: [https://vibe-check-eta-ochre.vercel.app/](https://vibe-check-eta-ochre.vercel.app/)
   * Tech: TypeScript, Web Workers, Modern Web APIs.

### Section 05: Capabilities ("What I Do") (`CompetenciesMatrix.tsx`)
* **Responsive Layout:**
  * **Desktop ($\ge 1024\text{ px}$):** Balanced 3-column editorial grid (`lg:grid lg:grid-cols-3 lg:gap-8`).
  * **Mobile & Tablet ($< 1024\text{ px}$):** Single-row native horizontal swipe carousel (`flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-4 px-4`) with `data-lenis-prevent`.
  * **Next-Card Peek Affordance:** Each card is sized to `w-[82vw] sm:w-[60vw] shrink-0 snap-center`, allowing ~18% of the adjacent card to peek in and clearly communicate horizontal swipability.
* **3 Core Domains:**
  1. **Frontend Engineering:** React, Next.js, TypeScript, Tailwind CSS, State Management, Responsive Layouts, GSAP Motion.
  2. **Web Accessibility (a11y):** WCAG 2.2 AA Standards, Screen Reader Support, Keyboard Navigation, Accessible Forms, High-Contrast Design.
  3. **Systems & Architecture:** Offline-First (PWA), Web Workers API, Performance Optimization, Clean Component Systems, API Integration.

### Section 06: Contact & Outro (`ContactOutro.tsx`)
* Kinetic headline `"LET'S BUILD"` tracking outward subtly on scroll.
* Conversational intro: *"I am always open to discussing new engineering roles, architecture consulting, accessibility audits, or collaborative ideas."*
* 3 Magnetic action cards:
  1. Email: `akinsdavid05@gmail.com`
  2. WhatsApp: `+234 906 566 7240` (`https://wa.me/2349065667240`)
  3. Telephone: `+234 905 487 7512`
* Social links to GitHub (`13Dav-arc`), LinkedIn (`olamiposi-akinwumi`), and X (`@akinsdavid05`).
* Minimal footer copyright (zero build stack watermarks).

### Mobile Sticky Micro-Bar (`MobileStickyBar.tsx`)
* Floating bottom pill on mobile (`md:hidden`) with safe-area insets.
* One-thumb reachability for Email, WhatsApp, Phone, Work jump, Theme Toggle, and Scroll-to-Top.
* All touch targets strictly $\ge 44 \times 44\text{px}$ with `active:scale-90`.

---

## 5. Engineering Quality Checklist
1. **Zero Layout Shifts (CLS < 0.01):** Composite-only animations (`translate3d`, `scale`, `opacity`).
2. **Touch Safety:** `data-lenis-prevent` on mobile carousels to ensure 100% native gesture physics.
3. **WCAG 2.2 AA Compliance:** High-contrast text ratios, visible `:focus-visible` styling, logical sequential tab order, and screen-reader accessible landmarks.
4. **Memory Leak Safety:** All GSAP ScrollTrigger instances encapsulated inside `gsap.context()` for clean React component unmounts.
5. **No FOUC:** `next-themes` script execution before initial paint for instantaneous, flicker-free theme loading.