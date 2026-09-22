import React, { useState, useRef } from 'react';
import { Play, Pause, RefreshCw, Sparkles, Layers, Maximize2, Shield, Film, Volume2, Clock } from 'lucide-react';

export default function VideoPlayerCard({
  slotNumber = 1,
  title = "System Architecture & AI Tour",
  subtitle = "Complete multi-agent reasoning, deterministic safety, and live telemetry walkthrough.",
  videoSrc = "/videos/product_tour.mp4",
  fallbackPoster = "/assets/01_dashboard.png",
  expectedFileName = "product_tour.mp4",
  duration = "03:45",
  tags = ["4K 60FPS", "STUDIO AUDIO", "AI REASONING"]
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [simulationActive, setSimulationActive] = useState(false);
  const [chapterIndex, setChapterIndex] = useState(0);
  const videoRef = useRef(null);

  const chapters = slotNumber === 1 ? [
    { title: '01. Central Command', desc: 'Real-time telemetry, readiness scoring, and daily volume allocation', img: '/assets/01_dashboard.png' },
    { title: '02. 24/7 AI Coach', desc: 'Multi-agent LangGraph execution with verified exercise and food swaps', img: '/assets/04_coach.png' },
    { title: '03. Nutrition Vault', desc: 'Dynamic caloric cycling and macronutrient partitioning', img: '/assets/05_nutrition.png' },
    { title: '04. Progression Curves', desc: '1RM calculated strength progression and volume trends', img: '/assets/06_progress.png' }
  ] : [
    { title: '01. Morning Check-In', desc: 'Calculates HRV and autonomic recovery status', img: '/assets/scene_03_readiness.jpg' },
    { title: '02. Workout Execution', desc: 'In-gym active session logging with audio rest timer', img: '/assets/03_workouts.png' },
    { title: '03. Exercise Catalog', desc: 'Biomechanical movement encyclopedia with form cues', img: '/assets/07_exercises.png' },
    { title: '04. Athletic Milestones', desc: 'Progressive overload achievements and milestone unlocks', img: '/assets/scene_06_close_outro.jpg' }
  ];

  const handlePlayToggle = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setVideoError(true);
          setSimulationActive(true);
        });
      }
    } else {
      setSimulationActive(!simulationActive);
      if (!simulationActive) {
        const timer = setInterval(() => {
          setChapterIndex((prev) => (prev + 1) % chapters.length);
        }, 2600);
        return () => clearInterval(timer);
      }
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Ambilight Glow */}
      <div className="ambilight-glow" />

      {/* Monitor Frame */}
      <div className="theater-monitor">
        {/* Top Monitor Bar */}
        <div style={{
          padding: '16px 22px',
          background: 'linear-gradient(180deg, rgba(16, 22, 34, 0.95) 0%, rgba(8, 12, 18, 0.95) 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          position: 'relative',
          zIndex: 3
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--cyan-primary)',
              boxShadow: '0 0 10px var(--cyan-primary)'
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#fff'
            }}>
              CINEMA SLOT 0{slotNumber} // {expectedFileName.toUpperCase()}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {tags.map((t, idx) => (
              <span key={idx} className="pill-tag" style={{ fontSize: '0.64rem', padding: '2px 8px' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 16:9 Viewport */}
        <div style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%',
          backgroundColor: '#020408',
          overflow: 'hidden'
        }}>
          <video
            ref={videoRef}
            src={videoSrc}
            poster={fallbackPoster}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: videoError ? 'none' : 'block'
            }}
            onError={() => setVideoError(true)}
            onEnded={() => setIsPlaying(false)}
          />

          {videoError && (
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${chapters[chapterIndex].img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'background-image 0.5s ease'
            }}>
              {/* Cinematic Vignette Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(2,4,8,0.85) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px'
              }}>
                {/* Top Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="pill-tag pill-tag-cyan" style={{ fontSize: '0.68rem' }}>
                    {simulationActive ? '● SIMULATING LIVE PRESENTATION' : 'RESERVED VIDEO SLOT'}
                  </span>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                    TARGET: <code>public/videos/{expectedFileName}</code>
                  </span>
                </div>

                {/* Center Playhead */}
                <div style={{ textAlign: 'center' }}>
                  <button
                    onClick={handlePlayToggle}
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      color: '#000000',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 45px rgba(255, 255, 255, 0.45)',
                      transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    aria-label="Play presentation"
                  >
                    {simulationActive ? <Pause size={26} /> : <Play size={26} style={{ marginLeft: '4px' }} />}
                  </button>
                  <div style={{ marginTop: '16px' }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>
                      {chapters[chapterIndex].title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', marginTop: '4px' }}>
                      {chapters[chapterIndex].desc}
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)'
                }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <span>RESOLUTION: <strong>4K UHD</strong></span>
                    <span>FRAME RATE: <strong>60.0 FPS</strong></span>
                  </div>
                  <span>EXPECTED RUNTIME: <strong>{duration}</strong></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Chapter Scrubber Bar */}
        <div style={{
          backgroundColor: '#04070e',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '12px 18px',
          display: 'grid',
          gridTemplateColumns: `repeat(${chapters.length}, 1fr)`,
          gap: '8px'
        }}>
          {chapters.map((chap, idx) => (
            <button
              key={idx}
              onClick={() => setChapterIndex(idx)}
              style={{
                padding: '8px 10px',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: chapterIndex === idx ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                border: chapterIndex === idx ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
                textAlign: 'left'
              }}
            >
              <div style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: chapterIndex === idx ? 'var(--cyan-primary)' : 'var(--text-dim)',
                fontWeight: 700
              }}>
                {chap.title.split('.')[0]}
              </div>
              <div style={{
                fontSize: '0.76rem',
                color: chapterIndex === idx ? '#fff' : 'var(--text-mid)',
                fontWeight: chapterIndex === idx ? 600 : 400,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {chap.title.split('.')[1]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
