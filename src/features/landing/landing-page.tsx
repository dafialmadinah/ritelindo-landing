import { HeroSection } from "@/features/landing/sections/hero-section";
import { IntroSection } from "@/features/landing/sections/intro-section";
import { ProductsSection } from "@/features/landing/sections/products-section";
import { ServicesSection } from "@/features/landing/sections/services-section";
import { BenefitsSection } from "@/features/landing/sections/benefits-section";
import { ProcessSection } from "@/features/landing/sections/process-section";
import { FaqSection } from "@/features/landing/sections/faq-section";
import { ClosingSection } from "@/features/landing/sections/closing-section";

export function LandingPage() {
  return (
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
  );
}
