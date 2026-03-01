export default function EventLoading() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-8">
        <div className="mb-6 space-y-4">
          <div className="flex gap-2">
            <div className="h-6 w-20 animate-pulse rounded-full bg-border/30" />
            <div className="h-6 w-16 animate-pulse rounded-full bg-border/30" />
            <div className="h-6 w-14 animate-pulse rounded-full bg-border/30" />
          </div>
          <div className="h-10 w-3/4 animate-pulse rounded-xl bg-border/30" />
          <div className="h-5 w-full max-w-3xl animate-pulse rounded-xl bg-border/30" />
          <div className="h-4 w-40 animate-pulse rounded-xl bg-border/30" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-3 md:col-span-2">
            <div className="h-48 animate-pulse rounded-xl bg-border/30" />
          </div>
          <div>
            <div className="h-64 animate-pulse rounded-xl bg-border/30" />
          </div>
        </div>
        <div className="mt-8 space-y-3">
          <div className="h-6 w-40 animate-pulse rounded-xl bg-border/30" />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="h-20 animate-pulse rounded-xl bg-border/30" />
            <div className="h-20 animate-pulse rounded-xl bg-border/30" />
          </div>
        </div>
      </section>
    </main>
  );
}
