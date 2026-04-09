'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// ─── Hero right: Physical ↔ Digital Twin visualisation ───────────────────────
const TwinVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
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
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="rtl" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Grid bg */}
      <rect width="620" height="440" fill="url(#tg)" rx="16" />

      {/* Labels */}
      <text
        x="90"
        y="32"
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
        y="32"
        fill="rgba(0,229,255,0.45)"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
        fontWeight="700"
        letterSpacing="2"
      >
        DIGITAL TWIN
      </text>

      {/* Divider */}
      <line
        x1="310"
        y1="20"
        x2="310"
        y2="420"
        stroke="rgba(0,229,255,0.1)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      {/* ── Physical nodes (left) ── */}
      {[80, 165, 255, 345].map((cy, i) => (
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
            stroke="#00e5ff"
            strokeWidth="1.5"
          />
          <circle cx="90" cy={cy} r="4" fill="#00e5ff" />
        </g>
      ))}

      {/* ── Feed lines physical → hub ── */}
      {[80, 165, 255, 345].map((cy, i) => (
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

      {/* ── Central IoET hub ── */}
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
        stroke="#00e5ff"
        strokeWidth="1.8"
      />
      <text
        x="310"
        y="207"
        fill="#00e5ff"
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
        fill="#00e5ff"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        letterSpacing="1"
      >
        SYNC
      </text>

      {/* ── Feed lines hub → twin ── */}
      {[80, 165, 255, 345].map((cy, i) => (
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

      {/* ── Digital twin nodes (right, wireframe) ── */}
      {[80, 165, 255, 345].map((cy, i) => (
        <g key={i}>
          <rect
            x="514"
            y={cy - 14}
            width="28"
            height="28"
            rx="5"
            fill="rgba(0,229,255,0.08)"
            stroke="#00e5ff"
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

      {/* Sensor type labels */}
      {['LiDAR', 'IMU', 'Thermal', 'Force/T'].map((label, i) => (
        <text
          key={i}
          x="130"
          y={[84, 169, 259, 349][i]}
          fill="rgba(0,229,255,0.35)"
          fontSize="8"
          fontFamily="monospace"
        >
          {label}
        </text>
      ))}
      {['Mfg Twin', 'Robot Twin', 'Smart City', 'Biophysics'].map(
        (label, i) => (
          <text
            key={i}
            x="549"
            y={[84, 169, 259, 349][i]}
            fill="rgba(0,229,255,0.35)"
            fontSize="8"
            fontFamily="monospace"
          >
            {label}
          </text>
        )
      )}
    </svg>

    {/* Floating stat badges */}
    <div className="absolute top-3 left-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#00e5ff]/20 rounded-lg px-3 py-2">
      <p className="text-[#00e5ff] font-bold text-sm leading-none">10×</p>
      <p className="text-white/50 text-xs mt-0.5">Faster iteration</p>
    </div>
    <div className="absolute top-3 right-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#00e5ff]/20 rounded-lg px-3 py-2">
      <p className="text-[#00e5ff] font-bold text-sm leading-none">99.4%</p>
      <p className="text-white/50 text-xs mt-0.5">Sim accuracy</p>
    </div>
    <div className="absolute bottom-3 left-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#00e5ff]/20 rounded-lg px-3 py-2">
      <p className="text-[#00e5ff] font-bold text-sm leading-none">360°</p>
      <p className="text-white/50 text-xs mt-0.5">AR/VR ready</p>
    </div>
    <div className="absolute bottom-3 right-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#00e5ff]/20 rounded-lg px-3 py-2">
      <p className="text-[#00e5ff] font-bold text-sm leading-none">0</p>
      <p className="text-white/50 text-xs mt-0.5">Hardware risk</p>
    </div>
  </div>
);

// ─── Platform section: pipeline flow ────────────────────────────────────────
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
    <div className="w-full bg-[#0C142D] rounded-[4px] p-6 sm:p-8 overflow-x-auto">
      <div className="flex items-center justify-between min-w-[520px] gap-1">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-12 h-12 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 flex items-center justify-center">
                <span className="text-[#00e5ff] font-mono font-bold text-[10px] tracking-wide">
                  {step.abbr}
                </span>
              </div>
              <p className="text-[#00e5ff]/70 text-[10px] font-mono text-center whitespace-pre-line leading-tight">
                {step.label}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center gap-0.5 flex-shrink-0 mb-5">
                <div className="w-4 sm:w-6 h-px bg-[#00e5ff]/30" />
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

  const capabilities = [
    {
      id: 1,
      title: 'Manufacturing Twins',
      description:
        'Mirror production lines in real time. Detect anomalies before they become failures. Simulate shift changes, new equipment, or process redesigns without downtime.',
    },
    {
      id: 2,
      title: 'Humanoid Robot Twins',
      description:
        'Full URDF model ingestion with kinematic chain simulation. Test advanced locomotion — stairs, slopes, uneven terrain, payload scenarios — before physical deployment.',
    },
    {
      id: 3,
      title: 'Smart City Infrastructure',
      description:
        'Live replicas of traffic corridors, utility grids, and public safety networks. Run policy simulations and crisis response modelling for civic planning bodies.',
    },
    {
      id: 4,
      title: 'Real-Time Sensor Fusion',
      description:
        'Aggregate data from heterogeneous IoT sensor networks — LiDAR, IMU, thermal, force/torque — into a unified, timestamped simulation state vector.',
    },
    {
      id: 5,
      title: 'AI Anomaly Detection',
      description:
        'Edge AI inference engines continuously compare twin state to physical state — surfacing drift, anomalies, and predictive failure signals in real time.',
    },
    {
      id: 6,
      title: 'Quantum-Secured Transport',
      description:
        'Telemetry streams secured with QKD protocols and post-quantum encryption — ensuring twin data integrity in high-security and defence deployments.',
    },
  ];

  const industryApplications = [
    {
      id: 1,
      sector: 'DEFENCE',
      title: 'Humanoid Robotics',
      description:
        'Pre-mission rehearsal for autonomous platforms in contested environments. BEL / DRDO alignment.',
    },
    {
      id: 2,
      sector: 'MANUFACTURING',
      title: 'Industry 4.0',
      description:
        'OEE optimisation, predictive maintenance, and process simulation for discrete and process industries.',
    },
    {
      id: 3,
      sector: 'SMART CITIES',
      title: 'Urban Planning',
      description:
        'Civic infrastructure modelling for traffic, energy, and emergency response scenario planning.',
    },
    {
      id: 4,
      sector: 'CLINICAL',
      title: 'Biophysics Twins',
      description:
        'Patient-level physiological digital twins for treatment simulation and diagnostics augmentation.',
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
  const handleTouchStart = () => handlePause();
  const handleTouchEnd = () => setTimeout(() => handlePlay(), 300);

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
      <section className="min-h-screen relative flex lg:flex-row flex-col items-center overflow-hidden section-block-padding">
        {/* Desktop background */}
        <Image
          src="/images/global/hero-bg.webp"
          alt="IoET Digital Twin background"
          className="absolute -z-10 object-fill h-full w-full hidden md:block p-2"
          height={1000}
          width={1000}
          priority
        />

        {/* Mobile background */}
        <div className="absolute inset-0 -z-10 block md:hidden p-2">
          <div className="bg-hero-gradient w-full h-full rounded-[28px] relative overflow-hidden"></div>
        </div>

        <div className="container-padding w-full flex flex-col lg:flex-row gap-2 lg:gap-12 justify-between mt-[var(--mobile-navbar-gap)] lg:my-0 lg:py-0">
          {/* Left: 40% */}
          <div className="text-white w-full lg:w-[40%] flex flex-col justify-center order-1">
            {/* Icon + Label — inline SVG icon, no file needed */}
            <div className="flex items-center mb-10 md:mb-16">
              <div className="size-[40px] md:size-[60px] bg-[#60606059] backdrop-blur-lg flex-shrink-0 rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="5"
                    cy="12"
                    r="2.5"
                    stroke="#00e5ff"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="19"
                    cy="7"
                    r="2.5"
                    stroke="#00e5ff"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="19"
                    cy="17"
                    r="2.5"
                    stroke="#00e5ff"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="7.5"
                    y1="11"
                    x2="16.5"
                    y2="7.8"
                    stroke="#00e5ff"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="7.5"
                    y1="13"
                    x2="16.5"
                    y2="16.2"
                    stroke="#00e5ff"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="1.2"
                    fill="#00e5ff"
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

            {/* Tech stack badge strip */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['NVIDIA Isaac Sim', 'ROS2', 'PhysX 5', 'QKD Transport'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 text-[#00e5ff]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: 60% — SVG visual */}
          <div className="w-full lg:w-[60%] order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
              <TwinVisual />
            </div>
          </div>
        </div>

        {/* Notch — mobile only */}
        <svg
          className="md:hidden absolute pointer-events-none z-10"
          style={{ bottom: '8px', right: '8px' }}
          width="310"
          height="60"
          viewBox="0 0 302 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
                { val: '10×', label: 'Faster scenario iteration' },
                { val: '0', label: 'Hardware risk during dev' },
                { val: '99.4%', label: 'Physics simulation accuracy' },
                { val: '360°', label: 'AR/VR visualisation ready' },
              ].map((s) => (
                <div
                  key={s.val}
                  className="bg-[#0C142D] rounded-[18px] px-4 py-5 flex flex-col gap-1"
                >
                  <p className="font-reddit-sans font-bold text-[22px] md:text-[28px] text-[#00e5ff] leading-none">
                    {s.val}
                  </p>
                  <p className="font-light font-reddit-sans text-12 md:text-14 text-[#9E9E9E]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Pipeline visual */}
            <div className="mb-8">
              <PipelineVisual />
            </div>

            {/* Text */}
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

      {/* ── Core Capabilities ── */}
      <section className="bg-[#fcfcfc] pb-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">Core Capabilities</h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            What the platform delivers — built on proven simulation
            infrastructure.
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
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
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

      {/* ── Industry Applications ── */}
      <section className="bg-[#f3f3f3] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">
            Industry Applications
          </h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Deployed across sectors where simulation accuracy and data security
            are non-negotiable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryApplications.map((app) => (
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
