# PROJECT REPORT

## EXPANSION OF SEMANTIC HTML FOUNDATION VIA CUSTOM CSS ARCHITECTURE AND GITHUB PAGES DEPLOYMENT

---

### Academic Cover Page

| Item | Details |
| :--- | :--- |
| **Course Name** | Web Technology / Information Technology |
| **Project Title** | Expansion of Semantic HTML Foundation via Custom CSS Architecture and GitHub Pages Deployment |
| **Student Name** | Saroj Kumar Kushwaha |
| **Academic Program**| Bachelor of Information Technology (BIT) |
| **Institution** | Model Institute of Technology (MIT) |
| **Submission Date**| October 2026 |
| **Live Portfolio URL**| [https://kushx7.github.io/week-2-example/](https://kushx7.github.io/week-2-example/) |
| **GitHub Repository**| [https://github.com/kushx7/week-2-example](https://github.com/kushx7/week-2-example) |

---

## Table of Contents
1. **Introduction**
   - 1.1 Context and Background
   - 1.2 Principle of Separation of Concerns
   - 1.3 Project Objectives and Scope
2. **System Architecture and Implementation Details**
   - 2.1 File Organization and Asset Pipeline
   - 2.2 Semantic HTML5 Document Structure
   - 2.3 CSS3 Architecture and Custom Property Design Tokens
   - 2.4 Responsive Layout Engineering (Flexbox and Grid)
   - 2.5 Mobile-Friendly Breakpoints and Media Queries
   - 2.6 Version Control Workflow and GitHub Pages CI/CD
3. **Code Architecture and Annotated Snippets**
   - 3.1 Semantic HTML5 Hierarchy and Accessibility Features
   - 3.2 CSS Design Tokens and Grid Layout Declarations
   - 3.3 Media Query Breakpoint Logic
4. **Results, Visual Showcase, and Evaluation**
   - 4.1 Visual Output Analysis (Desktop Viewport)
   - 4.2 Visual Output Analysis (Mobile Viewport)
   - 4.3 Source Code Documentation and Quality Metrics
   - 4.4 Web Standards Compliance and Accessibility (a11y)
5. **Discussion and Conclusion**
   - 5.1 Critical Evaluation and Key Takeaways
   - 5.2 Technical Challenges Encountered and Solutions Applied
   - 5.3 Future Roadmap
6. **References (APA 7th Edition)**

---

## 1. Introduction

### 1.1 Context and Background
The web has evolved from a repository of static hypertext documents into a sophisticated platform for dynamic, rich, and accessible digital applications. In contemporary software engineering, an online personal portfolio serves not merely as a resume, but as an empirical demonstration of a developer’s mastery of fundamental web standards, design aesthetics, responsive design patterns, and deployment pipelines (Duckett, 2014).

This project focuses on transitioning an initial unstyled semantic HTML document into a production-grade, aesthetically elevated, and mobile-responsive portfolio site for **Saroj Kumar Kushwaha**, an undergraduate student in the Bachelor of Information Technology (BIT) program at the *Model Institute of Technology*.

### 1.2 Principle of Separation of Concerns
A central tenet of modern frontend web engineering is the **Separation of Concerns (SoC)**. According to Meyer and Weyke (2023), separating content structure (HTML), presentation (CSS), and interactive behavior (JavaScript) is paramount for maintainability, browser rendering performance, and code longevity:
- **HTML5 (Structure and Semantics)**: Responsible exclusively for document outline, meaning, and hierarchical data relationships using native tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **CSS3 (Presentation and Styling)**: Hosted strictly in an external stylesheet (`style.css`), encapsulating the visual design system, color palette, typography, grid geometries, and viewport adaptations. Inline styles (`style="..."`) and embedded `<style>` tags are strictly prohibited to avoid coupling presentation with content.
- **Git & GitHub Pages (Deployment & Version Control)**: Manages historical code provenance, branching, and automated continuous delivery to a public web address without server overhead.

### 1.3 Project Objectives and Scope
The primary objectives of this project include:
1. **Elimination of Inline Styles**: Refactor all embedded styling into an external, modular `style.css` file.
2. **Design System Formulation**: Establish a harmonious, high-contrast dark theme utilizing CSS custom properties (variables) for scalable design tokens.
3. **Responsive Multi-Device Layouts**: Combine CSS Flexbox for one-dimensional alignment with CSS Grid for two-dimensional component architectures, ensuring fluid scaling across desktop, tablet, and mobile form factors.
4. **Accessible Information Architecture**: Implement accessible landmarks, contrast ratios satisfying WCAG 2.1 AA standards, semantic form controls with linked `<label>` tags, and skip navigation links.
5. **Automated Cloud Hosting**: Initialize and configure a public Git repository on GitHub and deploy the production bundle to GitHub Pages at `https://kushx7.github.io/week-2-example/`.

---

## 2. System Architecture and Implementation Details

### 2.1 File Organization and Asset Pipeline
To adhere to professional software standards, a clean, modular directory structure was implemented. Assets, such as high-resolution author photography and custom scalable vector graphics (SVG), are organized in a dedicated directory:

```text
week-2-example/
├── index.html                 # Semantic HTML5 root markup
├── style.css                  # External modular stylesheet
├── assets/                    # Static asset directory
│   └── images/                # Visual media assets
│       ├── profile.jpeg       # High-resolution author portrait
│       ├── project-expense.svg# C Project illustration
│       ├── project-network.svg# Linux & Networking lab illustration
│       ├── project-portfolio.svg # Responsive architecture diagram
│       └── project-marketing.svg # Digital strategy visual
├── .gitignore                 # OS & editor file exclusion manifest
├── README.md                  # Technical documentation and deployment guide
└── PROJECT_REPORT.md          # Formal academic project documentation
```

### 2.2 Semantic HTML5 Document Structure
The document structure in `index.html` follows the W3C HTML5 recommendations (World Wide Web Consortium [W3C], 2021). The page uses explicit landmarks:
- `<header class="site-header">`: Encapsulates the branding identity ("Saroj.dev") and the primary navigation menu (`<nav>`).
- `<main id="main-content">`: Represents the central unique content of the page, bypassing repetitive top-level navigation via an accessible skip-link (`.skip-to-content`).
- `<section id="hero">`: The introductory viewport containing personal value propositions, call-to-action buttons, direct contact links, and the author's portrait with interactive status badges.
- `<section id="about">`: Academic background at Model Institute of Technology, professional competencies, and key metric cards.
- `<section id="skills">`: Multi-domain capability cards (Core Programming, Systems & Databases, Web & Networking, Design & Strategy).
- `<section id="projects">`: Featured engineering projects structured as `<article class="project-card">` containers with `<figure>` thumbnails, tech tags, and live repository links.
- `<section id="education">`: Chronological timeline detailing academic milestones and professional experience.
- `<section id="contact">`: Multi-column layout featuring verified contact details and a semantic, accessible contact form with explicit `<label for="...">` associations.
- `<footer class="site-footer">`: Legal disclosures, repository attribution, and back-to-top navigational anchor.

### 2.3 CSS3 Architecture and Custom Property Design Tokens
The external stylesheet `style.css` is structured using **CSS Custom Properties (`:root`)**, providing centralized control over the design system tokens:

```css
:root {
  /* Surface & Canvas Tokens */
  --bg-body: #0a0f1d;
  --bg-surface: #111827;
  --bg-surface-elevated: #1e293b;
  --bg-surface-glass: rgba(17, 24, 39, 0.78);

  /* Brand Accents */
  --primary: #38bdf8;         /* Electric Sky Cyan */
  --secondary: #6366f1;       /* Indigo Violet */
  --accent-emerald: #10b981;  /* Operational Status Dot */
  --gradient-primary: linear-gradient(135deg, #38bdf8 0%, #6366f1 100%);

  /* Typography Families */
  --font-base: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-heading: 'Outfit', 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Shadows and Transitions */
  --shadow-card-hover: 0 20px 35px -10px rgba(56, 189, 248, 0.2);
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

This design token architecture guarantees consistency across all elements and facilitates future thematic alterations without fragmented line-by-line edits.

### 2.4 Responsive Layout Engineering (Flexbox and Grid)
To build an interface resilient across varying device sizes, two complementary CSS layout models were employed:
1. **CSS Flexbox**: Utilized for one-dimensional distribution of interface components:
   - Primary navigation bar (`.nav-container`), aligning brand elements on the start edge and navigational items on the end edge.
   - Skill tag badges (`.skill-tags`), enabling automatic inline wrapping across narrow viewports.
   - Action buttons and social link groupings (`.hero-actions`, `.social-links`).
2. **CSS Grid**: Utilized for two-dimensional spatial structures:
   - **Hero Layout**: A dual-column grid (`grid-template-columns: 1.25fr 1fr; gap: var(--space-2xl);`) balancing textual biography against visual media.
   - **Skills Grid**: An auto-fitting responsive grid (`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));`), which calculates the optimal number of columns based on client viewport width without requiring ad-hoc media query rules (Mozilla Developer Network [MDN], 2023).
   - **Projects Grid**: Structured as `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-xl);`, displaying rich media cards that gracefully adapt to available space.
   - **Contact Section**: A dual-column split allocating 45% to verified contact channels and 55% to the interactive contact form.

### 2.5 Mobile-Friendly Breakpoints and Media Queries
Media queries were engineered following progressive adaptation principles:
- **Desktop (>1024px)**: Unrestricted multi-column grids, fixed glassmorphism navigation, and expanded hero illustrations.
- **Tablet / Medium Displays (769px–1024px)**: Dual-column hero and about layouts collapse to single-column vertical flows; avatar wrapper re-centers; typography scales fluidly via `clamp()`.
- **Mobile Handheld Displays (<=768px)**:
  - Navigation menu converts into a collapsible, accessible mobile drawer triggered by the hamburger icon (`#navToggle`).
  - Project grids collapse to a clean single-column presentation (`grid-template-columns: 1fr;`).
  - Card paddings and form input dimensions adjust to ensure comfortable touch targets (>48px minimum hit target height).
