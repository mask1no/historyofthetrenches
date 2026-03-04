export type NavItem = {
  label: string;
  href: string;
};

export const primaryNavItems: NavItem[] = [
  { label: "Archive", href: "/archive" },
  { label: "Timeline", href: "/timeline" },
  { label: "Kit", href: "/kit" },
  { label: "$HOT", href: "/hot" }
];

export const socialLinks = [
  { label: "X (Twitter)", href: "https://x.com/historytrenches", icon: "x" as const },
  { label: "DexScreener", href: "https://dexscreener.com", icon: "dexscreener" as const },
  { label: "Pump.fun", href: "https://pump.fun", icon: "pumpfun" as const }
];

