"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Calendar,
  CheckCircle2,
  Database,
  FileCheck,
  GitCommitHorizontal,
  Github,
  Globe,
  Languages,
  Layers,
  LineChart,
  Lock,
  Mail,
  Map,
  MonitorSmartphone,
  Package,
  Play,
  Search,
  Shield,
  ShoppingBag,
  Signal,
  Sparkles,
  Stethoscope,
  Tv,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { CaseStudy, FeatureIcon } from "@/data/caseStudies";
import { EMAIL } from "@/data/projects";

const FEATURE_ICONS: Record<FeatureIcon, LucideIcon> = {
  activity: Activity,
  chart: LineChart,
  globe: Globe,
  languages: Languages,
  bot: Bot,
  database: Database,
  layers: Layers,
  lock: Lock,
  play: Play,
  search: Search,
  shopping: ShoppingBag,
  stethoscope: Stethoscope,
  plane: ArrowUpRight,
  ship: ArrowUpRight,
  signal: Signal,
  sparkles: Sparkles,
  tv: Tv,
  users: Users,
  workflow: Workflow,
  "file-check": FileCheck,
  map: Map,
  shield: Shield,
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Numbered section header — editorial case-study rhythm */
function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm font-semibold text-teal-600">
        {index}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          {eyebrow}
        </p>
        <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

export function StudyView({
  study,
  prev,
  next,
}: {
  study: CaseStudy;
  prev: CaseStudy;
  next: CaseStudy;
}) {
  return (
    <div className="bg-white text-zinc-900">
      {/* ------------------------------------------------ header */}
      <header className="relative overflow-hidden px-4 pb-14 pt-28 md:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-60"
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <a
              href="/#work"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              All work
            </a>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full bg-zinc-950 px-3.5 py-1.5 text-xs font-semibold text-white">
                <span
                  aria-hidden="true"
                  className={
                    study.status === "updating"
                      ? "h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400"
                      : "h-1.5 w-1.5 rounded-full bg-emerald-400"
                  }
                />
                {study.status === "updating" ? "Deployment updating" : "Live"}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                {study.domain}
              </span>
              <span className="text-zinc-300" aria-hidden="true">
                /
              </span>
              <span className="font-mono text-xs text-zinc-500">
                {study.year}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-zinc-950 md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
              {study.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                {study.timeline}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MonitorSmartphone
                  className="h-4 w-4 text-zinc-400"
                  aria-hidden="true"
                />
                {study.platforms.join(" · ")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                {study.audience}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {study.live ? (
                <a
                  href={study.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition-all hover:bg-teal-700"
                >
                  Visit the live site
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ) : null}
              {study.repoUrl ? (
                <a
                  href={study.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-50"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View source
                </a>
              ) : null}
            </div>
            {study.status === "updating" ? (
              <p className="mt-3 text-sm text-amber-600">
                Note — the public deployment is being re-deployed right now.
                Everything below reflects the shipped product.
              </p>
            ) : null}
          </Reveal>
        </div>
      </header>

      {/* ------------------------------------------------ hero shot */}
      <section aria-label={`${study.title} screenshot`} className="px-4">
        <Reveal className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10">
            {/* browser chrome */}
            <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-100/80 px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              </div>
              <span className="mx-auto flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-[11px] text-zinc-500">
                <Lock className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                {study.domain}
              </span>
              <span className="w-10" aria-hidden="true" />
            </div>
            <img
              src={study.image}
              alt={`${study.title} — the live product`}
              className="w-full object-cover object-left-top"
              decoding="async"
            />
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------ stats band */}
      <section
        aria-label="Key numbers"
        className="mt-16 border-y border-zinc-100 bg-zinc-50/70 px-4 py-10"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 lg:grid-cols-4">
          {study.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="bg-white px-6 py-7"
            >
              <p className="text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-zinc-500">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ 01 challenge */}
      <section
        aria-label="The challenge"
        className="px-4 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="01"
              eyebrow="Context"
              title="The challenge"
            />
          </div>
          <div>
            {study.challenge.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="mb-5 text-base leading-[1.8] text-zinc-600 md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal>
              <ul className="mt-7 space-y-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6">
                {study.challengePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 md:text-[15px]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 02 the build */}
      <section
        aria-label="What we built"
        className="border-y border-zinc-100 bg-zinc-50/70 px-4 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="02"
              eyebrow="Solution"
              title="What we built"
            />
          </div>
          <div>
            {study.solution.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="mb-5 text-base leading-[1.8] text-zinc-600 md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal>
              <div className="mt-7 flex flex-wrap gap-2">
                {study.platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-600"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 03 features */}
      <section
        aria-label="Feature highlights"
        className="px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="03"
            eyebrow="Product tour"
            title="Feature highlights"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {study.features.map((f, i) => {
              const Icon = FEATURE_ICONS[f.icon] ?? Sparkles;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: "easeOut" }}
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-lg hover:shadow-zinc-900/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-zinc-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {f.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 04 under the hood */}
      <section
        aria-label="Under the hood"
        className="border-y border-zinc-100 bg-zinc-50/70 px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="04"
            eyebrow="Engineering"
            title="Under the hood"
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            {study.stack.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
                className={`grid gap-1 px-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-6 ${
                  i > 0 ? "border-t border-zinc-100" : ""
                }`}
              >
                <span className="font-mono text-sm font-semibold text-zinc-900">
                  {s.name}
                </span>
                <span className="text-sm leading-relaxed text-zinc-600">
                  {s.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 05 outcome */}
      <section aria-label="Outcome" className="px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading index="05" eyebrow="Results" title="The outcome" />
          </div>
          <div>
            {study.outcome.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="mb-5 text-base leading-[1.8] text-zinc-600 md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal>
              <div className="mt-8 rounded-2xl border border-teal-600/20 bg-teal-50/50 p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                  What this proves
                </p>
                <ul className="mt-4 space-y-3">
                  {study.proves.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-sm font-medium leading-relaxed text-zinc-800"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ prev / next */}
      <nav
        aria-label="More case studies"
        className="border-t border-zinc-100 bg-zinc-50/70 px-4 py-12"
      >
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
          <a
            href={`/work/${prev.slug}`}
            className="group flex min-w-0 items-center gap-5 rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-lg hover:shadow-zinc-900/5"
          >
            <img
              src={prev.image}
              alt=""
              className="hidden h-20 w-32 shrink-0 rounded-lg border border-zinc-100 object-cover object-left-top sm:block"
              decoding="async"
            />
            <span className="min-w-0">
              <span className="flex items-center gap-1 text-xs font-medium text-zinc-400">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Previous case study
              </span>
              <span className="mt-1 block truncate text-base font-semibold text-zinc-900 group-hover:text-teal-700">
                {prev.title}
              </span>
              <span className="mt-0.5 block truncate text-sm text-zinc-500">
                {prev.tagline}
              </span>
            </span>
          </a>
          <a
            href={`/work/${next.slug}`}
            className="group flex min-w-0 items-center justify-end gap-5 rounded-2xl border border-zinc-200 bg-white p-4 text-right transition-all duration-300 hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-lg hover:shadow-zinc-900/5"
          >
            <span className="min-w-0">
              <span className="flex items-center justify-end gap-1 text-xs font-medium text-zinc-400">
                Next case study
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="mt-1 block truncate text-base font-semibold text-zinc-900 group-hover:text-teal-700">
                {next.title}
              </span>
              <span className="mt-0.5 block truncate text-sm text-zinc-500">
                {next.tagline}
              </span>
            </span>
            <img
              src={next.image}
              alt=""
              className="hidden h-20 w-32 shrink-0 rounded-lg border border-zinc-100 object-cover object-left-top sm:block"
              decoding="async"
            />
          </a>
        </div>
      </nav>

      {/* ------------------------------------------------ per-case CTA */}
      <section
        aria-label={`Start a project like ${study.title}`}
        className="relative overflow-hidden bg-zinc-950 px-4 py-16 text-white md:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[640px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/15 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
              Need something like {study.title}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              This is one of eight products GLABS has live on the internet.
              Yours could be the ninth — tell us what you&apos;re building.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  `Project inquiry — like ${study.title}`
                )}`}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg transition-all hover:bg-zinc-200"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Start a project
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur transition-all hover:border-zinc-500 hover:text-white"
              >
                <GitCommitHorizontal className="h-4 w-4" aria-hidden="true" />
                See all eight products
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-zinc-500">
              <Package className="h-4 w-4" aria-hidden="true" />
              Shipped by GLABS — designed, built and deployed end-to-end.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
