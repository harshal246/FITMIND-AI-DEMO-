import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sliders, Cpu, ArrowRight, CheckCircle2, 
  Layers, Shield, Activity, Flame, HeartPulse, Sparkles, ExternalLink,
  Zap, Brain, Clock, BarChart3, Database, ChevronRight, PlayCircle, ShieldCheck, Play
} from 'lucide-react';
import VideoWalkthroughPlayer from '../components/VideoWalkthroughPlayer';

export default function FunctionalRequirementsPage() {
  const [heroMediaMode, setHeroMediaMode] = useState('video'); // 'video' | 'screenshot'

  const metrics = [
    { value: '11', label: 'Core Functional Modules', detail: 'FR-01 through FR-11' },
    { value: '8', label: 'Specialized AI Agents', detail: 'Coordinated Multi-Agent Mesh' },
    { value: '< 180ms', label: 'Inference Latency', detail: 'Sub-200ms Deterministic Response' },
    { value: '100%', label: 'Physiological Safety', detail: 'Zero Hallucination Guarantee' },
  ];

  const pillars = [
    {
      num: '01',
      icon: HeartPulse,
      title: 'Daily Recovery & Readiness',
      subtitle: 'Sleep, HRV & Energy Tracking',
      description: 'Calculates your daily readiness score (0–100%) from your sleep quality, resting heart rate, and muscle soreness to recommend the right workout intensity.'
    },
    {
      num: '02',
      icon: Brain,
      title: '24/7 Personal AI Coach',
      subtitle: 'Smart Workouts & Nutrition Advice',
      description: 'An intelligent athletic coach that answers fitness questions, swaps busy gym machines, adjusts daily macros, and ensures safe form in real time.'
    },
    {
      num: '03',
      icon: Zap,
      title: 'Smart Workout Tracker & Timer',
      subtitle: 'Progressive Overload & Pacing',
      description: 'Active workout tracking with automated rest interval countdowns, audio voice cues, and smart weight increments to build strength week over week.'
    }
  ];

  const exploreRoutes = [
    {
      to: '/architecture',
      badge: 'SYSTEM DESIGN',
      icon: Cpu,
      title: 'Multi-Agent Reasoning Architecture',
      description: 'Inspect the multi-agent decision flow, physiological safety guardrails, and real-time state synchronization.'
    },
    {
      to: '/modules',
      badge: 'SPECIFICATIONS',
      icon: Sliders,
      title: '11 Core Functional Modules',
      description: 'Full architectural breakdown of FR-01 through FR-11 with live UI snapshots, deterministic logic guardrails, and validation rules.'
    },
    {
      to: '/experience',
      badge: 'VISUAL ASSETS & DEMO',
      icon: PlayCircle,
      title: 'Athlete Experience & Gallery',
      description: 'Test the interactive workout rest timer with audio synthesis and inspect all 6 high-resolution production interface captures.'
    }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      {/* HERO SECTION */}
      <section style={{ padding: '60px 0 40px', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          {/* Release Chip */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-mono)',
              color: '#ffffff',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)' }} />
              FITMIND AI · INTELLIGENT FITNESS & MINDFUL LIVING
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="hero-headline" style={{ maxWidth: '1200px', margin: '0 auto 20px', letterSpacing: '-0.035em' }}>
            <span className="hero-title-line">Your Intelligent AI Fitness Coach.</span>
            <span className="hero-title-line hero-gradient-text">
              Smart Workouts, Nutrition & Recovery.
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
            color: 'var(--text-mid)',
            maxWidth: '740px',
            margin: '0 auto 32px',
            lineHeight: 1.6
          }}>
            FitMind AI designs your personalized workout routines, tracks progressive overload, balances daily meals and macros, and adapts to your body's recovery in real time.
          </p>

          {/* Media Mode Selector Switch */}
          <div style={{
            display: 'inline-flex',
            padding: '4px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            marginBottom: '28px'
          }}>
            <button
              onClick={() => setHeroMediaMode('video')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                backgroundColor: heroMediaMode === 'video' ? '#ffffff' : 'transparent',
                color: heroMediaMode === 'video' ? '#000000' : 'var(--text-mid)',
                boxShadow: heroMediaMode === 'video' ? '0 2px 15px rgba(255, 255, 255, 0.3)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Play size={14} fill={heroMediaMode === 'video' ? '#000000' : 'currentColor'} />
              <span>Full Video Walkthrough</span>
            </button>
            <button
              onClick={() => setHeroMediaMode('screenshot')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                backgroundColor: heroMediaMode === 'screenshot' ? '#ffffff' : 'transparent',
                color: heroMediaMode === 'screenshot' ? '#000000' : 'var(--text-mid)',
                boxShadow: heroMediaMode === 'screenshot' ? '0 2px 15px rgba(255, 255, 255, 0.3)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Layers size={14} />
              <span>Cockpit Screenshot</span>
            </button>
          </div>

          {/* FRAMED HERO APPLICATION COCKPIT / VIDEO PLAYER */}
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            {heroMediaMode === 'video' ? (
              <VideoWalkthroughPlayer />
            ) : (
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.95), 0 0 50px rgba(255, 255, 255, 0.04)',
                backgroundColor: '#050507'
              }}>
                {/* Window Top Bar */}
                <div style={{
                  height: '42px',
                  backgroundColor: 'rgba(15, 15, 18, 0.95)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.35)' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.22)' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
                    <span style={{ marginLeft: '12px', color: 'var(--text-mid)', fontWeight: 500 }}>
                      FitMind AI Cockpit · Central Command Telemetry
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'var(--text-secondary)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }} />
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>91% Optimal Readiness</span>
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
                    <span style={{ color: 'var(--text-dim)' }}>Alex Patel (Hypertrophy Block)</span>
                  </div>
                </div>

                {/* High-Resolution Production Screenshot */}
                <div style={{ position: 'relative', width: '100%', backgroundColor: '#000000' }}>
                  <img
                    src="/assets/01_dashboard.png"
                    alt="FitMind AI Central Command Dashboard"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      imageRendering: '-webkit-optimize-contrast'
                    }}
                  />
                </div>

                {/* Bottom Live Telemetry Strip */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                  padding: '18px 24px',
                  backgroundColor: 'rgba(10, 10, 13, 0.95)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  textAlign: 'left'
                }}>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>
                      AUTONOMIC RECOVERY
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                      91% Peak Readiness
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>
                      MULTI-AGENT ORCHESTRATION
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                      8 Specialized AI Agents
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>
                      CALORIC PERIODIZATION
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                      2,930 kcal · 110g Protein
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>
                      PHYSIOLOGICAL SAFETY
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                      Deterministic Guardrails
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* METRICS & BENCHMARK STRIP */}
      <section style={{ padding: '20px 0 45px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            maxWidth: '1160px',
            margin: '0 auto'
          }}>
            {metrics.map((m, idx) => (
              <div 
                key={idx}
                className="obsidian-card"
                style={{
                  padding: '24px 20px',
                  textAlign: 'center',
                  background: 'rgba(15, 15, 18, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1
                }}>
                  {m.value}
                </div>
                <div style={{
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginTop: '8px'
                }}>
                  {m.label}
                </div>
                <div style={{
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)',
                  marginTop: '4px'
                }}>
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUE PILLARS */}
      <section style={{ padding: '30px 0 50px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="pill-tag" style={{ marginBottom: '10px' }}>
              CORE PLATFORM PILLARS
            </span>
            <h2 className="section-hero-title" style={{ marginTop: '8px' }}>
              Complete Fitness, Nutrition & Recovery
            </h2>
            <p className="section-hero-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
              How FitMind AI turns your body's daily signals into personalized, effective workout and nutrition plans.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1160px',
            margin: '0 auto'
          }}>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="obsidian-card" 
                  style={{
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    background: 'rgba(15, 15, 18, 0.65)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff'
                      }}>
                        <Icon size={20} />
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--text-dim)'
                      }}>
                        {pillar.num}
                      </span>
                    </div>

                    <div style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-silver)',
                      fontWeight: 700,
                      letterSpacing: '0.06em'
                    }}>
                      {pillar.subtitle.toUpperCase()}
                    </div>
                    <h3 style={{ fontSize: '1.22rem', fontWeight: 700, color: '#ffffff', margin: '6px 0 12px' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROUTE DISCOVERY & SHOWCASE NAVIGATION HUB */}
      <section style={{ padding: '30px 0 50px' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="pill-tag" style={{ marginBottom: '10px' }}>
              DEEP-DIVE EXPLORATION
            </span>
            <h2 className="section-hero-title" style={{ marginTop: '8px' }}>
              Explore FitMind AI by Section
            </h2>
            <p className="section-hero-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Navigate to dedicated views for technical specifications, multi-agent architecture, and visual interface captures.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {exploreRoutes.map((route, idx) => {
              const Icon = route.icon;
              return (
                <Link
                  key={idx}
                  to={route.to}
                  className="obsidian-card glass-panel-interactive"
                  style={{
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: 'inherit',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    background: 'rgba(15, 15, 18, 0.65)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                      <span className="pill-tag" style={{ fontSize: '0.68rem' }}>
                        {route.badge}
                      </span>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff'
                      }}>
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                      {route.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.55 }}>
                      {route.description}
                    </p>
                  </div>

                  <div style={{
                    marginTop: '22px',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#ffffff',
                    fontWeight: 600
                  }}>
                    <span>Open Section</span>
                    <ChevronRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
