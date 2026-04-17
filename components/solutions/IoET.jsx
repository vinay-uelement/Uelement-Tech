'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// ─── Hero right: Physical ↔ Digital Twin visualisation ───────────────────────
const TwinVisual = () => (
  <div className="w-full h-full flex items-center justify-center">
    <svg
      viewBox="0 0 620 440"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="tg" width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="rgba(0,229,255,0.06)"
            strokeWidth="0.5"
          />
        </pattern>
        <linearGradient id="ltr" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C98F28" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C98F28" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="rtl" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#C98F28" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C98F28" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect width="620" height="440" fill="url(#tg)" rx="16" />

      {/* Column labels — below badges */}
      <text
        x="90"
        y="68"
        fill="rgba(0,229,255,0.45)"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
        fontWeight="700"
        letterSpacing="2"
      >
        PHYSICAL
      </text>
      <text
        x="530"
        y="68"
        fill="rgba(0,229,255,0.45)"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
        fontWeight="700"
        letterSpacing="2"
      >
        DIGITAL TWIN
      </text>

      {/* Centre divider */}
      <line
        x1="310"
        y1="20"
        x2="310"
        y2="420"
        stroke="rgba(0,229,255,0.1)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      {/* Physical nodes */}
      {[120, 210, 320].map((cy, i) => (
        <g key={i}>
          <circle
            cx="90"
            cy={cy}
            r="18"
            fill="rgba(0,229,255,0.04)"
            stroke="rgba(0,229,255,0.15)"
            strokeWidth="1"
          />
          <circle
            cx="90"
            cy={cy}
            r="10"
            fill="rgba(0,229,255,0.15)"
            stroke="#C98F28"
            strokeWidth="1.5"
          />
          <circle cx="90" cy={cy} r="4" fill="#C98F28" />
        </g>
      ))}

      {/* Spokes — physical → centre */}
      {[120, 210, 320].map((cy, i) => (
        <line
          key={i}
          x1="108"
          y1={cy}
          x2="252"
          y2="213"
          stroke="url(#ltr)"
          strokeWidth="1.2"
          strokeDasharray="5 5"
        />
      ))}

      {/* Centre core */}
      <circle
        cx="310"
        cy="213"
        r="58"
        fill="rgba(0,229,255,0.03)"
        stroke="rgba(0,229,255,0.08)"
        strokeWidth="1"
      />
      <circle
        cx="310"
        cy="213"
        r="42"
        fill="rgba(0,229,255,0.06)"
        stroke="rgba(0,229,255,0.18)"
        strokeWidth="1.5"
      />
      <circle
        cx="310"
        cy="213"
        r="28"
        fill="rgba(0,229,255,0.1)"
        stroke="#C98F28"
        strokeWidth="1.8"
      />
      <text
        x="310"
        y="207"
        fill="#C98F28"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        fontWeight="800"
        letterSpacing="1"
      >
        IoET
      </text>
      <text
        x="310"
        y="221"
        fill="#C98F28"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        letterSpacing="1"
      >
        SYNC
      </text>

      {/* Spokes — centre → digital twin */}
      {[120, 210, 320].map((cy, i) => (
        <line
          key={i}
          x1="368"
          y1="213"
          x2="512"
          y2={cy}
          stroke="url(#rtl)"
          strokeWidth="1.2"
        />
      ))}

      {/* Digital twin nodes */}
      {[120, 210, 320].map((cy, i) => (
        <g key={i}>
          <rect
            x="514"
            y={cy - 14}
            width="28"
            height="28"
            rx="5"
            fill="rgba(0,229,255,0.08)"
            stroke="#C98F28"
            strokeWidth="1.5"
          />
          <rect
            x="519"
            y={cy - 9}
            width="6"
            height="6"
            rx="1"
            fill="rgba(0,229,255,0.35)"
          />
          <rect
            x="529"
            y={cy - 9}
            width="10"
            height="2"
            rx="1"
            fill="rgba(0,229,255,0.25)"
          />
          <rect
            x="519"
            y={cy - 1}
            width="20"
            height="2"
            rx="1"
            fill="rgba(0,229,255,0.2)"
          />
          <rect
            x="519"
            y={cy + 3}
            width="14"
            height="2"
            rx="1"
            fill="rgba(0,229,255,0.15)"
          />
        </g>
      ))}

      {/* Physical labels */}
      {['LiDAR', 'IMU', 'Thermal'].map((label, i) => (
        <text
          key={i}
          x="130"
          y={[124, 214, 324][i]}
          fill="rgba(0,229,255,0.35)"
          fontSize="8"
          fontFamily="monospace"
        >
          {label}
        </text>
      ))}

      {/* Digital twin labels */}
      {['Mfg Twin', 'Robot Twin', 'Smart City'].map((label, i) => (
        <text
          key={i}
          x="549"
          y={[124, 214, 324][i]}
          fill="rgba(0,229,255,0.35)"
          fontSize="8"
          fontFamily="monospace"
        >
          {label}
        </text>
      ))}

      {/* Floating badges — top-left */}
      <foreignObject x="8" y="4" width="105" height="48">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            background: 'rgba(12,20,45,0.85)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(201,143,40,0.2)',
            borderRadius: '8px',
            padding: '6px 10px',
          }}
        >
          <p
            style={{
              color: '#C98F28',
              fontWeight: 'bold',
              fontSize: '13px',
              lineHeight: 1,
            }}
          >
            10×
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '10px',
              marginTop: '3px',
            }}
          >
            Faster iteration
          </p>
        </div>
      </foreignObject>

      {/* Floating badges — top-right */}
      <foreignObject x="507" y="4" width="106" height="48">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            background: 'rgba(12,20,45,0.85)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(201,143,40,0.2)',
            borderRadius: '8px',
            padding: '6px 10px',
          }}
        >
          <p
            style={{
              color: '#C98F28',
              fontWeight: 'bold',
              fontSize: '13px',
              lineHeight: 1,
            }}
          >
            99.4%
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '10px',
              marginTop: '3px',
            }}
          >
            Sim accuracy
          </p>
        </div>
      </foreignObject>

      {/* Floating badges — bottom-left */}
      <foreignObject x="8" y="380" width="105" height="48">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            background: 'rgba(12,20,45,0.85)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(201,143,40,0.2)',
            borderRadius: '8px',
            padding: '6px 10px',
          }}
        >
          <p
            style={{
              color: '#C98F28',
              fontWeight: 'bold',
              fontSize: '13px',
              lineHeight: 1,
            }}
          >
            360°
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '10px',
              marginTop: '3px',
            }}
          >
            AR/VR ready
          </p>
        </div>
      </foreignObject>

      {/* Floating badges — bottom-right */}
      <foreignObject x="507" y="380" width="106" height="48">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            background: 'rgba(12,20,45,0.85)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(201,143,40,0.2)',
            borderRadius: '8px',
            padding: '6px 10px',
          }}
        >
          <p
            style={{
              color: '#C98F28',
              fontWeight: 'bold',
              fontSize: '13px',
              lineHeight: 1,
            }}
          >
            0
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '10px',
              marginTop: '3px',
            }}
          >
            Hardware risk
          </p>
        </div>
      </foreignObject>
    </svg>
  </div>
);

