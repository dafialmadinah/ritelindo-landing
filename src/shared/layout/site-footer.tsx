import { WhatsAppCta } from "@/features/consultation/whatsapp-cta";
import { Wordmark } from "@/shared/ui/wordmark";

const footerLinks = [
  { href: "#produk", label: "Paket Rak Minimarket" },
  { href: "#produk", label: "Rak Toko & Gudang" },
  { href: "#layanan", label: "Jasa Layout 3D" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Hubungi Kami" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer text-slate-300">
      <div className="footer-inner mx-auto w-full max-w-[1360px]">
        <div className="footer-grid grid grid-cols-1 gap-8 md:grid-cols-4">
          <section aria-labelledby="footer-brand-heading">
            <h2 className="sr-only" id="footer-brand-heading">
              Tentang Ritelindo Group
            </h2>
            <Wordmark light />
            <p className="footer-description">
              Mitra kebutuhan rak dan interior retail untuk membantu bisnis
              menyiapkan toko dengan lebih terarah.
            </p>
            <p className="footer-tagline">
              Pabrik Langsung <span aria-hidden="true">•</span> Solusi Layout
              &amp; Rak Minimarket Modern
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

          <section aria-labelledby="footer-service-heading">
            <h2 className="footer-heading" id="footer-service-heading">
              Layanan &amp; Area
            </h2>
            <ul className="footer-detail-list">
              <li>Gratis ongkir Jawa–Bali</li>
              <li>Gratis perakitan Jatim, Jateng &amp; DIY</li>
              <li>Jam operasional: Senin–Sabtu, 08.00–17.00 WIB</li>
            </ul>
          </section>

          <section aria-labelledby="footer-contact-heading" id="kontak">
            <h2 className="footer-heading" id="footer-contact-heading">
              Kantor &amp; Pabrik
            </h2>
            <ul className="footer-contact-list">
              <li>
                <span aria-hidden="true" className="footer-contact-icon">
                  ⌖
                </span>
                <span>
                  <strong>Alamat Industri/Pabrik</strong>
                  <span>Informasi lokasi tersedia melalui tim kami.</span>
                </span>
              </li>
              <li>
                <span aria-hidden="true" className="footer-contact-icon">
                  @
                </span>
                <span>
                  <strong>Email Support</strong>
                  <span>Alamat email belum dicantumkan.</span>
                </span>
              </li>
            </ul>
            <div className="footer-hotline">
              <span className="footer-contact-icon" aria-hidden="true">
                ↗
              </span>
              <div>
                <strong>WhatsApp Hotline</strong>
                <WhatsAppCta intent={{ source: "header" }} variant="outline-light" />
              </div>
            </div>
          </section>
        </div>

        <div className="footer-bottom flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Ritelindo Group. All rights reserved.</span>
          <span>
            Demo website untuk kebutuhan tes. Logo dan aset foto bersifat
            ilustratif.
          </span>
        </div>
      </div>
    </footer>
  );
}
