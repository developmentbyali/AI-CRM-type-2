'use client';

import { useState } from 'react';
import { User, Lock, Bell, Palette, Zap, Shield, ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'integrations', label: 'Integrations', icon: Zap },
];

const integrations = [
  { name: 'Google Workspace', desc: 'Sync Calendar, Drive & Gmail', connected: true, icon: '🔵' },
  { name: 'Salesforce', desc: 'Import & sync CRM records', connected: false, icon: '☁️' },
  { name: 'Slack', desc: 'Deal alerts & team notifications', connected: true, icon: '💬' },
  { name: 'DocuSign', desc: 'E-signature workflow automation', connected: true, icon: '✍️' },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Settings & Profile</h1>
          <p className="page-subtitle">Manage your account, preferences, and integrations.</p>
        </div>
      </div>

      <div className="page-body">
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '1.5rem' }}>
          <div className="card" style={{ background: 'var(--surface-container)', padding: '0.75rem', alignSelf: 'start' }}>
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`sidebar-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  style={{ width: '100%' }}>
                  <Icon size={16} />{tab.label}
                  <ChevronRight size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                </button>
              );
            })}
          </div>

          <div>
            {activeTab === 'profile' && (
              <div className="card" style={{ background: 'var(--surface-container)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="avatar avatar-lg" style={{ background: 'linear-gradient(135deg, #6063ee, #34b5fa)', width: 64, height: 64, fontSize: '1.25rem' }}>JT</div>
                  <div>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: 800 }}>Julian Thorne</h2>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Lead Partner</p>
                  </div>
                  <button className="btn btn-secondary btn-sm" style={{ marginLeft: 'auto' }}>Change Photo</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[
                    { label: 'First Name', value: 'Julian' },
                    { label: 'Last Name', value: 'Thorne' },
                    { label: 'Email', value: 'julian@architecturalledger.com' },
                    { label: 'Phone', value: '+1 (555) 400-8800' },
                    { label: 'Role', value: 'Lead Partner' },
                    { label: 'Department', value: 'Business Development' },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="form-label">{f.label}</label>
                      <input className="input-field" defaultValue={f.value} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
                  <button className="btn btn-primary">Save Changes</button>
                  <button className="btn btn-secondary">Cancel</button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="card" style={{ background: 'var(--surface-container)' }}>
                <div className="section-title" style={{ marginBottom: '1.25rem' }}>Notification Preferences</div>
                {[
                  { label: 'Deal stage changes', sub: 'Notify when a deal moves to a new stage', on: true },
                  { label: 'New lead assigned', sub: 'When a lead is routed to your portfolio', on: true },
                  { label: 'AI intelligence alerts', sub: 'High-urgency behavioural signals', on: true },
                  { label: 'Weekly pipeline digest', sub: 'Every Monday at 8:00 AM', on: false },
                  { label: 'Contract viewed by client', sub: 'Real-time document tracking', on: true },
                ].map(n => (
                  <div key={n.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.875rem 0', borderBottom: '1px solid rgba(64,72,93,0.15)' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)' }}>{n.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{n.sub}</div>
                    </div>
                    <div style={{
                      width: 40, height: 22, borderRadius: 99, cursor: 'pointer',
                      background: n.on ? 'var(--primary)' : 'var(--surface-container-highest)',
                      display: 'flex', alignItems: 'center', padding: '0 3px', transition: 'all 0.3s',
                    }}>
                      <span style={{
                        width: 16, height: 16, background: 'white', borderRadius: '50%',
                        transform: n.on ? 'translateX(18px)' : 'translateX(0)',
                        transition: 'transform 0.3s', display: 'block',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="card" style={{ background: 'var(--surface-container)' }}>
                <div className="section-title" style={{ marginBottom: '1.25rem' }}>Connected Integrations</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {integrations.map(int => (
                    <div key={int.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--surface-container-high)', borderRadius: 'var(--radius-lg)' }}>
                      <div style={{ fontSize: '1.5rem', width: 40, textAlign: 'center' }}>{int.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--on-surface)' }}>{int.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{int.desc}</div>
                      </div>
                      <button className={`btn btn-sm ${int.connected ? 'btn-secondary' : 'btn-primary'}`}>
                        {int.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="card" style={{ background: 'var(--surface-container)' }}>
                <div className="section-title" style={{ marginBottom: '1.25rem' }}>Security Settings</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label className="form-label">Current Password</label>
                    <input className="input-field" type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="form-label">New Password</label>
                    <input className="input-field" type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="form-label">Confirm New Password</label>
                    <input className="input-field" type="password" placeholder="••••••••" />
                  </div>
                  <button className="btn btn-primary" style={{ width: 'fit-content' }}>Update Password</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
