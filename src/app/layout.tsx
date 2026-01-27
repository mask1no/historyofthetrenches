import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "History of the Trenches",
  description: "Community-maintained crypto history archive and timeline.",
  metadataBase: new URL(canonicalSiteUrl),
  alternates: {
    canonical: canonicalSiteUrl
  },
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
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-bg text-fg antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}


