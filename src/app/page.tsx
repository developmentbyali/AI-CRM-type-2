'use client';

import { Sparkles, TrendingUp, AlertCircle, Bell, Search, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';

const chartData = [
  { month: 'Jan', leads: 42, conversions: 18 },
  { month: 'Feb', leads: 58, conversions: 24 },
  { month: 'Mar', leads: 51, conversions: 21 },
  { month: 'Apr', leads: 72, conversions: 33 },
  { month: 'May', leads: 68, conversions: 29 },
  { month: 'Jun', leads: 85, conversions: 42 },
  { month: 'Jul', leads: 94, conversions: 51 },
  { month: 'Aug', leads: 88, conversions: 47 },
  { month: 'Sep', leads: 103, conversions: 58 },
];

const activities = [
  { id: 1, name: 'Marcus Thorne', action: 'Viewed contract · 4 times', time: '8m ago', color: '#a3a6ff' },
  { id: 2, name: 'Azure Coast Resort', action: 'Proposal sent', time: '1h ago', color: '#34b5fa' },
  { id: 3, name: 'Elena Wright', action: 'Meeting scheduled', time: '2h ago', color: '#e1c3ff' },
  { id: 4, name: 'Nexus Tech Hub', action: 'Contract signed', time: '3h ago', color: '#34b5fa' },
  { id: 5, name: 'Julianne Vance', action: 'Lead score updated → 92', time: '5h ago', color: '#a3a6ff' },
];

const keyRelationships = [
  { name: 'Marcus Thorne', role: 'CEO, Thorne Developments', ltv: '$2.4M', score: 98, initials: 'MT', color: '#6063ee' },
  { name: 'Sarah Chen', role: 'Studio Director, Urban Loft', ltv: '$1.8M', score: 91, initials: 'SC', color: '#17a8ec' },
  { name: 'Harlan Kross', role: 'Estate Developer, Lux-Global', ltv: '$3.1M', score: 87, initials: 'HK', color: '#c8a5ed' },
];

const metrics = [
  { label: 'Pipeline Value', value: '$4.2M', change: '+18.4%', positive: true },
  { label: 'Active Leads', value: '142', change: '+9', positive: true },
  { label: 'Deals Closing', value: '8', change: '-2', positive: false },
  { label: 'Avg. Deal Size', value: '$287K', change: '+22.1%', positive: true },
];

export default function DashboardPage() {
  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="search-bar" style={{ width: 320 }}>
          <Search size={16} color="var(--on-surface-variant)" />
          <input placeholder="Search contacts, deals, reports…" />
        </div>
        <div className="topbar-spacer" />
        <button className="btn btn-secondary btn-sm">
          <Bell size={15} /> Notifications
          <span className="badge badge-error" style={{ marginLeft: 4 }}>3</span>
        </button>
        <button className="btn btn-primary btn-sm">
          <Plus size={15} /> New Deal
        </button>
      </div>

      <div className="page-body" style={{ paddingTop: '1.5rem' }}>
        {/* AI Alert */}
        <div className="ai-insight animate-fade-in" style={{ marginBottom: '1.5rem', borderColor: 'rgba(163,166,255,0.2)' }}>
          <div className="ai-insight-header">
            <Sparkles size={14} color="var(--tertiary)" />
            <span className="ai-insight-title">AI Intelligence · Urgent Signal</span>
          </div>
          <p className="ai-insight-body">
            <strong style={{ color: 'var(--on-surface)' }}>Project "Silverline" requires immediate follow-up.</strong>{' '}
            Based on behavioral data, the client has viewed the contract <strong style={{ color: 'var(--secondary)' }}>4 times in the last hour</strong>. Recommended action: schedule a 15-minute sync call now.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <button className="btn btn-primary btn-sm">Schedule Call</button>
            <button className="btn btn-secondary btn-sm">View Contract</button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="metric-grid">
          {metrics.map((m, i) => (
            <div key={m.label} className={`metric-card animate-fade-in stagger-${i + 1}`}>
              <div className="metric-label">{m.label}</div>
              <div className="metric-value">{m.value}</div>
              <div className={`metric-change ${m.positive ? 'positive' : 'negative'}`}>
                {m.positive ? <ArrowUpRight size={13} style={{ display: 'inline' }} /> : <ArrowDownRight size={13} style={{ display: 'inline' }} />}
                {' '}{m.change} vs last quarter
              </div>
            </div>
          ))}
        </div>

        {/* Main two-col */}
        <div className="two-col">
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Chart */}
            <div className="card animate-fade-in">
              <div className="section-header">
                <div>
                  <div className="section-title">Lead Generation Trends</div>
                  <div className="section-subtitle">Quarterly acquisition and conversion velocity</div>
                </div>
                <div className="ai-chip">
                  <Sparkles size={10} /> AI Analysed
                </div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gradLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a3a6ff" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#a3a6ff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradConv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34b5fa" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#34b5fa" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(64,72,93,0.3)" />
                  <XAxis dataKey="month" tick={{ fill: '#a3aac4', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#a3aac4', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#141f38', border: '1px solid rgba(64,72,93,0.4)', borderRadius: 12, color: '#dee5ff' }}
                    labelStyle={{ color: '#a3aac4', fontSize: 12 }}
                  />
                  <Area type="monotone" dataKey="leads" stroke="#a3a6ff" strokeWidth={2} fill="url(#gradLeads)" name="Leads" />
                  <Area type="monotone" dataKey="conversions" stroke="#34b5fa" strokeWidth={2} fill="url(#gradConv)" name="Conversions" />
                </AreaChart>
              </ResponsiveContainer>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: '#a3a6ff', display: 'inline-block' }} />Leads
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: '#34b5fa', display: 'inline-block' }} />Conversions
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="card animate-fade-in">
              <div className="section-header">
                <div className="section-title">Project Activity Ledger</div>
                <button className="btn btn-ghost btn-sm">View All</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {activities.map((a) => (
                  <div key={a.id} style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '0.875rem 0',
                    borderBottom: '1px solid rgba(64,72,93,0.15)',
                    transition: 'background 0.2s',
                  }}>
                    <div className="avatar avatar-sm" style={{ background: `linear-gradient(135deg, ${a.color}aa, ${a.color}44)`, color: a.color, border: `1px solid ${a.color}33`, fontFamily: 'var(--font-display)', fontSize: '0.6875rem', fontWeight: 700 }}>
                      {a.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)' }}>{a.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{a.action}</div>
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--on-surface-variant)' }}>{a.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Quick actions */}
            <div className="card animate-fade-in" style={{ background: 'var(--surface-container)' }}>
              <div className="section-title" style={{ marginBottom: '1rem' }}>Quick Actions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { label: 'Log Invoicing Item', sub: '$142,500 due from Skyline Dev', color: '#34b5fa' },
                  { label: 'Review Contracts', sub: '3 Master Contracts pending', color: '#a3a6ff' },
                  { label: 'Board Meeting', sub: '14:00 · Studio Conference Room', color: '#e1c3ff' },
                ].map((qa) => (
                  <button key={qa.label} style={{
                    background: 'var(--surface-container-high)',
                    border: 'none', borderRadius: 'var(--radius-lg)',
                    padding: '0.875rem 1rem', textAlign: 'left', cursor: 'pointer',
                    borderLeft: `3px solid ${qa.color}`,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface-container-highest)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface-container-high)')}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)' }}>{qa.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginTop: '0.125rem' }}>{qa.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Relationships */}
            <div className="card animate-fade-in" style={{ background: 'var(--surface-container)' }}>
              <div className="section-header" style={{ marginBottom: '1rem' }}>
                <div className="section-title">Key Relationships</div>
                <div className="ai-chip"><Sparkles size={10} /> AI</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {keyRelationships.map((r) => (
                  <div key={r.name} style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.875rem', borderRadius: 'var(--radius-lg)',
                    background: 'var(--surface-container-high)', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(163,166,255,0.2)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}>
                    <div className="avatar avatar-md" style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}88)` }}>
                      {r.initials}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{r.role}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--secondary)' }}>{r.ltv}</div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--on-surface-variant)' }}>Score: {r.score}</div>
                    </div>
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
