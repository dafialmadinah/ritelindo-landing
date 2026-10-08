# Ritelindo Group

### Paket rak minimarket langsung dari pabrik

Landing page Ritelindo Group untuk membantu pemilik usaha merancang dan menyiapkan toko retail. Pengunjung dapat melihat pilihan rak, layanan layout 3D, proses pengerjaan, lalu menghubungi tim melalui WhatsApp dengan pesan yang sesuai dengan bagian yang mereka pilih.

**Dibangun dengan Next.js App Router, TypeScript, dan Tailwind CSS v4.** Konten halaman dirender di server agar cepat dibuka, mudah diindeks, dan tetap dapat digunakan tanpa JavaScript untuk navigasi CTA.

---

## Sekilas

- Hero video lokal dengan poster gambar sebagai fallback.
- Katalog rak, keunggulan, layanan layout, proses, FAQ, dan CTA penutup.
- CTA WhatsApp dengan teks pesan kontekstual untuk hero, produk, layout, dan bagian penutup.
- Navbar yang transparan di bagian atas, menyembunyikan diri saat scroll ke bawah, dan muncul kembali saat scroll ke atas.
- Tombol WhatsApp mengambang yang muncul setelah pengunjung melewati hero.
- Metadata, Open Graph, canonical URL, sitemap, dan aturan robots yang dikendalikan konfigurasi situs.
- Aset gambar, video, dan font disimpan lokal.

## Menjalankan secara lokal

Proyek ini membutuhkan Node.js **24.x** dan pnpm **11.25.0**.

```bash
corepack enable
pnpm install --frozen-lockfile
```

Salin `.env.example` menjadi `.env.local`, lalu isi konfigurasi yang diperlukan. Di PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Di macOS/Linux:

```bash
cp .env.example .env.local
```

> Isi nomor bisnis yang benar sebelum memakai atau membagikan situs. Nomor harus berupa digit internasional saja—tanpa tanda `+`, spasi, atau tanda hubung.

Jalankan server pengembangan:

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Konfigurasi

| Variabel | Kegunaan | Contoh |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor tujuan tautan WhatsApp dalam format internasional, angka saja. | `6281234567890` |
| `NEXT_PUBLIC_SITE_URL` | Origin situs untuk canonical dan metadata Open Graph. Isi origin saja, tanpa path. | `https://ritelindo.example` |
| `SITE_INDEXABLE` | Mengizinkan indeks mesin pencari dan sitemap saat bernilai `true`. | `false` |

Untuk demo atau preview, biarkan `SITE_INDEXABLE=false`. Saat menyiapkan situs publik untuk diindeks, atur `NEXT_PUBLIC_SITE_URL` ke domain produksi yang sebenarnya dan ubah `SITE_INDEXABLE=true`. Mode indexable memerlukan URL situs yang valid.

CTA WhatsApp akan menggunakan nomor dari `NEXT_PUBLIC_WHATSAPP_NUMBER` dan membuat pesan sesuai konteks tombol. Jangan publikasikan dengan nomor kosong atau nomor contoh; periksa tautan setelah mengisi konfigurasi.

## Perintah proyek

```bash
pnpm dev        # Jalankan server pengembangan
pnpm lint       # Periksa aturan ESLint
pnpm typecheck  # Buat tipe Next.js dan periksa TypeScript
pnpm test       # Jalankan pengujian unit
pnpm build      # Buat build produksi
pnpm start      # Sajikan build produksi
```

## Struktur kode

```text
src/
├── app/                  # Layout, halaman, CSS global, ikon, robots, sitemap
├── features/
│   ├── consultation/     # CTA WhatsApp, URL, dan tombol mengambang
│   └── landing/          # Komposisi halaman, section, data, dan media
├── lib/seo/              # Metadata situs
└── shared/               # Konfigurasi navigasi, layout, ikon, UI bersama
public/
├── images/               # Foto produk dan suasana toko
└── videos/               # Video hero
tests/                    # Pengujian utilitas
```

`src/app/page.tsx` merangkai halaman landing. Konten dan section tetap berada di fitur landing, sedangkan pembentukan tautan WhatsApp terpusat di fitur consultation.

## Konten dan aset

Konten landing tersimpan sebagai data bertipe di `src/features/landing/data/`. Daftar gambar dan media berada di folder yang sama. Ganti konten melalui data ini agar susunan komponen tetap konsisten.

Video hero berada di `public/videos/hero.mp4`; gambar poster dan aset lain ada di `public/images/`.

## Teknologi

- Next.js **16.4.0** dan React **19.3.0**
- TypeScript **5.9.3** dengan strict mode
- Tailwind CSS **4.3.3** melalui integrasi PostCSS
- ESLint **9.39.5**
- pnpm **11.25.0**

Versi paket dicatat di `package.json` dan `pnpm-lock.yaml`.
