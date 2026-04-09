'use client';

import { Sparkles, DownloadCloud, Calendar, Plus } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadialBarChart, RadialBar, PieChart, Pie, Cell
} from 'recharts';

const revenueData = [
  { q: 'Q1 2024', value: 1.2 }, { q: 'Q2 2024', value: 1.85 }, { q: 'Q3 2024', value: 2.4 }, { q: 'Q4 2024', value: 2.1 },
  { q: 'Q1 2025', value: 2.9 }, { q: 'Q2 2025', value: 3.4 }, { q: 'Q3 2025', value: 4.2 },
];

const pieData = [
  { name: 'Residential', value: 42 },
  { name: 'Commercial', value: 28 },
  { name: 'Hospitality', value: 18 },
  { name: 'Public Works', value: 12 },
];
const PIE_COLORS = ['#a3a6ff', '#34b5fa', '#e1c3ff', '#6063ee'];

const teamData = [
  { name: 'Julian Thorne', deals: 12, value: '$4.1M', efficiency: 94 },
  { name: 'Sarah Chen', deals: 8, value: '$2.8M', efficiency: 88 },
  { name: 'Marcus Alt.', deals: 6, value: '$1.6M', efficiency: 76 },
  { name: 'Dara Okonkwo', deals: 9, value: '$3.2M', efficiency: 91 },
];

export default function ReportsPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports Central</h1>
          <p className="page-subtitle">Precision metrics and AI-synthesised intelligence for your firm.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn btn-secondary btn-sm"><Calendar size={14} /> Schedule Report</button>
          <button className="btn btn-primary btn-sm"><Plus size={14} /> Generate Report</button>
        </div>
      </div>

      <div className="page-body">
        {/* Top metrics */}
        <div className="metric-grid" style={{ marginBottom: '1.5rem' }}>
          {[
            { label: 'Revenue Lift', value: '+24.8%', sub: 'Q3 vs Q2', color: 'var(--secondary)' },
            { label: 'Deal Velocity', value: '14 Days', sub: 'Avg. cycle time', color: 'var(--primary)' },
            { label: 'Lead Quality Index', value: '78/100', sub: 'Engagement & budget fit', color: 'var(--tertiary)' },
            { label: 'Win Rate', value: '67%', sub: 'Proposals → Closed', color: '#4ade80' },
          ].map(m => (
            <div key={m.label} className="metric-card">
              <div className="metric-label">{m.label}</div>
              <div className="metric-value" style={{ color: m.color, fontSize: '1.5rem' }}>{m.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginTop: '0.25rem' }}>{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="two-col">
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Revenue chart */}
            <div className="card">
              <div className="section-header">
                <div>
                  <div className="section-title">Quarterly Growth Audit</div>
                  <div className="section-subtitle">Revenue acceleration across all sectors</div>
                </div>
                <div className="ai-chip"><Sparkles size={10} />AI Insight</div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={revenueData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(64,72,93,0.3)" vertical={false} />
                  <XAxis dataKey="q" tick={{ fill: '#a3aac4', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#a3aac4', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}M`} />
                  <Tooltip
                    formatter={(v: any) => [`$${v}M`, 'Revenue']}
                    contentStyle={{ background: '#141f38', border: '1px solid rgba(64,72,93,0.4)', borderRadius: 12, color: '#dee5ff' }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="url(#barGrad)" />
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a3a6ff" />
                      <stop offset="100%" stopColor="#6063ee" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Sector pie */}
            <div className="card">
              <div className="section-title" style={{ marginBottom: '1rem' }}>Revenue by Sector</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <ResponsiveContainer width={160} height={160}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                      {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {pieData.map((d, i) => (
                    <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <span style={{ width: 10, height: 10, borderRadius: 2, background: PIE_COLORS[i], display: 'inline-block' }} />
                      <span style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)' }}>{d.name}</span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--on-surface)', marginLeft: 'auto' }}>{d.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="card">
              <div className="section-title" style={{ marginBottom: '1rem' }}>Team Performance</div>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Partner</th>
                    <th>Deals</th>
                    <th>Value</th>
                    <th>Efficiency</th>
                  </tr>
                </thead>
                <tbody>
                  {teamData.map(t => (
                    <tr key={t.name}>
                      <td style={{ fontWeight: 600 }}>{t.name}</td>
                      <td>{t.deals}</td>
                      <td style={{ color: 'var(--secondary)', fontWeight: 700 }}>{t.value}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div style={{ width: 80, height: 4, background: 'var(--surface-container-highest)', borderRadius: 99, overflow: 'hidden' }}>
                            <div style={{ width: `${t.efficiency}%`, height: '100%', background: 'var(--primary)' }} />
                          </div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{t.efficiency}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* AI suggestion */}
            <div className="ai-insight" style={{ borderColor: 'rgba(225,195,255,0.15)' }}>
              <div className="ai-insight-header">
                <Sparkles size={14} color="var(--tertiary)" />
                <span className="ai-insight-title">AI Recommendation</span>
              </div>
              <p className="ai-insight-body">
                "Lead quality has dropped <strong style={{ color: 'var(--error)' }}>12% this week</strong>. Generate a Lead Source Audit to identify which channel is underperforming and reallocate marketing budget accordingly."
              </p>
              <button className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>Generate Audit</button>
            </div>

            {/* Recent reports */}
            <div className="card" style={{ background: 'var(--surface-container)' }}>
              <div className="section-title" style={{ marginBottom: '1rem' }}>Recent Generated Reports</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { title: 'Urban Density Analysis 2024', type: 'Market Trends', size: '4.2MB', color: '#a3a6ff' },
                  { title: 'Q2 Material Cost Inflation', type: 'Finance', size: '1.8MB', color: '#34b5fa' },
                  { title: 'Lead Source Quality Audit', type: 'Acquisition', size: '0.9MB', color: '#e1c3ff' },
                  { title: 'Annual Client Satisfaction Survey', type: 'CX Report', size: '2.1MB', color: '#6063ee' },
                ].map(r => (
                  <div key={r.title} style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.875rem', background: 'var(--surface-container-high)',
                    borderRadius: 'var(--radius-lg)', cursor: 'pointer',
                    borderLeft: `3px solid ${r.color}`,
                    transition: 'all 0.2s',
                  }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{r.type} · {r.size}</div>
                    </div>
                    <button className="btn btn-ghost btn-sm"><DownloadCloud size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Scheduled */}
            <div className="card" style={{ background: 'var(--surface-container)' }}>
              <div className="section-title" style={{ marginBottom: '1rem' }}>Scheduled Reports</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  { title: 'Weekly Deal Pipeline', freq: 'Every Monday · 09:00', active: true },
                  { title: 'Client Satisfaction Audit', freq: 'Monthly · 1st', active: true },
                  { title: 'Tax Liability Forecast', freq: 'Quarterly', active: false },
                ].map(s => (
                  <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 0', borderBottom: '1px solid rgba(64,72,93,0.15)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.active ? 'var(--secondary)' : 'var(--outline)', display: 'inline-block' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)' }}>{s.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{s.freq}</div>
                    </div>
                    <span className={`badge ${s.active ? 'badge-success' : 'badge-secondary'}`}>{s.active ? 'Active' : 'Paused'}</span>
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
