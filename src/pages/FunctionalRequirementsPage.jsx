import React, { useState } from 'react';
import { 
  Play, Sliders, Cpu, Compass, ArrowRight, CheckCircle2, 
  Layers, Shield, Activity, Flame, HeartPulse, Sparkles, ExternalLink
} from 'lucide-react';

import VideoPlayerCard from '../components/VideoPlayerCard';
import InteractiveReadiness from '../components/InteractiveReadiness';
import InteractiveCoach from '../components/InteractiveCoach';
import FunctionalityCardsDeck from '../components/FunctionalityCardsDeck';

export default function FunctionalRequirementsPage({ setActivePage }) {
  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* HERO SECTION WITH 3D COCKPIT MOCKUP */}
      <section style={{ padding: '75px 0 60px', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          {/* Micro-chip Header */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
            <span className="pill-tag pill-tag-cyan">⚡ THE AUTONOMOUS ATHLETIC OPERATING SYSTEM</span>
            <span className="pill-tag">V2.5 AUDITED</span>
          </div>

          <h1 className="hero-headline" style={{ maxWidth: '1050px', margin: '0 auto 24px' }}>
            INTELLIGENCE FOR
            <br />
            <span className="hero-gradient-text">
              PEAK HUMAN PERFORMANCE.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-mid)',
            maxWidth: '780px',
            margin: '0 auto 36px',
            lineHeight: 1.6
          }}>
            A unified mind-body athletic platform engineered with deterministic physiological guardrails, 
            sub-200ms multi-agent reasoning, and zero data fabrication.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a href="#cinema-hub" className="btn-titanium-primary">
              <Play size={16} />
              <span>Watch Cinema Presentations</span>
            </a>
            <a href="#functional-grid" className="btn-glass-secondary">
              <Sliders size={16} />
              <span>Explore 11 Functional Modules</span>
            </a>
          </div>

          {/* 3D HERO PERSPECTIVE MOCKUP WITH FLOATING BIOMETRIC BADGES */}
          <div className="hero-mockup-perspective" style={{ maxWidth: '1120px', margin: '0 auto' }}>
            {/* Floating Badge 1 (Top Left) */}
            <div className="floating-biometric-pill" style={{ top: '-15px', left: '20px', animationDelay: '0s' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--emerald-primary)', boxShadow: '0 0 10px var(--emerald-primary)' }} />
              <span>94% Morning Readiness · Prime State</span>
            </div>

            {/* Floating Badge 2 (Top Right) */}
            <div className="floating-biometric-pill" style={{ top: '-15px', right: '20px', animationDelay: '1.2s' }}>
              <Sparkles size={16} color="var(--cyan-primary)" />
              <span>Auto-Overload: +2.5kg Bench Target</span>
            </div>

            {/* Floating Badge 3 (Bottom Left) */}
            <div className="floating-biometric-pill" style={{ bottom: '25px', left: '30px', animationDelay: '2.4s' }}>
              <Activity size={16} color="var(--violet-primary)" />
              <span>185g / 190g Daily Nitrogen Balance</span>
            </div>

            {/* Central High-Resolution Screen Frame */}
            <div className="hero-mockup-screen">
              <img
                src="/assets/01_dashboard.png"
                alt="FitMind AI Central Command Dashboard"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DUAL CINEMA THEATER HUB */}
      <section id="cinema-hub" style={{ padding: '60px 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="pill-tag pill-tag-violet" style={{ marginBottom: '12px' }}>
              OFFICIAL CINEMA PRESENTATION
            </span>
            <h2 className="section-hero-title">Dual Cinema Theater Showcase</h2>
            <p className="section-hero-desc">
              Widescreen display monitors pre-configured to host the platform tour and in-gym workflow demo videos.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '32px'
          }}>
            <VideoPlayerCard
              slotNumber={1}
              title="System Architecture & Multi-Agent Tour"
              subtitle="Full walkthrough of autonomous onboarding, AI coach reasoning, and central command telemetry."
              videoSrc="/videos/product_tour.mp4"
              expectedFileName="product_tour.mp4"
              fallbackPoster="/assets/01_dashboard.png"
              duration="03:45"
              tags={["4K 60FPS", "AI ARCHITECTURE", "SYSTEM TOUR"]}
            />

            <VideoPlayerCard
              slotNumber={2}
              title="Athlete In-Gym Workflow Demo"
              subtitle="Live demonstration of morning readiness check-in, set-by-set workout execution, and recovery tracking."
              videoSrc="/videos/athlete_workflow.mp4"
              expectedFileName="athlete_workflow.mp4"
              fallbackPoster="/assets/03_workouts.png"
              duration="02:30"
              tags={["4K 60FPS", "ATHLETE WORKFLOW", "REST TIMERS"]}
            />
          </div>
        </div>
      </section>

      {/* INTERACTIVE BIOMETRIC SIMULATORS */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="pill-tag pill-tag-emerald" style={{ marginBottom: '12px' }}>
              LIVE BIOMETRIC & AI SIMULATION
            </span>
            <h2 className="section-hero-title">Interactive Engine Playground</h2>
            <p className="section-hero-desc">
              Experience the mathematical models and multi-agent systems powering FitMind AI directly.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <InteractiveReadiness />
            <InteractiveCoach />
          </div>
        </div>
      </section>

      {/* 11 FUNCTIONAL REQUIREMENTS SHOWCASE DECK (ONE-BY-ONE & GRID) */}
      <section id="functional-grid" style={{ padding: '50px 0 80px' }}>
        <div className="container">
          <FunctionalityCardsDeck />
        </div>
      </section>
    </div>
  );
}
