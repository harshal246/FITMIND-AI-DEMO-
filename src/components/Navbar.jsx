import React, { useState } from 'react';
import { Brain, Layers, Cpu, PlayCircle, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabs = [
    { id: 'functional', label: 'Functional Requirements', icon: Layers },
    { id: 'architecture', label: 'Architecture & Multi-Agent', icon: Cpu },
    { id: 'experience', label: 'Experience & Gallery', icon: PlayCircle }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: '16px',
      zIndex: 1000,
      width: '100%',
      padding: '0 24px',
      marginBottom: '10px'
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        height: '64px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'rgba(10, 12, 16, 0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 35px -5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px'
      }}>
        {/* Brand */}
        <div 
          onClick={() => setActivePage('functional')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000'
          }}>
            <Brain size={16} strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#fff'
            }}>
              FITMIND
            </span>
            <span style={{
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-cyan)',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}>
              OS
            </span>
          </div>
        </div>

        {/* Center Segmented Pill Switcher (Desktop) */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          padding: '4px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }} className="desktop-navbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activePage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePage(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#000000' : 'var(--text-mid)',
                  backgroundColor: isActive ? '#ffffff' : 'transparent',
                  boxShadow: isActive ? '0 2px 10px rgba(255, 255, 255, 0.2)' : 'none',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <Icon size={14} strokeWidth={isActive ? 2.5 : 2} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Status & Launch Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Status Indicator */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.74rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-mid)',
            padding: '4px 10px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }} className="desktop-status">
            <span className="status-indicator-dot"></span>
            <span>SYSTEM ACTIVE</span>
          </div>

          {/* Direct link to live running app */}
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid-titanium"
            style={{
              padding: '8px 18px',
              fontSize: '0.82rem'
            }}
          >
            <span>Live Platform</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'flex',
              padding: '8px',
              color: '#fff'
            }}
            className="mobile-navbar-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          maxWidth: '1240px',
          margin: '8px auto 0',
          padding: '12px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'rgba(10, 12, 16, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activePage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActivePage(tab.id);
                  setMobileOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-mid)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 400
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-navbar { display: flex !important; }
          .desktop-status { display: flex !important; }
          .mobile-navbar-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
