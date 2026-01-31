import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { EventTable } from "@/components/EventTable";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Archive | History of the Trenches",
  description: "Filter and explore the community-maintained crypto history archive.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/archive"
  },
  openGraph: {
    title: "Archive | History of the Trenches",
    description: "Filter and explore the community-maintained crypto history archive.",
    url: "https://www.historyofthetrenches.xyz/archive",
    siteName: "History of the Trenches",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "History of the Trenches"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Archive | History of the Trenches",
    description: "Filter and explore the community-maintained crypto history archive.",
    images: ["/og.png"]
  }
};

export default function ArchivePage() {
  const featuredEvents = [...events]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

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
        <div className="mb-6 rounded-2xl border border-border bg-card p-4 shadow-subtle">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Featured entries
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {featuredEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/event/${event.slug}`}
                className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm transition hover:border-accentGold"
              >
                <div className="font-semibold">{event.title}</div>
                <div className="text-xs text-muted">
                  {event.chain} • {event.date}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 text-sm text-muted">
            Browse the full list or jump into the timeline for a guided view.
            <Link href="/timeline" className="ml-2 text-accentGold underline">
              View timeline
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4 shadow-subtle">
          <EventTable />
        </div>
      </section>
    </main>
  );
}

