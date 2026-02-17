"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6 text-fg">
      <div className="max-w-md space-y-4 rounded-2xl border border-border bg-card p-6 shadow-subtle">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Error</div>
        <h1 className="font-display text-2xl font-semibold">
          Something went wrong
        </h1>
        <p className="text-sm text-muted">
          Try again, or return to the homepage while the page resets.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={reset}>Retry</Button>
          <Link href="/">
            <Button variant="subtle">Go to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
