import { getConsultationContent } from "@/features/consultation/consultation-content";
import { buildWhatsAppUrl } from "@/features/consultation/whatsapp-url";
import { site } from "@/shared/config/site";
import { Wordmark } from "@/shared/ui/wordmark";

const footerLinks = [
  { href: "#produk", label: "Paket Rak Minimarket" },
  { href: "#produk", label: "Rak Toko & Gudang" },
  { href: "#layanan", label: "Jasa Layout 3D" },
  { href: "#faq", label: "FAQ" },
] as const;

const whatsAppMessage = getConsultationContent({ source: "header" }).message;

export function SiteFooter() {
  const whatsAppUrl = site.whatsappNumber
    ? buildWhatsAppUrl(site.whatsappNumber, whatsAppMessage)
    : undefined;

  return (
    <footer className="site-footer text-slate-300">
      <div className="footer-inner mx-auto w-full max-w-[1360px]">
        <div className="footer-grid grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 md:grid-cols-[1.35fr_0.85fr_1fr]">
          <section aria-labelledby="footer-brand-heading">
            <h2 className="sr-only" id="footer-brand-heading">
              Tentang Ritelindo Group
            </h2>
            <Wordmark light />
            <p className="footer-description">
              Solusi rak dan interior retail untuk membantu Anda menyiapkan
              toko.
            </p>
          </section>

          <nav aria-label="Navigasi footer">
            <h2 className="footer-heading">Navigasi</h2>
            <ul className="footer-link-list">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact-heading" id="kontak">
            <h2 className="footer-heading" id="footer-contact-heading">
              Kontak
            </h2>
            {whatsAppUrl ? (
              <a
                className="footer-whatsapp-link"
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <p className="footer-contact-unavailable">
                WhatsApp belum tersedia.
              </p>
            )}
            <ul className="footer-contact-details">
              <li>Gratis ongkir Jawa–Bali</li>
              <li>Gratis perakitan Jatim, Jateng &amp; DIY</li>
              <li>Senin–Sabtu · 08.00–17.00 WIB</li>
            </ul>
          </section>
        </div>

        <div className="footer-bottom flex flex-col gap-3 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
          <span className="text-xs text-slate-300">
            © 2026 Ritelindo Group. All rights reserved.
          </span>
          <span className="text-[10px] text-slate-400">
            Demo tes · Logo dan aset foto ilustratif.
          </span>
        </div>
      </div>
    </footer>
  );
}
