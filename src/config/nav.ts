export type NavItem = {
  label: string;
  href: string;
};

const basePrimaryNavItems: NavItem[] = [
  { label: "Archive", href: "/archive" },
  { label: "Timeline", href: "/timeline" },
  { label: "Kit", href: "/kit" }
];

const hotNavItem: NavItem = { label: "$HOT", href: "/hot" };

export const socialLinks = [
  { label: "X (Twitter)", href: "https://x.com/historytrenches", icon: "x" as const },
  { label: "DexScreener", href: "https://dexscreener.com", icon: "dexscreener" as const },
  { label: "Pump.fun", href: "https://pump.fun", icon: "pumpfun" as const }
];

export const isHotNavEnabled = process.env.NEXT_PUBLIC_FEATURE_HOT === "true";

export const getPrimaryNavItems = (): NavItem[] =>
  isHotNavEnabled ? [...basePrimaryNavItems, hotNavItem] : basePrimaryNavItems;

