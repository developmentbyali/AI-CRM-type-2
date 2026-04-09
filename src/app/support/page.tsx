'use client';

import { useState } from 'react';
import { Search, ChevronDown, ChevronRight, MessageCircle, BookOpen, Video, ExternalLink } from 'lucide-react';

const faqs = [
  { q: 'How does the AI lead scoring work?', a: 'Our AI analyses over 40 behavioural signals including email open frequency, document view patterns, meeting attendance, and sentiment from call transcripts to produce a 0–100 composite score updated in real time.' },
  { q: 'Can I import contacts from Salesforce?', a: 'Yes. Navigate to Settings → Integrations → Salesforce, connect your account, and choose which objects to sync. Full bidirectional sync is supported.' },
  { q: 'How do I set up automated follow-up sequences?', a: 'Go to Marketing Hub → New Campaign → Sequence type. You can define trigger conditions (e.g. deal stage change) and multi-step email/task workflows.' },
  { q: 'Is my data encrypted?', a: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified and GDPR compliant.' },
  { q: 'Can multiple team members access the same deal?', a: 'Yes. On any deal record, use the Collaborators panel to invite team members with View, Edit, or Owner permissions.' },
];

const articles = [
  { title: 'Getting Started with Ledger CRM', cat: 'Onboarding', time: '5 min read' },
  { title: 'Setting Up Your Sales Pipeline', cat: 'Pipeline', time: '8 min read' },
  { title: 'Understanding AI Intelligence Reports', cat: 'AI Features', time: '6 min read' },
  { title: 'Importing Contacts via CSV', cat: 'Contacts', time: '3 min read' },
  { title: 'Building Email Campaign Sequences', cat: 'Marketing', time: '10 min read' },
  { title: 'Document E-signature Workflow', cat: 'Documents', time: '4 min read' },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Help & Knowledge Base</h1>
          <p className="page-subtitle">Documentation, articles, and support for Ledger CRM.</p>
        </div>
        <button className="btn btn-primary btn-sm">
          <MessageCircle size={14} /> Live Chat
        </button>
      </div>

      <div className="page-body">
        {/* Hero search */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(163,166,255,0.08), rgba(52,181,250,0.06))',
          border: '1px solid rgba(163,166,255,0.1)',
          borderRadius: 'var(--radius-xl)', padding: '2rem',
          textAlign: 'center', marginBottom: '1.5rem',
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            How can we help you?
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
            Search 200+ articles or browse categories below.
          </p>
          <div className="search-bar" style={{ maxWidth: 480, margin: '0 auto' }}>
            <Search size={16} color="var(--on-surface-variant)" />
            <input
              placeholder="Search the knowledge base…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Quick links */}
        <div className="three-col" style={{ marginBottom: '1.5rem' }}>
          {[
            { icon: BookOpen, title: 'Documentation', sub: '200+ articles covering all features', color: '#a3a6ff' },
            { icon: Video, title: 'Video Tutorials', sub: 'Step-by-step walkthroughs', color: '#34b5fa' },
            { icon: MessageCircle, title: 'Live Support', sub: 'Chat with a Ledger expert', color: '#e1c3ff' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card" style={{ background: 'var(--surface-container)', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: `${item.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.875rem' }}>
                  <Icon size={22} color={item.color} />
                </div>
                <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)' }}>{item.sub}</div>
              </div>
            );
          })}
        </div>

        <div className="two-col">
          {/* FAQs */}
          <div>
            <div className="section-header" style={{ marginBottom: '1rem' }}>
              <div className="section-title">Frequently Asked Questions</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'var(--surface-container)', borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden', border: openFaq === i ? '1px solid rgba(163,166,255,0.2)' : '1px solid transparent',
                  transition: 'all 0.2s',
                }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '1rem 1.25rem', background: 'transparent', border: 'none', cursor: 'pointer',
                      textAlign: 'left', gap: '1rem',
                    }}>
                    <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--on-surface)' }}>{faq.q}</span>
                    {openFaq === i
                      ? <ChevronDown size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                      : <ChevronRight size={16} color="var(--on-surface-variant)" style={{ flexShrink: 0 }} />
                    }
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.25rem 1rem', fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card" style={{ background: 'var(--surface-container)' }}>
              <div className="section-title" style={{ marginBottom: '1rem' }}>Popular Articles</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {articles.map((a, i) => (
                  <div key={a.title} style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.875rem 0',
                    borderBottom: i < articles.length - 1 ? '1px solid rgba(64,72,93,0.15)' : 'none',
                    cursor: 'pointer',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--on-surface)', marginBottom: '0.125rem' }}>{a.title}</div>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span className="badge badge-primary">{a.cat}</span>
                        <span style={{ fontSize: '0.6875rem', color: 'var(--on-surface-variant)' }}>{a.time}</span>
                      </div>
                    </div>
                    <ExternalLink size={14} color="var(--on-surface-variant)" />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact support */}
            <div className="card" style={{ background: 'linear-gradient(135deg, rgba(163,166,255,0.1), rgba(52,181,250,0.06))', border: '1px solid rgba(163,166,255,0.15)' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.375rem' }}>Still need help?</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: '1rem' }}>
                Our support team is available Mon–Fri, 9am–6pm EST.
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-primary btn-sm"><MessageCircle size={14} /> Start Live Chat</button>
                <button className="btn btn-secondary btn-sm">Email Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
