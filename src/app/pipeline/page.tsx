'use client';

import { Plus, Sparkles, Filter, Search } from 'lucide-react';

type Deal = {
  title: string;
  sub: string;
  value: string;
  score: number;
  days: number;
  initials: string;
  urgent?: boolean;
};

type Stage = {
  id: string;
  label: string;
  color: string;
  deals: Deal[];
};

const stages: Stage[] = [
  {
    id: 'discovery',
    label: 'Discovery',
    color: '#a3a6ff',
    deals: [
      { title: 'Skylark Residences', sub: 'Premium Penthouse Design Cluster', value: '$420K', score: 78, days: 12, initials: 'SR' },
      { title: 'Nexus Tech Hub', sub: 'LEED Certified Office Interior', value: '$680K', score: 65, days: 8, initials: 'NT' },
      { title: 'Oasis Living Tower', sub: 'Biophilic Residential Complex', value: '$310K', score: 70, days: 5, initials: 'OL' },
    ],
  },
  {
    id: 'proposal',
    label: 'Proposal',
    color: '#34b5fa',
    deals: [
      { title: 'Azure Coast Resort', sub: 'Sustainable Waterfront Pavilion', value: '$1.2M', score: 85, days: 21, initials: 'AC' },
      { title: 'Modern Art Annex', sub: 'Galleria Extension Masterplan', value: '$550K', score: 82, days: 16, initials: 'MA' },
    ],
  },
  {
    id: 'negotiation',
    label: 'Negotiation',
    color: '#e1c3ff',
    deals: [
      { title: 'Emerald Plaza', sub: 'Mixed-use Landscape Architecture', value: '$890K', score: 92, days: 34, initials: 'EP', urgent: true },
    ],
  },
  {
    id: 'closing',
    label: 'Closing',
    color: '#fbbf24',
    deals: [
      { title: 'Thorne Tower Phase II', sub: 'Structural & Interior Systems', value: '$2.1M', score: 97, days: 45, initials: 'TT' },
    ],
  },
  {
    id: 'won',
    label: 'Won',
    color: '#4ade80',
    deals: [
      { title: 'Silverline Mixed Dev', sub: 'Full Architecture Package', value: '$1.65M', score: 100, days: 60, initials: 'SM' },
    ],
  },
];

const totalValue = '$6.97M';

export default function PipelinePage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Sales Pipeline</h1>
          <p className="page-subtitle">Orchestrate your high-value architectural contracts with precision and clarity.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button className="btn btn-secondary btn-sm"><Filter size={14} /> Filter</button>
          <button className="btn btn-primary btn-sm"><Plus size={14} /> Add Deal</button>
        </div>
      </div>

      <div className="page-body">
        {/* Summary bar */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', padding: '1rem 1.25rem', background: 'var(--surface-container)', borderRadius: 'var(--radius-xl)'}}>
          <div>
            <div className="metric-label">Total Pipeline</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--secondary)' }}>{totalValue}</div>
          </div>
          {stages.map(s => (
            <div key={s.id} style={{ paddingLeft: '1.5rem', borderLeft: '1px solid rgba(64,72,93,0.3)'}}>
              <div className="metric-label">{s.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: s.color }}>{s.deals.length} deal{s.deals.length !== 1 ? 's' : ''}</div>
            </div>
          ))}
        </div>

        {/* Kanban */}
        <div className="pipeline-board">
          {stages.map((stage) => (
            <div key={stage.id} className="pipeline-column">
              <div className="pipeline-column-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: stage.color, display: 'inline-block', boxShadow: `0 0 6px ${stage.color}` }} />
                  <span className="pipeline-column-title" style={{ color: stage.color }}>{stage.label}</span>
                </div>
                <span className="pipeline-count">{stage.deals.length}</span>
              </div>

              {stage.deals.map((deal) => (
                <div key={deal.title} className="deal-card" style={{ borderLeft: deal.urgent ? `3px solid ${stage.color}` : undefined }}>
                  {deal.urgent && (
                    <div className="ai-chip" style={{ marginBottom: '0.625rem', fontSize: '0.625rem' }}>
                      <Sparkles size={9} /> Closing forecasted this month
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
                    <div className="avatar avatar-sm" style={{ background: `linear-gradient(135deg, ${stage.color}88, ${stage.color}44)`, color: stage.color, fontFamily: 'var(--font-display)', fontSize: '0.625rem', fontWeight: 700 }}>
                      {deal.initials}
                    </div>
                    <div>
                      <div className="deal-card-title">{deal.title}</div>
                    </div>
                  </div>
                  <div className="deal-card-sub">{deal.sub}</div>
                  <div className="deal-card-value" style={{ color: stage.color }}>{deal.value}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem' }}>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--on-surface-variant)' }}>{deal.days}d in stage</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <div style={{ width: 48, height: 3, background: 'var(--surface-container-highest)', borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ width: `${deal.score}%`, height: '100%', background: stage.color, borderRadius: 99 }} />
                      </div>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--on-surface-variant)' }}>{deal.score}</span>
                    </div>
                  </div>
                </div>
              ))}

              <button style={{
                width: '100%', padding: '0.625rem', border: '1px dashed rgba(109,117,140,0.3)',
                borderRadius: 'var(--radius-lg)', background: 'transparent', color: 'var(--on-surface-variant)',
                cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', fontSize: '0.8125rem',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface-container-high)'; e.currentTarget.style.color = 'var(--on-surface)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--on-surface-variant)'; }}>
                <Plus size={14} /> Add Deal
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
