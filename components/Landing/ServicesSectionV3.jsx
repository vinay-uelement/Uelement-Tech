'use client';
import Link from 'next/link';

const services = [
  {
    title: 'Quantum Security',
    desc: 'Design and implement quantum-ready cryptographic systems, quantum simulation environments, and post-quantum security frameworks for enterprises preparing for the quantum era.',
    link: '/quantum-security',
  },
  {
    title: 'Artificial Intelligence',
    desc: 'Deploy production-grade AI/ML pipelines, from model training infrastructure to real-time inference systems, with full MLOps lifecycle management.',
    link: '/edge-ai',
  },
  {
    title: 'Digital Infrastructure',
    desc: 'Architect and manage multi-cloud, hybrid, and edge computing environments with Infrastructure-as-Code, continuous deployment, and observability at scale.',
    link: '/deeptech',
  },
  {
    title: 'Cybersecurity',
    desc: 'Implement Zero Trust architecture, threat detection systems, and compliance frameworks that protect critical assets across cloud, on-premise, and edge environments.',
    link: '/quantum-security',
  },
];

const ServicesSectionV3 = () => {
  return (
    <section id="solutions" className="py-24 bg-white text-black font-sans px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Image Placeholder */}
              <div className="w-full h-64 bg-gray-100 rounded-2xl mb-6 overflow-hidden">
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
              <Link href={service.link} className="inline-flex items-center text-secondary font-semibold uppercase text-sm tracking-wider transition-opacity duration-300 group-hover:opacity-80">
                Learn More 
                <span className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-2">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionV3;
