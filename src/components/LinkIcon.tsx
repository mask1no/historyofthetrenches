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
      <rect x="7" y="2" width="10" height="20" rx="5" />
    </svg>
  ),
  dexscreener: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4Zm3 10.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H6Zm4-3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H10Zm4 1a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H14Zm-8-4a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H6Z" fillRule="evenodd" />
      <path d="M4 21h16v2H4v-2Z" />
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
