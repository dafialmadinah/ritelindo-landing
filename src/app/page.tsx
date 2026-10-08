import { LandingPage } from "@/features/landing/landing-page";
import { WhatsAppCta } from "@/features/consultation/whatsapp-cta";
import { FloatingWhatsAppButton } from "@/features/consultation/floating-whatsapp-button";
import { SmartNavbar } from "@/shared/layout/smart-navbar";
import { SiteFooter } from "@/shared/layout/site-footer";
export default function HomePage() {
  return (
    <>
      <SmartNavbar
        desktopCta={
          <WhatsAppCta intent={{ source: "header" }} variant="outline" className="header-cta" />
        }
        mobileCta={<WhatsAppCta intent={{ source: "header" }} variant="outline" />}
      />
      <LandingPage />
      <SiteFooter />
      <FloatingWhatsAppButton heroId="hero">
        <WhatsAppCta
          intent={{ source: "floating" }}
        />
      </FloatingWhatsAppButton>
    </>
  );
}
