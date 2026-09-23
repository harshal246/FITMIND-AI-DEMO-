import React from 'react';
import { Link } from 'react-router-dom';
import { Sliders, Cpu, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import FunctionalityCardsDeck from '../components/FunctionalityCardsDeck';

export default function ModulesPage() {
  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* Header Section */}
      <section style={{ padding: '75px 0 50px', textAlign: 'center' }}>
        <div className="container">
          <span className="pill-tag pill-tag-cyan" style={{ marginBottom: '14px' }}>
            ENTERPRISE FUNCTIONAL SPECIFICATIONS
          </span>
          <h1 className="section-hero-title">11 Core Functional Modules</h1>
          <p className="section-hero-desc" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Deep dive into each audited module of FitMind AI — featuring live UI snapshots, deterministic logic guardrails, and backend endpoints.
          </p>
        </div>
      </section>

      {/* 11 Functional Requirements Deck */}
      <section style={{ padding: '0 0 40px' }}>
        <div className="container">
          <FunctionalityCardsDeck />
        </div>
      </section>
    </div>
  );
}
