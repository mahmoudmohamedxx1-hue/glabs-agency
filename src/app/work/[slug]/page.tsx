import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  caseStudies,
  getCaseStudy,
  getCaseStudyNeighbors,
} from "@/data/caseStudies";
import { liveProjects } from "@/data/projects";
import { StudyView } from "@/components/case-study/study-view";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ScrollProgress } from "@/components/landing/scroll-progress";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glabs-agency.vercel.app";

/* schema.org requires ISO 8601 dates — study.year is display text like
   "2025 – 2026", so resolve the real launch date from the matching
   project's GitHub createdLabel, falling back to the first 4-digit year. */
function isoLaunchDate(slug: string, year: string): string | undefined {
  const project = liveProjects.find((p) => p.caseStudy === slug);
  if (project?.createdLabel) {
    const d = new Date(project.createdLabel);
    if (!Number.isNaN(d.getTime())) {
      // local date components — toISOString() could shift the day across
      // timezones for midnight-parsed strings like "Sep 13, 2026"
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${d.getFullYear()}-${m}-${day}`;
    }
  }
  const y = year.match(/\d{4}/)?.[0];
  return y ? `${y}-01-01` : undefined;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const title = `${study.title} — Case Study`;
  return {
    title,
    description: study.description,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/work/${study.slug}`,
      siteName: "GLABS",
      title,
      description: study.description,
      images: [
        {
          url: study.image,
          width: 960,
          height: 768,
          alt: `${study.title} — GLABS case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.description,
      images: [study.image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const neighbors = getCaseStudyNeighbors(slug)!;

  /* Structured data — this page as a creative work */
  const dateCreated = isoLaunchDate(study.slug, study.year);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${study.title} — GLABS Case Study`,
    headline: study.tagline,
    description: study.description,
    url: `${SITE_URL}/work/${study.slug}`,
    image: `${SITE_URL}${study.image}`,
    ...(dateCreated ? { dateCreated } : {}),
    creator: {
      "@type": "Organization",
      name: "GLABS",
      url: SITE_URL,
    },
    ...(study.repoUrl ? { codeRepository: study.repoUrl } : {}),
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-zinc-900">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <StudyView
          study={study}
          prev={neighbors.prev}
          next={neighbors.next}
        />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
