import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold capitalize leading-none",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-fg",
        gold: "border-accentGold bg-accentGold/10 text-accentGold",
        red: "border-accentRed bg-accentRed/10 text-accentRed",
        green: "border-accentGreen bg-accentGreen/10 text-accentGreen",
        dark: "border-border bg-border/30 text-fg",
        muted: "border-border bg-muted/10 text-muted"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

