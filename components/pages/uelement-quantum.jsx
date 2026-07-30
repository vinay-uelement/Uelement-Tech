"use client";

import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════
   BRAND & DESIGN TOKENS
═══════════════════════════════════════════════════════════════ */
const BG   = "#03080F";
const N    = "#0B1F3A";
const N2   = "#0F2645";
const N3   = "#13294B";
const G    = "#D4AF37";
const GLT  = "#F0CC58";
const GDK  = "#B8902E";
const GD2  = "#8B6914";
const W    = "#FFFFFF";
const MS   = "#8FA3BF";
const ML   = "#D9E2F0";
const INK  = "#030810";

const GG   = `linear-gradient(135deg,${GLT} 0%,${G} 38%,${GDK} 72%,${GD2} 100%)`;
const GG2  = `linear-gradient(90deg,${GLT} 0%,${G} 50%,${GDK} 100%)`;

/* ═══════════════════════════════════════════════════════════════
   STATIC CONTENT (from PPTX source)
═══════════════════════════════════════════════════════════════ */
const CIPHER = ["ML-KEM-768","FIPS-203","X25519+MLKEM","0x11EC","ML-DSA-65","FIPS-204","SLH-DSA-128s","FIPS-205","FN-DSA-512","BB84-QKD","ETSI-GS-014","AES-256-GCM","SHA3-256","HKDF-SHA256","TLS-1.3","CBOM-v1","Q-SAFE","NQM-2029","CNSA-2.0","liboqs-0.10","CRYSTALS","DILITHIUM","KYBER","SPHINCS+","mTLS","PKCS#11","OQS-OpenSSL","ML-KEM-1024","X.509v3","NIST-SP-800"];

const THREATS=[
  {code:"HNDL",badge:"ACTIVE NOW",bCol:GLT,bBg:"rgba(240,200,88,0.1)",
   title:"Harvest Now,\nDecrypt Later",
   body:"Adversaries archive your encrypted TLS traffic today — no quantum computer required, only the certainty one will exist within your data's sensitivity lifetime. KYC records, transaction archives, interbank messaging are already in adversarial storage.",
   impact:"Every day of delay deepens the archive."},
  {code:"TNFL",badge:"LATENT",bCol:ML,bBg:"rgba(217,226,240,0.06)",
   title:"Trust Now,\nForge Later",
   body:"A future CRQC enables retrospective forgery of RSA/ECDSA signatures — making fraudulent records cryptographically indistinguishable from authentic ones. Root CAs are the single largest blast radius; their compromise cascades across every dependent certificate and audit trail.",
   impact:"Signed records today may be unverifiable tomorrow."},
  {code:"DNEL",badge:"PROCUREMENT-DRIVEN",bCol:"#8FC9A9",bBg:"rgba(143,201,169,0.07)",
   title:"Deploy Now,\nExploit Later",
   body:"Infrastructure fielded today without PQC requirements locks vulnerability in for its operational service life: core banking 10–15 yrs, SCADA/ICS 20–30 yrs, payment switches 5–10 yrs. Every procurement decision made now is a cryptographic decision.",
   impact:"Procurement is a cryptographic decision."},
];

const PRACTICES={
  pqc:{
    label:"U92-PQC",sub:"Post-Quantum Cryptography",
    tagline:"Enterprise-scale migration: Discover → Prioritize → Migrate → Prove.",
    desc:"NIST finalized FIPS 203/204/205 in August 2024. The mathematics is settled — the remaining challenge is enterprise-scale migration across software, HSMs, PKI, payment rails and embedded systems with hard interdependencies. U92-PQC productizes all four stages.",
    products:[
      {name:"U92 Prism",cat:"ASSESS",col:"#D4AF37",icon:"🔍",
       title:"Cryptographic discovery & CBOM engine",
       body:"Passive TAP/SPAN traffic analysis, certificate & trust-chain mapping, crypto library call-site inspection → continuously updated CBOM. Aligned with CERT-In SBOM/CBOM/QBOM — a regulator-legible artifact."},
      {name:"U92 Compass",cat:"ASSESS",col:"#D4AF37",icon:"🧭",
       title:"Quantum exposure scoring & ranked migration queue",
       body:"Weighted risk model R=w₁C+w₂L+w₃Q+w₄B+w₅M with transparent, regulator-defensible weights → ranked migration queue. Publish the weights, not just the scores — RBI Q-SAFE auditors will ask why asset A migrated before asset B."},
      {name:"U92 Shield Edge",cat:"TRANSIT",col:"#3A9BC1",icon:"🛡️",
       title:"Internet-facing PQC-TLS termination fleet",
       body:"Hybrid X25519+ML-KEM-768 (IANA code point 0x11EC) at the network boundary — zero application changes, zero re-deployment. Template-stamped proxy fleet; first protection live in weeks, running in parallel to the native migration programme."},
      {name:"U92 Shield Mesh",cat:"TRANSIT",col:"#3A9BC1",icon:"🕸️",
       title:"East–west & service-to-service mTLS",
       body:"Sidecar/mesh insertion of hybrid mTLS for internal APIs, database replication and DC east–west links. Intent-named profiles (EDGE / INTERNAL / DEFENSE-CRITICAL) with ML-DSA-signed policy and automatic rollback in <15 min on any failed apply."},
      {name:"U92 Shield Link",cat:"TRANSIT",col:"#3A9BC1",icon:"🔗",
       title:"Interbank, site-to-site & WAN quantum tunnels",
       body:"Quantum-safe tunnels for branch–DC, DC–DR, interbank messaging and partner interconnects. VPN-concentrator replacement path with ML-KEM-1024 floors for high-security legs. QKD-ready key injection (FY28 interoperability track)."},
      {name:"U92 Vault Rewrap",cat:"REST",col:"#8B72BE",icon:"🗄️",
       title:"PQC re-wrap of key hierarchies — megabytes, not petabytes",
       body:"Orchestrated DEK re-wrap under PQC KEKs across KMS & HSM estates. Re-wrapping touches key material only — ciphertext blocks stay untouched. This is the difference between a weekend change window and a multi-year re-encryption program."},
      {name:"U92 Vault Archive",cat:"REST",col:"#8B72BE",icon:"📦",
       title:"SLH-DSA anchors for 15–30-year records",
       body:"Hash-based integrity anchors (FIPS 205) for customer archives, regulatory filings and contracts. Security reduces purely to SHA-256/SHAKE-256 collision resistance — the conservative insurance policy for root trust and archival permanence."},
      {name:"U92 Seal",cat:"TRUST",col:"#4A9E6E",icon:"📜",
       title:"PQC PKI, code signing & cert lifecycle automation",
       body:"ML-DSA (FIPS 204) certificate chains, code-signing toolchains for CI/CD and IoT attestation, automated certificate lifecycle for 90/45-day regimes. Sequence key exchange first, signatures second — path-length-aware hybrid chain design."},
      {name:"U92 Ledger",cat:"PROVE",col:"#B8902E",icon:"📋",
       title:"Automated Evidence Pack — regulator-ready on day one",
       body:"Four mandatory pillars: Packet Evidence (PCAPs proving 0x11EC on the wire) · Configuration Evidence (policies, trust stores) · Performance Evidence (latency telemetry) · Rollback Evidence (named owners, trigger conditions). Mapped to Q-SAFE/CNSA 2.0/NIS2."},
      {name:"U92 Sentinel",cat:"OPERATE",col:"#C07A3A",icon:"👁️",
       title:"Managed quantum-safe ops & algorithm rotation",
       body:"24×7 managed quantum-safe operations, CBOM drift monitoring, algorithm rotation shipped as signed policy — applications never know. Standards-watch: HQC (~2027), FIPS 206, national mandate revisions. The annuity layer of the engagement model."},
    ],
  },
  qkd:{
    label:"U92-QKD",sub:"Quantum Key Distribution",
    tagline:"Physics-based key security for the links where assurance must be absolute.",
    desc:"PQC scales everywhere; QKD is the assurance ceiling for the few links that matter most — interbank settlement, sovereign backbones, defence command links, DC–DR replication. U92 delivers KMS, hybrid-fusion, network-design and evidence over certified, vendor-neutral QKD hardware.",
    products:[
      {name:"U92 Beam",cat:"METRO",col:"#3A9BC1",icon:"💫",
       title:"Metro fiber QKD links — BB84, ~100 km",
       body:"Point-to-point quantum key distribution over dark fiber using BB84 protocol. Any interception disturbs the quantum states and raises the Quantum Bit Error Rate (QBER) — eavesdropping is physically detectable. No ciphertext of the key to harvest."},
      {name:"U92 Relay",cat:"LONG-HAUL",col:"#5B8AC9",icon:"🏗️",
       title:"Trusted-node long-haul key chains",
       body:"Sequenced trusted-node relays extending QKD key distribution across city-to-city and national distances. Segment-by-segment key refresh with auditable node-custody records for every key hop in the chain."},
      {name:"U92 Zenith",cat:"SATELLITE",col:"#7B68B5",icon:"🛸",
       title:"Satellite & free-space QKD",
       body:"Beyond-fiber reach via LEO/GEO satellite QKD or ground-based free-space links. For national-scale quantum backbone coverage, classified site connectivity and DDIL-capable sovereign networks."},
      {name:"U92 Keystone",cat:"KMS",col:"#D4AF37",icon:"🗝️",
       title:"Vendor-neutral quantum key management",
       body:"ETSI GS QKD 014 compliant quantum KMS. Hardware-agnostic: integrates with IDQ, Toshiba, QNu Labs and open-source OQS stacks. Full key lifecycle — generation, distribution, rotation, revocation — with per-key audit trail."},
      {name:"U92 Fuse",cat:"HYBRID",col:"#4A9E6E",icon:"⚡",
       title:"QKD ⊕ PQC key fusion into Shield Link tunnels",
       body:"HKDF fusion of QKD-derived keys and ML-KEM-768 keys into a single session key. The session survives if either layer holds — defense-in-depth against both mathematical and physical attacks simultaneously."},
    ],
  },
  agility:{
    label:"U92 Crypto-Agility",sub:"Swap Algorithms in Days, Not Years",
    tagline:"Because NIST has already changed once, and standards will rotate again.",
    desc:"An organisation that migrates to PQC without crypto-agility has merely exchanged one brittle dependency for another. SIKE and Rainbow both broke in 2022 — during the NIST process itself. Systems that hardcode primitives face forced rewrites every rotation. U92 Crypto-Agility absorbs change as configuration.",
    products:[
      {name:"U92 Axis",cat:"ABSTRACTION",col:"#D4AF37",icon:"⚙️",
       title:"The pivot — crypto-abstraction SDKs & providers",
       body:"JCA/JCE provider, OpenSSL ENGINE/provider, PKCS#11 interface, .NET CryptoConfig — algorithm choices live in runtime policy, never in application code. When FIPS standards rotate, Axis absorbs the change as configuration. The fixed axis around which every algorithm can turn without the estate moving."},
      {name:"U92 Codex",cat:"GOVERNANCE",col:"#8B72BE",icon:"📖",
       title:"The law — ML-DSA-signed algorithm registry & policy plane",
       body:"5-step rotation flow: new primitive standardised → one registry entry added → policy updated & signed with ML-DSA → fleet pulls, verifies, reloads → rollback on failure. Every proxy/endpoint asks Codex which algorithm to use — and obeys the signed answer. 'Which KEM was every endpoint using on a given date?' answered authoritatively."},
      {name:"U92 Crucible",cat:"ASSURANCE",col:"#C07A3A",icon:"🔬",
       title:"The test — rotation drill harness & interop lab",
       body:"Scheduled rotation drills that exercise the full Axis→Codex→rotate→evidence cycle before it matters. Interoperability test matrix across browsers, HSMs, API clients and partner systems. Side-channel assurance validation and performance regression suite — proof that rotation works before a vulnerability forces your hand."},
    ],
  },
};

