import { Brain, Shield, ExternalLink } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer style={{
      backgroundColor: 'rgba(5, 8, 14, 0.95)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '60px 0 30px',
      marginTop: '80px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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
                background: 'linear-gradient(135deg, #00f2fe 0%, #0284c7 100%)',
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
                color: '#fff'
              }}>FITMIND<span style={{ color: 'var(--cyan-primary)' }}>AI</span></span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              The next-generation autonomous athletic intelligence platform. Engineered with deterministic safety, multi-agent LLM reasoning, and real-time biometric adaptation.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
              <span className="badge-pill badge-emerald" style={{ fontSize: '0.65rem' }}>PRODUCTION AUDITED</span>
              <span className="badge-pill" style={{ fontSize: '0.65rem' }}>POSTGRESQL 16</span>
            </div>
          </div>

          {/* Col 2: Showcase Pages */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '16px', letterSpacing: '0.05em' }}>SHOWCASE VIEWS</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <button
                  onClick={() => { setActivePage('functional'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ color: 'var(--text-secondary)', textAlign: 'left' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  1. Functional Requirements (All-in-One)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('architecture'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ color: 'var(--text-secondary)', textAlign: 'left' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  2. Multi-Agent Architecture & Tech Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('experience'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ color: 'var(--text-secondary)', textAlign: 'left' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  3. Live Experience & Feature Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Functional Modules */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '16px', letterSpacing: '0.05em' }}>CORE MODULES</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <li>FR-01: Autonomous Onboarding & Biometrics</li>
              <li>FR-02: Enterprise Single-Use OTP Security</li>
              <li>FR-03: Daily Morning Readiness Engine</li>
              <li>FR-04: Central Command Dashboard</li>
              <li>FR-05: Dynamic Workouts & Rest Timers</li>
              <li>FR-06: 24/7 Multi-Agent Conversational AI</li>
              <li>FR-07: Precision Macro Fuel & Vault</li>
            </ul>
          </div>

          {/* Col 4: Production Architecture */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '16px', letterSpacing: '0.05em' }}>DEVELOPER GATEWAY</h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Connected to local FastAPI backend on port 8000:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="http://localhost:8000/docs"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan-primary)'
                }}
              >
                <span>Interactive Swagger UI</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="http://localhost:8000/health"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--emerald-accent)'
                }}
              >
                <span>Backend Health Probe</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} FitMind AI. All rights reserved. Built with React 19, Vite, and FastAPI.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Zero Data Fabrication</span>
            <span>Deterministic Safety Verified</span>
            <span>LangGraph Multi-Agent</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
