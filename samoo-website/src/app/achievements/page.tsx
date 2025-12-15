export default function Achievements() {
  const achievements = [
    { year: "2005", title: "Champion Arabe Junior", location: "Égypte", medal: "🥇", category: "+80kg" },
    { year: "2005", title: "2e place Championnat Méditerranéen", location: "Malte", medal: "🥈" },
    { year: "2005", title: "3e place par équipe – Championnat du Monde", location: "France", medal: "🥉" },
    { year: "2006", title: "1ère place – Jeux Islamiques Seniors", location: "Arabie Saoudite", medal: "🥇" },
    { year: "2007", title: "Championnat d'Afrique Senior", location: "Nigeria", medal: "🥉" },
    { year: "2009/2011", title: "Champion de Tunisie Senior", location: "Tunisie", medal: "🥇", category: "-84/+84" }
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-black">Palmarès International</h1>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{achievement.medal}</span>
                <div>
                  <h4 className="font-semibold text-lg text-black">{achievement.title}</h4>
                  <p className="text-black">{achievement.location} • {achievement.year}</p>
                  {achievement.category && <p className="text-sm text-red-600 font-medium">{achievement.category}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </section>
  );
}