const STATS=[
  {val:"46",suf:"",label:"BFSI accounts in active pipeline"},
  {val:"10",suf:"+",label:"Geographies · JAPAC · EU · AMEA"},
  {val:"₹1,680",suf:"Cr",label:"3-year pipeline TCV weighted"},
  {val:"3",suf:"",label:"Quantum practices: PQC · QKD · Agility"},
];

const INDUSTRIES=[
  {icon:"🏦",name:"BFSI",sub:"Payment rails · KYC archives · Interbank messaging",tag:"Anchor vertical — 46 active accounts"},
  {icon:"🏛️",name:"Government & Defence",sub:"Classified comms · PKI trust anchors · Embedded platforms",tag:"NQM CII targets 2027–29"},
  {icon:"📡",name:"Telecom & Media",sub:"Subscriber TLS at national scale · 5G core · Certificate automation",tag:"TEC QKD standards · TRAI enforcement"},
  {icon:"⚡",name:"Energy & OT",sub:"SCADA/ICS · Grid telemetry · Firmware signing",tag:"CII 2027 preparation wave"},
  {icon:"🏥",name:"Healthcare & DPI",sub:"Patient archives · Citizen identity & consent platforms",tag:"DPDP Act 2023 compliance pressure"},
];

const DIFFS=[
  {icon:"🇮🇳",title:"Sovereign deeptech",body:"Indigenous Indian platform — aligns with NQM sovereignty-first policy, creating a structural edge in India, GCC and sovereign-minded JAPAC markets over imported libraries."},
  {icon:"📋",title:"Evidence-first delivery",body:"The Evidence Pack is a product, not a report — regulator-ready proof from day one, mapped to Q-SAFE, CNSA 2.0 and NIS2. Auditors can verify, not just trust."},
  {icon:"🔄",title:"Crypto-agility by design",body:"Algorithms live in signed policy, never in code. A live fleet-wide KEM change is part of every pilot — demonstrated before you sign, not promised in a brochure."},
  {icon:"₹",title:"QTS commercial innovation",body:"Quantum Transaction Shield turns capex security into a per-transaction operating cost banks already understand — same logic as interchange fees, not a large upfront licence."},
  {icon:"🏗️",title:"Full-stack coverage",body:"Transit + rest + trust + evidence + operations in one family. Competitors sell PQC libraries or point proxies; U92 sells the migration operating model."},
  {icon:"🤝",title:"Hitachi co-GTM",body:"Signed co-GTM with Hitachi, SI/distributor channels across 10 geographies, Perforce Delphix and Synopsys BlackDuck adjacencies in the existing account base."},
];

const JOURNEY=[
  {phase:"Phase 0",title:"Discover & Assess",dur:"4–8 weeks",fee:"₹2–4 Cr",items:["U92 Prism CBOM deployment","Quantum Exposure Scoring (Compass)","Validated Phase 1 cost & effort estimate","Regulatory gap analysis"]},
  {phase:"Phase 1",title:"Pilot & Protect",dur:"8–16 weeks",fee:"₹4–8 Cr",items:["Shield on a ring-fenced channel","Live QTS metering","Evidence Pack v1 auto-generated","Crypto-agility demonstrated live"]},
  {phase:"Phase 2+",title:"Migrate & Scale",dur:"quarters",fee:"₹10–15 Cr/yr",items:["Wave-by-wave rollout by Compass ranking","Vault Rewrap of key hierarchies","Seal PKI & certificate migration","Estate-wide quantum posture"]},
  {phase:"Ongoing",title:"Operate & Prove",dur:"annuity",fee:"₹3–6 Cr/yr",items:["U92 Sentinel managed operations","Ledger compliance dashboards","Algorithm rotation as configuration","Standards-watch & mandate tracking"]},
];

const MANDATES=["NIST FIPS 203/204/205","NSA CNSA 2.0","RBI Q-SAFE May 2026","NQM Task Force Feb 2026","EU NIS2 Directive","ENISA PQC Guidance","CERT-In CBOM 2025","DPDP Act 2023","TEC QKD Standards","CA/B Forum 90-day","NCSC UK PQC","BSI/ANSSI Hybrid","OMB M-23-02","ETSI GS QKD 014"];

