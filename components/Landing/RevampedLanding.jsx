'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const services = [
  {
    id: 1,
    icon: '🛡️',
    title: 'Cybersecurity',
    desc: 'Enterprise-grade Zero Trust protection, advanced threat intelligence, and automated SecOps across multi-cloud, hybrid, and Government Cloud environments.',
    link: '/cybersecurity',
  },
  {
    id: 2,
    icon: '☁️',
    title: 'Cloud Solutions',
    desc: 'Architecting, optimizing and managing seamless multi-cloud environments with DevOps, FinOps, Infrastructure as Code, and intelligent orchestration.',
    link: '/cloud-solutions',
  },
  {
    id: 3,
    icon: '🤖',
    title: 'AI & ML',
    desc: 'End-to-end AI/ML services from model development to production deployment, including EdgeAI, LLM integration, and real-time decision intelligence.',
    link: '/ai-ml',
  },
  {
    id: 4,
    icon: '⚛️',
    title: 'Quantum & Web3',
    desc: 'Pioneering transformation with post-quantum cryptography, Web3 decentralization, and digital modernization for future-proof infrastructure.',
    link: '/future-tech',
  },
];

const segments = [
  {
    number: '01',
    title: 'SI Partnerships',
    desc: 'Strategic integration and managed services leveraging 15+ global technology partners for seamless go-to-market solutions.',
  },
  {
    number: '02',
    title: 'Professional Services',
    desc: 'End-to-end consulting across cloud, cybersecurity, and AI — from strategy and architecture to implementation and optimization.',
  },
  {
    number: '03',
    title: 'Product Engineering',
    desc: 'Full-stack, multi-tenant SaaS/PaaS with cloud-native architectures, AI/ML integration, and robust backend infrastructure.',
  },
  {
    number: '04',
    title: 'Digital Transformation',
    desc: 'Comprehensive strategy-to-execution programs spanning modernization, cloud migration, agile delivery, and emerging tech adoption.',
  },
];

const process_steps = [
  { icon: '🔍', title: 'Assess & Strategize', desc: 'Identify needs, gaps, and create a focused action plan.' },
  { icon: '📐', title: 'Architect & Design', desc: 'Re-architect cloud environments, design secure IaaC infrastructure.' },
  { icon: '⚙️', title: 'Implement & Integrate', desc: 'Execute full-stack development, platform integration, and migration.' },
  { icon: '📊', title: 'Manage & Optimize', desc: 'Ongoing Managed Cloud, SecOps, FinOps, and performance optimization.' },
];

const techStack = [
  'AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker',
  'Python', 'React', 'Node.js', 'TensorFlow', 'PyTorch', 'Jenkins',
];

const stats = [
  { value: '15+', label: 'Global Partners' },
  { value: '92', label: 'Projects Delivered' },
  { value: '4', label: 'Tech Domains' },
  { value: '99.9%', label: 'Uptime SLA' },
];

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
   ───────────────────────────────────────────── */
const useCountUp = (target, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const num = parseFloat(target.replace(/[^0-9.]/g, ''));
          const steps = 60;
          const increment = num / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
              setCount(num);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current * 10) / 10);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  const suffix = target.replace(/[0-9.]/g, '');
  const display = Number.isInteger(count) ? count.toString() : count.toFixed(1);
  return { ref, display: display + suffix };
};

