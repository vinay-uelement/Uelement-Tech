'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// ─── Hero right: Quantum circuit visual ──────────────────────────────────────
const QuantumCircuitVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg
      viewBox="0 0 620 440"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="qg" width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="rgba(192,132,252,0.05)"
            strokeWidth="0.5"
          />
        </pattern>
        <radialGradient id="qglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(192,132,252,0.12)" />
          <stop offset="100%" stopColor="rgba(192,132,252,0)" />
        </radialGradient>
      </defs>

      <rect width="620" height="440" fill="url(#qg)" rx="16" />
      <ellipse cx="310" cy="220" rx="190" ry="180" fill="url(#qglow)" />

      {/* ── Qubit rails ── */}
      {[130, 220, 310].map((cy, i) => (
        <g key={i}>
          {/* Rail line */}
          <line
            x1="60"
            y1={cy}
            x2="560"
            y2={cy}
            stroke="rgba(192,132,252,0.2)"
            strokeWidth="1.5"
          />
          {/* Qubit label */}
          <text
            x="44"
            y={cy + 4}
            fill="rgba(192,132,252,0.6)"
            fontSize="10"
            fontFamily="monospace"
            textAnchor="middle"
            fontWeight="700"
          >
            q{i}
          </text>
        </g>
      ))}

      {/* ── Hadamard gates ── */}
      {[130, 220, 310].map((cy, i) => (
        <g key={i}>
          <rect
            x="96"
            y={cy - 16}
            width="32"
            height="32"
            rx="4"
            fill="rgba(192,132,252,0.15)"
            stroke="#C98F28"
            strokeWidth="1.5"
          />
          <text
            x="112"
            y={cy + 5}
            fill="#C98F28"
            fontSize="11"
            fontFamily="monospace"
            textAnchor="middle"
            fontWeight="800"
          >
            H
          </text>
        </g>
      ))}

      {/* ── CNOT gate (q0 → q1) ── */}
      <line
        x1="196"
        y1="130"
        x2="196"
        y2="220"
        stroke="#C98F28"
        strokeWidth="1.5"
      />
      <circle cx="196" cy="130" r="5" fill="#C98F28" />
      <circle
        cx="196"
        cy="220"
        r="12"
        fill="rgba(192,132,252,0.1)"
        stroke="#C98F28"
        strokeWidth="1.5"
      />
      <line
        x1="188"
        y1="220"
        x2="204"
        y2="220"
        stroke="#C98F28"
        strokeWidth="1.5"
      />
      <line
        x1="196"
        y1="212"
        x2="196"
        y2="228"
        stroke="#C98F28"
        strokeWidth="1.5"
      />

      {/* ── CNOT gate (q1 → q2) ── */}
      <line
        x1="260"
        y1="220"
        x2="260"
        y2="310"
        stroke="#C98F28"
        strokeWidth="1.5"
      />
      <circle cx="260" cy="220" r="5" fill="#C98F28" />
      <circle
        cx="260"
        cy="310"
        r="12"
        fill="rgba(192,132,252,0.1)"
        stroke="#C98F28"
        strokeWidth="1.5"
      />
      <line
        x1="252"
        y1="310"
        x2="268"
        y2="310"
        stroke="#C98F28"
        strokeWidth="1.5"
      />
      <line
        x1="260"
        y1="302"
        x2="260"
        y2="318"
        stroke="#C98F28"
        strokeWidth="1.5"
      />

      {/* ── Rz rotation gates ── */}
      {[130, 220, 310].map((cy, i) => (
        <g key={i}>
          <rect
            x="318"
            y={cy - 16}
            width="52"
            height="32"
            rx="4"
            fill="rgba(192,132,252,0.12)"
            stroke="#C98F28"
            strokeWidth="1.2"
          />
          <text
            x="344"
            y={cy + 5}
            fill="#C98F28"
            fontSize="9"
            fontFamily="monospace"
            textAnchor="middle"
            fontWeight="700"
          >
            Rz(θ)
          </text>
        </g>
      ))}

      {/* ── Barrier ── */}
      <line
        x1="392"
        y1="108"
        x2="392"
        y2="332"
        stroke="rgba(192,132,252,0.25)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* ── Measurement gates ── */}
      {[130, 220, 310].map((cy, i) => (
        <g key={i}>
          <rect
            x="420"
            y={cy - 18}
            width="36"
            height="36"
            rx="4"
            fill="rgba(192,132,252,0.08)"
            stroke="#C98F28"
            strokeWidth="1.5"
          />
          {/* Meter arc */}
          <path
            d={`M ${426} ${cy + 10} Q ${438} ${cy - 10} ${450} ${cy + 10}`}
            stroke="#C98F28"
            strokeWidth="1.5"
            fill="none"
          />
          <line
            x1="438"
            y1={cy + 10}
            x2="446"
            y2={cy - 4}
            stroke="#C98F28"
            strokeWidth="1.2"
          />
          <text
            x="438"
            y={cy + 24}
            fill="rgba(192,132,252,0.5)"
            fontSize="7"
            fontFamily="monospace"
            textAnchor="middle"
          >
            M
          </text>
        </g>
      ))}

      {/* ── Output lines ── */}
      {[130, 220, 310].map((cy, i) => (
        <line
          key={i}
          x1="456"
          y1={cy}
          x2="540"
          y2={cy}
          stroke="rgba(192,132,252,0.2)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      ))}

      {/* ── Circuit label ── */}
      <text
        x="310"
        y="378"
        fill="rgba(192,132,252,0.35)"
        fontSize="8.5"
        fontFamily="monospace"
        textAnchor="middle"
        fontWeight="600"
        letterSpacing="1"
      >
        QUANTUM CIRCUIT — ML-KEM KEY ENCAPSULATION
      </text>

      {/* Corner labels */}
      <text
        x="16"
        y="26"
        fill="rgba(192,132,252,0.35)"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="700"
        letterSpacing="1.5"
      >
        QUANTUM READY
      </text>
      <text
        x="604"
        y="26"
        fill="rgba(192,132,252,0.35)"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="end"
        letterSpacing="1"
      >
        NIST FIPS 203/204/205
      </text>
    </svg>

    {/* Floating badges */}
    <div className="absolute top-3 left-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
      <p className="text-[#C98F28] font-bold text-sm leading-none">2030</p>
      <p className="text-white/50 text-xs mt-0.5">Quantum threat horizon</p>
    </div>
    <div className="absolute top-3 right-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
      <p className="text-[#C98F28] font-bold text-sm leading-none">NIST</p>
      <p className="text-white/50 text-xs mt-0.5">FIPS 203/204/205</p>
    </div>
    <div className="absolute bottom-3 left-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
      <p className="text-[#C98F28] font-bold text-sm leading-none">QKD</p>
      <p className="text-white/50 text-xs mt-0.5">Key distribution</p>
    </div>
    <div className="absolute bottom-3 right-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
      <p className="text-[#C98F28] font-bold text-sm leading-none">Now</p>
      <p className="text-white/50 text-xs mt-0.5">Migration window</p>
    </div>
  </div>
);

// ─── Migration pathway visual ─────────────────────────────────────────────────
const MigrationPathway = () => {
  const phases = [
    { abbr: 'PH1', label: 'Crypto\nDiscovery' },
    { abbr: 'PH2', label: 'Risk\nPriority' },
    { abbr: 'PH3', label: 'Hybrid\nMigration' },
    { abbr: 'PH4', label: 'Full PQC\nDeploy' },
  ];
  return (
    <div className="w-full bg-[#0C142D] rounded-[4px] p-6 sm:p-8 overflow-x-auto">
      <p className="text-[#C98F28]/50 text-[9px] font-mono font-bold tracking-[0.2em] uppercase mb-5">
        PQC Migration Pathway — Structured Path to Quantum Resilience
      </p>
      <div className="flex items-center justify-between min-w-[400px] gap-1">
        {phases.map((phase, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-12 h-12 rounded-xl bg-[#C98F28]/10 border border-[#C98F28]/25 flex items-center justify-center">
                <span className="text-[#C98F28] font-mono font-bold text-[9px] tracking-wide">
                  {phase.abbr}
                </span>
              </div>
              <p className="text-[#C98F28]/70 text-[10px] font-mono text-center whitespace-pre-line leading-tight">
                {phase.label}
              </p>
            </div>
            {i < phases.length - 1 && (
              <div className="flex items-center gap-0.5 flex-shrink-0 mb-5">
                <div className="w-6 sm:w-10 h-px bg-[#C98F28]/30" />
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                  <path d="M0 0L8 5L0 10" fill="rgba(192,132,252,0.4)" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const QuantumSolutions = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const twoPracticeAreas = [
    {
      id: 1,
      title: 'Quantum App Development',
      description:
        'Design and implement quantum algorithms for optimisation, simulation, and ML use cases. Platform-agnostic development on IBM Quantum, IonQ, and Azure Quantum.',
    },
    {
      id: 2,
      title: 'PQC Migration',
      description:
        'Systematic transition from classical asymmetric cryptography (RSA, ECC) to NIST-standardised post-quantum algorithms — ML-KEM, ML-DSA, SLH-DSA — across all systems.',
    },
    {
      id: 3,
      title: 'Quantum Key Distribution',
      description:
        'Physics-based key exchange using QKD protocols — providing provably secure communication channels for high-value data transport in defence and financial sectors.',
    },
    {
      id: 4,
      title: 'Crypto Agility Assessment',
      description:
        'Full cryptographic inventory of your codebase, infrastructure, and supply chain — identifying all quantum-vulnerable assets and prioritising migration effort.',
    },
    {
      id: 5,
      title: 'Hybrid Classical-Quantum',
      description:
        "Variational quantum algorithms (VQE, QAOA) embedded in classical ML pipelines — delivering quantum-enhanced results on today's NISQ-era hardware.",
    },
    {
      id: 6,
      title: 'Compliance & Standards',
      description:
        'Align to NIST SP 800-208, CNSA 2.0, and emerging SEBI/RBI quantum-readiness guidance. Produce auditable evidence of PQC migration progress for regulators.',
    },
  ];

  const migrationPhases = [
    {
      id: 1,
      phase: 'PHASE 1',
      title: 'Cryptographic Discovery',
      description:
        'Automated scanning of codebases, certificates, and infrastructure to catalogue all quantum-vulnerable cryptographic assets.',
    },
    {
      id: 2,
      phase: 'PHASE 2',
      title: 'Risk Prioritisation',
      description:
        'Classify assets by sensitivity and exposure. Build a phased migration roadmap with clear business risk justification and resource requirements.',
    },
    {
      id: 3,
      phase: 'PHASE 3',
      title: 'Hybrid Migration',
      description:
        'Deploy hybrid classical/PQC implementations first — maintaining backward compatibility while adding quantum-resistant protection in parallel.',
    },
    {
      id: 4,
      phase: 'PHASE 4',
      title: 'Full PQC Deployment',
      description:
        'Complete migration to NIST FIPS 203/204/205 algorithms across all systems. Continuous monitoring for emerging vulnerabilities and standard updates.',
    },
  ];

  const targetSectors = [
    {
      id: 1,
      sector: 'DEFENCE & GOV',
      title: 'National Security',
      description:
        'Classified communications, weapons systems, and intelligence infrastructure — highest priority PQC migration.',
    },
    {
      id: 2,
      sector: 'BANKING & FINANCE',
      title: 'SWIFT & Payments',
      description:
        'Protect long-lived financial records from harvest-now-decrypt-later attacks. RBI quantum-readiness alignment.',
    },
    {
      id: 3,
      sector: 'HEALTHCARE',
      title: 'Patient Data Integrity',
      description:
        'Quantum-secure patient records and medical device communications — DPDP and HIPAA alignment pathways.',
    },
    {
      id: 4,
      sector: 'CRITICAL INFRA',
      title: 'Energy & Utilities',
      description:
        'Protect SCADA and OT networks from quantum-enabled supply chain attacks with PQC-hardened communications.',
    },
  ];

  const getDotSize = (dotIndex) => {
    const distance = Math.abs(activeIndex - dotIndex);
    if (distance === 0) return 16;
    if (distance === 1) return 12;
    if (distance === 2) return 8;
    return 5;
  };

  const handlePause = () => {
    if (sliderRef.current) sliderRef.current.slickPause();
  };
  const handlePlay = () => {
    if (sliderRef.current) sliderRef.current.slickPlay();
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    beforeChange: (_, next) => setActiveIndex(next),
    appendDots: (dots) => (
      <div className="mt-8">
        <ul className="flex justify-center items-center gap-1">{dots}</ul>
      </div>
    ),
    customPaging: (i) => {
      const size = getDotSize(i);
      return (
        <div className="flex items-center justify-center w-5 h-5">
          <div
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              background: i === activeIndex ? '#0C142D' : '#D9D9D9',
              transition: 'all 0.3s ease',
            }}
          />
        </div>
      );
    },
  };

  return (
    <div className="mb-0 md:mb-0">
      {/* ── Hero ── */}
      <section className="min-h-svh h-svh md:min-h-[92vh] md:h-[92vh] relative flex lg:flex-row flex-col items-center overflow-hidden section-block-padding">
        <Image
          src="/images/global/hero-bg.webp"
          alt="Quantum Solutions background"
          className="absolute -z-10 object-fill h-full w-full hidden md:block p-2"
          height={1000}
          width={1000}
          priority
        />
        <div className="absolute inset-0 -z-10 block md:hidden p-2">
          <div className="bg-hero-gradient w-full h-full rounded-[28px] relative overflow-hidden"></div>
        </div>

        <div className="container-padding w-full flex flex-col lg:flex-row gap-2 lg:gap-12 justify-between mt-[var(--mobile-navbar-gap)] lg:my-0 lg:py-0">
          {/* Left: 40% */}
          <div className="text-white w-full lg:w-[40%] flex flex-col justify-center order-1">
            <div className="flex items-center mb-10 md:mb-16">
              <div className="size-[40px] md:size-[60px] bg-[#60606059] backdrop-blur-lg flex-shrink-0 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="7"
                    stroke="#C98F28"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10.5"
                    stroke="#C98F28"
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                  />
                  <line
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="5"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="12"
                    y1="19"
                    x2="12"
                    y2="22"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="2"
                    y1="12"
                    x2="5"
                    y2="12"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="19"
                    y1="12"
                    x2="22"
                    y2="12"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-[#D2D2D2]" />
              <span className="text-white font-reddit-sans text-14 sm:text-16 md:text-20 font-semibold ml-3">
                Quantum · App Dev & PQC
              </span>
            </div>

            <h1 className="fl1-sep !text-white mb-6">
              Prepare for the Post-Quantum Era.
            </h1>

            <p className="fl3 !text-white leading-relaxed">
              UElement's Quantum practice delivers two converging capabilities:
              bespoke quantum application development that harnesses quantum
              advantage today, and Post Quantum Cryptography migration that
              shields your organisation against tomorrow's quantum-enabled
              threats.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {['App Dev', 'PQC Migration', 'QKD', 'NIST FIPS 205'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full border border-[#C98F28]/30 bg-[#C98F28]/10 text-[#C98F28]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: 60% */}
          <div className="w-full lg:w-[60%] order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
              <QuantumCircuitVisual />
            </div>
          </div>
        </div>

        {/* Mobile notch */}
        <svg
          className="md:hidden absolute pointer-events-none z-10"
          style={{ bottom: '8px', right: '8px' }}
          width="310"
          height="60"
          viewBox="0 0 302 59"
          fill="none"
        >
          <path
            d="M49.73 0.5H310.5V59.5H0.34C7.72 58.02 12.68 54.97 16.12 50.95C21.03 45.21 22.75 37.58 24.11 30.09C25.47 22.54 26.47 15.16 29.84 9.64C31.51 6.89 33.76 4.62 36.94 3.03C40.12 1.43 44.26 0.5 49.73 0.5Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </section>

      {/* ── Platform Overview ── */}
      <section className="bg-[#fcfcfc] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <div className="bg-[#f3f3f3] rounded-[18px] shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { val: '2030', label: 'Estimated quantum threat horizon' },
                { val: 'FIPS', label: 'NIST 203 / 204 / 205 compliant' },
                { val: 'QKD', label: 'Key distribution deployments' },
                { val: 'Now', label: 'Migration window — start today' },
              ].map((s) => (
                <div
                  key={s.val}
                  className="bg-[#0C142D] rounded-[18px] px-4 py-5 flex flex-col gap-1"
                >
                  <p className="font-reddit-sans font-bold text-[22px] md:text-[28px] text-[#C98F28] leading-none">
                    {s.val}
                  </p>
                  <p className="font-light font-reddit-sans text-12 md:text-14 text-[#9E9E9E]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Migration pathway */}
            <div className="mb-8">
              <MigrationPathway />
            </div>

            {/* Text */}
            <div>
              <h2 className="fl1 !mb-4 sm:!mb-6">
                Two Converging Capabilities — Quantum Advantage Today, Quantum
                Resilience Tomorrow
              </h2>
              <p className="fl3 leading-relaxed">
                UElement's Quantum practice spans both sides of the quantum
                divide: building with quantum computing today through
                platform-agnostic algorithm development on IBM Quantum, IonQ,
                and Azure Quantum — and hardening against it for tomorrow
                through systematic PQC migration to NIST FIPS 203/204/205
                standards. These two capabilities are complementary:
                organisations that begin their cryptographic inventory now are
                best positioned to adopt quantum-native capabilities as hardware
                matures. With harvest-now-decrypt-later attacks already active,
                the migration window is not theoretical — it is open today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two Practice Areas ── */}
      <section className="bg-[#fcfcfc] pb-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">Two Practice Areas</h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Quantum advantage and quantum resilience — distinct but
            complementary capabilities.
          </p>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {twoPracticeAreas.map((item) => (
              <div
                key={item.id}
                className="bg-[#f3f3f3] p-6 rounded-[18px] transition-shadow duration-300"
              >
                <h3 className="font-noto-sans font-semibold text-16 lg:text-18 text-black mb-3">
                  {item.title}
                </h3>
                <p className="fl3 !text-[#232223] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile slider */}
          <div
            className="md:hidden"
            onTouchStart={() => handlePause()}
            onTouchEnd={() => setTimeout(() => handlePlay(), 300)}
          >
            <Slider ref={sliderRef} {...sliderSettings}>
              {twoPracticeAreas.map((item) => (
                <div key={item.id}>
                  <div className="light-glass rounded-[18px] p-6 min-h-[200px] mb-4">
                    <h3 className="font-noto-sans font-semibold text-16 text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* ── PQC Migration Phases ── */}
      <section className="bg-[#f3f3f3] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">
            PQC Migration Pathway
          </h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            A structured, four-phase path to full quantum resilience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationPhases.map((phase) => (
              <div
                key={phase.id}
                className="bg-[#fcfcfc] rounded-[18px] p-6 "
              >
                <p className="font-noto-sans font-bold text-[10px] tracking-[0.15em] text-[#9B7025] uppercase mb-2">
                  {phase.phase}
                </p>
                <h3 className="font-noto-sans font-semibold text-16 text-black mb-3">
                  {phase.title}
                </h3>
                <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Target Sectors ── */}
      <section className="bg-[#fcfcfc] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">Target Sectors</h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Where quantum risk and quantum opportunity converge most urgently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetSectors.map((s) => (
              <div
                key={s.id}
                className="bg-[#f3f3f3] p-6 rounded-[18px] "
              >
                <p className="font-noto-sans font-bold text-[10px] tracking-[0.15em] text-[#9B7025] uppercase mb-2">
                  {s.sector}
                </p>
                <h3 className="font-noto-sans font-semibold text-14 lg:text-16 text-black mb-3">
                  {s.title}
                </h3>
                <p className="fl3 !text-[#232223] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumSolutions;
