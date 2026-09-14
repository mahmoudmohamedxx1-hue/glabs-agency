import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "GLABS — The Ultimate Development Studio",
  description:
    "GLABS is an AI-first development studio. We design and ship production-grade web apps, machine-learning systems and automation tools — from first prototype to production.",
  keywords: [
    "AI agency",
    "development studio",
    "GLABS",
    "software engineering",
    "web development",
    "machine learning",
    "automation",
  ],
  authors: [{ name: "GLABS" }],
  openGraph: {
    title: "GLABS — The Ultimate Development Studio",
    description:
      "We design and ship production-grade web apps, machine-learning systems and automation tools.",
    siteName: "GLABS",
    type: "website",
  },
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
      </body>
    </html>
  );
}
