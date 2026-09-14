"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  Code2,
  Palette,
  Rocket,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Custom models, LLM-powered features, RAG pipelines and predictive analytics that turn your data into a product advantage.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Apps",
    desc: "Production-grade Next.js and React applications — typed end-to-end, tested, and built to scale with your users.",
  },
  {
    icon: Palette,
    title: "Product & UI Design",
    desc: "Interfaces customers remember: design systems, pixel-perfect implementation and motion that feels intentional.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Dashboards, ETL pipelines and reporting that make your numbers readable — and actionable — in real time.",
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    desc: "API integrations, internal tools and workflow automation that remove hours of manual work every week.",
  },
  {
    icon: Rocket,
    title: "Cloud & DevOps",
    desc: "CI/CD, containerized deployments and infrastructure that keeps your product fast, observable and online.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-label="What we do"
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
            What we do
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Everything you need to ship
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
            From the first prototype to production scale — one studio, one
            team, zero hand-offs.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: "easeOut" }}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-xl hover:shadow-zinc-900/5 md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 -translate-x-1 translate-y-1 text-zinc-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-teal-600 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
