"use client";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
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
            className="hidden md:inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm lg:text-base"
          >
            Pesan via WhatsApp
          </a>
          
          
          <button 
            className="md:hidden text-gray-700 hover:text-orange-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                href="/" 
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "home" 
                    ? "text-orange-600 font-semibold bg-orange-50" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/products" 
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "products" 
                    ? "text-orange-600 font-semibold bg-orange-50" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Produk
              </Link>
              <Link 
                href="/#about" 
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "about" 
                    ? "text-orange-600 font-semibold bg-orange-50" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link 
                href="/#contact" 
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "contact" 
                    ? "text-orange-600 font-semibold bg-orange-50" 
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
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
  );
}
