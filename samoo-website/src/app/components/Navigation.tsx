"use client";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <img src="/samo.jpg" alt="Samoo Oussema" className="w-10 h-10 rounded-full" />
              <span className="text-white text-xl font-black">
                Samoo <span className="text-red-500">Oussema</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-white hover:text-red-500 transition-colors font-medium">À propos</a>
              <a href="#podcast" className="text-white hover:text-red-500 transition-colors font-medium">Podcast</a>
              <a href="#fitmind" className="text-white hover:text-red-500 transition-colors font-medium">FitMind AI</a>
              <a href="#news" className="text-white hover:text-red-500 transition-colors font-medium">Actualités</a>
              <a href="https://www.instagram.com/samoo_oussema/" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300">
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
              <a href="#about" className="text-white hover:text-red-500 block px-3 py-2 font-medium">À propos</a>
              <a href="#podcast" className="text-white hover:text-red-500 block px-3 py-2 font-medium">Podcast</a>
              <a href="#fitmind" className="text-white hover:text-red-500 block px-3 py-2 font-medium">FitMind AI</a>
              <a href="#news" className="text-white hover:text-red-500 block px-3 py-2 font-medium">Actualités</a>
              <a href="https://www.instagram.com/samoo_oussema/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 block px-3 py-2 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}