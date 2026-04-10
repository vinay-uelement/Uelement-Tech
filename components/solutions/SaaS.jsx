'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// ─── Hero right: SaaS hub-and-spoke visual ───────────────────────────────────
const SaaSHubVisual = () => {
  const apps = [
    { label: 'Salesforce', angle: 0 },
    { label: 'Slack', angle: 60 },
    { label: 'Jira', angle: 120 },
    { label: 'Microsoft', angle: 180 },
    { label: 'AWS', angle: 240 },
    { label: 'Okta', angle: 300 },
  ];

  const cx = 310;
  const cy = 220;
  const r = 155;

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
          <pattern id="sg" width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="rgba(147,197,253,0.05)"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(96,165,250,0.15)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </radialGradient>
        </defs>

        <rect width="620" height="440" fill="url(#sg)" rx="16" />
        <ellipse cx={cx} cy={cy} rx="170" ry="170" fill="url(#glow)" />

        {/* Orbit ring */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="rgba(147,197,253,0.1)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Spoke lines */}
        {apps.map((app) => {
          const pos = getPos(app.angle);
          return (
            <line
              key={app.label}
              x1={cx}
              y1={cy}
              x2={pos.x}
              y2={pos.y}
              stroke="rgba(147,197,253,0.25)"
              strokeWidth="1"
            />
          );
        })}

        {/* App nodes */}
        {apps.map((app) => {
          const pos = getPos(app.angle);
          return (
            <g key={app.label}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r="26"
                fill="rgba(96,165,250,0.06)"
                stroke="rgba(147,197,253,0.25)"
                strokeWidth="1"
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r="16"
                fill="rgba(96,165,250,0.12)"
                stroke="#C98F28"
                strokeWidth="1.5"
              />
              <text
                x={pos.x}
                y={pos.y + 3}
                fill="#C98F28"
                fontSize="6.5"
                fontFamily="monospace"
                textAnchor="middle"
                fontWeight="700"
                letterSpacing="0.5"
              >
                {app.label.toUpperCase().slice(0, 5)}
              </text>
            </g>
          );
        })}

        {/* Central platform hexagon */}
        <polygon
          points={`${cx},${cy - 38} ${cx + 33},${cy - 19} ${cx + 33},${cy + 19} ${cx},${cy + 38} ${cx - 33},${cy + 19} ${cx - 33},${cy - 19}`}
          fill="rgba(96,165,250,0.1)"
          stroke="#C98F28"
          strokeWidth="1.8"
        />
        <polygon
          points={`${cx},${cy - 28} ${cx + 24},${cy - 14} ${cx + 24},${cy + 14} ${cx},${cy + 28} ${cx - 24},${cy + 14} ${cx - 24},${cy - 14}`}
          fill="rgba(96,165,250,0.18)"
          stroke="#C98F28"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <text
          x={cx}
          y={cy - 5}
          fill="#C98F28"
          fontSize="7"
          fontFamily="monospace"
          textAnchor="middle"
          fontWeight="800"
          letterSpacing="1"
        >
          UElement
        </text>
        <text
          x={cx}
          y={cy + 8}
          fill="#C98F28"
          fontSize="6.5"
          fontFamily="monospace"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          SaaS
        </text>

        {/* Data flow pulses on spokes (small dots) */}
        {apps.map((app, i) => {
          const pos = getPos(app.angle);
          const mx = cx + (pos.x - cx) * 0.55;
          const my = cy + (pos.y - cy) * 0.55;
          return (
            <circle
              key={i}
              cx={mx}
              cy={my}
              r="2.5"
              fill="#C98F28"
              opacity="0.6"
            />
          );
        })}

        {/* Corner labels */}
        <text
          x="16"
          y="26"
          fill="rgba(147,197,253,0.35)"
          fontSize="8"
          fontFamily="monospace"
          fontWeight="700"
          letterSpacing="1.5"
        >
          MULTI-VENDOR
        </text>
        <text
          x="16"
          y="40"
          fill="rgba(147,197,253,0.35)"
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="1"
        >
          SaaS ESTATE
        </text>
        <text
          x="500"
          y="410"
          fill="rgba(147,197,253,0.35)"
          fontSize="8"
          fontFamily="monospace"
          textAnchor="end"
          letterSpacing="1"
        >
          UNIFIED CONTROL PLANE
        </text>
      </svg>

      {/* Floating badges */}
      <div className="absolute top-3 left-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
        <p className="text-[#C98F28] font-bold text-sm leading-none">35%</p>
        <p className="text-white/50 text-xs mt-0.5">Cost reduction</p>
      </div>
      <div className="absolute top-3 right-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
        <p className="text-[#C98F28] font-bold text-sm leading-none">500+</p>
        <p className="text-white/50 text-xs mt-0.5">Integrations</p>
      </div>
      <div className="absolute bottom-3 left-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
        <p className="text-[#C98F28] font-bold text-sm leading-none">100%</p>
        <p className="text-white/50 text-xs mt-0.5">License visibility</p>
      </div>
      <div className="absolute bottom-3 right-3 bg-[#0C142D]/80 backdrop-blur-sm border border-[#C98F28]/20 rounded-lg px-3 py-2">
        <p className="text-[#C98F28] font-bold text-sm leading-none">
          &lt;5 min
        </p>
        <p className="text-white/50 text-xs mt-0.5">App onboarding</p>
      </div>
    </div>
  );
};

