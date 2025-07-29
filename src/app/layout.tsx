import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sopomoro - Keripik Tradisional Berkualitas | UMKM Indonesia",
  description: "Nikmati kelezatan keripik tradisional Sopomoro dengan cita rasa autentik Indonesia. UMKM terpercaya dengan bahan alami dan resep turun temurun. Pesan via WhatsApp sekarang!",
  keywords: [
    "keripik", "sopomoro", "umkm", "makanan tradisional", "snack indonesia", 
    "keripik pisang", "keripik singkong", "keripik ubi", "makanan ringan",
    "cemilan sehat", "produk lokal", "usaha mikro", "jajanan tradisional"
  ],
  authors: [{ name: "Sopomoro UMKM" }],
  creator: "Sopomoro UMKM",
  publisher: "Sopomoro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sopomoro - Keripik Tradisional Berkualitas",
    description: "UMKM keripik terpercaya dengan cita rasa autentik Indonesia. Pesan langsung via WhatsApp!",
    type: "website",
    locale: "id_ID",
    url: "https://sopomoro.com",
    siteName: "Sopomoro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keripik Sopomoro - Makanan Tradisional Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sopomoro - Keripik Tradisional Berkualitas",
    description: "UMKM keripik terpercaya dengan cita rasa autentik Indonesia",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "food",
  classification: "UMKM Food Business",
  other: {
    "google-site-verification": "your-google-verification-code"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sopomoro" />
        <link rel="canonical" href="https://sopomoro.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://sopomoro.com",
              "name": "Sopomoro",
              "alternateName": "Sopomoro Keripik",
              "url": "https://sopomoro.com",
              "logo": "https://sopomoro.com/logo.png",
              "image": "https://sopomoro.com/og-image.jpg",
              "description": "UMKM keripik tradisional Indonesia dengan cita rasa autentik",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Raya No. 123",
                "addressLocality": "Kota Anda",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-6.2088",
                "longitude": "106.8456"
              },
              "telephone": "+6281234567890",
              "priceRange": "Rp 10.000 - Rp 25.000",
              "servesCuisine": "Indonesian",
              "hasMenu": "https://sopomoro.com/products",
              "paymentAccepted": "Cash, WhatsApp Order",
              "currenciesAccepted": "IDR",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://instagram.com/sopomoro.keripik",
                "https://facebook.com/sopomoro.keripik",
                "https://wa.me/6281234567890"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
