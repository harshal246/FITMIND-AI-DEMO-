import React, { useState } from 'react';
import { Brain, CheckCircle2, Terminal, ChevronDown, ChevronUp } from 'lucide-react';

export default function InteractiveCoach() {
  const presets = [
    {
      id: 'knee_swap',
      label: 'Anatomical Patellar Deload',
      prompt: 'My right patellar tendon has mild friction during deep flexion. Can you swap heavy Barbell Back Squats for a joint-protective quad movement?',
      plannerThought: 'Constraint parsed: Patellar tendon mechanical shear. Strategy: High-stability quad movement minimizing anterior shear angle while maintaining hypertrophy tension.',
      toolsCalled: ['entity_resolver.query("quad knee-friendly")', 'workout_service.swap_movement()'],
      agentResponse: "I've adapted today's quad loading pattern to offload the patellar tendon while preserving maximum motor unit recruitment:",
      actionCard: {
        title: 'MOVEMENT SWAP APPROVED',
        from: 'Barbell Back Squat (4x8 @ 100kg)',
        to: 'Hack Squat / 45° Leg Press with High Foot Placement (4x10 @ 3-1-1-0 Tempo)',
        notes: 'Reduces anterior knee moment arm by ~38% while isolating the vastus medialis.'
      }
    },
    {
      id: 'time_crunch',
      label: '40-Min High-Density Push',
      prompt: 'I have 40 minutes to train today instead of 75 minutes. How should I compress my Push session?',
      plannerThought: 'Constraint: Time window compressed by 46%. Strategy: Antagonist pairing & condensed intra-set rest intervals with RIR 1-2.',
      toolsCalled: ['schedules.get_today()', 'volume_optimizer.condense(max_mins=40)'],
      agentResponse: "I've restructured your Push workout into agonist-antagonist pairings to achieve 92% of target mechanical work in 38 minutes:",
      actionCard: {
        title: 'VOLUME CONDENSATION APPLIED',
        from: '6 Standalone Movements (22 Sets · 75 Min)',
        to: '3 High-Density Supersets (14 High-Effort Sets · 38 Min)',
        notes: 'Incline Dumbbell Press paired with Lateral Raises; Pec Dec paired with Overhead Cable Extensions.'
      }
    },
    {
      id: 'macro_fix',
      label: 'Late-Night Macro Partition',
      prompt: 'I have 320 kcal left and need 36g more protein before sleep without causing digestive sleep disruption.',
      plannerThought: 'Nutritional constraint: 36g protein <= 320 kcal. Circadian factor: Pre-sleep gastric clearance prioritized.',
      toolsCalled: ['nutrition_vault.query(min_protein=35, max_kcal=320, slow_release=True)'],
      agentResponse: "Here is your optimal pre-sleep fuel target to hit your daily nitrogen balance without disrupting REM sleep:",
      actionCard: {
        title: 'NUTRITIONAL PRESCRIPTION',
        from: 'Remaining Budget: 36g Protein | 320 kcal',
        to: '220g Low-Fat Greek Yogurt + 1 Scoop Native Micellar Casein',
        notes: 'Delivers 38g protein, 4g carbs, 1g fat (177 kcal). High in slow-clearing micellar casein to sustain nocturnal muscle protein synthesis.'
      }
    }
  ];

  const [activePreset, setActivePreset] = useState(presets[0]);
  const [showTrace, setShowTrace] = useState(true);

  return (
    <div className="obsidian-card" style={{ padding: '36px' }}>
      {/* Header */}
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
            <span className="pill-tag">AI REASONING CORE</span>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              BIOMECHANICAL SWAP ENGINE
            </span>
          </div>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#fff' }}>
            Autonomous Conversational Athletic Agent
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', marginTop: '4px' }}>
            Live simulation of multi-agent reasoning flow (Planner → Resolver → Validator → Dispatcher).
          </p>
        </div>

        <button
          onClick={() => setShowTrace(!showTrace)}
          className="tech-pill"
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Terminal size={12} />
          <span>{showTrace ? 'Hide Trace' : 'Inspect Agent Trace'}</span>
          {showTrace ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>
      </div>

      {/* Preset Selector */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {presets.map((p) => {
          const isSelected = activePreset.id === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActivePreset(p)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                backgroundColor: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
                color: isSelected ? '#000000' : 'var(--text-mid)',
                border: isSelected ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.08)',
                fontWeight: isSelected ? 700 : 500,
                transition: 'all 0.2s ease'
              }}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Chat Terminal Box */}
      <div style={{
        backgroundColor: '#000000',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden'
      }}>
        {/* User Query */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          gap: '12px',
          alignItems: 'baseline'
        }}>
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
            ATHLETE:
          </span>
          <p style={{ color: '#fff', fontSize: '0.92rem', margin: 0, fontWeight: 500 }}>
            "{activePreset.prompt}"
          </p>
        </div>

        {/* Expandable Agent Reasoning Trace */}
        {showTrace && (
          <div style={{
            padding: '14px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', marginBottom: '6px' }}>
              <Terminal size={14} />
              <strong>MULTI-AGENT REASONING TRACE:</strong>
            </div>
            <div style={{ color: 'var(--text-mid)', marginBottom: '4px' }}>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>[PLANNER]</span> {activePreset.plannerThought}
            </div>
            <div style={{ color: 'var(--text-mid)' }}>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>[TOOLS DISPATCHED]</span> {activePreset.toolsCalled.join(' → ')}
            </div>
          </div>
        )}

        {/* Coach Answer */}
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
              display: 'inline-block'
            }} />
            <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: 600 }}>
              FITMIND AI COACH
            </span>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-high)', lineHeight: 1.6, margin: 0 }}>
            {activePreset.agentResponse}
          </p>

          {/* Action Card */}
          <div style={{
            marginTop: '16px',
            padding: '16px 20px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-mono)',
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              <CheckCircle2 size={14} />
              <span>{activePreset.actionCard.title}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.86rem' }}>
              <div style={{ color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                {activePreset.actionCard.from}
              </div>
              <div style={{ color: '#fff', fontWeight: 600 }}>
                → {activePreset.actionCard.to}
              </div>
            </div>

            <p style={{ fontSize: '0.78rem', color: 'var(--text-mid)', marginTop: '8px', margin: '8px 0 0' }}>
              {activePreset.actionCard.notes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
