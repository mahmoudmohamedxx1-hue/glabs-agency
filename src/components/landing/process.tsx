"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, Rocket, Search } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    desc: "We map your goals, users and constraints into a sharp, testable product scope.",
  },
  {
    n: "02",
    icon: PenTool,
    title: "Design",
    desc: "Flows, wireframes and polished UI prototypes — you see the product before we build it.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Build",
    desc: "Typed, tested, reviewed code in weekly increments you can actually click and use.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Ship & Scale",
    desc: "CI/CD, monitoring and iteration — launch day is the starting line, not the finish.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-label="How we work"
      className="relative scroll-mt-20 px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            How we work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            From idea to production
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
            A tight, transparent loop — you always know what is being built,
            and what ships next.
          </p>
        </motion.div>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent lg:block"
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-teal-600 shadow-sm">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-5 font-mono text-xs font-semibold tracking-widest text-teal-600">
                {s.n}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
