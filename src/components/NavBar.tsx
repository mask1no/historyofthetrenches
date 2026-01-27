"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Archive", href: "/archive" },
  { label: "Timeline", href: "/timeline" },
  { label: "Community", href: "https://x.com/historytrenches" }
];

export function NavBar() {
  const pathname = usePathname();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const isMenuOpen = showMobileNav;

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            History of the Trenches
          </Link>
          <nav className="hidden items-center gap-1 text-sm text-muted md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className={`rounded-full px-4 py-2 transition hover:text-fg hover:bg-card hover:underline hover:decoration-2 hover:decoration-accentGold ${
                  pathname === item.href
                    ? "bg-card text-fg underline decoration-2 decoration-accentGold"
                    : ""
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a href="/trench-manual.pdf" download className="hidden md:inline-flex">
            <Button
              variant="default"
              className="bg-accentGold text-fg hover:bg-accentGold/90"
            >
              Download Trench Manual
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden border border-border text-muted"
            aria-label="Open menu"
            onClick={() => setShowMobileNav(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setShowMobileNav(false)}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute right-0 top-0 flex h-full w-[88vw] max-w-sm flex-col border-l border-border bg-card p-6 shadow-subtle transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-base font-semibold">Navigate</span>
            <button
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accentGold hover:text-fg"
              onClick={() => setShowMobileNav(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className={`rounded-2xl border border-border px-4 py-4 text-base transition hover:border-accentGold hover:bg-bg ${
                  pathname === item.href ? "border-accentGold bg-bg" : ""
                }`}
                onClick={() => setShowMobileNav(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a href="/trench-manual.pdf" download onClick={() => setShowMobileNav(false)}>
              <Button className="w-full justify-center bg-accentGold text-fg hover:bg-accentGold/90">
                Download Trench Manual
              </Button>
            </a>
            <Link href="/archive" onClick={() => setShowMobileNav(false)}>
              <Button variant="secondary" className="w-full justify-center">
                Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

