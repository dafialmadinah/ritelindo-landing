# Ritelindo Group — Landing Page

Landing page B2B untuk memperkenalkan produk rak minimarket dan layanan penataan toko retail Ritelindo Group. Halaman memuat katalog produk, informasi layanan, proses, FAQ, dan CTA konsultasi WhatsApp.

## Teknologi

- Next.js 16.4.0 dengan App Router
- React 19.3.0 dan TypeScript 5.9.3
- Tailwind CSS 4.3.3 melalui PostCSS
- ESLint 9.39.5
- Node.js 24.21.0 dan npm 11.18.0

Versi Node.js dan npm mengikuti `.mise.toml`; rentang yang diterima tercantum di `package.json`.

## Fitur

- Landing page responsif dengan video hero, poster, dan gambar produk lokal.
- CTA WhatsApp membentuk pesan sesuai konteks tombol. Jika nomor belum diatur, CTA tampil nonaktif dan tombol mengambang tidak ditampilkan.
- Navbar dengan menu mobile dan perilaku tampil/sembunyi saat halaman di-scroll.
- FAQ menggunakan elemen HTML native `<details>` dan `<summary>`.
- Metadata SEO dan Open Graph dari Next.js Metadata API.
- Konfigurasi robots, sitemap, dan canonical URL mengikuti variabel lingkungan.

## Menjalankan secara lokal

Persyaratan: Node.js 24.x dan npm 11.x sesuai versi proyek.

```bash
npm ci
```

Salin `.env.example` menjadi `.env.local` jika ingin mengaktifkan CTA WhatsApp atau mengatur metadata URL situs.

```powershell
Copy-Item .env.example .env.local
```

Isi variabel sesuai kebutuhan, lalu jalankan:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Variabel lingkungan

Semua variabel bersifat opsional untuk menjalankan server lokal. `.env.example` menyediakan nilai awal untuk `SITE_INDEXABLE`.

| Variabel | Fungsi | Wajib? | Nilai contoh |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor tujuan tautan WhatsApp dalam digit internasional, tanpa `+`, spasi, atau tanda hubung. Jika kosong, CTA tidak dapat membuka WhatsApp. | Opsional; isi agar CTA aktif | `GANTI_DENGAN_NOMOR_INTERNASIONAL` |
| `NEXT_PUBLIC_SITE_URL` | Origin situs untuk canonical dan URL absolut Open Graph. Gunakan origin saja, tanpa path, query, atau hash. | Opsional; diperlukan jika pengindeksan diaktifkan | `https://domain-anda.example` |
| `SITE_INDEXABLE` | Mengatur metadata robots serta akses crawler dan sitemap. Nilai default dari `.env.example` adalah `false`. Jika `true`, situs mengizinkan indeks dan sitemap serta mensyaratkan `NEXT_PUBLIC_SITE_URL` yang valid. | Opsional | `false` |

> Nilai nomor dan domain di tabel adalah placeholder, bukan nomor atau domain resmi Ritelindo Group.

Saat `SITE_INDEXABLE=false`, metadata meminta mesin pencari untuk tidak mengindeks halaman, `robots.txt` melarang crawler, dan sitemap kosong. Saat bernilai `true`, robots mengizinkan crawler dan mencantumkan sitemap; sitemap berisi URL situs. Canonical dan URL absolut Open Graph hanya tersedia jika `NEXT_PUBLIC_SITE_URL` diisi.

## Perintah proyek

Perintah berikut sesuai scripts di `package.json`:

```bash
npm run dev        # Server pengembangan
npm run lint       # ESLint
npm run typecheck  # Generate route types dan periksa TypeScript
npm test           # Pengujian menggunakan node:test
npm run build      # Build produksi Next.js
npm run start      # Jalankan build produksi
```

## Struktur proyek

```text
src/
├── app/                  # Layout, halaman, CSS global, ikon, robots, sitemap
├── features/
│   ├── consultation/     # CTA WhatsApp, konten pesan, dan URL
│   └── landing/          # Komposisi halaman, section, konten, dan media
├── lib/seo/              # Konfigurasi metadata
└── shared/               # Navigasi, header/footer, ikon, dan konfigurasi situs
public/
├── images/               # Gambar lokal untuk landing page
└── videos/               # Video hero
tests/                    # Pengujian unit utilitas
```

## Build dan deployment

Buat lalu jalankan build produksi:

```bash
npm run build
npm run start
```

Untuk deployment dengan runtime Node.js, gunakan Node 24.x dan jalankan `npm ci` sebelum `npm run build`. Tambahkan variabel lingkungan yang diperlukan pada konfigurasi environment platform. Atur `NEXT_PUBLIC_SITE_URL` ke origin domain deployment jika canonical dan metadata Open Graph absolut diperlukan. Aktifkan `SITE_INDEXABLE=true` hanya ketika deployment siap diindeks; nilai ini memerlukan URL situs yang valid. Jalankan aplikasi menggunakan `npm run start` atau integrasi Next.js yang disediakan platform.
