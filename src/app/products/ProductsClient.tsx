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
  ArrowLeft,
  Star,
  Heart,
  ShoppingCart,
  Award,
  CheckCircle,
  Filter
} from "lucide-react";

export default function ProductsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  const products = [
    {
      id: 1,
      name: "Keripik Pisang Original",
      price: "Rp 15.000",
      icon: Apple,
      color: "text-yellow-600",
      bgColor: "from-yellow-100 to-amber-100",
      description: "Keripik pisang renyah dengan rasa manis alami, dibuat dari pisang pilihan terbaik.",
      variants: ["100g", "250g", "500g"],
      ingredients: "Pisang, minyak kelapa, gula aren, garam",
      category: "pisang",
      rating: 4.9,
      sold: 150,
      isPopular: true
    },
    {
      id: 2,
      name: "Keripik Singkong Pedas",
      price: "Rp 12.000",
      icon: Flame,
      color: "text-red-600",
      bgColor: "from-red-100 to-orange-100",
      description: "Keripik singkong dengan bumbu pedas yang menggugah selera dan renyah di setiap gigitan.",
      variants: ["100g", "250g", "500g"],
      ingredients: "Singkong, minyak kelapa, cabai merah, bawang putih, garam",
      category: "singkong",
      rating: 4.8,
      sold: 120,
      isPopular: false
    },
    {
      id: 3,
      name: "Keripik Ubi Manis",
      price: "Rp 18.000",
      icon: Heart,
      color: "text-purple-600",
      bgColor: "from-purple-100 to-pink-100",
      description: "Keripik ubi manis yang gurih dan manis, kaya akan vitamin dan serat alami.",
      variants: ["100g", "250g", "500g"],
      ingredients: "Ubi jalar ungu, minyak kelapa, gula aren, garam",
      category: "ubi",
      rating: 4.9,
      sold: 89,
      isPopular: true
    },
    {
      id: 4,
      name: "Keripik Talas Balado",
      price: "Rp 16.000",
      icon: Flame,
      color: "text-orange-600",
      bgColor: "from-orange-100 to-red-100",
      description: "Keripik talas dengan bumbu balado yang pedas dan gurih, perpaduan cita rasa yang sempurna.",
      variants: ["100g", "250g"],
      ingredients: "Talas, minyak kelapa, cabai balado, tomat, bawang merah",
      category: "talas",
      rating: 4.7,
      sold: 67,
      isPopular: false
    },
    {
      id: 5,
      name: "Keripik Nangka Muda",
      price: "Rp 14.000",
      icon: Apple,
      color: "text-green-600",
      bgColor: "from-green-100 to-emerald-100",
      description: "Keripik nangka muda yang renyah dengan cita rasa gurih dan sedikit manis.",
      variants: ["100g", "250g"],
      ingredients: "Nangka muda, minyak kelapa, kunyit, garam, daun jeruk",
      category: "nangka",
      rating: 4.6,
      sold: 45,
      isPopular: false
    },
    {
      id: 6,
      name: "Mix Keripik Special",
      price: "Rp 25.000",
      icon: Star,
      color: "text-amber-600",
      bgColor: "from-amber-100 to-yellow-100",
      description: "Paket kombinasi berbagai keripik pilihan dalam satu kemasan spesial.",
      variants: ["300g", "500g"],
      ingredients: "Campuran pisang, singkong, ubi, talas dengan berbagai bumbu",
      category: "mix",
      rating: 5.0,
      sold: 230,
      isPopular: true
    },
    {
      id: 7,
      name: "Keripik Pisang Coklat",
      price: "Rp 17.000",
      icon: Cookie,
      color: "text-amber-700",
      bgColor: "from-amber-100 to-brown-100",
      description: "Keripik pisang dengan balutan coklat manis yang lezat dan menggoda.",
      variants: ["100g", "250g"],
      ingredients: "Pisang, minyak kelapa, coklat susu, gula",
      category: "pisang",
      rating: 4.8,
      sold: 95,
      isPopular: false
    },
    {
      id: 8,
      name: "Keripik Tahu Krispy",
      price: "Rp 14.000",
      icon: ChefHat,
      color: "text-blue-600",
      bgColor: "from-blue-100 to-cyan-100",
      description: "Tahu segar yang digoreng hingga krispy dengan bumbu spesial yang gurih.",
      variants: ["100g", "250g"],
      ingredients: "Tahu segar, minyak kelapa, bumbu spesial, garam",
      category: "tahu",
      rating: 4.5,
      sold: 78,
      isPopular: false
    }
  ];

  const categories = [
    { id: "all", name: "Semua Produk", count: products.length },
    { id: "pisang", name: "Keripik Pisang", count: products.filter(p => p.category === "pisang").length },
    { id: "singkong", name: "Keripik Singkong", count: products.filter(p => p.category === "singkong").length },
    { id: "ubi", name: "Keripik Ubi", count: products.filter(p => p.category === "ubi").length },
    { id: "mix", name: "Paket Mix", count: products.filter(p => p.category === "mix").length }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const popularProducts = products.filter(product => product.isPopular);

  return (
    <div className="min-h-screen gradient-hero">
      
      <header className="glass sticky top-0 z-50 border-b border-orange-200">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl sm:text-2xl">S</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gradient">Sopomoro</h1>
                <p className="text-xs text-orange-600 font-medium">Keripik Tradisional</p>
              </div>
            </Link>
            
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Beranda
              </Link>
              <Link href="/products" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                Produk
              </Link>
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
            <div className="md:hidden mt-4 pb-4 border-t border-orange-200 animate-fadeInUp">
              <div className="flex flex-col space-y-3 pt-4">
                <Link 
                  href="/" 
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beranda
                </Link>
                <Link 
                  href="/products"
                  className="block px-4 py-3 rounded-xl text-orange-600 font-semibold bg-orange-50 shadow-soft"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produk
                </Link>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                >
                  Tentang
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
                >
                  Kontak
                </button>
                <a 
                  href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center font-semibold shadow-medium flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-12 animate-fadeInUp">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-6 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Beranda</span>
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Produk <span className="text-gradient">Unggulan</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jelajahi koleksi lengkap keripik tradisional kami dengan berbagai pilihan rasa yang menggugah selera
          </p>
        </div>
      </section>

      
      <section className="container mx-auto px-4 pb-16">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            🔥 <span className="text-gradient">Produk Terpopuler</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={product.id} className="group">
                  <div className="glass p-6 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULER
                      </span>
                    </div>
                    
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${product.bgColor} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${product.color}`} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{product.name}</h3>
                    
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{product.sold} terjual</span>
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-gradient mb-2">{product.price}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                    </div>
                    
                    <a 
                      href={`https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-3 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 font-semibold shadow-medium"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Pesan Sekarang</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="container mx-auto px-4 pb-8">
        <div className="flex items-center justify-center mb-8">
          <div className="glass p-2 rounded-2xl">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-medium'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="container mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={product.id} className="group animate-fadeInScale" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="glass p-6 rounded-3xl shadow-medium hover:shadow-large transition-all duration-300 hover-lift">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${product.bgColor} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${product.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{product.name}</h3>
                  
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{product.sold} terjual</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">{product.description}</p>
                  
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-gradient mb-2">{product.price}</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {product.variants.map((variant, idx) => (
                        <span key={idx} className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-3 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 font-semibold shadow-medium"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Pesan</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      
      <section className="container mx-auto px-4 py-16">
        <div className="glass p-12 rounded-3xl text-center shadow-large">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Siap Menikmati <span className="text-gradient">Keripik Lezat?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Pesan sekarang dan rasakan kelezatan keripik tradisional berkualitas premium langsung ke rumah Anda!
          </p>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-10 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-large text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Pesan Sekarang via WhatsApp</span>
          </a>
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
                <li><span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Mix Special</span></li>
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
