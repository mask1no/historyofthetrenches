import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">404</div>
        <h1 className="font-display text-4xl font-semibold">
          Page not found
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          The route may be outdated or the page may have moved. Use the links below to get back on
          track.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/">
            <Button className="shadow-subtle">Go to Homepage</Button>
          </Link>
          <Link href="/archive">
            <Button variant="subtle">Go to Archive</Button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
