import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { NavBar } from "@/components/NavBar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SourceList } from "@/components/SourceList";
import { events, getEventBySlug } from "@/data/events";
import { ShareButtons } from "@/components/ShareButtons";
import Link from "next/link";
import { typeLabel, typeVariant } from "@/lib/eventType";
import { compareEventDatesAsc } from "@/lib/utils";
import { Footer } from "@/components/Footer";

type EventPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: EventPageProps): Metadata {
  const event = getEventBySlug(params.slug);
  const canonicalBase = "https://www.historyofthetrenches.xyz";
  const canonical = event ? `${canonicalBase}/event/${event.slug}` : canonicalBase;
  const description = event
    ? `${event.title} — ${event.summary} (${event.chain}, ${event.date}).`
    : "Event details from the History of the Trenches archive.";
  const publishedTime = event ? new Date(event.date).toISOString() : undefined;
  return {
    title: event
      ? `${event.title} | History of the Trenches`
      : "Event | History of the Trenches",
    description,
    alternates: {
      canonical
    },
    keywords: event ? event.tags : undefined,
    openGraph: {
      title: event ? `${event.title} | History of the Trenches` : "Event | History of the Trenches",
      description,
      url: canonical,
      type: "article",
      siteName: "History of the Trenches",
      publishedTime,
      modifiedTime: publishedTime,
      authors: ["History of the Trenches"],
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: event ? event.title : "History of the Trenches"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: event ? `${event.title} | History of the Trenches` : "Event | History of the Trenches",
      description,
      images: ["/og.png"]
    }
  };
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: event.title,
    datePublished: event.date,
    dateModified: event.date,
    author: {
      "@type": "Organization",
      name: "History of the Trenches"
    },
    publisher: {
      "@type": "Organization",
      name: "History of the Trenches",
      logo: {
        "@type": "ImageObject",
        url: "https://www.historyofthetrenches.xyz/og.png"
      }
    },
    mainEntityOfPage: `https://www.historyofthetrenches.xyz/event/${event.slug}`,
    image: "https://www.historyofthetrenches.xyz/og.png",
    keywords: event.tags.join(", ")
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Archive",
        item: "https://www.historyofthetrenches.xyz/archive"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: event.title,
        item: `https://www.historyofthetrenches.xyz/event/${event.slug}`
      }
    ]
  };

  const related = events
    .filter(
      (e) =>
        e.slug !== event!.slug &&
        (e.type === event!.type || e.era === event!.era || e.chain === event!.chain)
    )
    .slice(0, 4);

  const sortedByDate = [...events].sort(compareEventDatesAsc);
  const currentIndex = sortedByDate.findIndex((e) => e.slug === event!.slug);
  const previousEvent = currentIndex > 0 ? sortedByDate[currentIndex - 1] : undefined;
  const nextEvent =
    currentIndex >= 0 && currentIndex < sortedByDate.length - 1
      ? sortedByDate[currentIndex + 1]
      : undefined;

  return (
    <main id="main-content" className="min-h-screen pb-16">
      <Script
        id={`event-jsonld-${event.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Script
        id={`event-breadcrumb-jsonld-${event.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-8">
        <div className="mb-6 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={typeVariant[event!.type]}>{typeLabel[event!.type]}</Badge>
            <Badge variant="muted">{event!.chain}</Badge>
            <Badge variant="muted">{event!.year}</Badge>
            {event!.hallOfFame && <Badge variant="gold">Hall of Fame</Badge>}
          </div>
          <h1
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {event!.title}
          </h1>
          <p className="max-w-3xl text-lg text-muted">{event!.summary}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>Event date: {event!.date}</span>
          </div>
          <ShareButtons
            title={event!.title}
            url={`https://www.historyofthetrenches.xyz/event/${event!.slug}`}
            className="flex"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Sources</CardTitle>
              <p className="text-sm text-muted">
                Verified references submitted by curators. Always include at least two.
              </p>
              <p className="text-xs text-muted">
                Links marked “Source pending” are awaiting verified references.
              </p>
            </CardHeader>
            <CardContent>
              <SourceList sources={event!.sources} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted">Peak metric</span>
                <span className="font-semibold">{event!.peakMetric ?? "—"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Outcome</span>
                <span className="font-semibold">{event!.outcome ?? "—"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Chain</span>
                <span className="font-semibold">{event!.chain}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Year</span>
                <span className="font-semibold">{event!.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Type</span>
                <span className="font-semibold capitalize">{event!.type}</span>
              </div>
              <div>
                <div className="text-muted">Tags</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {event!.tags.map((tag) => (
                    <Badge key={tag} variant="muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {event!.slug === "bitcoin-genesis-block" && (
          <div className="mt-8">
            <Card className="border border-border/80 bg-card/95">
              <CardHeader>
                <CardTitle>Read the Bitcoin Whitepaper</CardTitle>
                <p className="text-sm text-muted">
                  The original source document that framed the genesis moment.
                </p>
              </CardHeader>
              <CardContent>
                <Link
                  href="https://bitcoin.org/bitcoin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accentGold underline"
                >
                  Open the official PDF →
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>View Chart</CardTitle>
              <p className="text-sm text-muted">
                External price/performance context for the historical event.
              </p>
            </CardHeader>
            <CardContent>
              {event!.chartUrl ? (
                <Link
                  href={event!.chartUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accentGold underline"
                >
                  Open chart →
                </Link>
              ) : (
                <p className="text-sm text-muted">Chart link coming soon.</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            Related events
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/event/${item.slug}`}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition hover:border-accentGold"
              >
                <div>
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="text-xs text-muted">
                    {item.chain} • {item.date} • {item.summary}
                  </div>
                </div>
                <Badge
                  variant={
                    item.type === "rugpull"
                      ? "red"
                      : item.type === "runner"
                      ? "green"
                      : item.type === "hack"
                      ? "dark"
                      : "gold"
                  }
                >
                  {item.type}
                </Badge>
              </Link>
            ))}
            {related.length === 0 && (
              <div className="text-sm text-muted">No related events yet.</div>
            )}
          </div>
        </div>

        {(previousEvent || nextEvent) && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
              Continue the timeline
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {previousEvent && (
                <Link
                  href={`/event/${previousEvent.slug}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition hover:border-accentGold"
                >
                  <div>
                    <div className="text-xs uppercase text-muted">Previous</div>
                    <div className="text-sm font-semibold">{previousEvent.title}</div>
                    <div className="text-xs text-muted">
                      {previousEvent.chain} • {previousEvent.date}
                    </div>
                  </div>
                  <Badge variant="muted">{previousEvent.year}</Badge>
                </Link>
              )}
              {nextEvent && (
                <Link
                  href={`/event/${nextEvent.slug}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition hover:border-accentGold"
                >
                  <div>
                    <div className="text-xs uppercase text-muted">Next</div>
                    <div className="text-sm font-semibold">{nextEvent.title}</div>
                    <div className="text-xs text-muted">{nextEvent.chain} • {nextEvent.date}</div>
                  </div>
                  <Badge variant="muted">{nextEvent.year}</Badge>
                </Link>
              )}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}

