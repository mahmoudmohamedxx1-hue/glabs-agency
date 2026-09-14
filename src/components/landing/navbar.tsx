"use client";

import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Github, Menu, X } from "lucide-react";

const GITHUB_URL = "https://github.com/mahmoudmohamedxx1-hue";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-zinc-200/70 bg-white/80 shadow-sm shadow-zinc-900/[0.03] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <motion.div
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px]"
      >
        <a
          href="#top"
          className="flex shrink-0 items-center"
          aria-label="GLABS — back to top"
        >
          <img
            src="/logo-original.png"
            alt="GLABS — AI Agency logo"
            className="h-10 w-auto object-contain md:h-11"
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur transition-colors hover:border-zinc-300 hover:bg-zinc-100"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-700 shadow-sm backdrop-blur transition-colors hover:bg-zinc-100 md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-zinc-100 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    setOpen(false);
                    // The page uses CSS scroll-behavior: smooth, which turns a
                    // plain scrollIntoView() into a smooth animation — and the
                    // menu's exit animation cancels it mid-flight. Scroll
                    // with an explicit instant behavior so it cannot be
                    // interrupted, right as the menu closes.
                    const target = document.querySelector(l.href);
                    if (target) {
                      e.preventDefault();
                      target.scrollIntoView({ behavior: "instant" as ScrollBehavior });
                      window.history.pushState(null, "", l.href);
                    }
                  }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
