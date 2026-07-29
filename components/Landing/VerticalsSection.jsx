'use client';

const verticals = [
  {
    icon: 'Q',
    title: 'Quantum Security',
    subtitle: 'Post-quantum cryptography'
  },
  {
    icon: 'D',
    title: 'DeepTech',
    subtitle: 'Advanced R&D systems'
  },
  {
    icon: 'E',
    title: 'Edge AI',
    subtitle: 'Intelligent edge systems'
  },
  {
    icon: 'P',
    title: 'Product Engineering',
    subtitle: 'Full-stack development'
  }
];

const VerticalsSection = () => {
  return (
    <section className="py-24 bg-gray-50 font-sans px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-12">Our Verticals</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vert, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow cursor-default flex flex-col items-center">
              <div className="w-14 h-14 bg-secondary-200 text-secondary rounded-full flex items-center justify-center font-bold text-xl mb-6">
                {vert.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{vert.title}</h3>
              <p className="text-gray-500 text-sm">{vert.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalsSection;
