"use client";

import { useEffect, useRef, useState } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

type AccentPreset = {
  id: string;
  label: string;
  color: string;
  gradient?: string;
};

const presets: AccentPreset[] = [
  { id: "gold", label: "Gold", color: "#d6b15e" },
  {
    id: "violet",
    label: "Violet Fade",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #a78bfa, #7c3aed)"
  },
  { id: "sky", label: "Sky", color: "#0ea5e9" },
  { id: "rose", label: "Rose", color: "#e11d48" },
  { id: "tangerine", label: "Tangerine", color: "#f97316" },
  { id: "emerald", label: "Emerald", color: "#059669" },
  { id: "electric", label: "Electric", color: "#3b82f6" },
  { id: "crimson", label: "Crimson", color: "#dc2626" }
];

type StoredAccent = {
  id: string;
  color: string;
  gradient?: string;
};

const STORAGE_KEY = "hot-data-accent";

function applyAccent(color: string, gradient?: string) {
  const root = document.documentElement;
  root.style.setProperty("--data-accent", color);
  if (gradient) {
    root.style.setProperty("--data-accent-gradient", gradient);
    root.setAttribute("data-accent-mode", "gradient");
  } else {
    root.style.setProperty("--data-accent-gradient", "none");
    root.removeAttribute("data-accent-mode");
  }
}

export function AccentPicker() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("gold");
  const [customColor, setCustomColor] = useState("#6366f1");
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const stored: StoredAccent = JSON.parse(raw);
      setActiveId(stored.id);
      if (stored.id === "custom") setCustomColor(stored.color);
      applyAccent(stored.color, stored.gradient);
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        !panelRef.current?.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const selectPreset = (preset: AccentPreset) => {
    setActiveId(preset.id);
    applyAccent(preset.color, preset.gradient);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ id: preset.id, color: preset.color, gradient: preset.gradient })
    );
  };

  const selectCustom = (color: string) => {
    setActiveId("custom");
    setCustomColor(color);
    applyAccent(color);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ id: "custom", color })
    );
  };

  const currentPreset = presets.find((p) => p.id === activeId);
  const activeBg = activeId === "custom"
    ? customColor
    : (currentPreset?.gradient ?? currentPreset?.color ?? "#d6b15e");

  return (
    <div className="relative" ref={triggerRef}>
      {/* Desktop: icon button */}
      <Button
        variant="ghost"
        size="icon"
        className="hidden border border-border bg-card/80 text-muted-foreground transition-colors duration-200 hover:border-accentGold/50 hover:text-fg md:inline-flex"
        aria-label="Change data accent color"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Palette className="h-4 w-4" style={{ color: currentPreset?.color ?? customColor }} />
      </Button>

      {/* Mobile: subtle colored dot */}
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-150 active:scale-90 md:hidden"
        aria-label="Change data accent color"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span
          className="block h-3 w-3 rounded-full shadow-sm ring-2 ring-border/50 transition-all duration-200 dark:ring-border-subtle"
          style={{ background: activeBg }}
        />
      </button>

      {/* Panel */}
      <div
        ref={panelRef}
        className={`absolute right-0 top-full z-30 mt-2 w-[220px] rounded-xl border border-border bg-card p-3 shadow-subtle transition-all duration-200 origin-top-right dark:border-border-subtle dark:shadow-[0_12px_32px_rgba(0,0,0,0.5)] ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          Data Accent
        </div>

        <div className="grid grid-cols-4 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              title={preset.label}
              aria-label={`${preset.label} accent`}
              className={`group relative flex h-9 w-full items-center justify-center rounded-lg border transition-all duration-150 ${
                activeId === preset.id
                  ? "border-fg/30 ring-2 ring-fg/10 scale-105"
                  : "border-border hover:border-fg/20 hover:scale-105 dark:border-border-subtle"
              }`}
              onClick={() => selectPreset(preset)}
            >
              <span
                className="h-5 w-5 rounded-full shadow-sm"
                style={{ background: preset.gradient ?? preset.color }}
              />
            </button>
          ))}
        </div>

        <div className="mt-3 border-t border-border/60 pt-3 dark:border-border-subtle">
          <div className="flex items-center gap-2">
            <label
              htmlFor="custom-accent-input"
              className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted"
            >
              Custom
            </label>
            <div className="relative flex flex-1 items-center gap-1.5">
              <input
                id="custom-accent-input"
                type="color"
                value={customColor}
                onChange={(e) => selectCustom(e.target.value)}
                className="h-7 w-7 cursor-pointer appearance-none rounded-md border border-border bg-transparent p-0.5 dark:border-border-subtle [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-sm [&::-webkit-color-swatch]:border-none"
              />
              <span className="text-xs font-mono text-muted tabular-nums">
                {customColor}
              </span>
            </div>
            {activeId === "custom" && (
              <span className="h-1.5 w-1.5 rounded-full bg-fg/40" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
