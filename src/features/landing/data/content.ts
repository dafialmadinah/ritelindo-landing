import type { Faq, Product, Step, Service } from "@/features/landing/types";
import { images } from "@/features/landing/data/media";
export const faqs: readonly Faq[] = [
  {
    id: "faq-1",
    question: "Apakah bisa membeli satuan, paket, atau untuk proyek?",
    answer:
      "Bisa. Kami melayani pembelian rak satuan, paket toko, hingga kebutuhan proyek retail dan pembukaan cabang.",
  },
  {
    id: "faq-2",
    question: "Apakah ukuran dan warna rak bisa disesuaikan?",
    answer:
      "Bisa. Ukuran, konfigurasi, dan pilihan finishing dapat dibahas berdasarkan kondisi ruangan serta kebutuhan display produk.",
  },
  {
    id: "faq-3",
    question: "Di mana gratis ongkir tersedia?",
    answer: "Gratis ongkir tersedia untuk wilayah Jawa–Bali.",
  },
  {
    id: "faq-4",
    question: "Di mana gratis perakitan tersedia?",
    answer:
      "Gratis perakitan tersedia untuk Jawa Timur, Jawa Tengah, dan DI Yogyakarta.",
  },
  {
    id: "faq-5",
    question: "Apakah Ritelindo juga mengerjakan interior toko?",
    answer:
      "Ya. Jasa interior toko tersedia untuk membantu mewujudkan tampilan yang stylish dan modern. Jasa interior bukan bagian dari layanan gratis.",
  },
];
export const products: readonly [Product, Product, Product] = [
  {
    id: "gondola",
    title: "Rak Gondola Minimarket",
    description:
      "Penataan rak untuk membantu membentuk lorong belanja dan menampilkan produk dengan rapi.",
    image: images.gondola,
    alt: "Deretan rak gondola minimarket yang memperlihatkan tiang dan ambalan",
    number: "01 / 03",
    variant: "wide",
  },
  {
    id: "display",
    title: "Rak Toko & Display",
    description:
      "Rak display yang dapat disesuaikan dengan kebutuhan ruang dan cara produk ditata.",
    image: images.display,
    alt: "Deretan rak toko yang memperlihatkan susunan ambalan display",
    number: "02 / 03",
    variant: "tall",
  },
  {
    id: "warehouse",
    title: "Rak Gudang",
    description:
      "Penyimpanan stok yang mudah diakses untuk ruang belakang toko maupun gudang operasional.",
    image: images.warehouse,
    alt: "Struktur rak gudang dengan tiang dan ambalan logam",
    number: "03 / 03",
    variant: "offset",
  },
];
export const steps: readonly Step[] = [
  {
    id: "kebutuhan",
    title: "Ceritakan kebutuhan",
    text: "Sampaikan jenis toko, target pembukaan, dan produk yang ingin ditampilkan.",
  },
  {
    id: "ruangan",
    title: "Diskusikan ruangan",
    text: "Bagikan ukuran, denah, atau foto lokasi untuk membahas kebutuhan penempatan rak.",
  },
  {
    id: "penawaran",
    title: "Bahas produk & penawaran",
    text: "Pilih konfigurasi rak, kebutuhan interior, pengiriman, dan perakitan.",
  },
];

export const services: readonly Service[] = [
  {
    id: "custom",
    number: "01",
    title: "Custom rak",
    description: "Rak disesuaikan dengan kebutuhan dan ukuran ruangan toko.",
  },
  {
    id: "layout",
    number: "02",
    title: "Konsultasi & layout 3D gratis",
    description:
      "Diskusi kebutuhan dan visualisasi penempatan sebelum pembelian.",
  },
  {
    id: "interior",
    number: "03",
    title: "Jasa interior toko",
    description:
      "Penataan interior untuk tampilan toko yang stylish dan modern.",
  },
];
