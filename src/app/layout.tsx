import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { brand, siteUrl } from "@/lib/brand";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${brand.name} — ${brand.tagline}`, template: `%s · ${brand.shortName}` },
  description:
    "Shop online in the USA and get your packages delivered in Kingston and St. Catherine, or collect at Knutsford Express. Reliable air freight forwarding to Jamaica.",
  openGraph: {
    title: brand.name,
    description: `${brand.tagline}. Air freight forwarding from the USA to Jamaica.`,
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#113f7d" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