- **Reduced Motion (`@media (prefers-reduced-motion: reduce)`)**: Respects operating system accessibility preferences by disabling non-essential transitions and animations.

### 2.6 Version Control Workflow and GitHub Pages CI/CD
Version control management was executed using Git from the terminal:
1. Initialized repository and verified branch integrity on `main`.
2. Structured `.gitignore` to prevent committing operating system clutter (`.DS_Store`) or IDE workspaces.
3. Staged and committed verified source code (`index.html`, `style.css`, `assets/`, `README.md`).
4. Connected to the remote upstream origin: `https://github.com/kushx7/week-2-example.git`.
5. Activated GitHub Pages deployment tracking the `main` branch root folder (`/`), yielding the live URL: `https://kushx7.github.io/week-2-example/`.

---

## 3. Code Architecture and Annotated Snippets

### 3.1 Semantic HTML5 Hierarchy and Accessibility Features
The listing below illustrates the clean separation of concerns and accessible markup attributes utilized in `index.html`:

```html
<!-- Semantic Landmark Header with Accessible Skip Link -->
<a href="#main-content" class="skip-to-content">Skip to main content</a>

<header class="site-header">
  <div class="wrap nav-container">
    <a href="#hero" class="site-brand" aria-label="Saroj Kumar Kushwaha Homepage">
      <span class="brand-badge">SK</span>
      <span>Saroj.dev</span>
    </a>
    
    <!-- Mobile Accessible Toggle Button -->
    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
      <!-- SVG Hamburger Icon -->
    </button>

    <nav class="site-nav" id="siteNav" aria-label="Primary Site Navigation">
      <ul class="nav-list">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#education" class="nav-link">Education</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```
