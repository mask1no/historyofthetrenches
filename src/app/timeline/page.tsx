import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { EraTimeline } from "@/components/EraTimeline";

export const metadata: Metadata = {
  title: "Timeline | History of the Trenches",
  description: "Era-based view of crypto's defining moments."
};

export default function TimelinePage() {
  return (
    <main className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <h1
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Crypto Onboarding Eras
          </h1>
          <p className="text-base text-muted">
            Chronological chapters with featured events and sources to trace how narratives
            evolved.
          </p>
        </div>
        <EraTimeline />
      </section>
    </main>
  );
}

