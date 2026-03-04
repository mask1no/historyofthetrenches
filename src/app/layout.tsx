import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const canonicalSiteUrl = "https://www.historyofthetrenches.xyz";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" }
  ],
  colorScheme: "light dark"
};

export const metadata: Metadata = {
  title: "History of the Trenches",
  description: "Community-maintained crypto history archive and timeline.",
  applicationName: "History of the Trenches",
  creator: "History of the Trenches",
  metadataBase: new URL(canonicalSiteUrl),
  alternates: {
    canonical: canonicalSiteUrl,
    languages: {
      "en-US": canonicalSiteUrl
    }
  },
  robots: {
    index: true,
    follow: true
  },
  keywords: [
    "crypto history",
    "bitcoin history",
    "web3 timeline",
    "defi events",
    "crypto archive"
  ],
  openGraph: {
    title: "History of the Trenches",
    description: "Community-maintained crypto history archive and timeline.",
    url: canonicalSiteUrl,
    siteName: "History of the Trenches",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "History of the Trenches"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "History of the Trenches",
    description: "Community-maintained crypto history archive and timeline.",
    images: ["/og.png"]
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `(function(){try{var stored=localStorage.getItem("hot-theme");var systemDark=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;var useDark=stored==="dark"||((stored!=="light"&&stored!=="dark")&&systemDark);document.documentElement.classList.toggle("dark",useDark);var accent=localStorage.getItem("hot-data-accent");if(accent){var a=JSON.parse(accent);document.documentElement.style.setProperty("--data-accent",a.color);if(a.gradient){document.documentElement.style.setProperty("--data-accent-gradient",a.gradient);document.documentElement.setAttribute("data-accent-mode","gradient")}}}catch(e){}})();`;
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "History of the Trenches",
    url: canonicalSiteUrl,
    sameAs: ["https://x.com/historytrenches"]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "History of the Trenches",
    url: canonicalSiteUrl
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} bg-bg text-fg antialiased`}
      >
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="site-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

