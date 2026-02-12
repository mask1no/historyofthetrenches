import { BentoGrid } from "@/components/BentoGrid";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen pb-24">
      <NavBar />
      <Hero />
      <div className="mx-auto mt-0 max-w-6xl px-6 pb-10 md:mt-2">
        <div className="mb-6 max-w-2xl space-y-2">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Markets forget. Communities don&apos;t.
          </h2>
          <p className="text-sm text-muted">
            We keep sources, context, and community notes so the next cycle remembers the last.
          </p>
        </div>
      </div>
      <div className="mb-16 md:mb-20">
        <BentoGrid />
      </div>
      <Footer />
    </main>
  );
}

