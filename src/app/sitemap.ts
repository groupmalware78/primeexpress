import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/brand";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  return ["", "/rates", "/terms", "/privacy"].map((p) => ({ url: `${base}${p}` }));
}
