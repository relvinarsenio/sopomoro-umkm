export default function Footer() {
  return (
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
                <span>📱</span>
                <span>+62 812-3456-7890</span>
              </a>
              <p className="flex items-center space-x-2">
                <span>📍</span>
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
                title="WhatsApp"
              >
                <span className="text-white text-sm">📱</span>
              </a>
              <a 
                href="https://instagram.com/sopomoro.keripik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                title="Instagram"
              >
                <span className="text-white text-sm">📷</span>
              </a>
              <a 
                href="https://facebook.com/sopomoro.keripik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                title="Facebook"
              >
                <span className="text-white text-sm">👥</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Sopomoro. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}
