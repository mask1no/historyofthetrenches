export default function TimelineLoading() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <div className="h-10 w-64 animate-pulse rounded-xl bg-border/30" />
          <div className="h-5 w-full max-w-2xl animate-pulse rounded-xl bg-border/30" />
        </div>
        <div className="space-y-4">
          <div className="h-32 animate-pulse rounded-xl bg-border/30" />
          <div className="h-32 animate-pulse rounded-xl bg-border/30" />
          <div className="h-32 animate-pulse rounded-xl bg-border/30" />
          <div className="h-32 animate-pulse rounded-xl bg-border/30" />
        </div>
      </section>
    </main>
  );
}
