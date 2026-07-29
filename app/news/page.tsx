import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News Room — UElement Technologies',
  description: 'Announcements, media coverage, and the public conversation on quantum security and sovereign technology.',
};

export default function NewsPage() {
  return (
    <>
      <div className="hero"><div className="hero-fabric" /><div className="wrap">
        <div className="crumb"><Link href="/">Home</Link> / Company / News Room</div>
        <div className="kicker">News Room</div>
        <h1 className="display" style={{ fontSize: 'var(--text-display)' }}>In the conversation.</h1>
        <p className="lede" style={{ marginTop: 20 }}>Announcements, media coverage, and the public conversation on quantum security and sovereign technology.</p>
      </div></div>
      <div className="section alt"><div className="wrap">
        <div className="grid3">
          <div className="card"><div className="tag">Media</div><h4>All India Radio</h4><p>Leadership commentary on quantum security and India&apos;s deeptech moment, broadcast nationally.</p></div>
          <div className="card"><div className="tag">Commentary</div><h4>Professional insights</h4><p>Ongoing perspectives on quantum-safe migration, sovereign platforms, and the deeptech economy on LinkedIn.</p></div>
          <div className="card"><div className="tag">Forums</div><h4>Industry engagements</h4><p>Briefings and talks across BFSI, defence, and public-sector technology forums.</p></div>
        </div>
        <div className="card" style={{ marginTop: 26 }}><div className="grid2" style={{ alignItems: 'center' }}><div><h4>Press &amp; media inquiries</h4><p>For interviews, comments, and press material, reach the communications desk.</p></div><div style={{ textAlign: 'right' }}><Link href="/contact" className="btn btn-gold">Contact communications</Link></div></div></div>
      </div></div>
    </>
  );
}
