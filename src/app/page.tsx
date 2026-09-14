import { Navbar } from "@/components/landing/navbar";
import { HeroParallax } from "@/components/landing/hero-parallax";
import { Stats } from "@/components/landing/stats";
import { Services } from "@/components/landing/services";
import { Work } from "@/components/landing/work";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { ScrollProgress } from "@/components/landing/scroll-progress";
import { heroProducts } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-zinc-900">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroParallax products={heroProducts} />
        <Stats />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
