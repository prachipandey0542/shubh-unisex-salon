# Shubh Unisex Salon - Premium Responsive Website

A complete, production-ready React + Vite website for **Shubh Unisex Salon**, Indore's premier unisex salon. Designed with a luxury black-and-gold aesthetic, smooth animations, and full mobile responsiveness.

---

## Features

- **Premium Design** - Luxury black (#111111) + gold (#D4AF37) color palette
- **Playfair Display + Poppins** typography for an elegant feel
- **Framer Motion animations** - scroll reveals, counters, hero entrance, carousel
- **Sticky Navbar** - transparent on load, glass-blur on scroll, mobile hamburger menu
- **Hero Section** - full-viewport with Unsplash background, animated particles, CTA buttons
- **About Section** - two-column layout with animated stat counters
- **Services Section** - 17 filterable service cards with hover effects
- **Why Choose Us** - dark charcoal section with 8 icon feature cards
- **Gallery** - 12-image masonry grid with hover zoom and lightbox
- **Testimonials** - auto-play carousel with 6 customer reviews
- **Instagram Section** - CTA band linking to the real profile
- **Contact Section** - contact cards + embedded Google Map
- **Footer** - dark footer with quick links, services, and contact info
- **Floating WhatsApp Button** - with pulse animation
- **Sticky Call Button** - mobile-only bottom bar
- **Scroll to Top Button** - appears after scrolling
- **Loading Screen** - animated brand intro
- **SEO-friendly** - meta tags, OG tags, semantic HTML
- **Fully Responsive** - mobile-first design

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion 11 | Animations & transitions |
| React Icons 5 | Icon library |

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Extract the ZIP and navigate into the project folder
cd salon-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Commands

```bash
# Development server with hot reload
npm run dev

# Production build (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview
```

---

## Folder Structure

```
salon-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── InstagramSection.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollTop.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── LoadingScreen.jsx
│   ├── data/
│   │   ├── servicesData.js
│   │   ├── testimonialsData.js
│   │   └── galleryData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .gitignore
└── README.md
```

## Deployment

### Deploy to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Import Project → Select your repo
3. Vercel auto-detects Vite — click **Deploy**
4. Your site is live at `your-project.vercel.app`

### Deploy to Render

1. Push the project to a GitHub repository
2. Go to [render.com](https://render.com) → New → Static Site
3. Connect your repo and set:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Create Static Site**

### Deploy to Netlify

1. Run `npm run build` locally
2. Drag and drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop)

---
