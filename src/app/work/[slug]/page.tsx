import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  caseStudies,
  getCaseStudy,
  getCaseStudyNeighbors,
} from "@/data/caseStudies";
import { StudyView } from "@/components/case-study/study-view";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ScrollProgress } from "@/components/landing/scroll-progress";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glabs-agency.vercel.app";

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${study.title} — GLABS Case Study`,
    headline: study.tagline,
    description: study.description,
    url: `${SITE_URL}/work/${study.slug}`,
    image: `${SITE_URL}${study.image}`,
    dateCreated: study.year,
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
