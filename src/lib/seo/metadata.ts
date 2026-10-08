import type { Metadata } from "next";
import { site } from "@/shared/config/site";
export const siteMetadata: Metadata = {
  title: site.title,
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: site.title,
    description: site.description,
    ...(site.url
      ? {
          url: site.url,
          images: [
            {
              url: new URL("/images/hero.jpg", site.url).href,
              width: 2200,
              height: 1650,
              type: "image/jpeg",
              alt: "Ilustrasi rak minimarket untuk paket setup toko retail Ritelindo Group",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    ...(site.url
      ? {
          images: [
            {
              url: new URL("/images/hero.jpg", site.url).href,
              alt: "Ilustrasi rak minimarket Ritelindo Group",
            },
          ],
        }
      : {}),
  },
  ...(site.url
    ? {
        metadataBase: new URL(site.url),
        alternates: { canonical: "/" },
      }
    : {}),
  robots: { index: site.indexable, follow: site.indexable },
};
