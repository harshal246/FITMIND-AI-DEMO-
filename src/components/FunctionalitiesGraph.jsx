import React, { useState } from 'react';
import { 
  Brain, Shield, Activity, Dumbbell, Apple, Award, Calendar, 
  Bell, CheckCircle2, ArrowRight, Zap, RefreshCw, Layers, Compass, ExternalLink, Sparkles, Flame
} from 'lucide-react';

export default function FunctionalitiesGraph() {
  const [activeTab, setActiveTab] = useState('ecosystem'); // 'ecosystem' | 'lifecycle' | 'agentflow'
  const [selectedNodeId, setSelectedNodeId] = useState('FR-03');

  // The 11 Functional Modules data
  const nodes = [
    {
      id: 'FR-01',
      title: 'Biometric Onboarding',
      short: 'FR-01 // ONBOARDING',
      category: 'IDENTITY',
      icon: Compass,
      x: 180,
      y: 110,
      color: '#38bdf8',
      inputs: 'Age, Sex, Mass (kg), Stature (cm), Training Age',
      outputs: 'Baseline TDEE, Caloric Partition, Periodization Phase',
      algorithm: 'Mifflin-St Jeor + Katch-McArdle physiological scaling',
      endpoint: 'POST /api/v1/auth/onboarding',
      screenshot: '/assets/01_dashboard.png',
      connections: ['CORE', 'FR-02', 'FR-04']
    },
    {
      id: 'FR-02',
      title: 'Enterprise OTP Security',
      short: 'FR-02 // SECURITY',
      category: 'SECURITY',
      icon: Shield,
      x: 180,
      y: 290,
      color: '#f43f5e',
      inputs: 'Athlete Email, 6-Digit One-Time Code',
      outputs: 'Signed JWT Token Pair (15m Access / 7d Refresh)',
      algorithm: 'HMAC-SHA256 one-time code with atomic Redis check-and-expire',
      endpoint: 'POST /api/v1/auth/verify-otp',
      screenshot: '/assets/debug_state.png',
      connections: ['CORE', 'FR-01']
    },
    {
      id: 'FR-03',
      title: 'Morning Readiness Engine',
      short: 'FR-03 // READINESS',
      category: 'BIOMETRICS',
      icon: Activity,
      x: 390,
      y: 70,
      color: '#10b981',
      inputs: 'Sleep Duration & Depth, DOMS Level, Stress, RHR',
      outputs: '0–100% Readiness Score, Volume Load Cap, Hydration Quota',
      algorithm: 'Weighted multi-factor autonomic strain index with dynamic deload gating',
      endpoint: 'POST /api/v1/recovery/checkin',
      screenshot: '/assets/01_dashboard.png',
      connections: ['CORE', 'FR-04', 'FR-05', 'FR-08']
    },
    {
      id: 'FR-04',
      title: 'Central Command Cockpit',
      short: 'FR-04 // COMMAND',
      category: 'TELEMETRY',
      icon: Layers,
      x: 390,
      y: 250,
      color: '#38bdf8',
      inputs: 'Active Session, Live Client Timezone',
      outputs: 'Daily Training Roadmap, Caloric Progress, Hydration Ring',
      algorithm: 'Optimized single join query isolating client timezone drift',
      endpoint: 'GET /api/v1/dashboard/today',
      screenshot: '/assets/01_dashboard.png',
      connections: ['CORE', 'FR-03', 'FR-05', 'FR-07']
    },
    {
      id: 'FR-05',
      title: 'Workouts & Rest Timers',
      short: 'FR-05 // WORKOUTS',
      category: 'TRAINING',
      icon: Dumbbell,
      x: 600,
      y: 70,
      color: '#f59e0b',
      inputs: 'Target Muscle Split, Load (kg), Reps, RPE per set',
      outputs: 'Overload Target (+2.5kg / +1 Rep), Rest Timer, Total Tonnage',
      algorithm: 'Brzycki and Epley 1RM math + rolling 3-session RPE overload stepper',
      endpoint: 'POST /api/v1/workouts/log',
      screenshot: '/assets/03_workouts.png',
      connections: ['CORE', 'FR-08', 'FR-09', 'FR-10']
    },
    {
      id: 'FR-06',
      title: '24/7 AI Multi-Agent Coach',
      short: 'FR-06 // AI AGENT',
      category: 'INTELLIGENCE',
      icon: Brain,
      x: 600,
      y: 250,
      color: '#a855f7',
      inputs: 'Athlete Natural Language Prompt (Voice / Text)',
      outputs: 'Verified Movement Swaps, Biomechanical Cues, Macro Targets',
      algorithm: 'LangGraph multi-agent orchestration with deterministic guardrails',
      endpoint: 'POST /api/v1/coach/chat',
      screenshot: '/assets/04_coach.png',
      connections: ['CORE', 'FR-05', 'FR-07']
    },
    {
      id: 'FR-07',
      title: 'Precision Macro Vault',
      short: 'FR-07 // NUTRITION',
      category: 'FUEL',
      icon: Apple,
      x: 810,
      y: 70,
      color: '#f43f5e',
      inputs: 'Logged Food Items, Portion Mass (g), Water Volume (ml)',
      outputs: 'Daily Nitrogen Balance, Calorie Deficit/Surplus, Hydration %',
      algorithm: 'Dynamic carb cycling scaling +15% on high-load compound days',
      endpoint: 'GET /api/v1/nutrition/today',
      screenshot: '/assets/05_nutrition.png',
      connections: ['CORE', 'FR-04', 'FR-06']
    },
    {
      id: 'FR-08',
      title: 'Muscle Fatigue Heatmaps',
      short: 'FR-08 // RECOVERY',
      category: 'RECOVERY',
      icon: Flame,
      x: 810,
      y: 250,
      color: '#10b981',
      inputs: 'Accumulated Mechanical Volume, Sleep Debt History',
      outputs: 'Anatomical Recovery Heatmap, Autonomic Strain Gauge (0–21)',
      algorithm: '48–72hr glycogen replenishment and myofibrillar repair decay curves',
      endpoint: 'GET /api/v1/recovery/status',
      screenshot: '/assets/06_progress.png',
      connections: ['CORE', 'FR-03', 'FR-05', 'FR-10']
    },
    {
      id: 'FR-09',
      title: '1RM Strength Analytics',
      short: 'FR-09 // ANALYTICS',
      category: 'PROGRESSION',
      icon: Award,
      x: 1020,
      y: 70,
      color: '#38bdf8',
      inputs: 'Logged Working Sets, Periodic Bodyweight Telemetry',
      outputs: 'Volume Trajectory Charts, 1RM Curves, PR Milestone Unlocks',
      algorithm: 'Rolling 30-day linear regression filtering daily water variance',
      endpoint: 'GET /api/v1/progress/summary',
      screenshot: '/assets/06_progress.png',
      connections: ['CORE', 'FR-05']
    },
    {
      id: 'FR-10',
      title: 'Periodization Scheduling',
      short: 'FR-10 // SCHEDULE',
      category: 'PERIODIZATION',
      icon: Calendar,
      x: 1020,
      y: 250,
      color: '#f59e0b',
      inputs: 'Split Template (PPL/Upper-Lower), Rest Day Preferences',
      outputs: 'Weekly 7-Day Matrix, Deload Windows, Neuromuscular Balance',
      algorithm: 'Constraint satisfaction algorithm preventing consecutive heavy spinal strain',
      endpoint: 'GET /api/v1/schedules/weekly',
      screenshot: '/assets/07_exercises.png',
      connections: ['CORE', 'FR-05', 'FR-08']
    },
    {
      id: 'FR-11',
      title: 'Automated Messaging',
      short: 'FR-11 // ALERTS',
      category: 'ALERTS',
      icon: Bell,
      x: 600,
      y: 390,
      color: '#10b981',
      inputs: 'Notification Preferences, Target Meal Timings, Timezone',
      outputs: 'WhatsApp & Email Reminders, 1-Tap Daily Check-in Dispatch',
      algorithm: 'Async task scheduler aligning cron jobs to athlete local timezone',
      endpoint: 'POST /api/v1/notifications/preferences',
      screenshot: '/assets/debug_state.png',
      connections: ['CORE', 'FR-03', 'FR-07']
    }
  ];

  // Core central hub node
  const coreHub = {
    x: 600,
    y: 190,
    title: 'FITMIND AI CORE',
    desc: 'Autonomous Multi-Agent Engine'
  };

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[2];

  // Daily Lifecycle Flow Steps
  const lifecycleSteps = [
    { time: '06:30 AM', id: 'FR-03', title: 'Morning Biometric Check-In', desc: 'Sleep duration, depth, soreness, and resting heart rate logged to compute the 0-100% Readiness Score.', color: '#10b981' },
    { time: '06:35 AM', id: 'FR-04', title: 'Daily Volume Calibration', desc: 'Central Command dynamically clamps today\'s RPE, adjusts set counts, and recalculates hydration target.', color: '#38bdf8' },
    { time: '12:30 PM', id: 'FR-07', title: 'Nutritional Re-Feed Balancing', desc: 'Precision Macro Vault aligns carb and protein targets according to today\'s training intensity.', color: '#f43f5e' },
    { time: '05:30 PM', id: 'FR-05', title: 'In-Gym Execution & Rest Timer', desc: 'Live workout companion logs load, reps, RPE, and auto-starts the audio countdown rest clock.', color: '#f59e0b' },
    { time: '06:45 PM', id: 'FR-08', title: 'Fatigue Heatmap & Overload Step', desc: 'Anatomical muscle recovery decay curves update and next week\'s +2.5kg progressive overload is scheduled.', color: '#a855f7' },
    { time: '10:30 PM', id: 'FR-06', title: 'Pre-Sleep AI Coach Guidance', desc: 'Agent recommends optimal pre-sleep nitrogen protein sources and circadian wind-down targets.', color: '#10b981' }
  ];

  // LangGraph Multi-Agent Flow Steps
  const agentFlow = [
    { node: 'STAGE 01', title: 'Athlete Input Ingestion', sub: 'Voice / Text / Telemetry', color: '#38bdf8', icon: Compass },
    { node: 'STAGE 02', title: 'Deterministic Safety Guardrail', sub: 'Filters Contraindications', color: '#f43f5e', icon: Shield },
    { node: 'STAGE 03', title: 'LLM Task Planner (LangGraph)', sub: 'DAG Decomposition', color: '#a855f7', icon: Brain },
    { node: 'STAGE 04', title: 'Entity Resolver (pgvector)', sub: 'Verified 1,200+ Catalog', color: '#f59e0b', icon: Layers },
    { node: 'STAGE 05', title: 'Pydantic Invariant Validator', sub: 'Zero Data Fabrication', color: '#10b981', icon: CheckCircle2 },
    { node: 'STAGE 06', title: 'Transactional ACID Dispatcher', sub: 'Atomic PostgreSQL Commit', color: '#38bdf8', icon: Zap }
  ];

  return (
    <div className="glass-surface" style={{ padding: '36px', position: 'relative' }}>
      {/* Top Header & View Switcher */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '28px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="pill-tag pill-tag-cyan">SYSTEM TOPOLOGY // GRAPH ARCHITECTURE</span>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              11 INTERCONNECTED MODULES
            </span>
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: 0 }}>
            Interactive Functional Ecosystem Graph
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginTop: '4px' }}>
            Visual map of all 11 system capabilities, data pipelines, and bidirectional feedback loops. Click any node to inspect telemetry.
          </p>
        </div>

        {/* View Mode Switcher Pills */}
        <div style={{
          display: 'flex',
          gap: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          padding: '4px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <button
            onClick={() => setActiveTab('ecosystem')}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: activeTab === 'ecosystem' ? 700 : 500,
              backgroundColor: activeTab === 'ecosystem' ? '#ffffff' : 'transparent',
              color: activeTab === 'ecosystem' ? '#000000' : 'var(--text-mid)',
              boxShadow: activeTab === 'ecosystem' ? '0 2px 10px rgba(255, 255, 255, 0.2)' : 'none'
            }}
          >
            Ecosystem Node Graph
          </button>
          <button
            onClick={() => setActiveTab('lifecycle')}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: activeTab === 'lifecycle' ? 700 : 500,
              backgroundColor: activeTab === 'lifecycle' ? '#ffffff' : 'transparent',
              color: activeTab === 'lifecycle' ? '#000000' : 'var(--text-mid)',
              boxShadow: activeTab === 'lifecycle' ? '0 2px 10px rgba(255, 255, 255, 0.2)' : 'none'
            }}
          >
            Athlete Daily Lifecycle
          </button>
          <button
            onClick={() => setActiveTab('agentflow')}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: activeTab === 'agentflow' ? 700 : 500,
              backgroundColor: activeTab === 'agentflow' ? '#ffffff' : 'transparent',
              color: activeTab === 'agentflow' ? '#000000' : 'var(--text-mid)',
              boxShadow: activeTab === 'agentflow' ? '0 2px 10px rgba(255, 255, 255, 0.2)' : 'none'
            }}
          >
            Multi-Agent Pipeline
          </button>
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE SVG ECOSYSTEM NODE GRAPH */}
      {activeTab === 'ecosystem' && (
        <div>
          {/* Main Visual SVG Canvas */}
          <div style={{
            width: '100%',
            height: '480px',
            backgroundColor: '#04060b',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.8)'
          }}>
            <svg
              viewBox="0 0 1200 480"
              style={{ width: '100%', height: '100%', display: 'block' }}
            >
              {/* Background Grid Dots */}
              <defs>
                <pattern id="graph-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.08)" />
                </pattern>
                {/* Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="url(#graph-dots)" />

              {/* Dynamic Connecting Lines from Central Core to each Node */}
              {nodes.map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <g key={node.id}>
                    <path
                      d={`M ${coreHub.x} ${coreHub.y} Q ${(coreHub.x + node.x) / 2} ${(coreHub.y + node.y) / 2 + 10} ${node.x} ${node.y}`}
                      fill="none"
                      stroke={isSelected ? node.color : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth={isSelected ? '2.5' : '1.2'}
                      strokeDasharray={isSelected ? '6 4' : 'none'}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    {/* Animated Pulse Circle travelling along connection if selected */}
                    {isSelected && (
                      <circle r="4" fill={node.color} filter="url(#glow)">
                        <animateMotion
                          path={`M ${coreHub.x} ${coreHub.y} Q ${(coreHub.x + node.x) / 2} ${(coreHub.y + node.y) / 2 + 10} ${node.x} ${node.y}`}
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Inter-Node Mesh Connections */}
              <path d="M 180 110 L 180 290" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 390 70 L 600 70" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 600 70 L 810 70" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 810 70 L 1020 70" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 390 250 L 600 250" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 600 250 L 810 250" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 810 250 L 1020 250" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 600 250 L 600 390" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3" />

              {/* Central Core Hub Node */}
              <g transform={`translate(${coreHub.x}, ${coreHub.y})`}>
                <circle r="46" fill="rgba(56, 189, 248, 0.08)" />
                <circle r="36" fill="#080e18" stroke="var(--cyan-primary)" strokeWidth="2" filter="url(#glow)" />
                <circle r="6" fill="#ffffff" />
                <text y="58" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="var(--font-mono)" fontWeight="700">
                  FITMIND AI CORE
                </text>
                <text y="72" textAnchor="middle" fill="var(--text-dim)" fontSize="9" fontFamily="var(--font-mono)">
                  AUTONOMOUS AGENT ORCHESTRATOR
                </text>
              </g>

              {/* Interactive Module Nodes */}
              {nodes.map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    onClick={() => setSelectedNodeId(node.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Glowing outer hover aura */}
                    <circle
                      r={isSelected ? '28' : '22'}
                      fill={isSelected ? `${node.color}25` : 'rgba(255, 255, 255, 0.03)'}
                      stroke={isSelected ? node.color : 'rgba(255, 255, 255, 0.16)'}
                      strokeWidth={isSelected ? '2' : '1'}
                      style={{ transition: 'all 0.25s ease' }}
                    />
                    {/* Inner circle */}
                    <circle
                      r="16"
                      fill="#060910"
                      stroke={node.color}
                      strokeWidth="1.5"
                    />
                    {/* Node ID indicator */}
                    <circle r="4" fill={node.color} />

                    {/* Labels */}
                    <text
                      y={node.y > 200 ? 38 : -32}
                      textAnchor="middle"
                      fill={isSelected ? '#ffffff' : 'var(--text-mid)'}
                      fontSize="11"
                      fontFamily="var(--font-mono)"
                      fontWeight={isSelected ? '800' : '600'}
                    >
                      {node.short}
                    </text>
                    <text
                      y={node.y > 200 ? 50 : -20}
                      textAnchor="middle"
                      fill={isSelected ? node.color : 'var(--text-dim)'}
                      fontSize="9"
                      fontFamily="var(--font-mono)"
                    >
                      {node.title}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Instruction Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '14px',
              left: '20px',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-dim)',
              backgroundColor: 'rgba(0,0,0,0.6)',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              ● CLICK ANY NODE TO INSPECT ITS REAL-TIME TELEMETRY & INVARIANTS
            </div>
          </div>

          {/* ACTIVE NODE INSPECTOR CARD (Replaces the boring flat table!) */}
          <div style={{
            marginTop: '24px',
            backgroundColor: '#060910',
            borderRadius: 'var(--radius-md)',
            border: `1px solid ${selectedNode.color}50`,
            boxShadow: `0 20px 40px -15px ${selectedNode.color}20`,
            padding: '28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'center'
          }}>
            {/* Left: Metadata & Formulas */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="pill-tag" style={{ color: selectedNode.color, borderColor: `${selectedNode.color}40`, backgroundColor: `${selectedNode.color}10` }}>
                  {selectedNode.id} // {selectedNode.category}
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  ENDPOINT: <code>{selectedNode.endpoint}</code>
                </span>
              </div>

              <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '12px' }}>
                {selectedNode.title}
              </h4>

              {/* Invariant & Mathematical Model */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: selectedNode.color, fontWeight: 700, marginBottom: '6px' }}>
                  MATHEMATICAL MODEL & INVARIANT:
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.5 }}>
                  {selectedNode.algorithm}
                </div>
              </div>

              {/* Inputs & Outputs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '0.82rem' }}>
                <div style={{
                  padding: '10px 14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid rgba(255, 255, 255, 0.04)'
                }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', display: 'block' }}>INPUT TELEMETRY</span>
                  <span style={{ color: 'var(--text-high)' }}>{selectedNode.inputs}</span>
                </div>
                <div style={{
                  padding: '10px 14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid rgba(255, 255, 255, 0.04)'
                }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--emerald-primary)', display: 'block' }}>OUTPUT ARTIFACTS</span>
                  <span style={{ color: 'var(--text-high)' }}>{selectedNode.outputs}</span>
                </div>
              </div>
            </div>

            {/* Right: Live Interface Preview Screenshot */}
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              position: 'relative',
              backgroundColor: '#020408'
            }}>
              <img
                src={selectedNode.screenshot}
                alt={selectedNode.title}
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                padding: '4px 10px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: '#fff'
              }}>
                UI CAPTURE // {selectedNode.id}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ATHLETE DAILY LIFECYCLE FLOW */}
      {activeTab === 'lifecycle' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}>
          {lifecycleSteps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => { setSelectedNodeId(step.id); setActiveTab('ecosystem'); }}
              style={{
                backgroundColor: '#060910',
                borderRadius: 'var(--radius-md)',
                padding: '22px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = step.color;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: step.color, fontWeight: 700 }}>
                  {step.time}
                </span>
                <span className="pill-tag" style={{ fontSize: '0.64rem' }}>
                  {step.id}
                </span>
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '8px' }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-mid)', lineHeight: 1.5 }}>
                {step.desc}
              </p>
              <div style={{
                marginTop: '14px',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                color: step.color,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>Inspect in Node Graph</span>
                <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 3: MULTI-AGENT DATAFLOW PIPELINE */}
      {activeTab === 'agentflow' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '12px'
        }}>
          {agentFlow.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#060910',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: stage.color, fontWeight: 700 }}>
                      {stage.node}
                    </span>
                    <Icon size={16} color={stage.color} />
                  </div>
                  <h5 style={{ fontSize: '0.96rem', color: '#fff', marginBottom: '6px' }}>
                    {stage.title}
                  </h5>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-mid)', margin: 0 }}>
                    {stage.sub}
                  </p>
                </div>
                {idx < agentFlow.length - 1 && (
                  <div style={{
                    marginTop: '14px',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)'
                  }}>
                    $\to$ FORWARD PIPE
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
