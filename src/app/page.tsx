"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  MessageCircle, 
  Award, 
  Users, 
  MapPin, 
  Instagram, 
  Facebook,
  Leaf,
  ChefHat,
  Phone,
  Apple,
  Flame,
  Cookie
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle smooth scrolling dengan offset untuk anchor links
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hostname === window.location.hostname) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const headerHeight = window.innerWidth < 768 ? 70 : 80; // Responsive header height
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          setIsMenuOpen(false);
        }
      }
    };

    // Add event listener untuk semua anchor links
    document.addEventListener('click', handleAnchorClick);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Handle URL hash pada page load
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          const headerHeight = window.innerWidth < 768 ? 70 : 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300); // Delay lebih lama untuk memastikan render selesai
    }
  }, []);

  // Helper function untuk scroll ke section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = window.innerWidth < 768 ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

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
              <Link href="/" className="text-orange-600 font-semibold">Beranda</Link>
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
                  className="block px-4 py-2 rounded-lg text-orange-600 font-semibold bg-orange-50"
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Selamat Datang di <span className="text-orange-500">Sopomoro</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
            UMKM keripik terpercaya dengan cita rasa autentik Indonesia. Nikmati kelezatan keripik tradisional 
            yang dibuat dengan resep turun temurun dan bahan-bahan pilihan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-orange-600 transition-colors inline-block font-medium"
            >
              <MessageCircle className="inline w-5 h-5 mr-2" />
              Pesan Sekarang
            </a>
            <Link href="/products" className="border border-orange-500 text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-orange-50 transition-colors inline-block font-medium">
              Lihat Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Kenapa Pilih Sopomoro?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Bahan Alami</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Menggunakan bahan-bahan pilihan segar dan alami tanpa pengawet buatan.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Resep Tradisional</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Dibuat dengan resep turun temurun yang telah teruji kelezatannya.
              </p>
            </div>
            <div className="text-center p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Proses produksi higienis dengan standar kualitas tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Produk Kami
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                name: "Keripik Pisang Original", 
                price: "Rp 15.000", 
                icon: Apple, 
                color: "text-yellow-600",
                description: "Keripik pisang renyah dengan rasa manis alami, dibuat dari pisang pilihan terbaik.",
                variants: ["100g", "250g", "500g"]
              },
              { 
                name: "Keripik Singkong Pedas", 
                price: "Rp 12.000", 
                icon: Flame, 
                color: "text-red-600",
                description: "Keripik singkong dengan bumbu pedas yang menggugah selera dan renyah di setiap gigitan.",
                variants: ["100g", "250g", "500g"]
              },
              { 
                name: "Keripik Ubi Manis", 
                price: "Rp 18.000", 
                icon: Cookie, 
                color: "text-purple-600",
                description: "Keripik ubi manis yang gurih dan manis, kaya akan vitamin dan serat alami.",
                variants: ["100g", "250g", "500g"]
              },
              { 
                name: "Keripik Talas Balado", 
                price: "Rp 16.000", 
                icon: Flame, 
                color: "text-orange-600",
                description: "Keripik talas dengan bumbu balado yang pedas dan gurih, perpaduan cita rasa yang sempurna.",
                variants: ["100g", "250g"]
              },
              { 
                name: "Keripik Nangka Muda", 
                price: "Rp 14.000", 
                icon: Apple, 
                color: "text-green-600",
                description: "Keripik nangka muda yang renyah dengan cita rasa gurih dan sedikit manis.",
                variants: ["100g", "250g"]
              },
              { 
                name: "Mix Keripik Special", 
                price: "Rp 25.000", 
                icon: Cookie, 
                color: "text-amber-600",
                description: "Paket kombinasi berbagai keripik pilihan dalam satu kemasan.",
                variants: ["300g", "500g"]
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <product.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${product.color}`} />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Foto Produk</p>
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                <p className="text-gray-600 mb-3 text-xs sm:text-sm line-clamp-2">{product.description}</p>
                
                {/* Variants */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {product.variants.map((variant, vIndex) => (
                      <span key={vIndex} className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-xl sm:text-2xl font-bold text-orange-500 mb-4">{product.price}</p>
                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20${encodeURIComponent(product.name)}%20seharga%20${encodeURIComponent(product.price)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-500 text-white py-2 sm:py-3 rounded-full hover:bg-orange-600 transition-colors inline-block text-center text-sm sm:text-base font-medium"
                >
                  Pesan via WhatsApp
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/products" className="bg-white text-orange-500 border border-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-orange-50 transition-colors inline-block font-medium">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-last lg:order-first">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Tentang Sopomoro</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Sopomoro adalah usaha keluarga yang dimulai dari passion kami untuk menghadirkan keripik berkualitas tinggi 
                  dengan cita rasa khas Indonesia. Sejak tahun 2020, kami telah melayani ribuan pelanggan dengan 
                  komitmen terhadap kualitas dan kepuasan.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  Setiap produk keripik kami dibuat dengan bahan-bahan pilihan dan proses yang higienis, 
                  memastikan rasa yang konsisten dan kualitas terbaik untuk keluarga Indonesia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20bertanya%20tentang%20produk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors text-center font-medium"
                  >
                    Hubungi Kami
                  </a>
                  <Link href="/products" className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-50 transition-colors text-center font-medium">
                    Lihat Produk
                  </Link>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-4">
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base font-medium">Foto Keluarga UMKM</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">(Placeholder - Ganti dengan foto asli)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Hubungi Kami
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Informasi Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">WhatsApp</p>
                    <a 
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm sm:text-base"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Instagram</p>
                    <a 
                      href="https://instagram.com/sopomoro.keripik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700"
                    >
                      @sopomoro.keripik
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Facebook</p>
                    <a 
                      href="https://facebook.com/sopomoro.keripik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Sopomoro Keripik
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Alamat</p>
                    <p className="text-gray-600">Jl. Raya No. 123, Kota Anda</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-6">Ingin Memesan?</h4>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-600 mb-6">
                  Pesan keripik Sopomoro langsung melalui WhatsApp untuk pelayanan yang lebih cepat dan mudah!
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white py-4 rounded-full hover:bg-green-600 transition-colors inline-block text-center font-medium text-lg"
                  >
                    <MessageCircle className="inline w-6 h-6 mr-2" />
                    Chat WhatsApp
                  </a>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/sopomoro.keripik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition-colors inline-block text-center font-medium"
                    >
                      <Instagram className="inline w-5 h-5 mr-2" />
                      Instagram
                    </a>
                    <a 
                      href="https://facebook.com/sopomoro.keripik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors inline-block text-center font-medium"
                    >
                      <Facebook className="inline w-5 h-5 mr-2" />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
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