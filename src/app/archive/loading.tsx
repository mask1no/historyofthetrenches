export default function ArchiveLoading() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-8 space-y-3">
          <div className="h-10 w-48 animate-pulse rounded-xl bg-border/30" />
          <div className="h-5 w-full max-w-3xl animate-pulse rounded-xl bg-border/30" />
          <div className="h-px w-full bg-border/50" />
        </div>
        <div className="space-y-4">
          <div className="h-28 animate-pulse rounded-xl bg-border/30" />
          <div className="h-28 animate-pulse rounded-xl bg-border/30" />
          <div className="h-28 animate-pulse rounded-xl bg-border/30" />
          <div className="h-28 animate-pulse rounded-xl bg-border/30" />
        </div>
      </section>
    </main>
  );
}
