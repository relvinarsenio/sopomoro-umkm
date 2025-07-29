# Sopomoro - Website Promosi UMKM

Website promosi untuk UMKM Sopomoro yang menjual keripik tradisional Indonesia dengan berbagai varian rasa.

## 🌟 Fitur

- **Responsive Design**: Tampilan yang optimal di desktop dan mobile
- **Modern UI**: Desain modern dengan Tailwind CSS
- **Product Showcase**: Galeri produk dengan detail lengkap
- **Contact Form**: Form kontak untuk komunikasi dengan pelanggan
- **SEO Optimized**: Optimasi SEO untuk mesin pencari

## 🛠️ Teknologi

- **Next.js 15**: Framework React dengan App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Library JavaScript untuk UI

## 🚀 Menjalankan Project

### Prerequisites

Pastikan Anda sudah menginstall:
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd sopomoro-website
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
```

3. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📁 Struktur Project

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── products/
│       └── page.tsx      # Products page
├── components/
│   ├── Header.tsx        # Header component
│   └── Footer.tsx        # Footer component
└── ...
```

## 🎨 Kustomisasi

### Mengganti Warna Brand
Edit file `tailwind.config.js` untuk mengubah warna utama:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-orange': '#ea580c',
        'brand-yellow': '#fbbf24',
      }
    }
  }
}
```

### Menambah Produk Baru
Edit array `products` di file `src/app/products/page.tsx`:

```typescript
const products = [
  {
    id: 1,
    name: "Nama Produk",
    price: "Rp XX.000",
    image: "🥔",
    description: "Deskripsi produk...",
    variants: ["100g", "250g"],
    ingredients: "Bahan-bahan..."
  },
  // Tambah produk baru di sini
];
```

### Mengganti Informasi Kontak
Update informasi kontak di komponen Footer dan halaman utama:
- Nomor WhatsApp
- Email
- Alamat
- Social media links

## 📱 Fitur Mobile

- Hamburger menu untuk navigasi mobile
- Touch-friendly buttons
- Optimized image loading
- Responsive grid layout

## 🔧 Build untuk Production

```bash
npm run build
npm start
```

## 📝 To-Do List

- [ ] Tambah foto produk asli (ganti emoji placeholder)
- [ ] Integrasi WhatsApp untuk pemesanan
- [ ] Tambah sistem review pelanggan
- [ ] Implementasi shopping cart
- [ ] Tambah blog/artikel
- [ ] Integrasi pembayaran online

## 🤝 Kontribusi

1. Fork project ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Kontak

**Sopomoro UMKM**
- WhatsApp: +62 812-3456-7890
- Email: info@sopomoro.com
- Alamat: Jl. Raya No. 123, Kota Anda

## 📄 License

Project ini dibuat untuk keperluan promosi UMKM Sopomoro.

---

Dibuat dengan ❤️ untuk UMKM Indonesia
