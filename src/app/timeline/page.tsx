import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { EraTimeline } from "@/components/EraTimeline";
import { Footer } from "@/components/Footer";
import { TimelineScrollToHash } from "@/components/TimelineScrollToHash";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Crypto Timeline | History of the Trenches",
  description: "Chronological chapters with featured events that led to major onboarding waves.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/timeline"
  },
  openGraph: {
    title: "Crypto Timeline | History of the Trenches",
    description: "Chronological chapters with featured events that led to major onboarding waves.",
    url: "https://www.historyofthetrenches.xyz/timeline",
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
    title: "Crypto Timeline | History of the Trenches",
    description: "Chronological chapters with featured events that led to major onboarding waves.",
    images: ["/og.png"]
  }
};

export default function TimelinePage() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <TimelineScrollToHash />
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <h1
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Crypto Timeline
          </h1>
          <p className="text-base text-muted">
            Chronological chapters tracking the biggest onboarding waves in crypto.
          </p>
        </div>
        <EraTimeline />
      </section>
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}

