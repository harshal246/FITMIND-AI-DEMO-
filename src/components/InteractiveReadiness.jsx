import React, { useState } from 'react';
import { Activity, Moon, HeartPulse, Zap, Flame, Shield, Droplets } from 'lucide-react';

export default function InteractiveReadiness() {
  const [sleepHours, setSleepHours] = useState(7.5);
  const [sleepQuality, setSleepQuality] = useState(4);
  const [soreness, setSoreness] = useState(3);
  const [stress, setStress] = useState(3);
  const [restingHr, setRestingHr] = useState(54);

  const calculateScore = () => {
    const sleepDiff = Math.abs(sleepHours - 8);
    const sleepScore = Math.max(0, 25 - (sleepDiff * 5)) + (sleepQuality * 2);
    const sorenessPenalty = (soreness - 1) * 2.2;
    const stressPenalty = (stress - 1) * 1.8;
    const hrPenalty = Math.max(0, (restingHr - 55) * 0.7);
    const raw = Math.round(50 + sleepScore - sorenessPenalty - stressPenalty - hrPenalty);
    return Math.min(100, Math.max(18, raw));
  };

  const score = calculateScore();

  const getTier = (val) => {
    if (val >= 85) return { label: 'PRIME ADAPTATION', color: '#10b981', advice: 'Central nervous system at peak recovery. Programmed for heavy compound singles and progressive volume overload.' };
    if (val >= 70) return { label: 'OPTIMAL CAPACITY', color: '#38bdf8', advice: 'Physiological markers baseline stable. Execute scheduled training session as written.' };
    if (val >= 50) return { label: 'MODERATE FATIGUE', color: '#f59e0b', advice: 'Sympathetic tone elevated. Auto-clamp RPE to 8.0 and reduce secondary assistance volume by 1 working set.' };
    return { label: 'AUTONOMIC STRAIN (DELOAD)', color: '#f43f5e', advice: 'High neuromuscular fatigue. System pivots to active mobility, 3.5L hydration, and parasympathetic breathing.' };
  };

  const tier = getTier(score);

  return (
    <div className="obsidian-card" style={{ padding: '36px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '32px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="tech-pill tech-pill-emerald">BIOMETRIC SIMULATOR</span>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              POST /api/v1/recovery/checkin
            </span>
          </div>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#fff' }}>
            FR-03: Autonomous Morning Readiness Engine
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', marginTop: '4px' }}>
            Calibrates daily neuromuscular training capacity using multi-variable biometric inputs.
          </p>
        </div>

        {/* Status Badge */}
        <div style={{
          padding: '6px 14px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-mono)',
          color: tier.color,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: tier.color }} />
          <span>{tier.label}</span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '36px',
        alignItems: 'center'
      }}>
        {/* Sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {/* Sleep duration */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.86rem' }}>
              <span style={{ color: 'var(--text-mid)' }}>Sleep Duration</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: 600 }}>{sleepHours} Hours</span>
            </div>
            <input
              type="range"
              min="4"
              max="11"
              step="0.5"
              value={sleepHours}
              onChange={(e) => setSleepHours(parseFloat(e.target.value))}
            />
          </div>

          {/* Sleep Quality */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.86rem' }}>
              <span style={{ color: 'var(--text-mid)' }}>Subjective Sleep Quality (Depth)</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: 600 }}>{sleepQuality} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={sleepQuality}
              onChange={(e) => setSleepQuality(parseInt(e.target.value))}
            />
          </div>

          {/* Soreness */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.86rem' }}>
              <span style={{ color: 'var(--text-mid)' }}>Musculoskeletal Soreness (DOMS)</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: 600 }}>Level {soreness} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={soreness}
              onChange={(e) => setSoreness(parseInt(e.target.value))}
            />
          </div>

          {/* RHR */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.86rem' }}>
              <span style={{ color: 'var(--text-mid)' }}>Resting Heart Rate (HRV Baseline)</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: 600 }}>{restingHr} BPM</span>
            </div>
            <input
              type="range"
              min="42"
              max="85"
              step="1"
              value={restingHr}
              onChange={(e) => setRestingHr(parseInt(e.target.value))}
            />
          </div>
        </div>

        {/* Dial Output */}
        <div style={{
          backgroundColor: 'rgba(5, 7, 10, 0.85)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '30px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Ring */}
          <div style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: `conic-gradient(${tier.color} ${score * 3.6}deg, rgba(255, 255, 255, 0.05) 0deg)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 45px -10px ${tier.color}40`,
            marginBottom: '18px',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '132px',
              height: '132px',
              borderRadius: '50%',
              backgroundColor: '#07090e',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.8rem',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1
              }}>{score}</span>
              <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
                READINESS %
              </span>
            </div>
          </div>

          <div style={{
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: tier.color,
            letterSpacing: '0.08em'
          }}>
            {tier.label}
          </div>

          <p style={{
            fontSize: '0.84rem',
            color: 'var(--text-mid)',
            margin: '12px 0 20px',
            lineHeight: 1.5,
            maxWidth: '300px'
          }}>
            {tier.advice}
          </p>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '16px'
          }}>
            <div style={{
              padding: '10px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255, 255, 255, 0.04)'
            }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block' }}>DAILY LOAD CAP</span>
              <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: 600 }}>
                {score >= 80 ? '110% Hypertrophy' : score >= 50 ? '100% Nominal' : '70% Active Rest'}
              </span>
            </div>
            <div style={{
              padding: '10px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255, 255, 255, 0.04)'
            }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block' }}>HYDRATION QUOTA</span>
              <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                {(2.4 + (100 - score) * 0.012).toFixed(1)} L / Day
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
