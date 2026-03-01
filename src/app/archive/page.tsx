import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { EventTable } from "@/components/EventTable";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

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
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <Breadcrumbs items={[{ label: "Archive", href: "/archive" }]} />
        <div className="mb-8 space-y-3">
          <h1 className="font-display text-4xl font-semibold">
            Archive
          </h1>
          <p className="text-base text-muted">
            The archive holds crypto&apos;s defining moments. Filter by type, chain, or tags to
            explore the full history with sources attached.
          </p>
          <div className="h-px w-full bg-border" />
        </div>
        <EventTable />

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/timeline"
            className="font-medium text-muted transition hover:text-fg hover:underline hover:decoration-accentGold hover:underline-offset-2"
          >
            View the Timeline
          </Link>
          <Link
            href="/kit"
            className="font-medium text-muted transition hover:text-fg hover:underline hover:decoration-accentGold hover:underline-offset-2"
          >
            Explore the Kit
          </Link>
        </div>
      </section>
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}

