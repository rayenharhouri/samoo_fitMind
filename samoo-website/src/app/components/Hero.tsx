export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Bouge avec sens.<br />
          <span className="text-red-500">Progresse avec puissance.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 font-light max-w-3xl mx-auto">
          Du sport, du mental, du réel – avec Samoo Oussema.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="#podcast" 
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            🎧 Écouter le podcast
          </a>
          <a 
            href="#fitmind" 
            className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            💪 Découvrir FitMind AI
          </a>
          <a 
            href="#news" 
            className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            📰 Voir les actualités
          </a>
        </div>
      </div>
    </section>
  );
}