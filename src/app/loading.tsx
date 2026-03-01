export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accentGold" />
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accentGold [animation-delay:150ms]" />
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accentGold [animation-delay:300ms]" />
      </div>
      <span className="text-xs uppercase tracking-[0.2em] text-muted">Loading the archive</span>
    </div>
  );
}
