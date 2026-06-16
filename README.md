# AUTH AI Website — authai.space

React + Vite + Tailwind CSS v4 · Professional light theme

## Tech Stack
- **React 19** — component-based UI
- **Vite 8** — lightning-fast dev server and builds
- **Tailwind CSS v4** — utility-first styling with custom design tokens
- **Lucide-style icons** — custom inline SVG icon set (zero external dependency)

## Folder Structure
```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # One file per page section
│   │   ├── Hero.jsx
│   │   ├── Why.jsx
│   │   ├── Services.jsx
│   │   ├── Industries.jsx
│   │   ├── Process.jsx
│   │   ├── Results.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   └── ui/              # Reusable primitives
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Eyebrow.jsx
│       ├── Icon.jsx
│       └── SectionHead.jsx
├── data/
│   └── site.js          # ← ALL editable content lives here
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
├── main.jsx
└── index.css            # Tailwind + custom animations
```

## Quick Start
```bash
npm install
npm run dev       # localhost:5173
npm run build     # outputs to dist/
npm run preview   # preview production build
```

## How to Update Content
Everything you'll change is in `src/data/site.js`:
- Company info, phone, email → `SITE`
- Nav links → `NAV_LINKS`
- Why cards → `WHY_CARDS`
- Services → `SERVICE_GROUPS`
- Industries → `INDUSTRIES`
- Process steps → `PROCESS_STEPS`
- Stats → `RESULTS`
- Testimonials → `TESTIMONIALS`
- FAQs → `FAQS`
- About stats → `ABOUT_STATS`

## Design Tokens
Colors, fonts and spacing are defined in `src/index.css` under `@theme {}`.
Primary green brand: `brand-600` (#1a8558)
WhatsApp green: `wa` (#25d366)
