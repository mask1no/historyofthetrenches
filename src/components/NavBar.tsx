"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);
  const hadMenuOpenRef = useRef(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("hot-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const fallbackTheme = prefersDark ? "dark" : "light";
    setTheme(fallbackTheme);
    document.documentElement.classList.toggle("dark", prefersDark);
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

  useEffect(() => {
    if (isMenuOpen) {
      closeButtonRef.current?.focus();
      hadMenuOpenRef.current = true;
      return;
    }
    if (hadMenuOpenRef.current) {
      menuButtonRef.current?.focus();
      hadMenuOpenRef.current = false;
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMobileNav(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    const handleTrap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }
      const drawer = mobileDrawerRef.current;
      if (!drawer) {
        return;
      }
      const focusable = Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("disabled"));
      if (focusable.length === 0) {
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };
    document.addEventListener("keydown", handleTrap);
    return () => document.removeEventListener("keydown", handleTrap);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("hot-theme", nextTheme);
  };

  const closeMobileMenu = () => setShowMobileNav(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-bg/85 backdrop-blur dark:border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight"
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
            className="hidden border border-border bg-card/80 text-muted-foreground transition-colors duration-200 hover:border-accentGold/50 hover:text-fg md:inline-flex"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <a href="/trench-manual.pdf" download className="hidden md:inline-flex">
            <Button
              variant="default"
              className="gap-2 bg-accentGold text-[#1a1a00] hover:bg-accentGold/90"
            >
              <Download className="h-4 w-4" />
              Download Trench Manual
            </Button>
          </a>
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="border border-border text-fg dark:border-white/10 dark:bg-white/[0.04] md:hidden"
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
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-lg backdrop-saturate-150 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setShowMobileNav(false)}
        aria-hidden={!isMenuOpen}
      >
        <div
          id="mobile-nav-drawer"
          ref={mobileDrawerRef}
          className={`absolute right-0 top-0 flex h-full w-[88vw] max-w-sm flex-col border-l border-border bg-card/95 p-6 shadow-subtle transition-transform duration-300 will-change-transform dark:border-white/10 dark:bg-[#1a1a1a] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_16px_48px_rgba(0,0,0,0.5)] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-base font-semibold">Navigate</span>
            <button
              ref={closeButtonRef}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg transition hover:border-accentGold hover:text-fg dark:border-white/10"
              onClick={closeMobileMenu}
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
                className={`rounded-2xl border border-border px-4 py-4 text-base text-fg transition hover:border-accentGold hover:bg-bg dark:border-white/8 dark:hover:bg-white/[0.04] ${
                  pathname === item.href ? "border-accentGold bg-bg dark:border-accentGold dark:bg-white/[0.04]" : ""
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a href="/trench-manual.pdf" download onClick={closeMobileMenu}>
              <Button className="w-full justify-center gap-2 bg-accentGold text-[#1a1a00] hover:bg-accentGold/90">
                <Download className="h-4 w-4" />
                Download Trench Manual
              </Button>
            </a>
            <Button
              variant="ghost"
              className="w-full justify-center gap-2 border border-border text-fg hover:text-foreground dark:border-white/10"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

