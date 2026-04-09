'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, Handshake, TrendingUp,
  FileText, HelpCircle, Calendar, Settings,
  Megaphone, LogOut, FileStack
} from 'lucide-react';

const navItems = [
  { href: '/',           icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/contacts',   icon: Users,           label: 'Contacts' },
  { href: '/leads',      icon: TrendingUp,      label: 'Lead Management' },
  { href: '/pipeline',   icon: Handshake,       label: 'Sales Pipeline' },
  { href: '/timeline',   icon: Calendar,        label: 'Customer Timeline' },
  { href: '/reports',    icon: FileText,        label: 'Reports' },
  { href: '/marketing',  icon: Megaphone,       label: 'Marketing Hub' },
  { href: '/documents',  icon: FileStack,       label: 'Documents' },
  { href: '/settings',   icon: Settings,        label: 'Settings' },
  { href: '/support',    icon: HelpCircle,      label: 'Support' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-name">Ledger CRM</span>
        <span className="sidebar-logo-sub">Intelligence Layer</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <button className={`sidebar-nav-item ${isActive ? 'active' : ''}`}>
                <Icon className="nav-icon" size={18} />
                {item.label}
              </button>
            </Link>
          );
        })}

        <div className="sidebar-divider" />

        <button className="sidebar-nav-item" style={{ color: 'var(--error)' }}>
          <LogOut className="nav-icon" size={18} />
          Logout
        </button>
      </nav>

      <div className="sidebar-user">
        <div className="sidebar-user-avatar">JT</div>
        <div>
          <div className="sidebar-user-name">Julian Thorne</div>
          <div className="sidebar-user-role">Lead Partner</div>
        </div>
      </div>
    </aside>
  );
}
