import React from 'react';
import { Check, X, Play } from 'lucide-react';
import InteractiveWorkoutTimer from '../components/InteractiveWorkoutTimer';
import ScreenshotLightbox from '../components/ScreenshotLightbox';
import VideoWalkthroughPlayer from '../components/VideoWalkthroughPlayer';

export default function ExperiencePage() {
  const gallery = [
    { src: '/assets/01_dashboard.png', title: 'Athlete Command Center', category: 'CENTRAL COCKPIT', description: 'Real-time telemetry tracking morning readiness, calorie partitions, weekly progress, and athlete biometrics.' },
    { src: '/assets/03_workouts.png', title: 'Dynamic Workout Execution', category: 'IN-GYM LOGGING', description: 'Active gym companion interface with live movement demo, digital countdown timer, movement progression, and routine volume tracking.' },
    { src: '/assets/04_coach.png', title: '24/7 Multi-Agent Coach', category: 'AI AGENT', description: 'Atlas multi-agent pipeline consultation with adaptive tone control, macro breakdowns, and actionable nutrition & training chips.' },
    { src: '/assets/05_nutrition.png', title: 'Precision Nutrition Vault', category: 'MACRO TRACKING', description: 'Caloric periodization, macronutrient rings, prescribed meal recipes with photography, and real-time food diary tracking.' },
    { src: '/assets/06_progress.png', title: 'Data-Driven Progression', category: 'ANALYTICS', description: 'Foundational phase microcycles, tier graduation requirements, volume consistency, and weight lifted over time analytics.' },
    { src: '/assets/07_exercises.png', title: 'Verified Exercise Encyclopedia', category: 'CATALOG', description: 'Target muscle category selector, structured training tiers (Beginner, Intermediate, Advanced), and interactive routine launchpad.' }
  ];

  const comparison = [
    { feature: 'Biometric Daily Periodization', fitmind: 'Autonomous Dynamic (Daily Recalculation)', generic: 'Static Spreadsheet / Generic', trainer: 'Subjective / Variable' },
    { feature: 'Morning Readiness Engine (0-100%)', fitmind: 'Multi-factor HRV, Sleep & Soreness', generic: 'None / Not Included', trainer: 'Occasional Verbal Check-in' },
    { feature: 'In-Session Automated Rest Timer', fitmind: 'Native Countdown with Audio Synthesizer', generic: 'Basic Manual Stopwatch', trainer: 'Coach Counting Seconds' },
    { feature: 'Multi-Agent AI Athletic Coach', fitmind: '24/7 Sub-200ms Multi-Agent Intelligence', generic: 'Basic Hallucinating Chatbot', trainer: 'Delayed Messaging / Scheduled' },
    { feature: 'Auto-Progressive Overload Math', fitmind: 'Deterministic RPE & 1RM Algorithms', generic: 'Manual Guesswork', trainer: 'Trainer Memory' },
    { feature: 'Enterprise Single-Use OTP Security', fitmind: 'Cryptographic 6-Digit Verification', generic: 'Standard Passwords', trainer: 'N/A' },
    { feature: 'Pricing & Availability', fitmind: '100% Free / Zero Hidden Paywalls', generic: '$15 – $35 / Month Subscription', trainer: '$300 – $750 / Month' }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <section style={{ padding: '70px 0 40px', textAlign: 'center' }}>
        <div className="container">
          <span className="pill-tag" style={{ marginBottom: '14px' }}>
            IN-GYM TELEMETRY, VIDEO & VISUAL GALLERY
          </span>
          <h1 className="section-headline">Athlete Experience & UI Gallery</h1>
          <p className="section-subhead">
            Watch the complete platform video walkthrough and experience the interactive live gym workflow.
          </p>
        </div>
      </section>

      {/* Complete Video Walkthrough Section */}
      <section style={{ padding: '0 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="pill-tag" style={{ marginBottom: '10px' }}>
              FULL PLATFORM DEMONSTRATION
            </span>
            <h2 className="section-headline">Live System Walkthrough</h2>
            <p className="section-subhead">
              End-to-end guided video walkthrough demonstrating onboarding, biometrics, workout execution, AI coaching, and nutrition tracking.
            </p>
          </div>

          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <VideoWalkthroughPlayer />
          </div>
        </div>
      </section>

      {/* Interactive Workout Timer */}
      <section style={{ padding: '20px 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="pill-tag" style={{ marginBottom: '10px' }}>
              INTERACTIVE COMPANION
            </span>
            <h2 className="section-headline">Live In-Gym Simulator</h2>
          </div>
          <InteractiveWorkoutTimer />
        </div>
      </section>

      {/* Full-Fidelity Screenshot Lightbox Gallery */}
      <section style={{ padding: '20px 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="pill-tag" style={{ marginBottom: '12px' }}>
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
            <span className="pill-tag" style={{ marginBottom: '12px' }}>
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
                        <Check size={14} color="#ffffff" strokeWidth={3} />
                        <span>{row.fitmind}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px', color: 'var(--text-mid)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <X size={14} color="var(--text-dim)" />
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
    </div>
  );
}