// ─── Platform section: pipeline flow ─────────────────────────────────────────
const PipelineVisual = () => {
  const steps = [
    { label: 'Physical\nSystem', abbr: 'PHY' },
    { label: 'IoET\nFeed', abbr: 'IoET' },
    { label: 'Digital\nTwin', abbr: 'DT' },
    { label: 'AI / Sim', abbr: 'AI' },
    { label: 'Analytics', abbr: 'ANL' },
    { label: 'Validated\nPolicy', abbr: 'POL' },
  ];
  return (
    <div className="w-full bg-hero-gradient rounded-[14px] p-6 sm:p-8 overflow-x-auto">
      <div className="flex items-center justify-between min-w-[520px] gap-1">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-12 h-12 rounded-xl bg-[#C98F28]/10 border border-[#C98F28]/25 flex items-center justify-center">
                <span className="text-[#C98F28] font-mono font-bold text-[10px] tracking-wide">
                  {step.abbr}
                </span>
              </div>
              <p className="text-[#C98F28]/70 text-[10px] font-mono text-center whitespace-pre-line leading-tight">
                {step.label}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center gap-0.5 flex-shrink-0 mb-5">
                <div className="w-4 sm:w-6 h-px bg-[#C98F28]/30" />
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                  <path d="M0 0L8 5L0 10" fill="rgba(0,229,255,0.4)" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ─── Component ───────────────────────────────────────────────────────────────
const IoETDigitalTwin = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('industrial');

  // ── 8 Business & Engineering Use Cases ──
  const capabilities = [
    {
      id: 1,
      title: 'Mobility Envelope Certification',
      description:
        'Establish operating boundaries across stair geometries, slope gradients, terrain classes, and surface conditions. Defines exactly where the robot is safe, marginal, or unsafe before any real-world deployment.',
    },
    {
      id: 2,
      title: 'Payload-Aware Gait Optimisation',
      description:
        'Simulate how backpacks and payloads affect centre of mass, joint loading, balance margin, and gait efficiency. Determines maximum safe payload and the required controller adjustments per terrain type.',
    },
    {
      id: 3,
      title: 'Failure Replay & Root-Cause Analysis',
      description:
        'Capture every failed run with full telemetry — foot contacts, CoM drift, torque spikes, slip events, and controller states — for repeatable debugging far faster than physical-only testing.',
    },
    {
      id: 4,
      title: 'Sim-to-Real Controller Tuning',
      description:
        'Refine locomotion and balance parameters in simulation and export validated settings directly to the physical robot. Reduces hardware wear and shortens controller development cycles significantly.',
    },
    {
      id: 5,
      title: 'Recovery & Disturbance Testing',
      description:
        'Validate robot response to missed steps, lateral pushes, slips, and transition instabilities across terrain classes — improving safety and robustness before any physical trials begin.',
    },
    {
      id: 6,
      title: 'AR/VR Mission Rehearsal',
      description:
        'Visualise test scenarios in Unity/Unreal for immersive operator familiarisation and stakeholder demonstrations. Useful for customer presentations, training, and human-in-the-loop testing.',
    },
    {
      id: 7,
      title: 'Synthetic Data Generation',
      description:
        'Generate large-scale randomised terrain and payload scenarios to test or train learned locomotion behaviours at scale — expanding coverage far beyond what is feasible in physical environments.',
    },
    {
      id: 8,
      title: 'Predictive Stress & Robot Health',
      description:
        'Estimate repeated stress, foot slippage frequency, joint overload, and high-risk contact patterns during aggressive manoeuvres to plan safer physical testing and support robot longevity.',
    },
  ];

  // ── Validated use cases — two groups ──
  const industrialCases = [
    {
      id: 1,
      sector: 'INDUSTRIAL INSPECTION',
      title: 'Hazardous Facility Inspection',
      description:
        'Oil & gas, nuclear, and chemical plant inspection using a semantic twin that models plant ontology and predicts fall risk on grating floors, wet surfaces, and narrow catwalks. Result: 50% fewer inspection-induced incidents, 3× faster survey cycles, and a full audit trail via knowledge graph.',
    },
    {
      id: 2,
      sector: 'DEFENCE',
      title: 'Perimeter Patrol & Border Security',
      description:
        'Autonomous perimeter patrol on rough and mixed terrain — day/night with varying payloads. Semantic context switches between patrol, alert, and extraction modes with PINN-optimised gait per terrain class. Result: continuous 8-hour autonomous patrol validated in twin.',
    },
    {
      id: 3,
      sector: 'SMART MANUFACTURING',
      title: 'Assembly Line Assistance',
      description:
        'Carrying components across multi-level factory floors with dynamic obstacles. Factory layout modelled as a semantic graph; rigid-body torque models govern arm and payload gait compensation. Result: zero hardware downtime in first 90 days, 40% faster integration vs. direct deployment.',
    },
    {
      id: 4,
      sector: 'SEARCH & RESCUE',
      title: 'Disaster Response Navigation',
      description:
        'Navigating collapsed building debris, uneven rubble, and soft ground carrying a 10 kg rescue kit. Semantic debris scene graph enables safe path planning; soft-ground deformation physics prevent leg sinkage. Result: full collapse scenario validated, control policy ready for real-world trials.',
    },
  ];

  const healthcareCases = [
    {
      id: 1,
      sector: 'HEALTHCARE',
      title: 'Hospital & Care Facility Delivery',
      description:
        'Medication and equipment delivery across multi-floor hospitals with lifts, ramps, and wet floors. Hospital layout modelled as a semantic ontology (HL7 FHIR compatible) with slip-prevention physics. Result: zero near-miss incidents in 200-hour simulation; gait policy certified before ward deployment.',
    },
    {
      id: 2,
      sector: 'LOGISTICS',
      title: 'Last-Mile Urban Delivery',
      description:
        'Urban delivery on uneven pavements, kerb drops, ramps, and staircases with a 15 kg payload. City block semantic map with PINN-modelled payload-adjusted CoM and dynamic stability constraints. Result: delivery policy tested across 50 synthetic urban scenarios; 3× gait tuning cycles saved.',
    },
    {
      id: 3,
      sector: 'RESEARCH & EDUCATION',
      title: 'University Robotics Lab',
      description:
        'Rapid experimentation with locomotion algorithms and control strategies. PINN surrogate model enables 100× faster experimentation than physical tests, with semantic logging for academic papers. Result: 80% reduction in physical test hours per paper; curriculum uploaded after twin validation.',
    },
    {
      id: 4,
      sector: 'DRDO / iDEX',
      title: 'Military Logistics & Casualty Extraction',
      description:
        'Joint R&D under Make-II / iDEX — autonomous military logistics and casualty extraction scenarios. Classified terrain maps as semantic assets; QKD-encrypted twin data with post-quantum cryptography. Result: proposal-ready PoC aligned with DRDO Make-II framework; CRL partnership accelerates fielding.',
    },
  ];

  const techStack = [
    {
      id: 1,
      title: 'NVIDIA Isaac Sim + PhysX 5',
      description:
        'GPU-accelerated rigid body and contact-rich physics simulation — the gold standard for humanoid and industrial robotics digital twins.',
    },
    {
      id: 2,
      title: 'ROS2 Native Bridge',
      description:
        'Full bidirectional ROS2 topic, action, and service integration — enabling control policies to transfer directly from twin to physical robot.',
    },
    {
      id: 3,
      title: 'Unreal / Unity VR Layer',
      description:
        'Optional immersive visualisation overlay for AR/VR headsets — enabling stakeholder review and operator training in virtual environments.',
    },
    {
      id: 4,
      title: 'UElement Biophysics Engine',
      description:
        'Thermodynamic state modelling applied to robotic actuator health, energy budgets, and predictive failure — a uniquely UElement capability.',
    },
  ];

  const activeCases =
    activeTab === 'industrial' ? industrialCases : healthcareCases;

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
      <section className="min-h-svh h-auto md:min-h-[92vh] md:h-auto relative flex xl:flex-row flex-col items-center overflow-visible section-block-padding">
        <Image
          src="/images/global/hero-bg.webp"
          alt="SaaS Platform background"
          className="absolute -z-10 object-fill h-full w-full hidden xl:block p-2"
          height={1000}
          width={1000}
          priority
        />
        <div className="absolute inset-0 -z-10 xl:hidden p-2">
          <div className="bg-hero-gradient w-full h-full rounded-[28px] relative overflow-hidden"></div>
        </div>

        <div className="container-padding w-full flex flex-col lg:flex-row gap-2 lg:gap-12 justify-between mt-[var(--mobile-navbar-gap)] lg:my-0 lg:py-0">
          {/* Left: 40% */}
          <div className="text-white w-full lg:w-[40%] flex flex-col justify-center order-1">
            <div className="flex items-center mb-10 md:mb-16">
              <div className="size-[40px] md:size-[60px] bg-[#60606059] backdrop-blur-lg flex-shrink-0 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="5"
                    cy="12"
                    r="2.5"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="19"
                    cy="7"
                    r="2.5"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="19"
                    cy="17"
                    r="2.5"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="7.5"
                    y1="11"
                    x2="16.5"
                    y2="7.8"
                    stroke="#C98F28"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="7.5"
                    y1="13"
                    x2="16.5"
                    y2="16.2"
                    stroke="#C98F28"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="1.2"
                    fill="#C98F28"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-[#D2D2D2]" />
              <span className="text-white font-reddit-sans text-14 sm:text-16 md:text-20 font-semibold ml-3">
                IoET · Enhanced Digital Twin
              </span>
            </div>

            <h1 className="fl1-sep !text-white mb-6">
              Your Physical World, Mirrored in Real Time.
            </h1>

            <p className="fl3 !text-white leading-relaxed">
              UElement's IoET Digital Twin platform fuses live sensor telemetry,
              quantum-secured data transport, and AI-driven physics simulation
              to create persistent, high-fidelity virtual replicas of any
              physical system — from factory floors to humanoid robots.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {['NVIDIA Isaac Sim', 'ROS2', 'PhysX 5', 'QKD Transport'].map(
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
              <TwinVisual />
            </div>
          </div>
        </div>

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { val: '10×', label: 'Faster scenario iteration' },
                { val: '0', label: 'Hardware risk during dev' },
                { val: '99.4%', label: 'Physics simulation accuracy' },
                { val: '360°', label: 'AR/VR visualisation ready' },
              ].map((s) => (
                <div
                  key={s.val}
                  className="bg-hero-gradient rounded-[14px] px-4 py-5 flex flex-col gap-1"
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
            <div className="mb-8">
              <PipelineVisual />
            </div>
            <div>
              <h2 className="fl1 !mb-4 sm:!mb-6">
                AI-Powered Digital Twin Infrastructure
              </h2>
              <p className="fl3 leading-relaxed">
                Built on NVIDIA Isaac Sim, ROS2, and UElement's proprietary
                sensor fusion middleware — with optional quantum-secured
                telemetry channels. Our platform ingests heterogeneous sensor
                streams (LiDAR, IMU, thermal, force/torque) and maintains a
                continuously updated, physics-accurate virtual replica of your
                operational environment. Every twin is protected by Zero Trust
                access controls and quantum-resistant encryption, making them
                deployable in the most security-sensitive industries — from
                defence to clinical biophysics. The result: a persistent, living
                mirror of your physical world that enables simulation,
                prediction, and validated policy testing without ever touching
                production hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business & Engineering Use Cases ── */}
      <section className="bg-[#fcfcfc] pb-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">
            Business & Engineering Use Cases
          </h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Eight validated simulation workflows — from certification to
            synthetic data generation.
          </p>

          {/* Desktop: 2×3 grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                className="bg-[#f3f3f3] p-6 rounded-[18px] transition-shadow duration-300"
              >
                <h3 className="font-noto-sans font-semibold text-16 lg:text-18 text-black mb-3">
                  {cap.title}
                </h3>
                <p className="fl3 !text-[#232223] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: slider */}
          <div
            className="md:hidden"
            onTouchStart={() => handlePause()}
            onTouchEnd={() => setTimeout(() => handlePlay(), 300)}
          >
            <Slider ref={sliderRef} {...sliderSettings}>
              {capabilities.map((cap) => (
                <div key={cap.id}>
                  <div className="light-glass rounded-[18px] p-6 min-h-[200px] mb-4">
                    <h3 className="font-noto-sans font-semibold text-16 text-black mb-3">
                      {cap.title}
                    </h3>
                    <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* ── Validated Use Cases ── */}
      <section className="bg-[#f3f3f3] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">Validated Use Cases</h2>

          {/* Tab switcher */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {[
              { key: 'industrial', label: 'Industrial & Defence' },
              { key: 'healthcare', label: 'Healthcare, Logistics & Research' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold font-noto-sans transition-all duration-200 border ${
                  activeTab === tab.key
                    ? 'bg-[#0C142D] text-white border-[#0C142D]'
                    : 'bg-white text-[#5F6D7E] border-[#d0d0d0] hover:border-[#0C142D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            {activeTab === 'industrial'
              ? 'Pre-validated in simulation — zero risk to the physical system before field deployment.'
              : 'Semantic contextualisation enables G1 to reason about its environment — not just navigate it.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeCases.map((app) => (
              <div key={app.id} className="bg-[#fcfcfc] rounded-[18px] p-6">
                <p className="font-noto-sans font-bold text-[10px] tracking-[0.15em] text-[#9B7025] uppercase mb-2">
                  {app.sector}
                </p>
                <h3 className="font-noto-sans font-semibold text-16 text-black mb-3">
                  {app.title}
                </h3>
                <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Stack ── */}
      <section className="bg-[#fcfcfc] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">Technology Stack</h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Built on proven simulation infrastructure — GPU-accelerated,
            ROS2-native, VR-ready.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.id} className="bg-[#f3f3f3] p-6 rounded-[18px]">
                <h3 className="font-noto-sans font-semibold text-14 lg:text-16 text-black mb-3">
                  {tech.title}
                </h3>
                <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoETDigitalTwin;
