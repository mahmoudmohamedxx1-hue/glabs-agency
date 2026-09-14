import { Github, Mail } from "lucide-react";
import { liveProjects, EMAIL } from "@/data/projects";

const GITHUB_URL = "https://github.com/mahmoudmohamedxx1-hue";

const studioLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:py-16">
        <div>
          <a href="#top" aria-label="GLABS home" className="flex items-center">
            <img
              src="/logo-original.png"
              alt="GLABS — AI Agency logo"
              className="h-10 w-auto object-contain"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
            The ultimate development studio. We design and ship AI-powered
            products, web apps and automation tools.
          </p>
        </div>

        <nav aria-label="Footer — studio">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
            Studio
          </h3>
          <ul className="mt-4 space-y-3">
            {studioLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer — live products">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
            Live products
          </h3>
          <ul className="mt-4 space-y-3">
            {liveProjects.map((p) => (
              <li key={p.title}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  <span
                    aria-hidden="true"
                    className={
                      p.status === "updating"
                        ? "h-1.5 w-1.5 rounded-full bg-amber-500"
                        : "h-1.5 w-1.5 rounded-full bg-emerald-500"
                    }
                  />
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
            Connect
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub — mahmoudmohamedxx1-hue
              </a>
            </li>
            <li>
              <a
                href={`${GITHUB_URL}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
              >
                All repositories
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-zinc-400 md:flex-row">
          <p>© {new Date().getFullYear()} GLABS — AI Development Studio.</p>
          <p>Designed &amp; built with Next.js, Tailwind CSS and framer-motion.</p>
        </div>
      </div>
    </footer>
  );
}
