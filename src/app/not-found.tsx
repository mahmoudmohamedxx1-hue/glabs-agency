import { heroProducts } from "@/data/projects";

export default function NotFound() {
  const cards = heroProducts.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600">
        404 — NOT FOUND
      </p>
      <h1 className="mt-4 text-3xl font-bold text-black md:text-5xl">
        This page shipped elsewhere
      </h1>
      <p className="mt-4 max-w-md text-base text-zinc-600">
        The page you&apos;re looking for doesn&apos;t exist. Everything GLABS
        builds lives on the home page — or on one of these live products:
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {cards.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-28 w-44 overflow-hidden rounded-xl border border-zinc-200 shadow-sm transition-transform hover:-translate-y-1"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              width={176}
              height={112}
              className="h-full w-full object-cover object-left-top"
            />
            <span className="absolute inset-x-0 bottom-0 bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {p.title}
            </span>
          </a>
        ))}
      </div>

      <a
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-black"
      >
        Back to the studio
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
