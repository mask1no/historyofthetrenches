import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "span" | "div" | "strong" | "time";
};

export function AccentText({ children, className, as: Tag = "span" }: Props) {
  return (
    <Tag className={cn("data-accent font-semibold", className)}>
      {children}
    </Tag>
  );
}
