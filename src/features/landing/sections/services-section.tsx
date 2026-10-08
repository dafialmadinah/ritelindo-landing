import { services } from "@/features/landing/data/content";
import Image from "next/image";
import { images } from "@/features/landing/data/media";
import { WhatsAppCta } from "@/features/consultation/whatsapp-cta";

export function ServicesSection() {
  return (
    <section className="service-banner" id="layanan">
      <Image
        fill
        sizes="100vw"
        alt="Interior toko dengan lorong rak di kedua sisi"
        decoding="async"
        loading="lazy"
        src={images.service}
      />
      <div className="service-overlay" />
      <div className="service-content content-shell">
        <div className="section-label section-label--light">
          <span>03</span>
          <p>Bukan sekadar rak</p>
        </div>
        <div className="service-copy">
          <h2>Ruang retail yang dirancang sebagai satu kesatuan.</h2>
          <div className="service-list">
            {services.map((service) => (
              <div key={service.id}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <WhatsAppCta
            intent={{ source: "layout" }}
            variant="outline-light"
            className="service-cta"
          />
        </div>
      </div>
    </section>
  );
}
