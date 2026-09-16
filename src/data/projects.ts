/**
 * GLABS project data — real, live-deployed products first (main players
 * leading: EGX Desk, NetStream, Mizan ERPX, The Pharmacy), then the
 * owner's public GitHub repositories (ordered by last update).
 *
 * Live products link to their deployments (that's what cards open);
 * repositories link to their own repo page — never the profile page.
 *
 * Thumbnails are REAL screenshots captured from the running apps
 * (public/products/*.jpg). One product currently has a web deployment
 * error (its `status` is "updating") — its screenshot comes from the
 * app running locally (HIGH-HANDS) and it is flagged in the pending list.
 * Mizan ERPX's deployment is back online as of Sep 17, 2026.
 */

export type Project = {
  title: string;
  repo: string; // "" when deployed from a private repository
  repoUrl?: string; // set when the source is public on GitHub
  link: string; // primary link — live deployment when one exists
  live?: string; // live deployment URL (same as link for live products)
  domain?: string; // e.g. "netstreamx.vercel.app"
  description: string;
  language?: string;
  stars: number;
  forks: number;
  commits: number;
  releases: number;
  updatedLabel: string;
  createdLabel: string;
  tags: string[];
  image: string;
  status?: "live" | "updating"; // deployment health (default "live")
  caseStudy?: string; // slug of the full case-study page (/work/[slug])
};

const GH = "https://github.com/mahmoudmohamedxx1-hue";

/* ------------------------------------------------------------------ */
/* Live products — deployed, clickable, screenshotted                  */
/* Main players first: EGX Desk, NetStream, Mizan ERPX, The Pharmacy   */
/* ------------------------------------------------------------------ */

