import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Brain, Layers, Cpu, PlayCircle, Sliders, Menu, X, ArrowUpRight } from 'lucide-react';
import { LIVE_APP_URL } from '../config';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Overview', icon: Layers, end: true },
    { to: '/architecture', label: 'Architecture', icon: Cpu },
    { to: '/modules', label: '11 Modules', icon: Sliders },
    { to: '/experience', label: 'Gallery & Experience', icon: PlayCircle }
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
        backgroundColor: 'rgba(10, 12, 16, 0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 35px -5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px'
      }}>
        {/* Brand Link */}
        <Link 
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
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
            color: '#000',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)'
          }}>
            <Brain size={16} strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.18rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#fff'
            }}>
              FITMIND
            </span>
            <span style={{
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              color: '#000000',
              backgroundColor: '#ffffff',
              fontWeight: 800,
              letterSpacing: '0.04em',
              padding: '1px 6px',
              borderRadius: '4px',
              lineHeight: 1.2
            }}>
              AI
            </span>
          </div>
        </Link>

        {/* Center Segmented Pill Switcher (Desktop) */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '3px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          padding: '4px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }} className="desktop-navbar">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? '#000000' : 'var(--text-mid)',
                  backgroundColor: isActive ? '#ffffff' : 'transparent',
                  boxShadow: isActive ? '0 2px 10px rgba(255, 255, 255, 0.25)' : 'none',
                  textDecoration: 'none',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  whiteSpace: 'nowrap'
                })}
              >
                {({ isActive }) => (
                  <>
                    <Icon size={14} strokeWidth={isActive ? 2.5 : 2} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Direct link to live running app */}
          <a
            href={LIVE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid-titanium"
            style={{
              padding: '8px 18px',
              fontSize: '0.84rem',
              textDecoration: 'none'
            }}
          >
            <span>Live App</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'flex',
              padding: '8px',
              color: '#fff',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
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
          backgroundColor: 'rgba(10, 12, 16, 0.96)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileOpen(false)}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-mid)',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: 'none'
                })}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <a
            href={LIVE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid-titanium"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '6px',
              padding: '12px 16px',
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}
          >
            <span>Launch Live App</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-navbar { display: flex !important; }
          .mobile-navbar-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
