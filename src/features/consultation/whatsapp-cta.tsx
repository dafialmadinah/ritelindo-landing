import { site } from "@/shared/config/site";
import { ArrowIcon } from "@/shared/icons/arrow-icon";
import { WhatsAppIcon } from "@/shared/icons/whatsapp-icon";
import { buildWhatsAppUrl } from "@/features/consultation/whatsapp-url";
import type { WhatsAppCtaProps } from "@/features/consultation/types";
import { getConsultationContent } from "@/features/consultation/consultation-content";
export function WhatsAppCta({
  intent,
  variant = "navy",
  className = "",
}: WhatsAppCtaProps) {
  const { label, message } = getConsultationContent(intent);
  const iconOnly = intent.source === "floating";
  const buttonClass = iconOnly ? "floating-whatsapp-link" : `button-link button-link--${variant}`;
  const contents = iconOnly ? <WhatsAppIcon /> : (
    <>
      <span className="cta-label">
        {intent.source === "hero" && <WhatsAppIcon />}
        <span>{label}</span>
      </span>
      <ArrowIcon />
    </>
  );
  if (!site.whatsappNumber && iconOnly) return null;
  if (!site.whatsappNumber)
    return (
      <span className={`cta-unavailable ${className}`}>
        <span className={buttonClass} aria-disabled="true">
          {contents}
        </span>
        <small>WhatsApp resmi belum tersedia.</small>
      </span>
    );
  return (
    <a
      className={`${buttonClass} ${className}`}
      href={buildWhatsAppUrl(site.whatsappNumber, message)}
      aria-label={
        intent.source === "product"
          ? `${label} — ${intent.productName}`
          : iconOnly ? label : undefined
      }
    >
      {contents}
    </a>
  );
}
