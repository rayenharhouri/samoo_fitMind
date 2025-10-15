export default function About() {
  const achievements = [
    { year: "2005", title: "Champion Arabe Junior", location: "Égypte", medal: "🥇", category: "+80kg" },
    { year: "2005", title: "2e place Championnat Méditerranéen", location: "Malte", medal: "🥈" },
    { year: "2005", title: "3e place par équipe – Championnat du Monde", location: "France", medal: "🥉" },
    { year: "2006", title: "1ère place – Jeux Islamiques Seniors", location: "Arabie Saoudite", medal: "🥇" },
    { year: "2007", title: "Championnat d'Afrique Senior", location: "Nigeria", medal: "🥉" },
    { year: "2009/2011", title: "Champion de Tunisie Senior", location: "Tunisie", medal: "🥇", category: "-84/+84" }
  ];

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
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-red-600">Palmarès International</h3>
            <div className="space-y-4">
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
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-red-600">Parcours Professionnel</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
}