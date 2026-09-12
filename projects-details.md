# Portfolio Engineering Specification & Architecture Ledger
**Author:** Posi Akinwumi (`13Dav-arc`)  
**Core Positioning:** Software Engineer · AI Systems Builder  
**Document Purpose:** Ground-truth engineering context, exact contribution boundaries, system models, and technical specifications for LLM coding agents, recruiters, and technical auditors.

---

## 1. Global Positioning & Core Narrative

### Hero Definition
* **Primary Subhead:** Software Engineer · AI Systems Builder
* **Engineering Narrative:**
  > "I am a Software Engineer who designs end-to-end operational systems, builds resilient client-side architectures, creates technical developer tooling, and solves browser-runtime performance challenges. I leverage agentic AI workflows and modern development tooling as an engineering multiplier while retaining strict ownership over system architecture, code correctness, and engineering trade-offs."
* **Positioning Tenets:**
  * **Not a pure UI styler:** Demonstrated track record in browser concurrency (Web Workers), headless test automation (Playwright), Python-driven rule assertion suites, and finite-state machine (FSM) system decomposition.
  * **Truthful Competency:** Avoid inflated senior/expert AI claims. Position AI capability strictly around *agentic workflow automation*, *context-aware architecture*, *tool use*, and *human-in-the-loop systems engineering*.
  * **Role Specificity:** Every project carries an explicit, defensible role label corresponding to actual engineering output.

---

## 2. Definitive Project Ledgers

┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   THE 4 CORE CAPABILITY PILLARS                                  │
├──────────────────────────────┬──────────────────────────────┬────────────────────────────────────┤
│ Project                      │ Exact Role                   │ Primary Engineering Domain         │
├──────────────────────────────┼──────────────────────────────┼────────────────────────────────────┤
│ Maynd Stomir                 │ System Architect · Frontend  │ System Architecture, FSM, PWA      │
│ MindStormer Academy (MSA)    │ Lead Frontend · UI/UX Arch   │ Layout Compilers, Headless Tooling │
│ fix11y Studio                │ Frontend · Accessibility Spec│ Rule Engines, Python Automation    │
│ VibeCheck                    │ Frontend · Performance Arch  │ Web Workers, Runtime Concurrency   │
└──────────────────────────────┴──────────────────────────────┴────────────────────────────────────┘


---

### Project 1: Maynd Stomir
* **Positioning:** An on-demand facility and equipment maintenance operating system managing the complete lifecycle of field servicing, technician dispatch, and dual-phase financial reconciliation across Qatar.
* **Exact Role:** System Architect · Frontend Engineer
* **Scope & Boundaries:**
  * **Owned by Posi:** System stage decomposition, customer/technician lifecycle flows, finite-state machine transitions, dual-phase financial model, geospatial address normalization interfaces, technician job consoles, admin command center, PWA service worker caching, and complete frontend implementation.
  * **External/Collaborator Scope:** Backend server runtime and low-level database table schemas executed by separate backend engineers.

#### The Problem
Facility maintenance across Qatar suffered from fragmented communication, opaque pricing, imprecise dispatch coordinates, and severe contractor cash-flow vulnerabilities during exploratory teardowns.

#### System Architecture & Deterministic Finite State Machine (FSM)
Decomposed the entire operational workflow into an event-driven state machine:
```
[Intake / Photo Upload]
│
▼
(pending) ───────────► central dispatcher review
│
▼
(assigned) ──────────► technician paired via dispatch command
│
▼
(diagnostic_in_progress) ──► on-site equipment inspection & fault isolation
│
▼
(quote_submitted) ───────► dynamic parts/labor cost itemization logged
│
┌─────┴────────────────┐
▼                      ▼
(quote_accepted)       (quote_rejected) ──► job closed / revised
│
▼
(completed) ───────────────► physical remediation completed & signed off
│
▼
[settled] ─────────────────► dual-phase financial ledger reconciled
```

