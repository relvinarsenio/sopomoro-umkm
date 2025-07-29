import Link from "next/link";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <h1 className="text-2xl font-bold text-orange-600">Sopomoro</h1>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link 
            href="/" 
            className={`transition-colors ${
              currentPage === "home" 
                ? "text-orange-600 font-semibold" 
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            Beranda
          </Link>
          <Link 
            href="/products" 
            className={`transition-colors ${
              currentPage === "products" 
                ? "text-orange-600 font-semibold" 
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            Produk
          </Link>
          <Link 
            href="/#about" 
            className={`transition-colors ${
              currentPage === "about" 
                ? "text-orange-600 font-semibold" 
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            Tentang
          </Link>
          <Link 
            href="/#contact" 
            className={`transition-colors ${
              currentPage === "contact" 
                ? "text-orange-600 font-semibold" 
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            Kontak
          </Link>
        </div>
        
        <a 
          href="https://wa.me/6281234567890?text=Halo%20Sopomoro,%20saya%20ingin%20memesan%20keripik"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors inline-block"
        >
          Pesan via WhatsApp
        </a>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-orange-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
