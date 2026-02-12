"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Archive", href: "/archive" },
  { label: "Timeline", href: "/timeline" },
  { label: "Kit", href: "/kit" },
  { label: "$HOT", href: "/hot" }
];

export function NavBar() {
  const pathname = usePathname();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const isMenuOpen = showMobileNav;
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("hot-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
      return;
    }
    setTheme("light");
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isMenuOpen) {
      const scrollBarWidth = window.innerWidth - root.clientWidth;
      body.style.overflow = "hidden";
      body.style.paddingRight = scrollBarWidth > 0 ? `${scrollBarWidth}px` : "";
      root.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
      root.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
      root.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("hot-theme", nextTheme);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
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
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`rounded-full px-4 py-2 transition hover:text-fg hover:underline hover:decoration-2 hover:decoration-accentGold ${
                  pathname === item.href
                    ? "text-fg underline decoration-2 decoration-accentGold"
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
          <Button
            variant="ghost"
            size="icon"
            className="group relative hidden md:inline-flex border border-border bg-card/80 text-muted-foreground transition hover:text-foreground hover:bg-card hover:shadow-subtle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <span className="relative h-4 w-4">
              <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </span>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </span>
            </span>
          </Button>
          <a href="/trench-manual.pdf" download className="hidden md:inline-flex">
            <Button
              variant="default"
              className="gap-2 bg-accentGold text-fg hover:bg-accentGold/90"
            >
              <Download className="h-4 w-4" />
              Download Trench Manual
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden border border-border text-muted"
            aria-label="Open menu"
            aria-controls="mobile-nav-drawer"
            aria-expanded={isMenuOpen}
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
          id="mobile-nav-drawer"
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
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
            <Button
              variant="ghost"
              className="w-full justify-center gap-2 border border-border text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </Button>
            <a href="/trench-manual.pdf" download onClick={() => setShowMobileNav(false)}>
              <Button className="w-full justify-center gap-2 bg-accentGold text-fg hover:bg-accentGold/90">
                <Download className="h-4 w-4" />
                Download Trench Manual
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