export const liveProjects: Project[] = [
  {
    title: "EGX Desk",
    repo: "egxdesk",
    repoUrl: `${GH}/egxdesk`,
    link: "https://egxdesk.vercel.app",
    live: "https://egxdesk.vercel.app",
    domain: "egxdesk.vercel.app",
    description:
      "Arabic-first (AR/EN) research desk for the Egyptian Exchange — live delayed market data, index charts, sector movers, signals from technical + fundamental + news analysis, GCC markets and an AI assistant. No login, no paywall.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 36,
    releases: 0,
    updatedLabel: "Sep 14, 2026",
    createdLabel: "Sep 13, 2026",
    tags: ["Next.js", "TypeScript", "Prisma", "Recharts"],
    image: "/products/egxdesk.jpg",
    status: "live",
    caseStudy: "egx-desk",
  },
  {
    title: "NetStream",
    repo: "netstream",
    repoUrl: `${GH}/netstream`,
    link: "https://netstreamx.vercel.app",
    live: "https://netstreamx.vercel.app",
    domain: "netstreamx.vercel.app",
    description:
      "Netflix-style streaming platform — movies and TV series streamed in HD through third-party providers, with search, trending rows and full title pages.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 54,
    releases: 0,
    updatedLabel: "Sep 9, 2026",
    createdLabel: "Aug 11, 2026",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    image: "/products/netstream.jpg",
    status: "live",
    caseStudy: "netstream",
  },
  {
    title: "Mizan ERPX",
    repo: "US-Journal-ERP",
    repoUrl: `${GH}/US-Journal-ERP`,
    link: "https://mizan-erpx.vercel.app",
    live: "https://mizan-erpx.vercel.app",
    domain: "mizan-erpx.vercel.app",
    description:
      "Journal management & accounting ERP — full approval workflow, the four financial statements, AR/AP aging, audit log, plus an Electron desktop build with local encrypted storage.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 76,
    releases: 26,
    updatedLabel: "Sep 14, 2026",
    createdLabel: "Aug 24, 2026",
    tags: ["Next.js", "Electron", "Prisma", "Accounting"],
    image: "/products/mizan-erp.jpg",
    status: "live",
    caseStudy: "mizan-erpx",
  },
  {
    title: "The Pharmacy",
    repo: "THE-PHARMACY",
    repoUrl: `${GH}/THE-PHARMACY`,
    link: "https://the-pharmacy.vercel.app",
    live: "https://the-pharmacy.vercel.app",
    domain: "the-pharmacy.vercel.app",
    description:
      "Bilingual (AR/EN) AI-powered e-pharmacy — 496 products with real photos, prescription upload with OCR drug matching, an AI health assistant, drug-interaction checker, Egyptian checkout with zone delivery, and a full admin panel.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 12,
    releases: 0,
    updatedLabel: "Sep 14, 2026",
    createdLabel: "Sep 13, 2026",
    tags: ["Next.js", "Prisma", "Tailwind CSS", "PWA"],
    image: "/products/the-pharmacy.jpg",
    status: "live",
    caseStudy: "the-pharmacy",
  },
  {
    title: "Chefaa",
    repo: "CHEFAA_CLONE",
    repoUrl: `${GH}/CHEFAA_CLONE`,
    link: "https://chefaa-clone.vercel.app",
    live: "https://chefaa-clone.vercel.app",
    domain: "chefaa-clone.vercel.app",
    description:
      "Full clone of Chefaa — Egypt's online pharmacy and healthcare e-commerce platform: medicine catalog, search, cart and checkout, backed by a Python data pipeline.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 2,
    releases: 0,
    updatedLabel: "Sep 13, 2026",
    createdLabel: "Dec 19, 2025",
    tags: ["TypeScript", "Python", "Supabase", "BeautifulSoup"],
    image: "/products/chefaa.jpg",
    status: "live",
    caseStudy: "chefaa",
  },
  {
    title: "Dope Perfumes",
    repo: "",
    link: "https://dope-perfumes.vercel.app",
    live: "https://dope-perfumes.vercel.app",
    domain: "dope-perfumes.vercel.app",
    description:
      "Premium fragrance e-commerce — a bold dark-luxe storefront with designer perfume catalog, product detail pages and brand storytelling.",
    stars: 0,
    forks: 0,
    commits: 0,
    releases: 0,
    updatedLabel: "Live",
    createdLabel: "",
    tags: ["E-commerce", "Storefront", "Branding"],
    image: "/products/dope-perfumes.jpg",
    status: "live",
    caseStudy: "dope-perfumes",
  },
  {
    title: "FreeStream TV",
    repo: "freestream-tv",
    repoUrl: `${GH}/freestream-tv`,
    link: "https://freestream-tvs.vercel.app",
    live: "https://freestream-tvs.vercel.app",
    domain: "freestream-tvs.vercel.app",
    description:
      "Free live TV streaming — 36,000+ channels from 25+ providers (Pluto TV, Tubi, Roku, Xumo and more), browsable by sport, movies, news and kids.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 50,
    releases: 0,
    updatedLabel: "Sep 13, 2026",
    createdLabel: "Aug 23, 2026",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    image: "/products/freestream-tv.jpg",
    status: "live",
    caseStudy: "freestream-tv",
  },
  {
    title: "HIGH-HANDS",
    repo: "high-hands",
    repoUrl: `${GH}/high-hands`,
    link: "https://high-hands.vercel.app",
    live: "https://high-hands.vercel.app",
    domain: "high-hands.vercel.app",
    description:
      "Real-time global intelligence dashboard — geopolitical conflict tracking, military & civil aviation, maritime AIS, markets, climate hazards and news fused into one live situation room with a 3D globe, map layers and an AI analyst.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 8,
    releases: 0,
    updatedLabel: "Sep 14, 2026",
    createdLabel: "Sep 14, 2026",
    tags: ["TypeScript", "Vite", "globe.gl", "deck.gl"],
    image: "/products/high-hands.jpg",
    status: "updating",
    caseStudy: "high-hands",
  },
];

/* ------------------------------------------------------------------ */
/* Open-source repositories — no public deployment (yet)               */
/* ------------------------------------------------------------------ */