*Listing 1: Semantic `<header>`, accessible skip link, and ARIA-labelled navigation.*

### 3.2 CSS Design Tokens and Grid Layout Declarations
The listing below exhibits the implementation of CSS custom properties and dynamic auto-fit grid layouts in `style.css`:

```css
/* Auto-Fit Responsive Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);
}

/* Glassmorphism Card Architecture */
.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-glow);
  box-shadow: var(--shadow-card-hover);
}
```
*Listing 2: CSS Grid and micro-interactive hover transitions.*

### 3.3 Media Query Breakpoint Logic
The listing below demonstrates the responsive adaptations configured for tablet and mobile screens:

```css
/* Small Devices & Mobiles (768px and below) */
@media screen and (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .site-nav {
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    background: var(--bg-surface);
    border-bottom: 1px solid var(--border-subtle);
    padding: var(--space-lg) var(--space-md);
    flex-direction: column;
    display: none;
    box-shadow: var(--shadow-lg);
  }

  .site-nav.is-open {
    display: flex;
  }

  .projects-grid,
  .about-highlights,
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
```
*Listing 3: Responsive media query managing layout collapse and mobile drawer navigation.*

---

## 4. Results, Visual Showcase, and Evaluation

### 4.1 Visual Output Analysis (Desktop Viewport)
On a standard desktop display (1920×1080 and 1440×900 resolutions), the portfolio presents a cohesive visual experience:
- **Header**: Sticks smoothly to the top of the viewport with a frosted glass backdrop filter (`backdrop-filter: blur(16px)`), allowing background content to subtly shimmer through while maintaining navigation readability.
- **Hero Section**: Displays the author's introductory text, title, and interactive buttons on the left, paired with a circular portrait on the right featuring an animated glowing gradient border and a floating credentials badge ("BIT Student @ Model Institute of Technology").
- **Skills Grid**: Neatly partitions competencies into four high-contrast cards, featuring distinct icon glyphs, domain summaries, and monospaced capability tags.
- **Projects Grid**: Each card displays a high-resolution SVG project banner, a colored domain badge, a structured description, a tech stack pills container, and an external repository link.
- **Contact Form**: Provides input fields styled with dark surface backgrounds and glowing focus indicators (`box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2)`).

