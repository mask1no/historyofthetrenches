import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, label, ...props }, ref) => {
    return (
      <label className="w-full text-xs font-medium text-muted">
        {label && <span className="mb-1 block">{label}</span>}
        <select
          ref={ref}
          className={cn(
            "h-10 w-full rounded-full border border-border bg-card px-4 text-sm text-fg shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentGold/60",
            className
          )}
          {...props}
        >
          {children}
        </select>
      </label>
    );
  }
);
Select.displayName = "Select";