#### What I Personally Built
* **Frictionless Intake Pipeline (`request.html`, `main.js`):** Multi-step service intake capturing failure symptoms, equipment specs, and photo uploads. Integrated `/geocode/places-textsearch` proxy to normalize textual addresses into verified map coordinates.
* **Passwordless Tracking Engine (`status.html`):** Public tracking portal authenticated via customer phone lookup (`/jobs/lookup/:phone`) or direct HMAC-style URL tokens (`/jobs/:token`), completely removing account creation friction.
* **Technician Field Console (`job-manage.html`):** Dynamic cost-itemization engine allowing field engineers to log replacement part serials, supplier sourcing invoices, and labor hours into a structured quote payload (`POST /jobs/:token/quotes`).
* **Dual-Phase Financial Architecture (`invoice.html`):**
  * *Phase 1 (Diagnostic / Call-Out Fee):* Upfront fee covering travel, on-site arrival, and equipment disassembly.
  * *Phase 2 (Final Repair Balance):* Dynamic billing milestone triggered only after diagnostic quote sign-off and repair completion.
  * Built manual verification portals (`/jobs/:id/verify-payment`, `verify-onboard.html`) for bank transfers and cash reconciliation.
* **Admin Command Center (`admin.html`):** Live dispatch stepper, contractor vetting queues (`/workers/:id/approve`), active job boards (`GET /jobs`), and dispatch overrides/cancellations.
* **Progressive Web App Architecture:** Offline-first caching via `manifest.json` and resilient Vanilla JS execution for mobile field engineers working in signal-deprived utility basements.

* **Stack:** Vanilla JavaScript (ES6+), HTML5/PWA, Tailwind CSS, Geospatial APIs, RESTful Integration, WCAG 2.2 Standards.

---

### Project 2: MindStormer Global Academy (MSA)
* **Positioning:** A full-scale digital academic reporting, student management, and learning portal built strictly around the NERDC (Nigerian Educational Research and Development Council) national curriculum framework across 9 academic grade levels (Primary 1 through JSS 3).
* **Exact Role:** Lead Frontend Engineer & UI/UX Architect
* **Scope & Boundaries:**
  * **Owned by Posi:** Complete client-side UI architecture, layout compiler engine, automated Playwright headless asset extraction pipeline, subpixel layout hardening, deterministic grading threshold engines, and single-page A4 print stylesheets.
  * **External Scope:** Relational database schemas and backend server runtime.

#### The Problem
The academy required an accessible public portal and automated academic reporting system that could handle complex multi-cluster curricula (BST, RNV, PVS, Core Disciplines), print-perfect official transcript generation, and visual asset production across 135+ subjects without layout failure or graphic designer bottlenecks.

#### What I Personally Built
* **Headless Asset Generation Pipeline (`export-assets.js`, `staging-canvas.html`):**
  * Built an automated Node.js + Playwright Chromium extraction pipeline that rendered and exported 139 production-grade assets (135 16:9 course covers and 4 cluster badges).
  * Configured `deviceScaleFactor: 2` (outputting 1600 × 900 px covers) with a 500ms post-`document.fonts.ready` rasterization buffer.
  * Diagnosed and resolved a 336 physical pixel coordinate collision in Playwright by refactoring grid rendering into a single-column vertical flex pipeline with zero negative margins.
* **Deterministic Evaluation & A4 Print Engine:**
  * Engineered 3 high-fidelity layouts strictly complying with single-page A4 print standards (210 × 297 mm, `@media print`, `print-color-adjust: exact`, QR verification nodes, electronic seals): *Mid-Term Progress Report* (CA 1 & 2), *Terminal Academic Report Card* (40% CA / 60% Exam across 15 subjects), and *Annual Cumulative Transcript* (tri-term consolidated promotion verdicts).
  * Built mathematical threshold evaluation classes to compute academic remarks, pacing velocity ($\ge 95\%$ Optimal, $< 65\%$ Intervention Required), and promotion verdicts automatically without bias.
* **Mobile Viewport Hardening:**
  * Fixed iOS WebKit subpixel viewport leaks (320px–375px) by replacing `-mx-4 px-4` negative margin hacks with a two-tier containment structure (`w-[calc(100vw-3.5rem)] max-w-[320px]` snap-center within an outer clamped boundary), preserving an optical 28px card peek.
  * Resolved horizontal flex container blowouts in continuous announcement tickers using strict `min-w-0` overflow bounding.
* **Interactive Public UI Components (`index.html`):**
  * Converted stacked mobile curriculum tiers into a hardware-accelerated horizontal touch-snap carousel with dynamic desktop grid degradation (`md:grid-cols-3`).
  * Engineered a 25-second continuous CSS linear marquee ticker with pause-on-hover, focus-within, and `@media (prefers-reduced-motion: reduce)` fallbacks.
  * Built an ARIA tablist (`role="tablist"`, `aria-selected`, `aria-controls`) mapping out the 10-week academic term, accompanied by requestAnimationFrame-throttled scroll progress calculations.
