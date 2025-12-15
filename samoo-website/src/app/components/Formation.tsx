export default function Formation() {
  const formations = [
    "/formation_1.jpg",
    "/formation_2.jpg",
    "/formation_3.jpg",
    "/formation_4.jpg"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-red-600">
            Formation Coach Professionnel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formations.map((image, index) => (
            <div key={index} className="animate-fade-in">
              <img src={image} alt={`Formation ${index + 1}`} className="w-full h-80 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}