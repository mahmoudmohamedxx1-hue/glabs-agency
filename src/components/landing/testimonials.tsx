"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "GLABS took our credit-scoring pipeline from spreadsheet to a production ML service in weeks. The quality bar is unreal.",
    name: "Head of Risk",
    role: "Fintech Startup",
  },
  {
    quote:
      "They rebuilt our editorial ERP end-to-end. Zero downtime, clean handover, and code our team can actually maintain.",
    name: "Operations Lead",
    role: "Publishing House",
  },
  {
    quote:
      "The rare studio that obsesses over both the model and the pixel. Our streaming product finally feels built in-house.",
    name: "Founder",
    role: "Streaming Startup",
  },
];

export function Testimonials() {
  return (
    <section
      aria-label="What clients say"
      className="relative border-y border-zinc-100 bg-zinc-50/70 px-4 py-16 md:py-20"
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
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Trusted by builders
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div
                className="flex gap-1 text-teal-500"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-zinc-100 pt-4">
                <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                <p className="mt-0.5 text-sm text-zinc-500">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
