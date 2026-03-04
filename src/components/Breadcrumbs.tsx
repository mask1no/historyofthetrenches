import Link from "next/link";
import Script from "next/script";
import { ChevronRight } from "lucide-react";

export type Crumb = {
  label: string;
  href: string;
};

type Props = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: Props) {
  const allCrumbs: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const base = "https://www.historyofthetrenches.xyz";
  const scriptId = `breadcrumb-jsonld-${allCrumbs.map((crumb) => crumb.href).join("-").replace(/[^a-z0-9-]/gi, "")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allCrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${base}${crumb.href}`
    }))
  };

  return (
    <>
      <Script
        id={scriptId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mb-4 flex items-center gap-1.5 text-xs text-muted"
      >
        {allCrumbs.map((crumb, i) => {
          const isLast = i === allCrumbs.length - 1;
          return (
            <span key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 text-border" aria-hidden="true" />}
              {isLast ? (
                <span className="font-medium text-fg" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="transition hover:text-fg hover:underline hover:decoration-accentGold hover:underline-offset-2"
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
