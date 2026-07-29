'use client';

const TestimonialSection = () => {
  return (
    <>
      <section className="py-24 bg-white text-black font-sans px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">What Our Clients Say</h2>
          
          <div className="mb-12">
            <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-8">
              "UElement transformed our security posture. Their quantum-ready cryptography implementation gave us a three-year head start on post-quantum compliance."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">Marcus Chen</p>
                <p className="text-xs text-gray-500">Chief Information Security Officer, Global Financial Corp</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-4">
            <button className="text-gray-400 hover:text-black">&lt;</button>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <button className="text-gray-400 hover:text-black">&gt;</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-blue text-white font-sans px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to Build the Future?</h2>
          <p className="text-gray-400 text-lg mb-10">Let's discuss how UElement can transform your infrastructure and secure your digital assets.</p>
          <a href="#contact" className="inline-block bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 px-8 py-3 rounded-full text-sm tracking-wider uppercase">
            Start a Conversation
          </a>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
