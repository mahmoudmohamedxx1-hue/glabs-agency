/**
 * GLABS case studies — one per live product.
 *
 * The wall on the home page proves breadth; these pages prove depth.
 * Every claim here is grounded in what the products actually do — no
 * invented clients, no invented numbers. Stats come from the shipped
 * product and its git history.
 */

export type FeatureIcon =
  | "activity"
  | "chart"
  | "globe"
  | "languages"
  | "bot"
  | "database"
  | "layers"
  | "lock"
  | "play"
  | "search"
  | "shopping"
  | "stethoscope"
  | "plane"
  | "ship"
  | "signal"
  | "sparkles"
  | "tv"
  | "users"
  | "workflow"
  | "file-check"
  | "map"
  | "shield";

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  description: string; // one-liner for cards & social cards
  image: string;
  status: "live" | "updating";
  live?: string;
  domain?: string;
  repoUrl?: string;
  repoName?: string;
  year: string;
  timeline: string;
  platforms: string[];
  audience: string;
  challenge: string[]; // paragraphs
  challengePoints: string[]; // bullet pain-points
  solution: string[]; // paragraphs
  features: { icon: FeatureIcon; title: string; body: string }[];
  stack: { name: string; role: string }[];
  stats: { label: string; value: string }[];
  outcome: string[]; // paragraphs
  proves: string[]; // "what this proves" bullets
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "egx-desk",
    title: "EGX Desk",
    tagline: "An Arabic-first research desk for the Egyptian Exchange",
    description:
      "Live delayed market data, index charts, sector movers and tri-source signals for the Egyptian Exchange — bilingual, no login, no paywall.",
    image: "/products/egxdesk.jpg",
    status: "live",
    live: "https://egxdesk.vercel.app",
    domain: "egxdesk.vercel.app",
    repoUrl: "https://github.com/mahmoudmohamedxx1-hue/egxdesk",
    repoName: "egxdesk",
    year: "2026",
    timeline: "First commit to production in 2 days — Sep 2026, actively shipping",
    platforms: ["Web", "Desktop-grade responsive"],
    audience: "Egyptian retail investors and market researchers",
    challenge: [
      "Retail investors following the Egyptian Exchange work with a patchwork of tools: official portals for prices, spreadsheets for fundamentals, social media for news, and charting sites that don't speak Arabic. Every serious question about a listed company means stitching three or four sources together by hand.",
      "The result is that context gets lost. A stock can look technically strong while its fundamentals deteriorate, or break out on news an investor never saw — because nothing in their workflow connects price, fundamentals and headlines in one place.",
    ],
    challengePoints: [
      "Market data sits behind logins, paywalls or cluttered portals",
      "Arabic-first investors get a second-class, translated-later experience",
      "Technical, fundamental and news analysis live in separate tools",
      "GCC regional context (Saudi, Dubai, Abu Dhabi, Kuwait) is a separate visit",
    ],
    solution: [
      "EGX Desk fuses the whole research workflow into one bilingual desk. Live delayed prices, index performance and sector movers render server-side for instant first paint, with Recharts powering interactive index and ticker charts.",
      "The signal engine combines three lenses — technical indicators, fundamental ratios and news flow — into a single per-stock read, so a headline move is seen next to the fundamentals that explain it. GCC markets ship alongside EGX in the same interface, and an AI assistant answers natural-language research questions on top of it all.",
      "And it's open: no account, no paywall, no onboarding wall. Open the site and you're at the desk.",
    ],
    features: [
      {
        icon: "activity",
        title: "Live EGX market data",
        body: "Delayed prices, index levels and movers rendered server-side, so the desk is useful the moment it opens.",
      },
      {
        icon: "chart",
        title: "Index & ticker charts",
        body: "Interactive charts built on Recharts — zoom, hover and crosshair reads without leaving the page.",
      },
      {
        icon: "signal",
        title: "Tri-source signal engine",
        body: "Technical + fundamental + news analysis fused into one per-stock verdict instead of three separate tabs.",
      },
      {
        icon: "languages",
        title: "Arabic-first, RTL-native",
        body: "Full AR/EN bilingual experience with proper right-to-left layout — Arabic is a first-class citizen, not an afterthought.",
      },
      {
        icon: "globe",
        title: "GCC markets built in",
        body: "Saudi, Dubai, Abu Dhabi, Kuwait and more alongside EGX — regional context without changing tools.",
      },
      {
        icon: "bot",
        title: "AI research assistant",
        body: "Ask natural-language questions about a stock or the market and get grounded answers inside the desk.",
      },
    ],
    stack: [
      { name: "Next.js", role: "App Router with server components — fast first paint for data-heavy views" },
      { name: "TypeScript", role: "End-to-end typing across market data, signals and UI" },
      { name: "Prisma", role: "Typed data layer for instruments, snapshots and fundamentals" },
      { name: "Recharts", role: "Interactive index and ticker charting" },
      { name: "Tailwind CSS", role: "RTL-ready bilingual styling system" },
    ],
    stats: [
      { label: "Days from first commit to production", value: "2" },
      { label: "Languages, first-class", value: "AR + EN" },
      { label: "Signal sources fused per stock", value: "3" },
      { label: "Login walls / paywalls", value: "0" },
    ],
    outcome: [
      "EGX Desk went from empty repository to a deployed, bilingual research desk in a weekend — and it now serves as GLABS's proof that data-dense fintech tooling can still feel light, fast and free.",
      "It is the template we reach for whenever a project involves live data, Arabic-first UX and AI-assisted analysis in the same build.",
    ],
    proves: [
      "Arabic-first, RTL-native product engineering",
      "Live market-data pipelines and interactive charting",
      "AI assistants grounded in real, structured data",
      "Zero-friction UX: open, useful, no account",
    ],
  },
  {
    slug: "netstream",
    title: "NetStream",
    tagline: "A Netflix-grade streaming experience, end to end",
    description:
      "Netflix-style streaming platform — browse, search and watch movies and series in HD, with trending rows and full title pages.",
    image: "/products/netstream.jpg",
    status: "live",
    live: "https://netstreamx.vercel.app",
    domain: "netstreamx.vercel.app",
    repoUrl: "https://github.com/mahmoudmohamedxx1-hue/netstream",
    repoName: "netstream",
    year: "2026",
    timeline: "Aug – Sep 2026 — a month of iteration across 54 commits",
    platforms: ["Web", "Mobile-responsive"],
    audience: "Everyday viewers who expect a polished streaming UX",
    challenge: [
      "Everyone knows what a great streaming platform feels like — the billboard hero, the content rows, the instant search, the title page that makes you press play. Building that experience from scratch is a benchmark in information architecture, motion and perceived performance.",
      "The hard part is doing it without owning any content infrastructure: the catalog must feel infinite and the playback instant, while the actual heavy lifting happens behind third-party HD providers.",
    ],
    challengePoints: [
      "Streaming UX is a well-known benchmark — users feel every flaw",
      "Catalog browsing, discovery and playback must feel like one product",
      "No owned content infrastructure — providers do the heavy lifting",
      "Perceived performance: browsing must feel instant on any device",
    ],
    solution: [
      "NetStream is a complete front-of-house streaming product: HD playback through third-party providers, wrapped in an original catalog experience with trending rows, genre browsing, full-text search and rich title pages.",
      "The interface layer is where the craft went — layout rhythm, image-first discovery and page transitions that make browsing feel as fast as scrolling. Type a title, find it, press play; the whole loop is a few seconds.",
    ],
    features: [
      {
        icon: "play",
        title: "HD streaming playback",
        body: "Movies and series streamed in HD through third-party providers, integrated so playback feels native to the product.",
      },
      {
        icon: "tv",
        title: "Trending & discovery rows",
        body: "Netflix-style content rows — trending, categorized and browsable — with image-first layouts tuned for fast scanning.",
      },
      {
        icon: "search",
        title: "Instant search",
        body: "Search across the full catalog with results that update as you type.",
      },
      {
        icon: "layers",
        title: "Full title pages",
        body: "Every movie and series gets a proper detail page — synopsis, artwork and playback, all one click from play.",
      },
      {
        icon: "database",
        title: "Typed catalog layer",
        body: "Prisma-backed catalog models keep titles, categories and relationships consistent across the app.",
      },
      {
        icon: "sparkles",
        title: "Motion with restraint",
        body: "Hover states, transitions and page changes animate just enough to feel premium without ever feeling slow.",
      },
    ],
    stack: [
      { name: "Next.js", role: "App Router — fast client navigation across a content-heavy product" },
      { name: "TypeScript", role: "Shared types from catalog models to UI props" },
      { name: "Prisma", role: "Catalog schema — titles, genres, trending ordering" },
      { name: "Tailwind CSS", role: "Dark, image-first design system" },
      { name: "Third-party providers", role: "HD delivery — integrated behind a native-feeling player" },
    ],
    stats: [
      { label: "Commits of iteration", value: "54" },
      { label: "Product arc", value: "~1 month" },
      { label: "Playback quality", value: "HD" },
      { label: "Discovery surfaces", value: "Rows + search + title pages" },
    ],
    outcome: [
      "NetStream is GLABS's consumer-grade bar: a product where the interface, not the infrastructure, is the differentiator. It proves we can build the browsing-and-discovery loop users know from the best streaming services — and ship it as a real, working deployment.",
      "It's also the project we point to when a client needs an image-heavy, content-first experience that still feels instant.",
    ],
    proves: [
      "Consumer-grade UI craft and motion design",
      "Image-heavy products that stay fast",
      "Third-party service integration behind a native UX",
      "Search, discovery and detail-page information architecture",
    ],
  },
  {
    slug: "mizan-erpx",
    title: "Mizan ERPX",
    tagline: "A journal-first accounting ERP — with an encrypted desktop build",
    description:
      "Journal management & accounting ERP — approval workflow, the four financial statements, AR/AP aging, audit log, plus an Electron desktop build with local encrypted storage.",
    image: "/products/mizan-erp.jpg",
    status: "live",
    live: "https://mizan-erpx.vercel.app",
    domain: "mizan-erpx.vercel.app",
    repoUrl: "https://github.com/mahmoudmohamedxx1-hue/US-Journal-ERP",
    repoName: "US-Journal-ERP",
    year: "2026",
    timeline: "Aug – Sep 2026 — 76 commits and 26 releases",
    platforms: ["Web", "Desktop (Electron)"],
    audience: "Accounting teams that need journal discipline and an audit trail",
    challenge: [
      "Small and mid-sized accounting teams live between two bad options: spreadsheets, which lose discipline as volume grows, and enterprise ERP suites, which cost a fortune and hide the actual accounting behind configuration screens.",
      "What a working accountant needs is journal-first rigor — every transaction enters through a controlled journal with approvals — and then the statements, aging reports and audit trail fall out of that single source of truth. And in Egypt and the wider region, plenty of teams want that rigor kept on-premise, on their own machine, with their own encryption.",
    ],
    challengePoints: [
      "Spreadsheets lose journal discipline as transaction volume grows",
      "Enterprise ERPs are overkill — heavy, expensive, slow to adopt",
      "Statements, aging and audit trail must derive from ONE source of truth",
      "Sensitive ledgers: some teams need local, encrypted, offline-capable storage",
    ],
    solution: [
      "Mizan ERPX puts the journal at the center. Entries flow through a full approval workflow before they touch the ledger, so books stay clean by construction rather than by after-the-fact reconciliation.",
      "From that controlled journal, the four financial statements render directly, along with AR/AP aging and a complete audit log. The same product ships as an Electron desktop build with local encrypted storage — the books live on the accountant's machine, not in someone else's cloud.",
      "It's also the most release-disciplined project in the studio: 26 tagged releases over a month of iteration.",
    ],
    features: [
      {
        icon: "workflow",
        title: "Journal approval workflow",
        body: "Entries pass through a controlled approval chain before posting — the ledger stays clean by construction.",
      },
      {
        icon: "file-check",
        title: "The four financial statements",
        body: "Balance sheet, income statement, cash flows and changes in equity — generated from the journal, always consistent.",
      },
      {
        icon: "chart",
        title: "AR / AP aging",
        body: "Receivables and payables bucketed by age, so outstanding balances and cash timing are visible at a glance.",
      },
      {
        icon: "shield",
        title: "Complete audit log",
        body: "Every action on every entry is recorded — who approved what, when, and what changed.",
      },
      {
        icon: "lock",
        title: "Encrypted desktop build",
        body: "An Electron build keeps the full ERP running locally with encrypted storage — books stay on-premise.",
      },
      {
        icon: "layers",
        title: "One product, two form factors",
        body: "The same web codebase ships as a deployed web app and a standalone desktop application.",
      },
    ],
    stack: [
      { name: "Next.js", role: "The ERP's web application core" },
      { name: "Electron", role: "Desktop packaging with local encrypted storage" },
      { name: "Prisma", role: "Journal, ledger and approval data models" },
      { name: "TypeScript", role: "Financial logic that the compiler checks" },
      { name: "Release tooling", role: "26 tagged releases — disciplined, shippable versions" },
    ],
    stats: [
      { label: "Tagged releases", value: "26" },
      { label: "Commits", value: "76" },
      { label: "Financial statements generated", value: "4" },
      { label: "Form factors", value: "Web + Desktop" },
    ],
    outcome: [
      "Mizan ERPX is GLABS's deepest vertical build — real accounting domain logic, not just CRUD over tables. It demonstrates that the studio can operate where correctness matters: approval chains, statement integrity and audit trails.",
      "The desktop build with encrypted local storage answers a question we get asked often in the region: can this run entirely on our machines? Yes.",
    ],
    proves: [
      "Complex domain modeling and workflow engineering",
      "Financial software done with accounting-grade rigor",
      "Desktop distribution (Electron) with data encryption",
      "Sustained delivery discipline — 26 releases in a month",
    ],
  },
  {
    slug: "the-pharmacy",
    title: "The Pharmacy",
    tagline: "A bilingual AI e-pharmacy built for how Egypt actually shops",
    description:
      "AR/EN e-pharmacy with 496 photographed products, prescription OCR matching, an AI health assistant, drug-interaction checker and zone-based Egyptian checkout.",
    image: "/products/the-pharmacy.jpg",
    status: "live",
    live: "https://the-pharmacy.vercel.app",
    domain: "the-pharmacy.vercel.app",
    repoUrl: "https://github.com/mahmoudmohamedxx1-hue/THE-PHARMACY",
    repoName: "THE-PHARMACY",
    year: "2026",
    timeline: "Built and deployed in 2 days — Sep 2026",
    platforms: ["Web", "PWA (installable)"],
    audience: "Egyptian pharmacy shoppers and pharmacy operators",
    challenge: [
      "Buying medicine online in Egypt is still mostly a messaging-app experience: catalogs are photos of shelves, prescriptions travel over WhatsApp, and delivery pricing is negotiated in chat. The product data, the safety checks and the checkout never live in one place.",
      "Pharmacy is also the hardest kind of e-commerce to do responsibly — it's bilingual, it's regulated, and the cost of a wrong product isn't an unhappy customer, it's a health risk. Interactions and prescription matching have to be built in, not bolted on.",
    ],
    challengePoints: [
      "Product catalogs without real photos or structured data",
      "Prescriptions handled over chat — no upload, no matching",
      "No drug-interaction safety net for shoppers",
      "Checkout that ignores Egyptian delivery zones and cash norms",
    ],
    solution: [
      "The Pharmacy is a full-stack bilingual storefront with 496 products, each with real photography. Shoppers upload prescriptions, and OCR-based matching maps the prescription to catalog items — then a drug-interaction checker screens the basket before checkout.",
      "An AI health assistant answers questions in Arabic or English, and the checkout is Egyptian by design: zone-based delivery pricing and the payment expectations local shoppers actually have. A complete admin panel runs the catalog behind the scenes, and the whole storefront is an installable PWA.",
      "All of it — catalog, OCR matching, assistant, interactions, checkout, admin, PWA — went from nothing to deployed in two days.",
    ],
    features: [
      {
        icon: "shopping",
        title: "496 products, really photographed",
        body: "A structured, real-photo catalog — searchable, categorized and bilingual, not shelf snapshots.",
      },
      {
        icon: "stethoscope",
        title: "Prescription upload + OCR matching",
        body: "Upload a prescription; OCR reads it and matches drugs to catalog items automatically.",
      },
      {
        icon: "shield",
        title: "Drug-interaction checker",
        body: "The basket is screened for drug interactions before checkout — safety built into the flow, not added after.",
      },
      {
        icon: "bot",
        title: "AI health assistant",
        body: "An on-site assistant answers health and product questions in Arabic or English.",
      },
      {
        icon: "map",
        title: "Egyptian zone delivery",
        body: "Zone-based delivery pricing and local checkout expectations — built in from day one.",
      },
      {
        icon: "languages",
        title: "Bilingual PWA",
        body: "AR/EN storefront that installs to the home screen and behaves like a native app.",
      },
    ],
    stack: [
      { name: "Next.js", role: "Storefront, admin panel and API in one codebase" },
      { name: "Prisma", role: "496-product catalog, orders and zone delivery models" },
      { name: "OCR + AI services", role: "Prescription matching and the health assistant" },
      { name: "PWA tooling", role: "Installable, offline-tolerant mobile experience" },
      { name: "Tailwind CSS", role: "RTL-ready bilingual design system" },
    ],
    stats: [
      { label: "Products in catalog", value: "496" },
      { label: "Days to full deployment", value: "2" },
      { label: "Safety layers built in", value: "OCR matching + interaction checker" },
      { label: "Languages / form factor", value: "AR/EN · PWA" },
    ],
    outcome: [
      "The Pharmacy compresses an entire regulated-commerce stack into a two-day build: structured catalog, prescription digitization, AI assistance, safety screening, localized checkout and an admin panel — all bilingual.",
      "It's GLABS's clearest demonstration of AI-in-product (not AI-as-gimmick): OCR and the assistant do real work inside a commerce flow that must be safe by default.",
    ],
    proves: [
      "AI features doing real work inside a product flow",
      "Bilingual, regulated-industry e-commerce",
      "Full-stack scope: storefront + admin + PWA in one build",
      "Velocity — idea to production in 48 hours",
    ],
  },
  {
    slug: "chefaa",
    title: "Chefaa",
    tagline: "Rebuilding Egypt's category-leading online pharmacy — end to end",
    description:
      "A full clone of Chefaa — Egypt's online pharmacy and healthcare e-commerce platform: catalog, search, cart, checkout and the Python data pipeline behind it.",
    image: "/products/chefaa.jpg",
    status: "live",
    live: "https://chefaa-clone.vercel.app",
    domain: "chefaa-clone.vercel.app",
    repoUrl: "https://github.com/mahmoudmohamedxx1-hue/CHEFAA_CLONE",
    repoName: "CHEFAA_CLONE",
    year: "2025 – 2026",
    timeline: "Clone sprint — original build Dec 2025, refreshed Sep 2026",
    platforms: ["Web"],
    audience: "A study in replicating category-leading commerce UX",
    challenge: [
      "Chefaa is Egypt's leading online pharmacy, and it earned that position with a specific commerce experience: a deep medicine catalog, fast search, and a checkout that converts. Cloning it faithfully is a study in reverse-engineering product decisions — not just pixels, but information architecture and flow.",
      "A clone is only as good as its data. The catalog had to be real — actual medicines, actual categories — which meant building a data pipeline before the storefront had anything to sell.",
    ],
    challengePoints: [
      "Replicate a market leader's UX faithfully — flows, not just screens",
      "Source a real medicine catalog, not lorem-ipsum products",
      "Search, cart and checkout must all work as one commerce loop",
      "Data pipeline and storefront need to stay in sync",
    ],
    solution: [
      "The storefront reproduces the Chefaa experience — medicine catalog, search, cart and checkout — as a working commerce loop, not a static mockup.",
      "Behind it, a Python pipeline (BeautifulSoup scraping into Supabase) keeps the catalog real: actual products, actual categories, actual data. The front-end consumes a database any real shop could run on.",
    ],
    features: [
      {
        icon: "shopping",
        title: "Medicine catalog",
        body: "A structured medicine catalog with the categories and hierarchy a real pharmacy shopper expects.",
      },
      {
        icon: "search",
        title: "Search that finds",
        body: "Search across the catalog tuned for product names and categories — the entry point most shoppers actually use.",
      },
      {
        icon: "layers",
        title: "Cart & checkout loop",
        body: "A complete cart-to-checkout flow — the part of a clone that proves the commerce loop actually works.",
      },
      {
        icon: "database",
        title: "Python data pipeline",
        body: "BeautifulSoup-driven scraping into Supabase — the catalog is powered by real, structured product data.",
      },
      {
        icon: "globe",
        title: "Supabase backend",
        body: "A managed Postgres layer the storefront queries directly — real database, real constraints, real data.",
      },
      {
        icon: "sparkles",
        title: "Faithful UX translation",
        body: "The flows and layout decisions of a market leader, rebuilt to be understood, not copied blindly.",
      },
    ],
    stack: [
      { name: "TypeScript", role: "Storefront implementation" },
      { name: "Python + BeautifulSoup", role: "Data pipeline that populates the catalog" },
      { name: "Supabase", role: "Postgres catalog the app queries" },
      { name: "Tailwind CSS", role: "Pixel-faithful styling" },
    ],
    stats: [
      { label: "Clone fidelity", value: "Catalog → checkout" },
      { label: "Data pipeline", value: "Python → Supabase" },
      { label: "Commerce loop", value: "Search · cart · checkout" },
      { label: "Origin story", value: "GLABS's first agency storefront" },
    ],
    outcome: [
      "Chefaa is where GLABS's e-commerce muscle started — a market leader taken apart, understood, and rebuilt with a real data pipeline underneath.",
      "The exercise pays forward into every storefront we ship: the conversion patterns, catalog structure and checkout flow are now standard parts of our toolkit.",
    ],
    proves: [
      "Reverse-engineering category-leading product UX",
      "Data pipelines that feed real products into real UIs",
      "Complete commerce loops — not landing pages, working stores",
    ],
  },
  {
    slug: "dope-perfumes",
    title: "Dope Perfumes",
    tagline: "A dark-luxe fragrance storefront with brand at the center",
    description:
      "Premium fragrance e-commerce — a bold dark-luxe storefront with a designer perfume catalog, product detail pages and brand storytelling.",
    image: "/products/dope-perfumes.jpg",
    status: "live",
    live: "https://dope-perfumes.vercel.app",
    domain: "dope-perfumes.vercel.app",
    year: "2026",
    timeline: "Live storefront — deployed on Vercel",
    platforms: ["Web"],
    audience: "Premium D2C fragrance shoppers",
    challenge: [
      "Fragrance is sold on feeling before fact — a perfume store has to build mood, story and desire in the first screen, then get out of the way when the shopper is ready to buy. Most e-commerce templates do the opposite: functional, forgettable, interchangeable.",
      "The brief for a premium house is a paradox: bold and distinctive, but clean and fast. Dark-luxe aesthetics are notoriously easy to make heavy — giant images, slow loads, decoration over product.",
    ],
    challengePoints: [
      "Premium brands need an unforgettable first screen",
      "Dark-luxe sites tend to become slow and heavy",
      "Product pages must sell feeling, not just specifications",
      "Brand storytelling and commerce in one continuous flow",
    ],
    solution: [
      "Dope Perfumes is a statement storefront: a bold dark-luxe visual system where typography, spacing and photography do the branding, and the designer perfume catalog sits inside it as the hero content.",
      "Product detail pages carry the sale — scent stories presented with editorial layout rather than spec tables — and the whole experience stays light enough to browse quickly, which is the part most dark themes get wrong.",
    ],
    features: [
      {
        icon: "sparkles",
        title: "Dark-luxe design system",
        body: "A bold, typographic visual identity built for a premium house — distinctive without being heavy.",
      },
      {
        icon: "shopping",
        title: "Designer perfume catalog",
        body: "A curated designer catalog presented as hero content, not a grid of thumbnails.",
      },
      {
        icon: "layers",
        title: "Editorial product pages",
        body: "Detail pages that sell the scent — story-first layouts with imagery and rhythm.",
      },
      {
        icon: "globe",
        title: "Brand storytelling",
        body: "The house narrative runs through the storefront — commerce and brand in one flow.",
      },
      {
        icon: "activity",
        title: "Fast in spite of the drama",
        body: "Dark and image-heavy, yet quick to browse — the discipline premium themes usually skip.",
      },
      {
        icon: "tv",
        title: "Responsive by default",
        body: "The luxe holds on phones, where the browsing actually happens.",
      },
    ],
    stack: [
      { name: "Vercel", role: "Edge-deployed hosting — instant global delivery" },
      { name: "Modern front-end", role: "Component storefront with a custom design system" },
      { name: "Editorial layout system", role: "Story-driven product presentation" },
    ],
    stats: [
      { label: "Design direction", value: "Dark-luxe" },
      { label: "Storefront surfaces", value: "Home · catalog · product pages" },
      { label: "Brand storytelling", value: "Built into the flow" },
      { label: "Deployed", value: "Live on Vercel" },
    ],
    outcome: [
      "Dope Perfumes proves the brand side of GLABS's range — a storefront where the design itself is the product argument, shipped as a live deployment rather than a concept.",
      "It's the reference we show clients who need commerce with an actual point of view.",
    ],
    proves: [
      "Brand-led e-commerce design",
      "Editorial product storytelling",
      "Performance discipline inside an image-heavy aesthetic",
    ],
  },
  {
    slug: "freestream-tv",
    title: "FreeStream TV",
    tagline: "Free live TV from 36,000+ channels — properly organized",
    description:
      "Free live TV streaming — 36,000+ channels from 25+ providers (Pluto TV, Tubi, Roku, Xumo and more), browsable by sport, movies, news and kids.",
    image: "/products/freestream-tv.jpg",
    status: "live",
    live: "https://freestream-tvs.vercel.app",
    domain: "freestream-tvs.vercel.app",
    repoUrl: "https://github.com/mahmoudmohamedxx1-hue/freestream-tv",
    repoName: "freestream-tv",
    year: "2026",
    timeline: "Aug – Sep 2026 — 50 commits of iteration",
    platforms: ["Web", "TV-friendly layout"],
    audience: "Cord-cutters who want free TV without five different apps",
    challenge: [
      "Free, legal live TV already exists — Pluto TV, Tubi, Roku Channel, Xumo and more than twenty other providers stream tens of thousands of channels. The problem is that it's scattered: each provider has its own app, its own guide, its own search. Watching free TV means hopping between interfaces that were never designed to work together.",
      "Aggregating that at scale is an engineering problem disguised as a browsing problem: 36,000+ channels from 25+ providers, deduplicated, categorized and rendered in an interface where the couch viewer can actually find something to watch.",
    ],
    challengePoints: [
      "Free live TV exists — but scattered across 25+ provider apps",
      "Tens of thousands of channels: scale is the enemy of browsability",
      "Couch viewing needs simple, categorical discovery — not a search box",
      "Provider data quality and consistency vary wildly",
    ],
    solution: [
      "FreeStream TV unifies the free-TV world into one interface: 36,000+ channels from 25+ providers, normalized into a single browsable catalog.",
      "Discovery is categorical by design — sport, movies, news, kids — because that's how people actually decide what to watch. A Prisma-backed data layer keeps the catalog structured across provider sources, and the experience stays a plain, fast browse-to-watch loop.",
    ],
    features: [
      {
        icon: "tv",
        title: "36,000+ live channels",
        body: "The full free-TV world in one catalog — one interface instead of a folder of apps.",
      },
      {
        icon: "globe",
        title: "25+ providers unified",
        body: "Pluto TV, Tubi, Roku, Xumo and more, normalized into one consistent browsing experience.",
      },
      {
        icon: "layers",
        title: "Categorical discovery",
        body: "Sport, movies, news and kids — browsable by mood, not by provider.",
      },
      {
        icon: "database",
        title: "Structured catalog at scale",
        body: "A Prisma data layer that keeps tens of thousands of channels organized and queryable.",
      },
      {
        icon: "play",
        title: "Straight to stream",
        body: "From browse to watching in one click — no account walls, no detours.",
      },
      {
        icon: "activity",
        title: "Fast at scale",
        body: "A huge catalog that still scrolls and filters instantly — perceived performance was the design goal.",
      },
    ],
    stack: [
      { name: "Next.js", role: "App Router — a catalog app at its core" },
      { name: "TypeScript", role: "Shared provider/channel models across 25+ sources" },
      { name: "Prisma", role: "Channel catalog schema at five-figure scale" },
      { name: "Tailwind CSS", role: "Screen-first, glanceable layout system" },
    ],
    stats: [
      { label: "Live channels", value: "36,000+" },
      { label: "Providers unified", value: "25+" },
      { label: "Browse categories", value: "4+" },
      { label: "Commits", value: "50" },
    ],
    outcome: [
      "FreeStream TV is a masterclass in aggregation UX: taking a fragmented ecosystem and making it feel like one product. The numbers are the story — five-digit channel counts, dozens of sources, one coherent interface.",
      "For clients, it demonstrates exactly the capability behind every marketplace, directory and aggregation product: ingest heterogeneous data, normalize it, make it browsable at scale.",
    ],
    proves: [
      "Large-catalog information architecture",
      "Multi-source data aggregation and normalization",
      "Scale without losing browsing speed",
      "Zero-friction consumption UX",
    ],
  },
  {
    slug: "high-hands",
    title: "HIGH-HANDS",
    tagline: "A real-time global situation room on a 3D globe",
    description:
      "Real-time global intelligence dashboard — conflicts, military & civil aviation, maritime AIS, markets, climate hazards and news fused into one live situation room with a 3D globe and an AI analyst.",
    image: "/products/high-hands.jpg",
    status: "updating",
    live: "https://high-hands.vercel.app",
    domain: "high-hands.vercel.app",
    repoUrl: "https://github.com/mahmoudmohamedxx1-hue/high-hands",
    repoName: "high-hands",
    year: "2026",
    timeline: "Built in a single day — Sep 2026, in active deployment hardening",
    platforms: ["Web (desktop-first)"],
    audience: "Analysts, researchers and the terminally curious",
    challenge: [
      "Open-source intelligence is public — conflicts tracked by research institutes, flight trackers for military and civil aviation, AIS transponders for shipping, market feeds, climate hazard monitors and a dozen news wires. Every piece is free. Every piece lives in a different tool.",
      "Seeing the whole picture means having six browser windows open. The challenge of HIGH-HANDS is fusion: stream all of those domains into one live interface, on a globe the analyst can actually navigate, without the thing turning into a slideshow.",
    ],
    challengePoints: [
      "Six intelligence domains, zero shared interfaces in the wild",
      "Real-time streams: aviation, maritime AIS, markets, hazards, conflicts, news",
      "3D geospatial rendering must not collapse under continuous data",
      "Raw feeds need an analyst layer to be meaningful, not just visible",
    ],
    solution: [
      "HIGH-HANDS is a live situation room: geopolitical conflict tracking, military and civil aviation, maritime AIS, markets, climate hazards and news — all fused onto one interactive 3D globe.",
      "globe.gl renders the planet; deck.gl layers put every domain on it as navigable data. The AI analyst sits on top of the stream, reading the same picture the human sees and answering questions about it.",
      "The first working version — globe, layers, feeds and analyst — was standing in a single day. The deployment is currently being hardened for production traffic.",
    ],
    features: [
      {
        icon: "globe",
        title: "3D globe interface",
        body: "globe.gl-powered Earth with deck.gl data layers — every intelligence domain rendered in space.",
      },
      {
        icon: "signal",
        title: "Real-time multi-domain feeds",
        body: "Conflicts, military and civil aviation, maritime AIS, markets, climate hazards and news — one stream, one screen.",
      },
      {
        icon: "map",
        title: "Layered geospatial view",
        body: "deck.gl layers the analyst can navigate — filter domains, focus regions, follow the story.",
      },
      {
        icon: "bot",
        title: "AI analyst",
        body: "An assistant reading the same live picture as the human — questions in, analysis grounded in the current data out.",
      },
      {
        icon: "activity",
        title: "Streaming performance",
        body: "Continuous data across six domains without the rendering collapsing — the real engineering bar.",
      },
      {
        icon: "sparkles",
        title: "Built in a day",
        body: "First working version — globe, layers, feeds, analyst — standing within 24 hours.",
      },
    ],
    stack: [
      { name: "Vite", role: "Instant-refresh build for a fast-moving data app" },
      { name: "TypeScript", role: "Typed models across six intelligence domains" },
      { name: "globe.gl", role: "3D Earth rendering" },
      { name: "deck.gl", role: "High-performance geospatial data layers" },
    ],
    stats: [
      { label: "Intelligence domains fused", value: "6" },
      { label: "Time to first working version", value: "1 day" },
      { label: "Rendering", value: "3D globe + map layers" },
      { label: "AI layer", value: "Live analyst on the stream" },
    ],
    outcome: [
      "HIGH-HANDS is the studio's most technically dramatic product — a real-time, multi-source intelligence fusion tool that happened in a day because the underlying stack (Vite, globe.gl, deck.gl) was chosen for exactly this shape of problem.",
      "It demonstrates the pattern behind every monitoring and analytics product GLABS builds: many live sources, one coherent picture, and an AI layer that turns data into answers.",
    ],
    proves: [
      "Real-time data fusion across many sources",
      "Geospatial 3D visualization engineering",
      "Vite-speed iteration on data-heavy products",
      "AI layered on live streams, not static data",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudyNeighbors(
  slug: string
): { prev: CaseStudy; next: CaseStudy } | undefined {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return undefined;
  return {
    prev: caseStudies[(i - 1 + caseStudies.length) % caseStudies.length],
    next: caseStudies[(i + 1) % caseStudies.length],
  };
}

export const caseStudySlugs = caseStudies.map((c) => c.slug);

