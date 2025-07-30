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
  Cookie,
  Star,
  Heart,
  ShoppingCart,
  CheckCircle,
  Clock,
  Shield,
  Truck,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hostname === window.location.hostname) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const headerHeight = window.innerWidth < 768 ? 70 : 90;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          const headerHeight = window.innerWidth < 768 ? 70 : 90;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      
      setTimeout(() => {
        const headerHeight = window.innerWidth < 768 ? 70 : 90;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, isMenuOpen ? 300 : 0);
    }
  };

  return (
    <div className="min-h-screen gradient-hero">
      
      <header className="glass sticky top-0 z-50 border-b border-orange-200">
        <nav className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 gradient-primary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">S</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gradient">Sopomoro</h1>
                <p className="text-xs text-orange-600 font-medium hidden sm:block">Keripik Tradisional</p>
              </div>
            </Link>
            
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                Beranda
              </Link>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Produk
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Kontak
              </button>
            </div>
            
            
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-medium hover:shadow-large hover:scale-105 font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Pesan via WhatsApp</span>
            </a>
            
            
            <button 
              className="md:hidden text-gray-700 hover:text-orange-600 p-2 rounded-lg hover:bg-orange-50 transition-all duration-300"
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
          
          
          {isMenuOpen && (
            <div className="md:hidden mt-3 pb-3 border-t border-orange-200 animate-fadeInUp">
              <div className="flex flex-col space-y-2 pt-3">
                <Link 
                  href="/" 
                  className="block px-4 py-2 rounded-lg text-orange-600 font-semibold bg-orange-50 shadow-soft"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beranda
                </Link>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                >
                  Produk
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                >
                  Tentang
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                >
                  Kontak
                </button>
                <a 
                  href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center font-semibold shadow-medium flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      
      <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
              <Award className="w-4 h-4 mr-2" />
              UMKM Terpercaya #1
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Keripik Tradisional
            <br />
            <span className="text-gradient">Berkualitas Premium</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Nikmati kelezatan keripik tradisional Indonesia dengan cita rasa autentik yang dibuat dari bahan-bahan pilihan berkualitas tinggi dan resep turun temurun
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-8 rounded-full shadow-large hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Pesan Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <Link 
              href="/products"
              className="inline-flex items-center space-x-3 bg-white text-orange-600 font-semibold py-4 px-8 rounded-full border-2 border-orange-500 shadow-medium hover:bg-orange-50 hover:shadow-large transition-all duration-300 hover:scale-105"
            >
              <Cookie className="w-6 h-6" />
              <span>Lihat Semua Produk</span>
            </Link>
          </div>
          
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-2xl hover-lift">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Pelanggan Puas</div>
            </div>
            <div className="glass p-6 rounded-2xl hover-lift">
              <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Varian Rasa</div>
            </div>
            <div className="glass p-6 rounded-2xl hover-lift">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Bahan Alami</div>
            </div>
            <div className="glass p-6 rounded-2xl hover-lift">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Siap Melayani</div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Mengapa Pilih <span className="text-gradient">Sopomoro?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan yang terbaik dengan standar kualitas tinggi
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="gradient-card p-8 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">100% Bahan Alami</h3>
                <p className="text-gray-600">Tanpa pengawet kimia dan bahan tambahan berbahaya</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="gradient-card p-8 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Resep Turun Temurun</h3>
                <p className="text-gray-600">Cita rasa autentik dari resep keluarga yang telah teruji</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="gradient-card p-8 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Higienis & Aman</h3>
                <p className="text-gray-600">Proses produksi dengan standar kebersihan yang ketat</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="gradient-card p-8 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Pengiriman Cepat</h3>
                <p className="text-gray-600">Pengiriman yang cepat dan aman ke seluruh Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="products" className="py-16 sm:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Produk <span className="text-gradient">Unggulan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan keripik dengan cita rasa yang menggugah selera
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Keripik Pisang Original",
                price: "Rp 15.000",
                description: "Keripik pisang dengan rasa original yang gurih dan renyah",
                icon: <Apple className="w-8 h-8 text-yellow-600" />
              },
              {
                name: "Keripik Singkong Pedas",
                price: "Rp 12.000",
                description: "Singkong berkualitas dengan bumbu pedas yang menggigit",
                icon: <Flame className="w-8 h-8 text-red-600" />
              },
              {
                name: "Keripik Ubi Manis",
                price: "Rp 18.000",
                description: "Ubi ungu premium dengan rasa manis alami yang lezat",
                icon: <Heart className="w-8 h-8 text-purple-600" />
              },
              {
                name: "Keripik Tahu Krispy",
                price: "Rp 14.000",
                description: "Tahu segar yang digoreng hingga krispy dengan bumbu spesial",
                icon: <Cookie className="w-8 h-8 text-brown-600" />
              },
              {
                name: "Keripik Tempe Gurih",
                price: "Rp 13.000",
                description: "Tempe berkualitas dengan cita rasa gurih yang khas",
                icon: <ChefHat className="w-8 h-8 text-green-600" />
              },
              {
                name: "Mix Keripik Nusantara",
                price: "Rp 25.000",
                description: "Paket kombinasi semua varian keripik dalam satu kemasan",
                icon: <Star className="w-8 h-8 text-gold-600" />
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="glass p-8 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-100 to-amber-100 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-center leading-relaxed">{product.description}</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient mb-4">{product.price}</div>
                    <a 
                      href={`https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 font-semibold shadow-medium"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Pesan</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Tentang <span className="text-gradient">Sopomoro</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sopomoro adalah UMKM keripik tradisional yang didirikan dengan misi mempertahankan cita rasa 
                autentik Indonesia. Kami menggunakan resep turun temurun yang telah dipercaya keluarga selama puluhan tahun.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Setiap produk dibuat dengan penuh cinta dan perhatian terhadap detail, menggunakan bahan-bahan 
                pilihan terbaik untuk menghadirkan pengalaman kuliner yang tak terlupakan.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Bersertifikat BPOM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Halal MUI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Proses Higienis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Kualitas Terjamin</span>
                </div>
              </div>
              
              <a 
                href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20bertanya%20tentang%20produk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold py-4 px-8 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-medium"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hubungi Kami</span>
              </a>
            </div>
            
            <div className="relative">
              <div className="glass p-8 rounded-3xl shadow-large">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">500+ Pelanggan</h4>
                      <p className="text-gray-600">Tersebar di seluruh Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Berpengalaman</h4>
                      <p className="text-gray-600">5+ tahun melayani pelanggan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Rating Tinggi</h4>
                      <p className="text-gray-600">4.9/5 dari review pelanggan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-16 sm:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Hubungi <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Siap melayani pesanan Anda 24/7. Jangan ragu untuk menghubungi kami!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="glass p-8 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Telepon</h3>
                <p className="text-gray-600 mb-4">Hubungi kami langsung</p>
                <a 
                  href="tel:+6281234567890" 
                  className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="glass p-8 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Chat langsung dengan kami</p>
                <a 
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="glass p-8 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Lokasi</h3>
                <p className="text-gray-600 mb-4">Alamat produksi kami</p>
                <p className="text-orange-600 font-semibold">
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-10 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-large text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Pesan Sekarang via WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">Sopomoro</h3>
                  <p className="text-gray-400">Keripik Tradisional Berkualitas</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                UMKM keripik tradisional Indonesia yang berkomitmen menghadirkan cita rasa autentik 
                dengan kualitas terbaik. Dibuat dengan resep turun temurun dan bahan pilihan.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/sopomoro.keripik" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com/sopomoro.keripik" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Produk</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Keripik Pisang</span></li>
                <li><span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Keripik Singkong</span></li>
                <li><span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Keripik Ubi</span></li>
                <li><span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Keripik Tahu</span></li>
                <li><span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Keripik Tempe</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Kontak</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span className="text-gray-400">+62 812-3456-7890</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400">WhatsApp</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span className="text-gray-400">Jakarta, Indonesia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">24/7 Siap Melayani</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 Sopomoro. Semua hak cipta dilindungi.
              </p>
              <div className="flex space-x-6">
                <span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Kebijakan Privasi</span>
                <span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Syarat & Ketentuan</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
