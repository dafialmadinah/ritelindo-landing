export type ConsultationIntent =
  | { source: "hero" | "layout" | "closing" | "header" | "floating" }
  | { source: "product"; productName: string };

export interface WhatsAppCtaProps {
  intent: ConsultationIntent;
  variant?: "primary" | "outline" | "outline-light" | "navy";
  className?: string;
}
