import Image from "next/image";
import { images } from "@/features/landing/data/media";
import { WhatsAppCta } from "@/features/consultation/components/WhatsAppCta";

export function ClosingSection() {
  return (
    <section className="closing-banner">
      <Image
        fill
        sizes="100vw"
        alt="Rak minimarket penuh produk dalam ruang yang terang"
        decoding="async"
        loading="lazy"
        src={images.closing}
      />
      <div className="closing-shade" />
      <div className="closing-content">
        <p className="eyebrow eyebrow--light">Mulai dari ruang Anda</p>
        <h2>Siapkan toko yang lebih rapi dan siap beroperasi.</h2>
        <p>
          Kirim ukuran ruang atau foto lokasi untuk memulai pembahasan kebutuhan
          toko.
        </p>
        <WhatsAppCta intent={{ source: "closing" }} variant="primary" />
      </div>
    </section>
  );
}
