export default function Collaborations() {
  const partners = [
    { name: "NASM", type: "Certification", icon: "🏆" },
    { name: "ISS", type: "Formation", icon: "📚" },
    { name: "INSP", type: "Nutrition", icon: "🥗" },
    { name: "WSDA", type: "Self-Defense", icon: "🛡️" },
    { name: "Hyrox", type: "Performance", icon: "💪" },
    { name: "FitMind AI", type: "Technology", icon: "🤖" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-red-600">
            Collaborations & Partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En collaboration avec les meilleurs acteurs du sport et du bien-être en Tunisie et à l&apos;international.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group animate-fade-in">
              <div className="bg-gray-100 hover:bg-red-50 p-8 rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                <div className="text-4xl mb-4">{partner.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-black">{partner.name}</h3>
                <p className="text-sm text-black">{partner.type}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-black to-red-600 text-white p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-6">Vous souhaitez collaborer ?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez un réseau d'excellence dans le domaine du sport, de la nutrition et du bien-être.
          </p>
          <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}