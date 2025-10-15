export default function FitMind() {
  return (
    <section id="fitmind" className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            FitMind AI
          </h2>
          <p className="text-xl mb-4">The Smartest Tunisian Fitness Companion 🇹🇳</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Intelligence Artificielle 100% Tunisienne</h3>
              <p className="text-lg leading-relaxed mb-6">
                Développé à 100 % en Tunisie, FitMind AI est un assistant sportif intelligent qui répond à 
                toutes vos questions liées à la forme physique, à la nutrition et à la performance.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-red-400">🤖</span>
                  Réponses personnalisées à vos questions fitness
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-400">🍽️</span>
                  Idées de repas et suivi des calories
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-400">💊</span>
                  Conseils sur les compléments alimentaires
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-400">📋</span>
                  Programmes d'entraînement personnalisés
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="bg-white text-black p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Rejoignez la Révolution Fitness</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-600 mb-2">🚀 Innovation Tunisienne</h4>
                  <p className="text-sm">Première IA fitness développée entièrement en Tunisie</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-600 mb-2">🎯 Personnalisation Avancée</h4>
                  <p className="text-sm">Adaptée à votre profil et vos objectifs spécifiques</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-600 mb-2">🌟 Expertise Samoo</h4>
                  <p className="text-sm">Basée sur l'expérience de champion et coach professionnel</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mt-8">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Découvrir FitMind AI
                </button>
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Rejoindre la communauté
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}