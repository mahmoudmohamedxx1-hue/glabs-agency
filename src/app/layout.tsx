import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://glabs-agency.vercel.app";
const GITHUB_URL = "https://github.com/mahmoudmohamedxx1-hue";
const EMAIL = "mahmoud.elbaramoni@gmail.com";

const TITLE = "GLABS — The Ultimate Development Studio";
const DESCRIPTION =
  "GLABS is an AI-first development studio. We design and ship production-grade web apps, machine-learning systems and automation tools — with 8 products already live on the internet, from an Egyptian Exchange research desk to a Netflix-style streaming platform.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — GLABS",
  },
  description: DESCRIPTION,
  keywords: [
    "AI agency",
    "development studio",
    "GLABS",
    "software engineering",
    "web development",
    "machine learning",
    "automation",
    "Next.js developers",
    "full-stack development",
    "Egypt software agency",
  ],
  authors: [{ name: "Mahmoud Elbaramoni", url: GITHUB_URL }],
  creator: "Mahmoud Elbaramoni",
  publisher: "GLABS",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "GLABS",
    title: TITLE,
    description:
      "The Ultimate Development Studio — 8 products live on the internet: EGX Desk, NetStream, Mizan ERPX, The Pharmacy, Chefaa, Dope Perfumes, FreeStream TV and HIGH-HANDS.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "GLABS — The Ultimate Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "The Ultimate Development Studio — 8 products live on the internet, built with the latest technologies.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

/* Organization + WebSite structured data for search engines */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "GLABS",
      alternateName: "GLABS AI Agency",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-original.png`,
      description:
        "AI-first development studio building production-grade web apps, machine-learning systems and automation tools.",
      email: EMAIL,
      founder: {
        "@type": "Person",
        name: "Mahmoud Elbaramoni",
        url: GITHUB_URL,
      },
      sameAs: [GITHUB_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}
      >
        {children}
        <Analytics />
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
