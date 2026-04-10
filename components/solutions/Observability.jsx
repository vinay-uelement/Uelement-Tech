'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// ─── Hero right: 4-domain radial visual ──────────────────────────────────────
const ObsVisual = () => {
  const cx = 310;
  const cy = 220;
  const domains = [
    { label: 'SecOps', abbr: 'SEC', angle: -90, color: '#C98F28' },
    { label: 'CloudOps', abbr: 'CLD', angle: 0, color: '#C98F28' },
    { label: 'AIOps', abbr: 'AI', angle: 90, color: '#C98F28' },
    { label: 'FinOps', abbr: 'FIN', angle: 180, color: '#C98F28' },
  ];
  const r = 148;
  const getPos = (angle) => ({
    x: cx + r * Math.cos((angle * Math.PI) / 180),
    y: cy + r * Math.sin((angle * Math.PI) / 180),
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 620 440"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="og" width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="rgba(251,146,60,0.05)"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="oglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(251,146,60,0.12)" />
            <stop offset="100%" stopColor="rgba(251,146,60,0)" />
          </radialGradient>
        </defs>

        <rect width="620" height="440" fill="url(#og)" rx="16" />
        <ellipse cx={cx} cy={cy} rx="175" ry="175" fill="url(#oglow)" />

        {/* Orbit rings */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="rgba(251,146,60,0.08)"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
        <circle
          cx={cx}
          cy={cy}
          r={r * 0.65}
          stroke="rgba(251,146,60,0.06)"
          strokeWidth="1"
        />

        {/* Spoke lines */}
        {domains.map((d) => {
          const pos = getPos(d.angle);
          return (
            <line
              key={d.label}
              x1={cx}
              y1={cy}
              x2={pos.x}
              y2={pos.y}
              stroke="rgba(251,146,60,0.2)"
              strokeWidth="1.2"
            />
          );
        })}

        {/* Domain nodes */}
        {domains.map((d) => {
          const pos = getPos(d.angle);
          return (
            <g key={d.label}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r="30"
                fill="rgba(251,146,60,0.05)"
                stroke="rgba(251,146,60,0.2)"
                strokeWidth="1"
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r="20"
                fill="rgba(251,146,60,0.12)"
                stroke="#C98F28"
                strokeWidth="1.5"
              />
              <text
                x={pos.x}
                y={pos.y + 4}
                fill="#C98F28"
                fontSize="8"
                fontFamily="monospace"
                textAnchor="middle"
                fontWeight="800"
                letterSpacing="0.5"
              >
                {d.abbr}
              </text>
              {/* Domain label outside */}
              <text
                x={pos.x + (pos.x > cx ? 36 : pos.x < cx ? -36 : 0)}
                y={pos.y + (pos.y > cy ? 36 : pos.y < cy ? -26 : 4)}
                fill="rgba(251,146,60,0.5)"
                fontSize="8"
                fontFamily="monospace"
                textAnchor={
                  pos.x > cx ? 'start' : pos.x < cx ? 'end' : 'middle'
                }
                fontWeight="600"
                letterSpacing="1"
              >
                {d.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Mid-ring telemetry dots */}
        {[45, 135, 225, 315].map((angle, i) => {
          const mr = r * 0.65;
          const mx = cx + mr * Math.cos((angle * Math.PI) / 180);
          const my = cy + mr * Math.sin((angle * Math.PI) / 180);
          return (
            <circle
              key={i}
              cx={mx}
              cy={my}
              r="3"
              fill="#C98F28"
              opacity="0.5"
            />
          );
        })}

        {/* Central intelligence core */}
        <circle
          cx={cx}
          cy={cy}
          r="50"
          fill="rgba(251,146,60,0.06)"
          stroke="rgba(251,146,60,0.15)"
          strokeWidth="1"
        />
        <circle
          cx={cx}
          cy={cy}
          r="36"
          fill="rgba(251,146,60,0.1)"
          stroke="#C98F28"
          strokeWidth="1.8"
        />
        <text
          x={cx}
          y={cy - 6}
          fill="#C98F28"
          fontSize="7"
          fontFamily="monospace"
          textAnchor="middle"
          fontWeight="800"
          letterSpacing="1"
        >
          INTEL
        </text>
        <text
          x={cx}
          y={cy + 6}
          fill="#C98F28"
          fontSize="7"
          fontFamily="monospace"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          CORE
        </text>
        <text
          x={cx}
          y={cy + 16}
          fill="rgba(251,146,60,0.5)"
          fontSize="6"
          fontFamily="monospace"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          OTEL
        </text>

        {/* Corner labels */}
        <text
          x="16"
          y="26"
          fill="rgba(251,146,60,0.3)"
          fontSize="8"
          fontFamily="monospace"
          fontWeight="700"
          letterSpacing="1.5"
        >
          UNIFIED OBSERVABILITY
        </text>
        <text
          x="604"
          y="420"
          fill="rgba(251,146,60,0.3)"
          fontSize="8"
          fontFamily="monospace"
          textAnchor="end"
          letterSpacing="1"
        >
          4-IN-1 OPS DOMAINS
        </text>
      </svg>

      {/* Floating badges */}
      <div className="absolute top-3 left-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
        <p className="text-[#C98F28] font-bold text-sm leading-none">92%</p>
        <p className="text-white/50 text-xs mt-0.5">MTTD reduction</p>
      </div>
      <div className="absolute top-3 right-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
        <p className="text-[#C98F28] font-bold text-sm leading-none">&lt;60s</p>
        <p className="text-white/50 text-xs mt-0.5">Threat detection</p>
      </div>
      <div className="absolute bottom-3 left-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
        <p className="text-[#C98F28] font-bold text-sm leading-none">40%</p>
        <p className="text-white/50 text-xs mt-0.5">Cloud cost savings</p>
      </div>
      <div className="absolute bottom-3 right-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
        <p className="text-[#C98F28] font-bold text-sm leading-none">4-in-1</p>
        <p className="text-white/50 text-xs mt-0.5">Ops domains</p>
      </div>
    </div>
  );
};

// ─── Data ingestion pipeline visual ──────────────────────────────────────────
const TelemetryPipeline = () => {
  const sources = ['Metrics', 'Logs', 'Traces', 'Events', 'Cost'];
  const outputs = ['SecOps', 'CloudOps', 'AIOps', 'FinOps'];
  return (
    <div className="w-full bg-[#0C142D] rounded-[4px] p-6 sm:p-8 overflow-x-auto">
      <p className="text-[#C98F28]/50 text-[9px] font-mono font-bold tracking-[0.2em] uppercase mb-5">
        Unified Telemetry Pipeline — Single Data Model & Correlation Engine
      </p>
      <div className="flex items-center gap-3 min-w-[520px]">
        {/* Sources */}
        <div className="flex flex-col gap-2 flex-shrink-0">
          {sources.map((s) => (
            <div
              key={s}
              className="bg-[#C98F28]/10 border border-[#C98F28]/20 rounded-lg px-3 py-1.5 flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#C98F28] opacity-70" />
              <span className="text-[#C98F28]/70 font-mono text-[9px] font-bold tracking-wide">
                {s.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        {/* Arrow in */}
        <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-0.5">
              <div className="w-8 sm:w-12 h-px bg-[#C98F28]/25" />
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path d="M0 0L6 4L0 8" fill="rgba(251,146,60,0.35)" />
              </svg>
            </div>
          ))}
        </div>

        {/* Core */}
        <div className="flex-shrink-0 flex flex-col items-center gap-1">
          <div className="w-16 h-16 rounded-xl bg-[#C98F28]/15 border border-[#C98F28]/35 flex flex-col items-center justify-center">
            <span className="text-[#C98F28] font-mono font-bold text-[9px] tracking-wide">
              INTEL
            </span>
            <span className="text-[#C98F28] font-mono font-bold text-[9px] tracking-wide">
              CORE
            </span>
          </div>
          <span className="text-[#C98F28]/40 font-mono text-[8px]">OTEL</span>
        </div>

        {/* Arrow out */}
        <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-0.5">
              <div className="w-8 sm:w-12 h-px bg-[#C98F28]/25" />
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path d="M0 0L6 4L0 8" fill="rgba(251,146,60,0.35)" />
              </svg>
            </div>
          ))}
        </div>

        {/* Outputs */}
        <div className="flex flex-col gap-2 flex-shrink-0">
          {outputs.map((o) => (
            <div
              key={o}
              className="bg-[#C98F28]/15 border border-[#C98F28]/30 rounded-lg px-3 py-1.5 flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#C98F28]" />
              <span className="text-[#C98F28] font-mono text-[9px] font-bold tracking-wide">
                {o.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const Observability = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const fourPillars = [
    {
      id: 1,
      title: 'SecOps',
      description:
        'Unified threat detection, investigation, and response. SIEM, SOAR, and threat intelligence correlation — identify and contain threats before they escalate into incidents.',
    },
    {
      id: 2,
      title: 'CloudOps',
      description:
        'Infrastructure health and performance observability across multi-cloud environments. Service dependency mapping, SLO tracking, and automated runbook execution.',
    },
    {
      id: 3,
      title: 'AIOps',
      description:
        'Machine learning–driven event correlation and noise reduction. Automatically surface root causes, predict incidents before they occur, and accelerate mean time to resolution.',
    },
    {
      id: 4,
      title: 'FinOps',
      description:
        'Real-time cloud cost attribution, anomaly detection, and optimisation recommendations. Tag governance, showback/chargeback, and committed use discount management.',
    },
    {
      id: 5,
      title: 'Unified Data Plane',
      description:
        'A single telemetry pipeline ingesting metrics, logs, traces, events, and cost data — enabling cross-domain correlation that individual point solutions can never achieve.',
    },
    {
      id: 6,
      title: 'Automated Response',
      description:
        'Pre-built and custom runbooks triggered automatically on alert conditions — spanning security isolation, resource scaling, cost guardrails, and stakeholder notification.',
    },
  ];

  const architecture = [
    {
      id: 1,
      title: 'OpenTelemetry Native',
      description:
        'Vendor-neutral data ingestion using OTEL standards — integrate with any cloud, any agent, any existing observability tool without lock-in.',
    },
    {
      id: 2,
      title: 'Real-Time Stream Processing',
      description:
        'Sub-second correlation across billions of events per day. Pattern detection engines that identify complex attack chains and failure cascades instantly.',
    },
    {
      id: 3,
      title: 'AI-Assisted Triage',
      description:
        'LLM-powered incident summaries, suggested remediation steps, and automated impact analysis — dramatically reducing analyst cognitive load.',
    },
    {
      id: 4,
      title: 'Compliance Reporting',
      description:
        'Out-of-the-box dashboards for SOC 2, ISO 27001, NIST, PCI-DSS, and DPDP — continuous compliance evidence collection and audit-ready reporting.',
    },
  ];

  const deploymentScenarios = [
    {
      id: 1,
      sector: 'ENTERPRISE SOC',
      title: 'Threat Operations',
      description:
        'Consolidate SIEM, EDR, and threat intel into an AI-augmented security operations workflow.',
    },
    {
      id: 2,
      sector: 'PLATFORM ENG',
      title: 'Site Reliability',
      description:
        'SLO management, error budget tracking, and automated runbooks to maintain uptime at scale.',
    },
    {
      id: 3,
      sector: 'CLOUD CENTRE',
      title: 'Cost Governance',
      description:
        'FinOps practice enablement with anomaly detection, rightsizing, and commitment management.',
    },
    {
      id: 4,
      sector: 'IT OPS',
      title: 'Unified NOC',
      description:
        'Single operational console for hybrid infrastructure — on-prem, cloud, and edge — with AI noise reduction.',
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
          alt="Observability background"
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
                    r="9"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#C98F28"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  <circle cx="12" cy="12" r="2" fill="#C98F28" />
                  <line
                    x1="12"
                    y1="3"
                    x2="12"
                    y2="6"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="12"
                    y1="18"
                    x2="12"
                    y2="21"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="6"
                    y2="12"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="18"
                    y1="12"
                    x2="21"
                    y2="12"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-[#D2D2D2]" />
              <span className="text-white font-reddit-sans text-14 sm:text-16 md:text-20 font-semibold ml-3">
                Observability Suite
              </span>
            </div>

            <h1 className="fl1-sep !text-white mb-6">
              See Everything. Act with Intelligence.
            </h1>

            <p className="fl3 !text-white leading-relaxed">
              UElement's Observability Suite brings together security
              operations, cloud operations, AI-driven insights, and financial
              operations into a single, unified intelligence platform —
              transforming reactive incident management into proactive
              operational excellence.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {['SecOps', 'CloudOps', 'AIOps', 'FinOps'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full border border-[#C98F28]/30 bg-[#C98F28]/10 text-[#C98F28]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: 60% */}
          <div className="w-full lg:w-[60%] order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
              <ObsVisual />
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
                { val: '92%', label: 'MTTD reduction with AIOps' },
                { val: '<60s', label: 'Threat detection latency' },
                { val: '40%', label: 'Cloud cost savings' },
                { val: '4-in-1', label: 'Ops domains unified' },
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

            {/* Pipeline visual */}
            <div className="mb-8">
              <TelemetryPipeline />
            </div>

            {/* Text */}
            <div>
              <h2 className="fl1 !mb-4 sm:!mb-6">
                Four Specialised Operations Domains, One Intelligence Platform
              </h2>
              <p className="fl3 leading-relaxed">
                UElement's Observability Suite unifies SecOps, CloudOps, AIOps,
                and FinOps under a single data model and correlation engine —
                built on OpenTelemetry standards so it integrates with any
                cloud, any agent, and any existing tooling without vendor
                lock-in. A single telemetry pipeline ingests metrics, logs,
                traces, events, and cost data, enabling cross-domain correlation
                that individual point solutions can never achieve. LLM-powered
                incident summaries, automated runbooks, and AI noise reduction
                transform your operations team from reactive firefighters into
                proactive intelligence operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="bg-[#fcfcfc] pb-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">Four Pillars</h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Complete operational coverage across every domain.
          </p>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fourPillars.map((cap) => (
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

          {/* Mobile slider */}
          <div
            className="md:hidden"
            onTouchStart={() => handlePause()}
            onTouchEnd={() => setTimeout(() => handlePlay(), 300)}
          >
            <Slider ref={sliderRef} {...sliderSettings}>
              {fourPillars.map((cap) => (
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

      {/* ── Deployment Scenarios ── */}
      <section className="bg-[#f3f3f3] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">Deployment Scenarios</h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Operational intelligence for every context — SOC, SRE, FinOps, and
            NOC.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentScenarios.map((d) => (
              <div key={d.id} className="bg-[#fcfcfc] rounded-[18px] p-6 ">
                <p className="font-noto-sans font-bold text-[10px] tracking-[0.15em] text-[#9B7025] uppercase mb-2">
                  {d.sector}
                </p>
                <h3 className="font-noto-sans font-semibold text-16 text-black mb-3">
                  {d.title}
                </h3>
                <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Architecture ── */}
      <section className="bg-[#fcfcfc] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">
            Platform Architecture
          </h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Built for the modern hybrid stack — OpenTelemetry native, AI-first,
            compliance-ready.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecture.map((a) => (
              <div key={a.id} className="bg-[#f3f3f3] p-6 rounded-[18px] ">
                <h3 className="font-noto-sans font-semibold text-14 lg:text-16 text-black mb-3">
                  {a.title}
                </h3>
                <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Observability;
