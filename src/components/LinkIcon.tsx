type LinkIconName = "x" | "pumpfun" | "dexscreener" | "solana";

type SvgIconProps = {
  className?: string;
};

const iconMap: Record<LinkIconName, ({ className }: SvgIconProps) => JSX.Element> = {
  x: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.901 2H22l-6.767 7.734L23.194 22H16.96l-4.88-6.925L6.02 22H2.919l7.238-8.273L.5 2h6.392l4.41 6.31L18.901 2Zm-1.089 18h1.718L5.96 3.895H4.117L17.812 20Z" />
    </svg>
  ),
  pumpfun: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 20c2.1-2.1 3.4-4.1 4-6.2A4.5 4.5 0 0 1 8 9.7c0-2.7 2.1-4.7 4.9-4.7 1.4 0 2.6.5 3.5 1.4 2.4 2.4 2.1 6.2-.7 9-2.1 2.1-4.6 3.7-9.2 4.6Zm6.4-12.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Z" />
    </svg>
  ),
  dexscreener: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 3h18v2H3V3Zm2 16h14v2H5v-2Zm1.2-2.2 3.5-3.7 2.6 2.5 5.1-6.1 1.6 1.3-6.2 7.4-2.6-2.5-2.4 2.6-1.6-1.5Z" />
    </svg>
  ),
  solana: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.2 6.2A1.7 1.7 0 0 1 7.5 5.5h11a1 1 0 0 1 .7 1.7l-1.4 1.4a1.7 1.7 0 0 1-1.2.5h-11a1 1 0 0 1-.7-1.7l1.3-1.2Zm0 9.2a1.7 1.7 0 0 1 1.3-.6h11a1 1 0 0 1 .7 1.7l-1.4 1.3a1.7 1.7 0 0 1-1.2.6h-11a1 1 0 0 1-.7-1.8l1.3-1.2ZM4.8 11.6a1 1 0 0 1 .7-1.7h11a1.7 1.7 0 0 1 1.2.5l1.4 1.4a1 1 0 0 1-.7 1.7h-11a1.7 1.7 0 0 1-1.3-.5l-1.3-1.4Z" />
    </svg>
  )
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