* **Automated Verification Suite:**
  * Authored test suite (`tests/form-validation.test.js`) containing 555 passing assertions verifying bounding box geometry, non-zero file sizes (>15 KB), and DOM containment.

* **Stack:** Vanilla JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Playwright (Headless Automation), Jest, ARIA 1.2 Specifications, A4 CSS Paged Media.

---

### Project 3: fix11y Studio
* **Positioning:** An automated web accessibility evaluation and actionable remediation suite designed to audit web applications against WCAG 2.1 and 2.2 AA standards and turn accessibility findings into practical developer remediation.
* **Exact Role:** Frontend Engineer · Accessibility Specialist
* **Scope & Boundaries:**
  * **Owned by Posi:** End-to-end audit engine architecture, WCAG 2.1/2.2 AA rule assertions, code-diff remediation mapping, Python automated scanning scripts, structured CSV export generators, and the accessible React/Next.js studio web application.
  * **Core Engineering Distinction:** This is **developer tooling and rule-engine logic**, not a simple UI wrapper. It analyzes software, isolates syntax/DOM defects, and synthesizes code solutions.

#### The Problem
Automated accessibility checkers frequently return dense, compliance-heavy outputs that fail to explain practical fixes to developers, while production web applications consistently ship with unannounced dynamic content, low-contrast text, missing ARIA tags, and keyboard traps.

#### What I Personally Built
* **Audit Rule & Assertion Logic:**
  * Engineered rule verification algorithms checking color contrast ratios against $4.5:1$ thresholds, automated focus-state detection, keyboard tab-stop order, missing form labels, unannounced dynamic states, and rapid-flashing media.
  * Structured checks according to the 4 core WCAG principles: *Perceivable*, *Operable*, *Understandable*, and *Robust*.
* **Actionable Remediation Mapping:**
  * Built an engine that maps raw DOM failures directly to developer code snippets: generating proper ARIA live regions (`aria-live="polite"`), accessible labeling (`aria-labelledby`, `aria-describedby`), focus trap solutions, and semantic HTML tag replacements.
* **Automated Python Scanning Scripts:**
  * Authored modular Python scripts that crawl target markup, parse the DOM hierarchy, execute heuristic assertions, and export structured CSV audit reports for engineering backlogs and client deliverables.
* **Accessible Reference Studio (`fix11y.vercel.app`):**
  * Engineered the web studio using Next.js, TypeScript, and Tailwind CSS.
  * Implemented the application as a gold-standard reference of web accessibility: full keyboard-only workflows, visible focus rings, ARIA live region status broadcasting, and full screen-reader optimization.

* **Stack:** Python, TypeScript, React, Next.js, Tailwind CSS, WCAG 2.1 / 2.2 AA Standards, ARIA 1.2 Specifications, Vercel.

---

### Project 4: VibeCheck
* **Positioning:** A real-time writing analysis interface and tone evaluator designed to provide live linguistic and structural insights without typing latency or UI-thread blocking.
* **Exact Role:** Frontend Engineer · Performance Architecture
* **Scope & Boundaries:**
  * **Owned by Posi:** Off-thread Web Worker architecture, asynchronous message passing, non-blocking UI rendering, debounced metric computation, requestAnimationFrame render scheduling, memory optimization, and distraction-free writing UI.
  * **Core Engineering Distinction:** The technical challenge was not building a text box—it was **browser concurrency and runtime performance engineering**. High-frequency linguistic calculations run continuously without dropping frames on the main thread.

#### The Problem
Real-time text evaluation and tone scoring typically execute heavy linguistic tokenizers, regex operations, and readability math directly on the browser's single JavaScript thread, resulting in dropped frames, cursor hesitation, and input lag during high-velocity writing sessions.

#### What I Personally Built
* **Web Worker Concurrency Architecture:**
  * Separated user keystroke handling from computational linguistics by moving regex tokenization, syllable calculation, sentiment analysis, and reading-level algorithms into dedicated background Web Workers.
* **Asynchronous Messaging Pipeline:**
  * Implemented bidirectional `postMessage` channels passing serialized text buffers between the editor thread and the analytical worker.
  * Throttled metric updates using debounced dispatches and `requestAnimationFrame` render scheduling, keeping keystroke input running at an uninterrupted 60 FPS.
* **Memory & Garbage Collection Optimization:**
  * Streamlined object allocation and string buffer serialization across worker threads, avoiding major memory allocation spikes that cause garbage collection pauses.
