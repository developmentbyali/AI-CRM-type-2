'use client';

import { Sparkles, Upload, FileText, Search, Filter, FolderOpen } from 'lucide-react';

const docs = [
  { title: 'Thorne Tower — Master Contract', type: 'Contract', size: '2.4MB', date: 'Apr 8, 2025', status: 'Signed', color: '#4ade80' },
  { title: 'Azure Coast Resort — Proposal v3', type: 'Proposal', size: '5.1MB', date: 'Apr 6, 2025', status: 'In Review', color: '#fbbf24' },
  { title: 'Emerald Plaza — NDA Agreement', type: 'Legal', size: '0.8MB', date: 'Apr 3, 2025', status: 'Pending', color: '#ff716c' },
  { title: 'Skylark Residences — Technical Spec', type: 'Spec', size: '3.7MB', date: 'Mar 28, 2025', status: 'Signed', color: '#4ade80' },
  { title: 'Q1 Financial Summary', type: 'Finance', size: '1.2MB', date: 'Mar 25, 2025', status: 'Final', color: '#34b5fa' },
  { title: 'Legacy Fund — Due Diligence Pack', type: 'Legal', size: '8.3MB', date: 'Mar 20, 2025', status: 'In Review', color: '#fbbf24' },
];

const statusClass: Record<string, string> = {
  Signed: 'badge badge-success',
  'In Review': 'badge badge-warning',
  Pending: 'badge badge-error',
  Final: 'badge badge-secondary',
};

const typeIcon: Record<string, string> = {
  Contract: '📄', Proposal: '📋', Legal: '⚖️', Spec: '📐', Finance: '📊',
};

export default function DocumentsPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">AI Document Manager</h1>
          <p className="page-subtitle">Centralised contract intelligence with AI-powered analysis.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn btn-secondary btn-sm"><Upload size={14} /> Upload</button>
          <button className="btn btn-primary btn-sm"><FileText size={14} /> New Document</button>
        </div>
      </div>

      <div className="page-body">
        {/* AI summary */}
        <div className="ai-insight" style={{ marginBottom: '1.5rem', borderColor: 'rgba(163,166,255,0.15)' }}>
          <div className="ai-insight-header">
            <Sparkles size={14} color="var(--tertiary)" />
            <span className="ai-insight-title">AI Document Analysis</span>
          </div>
          <p className="ai-insight-body">
            <strong style={{ color: 'var(--on-surface)' }}>3 documents require attention:</strong>{' '}
            Azure Coast Resort proposal has been opened 6 times by the client — a strong signal of engagement. Emerald Plaza NDA is still pending counter-signature. Legacy Fund due diligence pack has a clause mismatch on page 14 flagged by AI.
          </p>
        </div>

        {/* Stats */}
        <div className="metric-grid" style={{ marginBottom: '1.5rem' }}>
          {[
            { label: 'Total Documents', value: docs.length.toString() },
            { label: 'Awaiting Signature', value: '3' },
            { label: 'AI Flagged Issues', value: '2' },
            { label: 'Storage Used', value: '21.5GB' },
          ].map(m => (
            <div key={m.label} className="metric-card">
              <div className="metric-label">{m.label}</div>
              <div className="metric-value">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'center' }}>
          <div className="search-bar" style={{ flex: 1, maxWidth: 380 }}>
            <Search size={15} color="var(--on-surface-variant)" />
            <input placeholder="Search documents…" />
          </div>
          <button className="btn btn-secondary btn-sm"><Filter size={14} /> Filter</button>
        </div>

        {/* Document grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {docs.map(doc => (
            <div key={doc.title} className="card" style={{ cursor: 'pointer', transition: 'all 0.2s', background: 'var(--surface-container)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <div style={{ fontSize: '1.5rem', background: 'var(--surface-container-high)', width: 44, height: 44, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {typeIcon[doc.type] || '📁'}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{doc.type} · {doc.size}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '0.875rem', borderTop: '1px solid rgba(64,72,93,0.2)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{doc.date}</span>
                <span className={statusClass[doc.status]}>{doc.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
