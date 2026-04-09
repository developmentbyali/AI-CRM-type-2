'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, Users, Video } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const events = [
  { day: 9, title: 'Project Silverline Call', time: '09:00', type: 'call', color: '#a3a6ff' },
  { day: 9, title: 'Board Meeting', time: '14:00', type: 'meeting', color: '#34b5fa' },
  { day: 12, title: 'Azure Coast Proposal Review', time: '10:30', type: 'proposal', color: '#e1c3ff' },
  { day: 15, title: 'Emerald Plaza Negotiation', time: '11:00', type: 'meeting', color: '#fbbf24' },
  { day: 18, title: 'Q3 Review with Julian Thorne', time: '15:00', type: 'meeting', color: '#6063ee' },
  { day: 22, title: 'Thorne Tower Site Visit', time: '09:00', type: 'visit', color: '#34b5fa' },
  { day: 25, title: 'Skylark Residences Presentation', time: '13:00', type: 'proposal', color: '#a3a6ff' },
];

const upcomingTasks = [
  { title: 'Send revised contract to Emerald Plaza', due: 'Today', priority: 'High', color: '#ff716c' },
  { title: 'Update CRM notes from Vance call', due: 'Tomorrow', priority: 'Medium', color: '#fbbf24' },
  { title: 'Prepare Q4 pipeline forecast', due: 'Apr 12', priority: 'Medium', color: '#fbbf24' },
  { title: 'Review LEED documents — Nexus Hub', due: 'Apr 14', priority: 'Low', color: '#a3a6ff' },
  { title: 'Schedule onboarding — Legacy Fund', due: 'Apr 16', priority: 'High', color: '#ff716c' },
];

export default function TimelinePage() {
  const today = new Date();
  const [current, setCurrent] = useState(today);

  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  const getEventForDay = (day: number) => events.filter(e => e.day === day);

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Task & Team Calendar</h1>
          <p className="page-subtitle">Schedule, coordinate, and track all client touchpoints.</p>
        </div>
        <button className="btn btn-primary btn-sm"><Plus size={14} /> Add Event</button>
      </div>

      <div className="page-body">
        <div className="two-col">
          {/* Left: Calendar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card">
              {/* Cal header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700 }}>
                  {MONTHS[month]} {year}
                </h2>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => setCurrent(new Date(year, month - 1, 1))}>
                    <ChevronLeft size={14} />
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setCurrent(new Date(year, month + 1, 1))}>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Day headers */}
              <div className="calendar-grid" style={{ marginBottom: '0.5rem' }}>
                {DAYS.map(d => (
                  <div key={d} style={{ textAlign: 'center', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0.25rem 0' }}>
                    {d}
                  </div>
                ))}
              </div>

              {/* Days */}
              <div className="calendar-grid">
                {cells.map((day, i) => {
                  if (!day) return <div key={`empty-${i}`} />;
                  const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
                  const dayEvents = getEventForDay(day);
                  return (
                    <div key={day} className={`calendar-day ${isToday ? 'today' : ''}`}
                      style={{ flexDirection: 'column', height: 44, position: 'relative' }}>
                      <span>{day}</span>
                      {dayEvents.length > 0 && (
                        <div style={{ display: 'flex', gap: 2, position: 'absolute', bottom: 4 }}>
                          {dayEvents.slice(0, 3).map((e, ei) => (
                            <span key={ei} style={{ width: 4, height: 4, borderRadius: '50%', background: e.color, display: 'block' }} />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Today's schedule */}
            <div className="card">
              <div className="section-title" style={{ marginBottom: '1rem' }}>Today's Schedule</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {events.slice(0, 4).map(e => (
                  <div key={e.title} style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '0.875rem', borderRadius: 'var(--radius-lg)',
                    background: 'var(--surface-container)',
                    borderLeft: `3px solid ${e.color}`,
                  }}>
                    <div style={{ textAlign: 'center', minWidth: 44 }}>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: e.color }}>{e.time}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)' }}>{e.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', textTransform: 'capitalize' }}>{e.type}</div>
                    </div>
                    {e.type === 'call' && <Video size={16} color="var(--on-surface-variant)" />}
                    {e.type === 'meeting' && <Users size={16} color="var(--on-surface-variant)" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Tasks & upcoming */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ background: 'var(--surface-container)' }}>
              <div className="section-header">
                <div className="section-title">Upcoming Tasks</div>
                <button className="btn btn-primary btn-sm"><Plus size={14} /></button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {upcomingTasks.map((task, i) => (
                  <div key={task.title} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
                    padding: '0.875rem 0',
                    borderBottom: i < upcomingTasks.length - 1 ? '1px solid rgba(64,72,93,0.15)' : 'none',
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: task.color, marginTop: '0.375rem', flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)' }}>{task.title}</div>
                      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>
                          <Clock size={12} />{task.due}
                        </div>
                        <span className={`badge ${task.priority === 'High' ? 'badge-error' : task.priority === 'Medium' ? 'badge-warning' : 'badge-secondary'}`}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                    <input type="checkbox" style={{ cursor: 'pointer', accentColor: 'var(--primary)' }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ background: 'var(--surface-container)' }}>
              <div className="section-title" style={{ marginBottom: '1rem' }}>Upcoming Events</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {events.slice(2).map(e => (
                  <div key={e.title} style={{ display: 'flex', gap: '0.875rem', padding: '0.75rem', background: 'var(--surface-container-high)', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ background: `${e.color}22`, color: e.color, borderRadius: 'var(--radius-md)', padding: '0.375rem 0.5rem', textAlign: 'center', minWidth: 36, fontWeight: 700, fontSize: '0.875rem' }}>
                      {e.day}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--on-surface)' }}>{e.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>{e.time} · {e.type}</div>
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
