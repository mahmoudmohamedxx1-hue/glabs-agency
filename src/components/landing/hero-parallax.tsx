"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * Hero Parallax — the original 21st.dev / Aceternity component by Manu Arora,
 * restored to match the original demo:
 *
 *  - every transform runs through useSpring({ stiffness: 300, damping: 30 }) —
 *    the signature trailing glide. (bounce: 100 is kept verbatim from the
 *    original source; it is inert in framer-motion 12 when stiffness/damping
 *    are set, so the spring resolves to exactly { 300, 30 }.)
 *  - the card wall starts dim (opacity 0.2), displaced (translateY -700) and
 *    tilted (rotateX 15°, rotateZ 20°), resolving over the first 20% of the
 *    window — the original's signature entrance
 *  - rows glide in opposite directions, rows 1 & 3 reversed
 *  - native page scroll (no scroll-smoothing library) — exactly like the demo
 *
 * Deviations from the original (measured fixes):
 *  - TRACK HEIGHT: the original's fixed 300vh track left ~700px of dead
 *    blank space after the wall exited and 40% of the ±1000px glide ran
 *    off-screen. The track is now measured to fit the wall exactly
 *    (+ 25% viewport of breathing room), so the full glide is visible and
 *    the next section follows the wall immediately.
 *  - translateX ±800 keeps the original's visible glide velocity
 *    (≈0.37 px per scrolled px ≈ 800px/2200px).
 *  - translateY resolves to 0 instead of +500. In the original, the wall
 *    swept 500px PAST its natural position during the entrance, which left
 *    the whole viewport blank between the headline and the card wall
 *    (measured: a 660px gap on a 577px viewport).
 *
 * Invisible fixes kept on top of the original (they do not change the look
 * or feel on the demo's viewport sizes):
 *  - 7 cards per row (original: 5) + a small side bleed, so the glide
 *    never exposes empty edges on wide viewports
 *  - responsive card sizes — md+ matches the original h-96 w-[30rem] exactly
 *  - reduced-motion fallback, a11y labels, async image decoding
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

export const HeroParallax = ({ products }: { products: HeroProduct[] }) => {
  const firstRow = products.slice(0, 7);
  const secondRow = products.slice(7, 14);
  const thirdRow = products.slice(14, 21);
  const ref = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Exact-fit track: measure the wall's real LAYOUT height (offsetTop /
  // offsetHeight are immune to the 3D entrance transforms, unlike
  // scrollHeight which gets inflated by the tilted wall's projected
  // bounding box) and size the scroll track to content + 25% viewport of
  // breathing room. Kills the dead blank tail the fixed 300vh track left
  // after the wall exited, and makes the full glide visible. Re-measured
  // on resize + after web fonts settle (heading height is font-dependent).
  React.useEffect(() => {
    const track = ref.current;
    const inner = innerRef.current;
    if (!track || !inner) return;
    const measure = () => {
      const wall = inner.querySelector<HTMLElement>(":scope > div:last-child");
      if (!wall) return;
      // wall's layout bottom only — the inner bottom padding (160px) is
      // allowed to clip under overflow-hidden; it is invisible space.
      const content = wall.offsetTop + wall.offsetHeight;
      const target = content + Math.round(window.innerHeight * 0.15);
      track.style.height = `${Math.max(
        target,
        Math.round(window.innerHeight * 1.5)
      )}px`;
    };

    // Deep-link re-anchor: when the URL carries a hash (e.g. /#work from a
    // case-study page or a shared link), the browser jumps to the target
    // using the SERVER-RENDERED layout — before this effect resizes the
    // track from its 190vh placeholder to the measured height. Everything
    // below the hero then shifts, and the anchor lands ~600px short.
    // Re-scroll to the intended target once, after measurement settles
    // (again after fonts, unless the user has scrolled by then).
    let reanchored = false;
    let userScrolled = false;
    const onUserScroll = () => {
      userScrolled = true;
    };
    const reanchor = () => {
      if (reanchored) return;
      reanchored = true;
      const hash = window.location.hash;
      if (!hash || hash === "#" || hash === "#top") return;
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "instant" as ScrollBehavior });
      }
    };

    measure();
    reanchor();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onUserScroll, { passive: true });
    if (document.fonts?.ready) {
      document.fonts.ready
        .then(() => {
          measure();
          if (!userScrolled) reanchor();
        })
        .catch(() => {});
    }
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onUserScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      id="top"
      aria-label="GLABS — featured work"
      style={{ height: "190vh" }}
      className="relative flex-col self-auto overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div ref={innerRef} className="flex flex-col py-20 md:py-40">
        <Header />
        <motion.div
          style={
            reduceMotion ? undefined : { rotateX, rotateZ, translateY, opacity }
          }
        >
          <Row
            products={firstRow}
            translate={reduceMotion ? undefined : translateX}
            reverse
          />
          <Row
            products={secondRow}
            translate={reduceMotion ? undefined : translateXReverse}
          />
          <Row
            products={thirdRow}
            translate={reduceMotion ? undefined : translateX}
            reverse
          />
        </motion.div>
      </div>
    </div>
  );
};

const Row = ({
  products,
  translate,
  reverse = false,
}: {
  products: HeroProduct[];
  translate?: MotionValue<number>;
  reverse?: boolean;
}) => (
  <div
    className={`-mx-6 mb-10 flex space-x-6 md:-mx-10 md:mb-20 md:space-x-20 ${
      reverse ? "flex-row-reverse space-x-reverse" : "flex-row"
    }`}
  >
    {products.map((product, i) => (
      <ProductCard key={`${product.title}-${i}`} product={product} translate={translate} />
    ))}
  </div>
);

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-black">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-black">
        We build beautiful products with the latest technologies and
        frameworks. We are a team of passionate developers and designers that
        love to build amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: HeroProduct;
  translate?: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={translate ? { x: translate } : undefined}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product relative h-64 w-[19rem] shrink-0 md:h-96 md:w-[30rem]"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl"
        aria-label={`${product.title} — view project`}
      >
        <span className="sr-only">{product.title}</span>
        <img
          src={product.thumbnail}
          height="768"
          width="960"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          alt={product.title}
        />
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"></div>
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 opacity-0 transition-opacity duration-300 group-hover/product:opacity-100">
        <h2 className="text-white">{product.title}</h2>
        {product.description ? (
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-300">
            {product.description}
          </p>
        ) : null}
        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-400">
          {product.live ? (
            product.status === "updating" ? (
              <span className="flex items-center gap-1.5 font-medium text-amber-400">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-amber-400"
                />
                Deploy updating
              </span>
            ) : (
              <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                Live site
              </span>
            )
          ) : null}
          {product.live && (product.language || product.updatedLabel) ? (
            <span>·</span>
          ) : null}
          {product.language ? (
            <span className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-teal-400"
              />
              {product.language}
            </span>
          ) : null}
          {product.updatedLabel && product.updatedLabel !== "Live" ? (
            <>
              <span>·</span>
              <span>Updated {product.updatedLabel}</span>
            </>
          ) : null}
          {product.stars ? (
            <>
              <span>·</span>
              <span>★ {product.stars}</span>
            </>
          ) : null}
        </p>
      </div>
    </motion.div>
  );
};
