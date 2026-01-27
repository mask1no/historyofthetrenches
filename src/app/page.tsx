import { BentoGrid } from "@/components/BentoGrid";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { RecentAdditions } from "@/components/RecentAdditions";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen pb-16">
      <NavBar />
      <Hero />
      <div className="mx-auto max-w-6xl px-6 pb-10 mt-4 md:mt-6">
        <div className="mb-6 max-w-2xl space-y-2">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Markets forget. Communities don&apos;t.
          </h2>
          <p className="text-sm text-muted">
            We keep receipts with sources, context, and community commentary so the next
            cycle remembers the last.
          </p>
        </div>
      </div>
      <BentoGrid />
      <RecentAdditions />
      <Footer />
    </main>
  );
}

