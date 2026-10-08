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

- Landing page responsif dengan video hero pada desktop, gambar minimarket pada mobile, dan aset produk lokal.
- CTA WhatsApp membentuk pesan sesuai konteks tombol. Jika nomor belum diatur, CTA tampil nonaktif dan tombol mengambang tidak ditampilkan.
- Navbar dengan menu mobile dan perilaku tampil/sembunyi saat halaman di-scroll.
- FAQ menggunakan accordion aksesibel dengan jawaban yang tersedia di HTML hasil render.
- Metadata SEO dan Open Graph dari Next.js Metadata API.
- Robots, sitemap, dan canonical mengikuti konfigurasi domain; indeks aktif otomatis hanya pada deployment Production Vercel.

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
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor tujuan tautan WhatsApp dalam digit internasional, tanpa `+`, spasi, atau tanda hubung. Jika kosong, situs memakai nomor demonstrasi nonaktif agar CTA tetap terlihat. | Opsional untuk demo; wajib diisi dengan nomor resmi agar kontak berfungsi | `12025550100` (nomor fiktif untuk demonstrasi) |
| `NEXT_PUBLIC_SITE_URL` | Origin situs untuk canonical dan URL absolut Open Graph. Gunakan origin saja, tanpa path, query, atau hash. Vercel Production memakai domain produksi Vercel jika variabel ini kosong. | Opsional; isi jika memakai domain sendiri | `https://ritelindo-landing-peach.vercel.app` |
| `SITE_INDEXABLE` | Mengatur metadata robots serta akses crawler dan sitemap. `.env.example` memakai `false` untuk lokal. Vercel Production otomatis mengaktifkan indeks bila variabel ini tidak disetel; nilai `false` tetap menonaktifkannya. Di luar Vercel, nilai `true` memerlukan URL situs yang valid. | Opsional | `false` |

> Nomor `12025550100` adalah nomor fiktif untuk demonstrasi, bukan nomor resmi Ritelindo Group. Ganti dengan nomor WhatsApp resmi sebelum digunakan untuk menerima kontak. Domain pada contoh adalah alamat deployment yang sedang digunakan; ganti canonical melalui `NEXT_PUBLIC_SITE_URL` jika beralih ke domain sendiri.

Di lokal dan Preview, situs default `noindex`. Pada Production Vercel, indeks aktif otomatis kecuali `SITE_INDEXABLE=false`; domain produksi Vercel digunakan sebagai canonical jika `NEXT_PUBLIC_SITE_URL` kosong. `NEXT_PUBLIC_SITE_URL` dapat diisi dengan origin domain khusus. Saat indeks aktif, robots mengizinkan crawler dan sitemap memuat URL canonical. Setelah mengubah environment di Vercel, buat deployment baru agar perubahan diterapkan.

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
├── app/                  # Routing tipis, root layout, CSS global, metadata routes
├── features/
│   ├── consultation/
│   │   ├── components/   # CTA WhatsApp dan tombol mengambang
│   │   ├── data/         # Copy pesan konsultasi
│   │   ├── types/        # Tipe intent dan props CTA
│   │   └── utils/        # Pembentuk URL WhatsApp
│   └── landing/
│       ├── components/   # Komposer, section, navbar, dan footer landing
│       ├── data/         # Konten, media, dan navigasi landing
│       └── types/        # Tipe konten landing
├── lib/seo/              # Builder metadata server
└── shared/               # Wordmark, ikon, dan konfigurasi situs lintas fitur
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

Untuk deployment dengan runtime Node.js, gunakan Node 24.x dan jalankan `npm ci` sebelum `npm run build`. Pada Vercel Production, indeks aktif otomatis dan domain produksi Vercel menjadi canonical. Jika memakai domain khusus, set `NEXT_PUBLIC_SITE_URL` ke origin domain tersebut pada environment Production. Set `SITE_INDEXABLE=false` jika deployment produksi belum boleh masuk indeks. Jalankan aplikasi menggunakan `npm run start` atau integrasi Next.js yang disediakan platform.
