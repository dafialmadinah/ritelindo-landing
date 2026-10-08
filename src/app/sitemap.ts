import type { MetadataRoute } from "next";
import { site } from "@/shared/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return site.indexable && site.url
    ? [{ url: site.url, changeFrequency: "monthly", priority: 1 }]
    : [];
}
