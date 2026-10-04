# Personal Portfolio & Professional Web Showcase

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://kushx7.github.io/week-2-example/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> A modern, responsive personal portfolio website built with strict **separation of concerns**, semantic HTML5 architecture, custom CSS3 properties, CSS Grid, Flexbox, and deployed via **GitHub Pages**.

---

## 🌐 Live Website & Links
- **Live URL**: [https://kushx7.github.io/week-2-example/](https://kushx7.github.io/week-2-example/)
- **GitHub Repository**: [https://github.com/kushx7/week-2-example](https://github.com/kushx7/week-2-example)
- **Author**: **Saroj Kumar Kushwaha** (Bachelor of Information Technology, Model Institute of Technology)
- **Email**: [singsaroj737@gmail.com](mailto:singsaroj737@gmail.com)

---

## 📌 Project Overview
This project serves as a comprehensive demonstration of foundational web development principles. It moves beyond standard browser-default layouts and inline styling by implementing an external, modular CSS architecture coupled with an accessible semantic HTML foundation.

### Key Objectives
1. **Separation of Concerns**: Complete decoupling of structure (`index.html`) from presentation (`style.css`), prohibiting inline styles and deprecated formatting tags.
2. **Modern Responsive Layouts**: Seamless transition across desktop, tablet, and mobile displays using CSS Grid and Flexbox with zero layout breakage.
3. **Design System & Aesthetics**: A curated dark-mode color scheme with electric cyan and indigo accents, glassmorphism headers, fluid typography, and interactive micro-interactions.
4. **Accessibility (a11y) & SEO**: W3C standards compliance, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), keyboard navigation, skip links, and descriptive meta tags.
5. **Version Control & CI/CD**: Clean Git version control workflows and automated hosting through GitHub Pages.

---

## 🎨 Design System & Architecture

### Color Palette (Tokens)
| Variable Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--bg-body` | `#0a0f1d` | Canvas background (Midnight Navy) |
| `--bg-surface` | `#111827` | Card and component surfaces |
| `--bg-surface-elevated` | `#1e293b` | Floating elements and input backgrounds |
| `--primary` | `#38bdf8` | Brand accent (Electric Cyan) |
| `--secondary` | `#6366f1` | Secondary gradient accent (Indigo) |
| `--accent-emerald` | `#10b981` | Status dots & positive indicators |
| `--text-main` | `#f8fafc` | Primary high-contrast text |
| `--text-muted` | `#94a3b8` | Body text & descriptions |

### Typography
- **Headings**: `Outfit` (700/800 weight) — Geometric, modern sans-serif
- **Body Text**: `Plus Jakarta Sans` (400/500/600 weight) — Clean, highly readable digital sans-serif
- **Code & Tags**: `JetBrains Mono` / SFMono — Monospaced technical indicators

---

## 📁 Repository Structure
```text
week-2-example/
├── index.html                 # Semantic HTML5 document structure
├── style.css                  # External modular stylesheet (Design system tokens)
├── assets/                    # Project assets directory
│   └── images/
│       ├── profile.jpeg       # High-resolution author portrait
│       ├── project-expense.svg# C Project illustration
│       ├── project-network.svg# Linux & Networking lab illustration
│       ├── project-portfolio.svg # Web architecture graphic
│       └── project-marketing.svg # Digital strategy visual
├── .gitignore                 # Excluded system & temporary files
├── README.md                  # Project documentation & specs
├── PROJECT_REPORT.md          # 5-6 Page formal academic project report (APA 7th)
└── project_report.html        # Formatted printable version of the project report
```

---

## 🚀 Local Development Setup

To run and preview this project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kushx7/week-2-example.git
   cd week-2-example
   ```

2. **Open with any static server or browser**:
   - Using Python 3:
     ```bash
     python3 -m http.server 3000
     ```
     Navigate to `http://localhost:3000` in your web browser.
   - Or double-click `index.html` to open it directly in Chrome, Firefox, Safari, or Edge.

---

## ⚙️ GitHub Pages Deployment Guide

To enable live hosting on GitHub Pages:
1. Navigate to your repository on GitHub: `https://github.com/kushx7/week-2-example`.
2. Click on **Settings** (tab at the top right).
3. In the left navigation menu, under the **Code and automation** section, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
5. Click **Save**.
6. Within 1–2 minutes, your site will be live at:
   `https://kushx7.github.io/week-2-example/`

---

## 📄 License & Attribution
- Developed by **Saroj Kumar Kushwaha** for Web Technology coursework.
- Released under the [MIT License](LICENSE).