// ─── Lifecycle flow visual ────────────────────────────────────────────────────
const LifecycleVisual = () => {
  const steps = [
    { abbr: 'DISC', label: 'Discovery' },
    { abbr: 'GOV', label: 'Governance' },
    { abbr: 'OPT', label: 'Optimisation' },
    { abbr: 'SEC', label: 'Compliance' },
    { abbr: 'RENEW', label: 'Renewal' },
  ];
  return (
    <div className="w-full bg-[#0C142D] rounded-[4px] p-6 sm:p-8 overflow-x-auto">
      <p className="text-[#C98F28]/50 text-[9px] font-mono font-bold tracking-[0.2em] uppercase mb-5">
        Full-Lifecycle Visibility — Discovery to Decommission
      </p>
      <div className="flex items-center justify-between min-w-[400px] gap-1">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-12 h-12 rounded-xl bg-[#C98F28]/10 border border-[#C98F28]/25 flex items-center justify-center">
                <span className="text-[#C98F28] font-mono font-bold text-[9px] tracking-wide">
                  {step.abbr}
                </span>
              </div>
              <p className="text-[#C98F28]/70 text-[10px] font-mono text-center leading-tight">
                {step.label}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center gap-0.5 flex-shrink-0 mb-5">
                <div className="w-4 sm:w-8 h-px bg-[#C98F28]/30" />
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                  <path d="M0 0L8 5L0 10" fill="rgba(147,197,253,0.4)" />
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
const SaaSPlatform = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const capabilities = [
    {
      id: 1,
      title: 'Application Discovery',
      description:
        'Automatically discover all sanctioned and shadow SaaS applications across your organisation using SSO, browser, and network-layer detection signals.',
    },
    {
      id: 2,
      title: 'License Governance',
      description:
        'Track every seat, entitlement, and renewal date. Identify unused licenses, over-provisioned tiers, and renewal risk across all vendors in one dashboard.',
    },
    {
      id: 3,
      title: 'Cost Optimisation',
      description:
        'AI-driven spend analysis with rightsizing recommendations, duplicate application detection, and contract negotiation intelligence to reduce SaaS overspend.',
    },
    {
      id: 4,
      title: 'Security & Compliance',
      description:
        'Enforce data residency, SOC 2, ISO 27001, and GDPR controls across your SaaS portfolio. Get alerted to policy violations and risky integrations instantly.',
    },
    {
      id: 5,
      title: 'Access & Identity',
      description:
        'Centralise user provisioning and deprovisioning across all SaaS tools. Enforce least-privilege access policies and detect orphaned accounts automatically.',
    },
    {
      id: 6,
      title: 'Vendor Renewal Intelligence',
      description:
        'Proactive renewal calendar with usage-backed negotiation data. Know exactly what you are paying, what you are using, and what leverage you have before every renewal.',
    },
  ];

  const useCases = [
    {
      id: 1,
      sector: 'ENTERPRISE IT',
      title: 'IT Asset Control',
      description:
        'Replace manual license audits with automated discovery and always-current asset registers.',
    },
    {
      id: 2,
      sector: 'FINANCE',
      title: 'SaaS Spend Management',
      description:
        'Rationalise duplicate tools, rightsize contracts, and benchmark spend against industry peers.',
    },
    {
      id: 3,
      sector: 'SECURITY',
      title: 'Shadow IT Detection',
      description:
        'Surface all unsanctioned applications before they become security liabilities or compliance gaps.',
    },
    {
      id: 4,
      sector: 'HR & OPS',
      title: 'Offboarding Automation',
      description:
        'Instantly revoke access across all SaaS tools on employee departure — eliminate orphaned accounts.',
    },
  ];

  const whyUElement = [
    {
      id: 1,
      title: 'Single Pane of Glass',
      description:
        'All your SaaS applications, spend, users, and risk signals in one unified dashboard — no more spreadsheet audits.',
    },
    {
      id: 2,
      title: 'Policy-as-Code Enforcement',
      description:
        'Define, version, and enforce governance policies programmatically across your entire SaaS estate using an API-first architecture.',
    },
    {
      id: 3,
      title: 'AI Spend Intelligence',
      description:
        'Machine learning models trained on SaaS spend benchmarks surface anomalies, optimisation opportunities, and renewal strategy recommendations.',
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
          alt="SaaS Platform background"
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
                  <rect
                    x="3"
                    y="3"
                    width="8"
                    height="8"
                    rx="2"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="13"
                    y="3"
                    width="8"
                    height="8"
                    rx="2"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="3"
                    y="13"
                    width="8"
                    height="8"
                    rx="2"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="13"
                    y="13"
                    width="8"
                    height="8"
                    rx="2"
                    stroke="#C98F28"
                    strokeWidth="1.5"
                    strokeDasharray="2 1.5"
                  />
                  <circle
                    cx="17"
                    cy="17"
                    r="1.2"
                    fill="#C98F28"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-[#D2D2D2]" />
              <span className="text-white font-reddit-sans text-14 sm:text-16 md:text-20 font-semibold ml-3">
                SaaS · Web Platform Management
              </span>
            </div>

            <h1 className="fl1-sep !text-white mb-6">
              One Platform to Govern Your Entire Software Estate.
            </h1>

            <p className="fl3 !text-white leading-relaxed">
              UElement's SaaS Management Platform consolidates visibility,
              governance, and cost control across your multi-vendor cloud
              software landscape — eliminating shadow IT, redundant licenses,
              and compliance gaps at scale.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {['Multi-cloud', 'Governance', 'FinOps', 'License Mgmt'].map(
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
              <SaaSHubVisual />
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
                { val: '35%', label: 'Average SaaS cost reduction' },
                { val: '100%', label: 'License compliance visibility' },
                { val: '<5 min', label: 'Onboarding per application' },
                { val: '500+', label: 'Pre-built integrations' },
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

            {/* Lifecycle visual */}
            <div className="mb-8">
              <LifecycleVisual />
            </div>

            {/* Text */}
            <div>
              <h2 className="fl1 !mb-4 sm:!mb-6">
                Complete SaaS Lifecycle Management
              </h2>
              <p className="fl3 leading-relaxed">
                From discovery to decommission — UElement's platform provides
                full-lifecycle visibility and control across every SaaS
                application in your organisation. Our automated discovery engine
                surfaces both sanctioned and shadow applications using SSO,
                browser, and network-layer signals, building a living asset
                register that stays accurate without manual effort. AI-driven
                spend analysis continuously identifies rightsizing
                opportunities, duplicate tooling, and renewal leverage — while
                policy-as-code enforcement ensures governance controls are
                always active across your entire multi-vendor estate.
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
            Complete SaaS lifecycle management — from discovery to decommission.
          </p>

          {/* Desktop grid */}
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

          {/* Mobile slider */}
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

      {/* ── Use Cases ── */}
      <section className="bg-[#f3f3f3] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">Use Cases</h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Across every organisation type — IT, Finance, Security, and
            Operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc) => (
              <div key={uc.id} className="bg-[#fcfcfc] rounded-[18px] p-6">
                <p className="font-noto-sans font-bold text-[10px] tracking-[0.15em] text-[#9B7025] uppercase mb-2">
                  {uc.sector}
                </p>
                <h3 className="font-noto-sans font-semibold text-16 text-black mb-3">
                  {uc.title}
                </h3>
                <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why UElement SaaS ── */}
      <section className="bg-[#fcfcfc] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 md:!mb-6">Why UElement SaaS</h2>
          <p className="fl3 !text-[#5F6D7E] !mb-8 md:w-[60%]">
            Governance without complexity — a unified platform built for the
            modern enterprise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUElement.map((item) => (
              <div key={item.id} className="bg-[#f3f3f3] p-6 rounded-[18px]">
                <h3 className="font-noto-sans font-semibold text-16 lg:text-18 text-black mb-3">
                  {item.title}
                </h3>
                <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSPlatform;
