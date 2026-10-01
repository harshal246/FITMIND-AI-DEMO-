import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, ExternalLink, ArrowRight } from 'lucide-react';
import { LIVE_APP_URL } from '../config';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'rgba(5, 8, 14, 0.95)',
      borderTop: '1px solid var(--border-hairline)',
      padding: '60px 0 30px',
      marginTop: '80px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Col 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#050811'
              }}>
                <Brain size={20} />
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                FITMIND
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
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              The next-generation autonomous athletic intelligence platform. Engineered with deterministic safety, multi-agent AI reasoning, and real-time biometric adaptation.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
              <span className="pill-tag pill-tag-emerald" style={{ fontSize: '0.65rem' }}>PRODUCTION AUDITED</span>
              <span className="pill-tag pill-tag-cyan" style={{ fontSize: '0.65rem' }}>DETERMINISTIC SAFETY</span>
            </div>
          </div>

          {/* Col 2: Showcase Pages */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: '#fff', marginBottom: '16px', letterSpacing: '0.05em' }}>PLATFORM NAVIGATION</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <Link
                  to="/"
                  style={{ color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-mid)'}
                >
                  1. Platform Overview & Central Cockpit
                </Link>
              </li>
              <li>
                <Link
                  to="/architecture"
                  style={{ color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-mid)'}
                >
                  2. Multi-Agent Reasoning Architecture
                </Link>
              </li>
              <li>
                <Link
                  to="/modules"
                  style={{ color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-mid)'}
                >
                  3. 11 Core Functional Modules
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  style={{ color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-mid)'}
                >
                  4. Visual Interface Gallery & Timer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Capabilities */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: '#fff', marginBottom: '16px', letterSpacing: '0.05em' }}>CORE CAPABILITIES</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
              <li>FR-01: Autonomous Biometrics Calibration</li>
              <li>FR-02: Enterprise Single-Use Security</li>
              <li>FR-03: Daily Morning Readiness Engine</li>
              <li>FR-04: Central Command Athlete Dashboard</li>
              <li>FR-05: Dynamic Workouts & In-Session Timers</li>
              <li>FR-06: 24/7 Conversational Multi-Agent Coach</li>
              <li>FR-07: Precision Macro Vault & Fuel Partitioning</li>
            </ul>
          </div>

          {/* Col 4: Live Application */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: '#fff', marginBottom: '16px', letterSpacing: '0.05em' }}>LIVE ACCESS</h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-mid)', marginBottom: '14px', lineHeight: 1.5 }}>
              Launch the complete athlete companion portal in your browser:
            </p>
            <a
              href={LIVE_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-glass-secondary"
              style={{ padding: '8px 16px', fontSize: '0.82rem', display: 'inline-flex' }}
            >
              <span>Launch Live App</span>
              <ExternalLink size={13} style={{ color: '#ffffff' }} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-hairline)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © {new Date().getFullYear()} FitMind AI Platform Inc. All rights reserved. Autonomous Athletic Operating System.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href={`${LIVE_APP_URL}/privacy`}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-mid)'}
            >
              Privacy Policy (GDPR)
            </a>
            <span>·</span>
            <a
              href={`${LIVE_APP_URL}/terms`}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-mid)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-mid)'}
            >
              Terms of Service
            </a>
            <span>·</span>
            <span>Zero Data Fabrication</span>
            <span>Deterministic Safety Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
