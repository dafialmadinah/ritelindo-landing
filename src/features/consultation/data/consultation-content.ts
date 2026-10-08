import type { ConsultationIntent } from "@/features/consultation/types";

interface ConsultationContent {
  label: string;
  message: string;
}

const content = {
  hero: {
    label: "Mulai Rancang Toko Anda",
    message:
      "Halo Ritelindo Group, saya ingin mulai merancang toko dan berdiskusi tentang paket rak minimarket serta layout 3D gratis.",
  },
  layout: {
    label: "Diskusi Kebutuhan Layout",
    message:
      "Halo Ritelindo Group, saya ingin mendiskusikan kebutuhan layout 3D dan penempatan rak sesuai ukuran ruangan toko saya.",
  },
  closing: {
    label: "Hubungi Spesialis Rak Kami",
    message:
      "Halo Ritelindo Group, saya ingin berbicara dengan spesialis rak untuk membahas kebutuhan, konfigurasi, dan penawaran paket setup toko retail.",
  },
  header: {
    label: "Hubungi Kami",
    message:
      "Halo Ritelindo Group, saya ingin berkonsultasi tentang rak dan rencana toko saya.",
  },
  floating: {
    label: "Chat WhatsApp",
    message:
      "Halo Ritelindo Group, saya sudah melihat pilihan produk dan layanan di website. Saya ingin dibantu memilih rak yang sesuai untuk toko saya.",
  },
} as const satisfies Record<
  Exclude<ConsultationIntent["source"], "product">,
  ConsultationContent
>;

export function getConsultationContent(
  intent: ConsultationIntent,
): ConsultationContent {
  if (intent.source === "product") {
    return {
      label: "Tanya Harga Satuan/Paket",
      message: `Halo Ritelindo Group, saya ingin tanya harga satuan/paket untuk ${intent.productName}. Mohon informasi pilihan ukuran dan penawarannya.`,
    };
  }
  return content[intent.source];
}
