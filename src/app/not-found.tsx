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
        <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
          This page slipped off the chain.
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          The link might be outdated or the entry has moved. Jump back to the archive or explore
          the timeline instead.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/archive">
            <Button className="shadow-subtle">Go to Archive</Button>
          </Link>
          <Link href="/timeline">
            <Button variant="subtle">View Timeline</Button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
