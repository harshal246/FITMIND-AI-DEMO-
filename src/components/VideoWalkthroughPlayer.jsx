import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';

export default function VideoWalkthroughPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(current);
    setProgress((current / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '00:00';
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  return (
    <div className="obsidian-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.14)' }}>
      {/* Video Window Top Bar */}
      <div style={{
        height: '44px',
        backgroundColor: 'rgba(15, 15, 18, 0.98)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 18px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.74rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.22)' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
          <span style={{ marginLeft: '12px', color: '#ffffff', fontWeight: 600 }}>
            FitMind AI · Complete System Walkthrough & Live Workflow Video
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge-pill" style={{ fontSize: '0.66rem', padding: '2px 8px' }}>
            1080P HD
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--text-mid)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }} />
            <span>VIDEO READY</span>
          </span>
        </div>
      </div>

      {/* Video Screen Container */}
      <div style={{ position: 'relative', width: '100%', backgroundColor: '#000000', overflow: 'hidden' }}>
        <video
          ref={videoRef}
          src="/videos/walkthrough.mp4"
          poster="/assets/01_dashboard.png"
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '75vh',
            display: 'block',
            cursor: 'pointer',
            backgroundColor: '#000000'
          }}
        />

        {/* Big Center Play Overlay (when paused) */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.55)',
              backdropFilter: 'blur(4px)',
              cursor: 'pointer',
              zIndex: 5
            }}
          >
            <div style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: '4px',
              boxShadow: '0 10px 40px rgba(255, 255, 255, 0.35)',
              transition: 'transform 0.2s ease',
              marginBottom: '14px'
            }}>
              <Play size={32} fill="#000000" />
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>
              Watch Platform Walkthrough Video
            </span>
            <span style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-mid)',
              marginTop: '4px'
            }}>
              Click anywhere to play · Full end-to-end athlete workflow demonstration
            </span>
          </div>
        )}
      </div>

      {/* Titanium Player Control Bar */}
      <div style={{
        padding: '16px 22px',
        backgroundColor: 'rgba(10, 10, 13, 0.98)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {/* Progress Scrubber */}
        <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', minWidth: '42px' }}>
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
            style={{ flex: 1, cursor: 'pointer' }}
          />
          <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', minWidth: '42px', textAlign: 'right' }}>
            {formatTime(duration)}
          </span>
        </div>

        {/* Buttons Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={togglePlay}
              className="btn-solid-titanium"
              style={{
                padding: '8px 18px',
                fontSize: '0.82rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              {isPlaying ? <Pause size={14} fill="#000" /> : <Play size={14} fill="#000" />}
              <span>{isPlaying ? 'Pause' : 'Play Walkthrough'}</span>
            </button>

            <button
              onClick={toggleMute}
              className="btn-ghost-dark"
              style={{ padding: '8px 14px', borderRadius: 'var(--radius-full)' }}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                  videoRef.current.play();
                  setIsPlaying(true);
                }
              }}
              className="btn-ghost-dark"
              style={{ padding: '8px 14px', borderRadius: 'var(--radius-full)' }}
              title="Restart from beginning"
            >
              <RotateCcw size={15} />
            </button>
          </div>

          <div>
            <button
              onClick={handleFullscreen}
              className="btn-ghost-dark"
              style={{ padding: '8px 14px', borderRadius: 'var(--radius-full)' }}
              title="Fullscreen"
            >
              <Maximize size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
