import Link from 'next/link';
import GoldenRatioSphere from '@/components/ui/GoldenRatioSphere';

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <div className="hero">
        <div className="hero-fabric" />
        
        {/* Golden Ratio Sphere Background */}
        <div className="absolute inset-0 pointer-events-none mix-blend-screen hidden md:flex justify-center z-0">
          <div className="w-full max-w-[1100px] relative h-full mx-auto">
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-full md:w-1/2">
              <GoldenRatioSphere showControls={false} />
            </div>
          </div>
        </div>

        <div className="wrap relative z-10">
          <div className="text-(--gold-500)">सशक्त · सक्षम · सुरक्षित</div>
          <h1 className="display ">
            Sovereign <span className='au'>DeepTech</span>
            <br />
            for the <span className='au'>Systems</span> that
            <br />
            <span className="">cannot fail</span>.
          </h1>
          <p className="lede" style={{ marginTop: 22 }}>
            We build the platforms nations and enterprises run when the stakes are absolute —
            quantum-safe security, autonomous resilience at the tactical edge, and a digital fabric
            that binds the enterprise together. Headquartered in Pune. Operating globally.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            <Link href="/company" className="btn btn-gold">
              About Us
            </Link>
            <Link href="/mainstay" className="btn btn-line">
              Explore the platforms
            </Link>
          </div>
          <div className="proglist" style={{ marginTop: 64 }}>
            <Link href="/u92">
              <span>U92 Quantum</span>
            </Link>
            <Link href="/mainstay">
              <span>MainSTAY</span>
            </Link>
            <Link href="/mainspar">
              <span>MainSPAR</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════ THE PORTFOLIO ═══════ */}
      <div className="section alt">
        <div className="wrap">
          <div className="kicker" style={{ color: 'var(--navy-800)' }}>The portfolio</div>
          <h2 className="display text-navy-gradient">
            Two programs. One practice.
            <br />
            Every layer of <span className="au">sovereignty.</span>
          </h2>
          <div className="grid3" style={{ marginTop: 44 }}>
            <Link href="/u92" className="card link" style={{ textDecoration: 'none' }}>
              <div className="proglabel">U92</div>
              <h4>U92 Quantum Security</h4>
              <p>
                Named for uranium&apos;s atomic number, engineered for the quantum decade. Post-quantum
                cryptography, quantum key distribution, and crypto-agility for banks, governments,
                and critical infrastructure.
              </p>
              <p className="mono" style={{ marginTop: 14, color: 'var(--gold-500)' }}>
                PQC · QKD · Crypto-Agility →
              </p>
            </Link>
            <Link href="/mainstay" className="card link" style={{ textDecoration: 'none' }}>
              <div className="proglabel slate">MainSTAY</div>
              <h4>MainSTAY</h4>
              <p>
                The enterprise platform trio. Nexus projects your business outward, Vizor watches
                every digital signal, Kayak commands the physical world. One control plane, one
                identity, one audit trail.
              </p>
              <p className="mono" style={{ marginTop: 14, color: 'var(--gold-500)' }}>
                Nexus · Vizor · Kayak →
              </p>
            </Link>
            <Link href="/mainspar" className="card link" style={{ textDecoration: 'none' }}>
              <div className="proglabel slate">MainSPAR</div>
              <h4>MainSPAR</h4>
              <p>
                Autonomous resilience for the tactical edge. A sovereign MLOps ecosystem for denied,
                degraded, intermittent and limited environments — we don&apos;t connect the edge to the
                cloud, we turn the edge into the cloud.
              </p>
              <p className="mono" style={{ marginTop: 14, color: 'var(--gold-500)' }}>
                MerlinOS · MustangC3 · MesoGRID →
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════ WHY UELEMENT ═══════ */}
      <div className="section navy">
        <div className="wrap grid2" style={{ alignItems: 'center' }}>
          <div>
            <div className="kicker">Why UElement</div>
            <p className="serif-line">
              Harvest now, decrypt later is not a hypothesis. It is a procurement line item in
              adversary budgets.
            </p>
            <p className="mut" style={{ marginTop: 18 }}>
              Every platform we ship is built on the same convictions: cryptography must survive the
              quantum transition, systems must operate when networks are denied, and evidence must be
              generated as operational exhaust — not reconstructed for audit season.
            </p>
          </div>
          <div className="grid2">
            <div className="stat">
              <b>3</b>
              <span>Global offices — Pune HQ, Singapore, UAE</span>
            </div>
            <div className="stat">
              <b>2 + 1</b>
              <span>DeepTech programs and a dedicated quantum practice</span>
            </div>
            <div className="stat">
              <b>500+</b>
              <span>Pre-built adaptors and protocol parsers across IT and OT</span>
            </div>
            <div className="stat">
              <b>0</b>
              <span>Blind spots we consider acceptable</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ INDUSTRIES ═══════ */}
      <div className="section navy">
        <div className="wrap">
          <div className="kicker">Industries</div>
          <h2 className="display">
            Built where failure is <span className="au">not an option</span>.
          </h2>
          <div className="grid3" style={{ marginTop: 40 }}>
            <Link href="/industries" className="card link" style={{ textDecoration: 'none' }}>
              <h4>Defence &amp; Aerospace</h4>
              <p>Air-gapped deployment, DDIL operation, ITAR-free export eligibility.</p>
            </Link>
            <Link href="/industries" className="card link" style={{ textDecoration: 'none' }}>
              <h4>Banking &amp; Financial Services</h4>
              <p>
                Quantum-safe transactions, UPI/CBS journey observability, RBI and SEBI compliance
                fabric.
              </p>
            </Link>
            <Link href="/industries" className="card link" style={{ textDecoration: 'none' }}>
              <h4>Manufacturing &amp; Industrial OT</h4>
              <p>
                Purdue-native monitoring, 40+ OT protocol parsers, passive-by-architecture at
                Levels 0–2.
              </p>
            </Link>
            <Link href="/industries" className="card link" style={{ textDecoration: 'none' }}>
              <h4>Government &amp; Public Sector</h4>
              <p>
                Sovereign cloud, CERT-In 6-hour reporting, Make-in-India GeM procurement readiness.
              </p>
            </Link>
            <Link href="/industries" className="card link" style={{ textDecoration: 'none' }}>
              <h4>Healthcare &amp; Pharma</h4>
              <p>
                HIPAA and DPDP compliance, clinical uptime, serialized provenance from factory to
                patient.
              </p>
            </Link>
            <Link href="/industries" className="card link" style={{ textDecoration: 'none' }}>
              <h4>Datacenter &amp; Warehouse</h4>
              <p>
                Rack space, hardware, power and movement metered as services on a
                blockchain-verified fabric.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════ CREAM QUOTE ═══════ */}
      <div className="section cream">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="serif-line" style={{ maxWidth: 760, margin: '0 auto' }}>
            &quot;We don&apos;t connect the edge to the cloud.
            <br />
            We turn the edge into the cloud.&quot;
          </p>
          <p
            className="mut"
            style={{
              marginTop: 16,
              fontFamily: 'var(--font-heading)',
              fontSize: 12,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            The MainSPAR thesis
          </p>
          <Link href="/mainspar" className="btn btn-gold" style={{ marginTop: 28 }}>
            See how
          </Link>
        </div>
      </div>
    </>
  );
}
