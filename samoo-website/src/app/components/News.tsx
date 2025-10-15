export default function News() {
  const news = [
    {
      date: "2024",
      title: "Lancement du podcast Dima Sport",
      description: "Découvrez le nouveau podcast qui révolutionne le monde du sport en Tunisie avec des interviews exclusives d'athlètes et de coachs.",
      image: "🎙️"
    },
    {
      date: "2025",
      title: "Collaboration avec FitMind AI",
      description: "Partenariat stratégique pour développer la première intelligence artificielle fitness 100% tunisienne.",
      image: "🤝"
    },
    {
      date: "Novembre 2025",
      title: "Stage Hyrox Performance – Tunis",
      description: "Formation intensive sur l'entraînement Hyrox pour développer puissance, endurance et performance athlétique.",
      image: "🥇"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-red-600">
            Actualités & Collaborations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
              <div className="p-8">
                <div className="text-6xl mb-6 text-center">{item.image}</div>
                <div className="text-sm text-red-600 font-semibold mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-4 text-black">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Lire plus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Voir toutes les actualités
          </button>
        </div>
      </div>
    </section>
  );
}