export default function Collaborations() {
  const partners = [
    { name: "Société de nutrition sportive", image: "/soc_nautrition.jpg" },
    { name: "Dodo nutrition", image: "/dodo_nautrition.jpg" },
    { name: "Association culturelle artistique et sportive", image: "/culturelle.jpg" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-red-600">
            Collaborations & Partenaires
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group animate-fade-in">
              <div className="bg-gray-100 hover:bg-red-50 p-8 rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                <img src={partner.image} alt={partner.name} className="w-full h-48 object-contain mb-4 rounded-lg" />
                <h3 className="font-bold text-lg text-black">{partner.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}