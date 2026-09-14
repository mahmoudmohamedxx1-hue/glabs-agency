# GLABS — The Ultimate Development Studio

The GLABS AI agency landing page: a hero-parallax wall of **8 live products** (real screenshots, captured from the running apps), studio stats, services, process and contact — built with Next.js, Tailwind CSS and framer-motion.

## Highlights

- **Hero parallax wall** — 21 cards across 3 rows gliding in opposite directions on scroll (spring physics), each card opening the product's **live deployment**
- **8 live products** — EGX Desk, NetStream, Mizan ERPX, The Pharmacy, Chefaa, Dope Perfumes, FreeStream TV and HIGH-HANDS, each with a real screenshot of the running app
- **Real numbers** — 14 public repositories, 340+ commits and 26 releases, straight from GitHub
- **Selected work** — every live product card opens the running site; the source repos are linked separately
- **Contact** — `mahmoud.elbaramoni@gmail.com` (CTA + footer) and [github.com/mahmoudmohamedxx1-hue](https://github.com/mahmoudmohamedxx1-hue)
- **Analytics** — Vercel Analytics enabled (activate the project on Vercel, no config needed)

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS |
| Animation | framer-motion |
| Analytics | @vercel/analytics |

## Getting started

```bash
bun install        # or: npm install
bun run dev        # http://localhost:3000
```

## Project structure

```
src/
  app/                 # layout, page, globals
  components/landing/ # hero-parallax, navbar, stats, services, work,
                       # process, testimonials, cta, footer
  data/projects.ts     # single source of truth: 8 live products + repos
public/products/       # real 960x768 screenshots of the live apps
```

Adding or reordering products: edit [`src/data/projects.ts`](src/data/projects.ts) — the hero wall, work grid, footer links and stats all read from it.

## License

MIT — build by GLABS.