```text
+-----------------------------------------------------------------------------------+
|  [SK] Saroj.dev               About    Skills    Projects    Education   [Contact]    |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [BIT Student @ MIT]                          (  Profile Photo  )                 |
|  Hi, I'm Saroj Kumar Kushwaha                 (  with Glowing   )                 |
|  Technology Enthusiast & Linux Dev            (  Gradient Ring  )                 |
|                                                     [BIT Student @ MIT]           |
|  [Explore Projects ->]   [Contact Me]                                             |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|  [Profile Overview] About Me                                                      |
|  Academic journey at Model Institute of Technology...   [BIT]      [4+ Domains]   |
|                                                         [100% SoC] [Git CI/CD]    |
+-----------------------------------------------------------------------------------+
|  [Featured Works] Selected Projects                                               |
|  +---------------------------+   +---------------------------+                    |
|  | [SVG: C Expense Manager]  |   | [SVG: Linux Net Lab]      |                    |
|  | Personal Expense Manager  |   | Networking & Linux Lab    |                    |
|  | C • File I/O • Memory     |   | Debian • TCP/IP • Bash    |                    |
|  | [View Repository ->]      |   | [Lab Specs ->]            |                    |
|  +---------------------------+   +---------------------------+                    |
+-----------------------------------------------------------------------------------+
|  (C) 2026 Saroj Kumar Kushwaha. Deployed on GitHub Pages.          [Back to top ^]|
+-----------------------------------------------------------------------------------+
```
*Figure 1: Architectural wireframe diagram of the desktop application output.*

### 4.2 Visual Output Analysis (Mobile Viewport)
When tested on mobile viewports (e.g., iPhone 12/13/14, 390×844px and Samsung Galaxy S20, 360×800px):
- All horizontal multi-column grids gracefully collapse into a single vertical sequence without horizontal scrolling or viewport overflow (`overflow-x: hidden`).
- The navigation menu transforms into a clean mobile hamburger icon. When clicked, the dropdown appears smoothly over the document.
- The avatar scales down to 210px while preserving image fidelity and aspect ratio.
- Form inputs stretch to 100% width, providing ample touch targets (>48px height) for mobile thumbs.

