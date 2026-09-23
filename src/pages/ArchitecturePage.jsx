import React from 'react';
import { Shield, Activity, Zap, Lock, Scale, RefreshCw } from 'lucide-react';
import MultiAgentGraphTree from '../components/MultiAgentGraphTree';

export default function ArchitecturePage() {
  const principles = [
    {
      icon: Shield,
      title: 'Zero Hallucination Guarantee',
      category: 'DATA INTEGRITY',
      role: 'Every movement swap, recipe prescription, and volume calculation is strictly verified against curated sports science libraries with zero phantom data.'
    },
    {
      icon: Scale,
      title: 'Deterministic Safety Bounds',
      category: 'BIOMECHANICS',
      role: 'Hard mathematical bounds prevent excessive loading, extreme caloric deficits, and spinal overtraining regardless of user prompt edge cases.'
    },
    {
      icon: Zap,
      title: 'Sub-200ms Decision Engine',
      category: 'PERFORMANCE',
      role: 'High-throughput reasoning pipeline optimized for instantaneous in-gym workout guidance, rest interval pacing, and real-time voice consultations.'
    },
    {
      icon: Activity,
      title: 'Autonomic Adaptation Loop',
      category: 'PHYSIOLOGY',
      role: 'Biometric telemetry (HRV drift, sleep staging, muscular soreness) continuously updates daily volume limits and progressive overload curves.'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Progressive Overload',
      category: 'PERIODIZATION',
      role: 'Algorithmic 1RM strength modeling and volume tracking ensure systematic overload across training meso-cycles without sudden injury spikes.'
    },
    {
      icon: Lock,
      title: 'Enterprise Data Isolation',
      category: 'SECURITY',
      role: 'End-to-end encrypted biometric telemetry, single-use cryptographic OTP verification, and strict athlete data sandboxing.'
    }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* Header Section */}
      <section style={{ padding: '60px 0 45px', textAlign: 'center' }}>
        <div className="container">
          <span className="pill-tag" style={{ marginBottom: '14px' }}>
            INTELLIGENCE SYSTEM DESIGN
          </span>
          <h1 className="section-hero-title">Multi-Agent Athletic Intelligence</h1>
          <p className="section-hero-desc" style={{ maxWidth: '780px', margin: '0 auto' }}>
            How our coordinated AI coaches check safety rules, customize your workouts, and adapt to your body in real time.
          </p>
        </div>
      </section>

      {/* INTERACTIVE MULTI-AGENT GRAPH / TREE FLOW */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <MultiAgentGraphTree />
        </div>
      </section>

      {/* ATHLETIC INTELLIGENCE PRINCIPLES */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="pill-tag" style={{ marginBottom: '10px' }}>
              CORE SYSTEM GUARANTEES
            </span>
            <h2 className="section-hero-title">Athletic Intelligence Principles</h2>
            <p className="section-hero-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
              Built from the ground up for absolute physiological safety, real-time responsiveness, and biological precision.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px'
          }}>
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div 
                  key={idx} 
                  className="obsidian-card" 
                  style={{
                    padding: '26px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'rgba(15, 15, 18, 0.65)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--color-silver)', fontWeight: 700, letterSpacing: '0.06em' }}>
                        {p.category}
                      </div>
                      <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                    {p.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
