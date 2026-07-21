# Shubh Unisex Salon - Premium Responsive Website
# Live Demo : https://shubh-unisex-salon.vercel.app/

A modern and responsive business website developed for Shubh Unisex Salon to strengthen its online presence, showcase salon services, and provide customers with an easy way to connect through WhatsApp, phone, and Google Maps.

The website is built with React and Tailwind CSS, featuring a premium UI, smooth animations, and a fully responsive design optimized for desktop and mobile devices.

---

## Features

- **Premium Design** - Luxury black & gold themed interface with modern aesthetics.
- **Smooth Animations** - Interactive transitions and engaging user experience powered by Framer Motion.
- **Hero Section** - Engaging landing section with clear call-to-action buttons.
- **About Section** - Highlights the salon with business information and achievements.
- **Services Section** - Displays salon services in an organized and user-friendly layout.
- **Why Choose Us** - Showcases the salon's key strengths and unique offerings.
- **Gallery** - Interactive image gallery with lightbox preview.
- **Testimonials** - Customer reviews displayed in a smooth carousel.
- **Instagram Section** - Direct link to the salon's Instagram profile.
- **Contact Section** - Business contact details with embedded Google Maps.
- **SEO-friendly** - Semantic HTML and optimized metadata.
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React  | UI framework |
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

## Future Enhancements

- Online appointment booking
- Admin dashboard
- Dynamic service management
- Customer reviews management
- Blog section
- Online payment integration

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

## Author

Prachi Pandey

- GitHub: https://github.com/prachipandey0542
- LinkedIn: https://www.linkedin.com/in/prachi-pandey-300326255

---
