# Satish Sanjay Surwade - Professional Portfolio & Sandbox

An award-winning, conversion-focused software engineering portfolio website designed for **Satish Sanjay Surwade**, a Python Developer and AI & Machine Learning Enthusiast based in Maharashtra, India.

This application features a full-stack architecture powered by **React (Vite)** on the client side, **Express** on the server side, and **Gemini 3.5 Flash** for interactive, recruiter-facing AI capabilities.

---

## 🌟 Key Features

1. **AI Recruiter Agent (AI Double)**: An interactive floating chat advisor powered by Gemini. Recruiters can ask about Satish's projects, studies, skills, or availability, receiving professional, tailored responses.
2. **Interactive Projects Sandbox**:
   - **Lab 01: AI Resume Match Analyzer**: Submit a target Job Description and run a live semantic alignment audit. Calculates a precise ATS score, extracts matching terms, and outlines concrete recommendations.
   - **Lab 02: Spam Email Classifier**: An offline, vectorized Natural Language Processing keyword model demonstrating classification probability matrices.
   - **Lab 03: Movie Recommender**: Computes content-based recommendations using cosine similarity on user-selected genres.
3. **Print-Ready HTML Resume Viewer**: A dedicated CV modal designed to instantly convert into a standard, clean PDF when invoking print commands (`window.print()`).
4. **Command Palette (`Ctrl + K`)**: A luxury, keyboard-navigable command modal allowing instant routing to portfolio segments, contact info copying, or opening GitHub/LinkedIn profiles.
5. **SEO & Performance Tuned**: Fully semantic markup, custom meta tags, canonical definitions, `robots.txt`, and automated `sitemap.xml` indexing.

---

## 📁 Project Directory Structure

```text
/
├── server.ts               # Custom Express server with Gemini API routes & Vite middleware
├── package.json            # Script definitions and dependency trees
├── metadata.json           # Application manifest and permissions list
├── public/                 # Static assets, sitemaps, and robots configurations
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.tsx            # React application entry node
    ├── App.tsx             # Master Layout managing loaders, cursors, and overlays
    ├── types.ts            # TypeScript interface definitions
    ├── data.ts             # Profile datasets (experience, skills, achievements)
    ├── index.css           # Global Tailwind CSS directives, typography, and scrollbars
    └── components/         # Modular React views
        ├── Navbar.tsx      # Glassmorphic nav with scroll tracker and visitor count
        ├── Hero.tsx        # Title section with role typewriter and custom SVG network
        ├── About.tsx       # Bio, pillars of integrity, and stats metrics
        ├── Skills.tsx      # Transitioning progress bars grouped by categories
        ├── Projects.tsx    # Showcase cards, case study dialogs, and testing Labs
        ├── ExperienceEducation.tsx # Double chronological timeline (BCA + study achievements)
        ├── Services.tsx    # Technical capability contract outlines
        ├── TestimonialsCertifications.tsx # Verified testimonials and credentials
        ├── Blog.tsx        # SEO-optimized articles with inline expansion views
        ├── Contact.tsx     # Simulated mailing form with clipboard helpers
        ├── AIAdvisor.tsx   # Floating chat widget powered by server proxy
        ├── CommandPalette.tsx # Search drawer toggler (Ctrl+K)
        └── ResumeViewer.tsx # Print-ready black-and-white standard CV
```

---

## 🚀 Deployment & Installation Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Local Development Setup

1. Clone or extract this repository to your local system.
2. Install all dependencies from `package.json`:
   ```bash
   npm install
   ```
3. Set up your Gemini API Key in your environment or a `.env` file at the root:
   ```env
   GEMINI_API_KEY="your-actual-api-key-here"
   ```
4. Boot the development workspace on port `3000`:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

### Production Build & Deployment

To build the static React assets and compile the Express server into a bundled production artifact:

1. Compile the build:
   ```bash
   npm run build
   ```
2. Start the production Node server:
   ```bash
   npm run start
   ```

---

## 🔒 Security & Environment Variables

This application isolates private secrets server-side. The **Gemini API Key** is never bundled or transmitted to the client browser, mitigating exposure hazards.

- `GEMINI_API_KEY`: Required on the server to operate the AI Career Advisor and the Resume Match Sandbox.
