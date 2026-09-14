"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { EMAIL } from "@/data/projects";

const GITHUB_URL = "https://github.com/mahmoudmohamedxx1-hue";

export function Cta() {
  return (
    <section
      id="contact"
      aria-label="Contact GLABS"
      className="relative scroll-mt-20 overflow-hidden bg-zinc-950 px-4 py-20 text-white md:py-28"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <motion.img
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src="/logo-white-nav.png"
          alt="GLABS — AI Agency"
          className="mb-10 h-14 w-auto md:h-16"
        />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="max-w-3xl text-3xl font-bold tracking-tight md:text-6xl"
        >
          Let&apos;s build something
          <br />
          amazing together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-xl"
        >
          Have an idea, a spreadsheet or just a hunch? We turn it into a
          production-grade product — AI systems, full-stack apps and
          automation, designed and shipped end-to-end.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg transition-all hover:bg-zinc-200"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Start a project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-7 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur transition-all hover:border-zinc-500 hover:text-white"
          >
            Explore our work
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {EMAIL}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            github.com/mahmoudmohamedxx1-hue
          </a>
        </motion.div>
      </div>
    </section>
  );
}
