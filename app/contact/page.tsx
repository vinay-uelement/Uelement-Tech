'use client';

import Link from 'next/link';
import { useState } from 'react';
import ModalForm from '@/components/ui/ModalForm';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: "I'm interested in…",
    message: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demo form — wire to your CRM or mail endpoint.');
  };

  return (
    <>
      <div className="hero"><div className="hero-fabric" /><div className="wrap">
        <div className="crumb"><Link href="/">Home</Link> / Contact</div>
        <div className="kicker">Contact</div>
        <h1 className="display" style={{ fontSize: 'var(--text-display)' }}>Start the conversation.</h1>
        <p className="lede" style={{ marginTop: 20 }}>Whether it&apos;s a quantum risk assessment, a 45-day Vizor proof of value, a tactical-edge briefing, or a partnership — tell us what you&apos;re solving for.</p>
      </div></div>

      <div className="section alt"><div className="wrap grid2" style={{ alignItems: 'start' }}>
        <div className="card">
          <h4 style={{ marginBottom: 18 }}>Send us a message</h4>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '13px 16px',
                color: 'var(--white)',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
              }}
            />
            <input
              type="email"
              placeholder="Work email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '13px 16px',
                color: 'var(--white)',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
              }}
            />
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '13px 16px',
                color: 'var(--slate-300)',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
              }}
            >
              <option>I&apos;m interested in…</option>
              <option>MainSTAY — Nexus / Vizor / Kayak</option>
              <option>MainSPAR — tactical edge</option>
              <option>U92 — quantum security</option>
              <option>Partnership or careers</option>
            </select>
            <textarea
              rows={4}
              placeholder="What are you solving for?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '13px 16px',
                color: 'var(--white)',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                resize: 'vertical',
              }}
            />
            <button type="submit" className="btn btn-gold">
              Send message
            </button>
            <button type="button" onClick={() => setIsModalOpen(true)} className="btn btn-line" style={{ marginTop: '12px' }}>
              Upload Document (Modal)
            </button>
          </form>
          <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
        <div>
          <div className="kicker">Reach us directly</div>
          <table className="spec" style={{ marginTop: 20 }}>
            <tbody>
              <tr><td>MainSTAY</td><td className="mono">mainstay@uelement.in</td></tr>
              <tr><td>Vizor</td><td className="mono">vizor.uelement.in</td></tr>
              <tr><td>Headquarters</td><td>Pune, Maharashtra, India</td></tr>
              <tr><td>Regional</td><td>Singapore · UAE</td></tr>
            </tbody>
          </table>
          <p className="mut" style={{ marginTop: 22, fontSize: 13 }}>For defence and government pursuits, request a classified-appropriate briefing channel through the form.</p>
        </div>
      </div></div>
    </>
  );
}
