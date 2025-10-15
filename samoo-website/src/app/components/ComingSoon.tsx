"use client";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="text-6xl mb-8">🚀</div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Nouveau projet à venir !
          </h2>
          <p className="text-xl leading-relaxed mb-12">
            Une nouvelle plateforme de coaching et de contenu exclusif est en préparation.
            Restez connectés pour découvrir la prochaine évolution de FitMind AI & Dima Sport.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-6">Ce qui vous attend :</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-2">Coaching Personnalisé</h4>
                  <p className="text-sm opacity-90">Programmes sur mesure adaptés à vos objectifs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-semibold mb-2">Application Mobile</h4>
                  <p className="text-sm opacity-90">Accès à tous vos contenus en mobilité</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎥</span>
                <div>
                  <h4 className="font-semibold mb-2">Contenu Exclusif</h4>
                  <p className="text-sm opacity-90">Vidéos, podcasts et masterclass privées</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-black p-8 rounded-2xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-6">Restez informé du lancement</h3>
            {isSubscribed ? (
              <div className="text-green-600 font-semibold text-lg">
                ✅ Merci ! Vous serez informé en priorité.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre e-mail"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Être informé du lancement
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}