* **Distraction-Free Responsive Workspace (`vibe-check-eta-ochre.vercel.app`):**
  * Engineered a focused editorial canvas with zero layout shift, live readability badges, peripheral sentiment indicators, and dark-theme typographic hierarchy.

* **Stack:** TypeScript, React, Next.js, Web Workers API, Tailwind CSS, Vercel.

---

## 3. Engineering Capabilities Matrix

| Engineering Domain | Core Competencies & Demonstrated Evidence | Project Sources |
| :--- | :--- | :--- |
| **System Architecture & Product Flows** | Deterministic FSM lifecycle modeling, customer journey mapping, system-stage decomposition, dual-phase financial architecture, and decoupled actor workflows. | Maynd Stomir |
| **Frontend Systems & UI/UX** | Responsive application architecture, mobile-first interfaces, touch gesture optimization, WebKit subpixel viewport fixes, Lenis scroll coordination, and dark linen UI tokens. | Maynd Stomir, MSA, fix11y Studio, Portfolio |
| **Application Architecture** | Web Worker architecture, asynchronous message pipelines, background computation, API contract design, PWA architecture, and decoupled client-side state. | VibeCheck, Maynd Stomir |
| **Performance Engineering** | Off-thread computation, debounced event dispatching, `requestAnimationFrame` render loops, non-blocking UI threads, and garbage collection / memory footprint optimization. | VibeCheck |
| **Accessibility Engineering** | WCAG 2.1 / 2.2 AA rule assertion, ARIA 1.2 pattern implementation, keyboard-first navigation, focus management, screen-reader optimizations, and remediation mapping. | fix11y Studio, MSA, Maynd Stomir |
| **Automation & Developer Tooling** | Headless Playwright Chromium extraction pipelines (`deviceScaleFactor: 2`), programmatic asset generation, Python DOM analysis scripts, and automated verification suites. | MSA, fix11y Studio |
| **Logic & Rule Engines** | Deterministic grading/remark evaluation classes, mathematical threshold classification, automated remediation mapping, and state-machine transition validation. | MSA, fix11y Studio, Maynd Stomir |
| **Testing & Quality Assurance** | Automated DOM assertions (555 passing tests), bounding box geometry verification, non-zero file export assertions, and CI/CD GitHub Action workflows. | MSA, Portfolio |
| **Print & Document Engineering** | Single-page A4 print-compliant layouts (210 × 297 mm), CSS Paged Media `@media print`, dynamic QR verification nodes, and electronic signature blocks. | MSA |
| **APIs & Service Integration** | Geospatial text-search proxies, tokenized status authentication, quote submission pipelines, manual payment verification flows, and RESTful communication. | Maynd Stomir |
| **PWA & Field Applications** | Service worker asset caching (`manifest.json`), installable mobile architecture, low-connectivity resilience, and outdoor-readable interfaces for field technicians. | Maynd Stomir |
| **Python Tooling** | Automated scanning scripts, HTML DOM tree parsing, heuristic rule validation, and structured CSV audit report generation. | fix11y Studio |
| **Agentic AI & Engineering Multiplier** | Autonomous CLI workflows, LLM-assisted context architecture, structured prompt engineering, and human-in-the-loop system verification. | Portfolio, Daily Engineering Practice |

---

## 4. Overall Engineering Identity

┌────────────────────────────────────────────────────────┐
│                 POSI AKINWUMI (13Dav-arc)              │
│          Software Engineer · AI Systems Builder        │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────┼────────────────────────────┐
▼                           ▼                            ▼
[SYSTEMS THINKING]          [CLIENT SYSTEMS]             [TOOLING & LOGIC]
• Operational FSMs          • High-Perf Web              • Rule Engines
• Customer Journeys         • Web Workers                • Python Automation
• Dual-Phase Billing        • A4 Print Engines           • Playwright Pipelines
• PWA Architecture          • Accessibility              • WCAG Remediation
│                           │                            │
└───────────────────────────┼────────────────────────────┘
                            │
                            ▼
[AI AS AN ENGINEERING MULTIPLIER]
• Agentic CLI workflows
• Autonomous research & implementation
• Human-in-the-loop architectural control

* **Core Narrative:**  
  "I am a Software Engineer who designs end-to-end operational systems, builds resilient client-side architectures, creates technical developer tooling, and solves browser-runtime performance challenges. I leverage agentic AI workflows and modern development tooling as an engineering multiplier while retaining strict ownership over system architecture, code correctness, and engineering trade-offs."
