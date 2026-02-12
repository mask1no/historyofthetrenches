import type { LucideIcon } from "lucide-react";
import { Flame, LineChart, MessagesSquare, Orbit } from "lucide-react";

type LinkIconName = "x" | "pumpfun" | "dexscreener" | "solana";

const iconMap: Record<LinkIconName, LucideIcon> = {
  x: MessagesSquare,
  pumpfun: Flame,
  dexscreener: LineChart,
  solana: Orbit
};

type LinkIconProps = {
  name: LinkIconName;
  className?: string;
};

export function LinkIcon({ name, className }: LinkIconProps) {
  const Icon = iconMap[name];
  return (
    <span className={`link-icon ${className ?? ""}`.trim()} aria-hidden="true">
      <Icon className="h-3 w-3" />
    </span>
  );
}
