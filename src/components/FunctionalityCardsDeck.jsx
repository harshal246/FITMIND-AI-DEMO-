import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, Compass, Shield, Activity, Layers, 
  Dumbbell, Brain, Apple, Flame, Award, Calendar, Bell, 
  CheckCircle2, ArrowRight, Maximize2, BarChart3, TrendingUp, Zap
} from 'lucide-react';

export default function FunctionalityCardsDeck() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start on FR-03 Morning Readiness
  const [viewMode, setViewMode] = useState('one-by-one'); // 'one-by-one' | 'grid'

  const functionalities = [
    {
      id: 'FR-01',
      title: 'Autonomous Biometrics Calibration',
      subtitle: 'Instant baseline expenditure and physiological partitioning without credit cards.',
      category: 'ONBOARDING & BIOMETRICS',
      icon: Compass,
      color: '#38bdf8',
      screenshot: '/assets/01_dashboard.png',
      endpoint: 'POST /api/v1/auth/onboarding',
      graphTitle: 'CALORIC EXPENDITURE & TDEE PARTITION GRAPH',
      graphType: 'bars',
      chartData: [
        { label: 'BMR (Basal)', value: 1780, max: 3000, color: '#64748b' },
        { label: 'NEAT (Activity)', value: 450, max: 3000, color: '#38bdf8' },
        { label: 'TEF (Digestive)', value: 240, max: 3000, color: '#a855f7' },
        { label: 'EAT (Training)', value: 520, max: 3000, color: '#10b981' },
        { label: 'TOTAL TDEE', value: 2990, max: 3000, color: '#f59e0b' }
      ],
      inputs: ['Age, Weight (kg), Height (cm)', 'Target Goal (Hypertrophy / Cutting / Recomp)', 'Gym Equipment & Training Age'],
      outputs: ['Personalized Baseline Caloric Target', 'Macronutrient Partitions (P / C / F)', 'Periodization Phase Roadmap'],
      algorithm: 'Mifflin-St Jeor + Katch-McArdle equations with strict physiological bounds. Clamps invalid values and enforces zero data fabrication.'
    },
    {
      id: 'FR-02',
      title: 'Enterprise Single-Use OTP Security',
      subtitle: 'Cryptographically secure passwordless sign-in with rotating token pairs.',
      category: 'ENTERPRISE SECURITY',
      icon: Shield,
      color: '#f43f5e',
      screenshot: '/assets/debug_state.png',
      endpoint: 'POST /api/v1/auth/verify-otp',
      graphTitle: 'SECURITY TIMELINE & TOKEN ROTATION GRAPH',
      graphType: 'timeline',
      timelineSteps: [
        { step: '0s', label: 'OTP Requested', status: 'HMAC-SHA256 6-digit code generated' },
        { step: '+1s', label: 'Email Dispatched', status: 'Delivered via secure SMTP gateway' },
        { step: '+45s', label: 'Verified & Consumed', status: 'Single-use code burned atomically in Redis' },
        { step: '+15m', label: 'JWT Token Expiry', status: 'Access token expires; triggers silent refresh' },
        { step: '+7d', label: 'Refresh Rotation', status: 'Rotated with replay attack invalidation' }
      ],
      inputs: ['Athlete Email Address', '6-Digit One-Time Verification Code'],
      outputs: ['Cryptographically Signed JWT Access Token (15-min)', 'Secure HttpOnly Refresh Token (7-day with rotation)', 'Authenticated Session Context'],
      algorithm: 'Cryptographic HMAC-SHA256 one-time code generation. Atomic Redis check-and-expire prevents race conditions and replay attacks.'
    },
    {
      id: 'FR-03',
      title: 'Daily Morning Readiness Intelligence',
      subtitle: 'Dynamic autonomic recovery calculations adjusting volume and RPE daily.',
      category: 'AUTONOMIC RECOVERY',
      icon: Activity,
      color: '#10b981',
      screenshot: '/assets/01_dashboard.png',
      endpoint: 'POST /api/v1/recovery/checkin',
      graphTitle: '7-DAY HRV & READINESS SCORE TRAJECTORY GRAPH',
      graphType: 'line',
      trendPoints: [
        { day: 'Mon', score: 88, hrv: 62 },
        { day: 'Tue', score: 92, hrv: 65 },
        { day: 'Wed', score: 74, hrv: 55 },
        { day: 'Thu', score: 81, hrv: 58 },
        { day: 'Fri', score: 95, hrv: 68 },
        { day: 'Sat', score: 68, hrv: 51 },
        { day: 'Sun', score: 91, hrv: 64 }
      ],
      inputs: ['Sleep Duration (hours) & Quality (1-5)', 'Muscle Soreness Level (1-10)', 'Subjective Stress (1-10)', 'Resting Heart Rate (HRV proxy)'],
      outputs: ['0–100% Calculated Readiness Score', 'Training Volume Modifier (+10% / Standard / -20% / Deload)', 'Personalized Hydration Quota (Liters)'],
      algorithm: 'Weighted multi-factor autonomic strain model. Deload threshold automatically triggered if score drops below 50% or 3-day rolling strain exceeds 85.'
    },
    {
      id: 'FR-04',
      title: 'Central Command Athlete Dashboard',
      subtitle: 'Consolidated real-time cockpit tracking volume, hydration, and training phase.',
      category: 'CENTRAL COCKPIT',
      icon: Layers,
      color: '#38bdf8',
      screenshot: '/assets/01_dashboard.png',
      endpoint: 'GET /api/v1/dashboard/today',
      graphTitle: 'DAILY TARGET COMPLETION TELEMETRY GAUGE',
      graphType: 'gauges',
      gauges: [
        { name: 'READINESS', pct: 94, color: '#10b981', note: 'Prime State' },
        { name: 'WORKOUT VOLUME', pct: 100, color: '#38bdf8', note: '22 Sets Logged' },
        { name: 'CALORIE GOAL', pct: 88, color: '#f59e0b', note: '2,640 / 3,000 kcal' },
        { name: 'HYDRATION', pct: 85, color: '#00f0ff', note: '3.4L / 4.0L Target' }
      ],
      inputs: ['Active Athlete Session', 'Live Telemetry Date (client timezone synchronized)'],
      outputs: ['Daily Training Phase Card', 'Calorie & Macro Ring Progress', 'Hydration Target vs Logged', 'Weekly 7-Day Completion Heatmap'],
      algorithm: 'Aggregates current athlete daily ledger via single optimized join query; zero client-side timezone drift.'
    },
    {
      id: 'FR-05',
      title: 'Dynamic Workouts & In-Session Rest Timers',
      subtitle: 'In-gym logging with automated progressive overload and audio countdown clock.',
      category: 'TRAINING EXECUTION',
      icon: Dumbbell,
      color: '#f59e0b',
      screenshot: '/assets/03_workouts.png',
      endpoint: 'POST /api/v1/workouts/log',
      graphTitle: 'AUTO-PROGRESSIVE OVERLOAD LOAD PROGRESSION GRAPH',
      graphType: 'overload',
      overloadData: [
        { week: 'Week 1', weight: 100, reps: 8, rpe: 8.0, status: 'Base Line' },
        { week: 'Week 2', weight: 100, reps: 9, rpe: 8.5, status: '+1 Rep Target' },
        { week: 'Week 3', weight: 102.5, reps: 8, rpe: 8.5, status: '+2.5kg Overload' },
        { week: 'Week 4', weight: 102.5, reps: 9, rpe: 9.0, status: 'Peak Hypertrophy' },
        { week: 'Week 5', weight: 80, reps: 6, rpe: 6.0, status: 'Planned Deload' }
      ],
      inputs: ['Target Muscle Split', 'Weight (kg), Reps, RPE per set', 'Rest Duration (30s / 60s / 90s / 120s)'],
      outputs: ['Active Exercise Session View', 'Live Countdown Rest Timer with Audio Synthesizer', 'Overload Target for Next Session (+2.5kg / +1 Rep)', 'Total Volume Load (kg)'],
      algorithm: 'Brzycki and Epley 1RM formula calculation. Progressive overload algorithms check previous 3 session RPEs to dynamically step weights.'
    },
    {
      id: 'FR-06',
      title: '24/7 Conversational Multi-Agent Coach',
      subtitle: 'Stateful LangGraph agent delivering verified biomechanical swaps and form cues.',
      category: 'AI AGENTIC CORE',
      icon: Brain,
      color: '#a855f7',
      screenshot: '/assets/04_coach.png',
      endpoint: 'POST /api/v1/coach/chat',
      graphTitle: 'MULTI-AGENT INFERENCE LATENCY & ROUTING GRAPH',
      graphType: 'latency',
      latencyData: [
        { stage: 'Safety Guardrail', timeMs: 14, color: '#f43f5e' },
        { stage: 'LLM Task Planner', timeMs: 78, color: '#a855f7' },
        { stage: 'Entity Resolver (pgvector)', timeMs: 32, color: '#f59e0b' },
        { stage: 'Pydantic Validator', timeMs: 8, color: '#10b981' },
        { stage: 'Transactional Dispatch', timeMs: 22, color: '#38bdf8' }
      ],
      inputs: ['Athlete Natural Language Query (Voice or Text)', 'Current Biometric State & Training Context'],
      outputs: ['Verified Conversational Response', 'Actionable UI Cards (Exercise Swaps, Macro Adjustments)', 'Audit-Logged Agent Reasoning Trace'],
      algorithm: 'Deterministic guardrails enforce zero hallucination of exercises or foods. Pydantic schemas validate all payload dispatches.'
    },
    {
      id: 'FR-07',
      title: 'Precision Macro Vault & Fuel Periodization',
      subtitle: 'Calorie periodization and dynamic carb cycling calibrated to training fatigue.',
      category: 'NUTRITIONAL SCIENCE',
      icon: Apple,
      color: '#f43f5e',
      screenshot: '/assets/05_nutrition.png',
      endpoint: 'GET /api/v1/nutrition/today',
      graphTitle: 'TRAINING DAY VS REST DAY MACRO PARTITION GRAPH',
      graphType: 'macros',
      macroSplits: {
        training: { label: 'High-Demand Training Day (3,100 kcal)', protein: 190, carbs: 380, fat: 65 },
        rest: { label: 'Active Recovery / Rest Day (2,400 kcal)', protein: 190, carbs: 210, fat: 85 }
      },
      inputs: ['Food Item / Meal Description', 'Portion Size (grams)', 'Water Intake (ml)'],
      outputs: ['Macronutrient Progress Breakdown', 'Remaining Caloric Allowance', 'Training Day Carb Re-Feed Allocation', 'Daily Hydration Completion (%)'],
      algorithm: 'Carb cycling algorithm: scales carbohydrate targets +15% on high-demand lower body days and shifts toward healthy fats on rest days.'
    },
    {
      id: 'FR-08',
      title: 'Muscle Fatigue & Recovery Heatmaps',
      subtitle: 'Tracks localized muscular fatigue decay curves to prevent overuse injuries.',
      category: 'FATIGUE RECOVERY',
      icon: Flame,
      color: '#10b981',
      screenshot: '/assets/06_progress.png',
      endpoint: 'GET /api/v1/recovery/status',
      graphTitle: '48H-72H MUSCLE PROTEIN REPAIR DECAY CURVE GRAPH',
      graphType: 'decay',
      decayHours: [
        { hr: '0h (Post-Lift)', recovery: 15, note: 'Peak Glycogen Depletion' },
        { hr: '12h', recovery: 35, note: 'Active Protein Synthesis' },
        { hr: '24h (DOMS Peak)', recovery: 50, note: 'Microtrauma Remodeling' },
        { hr: '48h', recovery: 82, note: 'Supercompensation Window' },
        { hr: '72h', recovery: 98, note: 'Fully Primed for Loading' }
      ],
      inputs: ['Completed Workout Mechanical Volume', 'Sleep Hours vs 8-Hour Baseline', 'Readiness Check-in History'],
      outputs: ['Anatomical Recovery Heatmap', 'Autonomic Strain Index (0–21 Arbitrary Units)', 'Deload Recommendation Alerts'],
      algorithm: '48-72 hour localized glycogen replenishment and myofibrillar repair decay curves adjusted for readiness score.'
    },
    {
      id: 'FR-09',
      title: 'Data-Driven 1RM Strength Progression',
      subtitle: 'Biometric progression curves, volume trajectories, and milestone PR unlocks.',
      category: 'ANALYTICS & PRs',
      icon: Award,
      color: '#38bdf8',
      screenshot: '/assets/06_progress.png',
      endpoint: 'GET /api/v1/progress/summary',
      graphTitle: '12-WEEK ESTIMATED 1RM COMPOUND TRAJECTORY GRAPH',
      graphType: 'strength',
      lifts: [
        { name: 'Barbell Back Squat', start: 140, current: 165, delta: '+25 kg' },
        { name: 'Flat Barbell Bench Press', start: 100, current: 117.5, delta: '+17.5 kg' },
        { name: 'Conventional Deadlift', start: 170, current: 205, delta: '+35 kg' },
        { name: 'Standing Overhead Press', start: 62.5, current: 75, delta: '+12.5 kg' }
      ],
      inputs: ['Logged Workouts & Weights', 'Periodic Body Weight Logs'],
      outputs: ['Interactive Volume Over Time Trend Charts', '1RM Progression Curves (Squat, Bench, Deadlift, OHP)', 'Strength Milestone Badges & PR Celebrations'],
      algorithm: 'Rolling 30-day moving averages and linear regression filtering out daily hydration fluctuations.'
    },
    {
      id: 'FR-10',
      title: 'Periodization & Weekly Split Scheduling',
      subtitle: 'Constraint-driven calendar generator preventing spinal loading overlap.',
      category: 'PERIODIZATION',
      icon: Calendar,
      color: '#f59e0b',
      screenshot: '/assets/07_exercises.png',
      endpoint: 'GET /api/v1/schedules/weekly',
      graphTitle: '7-DAY SPLIT VOLUME DISTRIBUTION GRAPH',
      graphType: 'split',
      scheduleDays: [
        { day: 'MON', focus: 'Push (Chest / Delts / Triceps)', sets: 20, load: 'High (85%)' },
        { day: 'TUE', focus: 'Pull (Lats / Upper Back / Biceps)', sets: 22, load: 'High (85%)' },
        { day: 'WED', focus: 'Active Recovery & Mobility', sets: 0, load: 'Rest (30%)' },
        { day: 'THU', focus: 'Legs (Quads / Hamstrings / Calves)', sets: 24, load: 'Peak (95%)' },
        { day: 'FRI', focus: 'Upper Body Hypertrophy', sets: 18, load: 'Moderate (75%)' },
        { day: 'SAT', focus: 'Lower Body & Core Stability', sets: 16, load: 'Moderate (75%)' },
        { day: 'SUN', focus: 'Complete Neurological Deload', sets: 0, load: 'Rest (0%)' }
      ],
      inputs: ['Split Template', 'Preferred Rest Days', 'Meso-cycle Duration (4-12 weeks)'],
      outputs: ['Weekly 7-Day Training Schedule', 'Scheduled Rest & Deload Windows', 'Calendar Alerts'],
      algorithm: 'Constraint satisfaction algorithm preventing consecutive heavy spinal loading or overlapping compound fatigue.'
    },
    {
      id: 'FR-11',
      title: 'Automated WhatsApp & Email Telemetry',
      subtitle: 'Background cron triggers delivering timely meal nudges and 1-tap check-ins.',
      category: 'ALERTS & CRON',
      icon: Bell,
      color: '#10b981',
      screenshot: '/assets/debug_state.png',
      endpoint: 'POST /api/v1/notifications/preferences',
      graphTitle: '24-HOUR AUTOMATED CRON DISPATCH TIMELINE GRAPH',
      graphType: 'dispatch',
      dispatches: [
        { time: '07:00 AM', channel: 'WhatsApp', msg: 'Morning Readiness Check-In Nudge (1-Tap Link)' },
        { time: '12:30 PM', channel: 'Email', msg: 'Post-Lunch Protein Target & Hydration Progress' },
        { time: '05:00 PM', channel: 'WhatsApp', msg: 'Workout Readiness Reminder & Set Overload Target' },
        { time: '09:30 PM', channel: 'WhatsApp', msg: 'Nightly Macro Summary & Sleep Optimization Window' }
      ],
      inputs: ['Notification Preferences', 'Target Meal Timings', 'Timezone'],
      outputs: ['Scheduled Background Cron Triggers', 'WhatsApp & Email Reminder Dispatches', 'Instant One-Tap Check-In Links'],
      algorithm: 'Async task scheduler running localized timezone cron triggers with exponential backoff.'
    }
  ];

  const currentCard = functionalities[currentIndex];
  const Icon = currentCard.icon;

  const nextCard = () => {
    setCurrentIndex((prev) => (prev < functionalities.length - 1 ? prev + 1 : 0));
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : functionalities.length - 1));
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Top Header Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '28px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="pill-tag pill-tag-cyan">SYSTEM CAPABILITIES // 11 CORE MODULES</span>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              {viewMode === 'one-by-one' ? `DISPLAYING CARD 0${currentIndex + 1} OF 11` : 'ALL 11 CARDS'}
            </span>
          </div>
          <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff', margin: 0 }}>
            Functional Requirements Showcase Deck
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginTop: '4px' }}>
            Inspect each functionality one-by-one with its visual data graph, mathematical algorithm, and live interface capture.
          </p>
        </div>

        {/* View Mode Toggle & Next/Prev Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {viewMode === 'one-by-one' && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={prevCard}
                className="btn-glass-secondary"
                style={{ padding: '8px 14px', borderRadius: 'var(--radius-full)' }}
                aria-label="Previous card"
              >
                <ChevronLeft size={18} />
                <span style={{ fontSize: '0.82rem' }}>Prev</span>
              </button>
              <button
                onClick={nextCard}
                className="btn-titanium-primary"
                style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)' }}
                aria-label="Next card"
              >
                <span style={{ fontSize: '0.82rem' }}>Next Card</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          <div style={{
            display: 'flex',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            padding: '3px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <button
              onClick={() => setViewMode('one-by-one')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                backgroundColor: viewMode === 'one-by-one' ? '#ffffff' : 'transparent',
                color: viewMode === 'one-by-one' ? '#000000' : 'var(--text-mid)',
                fontWeight: viewMode === 'one-by-one' ? 700 : 500
              }}
            >
              One-by-One
            </button>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                backgroundColor: viewMode === 'grid' ? '#ffffff' : 'transparent',
                color: viewMode === 'grid' ? '#000000' : 'var(--text-mid)',
                fontWeight: viewMode === 'grid' ? 700 : 500
              }}
            >
              Grid View
            </button>
          </div>
        </div>
      </div>

      {/* Numbered Stepper Pills (for fast hopping in One-by-One mode) */}
      {viewMode === 'one-by-one' && (
        <div style={{
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          paddingBottom: '14px',
          marginBottom: '20px'
        }}>
          {functionalities.map((item, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSelected ? `1px solid ${item.color}` : '1px solid rgba(255, 255, 255, 0.06)',
                  color: isSelected ? '#ffffff' : 'var(--text-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: isSelected ? 700 : 400
                }}
              >
                <span style={{ color: isSelected ? item.color : 'var(--text-dim)' }}>{item.id}</span>
                <span>{item.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* MODE 1: ONE-BY-ONE GIANT SHOWCASE CARD */}
      {viewMode === 'one-by-one' && (
        <div className="glass-surface" style={{
          padding: '36px',
          border: `1px solid ${currentCard.color}45`,
          boxShadow: `0 25px 60px -20px ${currentCard.color}25`
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}>
            {/* Left Column: Information & Visual Telemetry Graph */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: `${currentCard.color}15`,
                  border: `1px solid ${currentCard.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: currentCard.color
                }}>
                  <Icon size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: currentCard.color, fontWeight: 700 }}>
                    {currentCard.id} // {currentCard.category}
                  </span>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    ENDPOINT: <code>{currentCard.endpoint}</code>
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                {currentCard.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '22px' }}>
                {currentCard.subtitle}
              </p>

              {/* VISUAL DATA GRAPH / CHART ACCORDING TO FUNCTIONALITY */}
              <div style={{
                backgroundColor: '#04070e',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '22px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '14px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingBottom: '8px'
                }}>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: currentCard.color, fontWeight: 700 }}>
                    📊 {currentCard.graphTitle}
                  </span>
                  <span className="pill-tag" style={{ fontSize: '0.62rem', padding: '1px 6px' }}>
                    LIVE DATA MODEL
                  </span>
                </div>

                {/* GRAPH TYPE: BARS (e.g. FR-01 TDEE) */}
                {currentCard.graphType === 'bars' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {currentCard.chartData.map((bar, i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', marginBottom: '3px' }}>
                          <span style={{ color: 'var(--text-mid)' }}>{bar.label}</span>
                          <span style={{ fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: 600 }}>{bar.value} kcal</span>
                        </div>
                        <div style={{ height: '6px', width: '100%', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{
                            height: '100%',
                            width: `${(bar.value / bar.max) * 100}%`,
                            backgroundColor: bar.color,
                            borderRadius: '3px'
                          }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* GRAPH TYPE: TIMELINE (e.g. FR-02 Security) */}
                {currentCard.graphType === 'timeline' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {currentCard.timelineSteps.map((step, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem' }}>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--rose-primary)',
                          fontWeight: 700,
                          minWidth: '40px'
                        }}>{step.step}</span>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--rose-primary)' }} />
                        <div>
                          <strong style={{ color: '#fff' }}>{step.label}</strong>
                          <span style={{ color: 'var(--text-dim)', marginLeft: '8px', fontSize: '0.76rem' }}>— {step.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* GRAPH TYPE: LINE / TREND (e.g. FR-03 Readiness) */}
                {currentCard.graphType === 'line' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '100px', padding: '10px 0' }}>
                      {currentCard.trendPoints.map((pt, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: 1 }}>
                          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#10b981', fontWeight: 700 }}>
                            {pt.score}%
                          </span>
                          <div style={{
                            width: '18px',
                            height: `${pt.score * 0.7}px`,
                            background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                            borderRadius: '4px'
                          }} />
                          <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                            {pt.day}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* GRAPH TYPE: GAUGES (e.g. FR-04 Dashboard) */}
                {currentCard.graphType === 'gauges' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {currentCard.gauges.map((g, i) => (
                      <div key={i} style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{g.name}</span>
                          <span style={{ color: g.color, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{g.pct}%</span>
                        </div>
                        <div style={{ height: '4px', width: '100%', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${g.pct}%`, backgroundColor: g.color }} />
                        </div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-mid)', marginTop: '4px', display: 'block' }}>{g.note}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* GRAPH TYPE: OVERLOAD (e.g. FR-05 Workouts) */}
                {currentCard.graphType === 'overload' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {currentCard.overloadData.map((row, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 8px',
                        backgroundColor: 'rgba(255,255,255,0.02)',
                        borderRadius: '4px'
                      }}>
                        <span style={{ color: '#fff', fontWeight: 600 }}>{row.week}: {row.weight}kg × {row.reps}</span>
                        <span style={{ color: 'var(--amber-primary)' }}>RPE {row.rpe}</span>
                        <span style={{ color: 'var(--emerald-primary)' }}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* GRAPH TYPE: LATENCY (e.g. FR-06 AI Coach) */}
                {currentCard.graphType === 'latency' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {currentCard.latencyData.map((l, i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '2px' }}>
                          <span style={{ color: 'var(--text-mid)' }}>{l.stage}</span>
                          <span style={{ fontFamily: 'var(--font-mono)', color: l.color, fontWeight: 700 }}>{l.timeMs} ms</span>
                        </div>
                        <div style={{ height: '4px', width: '100%', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '2px' }}>
                          <div style={{ height: '100%', width: `${(l.timeMs / 100) * 100}%`, backgroundColor: l.color, borderRadius: '2px' }} />
                        </div>
                      </div>
                    ))}
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textAlign: 'right', marginTop: '4px' }}>
                      TOTAL PIPELINE TIME: <strong>154 ms</strong> (SUB-200MS INVARIANT)
                    </div>
                  </div>
                )}

                {/* GRAPH TYPE: MACROS (e.g. FR-07 Nutrition) */}
                {currentCard.graphType === 'macros' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px' }}>
                        TRAINING DAY
                      </span>
                      <div style={{ fontSize: '0.78rem', color: '#fff' }}>Protein: 190g</div>
                      <div style={{ fontSize: '0.78rem', color: '#fff' }}>Carbs: 380g (+15%)</div>
                      <div style={{ fontSize: '0.78rem', color: '#fff' }}>Fats: 65g</div>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--emerald-primary)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px' }}>
                        REST / RECOVERY DAY
                      </span>
                      <div style={{ fontSize: '0.78rem', color: '#fff' }}>Protein: 190g</div>
                      <div style={{ fontSize: '0.78rem', color: '#fff' }}>Carbs: 210g (-44%)</div>
                      <div style={{ fontSize: '0.78rem', color: '#fff' }}>Fats: 85g (+30%)</div>
                    </div>
                  </div>
                )}

                {/* GRAPH TYPE: DECAY (e.g. FR-08 Recovery) */}
                {currentCard.graphType === 'decay' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {currentCard.decayHours.map((d, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', fontFamily: 'var(--font-mono)', padding: '3px 0' }}>
                        <span style={{ color: 'var(--emerald-primary)', fontWeight: 700 }}>{d.hr}</span>
                        <span style={{ color: '#fff' }}>{d.recovery}% Recovered</span>
                        <span style={{ color: 'var(--text-dim)' }}>{d.note}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* GRAPH TYPE: STRENGTH (e.g. FR-09 1RM Progression) */}
                {currentCard.graphType === 'strength' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {currentCard.lifts.map((l, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', padding: '4px 0' }}>
                        <span style={{ color: 'var(--text-mid)' }}>{l.name}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: 600 }}>{l.start}kg $\to$ {l.current}kg</span>
                        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', fontWeight: 700 }}>{l.delta}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* GRAPH TYPE: SPLIT (e.g. FR-10 Periodization) */}
                {currentCard.graphType === 'split' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {currentCard.scheduleDays.slice(0, 5).map((s, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', padding: '2px 0' }}>
                        <span style={{ color: 'var(--amber-primary)', fontWeight: 700, width: '35px' }}>{s.day}</span>
                        <span style={{ color: '#fff' }}>{s.focus}</span>
                        <span style={{ color: 'var(--text-dim)' }}>{s.load}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* GRAPH TYPE: DISPATCH (e.g. FR-11 Notifications) */}
                {currentCard.graphType === 'dispatch' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {currentCard.dispatches.map((dp, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.74rem', alignItems: 'baseline' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--emerald-primary)', fontWeight: 700, width: '65px' }}>{dp.time}</span>
                        <span className="pill-tag" style={{ fontSize: '0.62rem', padding: '1px 6px' }}>{dp.channel}</span>
                        <span style={{ color: 'var(--text-mid)' }}>{dp.msg}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Invariant & Mathematical Model */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '16px'
              }}>
                <strong style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: currentCard.color, display: 'block', marginBottom: '4px' }}>
                  MATHEMATICAL MODEL & SYSTEM INVARIANT:
                </strong>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-mid)', margin: 0, lineHeight: 1.5 }}>
                  {currentCard.algorithm}
                </p>
              </div>

              {/* Inputs & Outputs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-xs)' }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', display: 'block' }}>INPUT TELEMETRY</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-high)' }}>{currentCard.inputs.join(', ')}</span>
                </div>
                <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-xs)' }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--emerald-primary)', display: 'block' }}>OUTPUT ARTIFACTS</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-high)' }}>{currentCard.outputs.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Real Interface Preview Screenshot */}
            <div>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 25px 50px -15px rgba(0, 0, 0, 0.9)',
                position: 'relative',
                backgroundColor: '#020408'
              }}>
                <img
                  src={currentCard.screenshot}
                  alt={currentCard.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  UI CAPTURE // {currentCard.id}
                </div>
              </div>

              {/* Navigation Footnote */}
              <div style={{
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.76rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-dim)'
              }}>
                <span>USE ARROWS TO CYCLE CARDS</span>
                <span style={{ color: currentCard.color }}>CARD {currentIndex + 1} OF 11</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: GRID VIEW (SHOW ALL 11 CARDS PROPERLY) */}
      {viewMode === 'grid' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px'
        }}>
          {functionalities.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <div
                key={card.id}
                className="glass-surface"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${card.color}`
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: card.color, fontSize: '0.84rem' }}>
                        {card.id}
                      </span>
                      <span className="pill-tag" style={{ fontSize: '0.62rem', padding: '1px 6px' }}>
                        {card.category}
                      </span>
                    </div>
                    <CardIcon size={16} color={card.color} />
                  </div>

                  <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '8px' }}>
                    {card.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.5, marginBottom: '18px' }}>
                    {card.subtitle}
                  </p>

                  {/* Screenshot Thumbnail */}
                  <div style={{
                    width: '100%',
                    height: '150px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    marginBottom: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    position: 'relative'
                  }}>
                    <img
                      src={card.screenshot}
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '8px',
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#fff'
                    }}>
                      SYSTEM VIEW
                    </div>
                  </div>

                  {/* Algorithm & Formula snippet */}
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                    lineHeight: 1.4,
                    marginBottom: '14px',
                    padding: '10px 12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: 'var(--radius-xs)'
                  }}>
                    <strong style={{ color: card.color }}>Model: </strong>
                    {card.algorithm}
                  </div>
                </div>

                <div style={{
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)'
                }}>
                  <span>ENDPOINT</span>
                  <code style={{ color: card.color }}>{card.endpoint}</code>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
