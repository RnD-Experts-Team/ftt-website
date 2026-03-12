import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { fetchHomeData } from "@/lib/services/home.service";
import { getSiteUrl } from "@/lib/seo/site-url";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const materialSymbols = localFont({
  src: "../public/fonts/MaterialSymbolsOutlined.ttf",
  variable: "--font-material-symbols",
  display: "swap",
});

const sragen = localFont({
  src: "../public/fonts/sragenbold.ttf",
  variable: "--font-sragen",
  weight: "700",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchHomeData();
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: data?.site_metadata?.name ?? "First Team Trucking",
    description: data?.site_metadata?.description ?? "First Team Trucking - Join Our Team",
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        data?.site_metadata?.favicon ?? "/favicon.ico",
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${barlowCondensed.variable} ${sragen.variable} ${materialSymbols.variable} antialiased font-display`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
