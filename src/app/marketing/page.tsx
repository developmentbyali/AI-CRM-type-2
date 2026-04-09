'use client';

import { Sparkles, Mail, Users, TrendingUp, Send, Plus, BarChart2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const campaigns = [
  { name: 'Q4 Architectural Outreach', status: 'Active', sent: 1240, opened: 684, clicked: 312, unsubscribed: 8, color: '#a3a6ff' },
  { name: 'Premium Client Re-engagement', status: 'Active', sent: 380, opened: 241, clicked: 134, unsubscribed: 3, color: '#34b5fa' },
  { name: 'Nexus Hub Targeted Sequence', status: 'Paused', sent: 94, opened: 72, clicked: 44, unsubscribed: 1, color: '#e1c3ff' },
  { name: 'Skyline Referral Programme', status: 'Scheduled', sent: 0, opened: 0, clicked: 0, unsubscribed: 0, color: '#fbbf24' },
];

const openRateData = [
  { week: 'W1', rate: 48 }, { week: 'W2', rate: 55 }, { week: 'W3', rate: 52 },
  { week: 'W4', rate: 61 }, { week: 'W5', rate: 58 }, { week: 'W6', rate: 67 },
];

const statusBadge: Record<string, string> = {
  Active: 'badge badge-success', Paused: 'badge badge-warning', Scheduled: 'badge badge-primary',
};

export default function MarketingPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">AI Marketing Hub</h1>
          <p className="page-subtitle">Intelligent campaign management and client engagement orchestration.</p>
        </div>
        <button className="btn btn-primary btn-sm"><Plus size={14} /> New Campaign</button>
      </div>

      <div className="page-body">
        {/* AI insight */}
        <div className="ai-insight" style={{ marginBottom: '1.5rem', borderColor: 'rgba(52,181,250,0.2)' }}>
          <div className="ai-insight-header">
            <Sparkles size={14} color="var(--tertiary)" />
            <span className="ai-insight-title">AI Campaign Intelligence</span>
          </div>
          <p className="ai-insight-body">
            Your Q4 Outreach campaign has a <strong style={{ color: 'var(--secondary)' }}>55.2% open rate</strong> — 18% above industry average. AI suggests personalising subject lines for the 556 unopened contacts to lift performance by an estimated 14%.
          </p>
          <button className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>Personalise Now</button>
        </div>

        {/* Stats */}
        <div className="metric-grid" style={{ marginBottom: '1.5rem' }}>
          {[
            { label: 'Total Sent', value: '1,714', icon: Send },
            { label: 'Open Rate', value: '55.2%', icon: Mail },
            { label: 'Click Rate', value: '28.6%', icon: TrendingUp },
            { label: 'Active Segments', value: '12', icon: Users },
          ].map(m => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="metric-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div className="metric-label">{m.label}</div>
                  <Icon size={16} color="var(--on-surface-variant)" />
                </div>
                <div className="metric-value">{m.value}</div>
              </div>
            );
          })}
        </div>

        <div className="two-col">
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Campaigns */}
            <div className="card">
              <div className="section-title" style={{ marginBottom: '1rem' }}>Active Campaigns</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {campaigns.map(c => (
                  <div key={c.name} style={{
                    padding: '1rem', background: 'var(--surface-container)',
                    borderRadius: 'var(--radius-xl)', borderLeft: `3px solid ${c.color}`,
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--on-surface)' }}>{c.name}</div>
                      <span className={statusBadge[c.status]}>{c.status}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
                      {[
                        { label: 'Sent', value: c.sent.toLocaleString() },
                        { label: 'Opened', value: c.opened.toLocaleString() },
                        { label: 'Clicked', value: c.clicked.toLocaleString() },
                        { label: 'Open %', value: c.sent ? `${Math.round(c.opened / c.sent * 100)}%` : '—' },
                      ].map(s => (
                        <div key={s.label}>
                          <div style={{ fontSize: '0.6875rem', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: c.color, marginTop: '0.125rem' }}>{s.value}</div>
                        </div>
                      ))}
                    </div>
                    {c.sent > 0 && (
                      <div style={{ marginTop: '0.75rem' }}>
                        <div style={{ height: 4, background: 'var(--surface-container-highest)', borderRadius: 99, overflow: 'hidden' }}>
                          <div style={{ width: `${c.opened / c.sent * 100}%`, height: '100%', background: c.color, borderRadius: 99 }} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Open rate trend */}
            <div className="card">
              <div className="section-title" style={{ marginBottom: '1rem' }}>Open Rate Trend (6 Weeks)</div>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={openRateData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(64,72,93,0.3)" />
                  <XAxis dataKey="week" tick={{ fill: '#a3aac4', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#a3aac4', fontSize: 11 }} axisLine={false} tickLine={false} unit="%" />
                  <Tooltip contentStyle={{ background: '#141f38', border: '1px solid rgba(64,72,93,0.4)', borderRadius: 12, color: '#dee5ff' }} />
                  <Line type="monotone" dataKey="rate" stroke="#34b5fa" strokeWidth={2.5} dot={{ fill: '#34b5fa', r: 4 }} name="Open Rate" unit="%" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card" style={{ background: 'var(--surface-container)' }}>
              <div className="section-title" style={{ marginBottom: '1rem' }}>Top Segments</div>
              {[
                { name: 'High-Value Prospects (>$1M)', count: 34, color: '#a3a6ff' },
                { name: 'Re-engagement — 60d Inactive', count: 128, color: '#34b5fa' },
                { name: 'Post-Proposal Follow-up', count: 22, color: '#e1c3ff' },
                { name: 'Referral Sources', count: 18, color: '#fbbf24' },
              ].map(s => (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.75rem 0', borderBottom: '1px solid rgba(64,72,93,0.15)' }}>
                  <Users size={14} color={s.color} />
                  <div style={{ flex: 1, fontSize: '0.875rem', color: 'var(--on-surface)' }}>{s.name}</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: s.color }}>{s.count}</div>
                </div>
              ))}
            </div>

            <div className="card" style={{ background: 'var(--surface-container)' }}>
              <div className="section-title" style={{ marginBottom: '1rem' }}>Quick Send</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <div className="form-label">Subject Line</div>
                  <input className="input-field" placeholder="Your Q4 Proposal is Ready…" />
                </div>
                <div>
                  <div className="form-label">Segment</div>
                  <select className="input-field" style={{ cursor: 'pointer' }}>
                    <option>High-Value Prospects</option>
                    <option>All Contacts</option>
                    <option>Active Leads</option>
                  </select>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Send size={14} /> Send Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
