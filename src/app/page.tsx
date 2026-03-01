import { BentoGrid } from "@/components/BentoGrid";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen pb-24">
      <NavBar />
      <Hero />
      <FadeIn className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mb-4 max-w-2xl space-y-2 sm:mb-6">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Markets forget. <span className="whitespace-nowrap">Communities don&apos;t.</span>
          </h2>
          <p className="text-sm text-muted">
            We keep sources, context, and community notes so the next cycle remembers the last.
          </p>
        </div>
      </FadeIn>
      <FadeIn className="mb-16 md:mb-20" delay={100}>
        <BentoGrid />
      </FadeIn>
      <Footer />
    </main>
  );
}