### 4.3 Source Code Documentation and Quality Metrics
- **Strict Separation of Concerns**: 0 inline styles; 0 `<style>` tags in HTML.
- **W3C Standards Compliance**: All tags properly closed, headings follow strict descending hierarchy (`h1` -> `h2` -> `h3`), images include descriptive `alt` attributes, and form fields contain explicit `<label for="...">` bindings.
- **CSS Modularity**: 100% of colors, fonts, spacing, and radii are sourced from centralized CSS variables.

### 4.4 Comparative Evaluation
| Feature | Initial Baseline | Implemented Architecture |
| :--- | :--- | :--- |
| **Styling Location** | Embedded `<style>` tag in `<head>` | External `style.css` (Strict SoC) |
| **Color Scheme** | Generic browser defaults (#f4f7fb) | Curated Dark Glassmorphic Palette |
| **Typography** | Default Arial sans-serif | Google Fonts (`Outfit` & `Plus Jakarta Sans`) |
| **Grid Architecture** | Basic fixed 2-column | Responsive CSS Grid (`auto-fit`, `minmax`) |
| **Mobile Navigation**| Unstyled horizontal list | Responsive Collapsible Drawer + Hamburger |
| **Project Visuals** | Plain text list | High-Resolution SVG Banners & Tech Pills |
| **Version Control** | Untracked modifications | Git Repository + GitHub Pages Deployment |

---

## 5. Discussion and Conclusion

### 5.1 Critical Evaluation and Key Takeaways
This project successfully achieved all specified technical deliverables:
1. Complete architectural decoupling of HTML structure from CSS presentation.
2. Development of a modern, aesthetic, and responsive user interface for a personal portfolio.
3. Establishment of a maintainable design system powered by CSS variables, Flexbox, and CSS Grid.
4. Deployment to a public GitHub repository and automated hosting on GitHub Pages.

Through this practical assignment, the importance of planning layout geometry and establishing design systems prior to writing markup became evident. Utilizing semantic HTML elements significantly improves both code readability and accessibility for assistive technologies such as screen readers.

### 5.2 Technical Challenges Encountered and Solutions Applied
- **Challenge 1: Layout Overflow on Narrow Screens**: Initially, long technical tags caused minor horizontal overflow on 360px mobile viewports.
  - *Solution*: Replaced fixed pixel widths with fluid rules (`width: 100%`, `flex-wrap: wrap`, `gap: var(--space-xs)`), and applied `box-sizing: border-box` globally.
- **Challenge 2: Responsive Grid without Media Query Bloat**: Hardcoding multiple media query breakpoints for each screen size is cumbersome and brittle.
  - *Solution*: Leveraged the CSS Grid `repeat(auto-fit, minmax(300px, 1fr))` formula, allowing the browser engine to automatically determine column counts based on available screen space.
- **Challenge 3: High Contrast and Visual Elegance**: Ensuring text remains legible against dark backgrounds while avoiding harsh contrast.
  - *Solution*: Implemented a calibrated slate palette (`#f8fafc` for primary headers, `#94a3b8` for body text) on a midnight navy canvas (`#0a0f1d`), exceeding WCAG AA contrast standards.

### 5.3 Future Roadmap
Future iterations will incorporate:
- Dynamic theme switching (light/dark mode toggle using CSS variables and localStorage).
- A dynamic client-side filtering system for project categories (Systems, C Projects, Web, Design).
- Integration of a headless CMS (e.g., Markdown-based blog) for sharing technical articles.

---

## 6. References (APA 7th Edition)

Duckett, J. (2014). *HTML and CSS: Design and build websites*. John Wiley & Sons.

Meyer, E. A., & Weyke, E. (2023). *CSS: The definitive guide: Visual presentation for the web* (5th ed.). O'Reilly Media.

Mozilla Developer Network. (2023). *CSS grid layout*. MDN Web Docs. Retrieved from https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

World Wide Web Consortium. (2021). *HTML 5.3: W3C recommendation*. W3C. Retrieved from https://www.w3.org/TR/html53/

---
*End of Report — Saroj Kumar Kushwaha (Model Institute of Technology)*
