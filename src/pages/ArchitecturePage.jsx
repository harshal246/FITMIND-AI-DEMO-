import React, { useState } from 'react';
import { Cpu, Shield, Database, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ArchitecturePage() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      step: 1,
      title: 'Athlete Input Ingestion',
      badge: 'GATEWAY',
      accent: 'var(--accent-cyan)',
      desc: 'Ingests voice transcripts, structured check-ins, or raw natural language through the FastAPI REST Gateway with SlowAPI rate-limiting and anti-tamper headers.',
      invariant: 'Strict rate limits per user ID; enforces Content-Security-Policy & origin verification.'
    },
    {
      step: 2,
      title: 'Deterministic Safety Guardrail',
      badge: 'SAFETY FILTER',
      accent: 'var(--accent-rose)',
      desc: 'Mathematically screens out dangerous movements, extreme caloric deficits, and injury contraindications BEFORE any LLM inference occurs.',
      invariant: 'Deterministic heuristic logic completely isolated from prompt-injection vulnerabilities.'
    },
    {
      step: 3,
      title: 'LLM Task Planner (LangGraph)',
      badge: 'REASONING CORE',
      accent: 'var(--accent-violet)',
      desc: 'Deconstructs queries into a Directed Acyclic Graph (DAG) of discrete action nodes (e.g. exercise substitution, macro re-balancing, rest rescheduling).',
      invariant: 'Structured JSON schemas with calibrated confidence threshold gating (>= 0.85).'
    },
    {
      step: 4,
      title: 'Entity Resolver (pgvector & Catalog)',
      badge: 'DATA INTEGRITY',
      accent: 'var(--accent-amber)',
      desc: 'Resolves requested exercises and foods strictly against the 1,200+ curated catalog using PostgreSQL pgvector cosine similarity.',
      invariant: 'Zero hallucination invariant: strictly prohibits creating phantom catalog records.'
    },
    {
      step: 5,
      title: 'Deterministic Pydantic Validator',
      badge: 'INVARIANT CHECK',
      accent: 'var(--accent-emerald)',
      desc: 'Rigid Pydantic v2 schemas assert all physiological metrics, RPE bounds, and macronutrient totals conform to mathematical invariants.',
      invariant: 'Clamps unphysical values; rejects defaulted or fabricated metrics.'
    },
    {
      step: 6,
      title: 'Transactional Dispatcher',
      badge: 'ACID COMMIT',
      accent: 'var(--accent-cyan)',
      desc: 'Commits state changes within an explicit SQLAlchemy Async session guarded by Redis distributed locks for idempotency.',
      invariant: 'Atomic rollback on failure; eliminates double-execution chat and workout races.'
    }
  ];

  const tech = [
    { name: 'FastAPI + Python 3.12', category: 'BACKEND CORE', role: 'High-concurrency async REST API framework with native OpenAPI schema contracts and background task drains.' },
    { name: 'PostgreSQL 16 + pgvector', category: 'DATA & EMBEDDINGS', role: 'ACID relational durability, indexed foreign keys, and vector similarity indexing for athletic catalogs.' },
    { name: 'Redis 7.2 Cache & Locks', category: 'SESSION & CONCURRENCY', role: 'Sub-millisecond token blacklist, distributed atomic locks, session token rotation, and rate-limiting storage.' },
    { name: 'LangChain & LangGraph', category: 'AI AGENT GRAPH', role: 'Stateful multi-agent DAG coordinator managing Planner, Tool Dispatchers, and LangSmith cloud tracing.' },
    { name: 'React 19 + Vite', category: 'CLIENT ARCHITECTURE', role: 'Single-page client architecture with obsidian glassmorphism, responsive telemetry widgets, and sub-second load times.' },
    { name: 'Twilio WhatsApp & SMTP', category: 'BACKGROUND CRON', role: 'Automated background cron triggers for morning readiness alerts, meal logging, and milestone celebrations.' }
  ];

  return (
    <div style={{ paddingBottom: '90px' }}>
      <section style={{ padding: '70px 0 50px', textAlign: 'center' }}>
        <div className="container">
          <span className="tech-pill tech-pill-violet" style={{ marginBottom: '14px' }}>
            TECHNICAL ARCHITECTURE & SPECIFICATIONS
          </span>
          <h1 className="section-headline">Multi-Agent Engine & Core Topology</h1>
          <p className="section-subhead">
            The multi-agent LangGraph pipeline, deterministic safety guardrails, high-concurrency database topology, and enterprise security standards.
          </p>
        </div>
      </section>

      {/* PIPELINE STEPPER */}
      <section style={{ padding: '0 0 70px' }}>
        <div className="container">
          <div className="obsidian-card" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="tech-pill tech-pill-violet">ORCHESTRATION PIPELINE</span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#fff', marginTop: '6px' }}>
                  Interactive Multi-Agent Reasoning Graph
                </h3>
              </div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                COORDINATOR: <strong>LangGraph Async Agent</strong>
              </span>
            </div>

            {/* Stepper buttons */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '8px',
              marginBottom: '28px'
            }}>
              {steps.map((s, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      padding: '12px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      border: isSelected ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.05)',
                      color: isSelected ? '#fff' : 'var(--text-mid)',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: isSelected ? 'var(--accent-cyan)' : 'var(--text-dim)' }}>
                      NODE 0{s.step}
                    </div>
                    <div style={{ fontSize: '0.82rem', fontWeight: isSelected ? 700 : 500, marginTop: '2px' }}>
                      {s.title.split(' ')[0]} {s.title.split(' ')[1]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Details */}
            <div style={{
              backgroundColor: '#05070a',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '28px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="tech-pill tech-pill-cyan">{steps[activeStep].badge}</span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  STAGE {steps[activeStep].step} OF 6
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '10px' }}>
                {steps[activeStep].title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-high)', lineHeight: 1.6, marginBottom: '18px' }}>
                {steps[activeStep].desc}
              </p>

              <div style={{
                padding: '14px 18px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <strong style={{ color: 'var(--accent-emerald)' }}>RUNTIME INVARIANT: </strong>
                <span style={{ color: 'var(--text-mid)' }}>{steps[activeStep].invariant}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK CARDS */}
      <section style={{ padding: '0 0 70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tech-pill" style={{ marginBottom: '12px' }}>
              PRODUCTION INFRASTRUCTURE
            </span>
            <h2 className="section-headline">Full-Stack Technology Ecosystem</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px'
          }}>
            {tech.map((t, idx) => (
              <div key={idx} className="obsidian-card" style={{ padding: '24px' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '6px' }}>
                  {t.category}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '8px' }}>
                  {t.name}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.5 }}>
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
