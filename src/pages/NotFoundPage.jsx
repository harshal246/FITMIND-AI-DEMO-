import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Brain, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 240, 255, 0.1)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          color: 'var(--cyan-primary)'
        }}>
          <Compass size={32} />
        </div>

        <span className="pill-tag pill-tag-cyan" style={{ marginBottom: '14px' }}>
          404 · PAGE NOT FOUND
        </span>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '16px', color: '#fff' }}>
          Route Coordinates Not Found
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '32px' }}>
          The requested showcase route does not exist or has moved. Return to the main command center to explore the platform.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
          <Link to="/" className="btn-titanium-primary">
            <Home size={16} />
            <span>Return to Home</span>
          </Link>
          <Link to="/experience" className="btn-glass-secondary">
            <span>Visual Gallery</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
