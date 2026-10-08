function readSiteUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      url.pathname !== "/"
    )
      throw new Error();
    return url.origin;
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL harus berupa origin HTTP(S) valid, tanpa path, kredensial, query, atau hash.",
    );
  }
}
const vercelProductionOrigin =
  process.env.VERCEL_PROJECT_PRODUCTION_URL &&
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
const deployedProductionOrigin =
  vercelProductionOrigin ||
  (process.env.VERCEL_ENV === "production"
    ? "https://ritelindo-landing-peach.vercel.app"
    : undefined);
const url = readSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || deployedProductionOrigin,
);
const indexable =
  process.env.SITE_INDEXABLE === "true" ||
  (process.env.SITE_INDEXABLE !== "false" &&
    process.env.VERCEL_ENV === "production");
const demoWhatsAppNumber = "12025550100";
if (indexable && !url)
  throw new Error(
    "Situs yang diindeks memerlukan NEXT_PUBLIC_SITE_URL atau domain produksi Vercel.",
  );
export const site = {
  name: "Ritelindo Group",
  title: "Pabrik Rak Minimarket & Paket Setup Toko | Ritelindo Group",
  description:
    "Pabrik rak minimarket untuk paket setup toko retail, rak satuan, dan proyek cabang. Konsultasi & layout 3D gratis, harga kompetitif, serta ongkir Jawa–Bali.",
  url,
  indexable,
  // Keep demo deployments' WhatsApp CTAs visible without routing to a real person.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || demoWhatsAppNumber,
} as const;
