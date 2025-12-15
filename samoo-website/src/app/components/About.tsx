"use client";
import { useState } from "react";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/new.png"];
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const career = [
    { period: "2004–2011", title: "Athlète de l'équipe nationale de karaté", icon: "🥋" },
    { period: "2009–2013", title: "MMA - 3e place Open Orden -92kg (2012)", icon: "🥊" },
    { period: "2014–2017", title: "Coach Self-Défense", icon: "🛡️" },
    { period: "2019–2025", title: "Coach Sportif & Entrepreneur", icon: "💪" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">Who is Samoo Oussema?</h2>
          <div className="relative max-w-lg mx-auto mb-8">
            <img src={images[currentImage]} alt="Samoo Oussema" className="w-full h-[500px] object-contain rounded-lg bg-gray-100" />
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
              ←
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
              →
            </button>
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <button key={index} onClick={() => setCurrentImage(index)} className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-red-600' : 'bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-red-600 text-center">Parcours Professionnel</h3>
            <div className="space-y-6">
              {career.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-lg text-black">{item.title}</h4>
                      <p className="text-black font-medium">{item.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-black text-white p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-4">Certifications & Expertise</h4>
              <ul className="space-y-2 text-sm">
                <li>• Coach personnel NASM &amp; ISS</li>
                <li>• Nutritionniste sportif INSP</li>
                <li>• Expert WSDA – World Federation of Self Defense Armée</li>
                <li>• Spécialiste de l'entraînement Hyrox</li>
                <li>• Créateur du Podcast Dima Sport</li>
                <li>• Co-fondateur de FitMind AI</li>
              </ul>
            </div>
            
            <div className="text-center mt-8">
              <a href="/achievements" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Voir Palmarès International
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}