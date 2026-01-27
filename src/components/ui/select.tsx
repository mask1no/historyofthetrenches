import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectOption = {
  label: string;
  value: string;
};

export interface SelectProps {
  label?: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  className?: string;
}

export function Select({ label, value, options, onChange, className }: SelectProps) {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const listRef = React.useRef<HTMLUListElement | null>(null);

  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value)
  );

  React.useEffect(() => {
    setActiveIndex(selectedIndex);
  }, [selectedIndex]);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        !buttonRef.current?.contains(event.target as Node) &&
        !listRef.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((prev) => Math.min(prev + 1, options.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (open) {
        const option = options[activeIndex];
        if (option) onChange(option.value);
        setOpen(false);
      } else {
        setOpen(true);
      }
    }
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      {label && (
        <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </label>
      )}
      <button
        ref={buttonRef}
        type="button"
        className="flex h-11 w-full items-center justify-between rounded-2xl border border-border bg-card px-4 text-sm text-fg shadow-sm transition hover:border-accentGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentGold/60"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        <span className="truncate">{options[selectedIndex]?.label ?? "Select"}</span>
        <ChevronDown className={`h-4 w-4 text-muted transition ${open ? "rotate-180" : ""}`} />
      </button>
      <ul
        ref={listRef}
        role="listbox"
        tabIndex={-1}
        className={`absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-border bg-card p-1 text-sm shadow-subtle transition ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {options.map((option, index) => {
          const isSelected = option.value === value;
          const isActive = index === activeIndex;
          return (
            <li
              key={option.value}
              role="option"
              aria-selected={isSelected}
              className={cn(
                "cursor-pointer rounded-xl px-3 py-2 transition",
                isSelected ? "bg-accentGold/15 text-fg" : "text-muted hover:bg-bg",
                isActive && !isSelected ? "bg-bg text-fg" : ""
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}




