'use client';

import { useState } from 'react';

export default function ModalForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [dropdownValue, setDropdownValue] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted with: ' + dropdownValue + ' and file: ' + (file?.name || 'none'));
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'linear-gradient(#141414, #141414) padding-box, var(--metal-edge-soft) border-box',
          border: '1px solid transparent',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          width: '100%',
          maxWidth: '400px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: 'var(--grey-350)',
            cursor: 'pointer',
            fontSize: '18px',
          }}
        >
          ✕
        </button>
        
        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--cream-100)', marginBottom: '24px' }}>
          Upload Document
        </h4>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--grey-350)' }}>
              Document Type
            </label>
            <select
              value={dropdownValue}
              onChange={(e) => setDropdownValue(e.target.value)}
              required
              style={{
                width: '100%',
                background: 'var(--ink-850)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 16px',
                color: 'var(--white)',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
              }}
            >
              <option value="" disabled>Select a type...</option>
              <option value="report">Annual Report</option>
              <option value="audit">Audit Document</option>
              <option value="other">Other PDF</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: 'var(--grey-350)' }}>
              Import PDF
            </label>
            <input
              type="file"
              accept=".pdf"
              required
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{
                width: '100%',
                background: 'var(--ink-850)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '10px',
                color: 'var(--white)',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
              }}
            />
          </div>

          <button type="submit" className="btn btn-gold" style={{ marginTop: '12px' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
