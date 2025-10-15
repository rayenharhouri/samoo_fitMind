export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-6">
              Samoo <span className="text-red-500">Oussema</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Champion, Coach, Entrepreneur. Du sport, du mental, du réel.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/samoo_oussema/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/playlist?app=desktop&list=PLKPA0viFHURnjbtE2bCOb99QyWvSv3nZu&fbclid=PAQ0xDSwKUK0pleHRuA2FlbQIxMAABp0DIavqo6JFYqovOJ66Ijp1_H0XjAZFKa-A8HdxENl5mhEChpcQlHA4msZrD_aem_YPgUobJj1teSX8GJTiI7BA" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">À propos</a></li>
              <li><a href="#podcast" className="text-gray-300 hover:text-red-500 transition-colors">Podcast</a></li>
              <li><a href="#fitmind" className="text-gray-300 hover:text-red-500 transition-colors">FitMind AI</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-red-500 transition-colors">Actualités</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@dimapodcast.tn" className="text-gray-300 hover:text-red-500 transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  contact@dimapodcast.tn
                </a>
              </li>
              <li className="text-gray-300">📍 Tunis, Tunisie</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Samoo Oussema | Made with ❤️ in Tunisia
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
            <span className="text-gray-500">SEO: Samoo Oussema • Dima Sport Podcast • Coach Sportif Tunisie • FitMind AI • Hyrox Tunisie</span>
          </div>
        </div>
      </div>
    </footer>
  );
}