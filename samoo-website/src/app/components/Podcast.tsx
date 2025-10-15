export default function Podcast() {
  const videos = [
    { id: "3ocWOpDgGJU", title: "Dima Sport Podcast - Episode Principal" },
    { id: "EiUX45Gp3ZA", title: "Episode 2 - Mental d'Athlète" },
    { id: "ff9DcfPhVPc", title: "Episode 3 - Nutrition Sportive" }
  ];

  return (
    <section id="podcast" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-red-600">Dima Sport Podcast</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4">Le mental du sport en action</p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8">
              Bienvenue dans votre podcast Dima Sport : ta dose hebdomadaire de motivation et de leçons de vie 
              issues du monde du sport individuel et des modes de vie performants. Avec Samoo Oussema, ancien 
              champion et coach spécialisé, plonge dans les coulisses avec des athlètes, entraîneurs, 
              nutritionnistes et combattants de tous horizons.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href="#" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            ▶️ Écouter sur Spotify
          </a>
          <a 
            href="https://www.youtube.com/playlist?app=desktop&list=PLKPA0viFHURnjbtE2bCOb99QyWvSv3nZu&fbclid=PAQ0xDSwKUK0pleHRuA2FlbQIxMAABp0DIavqo6JFYqovOJ66Ijp1_H0XjAZFKa-A8HdxENl5mhEChpcQlHA4msZrD_aem_YPgUobJj1teSX8GJTiI7BA" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            🎥 Regarder sur YouTube
          </a>
          <a 
            href="#" 
            className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            ❤️ S'abonner
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <div className="aspect-video bg-black flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-lg"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-gray-300 text-sm">Découvrez les secrets de la performance sportive</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}