const StatCard = ({ value, label }) => {
  const { ref, display } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-5xl font-bold font-noto-sans bg-gradient-to-r from-[#9B7025] to-[#d4a84b] bg-clip-text text-transparent">
        {display}
      </div>
      <p className="mt-2 text-sm md:text-base font-reddit-sans text-[#808080]">{label}</p>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
const RevampedLanding = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ═══════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-hero-gradient" />
        {/* Animated orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #22397e 0%, transparent 70%)',
            top: '-10%',
            right: '-10%',
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #9B7025 0%, transparent 70%)',
            bottom: '5%',
            left: '-5%',
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative z-10 container-padding w-full max-w-[1400px] mx-auto pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#9B7025] animate-pulse" />
                <span className="text-xs md:text-sm font-reddit-sans text-white/70 tracking-wide">Engineering Digital Synapses</span>
              </div>
              <h1 className="font-cal-sans text-white text-4xl md:text-6xl xl:text-7xl leading-[1.1] mb-6">
                We are <br />
                <span className="italic bg-gradient-to-r from-white via-[#d4a84b] to-[#9B7025] bg-clip-text text-transparent">Digital Mavericks.</span>
              </h1>
              <p className="font-reddit-sans font-light text-white/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Delivering precision and efficiency in solving complex challenges across Cybersecurity, Cloud, and AI — empowering organizations to navigate digital environments confidently and resiliently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => router.push('/contact-us')} className="btn-yellow !text-base !px-8 !h-12">
                  Get Started
                </button>
                <button onClick={() => router.push('/company')} className="group flex items-center justify-center gap-2 px-8 h-12 rounded-full border border-white/20 text-white font-reddit-sans font-semibold text-base hover:bg-white/10 transition-all duration-300">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>

            {/* Right — Abstract graphic */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                {/* Rotating rings */}
                <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-dashed border-[#9B7025]/30 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-10 rounded-full border border-white/5 animate-[spin_25s_linear_infinite]" />
                {/* Center element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
                    <span className="text-4xl md:text-5xl font-bold font-reddit-sans text-[#9B7025]/60 -rotate-12 hover:rotate-0 transition-transform duration-500 select-none">92</span>
                  </div>
                </div>
                {/* Orbiting dots */}
                {[0, 90, 180, 270].map((deg, i) => (
                  <div key={i} className="absolute inset-0 animate-[spin_20s_linear_infinite]" style={{ animationDelay: `${i * -5}s` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ background: i % 2 === 0 ? '#9B7025' : '#22397e', boxShadow: `0 0 20px ${i % 2 === 0 ? '#9B7025' : '#22397e'}60` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-6 py-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-4xl font-bold font-noto-sans text-[#d4a84b]">{s.value}</div>
                <p className="mt-1 text-xs md:text-sm font-reddit-sans text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — SERVICES / EXPERTISE
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-padding max-w-[1400px] mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="fl-slash text-center">/Our Expertise</p>
            <h2 className="font-noto-sans font-bold text-2xl md:text-4xl xl:text-[42px] text-[#232223] mb-4 tracking-tight">
              Enterprise Solutions Built to Scale
            </h2>
            <p className="font-reddit-sans font-light text-sm md:text-base text-[#808080] max-w-2xl mx-auto">
              Deep expertise across four critical technology domains, from Zero Trust to Quantum Readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {services.map((s) => (
              <Link
                href={s.link}
                key={s.id}
                className="group relative rounded-2xl p-6 md:p-7 border border-[#e8e8e8] bg-white hover:bg-gradient-to-br hover:from-[#0C142D] hover:to-[#22397e] transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="font-noto-sans font-bold text-lg md:text-xl text-[#232223] group-hover:text-white mb-3 transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="font-reddit-sans font-light text-sm text-[#808080] group-hover:text-white/70 transition-colors duration-300 leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-5 flex items-center gap-1 text-[#9B7025] group-hover:text-[#d4a84b] font-reddit-sans font-semibold text-sm transition-colors">
                  Explore
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — ABOUT / PROCESS
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#F8F8F8]">
        <div className="container-padding max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left — About card */}
            <div className="flex-1 bg-hero-gradient rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[380px]">
              <div>
                <p className="text-xs md:text-sm font-reddit-sans text-white/50 tracking-widest uppercase mb-4">/About Us</p>
                <h2 className="font-noto-sans font-bold text-xl md:text-3xl text-white mb-5 leading-tight">
                  Established by Innovators to Define Tomorrow's Digital Landscape.
                </h2>
                <p className="font-reddit-sans font-light text-sm md:text-base text-white/70 leading-relaxed">
                  Our strategic focus on Cybersecurity, AI, and Enterprise Cloud empowers organizations to navigate complex digital environments confidently. We blend deep technical expertise with curiosity and collaboration to deliver transformative, future-ready solutions.
                </p>
              </div>
              <button onClick={() => router.push('/company')} className="mt-8 self-start flex items-center gap-2 text-[#d4a84b] font-reddit-sans font-semibold text-sm hover:gap-3 transition-all">
                Learn more about us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>

            {/* Right — Process grid */}
            <div className="flex-1">
              <p className="text-xs md:text-sm font-reddit-sans text-[#808080] tracking-widest uppercase mb-6">/Our Process</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {process_steps.map((step, i) => (
                  <div key={i} className="group relative p-6 rounded-2xl bg-white border border-[#eee] hover:border-[#9B7025]/30 hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-4 right-4 text-4xl font-bold font-noto-sans text-[#f0f0f0] group-hover:text-[#9B7025]/10 transition-colors select-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-2xl mb-3">{step.icon}</div>
                    <h4 className="font-noto-sans font-bold text-base md:text-lg text-[#232223] mb-2">{step.title}</h4>
                    <p className="font-reddit-sans font-light text-sm text-[#808080] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — SERVICE SEGMENTS
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-padding max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="fl-slash text-center">/Service Segments</p>
            <h2 className="font-noto-sans font-bold text-2xl md:text-4xl text-[#232223] mb-4">
              How We Drive Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {segments.map((seg, i) => (
              <div key={i} className="group flex gap-5 p-6 md:p-8 rounded-2xl border border-[#eee] bg-[#FAFAFA] hover:bg-white hover:shadow-xl hover:border-[#9B7025]/20 transition-all duration-400 cursor-default">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-hero-gradient flex items-center justify-center text-white font-bold font-noto-sans text-sm md:text-base group-hover:scale-110 transition-transform duration-300">
                  {seg.number}
                </div>
                <div>
                  <h3 className="font-noto-sans font-bold text-base md:text-xl text-[#232223] mb-2">{seg.title}</h3>
                  <p className="font-reddit-sans font-light text-sm text-[#808080] leading-relaxed">{seg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — TECH STACK / WHY CHOOSE US
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-hero-gradient relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: 'radial-gradient(circle, #9B7025, transparent 70%)' }} />
        <div className="container-padding max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-14 md:mb-20">
            <p className="text-xs md:text-sm font-reddit-sans text-white/40 tracking-widest uppercase mb-4">/Why Choose Us</p>
            <h2 className="font-noto-sans font-bold text-2xl md:text-4xl text-white mb-4">
              Technical Proficiency & Reliability
            </h2>
            <p className="font-reddit-sans font-light text-sm md:text-base text-white/50 max-w-2xl mx-auto">
              We leverage cutting-edge tools and frameworks to architect robust, scalable enterprise solutions.
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {techStack.map((tech, i) => (
              <div key={i} className="px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 font-reddit-sans text-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default">
                {tech}
              </div>
            ))}
          </div>

          {/* USP cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { icon: '🔒', title: 'Zero Trust Architecture', desc: 'End-to-end security with micro-segmentation, identity-centric controls, and continuous verification across your entire stack.' },
              { icon: '⚡', title: 'Cloud-Native First', desc: 'Infrastructure as Code, containerized microservices, and DevOps automation for maximum velocity and reliability.' },
              { icon: '🧠', title: 'AI-Driven Innovation', desc: 'Custom ML models, LLM integrations, and intelligent automation that deliver measurable business outcomes at enterprise scale.' },
            ].map((item, i) => (
              <div key={i} className="p-7 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-400 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-noto-sans font-bold text-lg text-white mb-3">{item.title}</h3>
                <p className="font-reddit-sans font-light text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6 — CTA
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-padding max-w-[900px] mx-auto text-center">
          <h2 className="font-noto-sans font-bold text-2xl md:text-4xl xl:text-5xl text-[#232223] mb-5 leading-tight">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="font-reddit-sans font-light text-base md:text-lg text-[#808080] max-w-xl mx-auto mb-10">
            Empower your enterprise with smarter, scalable solutions that adapt to new threats — keeping your business safe, agile, and resilient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => router.push('/contact-us')} className="btn-yellow !text-base !px-10 !h-12">
              Contact Us
            </button>
            <button onClick={() => router.push('/services')} className="px-10 h-12 rounded-full border-2 border-[#0C142D] text-[#0C142D] font-reddit-sans font-semibold text-base hover:bg-[#0C142D] hover:text-white transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevampedLanding;
