import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Produk Keripik Sopomoro - Daftar Lengkap Makanan Tradisional",
  description: "Jelajahi koleksi lengkap keripik tradisional Sopomoro: pisang original, singkong pedas, ubi manis, talas balado, dan nangka muda. Pesan langsung via WhatsApp!",
  keywords: [
    "daftar produk sopomoro", "keripik pisang", "keripik singkong", "keripik ubi", 
    "keripik talas", "keripik nangka", "harga keripik", "pesan keripik online"
  ],
  openGraph: {
    title: "Produk Keripik Sopomoro - Daftar Lengkap",
    description: "Koleksi lengkap keripik tradisional dengan berbagai varian rasa",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
