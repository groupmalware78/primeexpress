// All site content lives here — edit and redeploy to update the website.
import type { RateConfig } from "./rates";

export const brand = {
  name: "PrimeXpress Freight Limited",
  shortName: "PrimeXpress Freight",
  initials: "PXF",
  tagline: "Service with Purpose",
  email: "primexpressfreight@gmail.com",
  phone: "876-890-6039",
  phoneHref: "tel:+18768906039",
  instagram: "@primexpressfreight",
  instagramUrl: "https://instagram.com/primexpressfreight",
} as const;

/** Public URL, used for sitemap / social previews. Set SITE_URL at build time. */
export const siteUrl = (process.env.SITE_URL || "https://primexpressfreight.up.railway.app").replace(/\/$/, "");

// TODO: confirm real prices before launch.
export const rates: RateConfig = {
  firstLbJmd: 700,
  additionalLbJmd: 450,
  customsThresholdUsd: 100,
};

export type Branch = { id: string; name: string; type: "DELIVERY" | "PICKUP"; description: string };

export const branches: Branch[] = [
  {
    id: "kingston",
    name: "Kingston Delivery",
    type: "DELIVERY",
    description: "Door-to-door delivery to your home or office in Kingston.",
  },
  {
    id: "st-catherine",
    name: "St. Catherine Delivery",
    type: "DELIVERY",
    description: "Door-to-door delivery across St. Catherine, including Portmore and Spanish Town.",
  },
  {
    id: "knutsford",
    name: "Knutsford Express Pickup",
    type: "PICKUP",
    description: "We send your package via Knutsford Express so you can collect it at a depot near you, island-wide.",
  },
];

/** The email split at "@" so it can wrap cleanly in narrow layouts. */
export const emailParts = brand.email.split("@") as [string, string];

export const formatJmd = (n: number) => `J$${new Intl.NumberFormat("en-JM", { maximumFractionDigits: 0 }).format(n)}`;
