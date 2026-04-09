'use client';

import { useState } from 'react';
import { Search, Plus, Filter, Mail, Phone, MoreHorizontal } from 'lucide-react';

const contacts = [
  { id: 1, name: 'Marcus Thorne', role: 'CEO', company: 'Thorne Developments', email: 'marcus@thornedv.com', phone: '+1 (555) 201-4400', tag: 'Client', initials: 'MT', color: '#6063ee', ltv: '$2.4M', score: 98 },
  { id: 2, name: 'Julianne Vance', role: 'Principal', company: 'Vance & Partners', email: 'j.vance@vancepar.com', phone: '+1 (555) 301-4421', tag: 'Lead', initials: 'JV', color: '#a3a6ff', ltv: '$780K', score: 88 },
  { id: 3, name: 'Sarah Chen', role: 'Studio Director', company: 'Urban Loft Design', email: 's.chen@urbanloft.design', phone: '+1 (555) 778-2213', tag: 'Lead', initials: 'SC', color: '#17a8ec', ltv: '$560K', score: 81 },
  { id: 4, name: 'Harlan Kross', role: 'Estate Developer', company: 'Lux-Global Inc.', email: 'h.kross@luxglobal.io', phone: '+1 (555) 882-0034', tag: 'Prospect', initials: 'HK', color: '#34b5fa', ltv: '$1.3M', score: 76 },
  { id: 5, name: 'Elena Wright', role: 'Independent Consultant', company: 'Self-employed', email: 'e.wright@arch.co', phone: '+1 (555) 541-9900', tag: 'Lead', initials: 'EW', color: '#e1c3ff', ltv: '$320K', score: 62 },
  { id: 6, name: 'Marcus Sterling', role: 'Fund Manager', company: 'Legacy Real Estate Fund', email: 'marcus@legacyfund.com', phone: '+1 (555) 092-8812', tag: 'Lead', initials: 'MS', color: '#c8a5ed', ltv: '$2.1M', score: 95 },
  { id: 7, name: 'Dara Okonkwo', role: 'Head of Acquisitions', company: 'Prime Capital RE', email: 'd.okonkwo@primecre.com', phone: '+1 (555) 667-1122', tag: 'Client', initials: 'DO', color: '#6063ee', ltv: '$1.8M', score: 90 },
  { id: 8, name: 'Sylvia Montague', role: 'Design Director', company: 'Montague Studio', email: 's.montague@montaguestudio.com', phone: '+1 (555) 432-7891', tag: 'Partner', initials: 'SM', color: '#34b5fa', ltv: '$450K', score: 74 },
];

const tagColors: Record<string, string> = {
  Client: 'badge-secondary',
  Lead: 'badge-primary',
  Prospect: 'badge-warning',
  Partner: 'badge-tertiary',
};

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', 'Client', 'Lead', 'Prospect', 'Partner'];

  const filtered = contacts.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === 'All' || c.tag === activeTag;
    return matchSearch && matchTag;
  });

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Contacts Directory</h1>
          <p className="page-subtitle">Your network of high-value architectural relationships.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn btn-secondary btn-sm"><Filter size={14} /> Filter</button>
          <button className="btn btn-primary btn-sm"><Plus size={14} /> Add Contact</button>
        </div>
      </div>

      <div className="page-body">
        {/* Search + Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="search-bar" style={{ flex: 1, maxWidth: 400 }}>
            <Search size={15} color="var(--on-surface-variant)" />
            <input placeholder="Search by name or company…" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {tags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)} className={`btn btn-sm ${activeTag === tag ? 'btn-primary' : 'btn-secondary'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="metric-grid" style={{ marginBottom: '1.5rem' }}>
          {[
            { label: 'Total Contacts', value: contacts.length.toString() },
            { label: 'Active Clients', value: contacts.filter(c => c.tag === 'Client').length.toString() },
            { label: 'Open Leads', value: contacts.filter(c => c.tag === 'Lead').length.toString() },
            { label: 'Network Value', value: '$9.7M' },
          ].map(s => (
            <div key={s.label} className="metric-card">
              <div className="metric-label">{s.label}</div>
              <div className="metric-value">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Contact</th>
                <th>Company</th>
                <th>Tag</th>
                <th>Est. Value</th>
                <th>Score</th>
                <th>Contact</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} style={{ cursor: 'pointer' }}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div className="avatar avatar-sm" style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}55)` }}>{c.initials}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{c.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{c.role}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{c.company}</td>
                  <td><span className={`badge ${tagColors[c.tag]}`}>{c.tag}</span></td>
                  <td style={{ fontWeight: 700, color: 'var(--secondary)', fontFamily: 'var(--font-display)' }}>{c.ltv}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: 56, height: 4, background: 'var(--surface-container-highest)', borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ width: `${c.score}%`, height: '100%', background: c.color }} />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{c.score}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <a href={`mailto:${c.email}`} className="btn btn-ghost btn-sm"><Mail size={13} /></a>
                      <a href={`tel:${c.phone}`} className="btn btn-ghost btn-sm"><Phone size={13} /></a>
                    </div>
                  </td>
                  <td><button className="btn btn-ghost btn-sm"><MoreHorizontal size={14} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
