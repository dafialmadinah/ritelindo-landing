import { FloatingWhatsAppButton } from "@/features/consultation/components/FloatingWhatsAppButton";
import { WhatsAppCta } from "@/features/consultation/components/WhatsAppCta";
import { ClosingSection } from "@/features/landing/components/sections/ClosingSection";
import { FaqSection } from "@/features/landing/components/sections/FaqSection";
import { HeroSection } from "@/features/landing/components/sections/HeroSection";
import { IntroSection } from "@/features/landing/components/sections/IntroSection";
import { ProductsSection } from "@/features/landing/components/sections/ProductsSection";
import { ProcessSection } from "@/features/landing/components/sections/ProcessSection";
import { ServicesSection } from "@/features/landing/components/sections/ServicesSection";
import { BenefitsSection } from "@/features/landing/components/sections/BenefitsSection";
import { SiteFooter } from "@/features/landing/components/SiteFooter";
import { SmartNavbar } from "@/features/landing/components/SmartNavbar";

export function LandingPage() {
  return (
    <>
      <SmartNavbar
        desktopCta={
          <WhatsAppCta
            intent={{ source: "header" }}
            variant="outline"
            className="header-cta"
          />
        }
        mobileCta={<WhatsAppCta intent={{ source: "header" }} variant="outline" />}
      />
      <main id="top" tabIndex={-1}>
        <HeroSection />
        <IntroSection />
        <ProductsSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <FaqSection />
        <ClosingSection />
      </main>
      <SiteFooter />
      <FloatingWhatsAppButton heroId="hero">
        <WhatsAppCta intent={{ source: "floating" }} />
      </FloatingWhatsAppButton>
    </>
  );
}
