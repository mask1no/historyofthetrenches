"use client";

import { useEffect } from "react";

export function TimelineScrollToHash() {
  useEffect(() => {
    const scrollToHash = (hash: string) => {
      if (!hash) return;
      const targetId = hash.replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToHash(window.location.hash);

    const handleHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}