export const repoProjects: Project[] = [
  {
    title: "CloneForge",
    repo: "CLONEFORGE",
    repoUrl: `${GH}/CLONEFORGE`,
    link: `${GH}/CLONEFORGE`,
    description:
      "App clone development — end-to-end replicas of popular products, built on a modern React stack.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 16,
    releases: 0,
    updatedLabel: "Aug 20, 2026",
    createdLabel: "Aug 19, 2026",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    image: "",
  },
  {
    title: "EasyPresentation",
    repo: "EasyPresentation",
    repoUrl: `${GH}/EasyPresentation`,
    link: `${GH}/EasyPresentation`,
    description:
      "AI-powered slide generator — turn plain outlines into polished, presentable decks.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 10,
    releases: 0,
    updatedLabel: "Aug 20, 2026",
    createdLabel: "Aug 19, 2026",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    image: "",
  },
  {
    title: "G-Agency",
    repo: "g-agency",
    repoUrl: `${GH}/g-agency`,
    link: `${GH}/g-agency`,
    description:
      "Agency web experience built with Lovable — React, Vite and Tailwind CSS.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 54,
    releases: 0,
    updatedLabel: "Mar 8, 2026",
    createdLabel: "Mar 8, 2026",
    tags: ["React", "Vite", "TypeScript", "Lovable"],
    image: "",
  },
  {
    title: "ECL WebApp",
    repo: "ecl-webapp",
    repoUrl: `${GH}/ecl-webapp`,
    link: `${GH}/ecl-webapp`,
    description:
      "IFRS 9 Expected Credit Loss calculation web application — a comprehensive financial analyst workbench for ECL calculations with AI assistance.",
    language: "TypeScript",
    stars: 1,
    forks: 0,
    commits: 7,
    releases: 0,
    updatedLabel: "Oct 18, 2025",
    createdLabel: "Oct 18, 2025",
    tags: ["Next.js", "TypeScript", "Supabase", "xAI API"],
    image: "",
  },
  {
    title: "CreditRiskAI",
    repo: "CreditRiskAI",
    repoUrl: `${GH}/CreditRiskAI`,
    link: `${GH}/CreditRiskAI`,
    description:
      "End-to-end AI-powered credit default risk prediction with advanced machine learning (XGBoost, SHAP, WoE/IV) and an interactive dashboard for real-time risk assessment.",
    language: "Python",
    stars: 0,
    forks: 0,
    commits: 16,
    releases: 0,
    updatedLabel: "Sep 11, 2025",
    createdLabel: "Oct 21, 2025",
    tags: ["Python", "Streamlit", "XGBoost", "SHAP"],
    image: "",
  },
  {
    title: "External Auditor",
    repo: "external-auditor-webapp",
    repoUrl: `${GH}/external-auditor-webapp`,
    link: `${GH}/external-auditor-webapp`,
    description:
      "External audit engagement app — built with v0.dev and deployed on Vercel.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    commits: 4,
    releases: 0,
    updatedLabel: "Aug 6, 2025",
    createdLabel: "Aug 5, 2025",
    tags: ["Next.js", "v0.dev", "Vercel", "TypeScript"],
    image: "",
  },
];

export const projects: Project[] = [...liveProjects, ...repoProjects];

export const EMAIL = "mahmoud.elbaramoni@gmail.com";

/**
 * The hero card wall — the eight LIVE products, each captured as a real
 * screenshot, repeated to fill three 7-card rows (21 slots) so the
 * ±1000px parallax glide never exposes empty edges on wide viewports.
 */
export type HeroProduct = {
  title: string;
  link: string;
  thumbnail: string;
  live?: boolean;
  status?: "live" | "updating";
  description?: string;
  language?: string;
  stars?: number;
  updatedLabel?: string;
  domain?: string;
};

export const heroProducts: HeroProduct[] = (() => {
  const wall: HeroProduct[] = [];
  for (let i = 0; i < 21; i++) {
    const p = liveProjects[i % liveProjects.length];
    wall.push({
      title: p.title,
      link: p.link,
      thumbnail: p.image,
      live: true,
      status: p.status ?? "live",
      description: p.description,
      language: p.language,
      stars: p.stars,
      updatedLabel: p.updatedLabel,
      domain: p.domain,
    });
  }
  return wall;
})();

export const githubProfile = GH;
