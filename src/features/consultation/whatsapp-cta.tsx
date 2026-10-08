import { site } from "@/shared/config/site";
import { ArrowIcon } from "@/shared/icons/arrow-icon";
import { WhatsAppIcon } from "@/shared/icons/whatsapp-icon";
import { buildWhatsAppUrl } from "@/features/consultation/whatsapp-url";
import type { WhatsAppCtaProps } from "@/features/consultation/types";
import { getConsultationContent } from "@/features/consultation/consultation-content";

const heroButtonClassName =
  "relative block min-h-[52px] w-full overflow-hidden rounded-md p-[2px] shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg motion-reduce:transition-none";
const heroButtonBeamClassName =
  "pointer-events-none absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#25D366_0%,#128C7E_15%,transparent_30%,transparent_100%)] motion-reduce:animate-none";
const heroButtonSurfaceClassName =
  "relative z-10 inline-flex h-full min-h-[48px] w-full items-center justify-between rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#07152f] transition-all motion-reduce:transition-none";
const heroWhatsAppIconClassName = "h-[18px] w-[18px] shrink-0 fill-current";
const heroArrowIconClassName =
  "h-[18px] w-[18px] shrink-0 fill-none stroke-current [stroke-linecap:square] [stroke-width:1.5]";

export function WhatsAppCta({
  intent,
  variant = "navy",
  className = "",
}: WhatsAppCtaProps) {
  const { label, message } = getConsultationContent(intent);
  const iconOnly = intent.source === "floating";
  const isHeroCta = intent.source === "hero";
  const buttonClass = iconOnly
    ? "floating-whatsapp-link"
    : isHeroCta
      ? heroButtonClassName
      : `button-link button-link--${variant} ${intent.source === "closing" ? "closing-cta" : ""}`;
  const actionContents = (
    <>
      <span className="cta-label">
        {isHeroCta && <WhatsAppIcon className={heroWhatsAppIconClassName} />}
        <span>{label}</span>
      </span>
      {isHeroCta ? (
        <ArrowIcon className={heroArrowIconClassName} />
      ) : (
        <ArrowIcon />
      )}
    </>
  );
  const contents = iconOnly ? (
    <>
      <WhatsAppIcon />
      <span className="floating-whatsapp-label">Konsultasi WhatsApp</span>
    </>
  ) : (
    <>
      {isHeroCta ? (
        <>
          <span className={heroButtonBeamClassName} aria-hidden="true" />
          <span className={heroButtonSurfaceClassName}>{actionContents}</span>
        </>
      ) : (
        actionContents
      )}
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
