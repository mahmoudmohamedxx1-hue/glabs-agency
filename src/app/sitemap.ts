import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://glabs-agency.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...caseStudies.map((c) => ({
      url: `${SITE_URL}/work/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
