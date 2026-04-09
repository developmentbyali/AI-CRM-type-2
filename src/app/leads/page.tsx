'use client';

import { useState } from 'react';
import { Sparkles, Search, Filter, Plus, Mail, Phone, Star } from 'lucide-react';

const leads = [
  {
    id: 1, name: 'Julianne Vance', role: 'Principal at Vance & Partners',
    score: 88, stage: 'Hot', email: 'j.vance@vancepar.com', phone: '+1 (555) 301-4421',
    initials: 'JV', color: '#a3a6ff', lastContact: '2 days ago', value: '$780K',
    ai: 'Strong engagement signals. Call within 48 hours.',
  },
  {
    id: 2, name: 'Harlan Kross', role: 'Estate Developer, Lux-Global',
    score: 76, stage: 'Warm', email: 'h.kross@luxglobal.io', phone: '+1 (555) 882-0034',
    initials: 'HK', color: '#34b5fa', lastContact: '5 days ago', value: '$1.3M',
    ai: 'Budget confirmed. Waiting for board approval.',
  },
  {
    id: 3, name: 'Marcus Sterling', role: 'Legacy Real Estate Fund',
    score: 95, stage: 'Hot', email: 'marcus@legacyfund.com', phone: '+1 (555) 092-8812',
    initials: 'MS', color: '#6063ee', lastContact: '1 day ago', value: '$2.1M',
    ai: 'Negotiation Outlook — 92% readiness. Priority: structural finance documentation.',
  },
  {
    id: 4, name: 'Elena Wright', role: 'Independent Consultant',
    score: 62, stage: 'Warm', email: 'e.wright@arch.co', phone: '+1 (555) 541-9900',
    initials: 'EW', color: '#e1c3ff', lastContact: '1 week ago', value: '$320K',
    ai: 'Follow up with revised proposal deck.',
  },
  {
    id: 5, name: 'Sarah Chen', role: 'Studio Director, Urban Loft',
    score: 81, stage: 'Hot', email: 's.chen@urbanloft.design', phone: '+1 (555) 778-2213',
    initials: 'SC', color: '#17a8ec', lastContact: '3 days ago', value: '$560K',
    ai: 'High sentiment score. Schedule site visit.',
  },
];

const stageColor: Record<string, string> = {
  Hot: 'badge-error',
  Warm: 'badge-warning',
  Cold: 'badge-secondary',
};

export default function LeadsPage() {
  const [selected, setSelected] = useState(leads[2]);
  const [search, setSearch] = useState('');

  const filtered = leads.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Lead Management</h1>
          <p className="page-subtitle">AI-powered qualification and prioritisation for high-value prospects.</p>
        </div>
        <button className="btn btn-primary btn-sm"><Plus size={14} /> Add Lead</button>
      </div>

      <div className="page-body">
        <div className="two-col" style={{ gridTemplateColumns: '320px 1fr' }}>
          {/* Lead list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="search-bar">
              <Search size={15} color="var(--on-surface-variant)" />
              <input placeholder="Search leads…" value={search} onChange={e => setSearch(e.target.value)} />
            </div>

            {filtered.map(lead => (
              <div
                key={lead.id}
                onClick={() => setSelected(lead)}
                style={{
                  padding: '1rem',
                  background: selected.id === lead.id ? 'var(--surface-container-high)' : 'var(--surface-container)',
                  borderRadius: 'var(--radius-xl)',
                  cursor: 'pointer',
                  border: selected.id === lead.id ? '1px solid rgba(163,166,255,0.25)' : '1px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="avatar avatar-md" style={{ background: `linear-gradient(135deg, ${lead.color}, ${lead.color}55)` }}>
                    {lead.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--on-surface)' }}>{lead.name}</span>
                      <span className={`badge ${stageColor[lead.stage]}`}>{lead.stage}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginTop: '0.125rem' }}>{lead.role}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 80, height: 4, background: 'var(--surface-container-highest)', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ width: `${lead.score}%`, height: '100%', background: lead.color, borderRadius: 99 }} />
                    </div>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--on-surface-variant)', fontWeight: 600 }}>{lead.score}</span>
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--on-surface-variant)' }}>{lead.lastContact}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Header card */}
            <div className="card" style={{ background: 'var(--surface-container)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div className="avatar avatar-lg" style={{ background: `linear-gradient(135deg, ${selected.color}, ${selected.color}55)` }}>
                  {selected.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{selected.name}</h2>
                    <span className={`badge ${stageColor[selected.stage]}`}>{selected.stage}</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginTop: '0.125rem' }}>{selected.role}</div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    <a href={`mailto:${selected.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--secondary)' }}>
                      <Mail size={14} />{selected.email}
                    </a>
                    <a href={`tel:${selected.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--on-surface-variant)' }}>
                      <Phone size={14} />{selected.phone}
                    </a>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>{selected.value}</div>
                  <div className="metric-label">Est. Value</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem' }}>
                <button className="btn btn-primary btn-sm"><Mail size={14} /> Send Email</button>
                <button className="btn btn-secondary btn-sm"><Phone size={14} /> Call Now</button>
                <button className="btn btn-secondary btn-sm"><Star size={14} /> Mark Priority</button>
              </div>
            </div>

            {/* AI Insight */}
            <div className="ai-insight" style={{ borderColor: 'rgba(163,166,255,0.15)' }}>
              <div className="ai-insight-header">
                <Sparkles size={14} color="var(--tertiary)" />
                <span className="ai-insight-title">AI Intelligence Report · Negotiation Outlook</span>
              </div>
              <p className="ai-insight-body">{selected.ai}</p>
            </div>

            {/* Scores */}
            <div className="three-col">
              {[
                { label: 'Lead Score', value: `${selected.score}/100`, color: selected.color },
                { label: 'Sentiment', value: 'Positive', color: '#34b5fa' },
                { label: 'Priority', value: selected.score > 85 ? 'High' : 'Medium', color: '#fbbf24' },
              ].map(s => (
                <div key={s.label} className="metric-card" style={{ textAlign: 'center' }}>
                  <div className="metric-label">{s.label}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: s.color }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Activity timeline */}
            <div className="card" style={{ background: 'var(--surface-container)' }}>
              <div className="section-title" style={{ marginBottom: '1rem' }}>Recent Activity</div>
              <div className="timeline">
                {[
                  { title: 'Proposal sent', time: '2 days ago', body: 'Architectural design proposal v3 sent via DocuSign.' },
                  { title: 'Discovery call', time: '1 week ago', body: 'Discussed Q4 budget allocation and timeline expectations.' },
                  { title: 'Initial contact', time: '2 weeks ago', body: 'Inbound via referral from Marcus Thorne.' },
                ].map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-item-title">{item.title}</div>
                    <div className="timeline-item-time">{item.time}</div>
                    <div className="timeline-item-body">{item.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
