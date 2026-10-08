import { heroVideo, images } from "@/features/landing/data/media";
import { HeroVideo } from "@/features/landing/hero-video";
import { WhatsAppCta } from "@/features/consultation/whatsapp-cta";

export function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <HeroVideo src={heroVideo} poster={images.hero} />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow eyebrow--light">Rak & interior retail</p>
        <p className="factory-label">
          <span><span aria-hidden="true">• </span>Produk langsung dari pabrik</span>
          <span><span aria-hidden="true">• </span>Harga kompetitif</span>
        </p>
        <h1 id="hero-heading">
          Paket Rak Minimarket & Rak Toko Sesuai Ruangan Anda
        </h1>
        <div className="hero-bottom">
          <div className="hero-support">
            <p>
              Rak langsung dari pabrik dengan harga kompetitif. Mulai dengan
              konsultasi dan layout 3D gratis, lalu sesuaikan rak dengan
              kebutuhan serta ukuran ruangan toko.
            </p>
            <div className="hero-benefits" aria-label="Layanan gratis">
              <span>Gratis ongkir Jawa–Bali</span>
              <span>Gratis perakitan Jatim, Jateng & DIY</span>
            </div>
          </div>
          <div className="hero-action">
            <WhatsAppCta intent={{ source: "hero" }} variant="primary" />
            <p className="cta-microcopy">
              Konsultasi & layout 3D gratis. Langsung via WhatsApp
            </p>
          </div>
        </div>
      </div>
      <a aria-label="Lihat produk" className="scroll-cue" href="#pengantar">
        <span>Jelajahi</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