/* ═══════════════════════════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════════════════════════ */
function GS(){
  return <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Great+Vibes&display=swap');

    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body{font-family:'Inter',sans-serif;background:${BG};color:${W};overflow-x:hidden;}

    :root{
      --gold:${G};--gold-lt:${GLT};--gold-dk:${GDK};
      --navy:${N};--mist:${MS};--mist-lt:${ML};
    }

    /* Gold gradient text */
    .gg{background:${GG};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
    .gg2{background:${GG2};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

    .sg{font-family:'Space Grotesk',sans-serif;}
    .mono{font-family:'JetBrains Mono','Courier New',monospace;}

    /* Animations */
    @keyframes cipherSc{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
    @keyframes rRot{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
    @keyframes rRotR{0%{transform:rotate(0)}100%{transform:rotate(-360deg)}}
    @keyframes rPulse{0%,100%{opacity:.45;transform:translate(-50%,-50%) scale(1)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.04)}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
    @keyframes marqueeA{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @keyframes goldGlow{0%,100%{text-shadow:0 0 30px rgba(212,175,55,.25)}50%{text-shadow:0 0 60px rgba(212,175,55,.6),0 0 100px rgba(212,175,55,.2)}}
    @keyframes borderShimmer{0%{border-color:rgba(212,175,55,.15)}50%{border-color:rgba(212,175,55,.45)}100%{border-color:rgba(212,175,55,.15)}}

    .cipher-anim{animation:cipherSc 48s linear infinite;}
    .hero-in{animation:fadeUp .8s ease forwards;opacity:0;}
    .marquee-sc{animation:marqueeA 34s linear infinite;}
    .glow{animation:goldGlow 3.5s ease-in-out infinite;}
    .shimmer{animation:borderShimmer 4s ease-in-out infinite;}

    /* Glass card */
    .glass{
      background:rgba(11,28,55,.55);
      border:1px solid rgba(212,175,55,.16);
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      border-radius:12px;
      transition:border-color .3s,transform .25s,box-shadow .3s;
    }
    .glass:hover{border-color:rgba(212,175,55,.38);transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.4),0 0 0 1px rgba(212,175,55,.08);}

    .glass-dk{
      background:rgba(4,8,20,.7);
      border:1px solid rgba(212,175,55,.12);
      backdrop-filter:blur(12px);
      -webkit-backdrop-filter:blur(12px);
      border-radius:10px;
      transition:border-color .25s,transform .2s;
    }
    .glass-dk:hover{border-color:rgba(212,175,55,.32);transform:translateY(-3px);}

    /* Buttons */
    .btn-g{
      display:inline-flex;align-items:center;gap:.5rem;
      background:${GG};color:${INK};
      padding:.75rem 1.65rem;border-radius:6px;
      font-family:'Space Grotesk',sans-serif;font-weight:700;
      font-size:.9rem;letter-spacing:.04em;
      text-decoration:none;border:none;cursor:pointer;
      box-shadow:0 4px 28px rgba(212,175,55,.28);
      transition:opacity .2s,transform .15s,box-shadow .2s;
    }
    .btn-g:hover{opacity:.9;transform:translateY(-2px);box-shadow:0 8px 36px rgba(212,175,55,.4);}

    .btn-o{
      display:inline-flex;align-items:center;gap:.5rem;
      background:transparent;color:${GLT};
      padding:.75rem 1.65rem;border-radius:6px;
      font-family:'Space Grotesk',sans-serif;font-weight:600;
      font-size:.9rem;letter-spacing:.04em;
      text-decoration:none;cursor:pointer;
      border:1.5px solid rgba(212,175,55,.32);
      transition:all .2s;
    }
    .btn-o:hover{border-color:${G};background:rgba(212,175,55,.08);}

    /* Nav */
    .nav-a{
      color:${ML};text-decoration:none;
      font-family:'Space Grotesk',sans-serif;
      font-size:.875rem;font-weight:500;letter-spacing:.01em;
      transition:color .2s;
    }
    .nav-a:hover{color:${GLT};}

    /* Practice tabs */
    .ptab{
      font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:.82rem;
      padding:.6rem 1.3rem;border-radius:6px;cursor:pointer;letter-spacing:.04em;
      border:1.5px solid rgba(212,175,55,.2);
      background:transparent;color:${MS};
      transition:all .2s;
    }
    .ptab.on{
      background:rgba(212,175,55,.1);
      border-color:${G};color:${GLT};
      box-shadow:0 0 20px rgba(212,175,55,.12);
    }
    .ptab:hover:not(.on){border-color:rgba(212,175,55,.38);color:${W};}

    /* Product mini card */
    .pcard{
      background:rgba(8,18,40,.6);
      border:1px solid rgba(212,175,55,.14);
      border-radius:10px;padding:1.25rem;
      transition:border-color .25s,transform .2s;
      cursor:default;
    }
    .pcard:hover{border-color:rgba(212,175,55,.38);transform:translateY(-3px);}

    /* Industry card */
    .icard{
      background:rgba(11,28,55,.45);
      border:1px solid rgba(212,175,55,.14);
      border-radius:10px;padding:1.75rem 1.5rem;
      transition:all .25s;
    }
    .icard:hover{background:rgba(15,38,69,.7);border-color:rgba(212,175,55,.38);transform:translateY(-3px);}

    /* Form */
    .uel-in{
      width:100%;background:rgba(255,255,255,.04);
      border:1px solid rgba(212,175,55,.18);
      border-radius:6px;padding:.65rem .9rem;
      color:${W};font-size:.875rem;
      font-family:'Inter',sans-serif;outline:none;
      transition:border-color .2s;
    }
    .uel-in:focus{border-color:rgba(212,175,55,.5);}
    .uel-in::placeholder{color:rgba(143,163,191,.5);}

    /* Chip */
    .chip{padding:.35rem .8rem;border-radius:20px;cursor:pointer;
      font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.68rem;
      border:1px solid rgba(212,175,55,.16);background:transparent;color:${MS};
      transition:all .15s;}
    .chip.on{background:rgba(212,175,55,.12);border-color:${G};color:${GLT};}
    .chip:hover:not(.on){border-color:rgba(212,175,55,.38);color:${W};}

    /* Footer */
    .ft{color:${MS};font-size:.82rem;text-decoration:none;display:block;margin-bottom:.5rem;transition:color .2s;}
    .ft:hover{color:${G};}

    /* Section label */
    .slabel{
      font-family:'Space Grotesk',sans-serif;font-weight:700;
      font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;
      background:${GG};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
    }

    /* Gold hairline */
    .gold-hr{height:1px;background:linear-gradient(to right,transparent,rgba(212,175,55,.35),transparent);}

    /* Journey phase card */
    .jcard{
      background:rgba(8,18,42,.65);
      border:1px solid rgba(212,175,55,.14);
      border-radius:12px;padding:2rem 1.75rem;
      transition:border-color .25s;
    }
    .jcard:hover{border-color:rgba(212,175,55,.35);}
    .jcard.highlight{
      background:rgba(212,175,55,.06);
      border-color:rgba(212,175,55,.35);
    }

    /* Responsive */
    @media(max-width:900px){
      .hide-m{display:none!important;}
      .show-m{display:block!important;}
      .col2{grid-template-columns:1fr!important;}
      .col3{grid-template-columns:1fr 1fr!important;}
    }
    @media(min-width:901px){.show-m{display:none!important;}}
    @media(max-width:560px){.col3{grid-template-columns:1fr!important;}}

    @media(prefers-reduced-motion:reduce){
      .cipher-anim,.marquee-sc,.glow,.shimmer,.glass,.glass-dk,.pcard,.icard,.jcard{animation:none!important;transition:none!important;}
      .hero-in{opacity:1!important;animation:none!important;}
    }

    ::-webkit-scrollbar{width:5px;}
    ::-webkit-scrollbar-track{background:#030810;}
    ::-webkit-scrollbar-thumb{background:${GDK};border-radius:3px;}
  `}</style>;
}

/* ═══════════════════════════════════════════════════════════════
   UELEMENT LOGO (geometric with stripe-cut effect + script sub)
═══════════════════════════════════════════════════════════════ */
function Logo({size="md",dark=false}) {
  const fs = size==="lg" ? "1.55rem" : size==="sm" ? ".9rem" : "1.15rem";
  const sf = size==="lg" ? "1.0rem" : size==="sm" ? ".65rem" : ".82rem";
  const bg = dark ? "#030810" : "transparent";
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:0,lineHeight:1}}>
      {/* UELEMENT wordmark with horizontal stripe cuts */}
      <div style={{position:"relative",display:"inline-block",lineHeight:1}}>
        <span style={{
          fontFamily:"'Space Grotesk',sans-serif",fontWeight:900,fontSize:fs,
          color:W,letterSpacing:".13em",display:"block",lineHeight:1,
        }}>UELEMENT</span>
        {/* Stripe cuts — navy-tinted bars that cut through the text */}
        <div style={{
          position:"absolute",inset:0,pointerEvents:"none",
          backgroundImage:`repeating-linear-gradient(
            to bottom,
            transparent 0%,transparent 26%,
            ${bg||"rgba(3,8,15,.88)"} 26%,${bg||"rgba(3,8,15,.88)"} 38%,
            transparent 38%,transparent 63%,
            ${bg||"rgba(3,8,15,.88)"} 63%,${bg||"rgba(3,8,15,.88)"} 75%,
            transparent 75%,transparent 100%
          )`,
        }}/>
      </div>
      {/* "Technologies" gold script */}
      <span style={{
        fontFamily:"'Great Vibes',cursive",
        fontSize:sf,
        background:GG,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
        letterSpacing:".02em",paddingLeft:".875rem",marginTop:"-.1rem",display:"block",lineHeight:1.2,
      }}>Technologies</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   QUANTUM RING ANIMATION (inspired by quantum-computing.jpg)
═══════════════════════════════════════════════════════════════ */
function QuantumRings() {
  const rings=[
    {sz:560,dur:44,rev:false,op:.18,w:1},
    {sz:480,dur:34,rev:true, op:.25,w:1},
    {sz:400,dur:26,rev:false,op:.32,w:1},
    {sz:320,dur:18,rev:true, op:.45,w:1.5},
    {sz:240,dur:13,rev:false,op:.6, w:1.5},
    {sz:160,dur:9, rev:true, op:.8, w:2},
    {sz:80, dur:5, rev:false,op:1,  w:2},
  ];
  return (
    <div className="hide-m" style={{
      position:"absolute",right:"-8%",top:"50%",transform:"translateY(-50%)",
      width:560,height:560,pointerEvents:"none",zIndex:1,
    }}>
      {/* Outer radial glow */}
      <div style={{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle,rgba(212,175,55,.07) 0%,transparent 68%)"}}/>
      {rings.map((r,i)=>(
        <div key={i} style={{
          position:"absolute",
          top:"50%",left:"50%",
          width:r.sz,height:r.sz,
          marginLeft:-r.sz/2,marginTop:-r.sz/2,
          borderRadius:"50%",
          border:`${r.w}px solid rgba(212,175,55,${r.op})`,
          animation:`${r.rev?"rRotR":"rRot"} ${r.dur}s linear infinite`,
          boxShadow:i>4?`0 0 ${8+i*4}px rgba(212,175,55,${r.op*.6})`:undefined,
        }}>
          {/* Marker dots on each ring */}
          {[0,90,180,270].slice(0,Math.min(2+i,4)).map((deg,j)=>{
            const rad=deg*Math.PI/180;
            const rx=r.sz/2, ry=r.sz/2;
            const x=rx+rx*Math.cos(rad);
            const y=ry+ry*Math.sin(rad);
            return <div key={j} style={{
              position:"absolute",
              left:x-3,top:y-3,
              width:Math.max(2,i),height:Math.max(2,i),
              borderRadius:"50%",
              background:`rgba(212,175,55,${r.op})`,
            }}/>;
          })}
        </div>
      ))}
      {/* Center orb */}
      <div style={{
        position:"absolute",top:"50%",left:"50%",
        width:28,height:28,borderRadius:"50%",
        transform:"translate(-50%,-50%)",
        background:`radial-gradient(circle,${GLT},${G})`,
        boxShadow:`0 0 24px ${G},0 0 60px rgba(212,175,55,.4),0 0 100px rgba(212,175,55,.15)`,
        animation:"rPulse 4s ease-in-out infinite",
      }}/>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CIPHER RAIL
═══════════════════════════════════════════════════════════════ */
function CipherRail() {
  const all=[...CIPHER,...CIPHER];
  return (
    <div className="hide-m" style={{
      position:"absolute",left:"2.5rem",top:0,bottom:0,
      width:110,overflow:"hidden",pointerEvents:"none",zIndex:1,
      WebkitMaskImage:"linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.65) 10%,rgba(0,0,0,.65) 90%,transparent 100%)",
      maskImage:"linear-gradient(to bottom,transparent 0%,rgba(0,0,0,.65) 10%,rgba(0,0,0,.65) 90%,transparent 100%)",
    }}>
      <div className="cipher-anim" style={{display:"flex",flexDirection:"column",gap:"1.1rem",paddingTop:"6rem"}}>
        {all.map((c,i)=>(
          <span key={i} className="mono" style={{
            display:"block",fontSize:".54rem",letterSpacing:".07em",whiteSpace:"nowrap",
            color:i%7===0?G:MS,opacity:i%7===0?.6:.17,
          }}>{c}</span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════════════ */
function Nav({scrolled,open,setOpen}) {
  const links=[["U92 Practice","#practice"],["Products","#products"],["Industries","#industries"],["Journey","#journey"],["About","#about"]];
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:300,
      background:scrolled?"rgba(3,8,15,.96)":"rgba(3,8,15,.7)",
      backdropFilter:"blur(18px)",WebkitBackdropFilter:"blur(18px)",
      borderBottom:scrolled?"1px solid rgba(212,175,55,.12)":"1px solid transparent",
      transition:"background .35s,border-color .35s",
    }}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem",height:68,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="#" style={{textDecoration:"none",flexShrink:0}}><Logo/></a>
        <div className="hide-m" style={{display:"flex",alignItems:"center",gap:"2rem"}}>
          {links.map(([l,h])=><a key={l} href={h} className="nav-a">{l}</a>)}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
          <a href="#contact" className="btn-g hide-m" style={{padding:".44rem 1.1rem",fontSize:".82rem"}}>Talk to Us</a>
          <button className="show-m" onClick={()=>setOpen(!open)}
            style={{background:"none",border:"none",cursor:"pointer",padding:4,display:"flex",flexDirection:"column",gap:5}}>
            {[22,22,16].map((w,i)=><span key={i} style={{display:"block",width:w,height:2,background:W,borderRadius:1}}/>)}
          </button>
        </div>
      </div>
      {open&&(
        <div style={{background:"rgba(3,8,15,.98)",borderTop:"1px solid rgba(212,175,55,.12)"}}>
          {[...links,["Contact","#contact"]].map(([l,h])=>(
            <a key={l} href={h} onClick={()=>setOpen(false)}
              style={{display:"block",color:ML,padding:".875rem 1.5rem",fontSize:"1rem",fontWeight:500,fontFamily:"'Space Grotesk',sans-serif",textDecoration:"none",borderBottom:"1px solid rgba(212,175,55,.08)"}}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{minHeight:"100vh",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",paddingTop:68,
      background:`radial-gradient(ellipse 120% 80% at 70% 50%, rgba(19,41,75,.35) 0%, transparent 60%), linear-gradient(to bottom, #030810, #04091A)`}}>
      {/* Grid bg */}
      <div style={{position:"absolute",inset:0,pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(212,175,55,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,.03) 1px,transparent 1px)",
        backgroundSize:"80px 80px"}}/>
      {/* Cipher rail */}
      <CipherRail/>
      {/* Quantum rings (right side) */}
      <QuantumRings/>
      {/* Vignette */}
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 60% at 35% 50%,transparent 0%,rgba(3,8,15,.5) 100%)",pointerEvents:"none"}}/>

      {/* Content */}
      <div style={{maxWidth:1320,margin:"0 auto",padding:"5rem 1.5rem 4rem",position:"relative",zIndex:2}}>
        <div style={{maxWidth:680}}>
          {/* Kicker */}
          <div className="hero-in" style={{display:"flex",alignItems:"center",gap:".75rem",marginBottom:"1.75rem",animationDelay:".05s"}}>
            <div style={{width:32,height:1.5,background:GG,borderRadius:1}}/>
            <span className="sg slabel">Element 92 · Quantum Security Practice · Est. Pune, India</span>
          </div>
          {/* Headline */}
          <h1 className="sg hero-in" style={{
            fontWeight:900,fontSize:"clamp(3rem,6.5vw,5.5rem)",lineHeight:.98,
            marginBottom:"1.75rem",letterSpacing:"-.05em",
            animationDelay:".18s",
          }}>
            <span style={{color:W,display:"block"}}>The quantum</span>
            <span style={{color:W,display:"block"}}>threat is</span>
            <span className="gg glow" style={{display:"block"}}>live today.</span>
          </h1>
          {/* Sub */}
          <p className="hero-in" style={{
            fontSize:"1.08rem",lineHeight:1.74,color:MS,
            maxWidth:560,marginBottom:"2.5rem",
            animationDelay:".32s",
          }}>
            Adversaries are harvesting encrypted TLS traffic right now — no quantum computer required,
            only the certainty that one will exist within your data's sensitivity lifetime.
            <strong style={{color:ML}}> U92 closes that window</strong> before CRQC forces your hand.
          </p>
          {/* X+Y>Q pill */}
          <div className="hero-in" style={{
            display:"inline-flex",alignItems:"center",gap:"1rem",
            background:"rgba(212,175,55,.07)",border:"1px solid rgba(212,175,55,.22)",
            borderRadius:8,padding:".6rem 1.25rem",marginBottom:"2.25rem",
            animationDelay:".44s",
          }}>
            <span className="sg gg" style={{fontWeight:800,fontSize:"1.15rem",letterSpacing:"-.02em"}}>X + Y &gt; Q</span>
            <span style={{width:1,height:20,background:"rgba(212,175,55,.25)"}}/>
            <span style={{fontSize:".78rem",color:MS}}>15 yr data + 4 yr migration &gt; 8 yr CRQC estimate — <strong style={{color:GLT}}>safe window closed.</strong></span>
          </div>
          {/* CTAs */}
          <div className="hero-in" style={{display:"flex",flexWrap:"wrap",gap:".875rem",marginBottom:"3.5rem",animationDelay:".58s"}}>
            <a href="#practice" className="btn-g">Explore U92 Practice →</a>
            <a href="#contact" className="btn-o">Schedule Discovery</a>
          </div>
          {/* Trust pills */}
          <div className="hero-in" style={{display:"flex",flexWrap:"wrap",gap:".45rem",alignItems:"center",animationDelay:".7s"}}>
            <span style={{fontSize:".63rem",color:MS,letterSpacing:".1em",textTransform:"uppercase",fontFamily:"'Space Grotesk',sans-serif",marginRight:".3rem"}}>Aligned with</span>
            {["NIST FIPS 203/204/205","RBI Q-SAFE","NQM India","NSA CNSA 2.0","Hitachi Partner"].map(m=>(
              <span key={m} style={{border:"1px solid rgba(212,175,55,.25)",color:"rgba(240,200,88,.75)",padding:"3px 10px",borderRadius:20,fontFamily:"'Space Grotesk',sans-serif",fontWeight:500,fontSize:".6rem",letterSpacing:".04em"}}>{m}</span>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll hint */}
      <div style={{position:"absolute",bottom:"1.75rem",left:"50%",transform:"translateX(-50%)",textAlign:"center",zIndex:2}}>
        <div style={{width:1,height:44,background:`linear-gradient(to bottom,${G},transparent)`,margin:"0 auto .4rem"}}/>
        <span className="sg" style={{fontSize:".55rem",color:MS,letterSpacing:".16em",textTransform:"uppercase"}}>scroll</span>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MANDATE MARQUEE
═══════════════════════════════════════════════════════════════ */
function MandateMarquee() {
  const doubled=[...MANDATES,...MANDATES];
  return (
    <div style={{background:"rgba(4,9,26,.9)",borderTop:"1px solid rgba(212,175,55,.1)",borderBottom:"1px solid rgba(212,175,55,.1)",padding:".875rem 0",overflow:"hidden"}}>
      <div style={{
        WebkitMaskImage:"linear-gradient(to right,transparent,rgba(0,0,0,.8) 8%,rgba(0,0,0,.8) 92%,transparent)",
        maskImage:"linear-gradient(to right,transparent,rgba(0,0,0,.8) 8%,rgba(0,0,0,.8) 92%,transparent)",
      }}>
        <div className="marquee-sc" style={{display:"flex",gap:".75rem",width:"max-content"}}>
          {doubled.map((m,i)=>(
            <span key={i} style={{border:"1px solid rgba(212,175,55,.22)",color:"rgba(240,200,88,.7)",padding:".3rem .9rem",borderRadius:20,fontSize:".67rem",fontFamily:"'Space Grotesk',sans-serif",fontWeight:500,letterSpacing:".05em",whiteSpace:"nowrap"}}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THREAT SECTION
═══════════════════════════════════════════════════════════════ */
function ThreatSection() {
  return (
    <section style={{padding:"7rem 1.5rem",background:`linear-gradient(to bottom,${BG},#050D1F,#030810)`}}>
      <div style={{maxWidth:1320,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"4rem"}}>
          <p className="slabel" style={{marginBottom:".75rem"}}>The Threat Landscape</p>
          <h2 className="sg" style={{fontWeight:800,fontSize:"clamp(2.2rem,3.8vw,3.2rem)",letterSpacing:"-.035em",maxWidth:640,margin:"0 auto",lineHeight:1.1}}>
            Three active threat classes.<br/><span className="gg">All operational before CRQC.</span>
          </h2>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))",gap:"1.25rem",marginBottom:"3rem"}}>
          {THREATS.map(t=>(
            <div key={t.code} className="glass shimmer" style={{padding:"2.25rem",background:t.bBg}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.5rem"}}>
                <span className="sg gg" style={{fontWeight:900,fontSize:"1.9rem",letterSpacing:"-.04em"}}>{t.code}</span>
                <span className="sg" style={{fontWeight:700,fontSize:".56rem",letterSpacing:".12em",color:t.bCol,border:`1px solid ${t.bCol}`,padding:"3px 9px",borderRadius:20,flexShrink:0,opacity:.9}}>{t.badge}</span>
              </div>
              <h3 className="sg" style={{fontWeight:800,fontSize:"1.15rem",color:W,marginBottom:".875rem",lineHeight:1.25,whiteSpace:"pre-line"}}>{t.title}</h3>
              <p style={{fontSize:".875rem",color:MS,lineHeight:1.73,marginBottom:"1.25rem"}}>{t.body}</p>
              <div style={{borderTop:"1px solid rgba(212,175,55,.12)",paddingTop:".875rem",fontSize:".78rem",color:GLT,fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,letterSpacing:".02em"}}>
                ⚠ {t.impact}
              </div>
            </div>
          ))}
        </div>

        {/* Mosca theorem */}
        <div className="glass" style={{padding:"2.5rem 3rem",border:"1px solid rgba(212,175,55,.25)",background:"rgba(212,175,55,.04)"}}>
          <div style={{display:"flex",flexWrap:"wrap",gap:"3rem",alignItems:"center",justifyContent:"center"}}>
            <div style={{textAlign:"center"}}>
              <div className="sg gg glow" style={{fontWeight:900,fontSize:"clamp(2.5rem,5vw,4rem)",letterSpacing:"-.04em",lineHeight:1}}>X + Y &gt; Q</div>
              <div className="sg" style={{fontSize:".65rem",color:MS,letterSpacing:".16em",textTransform:"uppercase",marginTop:".4rem"}}>Mosca's Theorem · vulnerable today</div>
            </div>
            <div className="hide-m" style={{width:1,height:70,background:"rgba(212,175,55,.18)"}}/>
            <div style={{display:"flex",gap:"3rem",flexWrap:"wrap",justifyContent:"center"}}>
              {[["X","Data shelf-life","15–30 yrs · BFSI & sovereign records"],["Y","Migration time","3–7 yrs · complex enterprise"],["Q","Time to CRQC","~8 yrs · consensus, compressing"]].map(([s,l,v])=>(
                <div key={s} style={{textAlign:"center"}}>
                  <div className="sg gg" style={{fontWeight:900,fontSize:"2rem",marginBottom:".2rem",lineHeight:1}}>{s}</div>
                  <div className="sg" style={{fontSize:".82rem",fontWeight:700,color:W,marginBottom:".15rem"}}>{l}</div>
                  <div style={{fontSize:".72rem",color:MS}}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{maxWidth:320,fontSize:".875rem",color:ML,lineHeight:1.72}}>
              <strong style={{color:W}}>Worked example: </strong>data confidential 15 yrs + 4-yr migration = 19 yrs required vs. ~8-yr CRQC estimate. <strong className="gg">15+4 &gt; 8.</strong> The safe window has already closed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRACTICE SECTION (tabbed PQC / QKD / Agility)
═══════════════════════════════════════════════════════════════ */
function PracticeSection() {
  const [tab,setTab]=useState("pqc");
  const p=PRACTICES[tab];
  const cats={ASSESS:"#D4AF37",TRANSIT:"#3A9BC1",REST:"#8B72BE",TRUST:"#4A9E6E",PROVE:"#B8902E",OPERATE:"#C07A3A",METRO:"#3A9BC1","LONG-HAUL":"#5B8AC9",SATELLITE:"#7B68B5",KMS:"#D4AF37",HYBRID:"#4A9E6E",ABSTRACTION:"#D4AF37",GOVERNANCE:"#8B72BE",ASSURANCE:"#C07A3A"};

  return (
    <section id="practice" style={{padding:"7rem 1.5rem",background:`linear-gradient(to bottom,#030810,#040C1E,#030810)`}}>
      <div style={{maxWidth:1320,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"3rem"}}>
          <p className="slabel" style={{marginBottom:".75rem"}}>U92 Quantum Security Practice</p>
          <h2 className="sg" style={{fontWeight:800,fontSize:"clamp(2.2rem,3.8vw,3.2rem)",letterSpacing:"-.035em",maxWidth:680,margin:"0 auto .75rem",lineHeight:1.1}}>
            <span className="gg">Discover → Prioritize</span><br/>
            <span style={{color:W}}>→ Migrate → Prove.</span>
          </h2>
          <p style={{fontSize:".97rem",color:MS,maxWidth:540,margin:"0 auto",lineHeight:1.7}}>Three distinct practices. One policy spine. Every product speaks the same data vocabulary.</p>
        </div>

        {/* Practice tabs */}
        <div style={{display:"flex",justifyContent:"center",gap:".625rem",marginBottom:"3rem",flexWrap:"wrap"}}>
          {Object.entries(PRACTICES).map(([k,v])=>(
            <button key={k} className={`ptab${tab===k?" on":""}`} onClick={()=>setTab(k)}>
              {v.label}
            </button>
          ))}
        </div>

        {/* Practice header */}
        <div className="glass" style={{padding:"2rem 2.5rem",marginBottom:"2rem",background:"rgba(8,18,45,.5)"}}>
          <div style={{display:"flex",flexWrap:"wrap",gap:"2rem",alignItems:"flex-start",justifyContent:"space-between"}}>
            <div style={{maxWidth:640}}>
              <div className="sg" style={{fontWeight:800,fontSize:"1.05rem",color:GLT,marginBottom:".4rem",letterSpacing:".05em"}}>{p.label} — {p.sub}</div>
              <p className="sg" style={{fontWeight:700,fontSize:"1.15rem",color:W,marginBottom:".75rem",lineHeight:1.35}}>{p.tagline}</p>
              <p style={{fontSize:".9rem",color:MS,lineHeight:1.72}}>{p.desc}</p>
            </div>
            <div style={{display:"flex",gap:".5rem",flexWrap:"wrap",alignItems:"center"}}>
              {[...new Set(p.products.map(x=>x.cat))].map(cat=>(
                <span key={cat} className="sg" style={{fontSize:".58rem",fontWeight:700,letterSpacing:".1em",color:cats[cat]||G,border:`1px solid ${cats[cat]||G}`,padding:"3px 8px",borderRadius:4,opacity:.9}}>{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div id="products" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"1rem"}}>
          {p.products.map(prod=>(
            <div key={prod.name} className="pcard">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:".875rem",gap:".5rem"}}>
                <div style={{display:"flex",alignItems:"center",gap:".625rem"}}>
                  <span style={{
                    width:34,height:34,borderRadius:8,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",
                    background:`linear-gradient(135deg,${prod.col}22,${prod.col}44)`,
                    border:`1px solid ${prod.col}44`,
                  }}>{prod.icon}</span>
                  <span className="sg" style={{fontWeight:800,fontSize:".9rem",color:W,letterSpacing:"-.01em",lineHeight:1.2}}>{prod.name}</span>
                </div>
                <span className="sg" style={{flexShrink:0,fontWeight:700,fontSize:".52rem",letterSpacing:".12em",color:cats[prod.cat]||G,border:`1px solid ${cats[prod.cat]||G}`,padding:"2px 6px",borderRadius:3,opacity:.85}}>{prod.cat}</span>
              </div>
              <div className="sg" style={{fontSize:".78rem",fontWeight:600,color:GLT,marginBottom:".4rem",letterSpacing:".02em"}}>{prod.title}</div>
              <p style={{fontSize:".78rem",color:MS,lineHeight:1.65,margin:0}}>{prod.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{marginTop:"2.5rem",display:"flex",flexWrap:"wrap",gap:"1.25rem",alignItems:"center"}}>
          <a href="#contact" className="btn-g">Request a {p.label} Discovery →</a>
          <span style={{fontSize:".8rem",color:MS}}>Phase 0 · 4–8 weeks · fixed-fee · ₹2–4 Cr</span>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STATS BAND
═══════════════════════════════════════════════════════════════ */
function StatsBand() {
  return (
    <section style={{
      padding:"4.5rem 1.5rem",
      background:`linear-gradient(to right,rgba(212,175,55,.04),rgba(212,175,55,.09),rgba(212,175,55,.04))`,
      borderTop:"1px solid rgba(212,175,55,.14)",borderBottom:"1px solid rgba(212,175,55,.14)",
    }}>
      <div style={{maxWidth:1320,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"2.5rem",alignItems:"center"}}>
        {STATS.map(s=>(
          <div key={s.label} style={{textAlign:"center"}}>
            <div className="sg gg" style={{fontWeight:900,fontSize:"clamp(2.5rem,4.5vw,3.8rem)",letterSpacing:"-.05em",lineHeight:.95}}>
              {s.val}<span style={{fontSize:".55em"}}>{s.suf}</span>
            </div>
            <div style={{fontSize:".8rem",color:MS,marginTop:".6rem",lineHeight:1.5}}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPERATING MODEL (4-step visual)
═══════════════════════════════════════════════════════════════ */
function OperatingModel() {
  const steps=[
    {n:"1",step:"DISCOVER",icon:"🔍",title:"See the estate",body:"Passive TAP/SPAN analysis, certificate & trust-chain mapping, library call-site inspection → continuously updated, CERT-In-aligned CBOM. No agents in the payment path."},
    {n:"2",step:"PRIORITIZE",icon:"🧭",title:"Rank the risk",body:"Weighted quantum-exposure scoring (C, L, Q, B, M) with transparent, regulator-defensible weights → a ranked migration queue that auditors can interrogate."},
    {n:"3",step:"MIGRATE",icon:"⚡",title:"Protect without rip-and-replace",body:"Proxy/sidecar/termination-point insertion of hybrid X25519+ML-KEM-768. HSM & KMS integration. DEK re-wrap. Automated rollback. Zero application changes."},
    {n:"4",step:"PROVE",icon:"📋",title:"Evidence, not assertion",body:"Automated Evidence Pack — packet + config + performance + rollback evidence. Compliance dashboards mapped to RBI Q-SAFE, CNSA 2.0, NIS2. Regulator-ready from day one."},
  ];
  return (
    <section style={{padding:"7rem 1.5rem",background:`linear-gradient(to bottom,#030810,#040B1A,#030810)`}}>
      <div style={{maxWidth:1320,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"4rem"}}>
          <p className="slabel" style={{marginBottom:".75rem"}}>The U92 Operating Model</p>
          <h2 className="sg" style={{fontWeight:800,fontSize:"clamp(2.2rem,3.8vw,3.2rem)",letterSpacing:"-.035em",maxWidth:580,margin:"0 auto",lineHeight:1.1}}>
            <span style={{color:W}}>One platform.</span><br/>
            <span className="gg">Four stages. Zero gaps.</span>
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"1.25rem"}}>
          {steps.map((st,i)=>(
            <div key={st.n} className="glass" style={{padding:"2rem 1.75rem",position:"relative",overflow:"hidden"}}>
              {/* Step number watermark */}
              <div className="sg" style={{position:"absolute",top:"-1rem",right:"1rem",fontWeight:900,fontSize:"6rem",color:"rgba(212,175,55,.04)",letterSpacing:"-.05em",lineHeight:1,userSelect:"none"}}>{st.n}</div>
              <div style={{
                width:44,height:44,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:"1.4rem",marginBottom:"1.25rem",
                background:`linear-gradient(135deg,rgba(212,175,55,.12),rgba(212,175,55,.05))`,
                border:"1px solid rgba(212,175,55,.22)",
              }}>{st.icon}</div>
              <span className="sg slabel" style={{display:"block",marginBottom:".4rem",fontSize:".58rem"}}>{st.step}</span>
              <h3 className="sg" style={{fontWeight:800,fontSize:"1.1rem",color:W,marginBottom:".75rem"}}>{st.title}</h3>
              <p style={{fontSize:".85rem",color:MS,lineHeight:1.7,margin:0}}>{st.body}</p>
              {i<3&&<div style={{position:"absolute",right:"-1.5px",top:"50%",width:3,height:40,background:GG,transform:"translateY(-50%)",borderRadius:2}} className="hide-m"/>}
            </div>
          ))}
        </div>
        <div style={{marginTop:"2.5rem",textAlign:"center"}}>
          <p style={{fontSize:".9rem",color:MS}}>
            <strong style={{color:ML}}>Design principle: </strong>
            a policy-controlled crypto-abstraction layer (JCA / OpenSSL provider / PKCS#11) sits under all four stages. Algorithm choices live in runtime policy, never in application code — when FIPS standards rotate, U92 absorbs the change as configuration.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INDUSTRIES
═══════════════════════════════════════════════════════════════ */
function IndustriesSection() {
  return (
    <section id="industries" style={{padding:"7rem 1.5rem",background:"#030810"}}>
      <div style={{maxWidth:1320,margin:"0 auto"}}>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-end",gap:"1.5rem",marginBottom:"3.5rem"}}>
          <div>
            <p className="slabel" style={{marginBottom:".75rem"}}>Industries We Serve</p>
            <h2 className="sg" style={{fontWeight:800,fontSize:"clamp(2.2rem,3.8vw,3.2rem)",letterSpacing:"-.035em",lineHeight:1.1}}>
              <span className="gg">Where the mandate</span><br/><span style={{color:W}}>and the budget converge.</span>
            </h2>
          </div>
          <p style={{maxWidth:360,fontSize:".9rem",color:MS,lineHeight:1.72}}>Deep expertise aligned to regulated verticals where quantum exposure is largest and compliance timelines are hardest.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:"1rem"}}>
          {INDUSTRIES.map(ind=>(
            <div key={ind.name} className="icard">
              <div style={{fontSize:"2.25rem",marginBottom:"1rem"}}>{ind.icon}</div>
              <div className="sg" style={{fontWeight:800,fontSize:".97rem",color:W,marginBottom:".45rem"}}>{ind.name}</div>
              <div style={{fontSize:".78rem",color:MS,lineHeight:1.6,marginBottom:".875rem"}}>{ind.sub}</div>
              <div className="sg" style={{fontSize:".6rem",fontWeight:700,letterSpacing:".1em",color:GDK,textTransform:"uppercase"}}>{ind.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WHY UELEMENT — 6 DIFFERENTIATORS
═══════════════════════════════════════════════════════════════ */
function DiffsSection() {
  return (
    <section style={{padding:"7rem 1.5rem",background:`linear-gradient(to bottom,#030810,#040C1E)`}}>
      <div style={{maxWidth:1320,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"4rem"}}>
          <p className="slabel" style={{marginBottom:".75rem"}}>Why UElement</p>
          <h2 className="sg" style={{fontWeight:800,fontSize:"clamp(2.2rem,3.8vw,3.2rem)",letterSpacing:"-.035em",maxWidth:560,margin:"0 auto",lineHeight:1.1}}>
            <span style={{color:W}}>Six structural</span><br/><span className="gg">advantages.</span>
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))",gap:"1.25rem"}}>
          {DIFFS.map((d,i)=>(
            <div key={d.title} className="glass" style={{padding:"1.875rem"}}>
              <div style={{
                width:44,height:44,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:"1.35rem",marginBottom:"1.25rem",
                background:`linear-gradient(135deg,rgba(212,175,55,.12),rgba(212,175,55,.04))`,
                border:"1px solid rgba(212,175,55,.2)",
              }}>{d.icon}</div>
              <div className="sg" style={{fontWeight:800,fontSize:"1rem",color:W,marginBottom:".5rem"}}>{d.title}</div>
              <p style={{fontSize:".85rem",color:MS,lineHeight:1.7,margin:0}}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ENGAGEMENT JOURNEY
═══════════════════════════════════════════════════════════════ */
function JourneySection() {
  return (
    <section id="journey" style={{padding:"7rem 1.5rem",background:"#030810"}}>
      <div style={{maxWidth:1320,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"4rem"}}>
          <p className="slabel" style={{marginBottom:".75rem"}}>Engagement Model</p>
          <h2 className="sg" style={{fontWeight:800,fontSize:"clamp(2.2rem,3.8vw,3.2rem)",letterSpacing:"-.035em",maxWidth:600,margin:"0 auto .75rem",lineHeight:1.1}}>
            <span className="gg">Discovery-first,</span> <span style={{color:W}}>gate-reviewed.</span>
          </h2>
          <p style={{fontSize:".97rem",color:MS,maxWidth:480,margin:"0 auto",lineHeight:1.7}}>No migration work commences until Phase 0 has produced a verified asset inventory and dependency map.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"1rem"}}>
          {JOURNEY.map((j,i)=>(
            <div key={j.phase} className={`jcard${i===1?" highlight":""}`}>
              {/* Connector arrow */}
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.25rem"}}>
                <span className="sg" style={{fontWeight:800,fontSize:".58rem",letterSpacing:".18em",color:G,textTransform:"uppercase"}}>{j.phase}</span>
                {i<3&&<span style={{fontSize:".75rem",color:"rgba(212,175,55,.4)"}}>→ GATE</span>}
              </div>
              <h3 className="sg" style={{fontWeight:800,fontSize:"1.2rem",color:W,marginBottom:".3rem"}}>{j.title}</h3>
              <div style={{display:"flex",gap:".75rem",marginBottom:"1.25rem",alignItems:"baseline"}}>
                <span className="sg" style={{fontSize:".78rem",color:MS,fontStyle:"italic"}}>{j.dur}</span>
                <span style={{width:1,height:12,background:"rgba(212,175,55,.25)"}}/>
                <span className="sg gg" style={{fontSize:".78rem",fontWeight:700}}>{j.fee}</span>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:".45rem"}}>
                {j.items.map((item,k)=>(
                  <div key={k} style={{display:"flex",gap:".6rem",alignItems:"flex-start"}}>
                    <span style={{color:G,fontWeight:700,flexShrink:0,fontSize:".75rem",marginTop:".05rem"}}>✦</span>
                    <span style={{fontSize:".8rem",color:MS,lineHeight:1.5}}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT + PARTNERS
═══════════════════════════════════════════════════════════════ */
function AboutSection() {
  const partners=["Hitachi (co-GTM signed)","Amazon Web Services","Microsoft Azure","Google Cloud","Perforce Delphix","Synopsys BlackDuck","Open Quantum Safe","ETSI QKD WG"];
  return (
    <section id="about" style={{padding:"7rem 1.5rem",background:`linear-gradient(to bottom,#030810,#040C1E,#030810)`}}>
      <div style={{maxWidth:1320,margin:"0 auto"}}>
        <div className="col2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"center",marginBottom:"5rem"}}>
          <div>
            <p className="slabel" style={{marginBottom:".75rem"}}>About UElement</p>
            <h2 className="sg" style={{fontWeight:800,fontSize:"clamp(2rem,3.5vw,3rem)",letterSpacing:"-.035em",marginBottom:"1.5rem",lineHeight:1.1}}>
              <span style={{color:W}}>Established by innovators</span><br/><span className="gg">to define tomorrow.</span>
            </h2>
            <p style={{fontSize:"1rem",color:MS,lineHeight:1.78,marginBottom:"1.25rem"}}>
              Unified Element Technologies is a Pune-headquartered deeptech company with offices in Singapore and the UAE, operating across JAPAC, EU and AMEA. We blend deep technical expertise with research rigour to deliver transformative, future-ready solutions.
            </p>
            <p style={{fontSize:"1rem",color:MS,lineHeight:1.78,marginBottom:"2rem"}}>
              Our U92 quantum security practice is built on three years of research, 46 enterprise engagements, Shivansh Malviya's published PQC whitepaper, and a signed co-GTM with Hitachi — translating academic PQC into board-defensible, evidence-backed migration programmes.
            </p>
            <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
              <a href="#contact" className="btn-g">Meet the Team →</a>
              <a href="#contact" className="btn-o">View Whitepaper</a>
            </div>
          </div>
          {/* Approach grid */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
            {[
              {n:"01",t:"Assess & Strategize",b:"CBOM discovery, quantum exposure scoring, regulatory gap analysis across your estate."},
              {n:"02",t:"Architect & Design",b:"Reference architecture, hybrid TLS design, dependency-aware migration sequencing."},
              {n:"03",t:"Implement & Integrate",b:"Shield, Vault and Seal deployment with live Evidence Pack auto-generation."},
              {n:"04",t:"Manage & Optimise",b:"Sentinel managed ops, drift monitoring, algorithm rotation as configuration."},
            ].map(a=>(
              <div key={a.n} style={{background:"rgba(8,18,45,.7)",borderRadius:10,padding:"1.5rem",border:"1px solid rgba(212,175,55,.12)"}}>
                <div className="sg gg" style={{fontWeight:900,fontSize:".65rem",letterSpacing:".15em",marginBottom:".5rem"}}>{a.n}</div>
                <div className="sg" style={{fontWeight:800,fontSize:".9rem",color:W,marginBottom:".4rem"}}>{a.t}</div>
                <div style={{fontSize:".77rem",color:MS,lineHeight:1.6}}>{a.b}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="gold-hr" style={{marginBottom:"3rem"}}/>
        <p className="sg" style={{fontSize:".65rem",color:MS,letterSpacing:".18em",textTransform:"uppercase",textAlign:"center",marginBottom:"2rem",fontWeight:700}}>Technology Partners & Ecosystem Alliances</p>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:".875rem"}}>
          {partners.map(p=>(
            <span key={p} className="sg" style={{fontWeight:600,fontSize:".82rem",color:MS,padding:".5rem 1.25rem",borderRadius:6,border:"1px solid rgba(212,175,55,.15)",background:"rgba(212,175,55,.04)",letterSpacing:".02em"}}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════════════ */
function ContactSection({form,setForm,sent,setSent}) {
  const interests=["U92-PQC Migration","U92-QKD","U92 Crypto-Agility","U92 Prism Assessment","Edge AI","Product Engineering","DeepTech Research"];
  return (
    <section id="contact" style={{padding:"7rem 1.5rem",background:`linear-gradient(to bottom,#030810,#040C1E)`}}>
      <div style={{maxWidth:1320,margin:"0 auto"}}>
        <div className="col2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem"}}>
          {/* Info */}
          <div>
            <p className="slabel" style={{marginBottom:".75rem"}}>Get in Touch</p>
            <h2 className="sg" style={{fontWeight:800,fontSize:"clamp(2rem,3.5vw,3rem)",letterSpacing:"-.035em",marginBottom:"1.5rem",lineHeight:1.05}}>
              <span style={{color:W}}>Start with a</span><br/><span className="gg">Discovery Assessment.</span>
            </h2>
            <p style={{fontSize:".97rem",color:MS,lineHeight:1.75,marginBottom:"2.5rem"}}>
              Phase 0 (4–8 weeks, fixed fee) delivers your Cryptographic Bill of Materials, a Quantum Exposure Score, and a validated migration plan. The first protected service goes live in weeks — in parallel to your native migration programme.
            </p>
            {[
              {i:"📍",l:"Headquarters",v:"9th Floor, Pride Gateway, Sr. No. 112, Baner, Pune — 411045"},
              {i:"🌐",l:"Global Offices",v:"Pune · Singapore · Dubai (UAE)"},
              {i:"📞",l:"Phone",v:"+91 762 069 0561"},
              {i:"✉️",l:"Email",v:"contact@uelement.in"},
            ].map(c=>(
              <div key={c.l} style={{display:"flex",gap:"1rem",marginBottom:"1.25rem",alignItems:"flex-start"}}>
                <span style={{fontSize:"1.1rem",flexShrink:0,marginTop:".1rem"}}>{c.i}</span>
                <div>
                  <div className="sg" style={{fontSize:".6rem",color:MS,letterSpacing:".12em",textTransform:"uppercase",fontWeight:700,marginBottom:".2rem"}}>{c.l}</div>
                  <div style={{fontSize:".9rem",color:ML,lineHeight:1.5}}>{c.v}</div>
                </div>
              </div>
            ))}
            {/* Social */}
            <div style={{marginTop:"2rem",display:"flex",gap:".75rem"}}>
              {["Li","𝕏","Ig"].map(s=>(
                <a key={s} href="#" style={{
                  width:36,height:36,borderRadius:8,border:"1px solid rgba(212,175,55,.18)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:".75rem",color:MS,textDecoration:"none",
                  fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,
                  transition:"border-color .2s,color .2s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=G;e.currentTarget.style.color=GLT;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(212,175,55,.18)";e.currentTarget.style.color=MS;}}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Form */}
          {sent?(
            <div className="glass" style={{padding:"3rem",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.25rem",minHeight:400}}>
              <div style={{fontSize:"3rem"}}>✅</div>
              <h3 className="sg gg" style={{fontWeight:800,fontSize:"1.4rem"}}>Message received</h3>
              <p style={{color:MS,fontSize:".9rem",lineHeight:1.72,maxWidth:300}}>Our quantum security team will respond within one business day.</p>
              <button className="btn-o" onClick={()=>setSent(false)}>Send another →</button>
            </div>
          ):(
            <form onSubmit={e=>{e.preventDefault();setSent(true);}}
              className="glass" style={{padding:"2.25rem",display:"flex",flexDirection:"column",gap:"1.1rem"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
                {[["name","Full Name","Jane Smith"],["company","Company","Acme Bank Ltd"]].map(([k,l,ph])=>(
                  <div key={k}>
                    <label className="sg" style={{display:"block",fontSize:".6rem",color:MS,letterSpacing:".1em",textTransform:"uppercase",fontWeight:700,marginBottom:".375rem"}}>{l}</label>
                    <input type="text" placeholder={ph} className="uel-in" value={form[k]||""} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))}/>
                  </div>
                ))}
              </div>
              {[["email","Work Email","ciso@bank.com","email"],["phone","Phone (optional)","+91 98765 43210","tel"]].map(([k,l,ph,t])=>(
                <div key={k}>
                  <label className="sg" style={{display:"block",fontSize:".6rem",color:MS,letterSpacing:".1em",textTransform:"uppercase",fontWeight:700,marginBottom:".375rem"}}>{l}</label>
                  <input type={t} placeholder={ph} className="uel-in" value={form[k]||""} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))}/>
                </div>
              ))}
              <div>
                <label className="sg" style={{display:"block",fontSize:".6rem",color:MS,letterSpacing:".1em",textTransform:"uppercase",fontWeight:700,marginBottom:".5rem"}}>I'm interested in</label>
                <div style={{display:"flex",flexWrap:"wrap",gap:".45rem"}}>
                  {interests.map(opt=>(
                    <button type="button" key={opt} className={`chip${form.interest===opt?" on":""}`} onClick={()=>setForm(f=>({...f,interest:opt}))}>{opt}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="sg" style={{display:"block",fontSize:".6rem",color:MS,letterSpacing:".1em",textTransform:"uppercase",fontWeight:700,marginBottom:".375rem"}}>Message</label>
                <textarea rows={4} placeholder="Describe your challenge — estate scale, regulatory timeline, primary concern…" className="uel-in"
                  value={form.msg||""} onChange={e=>setForm(f=>({...f,msg:e.target.value}))} style={{resize:"vertical"}}/>
              </div>
              <button type="submit" className="btn-g" style={{justifyContent:"center",marginTop:".25rem"}}>Send Message →</button>
              <p style={{fontSize:".68rem",color:MS,textAlign:"center"}}>We respond within 1 business day · No spam, ever.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════ */
function Footer() {
  const cols=[
    {t:"U92 Practice",  l:["PQC Migration","Quantum Key Distribution","Crypto-Agility","U92 Prism","U92 Shield","U92 Vault","U92 Ledger","U92 Sentinel"]},
    {t:"Services",       l:["DeepTech Research","Edge AI","Product Engineering","DevSecOps","Cloud Solutions","Managed Security"]},
    {t:"Company",        l:["About Us","Partnerships","News Room","Careers","Investor Relations","Success Stories"]},
    {t:"Legal & Contact",l:["Privacy Policy","Terms of Use","Sitemap","+91 762 069 0561","contact@uelement.in","Pune · Singapore · UAE"]},
  ];
  return (
    <footer style={{background:"#02060E",borderTop:"1px solid rgba(212,175,55,.1)"}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"4.5rem 1.5rem 2rem"}}>
        {/* Top grid */}
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",gap:"3rem",paddingBottom:"3.5rem",borderBottom:"1px solid rgba(212,175,55,.08)"}}>
          {/* Brand */}
          <div>
            <div style={{marginBottom:"1.25rem"}}><Logo/></div>
            <p style={{fontSize:".83rem",color:MS,lineHeight:1.68,maxWidth:240,marginBottom:"1.5rem"}}>
              Deeptech company building quantum-safe infrastructure for the next era of enterprise security. Discover → Prioritize → Migrate → Prove.
            </p>
            <p style={{fontSize:".73rem",color:"rgba(143,163,191,.38)",marginBottom:"1.5rem"}}>Pune · Singapore · Dubai (UAE)</p>
            {/* Mini cipher */}
            <div style={{display:"flex",gap:".5rem",flexWrap:"wrap"}}>
              {["ML-KEM-768","FIPS-203","ML-DSA"].map(a=>(
                <span key={a} className="mono" style={{fontSize:".55rem",color:"rgba(212,175,55,.28)",letterSpacing:".06em"}}>{a}</span>
              ))}
            </div>
          </div>
          {/* Link cols */}
          {cols.map(col=>(
            <div key={col.t}>
              <div className="sg" style={{fontWeight:700,fontSize:".65rem",color:W,letterSpacing:".14em",textTransform:"uppercase",marginBottom:"1.1rem"}}>{col.t}</div>
              {col.l.map(l=><a key={l} href="#" className="ft">{l}</a>)}
            </div>
          ))}
        </div>
        {/* Bottom */}
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",paddingTop:"1.75rem",gap:"1rem"}}>
          <span style={{fontSize:".72rem",color:"rgba(143,163,191,.32)"}}>© 2026 Unified Element Technologies Private Limited. All rights reserved.</span>
          <div style={{display:"flex",gap:".75rem",alignItems:"center"}}>
            <span className="sg slabel" style={{fontSize:".55rem"}}>U92 · Quantum Security Practice</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════ */
export default function UElementQuantum() {
  const [navOpen,  setNavOpen]  = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [form,     setForm]     = useState({});

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>56);
    window.addEventListener("scroll",fn,{passive:true});
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  return (
    <div style={{fontFamily:"'Inter','Helvetica Neue',sans-serif",color:W,background:BG,overflowX:"hidden"}}>
      <GS/>
      <Nav scrolled={scrolled} open={navOpen} setOpen={setNavOpen}/>
      <Hero/>
      <MandateMarquee/>
      <ThreatSection/>
      <PracticeSection/>
      <StatsBand/>
      <OperatingModel/>
      <IndustriesSection/>
      <DiffsSection/>
      <JourneySection/>
      <AboutSection/>
      <ContactSection form={form} setForm={setForm} sent={formSent} setSent={setFormSent}/>
      <Footer/>
    </div>
  );
}
