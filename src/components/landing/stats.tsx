"use client";

import React from "react";
import { animate, motion, useInView } from "framer-motion";

const stats = [
  { value: 8, suffix: "", label: "Live products on the internet" },
  { value: 14, suffix: "", label: "Public repositories on GitHub" },
  { value: 340, suffix: "+", label: "Commits shipped & counting" },
  { value: 26, suffix: "", label: "App releases published" },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Prisma",
  "Tailwind CSS",
  "Electron",
  "Vite",
  "Supabase",
  "Streamlit",
  "XGBoost",
  "SHAP",
  "Recharts",
  "Lovable",
  "v0.dev",
  "Vercel",
];

function Counter({ to }: { to: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>0</span>;
}

export function Stats() {
  return (
    <section
      aria-label="Studio in numbers"
      className="relative border-y border-zinc-100 bg-zinc-50/70 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
                <Counter to={s.value} />
                <span className="text-teal-600">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-zinc-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="group relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        aria-label="Technology stack"
      >
        <div className="flex w-max animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]">
          {[...stack, ...stack].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-600"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-teal-500"
                aria-hidden="true"
              />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
