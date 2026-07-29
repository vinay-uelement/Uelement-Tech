'use client';
import { BiBuilding, BiPulse, BiBuildingHouse, BiSolidZap, BiSignal5, BiSolidFactory } from 'react-icons/bi';

const industries = [
  {
    title: 'Financial Services',
    desc: 'Quantum-safe cryptography, real-time fraud detection, and regulatory compliance infrastructure.',
    icon: <BiBuilding className="w-8 h-8" />
  },
  {
    title: 'Healthcare & Life Sciences',
    desc: 'Secure patient data platforms, AI-powered diagnostics, and genomic computing pipelines.',
    icon: <BiPulse className="w-8 h-8" />
  },
  {
    title: 'Government & Defense',
    desc: 'Classified cloud environments, post-quantum security, and mission-critical systems.',
    icon: <BiBuildingHouse className="w-8 h-8" />
  },
  {
    title: 'Energy & Utilities',
    desc: 'Grid optimization AI, SCADA security, and predictive maintenance at scale.',
    icon: <BiSolidZap className="w-8 h-8" />
  },
  {
    title: 'Technology & Telecom',
    desc: '5G edge infrastructure, network function virtualization, and carrier-grade reliability.',
    icon: <BiSignal5 className="w-8 h-8" />
  },
  {
    title: 'Manufacturing',
    desc: 'Industrial IoT platforms, digital twin simulation, and supply chain optimization.',
    icon: <BiSolidFactory className="w-8 h-8" />
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-primary-blue text-white font-sans px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4">Industries We Serve</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Trusted Across Sectors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 text-left group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
              <div className="text-secondary mb-6">
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{ind.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
