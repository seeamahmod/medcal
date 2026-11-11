# MedCal — Pharmacy Landing Page

A responsive, animated landing page for **MedCal**, a modern pharmacy. It's built in React and Tailwind CSS from the MedCal Figma design, and matches the 1440px artboard pixel for pixel.

![MedCal hero](public/assets/hero-poster.png)

## Features

- **Matches the Figma design.** Spacing, type, colors and image crops come from the Figma file. Every section lines up with the 1440px artboard (section offsets match to the pixel).
- **Fully responsive.** It works from 320px phones up to 1920px+ desktops, with a hamburger menu on mobile, stacked grids and a category row you can swipe.
- **Hero video.** A full-bleed background video that autoplays muted and loops, with `playsInline` so it also plays on iOS. A poster image shows first so the hero never looks empty.
- **Nucleo icons.** Every icon is a [Nucleo](https://nucleoapp.com) *core / outline* icon. The same icons were swapped into the Figma file so design and code stay in sync.
- **Real partner logos.** The "Collaborated with 20+ hospitals" grid uses real hospital logos (SVG). Each one is sized to fit its card.
- **Animations** (Framer Motion + CSS):
  - Staggered headline reveal and a slow zoom on the hero video
  - Sections fade up as you scroll into them
  - Stats count up when they come into view
  - Product cards lift on hover, product images zoom, and "Add to cart" gives feedback
  - Live countdown timer with flip-style digits
  - Testimonial marquee that loops forever and pauses on hover
  - Navbar turns into a blurred bar once you scroll
  - Respects `prefers-reduced-motion`

## Tech stack

| | |
|---|---|
| Framework | [React 19](https://react.dev) + [Vite](https://vite.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (design tokens in `src/index.css`) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Inter, Syne (Google Fonts) |
| Icons | Nucleo core outline (inline SVG, `src/components/Icon.jsx`) |
| Hosting | [Vercel](https://vercel.com) |

## Getting started

```bash
git clone https://github.com/seeamahmod/medcal.git
cd medcal
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
```

## Project structure

```
public/assets/            images, SVGs, hero video + poster
  hospitals/              partner hospital logos (SVG)
src/
  components/
    Icon.jsx              Nucleo icon set
    ProductCard.jsx       shared product card
    motion.jsx            Reveal / Stagger / CountUp animation helpers
  sections/
    Hero.jsx              navbar + video hero
    About.jsx             intro + stats
    Trending.jsx          trending products
    Hospitals.jsx         partner hospital logos
    Offers.jsx            25%-off bento cards
    Products.jsx          categories + product grid
    HotOffer.jsx          countdown offer
    Testimonials.jsx      customer reviews marquee
    Footer.jsx
  App.jsx
  index.css               Tailwind + design tokens
```

## Hero video

The hero plays `public/assets/hero.mp4` (and `hero.webm` if present). The video is always **muted**, which browsers require for autoplay. If neither file is there, the poster image (`hero-poster.png`) shows instead.

To replace the video, drop a new `hero.mp4` (H.264, ideally under 8 MB, 1920×1080) into `public/assets/`, then commit and push. Vercel redeploys on its own.

## Deployment

The repo is connected to Vercel. Every push to `main` deploys to production, and every other branch or PR gets a preview URL. To deploy by hand:

```bash
npx vercel --prod
```

## Credits

- Design: **Seeam Ahmod**, from the MedCal Figma file
- Icons: [Nucleo](https://nucleoapp.com)
- Hospital logos are trademarks of their respective owners and appear here only to demonstrate the design. They don't imply any affiliation or endorsement. Logo files come from Wikimedia Commons.
