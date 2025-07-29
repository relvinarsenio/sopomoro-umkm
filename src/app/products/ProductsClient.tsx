"use client";
import Link from "next/link";
import { useState } from "react";
import { 
  Menu, 
  X, 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Facebook,
  Leaf,
  ChefHat,
  Phone,
  Apple,
  Flame,
  Cookie,
  ArrowLeft
} from "lucide-react";

export default function ProductsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function untuk scroll ke section di homepage
  const scrollToSection = (sectionId: string) => {
    // Redirect ke homepage dengan hash
    window.location.href = `/#${sectionId}`;
  };

  const products = [
    {
      id: 1,
      name: "Keripik Pisang Original",
      price: "Rp 15.000",
      icon: Apple,
      color: "text-yellow-600",
      description: "Keripik pisang renyah dengan rasa manis alami, dibuat dari pisang pilihan terbaik.",
      variants: ["100g", "250g", "500g"],
      ingredients: "Pisang, minyak kelapa, gula aren, garam"
    },
    {
      id: 2,
      name: "Keripik Singkong Pedas",
      price: "Rp 12.000",
      icon: Flame,
      color: "text-red-600",
      description: "Keripik singkong dengan bumbu pedas yang menggugah selera dan renyah di setiap gigitan.",
      variants: ["100g", "250g", "500g"],
      ingredients: "Singkong, minyak kelapa, cabai merah, bawang putih, garam"
    },
    {
      id: 3,
      name: "Keripik Ubi Manis",
      price: "Rp 18.000",
      icon: Cookie,
      color: "text-purple-600",
      description: "Keripik ubi manis yang gurih dan manis, kaya akan vitamin dan serat alami.",
      variants: ["100g", "250g", "500g"],
      ingredients: "Ubi jalar ungu, minyak kelapa, gula aren, garam"
    },
    {
      id: 4,
      name: "Keripik Talas Balado",
      price: "Rp 16.000",
      icon: Flame,
      color: "text-orange-600",
      description: "Keripik talas dengan bumbu balado yang pedas dan gurih, perpaduan cita rasa yang sempurna.",
      variants: ["100g", "250g"],
      ingredients: "Talas, minyak kelapa, cabai balado, tomat, bawang merah"
    },
    {
      id: 5,
      name: "Keripik Nangka Muda",
      price: "Rp 14.000",
      icon: Apple,
      color: "text-green-600",
      description: "Keripik nangka muda yang renyah dengan cita rasa gurih dan sedikit manis.",
      variants: ["100g", "250g"],
      ingredients: "Nangka muda, minyak kelapa, kunyit, garam, daun jeruk"
    },
    {
      id: 6,
      name: "Mix Keripik Special",
      price: "Rp 25.000",
      icon: Cookie,
      color: "text-amber-600",
      description: "Paket kombinasi berbagai keripik pilihan dalam satu kemasan.",
      variants: ["300g", "500g"],
      ingredients: "Campuran pisang, singkong, ubi, talas dengan berbagai bumbu"
    },
    {
      id: 7,
      name: "Keripik Pisang Coklat",
      price: "Rp 17.000",
      icon: Apple,
      color: "text-amber-700",
      description: "Keripik pisang dengan balutan coklat manis yang lezat.",
      variants: ["100g", "250g"],
      ingredients: "Pisang, minyak kelapa, coklat susu, gula"
    },
    {
      id: 8,
      name: "Keripik Tempe Gurih",
      price: "Rp 13.000",
      icon: Leaf,
      color: "text-emerald-600",
      description: "Keripik tempe renyah dengan bumbu gurih yang kaya protein.",
      variants: ["100g", "250g"],
      ingredients: "Tempe segar, minyat kelapa, bawang putih, ketumbar, garam"
    },
    {
      id: 9,
      name: "Keripik Tahu Pedas",
      price: "Rp 11.000",
      icon: ChefHat,
      color: "text-orange-500",
      description: "Keripik tahu dengan bumbu pedas yang menggigit dan gurih.",
      variants: ["100g", "200g"],
      ingredients: "Tahu putih, minyak kelapa, cabai rawit, bawang merah, garam"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Mobile-Friendly Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">S</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-orange-600">Sopomoro</h1>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</Link>
              <button 
                onClick={() => scrollToSection('products')} 
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Produk
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Kontak
              </button>
            </div>
            
            {/* Desktop WhatsApp Button */}
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm lg:text-base"
            >
              Pesan via WhatsApp
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700 hover:text-orange-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <Link 
                  href="/" 
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beranda
                </Link>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Produk
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Tentang
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Kontak
                </button>
                <a 
                  href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-4 py-3 rounded-full hover:bg-orange-600 transition-colors text-center font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Breadcrumb & Hero Section */}
      <section className="container mx-auto px-4 py-6 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">Beranda</Link>
          <span>›</span>
          <span className="text-orange-600 font-medium">Semua Produk</span>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm sm:text-base">Kembali ke Beranda</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Semua Produk <span className="text-orange-500">Sopomoro</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi koleksi lengkap keripik tradisional kami dengan berbagai varian rasa yang menggugah selera. 
            Setiap produk dibuat dengan bahan-bahan pilihan dan resep turun temurun.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-12 sm:pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
              <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <product.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${product.color}`} />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">Foto Produk</p>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-xs sm:text-sm line-clamp-2">{product.description}</p>
              
              <div className="mb-4">
                <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Bahan:</p>
                <p className="text-xs sm:text-sm text-gray-600">{product.ingredients}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Ukuran tersedia:</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {product.variants.map((variant, index) => (
                    <span key={index} className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                      {variant}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <p className="text-xl sm:text-2xl font-bold text-orange-500">{product.price}</p>
                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20${encodeURIComponent(product.name)}%20seharga%20${encodeURIComponent(product.price)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-orange-600 transition-colors inline-block text-xs sm:text-sm font-medium text-center"
                >
                  <MessageCircle className="inline w-4 h-4 mr-1" />
                  Pesan
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Tertarik dengan produk kami?
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Hubungi kami sekarang untuk pemesanan atau konsultasi mengenai produk keripik Sopomoro. 
            Kami siap melayani pesanan dalam jumlah besar maupun kecil dengan kualitas terjamin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20bertanya%20tentang%20produk%20keripik"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-orange-600 transition-colors inline-block font-medium"
            >
              <MessageCircle className="inline w-5 h-5 mr-2" />
              WhatsApp Kami
            </a>
            <Link href="/#contact" className="border border-orange-500 text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-orange-50 transition-colors inline-block font-medium">
              Lihat Kontak
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="text-xl font-bold">Sopomoro</h3>
              </div>
              <p className="text-gray-400">
                UMKM keripik terpercaya dengan cita rasa autentik Indonesia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <a 
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+62 812-3456-7890</span>
                </a>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Jl. Raya No. 123, Kota Anda</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp Sopomoro"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://instagram.com/sopomoro.keripik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  aria-label="Instagram Sopomoro"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://facebook.com/sopomoro.keripik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook Sopomoro"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sopomoro. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
