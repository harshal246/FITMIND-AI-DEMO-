import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, Shield, Database, Activity, Zap, 
  CheckCircle2, Play, Pause, RefreshCw, 
  Dumbbell, Apple, HeartPulse, Lock, ArrowDown
} from 'lucide-react';

export default function MultiAgentGraphTree() {
  const containerRef = useRef(null);
  const [mode, setMode] = useState('scroll'); // 'scroll' | 'auto'
  const [selectedNodeId, setSelectedNodeId] = useState('planner');
  const [activeLevel, setActiveLevel] = useState(2);
  const [scrollPct, setScrollPct] = useState(38);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isManualSelection, setIsManualSelection] = useState(false);
  const isManualRef = useRef(false);
  isManualRef.current = isManualSelection;

  const nodes = [
    {
      id: 'gateway',
      title: 'Athlete Check-In & Request',
      category: 'USER INPUT',
      badge: 'STEP 1',
      icon: Activity,
      latency: '14ms',
      level: 0,
      description: 'Receives your voice check-in, workout question, or workout log securely and prepares it for your coaches.',
      inputs: ['Voice Check-In or Question', 'Athlete Profile & Account Info', 'Your Local Timezone'],
      outputs: ['Cleaned User Request', 'Confirmed Athlete Session'],
      invariants: ['Spam protection (30 requests/min max)', 'End-to-end encrypted privacy guarantee']
    },
    {
      id: 'safety_guardrail',
      title: 'Safety & Injury Protection',
      category: 'SAFETY CHECK',
      badge: 'STEP 2',
      icon: Shield,
      latency: '8ms',
      level: 1,
      description: 'Instantly filters out dangerous exercise weights, extreme diets, and protects your injuries before planning begins.',
      inputs: ['Cleaned User Request', 'Injury & Pain Profile (e.g. knee or shoulder pain)'],
      outputs: ['Safety-Approved Request', 'Allowed Exercise & Joint Limits'],
      invariants: ['Zero harmful suggestions allowed', 'Injury safety rules can never be bypassed']
    },
    {
      id: 'planner',
      title: 'AI Brain & Master Planner',
      category: 'MASTER PLANNER',
      badge: 'STEP 3',
      icon: Brain,
      latency: '72ms',
      level: 2,
      description: 'Understands your goal, reviews past training, and coordinates specialist AI coaches to create your daily plan.',
      inputs: ['Safety-Approved Request', 'Past 30 Days of Workout History'],
      outputs: ['Action Plan for Specialist Coaches', 'Step-by-Step Task Schedule'],
      invariants: ['Requires 85%+ plan confidence', 'Safe standard routine if request is unclear']
    },
    // Branching Sub-Agents (Level 3)
    {
      id: 'agent_workout',
      title: 'Workout & Strength Coach',
      category: 'SPECIALIST COACH',
      badge: 'COACH A',
      icon: Dumbbell,
      latency: '45ms',
      level: 3,
      branch: true,
      description: 'Calculates the best exercises, sets, reps, and weights to help you safely build strength every week.',
      inputs: ['Target Muscles (e.g. Chest & Triceps)', 'Past Lifting Weights & Effort Levels'],
      outputs: ['Custom Sets & Reps Routine', 'Recommended Weight (+2.5 kg or +1 rep)'],
      invariants: ['Proven strength-building formulas', 'Prevents dangerous muscle over-exhaustion']
    },
    {
      id: 'agent_nutrition',
      title: 'Meals & Nutrition Coach',
      category: 'SPECIALIST COACH',
      badge: 'COACH B',
      icon: Apple,
      latency: '38ms',
      level: 3,
      branch: true,
      description: 'Adjusts your daily calories, protein, and easy-to-cook meal suggestions to match how hard you train.',
      inputs: ['Daily Calorie Target', 'Today’s Energy & Readiness Score'],
      outputs: ['Target Calories, Protein & Carbs', 'Healthy Meal & Snack Suggestions'],
      invariants: ['Scientifically validated calorie formulas', 'Guarantees healthy protein minimum']
    },
    {
      id: 'agent_recovery',
      title: 'Sleep & Recovery Coach',
      category: 'SPECIALIST COACH',
      badge: 'COACH C',
      icon: HeartPulse,
      latency: '28ms',
      level: 3,
      branch: true,
      description: 'Looks at your sleep hours, heart rate, and muscle soreness to score your daily energy from 0% to 100%.',
      inputs: ['Hours & Quality of Sleep', 'Heart Rate & Muscle Soreness (1-10)'],
      outputs: ['Daily Readiness Score (0%–100%)', 'Workout Intensity Recommendation'],
      invariants: ['Smart body energy algorithm', 'Recommends rest if readiness is under 50%']
    },
    {
      id: 'agent_resolver',
      title: 'Exercise & Movement Library',
      category: 'SPECIALIST COACH',
      badge: 'COACH D',
      icon: Database,
      latency: '22ms',
      level: 3,
      branch: true,
      description: 'Finds perfect exercise alternatives from 1,200+ verified movements if gym machines are busy or joints ache.',
      inputs: ['Exercise Name or Equipment Swap Request', 'Joint Health & Available Gym Gear'],
      outputs: ['Exact Verified Exercise Match', 'Form Tips & Video Instructions'],
      invariants: ['Zero fake exercises: 100% verified coach movements', 'Exact equipment compatibility']
    },
    // Convergence (Level 4)
    {
      id: 'validator',
      title: 'Quality & Logic Verification',
      category: 'FINAL AUDIT',
      badge: 'STEP 4',
      icon: Lock,
      latency: '11ms',
      level: 4,
      description: 'Reviews the complete workout and meal plan together to ensure it is 100% realistic, safe, and balanced.',
      inputs: ['Proposals from all Specialist Coaches'],
      outputs: ['Fully Checked & Approved Plan', 'Quality & Safety Confirmation'],
      invariants: ['Verifies workout fits human limits', 'Resolves any conflicting coach suggestions']
    },
    // Commit (Level 5)
    {
      id: 'dispatcher',
      title: 'Save & Send to Your Phone',
      category: 'INSTANT SYNC',
      badge: 'STEP 5',
      icon: Zap,
      latency: '18ms',
      level: 5,
      description: 'Saves your approved plan instantly and updates your dashboard and mobile app with zero delay.',
      inputs: ['Approved Workout & Meal Plan', 'Active User Session'],
      outputs: ['Saved to Account Database', 'Instant Phone & Web App Sync', 'Ready for Today’s Workout'],
      invariants: ['Instant sync with zero data loss', 'Guarantees workouts are never duplicated']
    }
  ];

  const branchNodes = nodes.filter((n) => n.branch);

  // Map level to representative node
  const levelToNodeMap = {
    0: 'gateway',
    1: 'safety_guardrail',
    2: 'planner',
    3: 'agent_workout',
    4: 'validator',
    5: 'dispatcher'
  };

  // User manually selects a node to inspect its details below
  const handleSelectNode = (nodeId, level) => {
    setSelectedNodeId(nodeId);
    if (level !== undefined) {
      setActiveLevel(level);
    }
    setIsManualSelection(true);
  };

  // 1. SCROLL TRACKING: Listen to viewport scroll relative to the tree container
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;

          // Check if tree is within active viewport window
          if (rect.bottom > 0 && rect.top < windowHeight) {
            // Calculate progress (0% when top enters viewport, 100% when bottom exits or is reached)
            const visibleDistance = windowHeight - rect.top;
            const totalDistance = rect.height + windowHeight * 0.4;
            const rawProgress = Math.max(0, Math.min(1, visibleDistance / totalDistance));
            const pct = Math.round(rawProgress * 100);
            setScrollPct(pct);

            if (mode === 'scroll') {
              let lvl = 0;
              if (rawProgress < 0.20) lvl = 0;
              else if (rawProgress < 0.38) lvl = 1;
              else if (rawProgress < 0.56) lvl = 2;
              else if (rawProgress < 0.74) lvl = 3;
              else if (rawProgress < 0.88) lvl = 4;
              else lvl = 5;

              // If the user selected a node to inspect below, do NOT overwrite it when scrolling
              if (!isManualRef.current) {
                setActiveLevel(lvl);
                setSelectedNodeId(levelToNodeMap[lvl]);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  // 2. AUTOMATIC TREE PROGRESSION (Auto-Cycle Mode)
  useEffect(() => {
    if (mode !== 'auto' || !isAutoPlaying) return;

    const interval = setInterval(() => {
      if (!isManualRef.current) {
        setActiveLevel((prevLevel) => {
          const nextLevel = (prevLevel + 1) % 6;
          setSelectedNodeId(levelToNodeMap[nextLevel]);
          return nextLevel;
        });
      }
    }, 1400);

    return () => clearInterval(interval);
  }, [mode, isAutoPlaying]);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[2];

  return (
    <div 
      ref={containerRef}
      className="obsidian-card" 
      style={{ padding: '36px', background: 'rgba(12, 12, 15, 0.75)' }}
    >
      {/* Top Header & Mode Switcher */}
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
            <span className="pill-tag">HOW FITMIND AI THINKS</span>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              {mode === 'scroll' ? 'FOLLOWS YOUR SCROLL' : 'AUTOMATIC WALKTHROUGH'}
            </span>
          </div>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff' }}>
            Multi-Agent Reasoning & Execution Tree
          </h3>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', marginTop: '4px' }}>
            Scroll down the page or click any step to see how your workout, safety checks, and nutrition are created.
          </p>
        </div>

        {/* Mode & Auto-Play Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Mode Switcher */}
          <div style={{
            display: 'inline-flex',
            padding: '3px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <button
              onClick={() => {
                setMode('scroll');
                setIsManualSelection(false);
                setSelectedNodeId(levelToNodeMap[activeLevel]);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                backgroundColor: mode === 'scroll' ? '#ffffff' : 'transparent',
                color: mode === 'scroll' ? '#000000' : 'var(--text-mid)',
                transition: 'all 0.2s ease'
              }}
            >
              <ArrowDown size={13} />
              <span>Scroll-Driven</span>
            </button>
            <button
              onClick={() => {
                setMode('auto');
                setIsManualSelection(false);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                backgroundColor: mode === 'auto' ? '#ffffff' : 'transparent',
                color: mode === 'auto' ? '#000000' : 'var(--text-mid)',
                transition: 'all 0.2s ease'
              }}
            >
              <RefreshCw size={13} className={mode === 'auto' && isAutoPlaying ? 'spin-animation' : ''} />
              <span>Automatic Loop</span>
            </button>
          </div>

          {mode === 'auto' && (
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="btn-ghost-dark"
              style={{ padding: '6px 12px', fontSize: '0.78rem' }}
            >
              {isAutoPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isAutoPlaying ? 'Pause' : 'Resume'}</span>
            </button>
          )}
        </div>
      </div>

      {/* DYNAMIC PROGRESS BAR (Scroll or Auto progress indicator) */}
      <div style={{
        marginBottom: '24px',
        padding: '14px 18px',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.74rem',
          fontFamily: 'var(--font-mono)',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <span style={{ color: 'var(--text-dim)' }}>
            {mode === 'scroll' 
              ? `SCROLL PROGRESS · ${scrollPct}% DEPTH` 
              : 'AUTOMATED PIPELINE WALKTHROUGH'}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isManualSelection && (
              <button
                onClick={() => {
                  setIsManualSelection(false);
                  setSelectedNodeId(levelToNodeMap[activeLevel]);
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '3px 9px',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s ease'
                }}
                title="Click to resume syncing with your scroll position"
              >
                <span>PINNED · RESUME SCROLL SYNC ✕</span>
              </button>
            )}
            <span style={{ color: '#ffffff', fontWeight: 700 }}>
              INSPECTING: {selectedNode.badge} · {selectedNode.title.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Multi-segment step bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px' }}>
          {[0, 1, 2, 3, 4, 5].map((lvl) => {
            const isCompleted = lvl <= activeLevel;
            const isCurrent = lvl === activeLevel;
            const nodeForLvl = nodes.find(n => n.id === levelToNodeMap[lvl]);
            return (
              <div
                key={lvl}
                onClick={() => {
                  handleSelectNode(levelToNodeMap[lvl], lvl);
                }}
                style={{
                  height: '6px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isCurrent ? '#ffffff' : isCompleted ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isCurrent ? '0 0 10px rgba(255, 255, 255, 0.8)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                title={nodeForLvl ? `${nodeForLvl.badge}: ${nodeForLvl.title}` : `Step ${lvl + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* GRAPH TREE VISUALIZATION CANVAS */}
      <div style={{
        backgroundColor: '#000000',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '36px 24px',
        position: 'relative',
        overflowX: 'auto',
        marginBottom: '28px'
      }}>
        {/* LEVEL 0: INGRESS */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <GraphNodeCard 
            node={nodes[0]} 
            isSelected={selectedNodeId === nodes[0].id}
            isLevelActive={activeLevel >= 0}
            isCurrentStep={activeLevel === 0}
            onClick={() => handleSelectNode(nodes[0].id, 0)} 
          />
        </div>

        {/* Tree Connector Line */}
        <ConnectorPipe active={activeLevel >= 1} isCurrent={activeLevel === 0} />

        {/* LEVEL 1: SAFETY GUARDRAIL */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <GraphNodeCard 
            node={nodes[1]} 
            isSelected={selectedNodeId === nodes[1].id}
            isLevelActive={activeLevel >= 1}
            isCurrentStep={activeLevel === 1}
            onClick={() => handleSelectNode(nodes[1].id, 1)} 
          />
        </div>

        {/* Tree Connector Line */}
        <ConnectorPipe active={activeLevel >= 2} isCurrent={activeLevel === 1} />

        {/* LEVEL 2: MULTI-AGENT PLANNER (CENTRAL HUB) */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <GraphNodeCard 
            node={nodes[2]} 
            isSelected={selectedNodeId === nodes[2].id}
            isLevelActive={activeLevel >= 2}
            isCurrentStep={activeLevel === 2}
            onClick={() => handleSelectNode(nodes[2].id, 2)}
            isCentralHub
          />
        </div>

        {/* Tree Branch Splitter Graphic */}
        <BranchTreeSplitter active={activeLevel >= 3} isCurrent={activeLevel === 2} />

        {/* LEVEL 3: PARALLEL SPECIALIZED SUB-AGENTS (TREE BRANCHES) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          margin: '20px 0'
        }}>
          {branchNodes.map((bNode) => (
            <GraphNodeCard
              key={bNode.id}
              node={bNode}
              isSelected={selectedNodeId === bNode.id}
              isLevelActive={activeLevel >= 3}
              isCurrentStep={activeLevel === 3}
              onClick={() => handleSelectNode(bNode.id, 3)}
            />
          ))}
        </div>

        {/* Tree Branch Converger Graphic */}
        <BranchTreeConverger active={activeLevel >= 4} isCurrent={activeLevel === 3} />

        {/* LEVEL 4: MATHEMATICAL INVARIANT VALIDATOR */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <GraphNodeCard 
            node={nodes[7]} 
            isSelected={selectedNodeId === nodes[7].id}
            isLevelActive={activeLevel >= 4}
            isCurrentStep={activeLevel === 4}
            onClick={() => handleSelectNode(nodes[7].id, 4)} 
          />
        </div>

        {/* Tree Connector Line */}
        <ConnectorPipe active={activeLevel >= 5} isCurrent={activeLevel === 4} />

        {/* LEVEL 5: STATE SYNCHRONIZATION DISPATCHER */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <GraphNodeCard 
            node={nodes[8]} 
            isSelected={selectedNodeId === nodes[8].id}
            isLevelActive={activeLevel >= 5}
            isCurrentStep={activeLevel === 5}
            onClick={() => handleSelectNode(nodes[8].id, 5)} 
          />
        </div>
      </div>

      {/* SELECTED NODE DEEP-DIVE INSPECTION PANEL */}
      <div style={{
        backgroundColor: '#000000',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        padding: '28px',
        boxShadow: '0 15px 40px -10px rgba(0, 0, 0, 0.9)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '14px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {React.createElement(selectedNode.icon, { size: 22, strokeWidth: 2.2 })}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge-pill" style={{ fontSize: '0.66rem' }}>
                  {selectedNode.badge} · {selectedNode.category}
                </span>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  RESPONSE SPEED: <strong style={{ color: '#ffffff' }}>{selectedNode.latency}</strong>
                </span>
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>
                {selectedNode.title}
              </h4>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {isManualSelection && (
              <button
                onClick={() => {
                  setIsManualSelection(false);
                  setSelectedNodeId(levelToNodeMap[activeLevel]);
                }}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Click to resume syncing with your scroll position"
              >
                <RefreshCw size={11} />
                <span>FOLLOW SCROLL</span>
              </button>
            )}
            <div style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-mono)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{ 
                width: '6px', 
                height: '6px', 
                borderRadius: '50%', 
                backgroundColor: '#ffffff', 
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.9)' 
              }} />
              <span>ACTIVE: {selectedNode.badge} {isManualSelection ? '(PINNED)' : ''}</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '22px' }}>
          {selectedNode.description}
        </p>

        {/* 3-Column Specifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          {/* Inputs */}
          <div style={{
            padding: '16px 18px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.07)'
          }}>
            <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '10px' }}>
              WHAT GOES IN (INPUTS)
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedNode.inputs.map((item, i) => (
                <li key={i} style={{ fontSize: '0.82rem', color: 'var(--text-mid)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outputs */}
          <div style={{
            padding: '16px 18px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.07)'
          }}>
            <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '10px' }}>
              WHAT COMES OUT (RESULTS)
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedNode.outputs.map((item, i) => (
                <li key={i} style={{ fontSize: '0.82rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
                  <CheckCircle2 size={13} style={{ color: '#ffffff' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Invariants */}
          <div style={{
            padding: '16px 18px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.07)'
          }}>
            <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '10px' }}>
              SAFETY RULES & GUARANTEES
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedNode.invariants.map((item, i) => (
                <li key={i} style={{ fontSize: '0.82rem', color: 'var(--text-mid)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Shield size={13} style={{ color: '#ffffff', marginTop: '2px', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponent: Interactive Graph Node Card
function GraphNodeCard({ node, isSelected, isLevelActive, isCurrentStep, onClick, isCentralHub }) {
  const Icon = node.icon;
  return (
    <div
      onClick={onClick}
      style={{
        padding: isCentralHub ? '18px 24px' : '14px 18px',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: isSelected 
          ? '#ffffff' 
          : isCurrentStep 
          ? 'rgba(255, 255, 255, 0.18)' 
          : isLevelActive 
          ? 'rgba(255, 255, 255, 0.07)' 
          : 'rgba(255, 255, 255, 0.02)',
        border: isSelected 
          ? '1px solid #ffffff' 
          : isCurrentStep 
          ? '1px solid rgba(255, 255, 255, 0.6)' 
          : isLevelActive 
          ? '1px solid rgba(255, 255, 255, 0.2)' 
          : '1px solid rgba(255, 255, 255, 0.06)',
        color: isSelected ? '#000000' : '#ffffff',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        boxShadow: isSelected 
          ? '0 6px 30px rgba(255, 255, 255, 0.35)' 
          : isCurrentStep 
          ? '0 0 25px rgba(255, 255, 255, 0.3)' 
          : 'none',
        transform: isSelected || isCurrentStep ? 'scale(1.03)' : 'scale(1)',
        maxWidth: isCentralHub ? '440px' : '360px',
        width: '100%',
        position: 'relative'
      }}
    >
      <div style={{
        width: isCentralHub ? '40px' : '34px',
        height: isCentralHub ? '40px' : '34px',
        borderRadius: '8px',
        backgroundColor: isSelected ? '#000000' : isCurrentStep ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
        color: isSelected ? '#ffffff' : isCurrentStep ? '#000000' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.2s ease'
      }}>
        <Icon size={isCentralHub ? 20 : 16} strokeWidth={2.2} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '2px'
        }}>
          <span style={{
            fontSize: '0.64rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.06em',
            opacity: isSelected ? 0.75 : 0.6
          }}>
            {node.badge}
          </span>
          <span style={{
            fontSize: '0.68rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            opacity: isSelected ? 0.9 : 0.75
          }}>
            {node.latency}
          </span>
        </div>
        <div style={{
          fontSize: isCentralHub ? '0.94rem' : '0.84rem',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {node.title}
        </div>
      </div>
    </div>
  );
}

// Subcomponent: Vertical Connector Pipe with Signal Beam
function ConnectorPipe({ active, isCurrent }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '32px', position: 'relative' }}>
      <div style={{
        width: '2px',
        height: '100%',
        backgroundColor: active ? '#ffffff' : 'rgba(255, 255, 255, 0.12)',
        boxShadow: active || isCurrent ? '0 0 10px rgba(255, 255, 255, 0.8)' : 'none',
        transition: 'all 0.3s ease'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-3px',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: active ? '#ffffff' : 'rgba(255, 255, 255, 0.25)',
        boxShadow: active ? '0 0 6px #ffffff' : 'none',
        transition: 'all 0.3s ease'
      }} />
    </div>
  );
}

// Subcomponent: Splitter Branch Lines (Planner to 4 Sub-Agents)
function BranchTreeSplitter({ active, isCurrent }) {
  return (
    <div style={{ width: '100%', height: '36px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <svg width="100%" height="36" viewBox="0 0 800 36" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
        <path
          d="M 400 0 L 400 18 M 100 18 L 700 18 M 100 18 L 100 36 M 300 18 L 300 36 M 500 18 L 500 36 M 700 18 L 700 36"
          fill="none"
          stroke={active || isCurrent ? '#ffffff' : 'rgba(255, 255, 255, 0.15)'}
          strokeWidth="1.8"
          style={{ 
            transition: 'stroke 0.3s ease',
            filter: active ? 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))' : 'none'
          }}
        />
      </svg>
    </div>
  );
}

// Subcomponent: Converger Branch Lines (4 Sub-Agents to Validator)
function BranchTreeConverger({ active, isCurrent }) {
  return (
    <div style={{ width: '100%', height: '36px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <svg width="100%" height="36" viewBox="0 0 800 36" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
        <path
          d="M 100 0 L 100 18 M 300 0 L 300 18 M 500 0 L 500 18 M 700 0 L 700 18 M 100 18 L 700 18 M 400 18 L 400 36"
          fill="none"
          stroke={active || isCurrent ? '#ffffff' : 'rgba(255, 255, 255, 0.15)'}
          strokeWidth="1.8"
          style={{ 
            transition: 'stroke 0.3s ease',
            filter: active ? 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))' : 'none'
          }}
        />
      </svg>
    </div>
  );
}
