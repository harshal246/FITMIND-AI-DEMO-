import React from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import InteractiveWorkoutTimer from '../components/InteractiveWorkoutTimer';
import ScreenshotLightbox from '../components/ScreenshotLightbox';

export default function ExperiencePage({ setActivePage }) {
  const gallery = [
    { src: '/assets/01_dashboard.png', title: 'Athlete Command Center', category: 'CENTRAL COCKPIT', description: 'Real-time telemetry tracking morning readiness, calorie partitions, and today’s workout phase.' },
    { src: '/assets/03_workouts.png', title: 'Dynamic Workout Execution', category: 'IN-GYM LOGGING', description: 'Active gym companion interface with automated rest intervals, RPE ratings, and progressive overload steps.' },
    { src: '/assets/04_coach.png', title: '24/7 Multi-Agent Coach', category: 'AI AGENT', description: 'Conversational consultation for biomechanical exercise swaps, form cues, and daily nutrition adjustments.' },
    { src: '/assets/05_nutrition.png', title: 'Precision Nutrition Vault', category: 'MACRO TRACKING', description: 'Caloric periodization, protein balance meters, and micro-nutrient tracking calibrated to training load.' },
    { src: '/assets/06_progress.png', title: 'Data-Driven Progression', category: 'ANALYTICS', description: 'Multi-week volume curves, 1RM estimated strength progression, and body composition transformation charts.' },
    { src: '/assets/07_exercises.png', title: 'Verified Exercise Encyclopedia', category: 'CATALOG', description: 'Anatomical muscle group mapping, form execution cues, and video demonstration links.' }
  ];

  const comparison = [
    { feature: 'Biometric Daily Periodization', fitmind: 'Autonomous Dynamic (Daily Recalculation)', generic: 'Static Spreadsheet / Generic', trainer: 'Subjective / Variable' },
    { feature: 'Morning Readiness Engine (0-100%)', fitmind: 'Multi-factor HRV, Sleep & Soreness', generic: 'None / Not Included', trainer: 'Occasional Verbal Check-in' },
    { feature: 'In-Session Automated Rest Timer', fitmind: 'Native Countdown with Audio Synthesizer', generic: 'Basic Manual Stopwatch', trainer: 'Coach Counting Seconds' },
    { feature: 'Multi-Agent AI Athletic Coach', fitmind: '24/7 Sub-200ms Multi-Agent (LangGraph)', generic: 'Basic Hallucinating Chatbot', trainer: 'Delayed Messaging / Scheduled' },
    { feature: 'Auto-Progressive Overload Math', fitmind: 'Deterministic RPE & 1RM Algorithms', generic: 'Manual Guesswork', trainer: 'Trainer Memory' },
    { feature: 'Enterprise Single-Use OTP Security', fitmind: 'Cryptographic 6-Digit Verification', generic: 'Standard Passwords', trainer: 'N/A' },
    { feature: 'Pricing & Availability', fitmind: '100% Free / Zero Hidden Paywalls', generic: '$15 – $35 / Month Subscription', trainer: '$300 – $750 / Month' }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <section style={{ padding: '70px 0 50px', textAlign: 'center' }}>
        <div className="container">
          <span className="tech-pill tech-pill-cyan" style={{ marginBottom: '14px' }}>
            IN-GYM TELEMETRY & VISUAL GALLERY
          </span>
          <h1 className="section-headline">Athlete Experience & UI Gallery</h1>
          <p className="section-subhead">
            Experience the in-gym workflow firsthand and inspect high-fidelity captures of the live web application.
          </p>
        </div>
      </section>

      {/* Interactive Workout Timer */}
      <section style={{ padding: '0 0 60px' }}>
        <div className="container">
          <InteractiveWorkoutTimer />
        </div>
      </section>

      {/* Full-Fidelity Screenshot Lightbox Gallery */}
      <section style={{ padding: '40px 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tech-pill" style={{ marginBottom: '12px' }}>
              PRODUCTION CAPTURES
            </span>
            <h2 className="section-headline">Visual Interface Gallery</h2>
            <p className="section-subhead">
              Click any interface capture to inspect in full resolution.
            </p>
          </div>

          <ScreenshotLightbox items={gallery} />
        </div>
      </section>

      {/* Comparison Matrix */}
      <section style={{ padding: '20px 0 60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tech-pill tech-pill-emerald" style={{ marginBottom: '12px' }}>
              COMPETITIVE ANALYSIS
            </span>
            <h2 className="section-headline">Why FitMind AI Outperforms</h2>
          </div>

          <div className="obsidian-card" style={{ overflowX: 'auto', padding: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.86rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', fontFamily: 'var(--font-mono)', fontSize: '0.74rem' }}>
                  <th style={{ padding: '14px 16px', color: 'var(--text-dim)' }}>FEATURE / CAPABILITY</th>
                  <th style={{ padding: '14px 16px', color: '#000', backgroundColor: '#ffffff', borderRadius: '4px 4px 0 0', fontWeight: 800 }}>
                    FITMIND AI
                  </th>
                  <th style={{ padding: '14px 16px', color: 'var(--text-dim)' }}>GENERIC APPS</th>
                  <th style={{ padding: '14px 16px', color: 'var(--text-dim)' }}>HUMAN TRAINER</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                    <td style={{ padding: '16px', fontWeight: 600, color: '#fff' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '16px', color: '#fff', fontWeight: 600, backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={14} color="var(--accent-cyan)" />
                        <span>{row.fitmind}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px', color: 'var(--text-mid)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <X size={14} color="var(--accent-rose)" />
                        <span>{row.generic}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px', color: 'var(--text-dim)' }}>
                      {row.trainer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section style={{ padding: '20px 0' }}>
        <div className="container">
          <div className="obsidian-card" style={{
            padding: '50px 30px',
            textAlign: 'center',
            background: 'linear-gradient(180deg, rgba(16, 20, 28, 0.9) 0%, rgba(8, 10, 15, 0.95) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            <span className="tech-pill tech-pill-cyan" style={{ marginBottom: '16px' }}>
              READY FOR DEPLOYMENT
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '14px', fontWeight: 800 }}>
              Elevate Your Potential with FitMind AI
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-mid)', maxWidth: '640px', margin: '0 auto 28px' }}>
              Autonomous periodization. Deterministic safety. Complete athletic intelligence.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a href="http://localhost:5173" target="_blank" rel="noreferrer" className="btn-solid-titanium">
                <span>Launch Live Platform</span>
                <ArrowUpRight size={16} />
              </a>
              <button
                onClick={() => { setActivePage('functional'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn-ghost-dark"
              >
                <span>Back to Functional Requirements</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
