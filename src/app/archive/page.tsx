import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { EventTable } from "@/components/EventTable";

export const metadata: Metadata = {
  title: "Archive | History of the Trenches",
  description: "Filter and explore the community-maintained crypto history archive.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/archive"
  }
};

export default function ArchivePage() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-8">
        <div className="mb-8 space-y-3">
          <h1
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Archive
          </h1>
          <p className="text-base text-muted">
            Filter by type, chain, or tags. Each entry cites sources so you can verify claims
            quickly.
          </p>
          <div className="h-px w-full bg-border" />
        </div>
        <div className="rounded-2xl border border-border bg-card p-4 shadow-subtle">
          <EventTable />
        </div>
      </section>
    </main>
  );
}

