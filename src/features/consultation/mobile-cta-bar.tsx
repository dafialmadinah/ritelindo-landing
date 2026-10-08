import { WhatsAppCta } from "@/features/consultation/whatsapp-cta";

export function MobileCtaBar() {
  return (
    <aside aria-label="Konsultasi WhatsApp" className="mobile-cta-bar">
      <WhatsAppCta variant="navy" intent={{
        source: "hero"
      }} />
    </aside>
  );
}
