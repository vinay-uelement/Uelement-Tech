'use client';

const stats = [
  { value: '50+', label: 'ENTERPRISE CLIENTS' },
  { value: '12', label: 'GLOBAL DATA CENTERS' },
  { value: '99.99%', label: 'UPTIME SLA' },
  { value: '10M+', label: 'INFRASTRUCTURE MANAGED' },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-gray-50 font-sans px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</span>
              <span className="text-xs md:text-sm text-gray-500 font-semibold tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
