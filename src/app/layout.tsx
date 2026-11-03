import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

/*
  Provisional type pairing, pending brand fonts from the client.
  Manrope (display) has the geometric precision of creative-tech brands;
  Inter (body) is highly legible at small sizes. Both are self-hosted at
  build time by next/font — no runtime request to Google.
  To swap fonts, change only these two declarations.
*/
const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    locale: site.locale,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.locale} className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {/* Header is added in the next phase. */}
        <main id="main">{children}</main>
        {/* Footer is added in a later phase. */}
      </body>
    </html>
  );
}
