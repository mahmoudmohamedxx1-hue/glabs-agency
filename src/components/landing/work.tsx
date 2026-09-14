"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FolderGit2,
  GitBranch,
  GitCommitHorizontal,
  Package,
  Star,
} from "lucide-react";
import { liveProjects, repoProjects, githubProfile } from "@/data/projects";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  JavaScript: "#f1e05a",
};

function langColor(lang?: string) {
  if (!lang) return undefined;
  return LANG_COLORS[lang] ?? "#0d9488";
}

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

/* -------------------------------------------------------------------- */
/* Live product cards — real screenshots, whole card opens the live site */
/* -------------------------------------------------------------------- */

function LiveCard({
  project,
  index,
}: {
  project: (typeof liveProjects)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-600/30 hover:shadow-xl hover:shadow-zinc-900/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <img
          src={project.image}
          alt={`${project.title} — live site screenshot`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-zinc-950/0 transition-colors duration-300 group-hover:bg-zinc-950/10"
        />
        <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-zinc-950/80 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
          <span
            aria-hidden="true"
            className={
              project.status === "updating"
                ? "h-1.5 w-1.5 rounded-full bg-amber-400"
                : "h-1.5 w-1.5 rounded-full bg-emerald-400"
            }
          />
          {project.status === "updating" ? "Updating" : "Live"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900">
              {project.title}
            </h3>
            <p className="mt-0.5 font-mono text-[11px] text-zinc-400">
              {project.domain}
            </p>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-600"
            aria-hidden="true"
          />
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4 text-xs text-zinc-500">
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {project.language ? (
              <span className="flex items-center gap-1.5 font-medium text-zinc-600">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: langColor(project.language) }}
                />
                {project.language}
              </span>
            ) : null}
            {project.commits > 0 ? (
              <span className="flex items-center gap-1">
                <GitCommitHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                {project.commits} commits
              </span>
            ) : null}
          </span>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 -m-1 flex items-center gap-1 rounded-md px-1 py-1 font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
              Code
            </a>
          ) : null}
        </div>
      </div>

      {/* Stretched link — clicking anywhere on the card opens the live site */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`Visit ${project.title} — ${project.domain}`}
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------- */
/* Compact repository cards — GitHub-flavored, no deployment (yet)      */
/* -------------------------------------------------------------------- */

function RepoCard({
  project,
  index,
}: {
  project: (typeof repoProjects)[number];
  index: number;
}) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-600/30 hover:shadow-xl hover:shadow-zinc-900/5"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 transition-colors group-hover:border-teal-600/30 group-hover:text-teal-600">
          <FolderGit2 className="h-5 w-5" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-zinc-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-600"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-zinc-900">
        {project.title}
      </h3>
      <p className="mt-0.5 font-mono text-[11px] text-zinc-400">
        {project.repo}
      </p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-zinc-100 pt-4 text-xs text-zinc-500">
        <span className="flex items-center gap-1.5 font-medium text-zinc-600">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: langColor(project.language) }}
          />
          {project.language}
        </span>
        <span className="flex items-center gap-1">
          <GitCommitHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
          {project.commits} commits
        </span>
        {project.releases > 0 && (
          <span className="flex items-center gap-1">
            <Package className="h-3.5 w-3.5" aria-hidden="true" />
            {project.releases} releases
          </span>
        )}
        {project.stars > 0 && (
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            {project.stars}
          </span>
        )}
        <span className="ml-auto">Updated {project.updatedLabel}</span>
      </div>
    </motion.a>
  );
}

/* -------------------------------------------------------------------- */

export function Work() {
  return (
    <section
      id="work"
      aria-label="Selected work — live products and repositories"
      className="relative scroll-mt-20 border-y border-zinc-100 bg-zinc-50/70 px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Selected work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Built by GLABS
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
            Eight products are live on the internet right now — the screenshots
            are real, and every card opens the running site. The source behind
            the studio lives on GitHub.
          </p>
        </motion.div>

        {/* Live products */}
        <div
          className="mt-12 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Live products — click any card to open
          </span>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {liveProjects.map((p, i) => (
            <LiveCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Open-source repositories */}
        <div
          className="mt-20 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <FolderGit2 className="h-3.5 w-3.5 text-zinc-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Open-source repositories
          </span>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:mt-8 lg:grid-cols-3">
          {repoProjects.map((p, i) => (
            <RepoCard key={p.repo} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-sm text-zinc-500">
            8 live products · 14 public repositories — the full history lives
            on GitHub.
          </p>
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all hover:border-zinc-300 hover:bg-zinc-100"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
            Explore all repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
