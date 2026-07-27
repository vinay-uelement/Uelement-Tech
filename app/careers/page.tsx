import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers — UElement Technologies',
  description: 'Build things that must not fail. Join quantum cryptographers, edge AI engineers, and platform builders.',
};

export default function CareersPage() {
  return (
    <>
      <div className="hero"><div className="hero-fabric" /><div className="wrap">
        <div className="crumb"><Link href="/">Home</Link> / Company / Careers</div>
        <div className="kicker">Careers</div>
        <h1 className="display" style={{ fontSize: 'var(--text-display)' }}>Build things that must not fail.</h1>
        <p className="lede" style={{ marginTop: 20 }}>We hire engineers, researchers, and operators who want their work to matter at national scale — quantum cryptographers, edge AI engineers, OT security specialists, roboticists, and platform builders.</p>
        <Link href="/contact" className="btn btn-gold" style={{ marginTop: 28 }}>Write to us</Link>
      </div></div>
      <div className="section alt"><div className="wrap grid3">
        <div className="card"><h4>Quantum &amp; cryptography</h4><p>PQC migration engineering, QKD integration, crypto-agility tooling.</p></div>
        <div className="card"><h4>Edge AI &amp; autonomy</h4><p>Sovereign MLOps, agentic C2, mesh networking for DDIL environments.</p></div>
        <div className="card"><h4>Platform engineering</h4><p>Observability at scale, OT protocol engineering, blockchain custody, robotics.</p></div>
      </div></div>
    </>
  );
}
