import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, Check, Dumbbell } from 'lucide-react';

export default function InteractiveWorkoutTimer() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [activeSet, setActiveSet] = useState(2);
  const [loggedWeight, setLoggedWeight] = useState(100);
  const [loggedReps, setLoggedReps] = useState(8);
  const [rpe, setRpe] = useState(8.5);
  const [completedSets, setCompletedSets] = useState([
    { set: 1, weight: 100, reps: 8, rpe: 8.0 }
  ]);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = (dur) => {
    setSelectedDuration(dur);
    setTimeLeft(dur);
    setIsRunning(true);
  };

  const handleLogSet = () => {
    setCompletedSets([
      ...completedSets,
      { set: activeSet, weight: loggedWeight, reps: loggedReps, rpe: rpe }
    ]);
    setActiveSet((s) => s + 1);
    startTimer(90);
  };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="obsidian-card" style={{ padding: '36px' }}>
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
            <span className="tech-pill tech-pill-cyan">IN-GYM TELEMETRY</span>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              BARBELL INCLINE BENCH
            </span>
          </div>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#fff' }}>
            FR-05: In-Session Rest Countdown & Dynamic Overload
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', marginTop: '4px' }}>
            Live athlete companion tracking load, reps, RPE, and automated intra-set recovery countdowns.
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        alignItems: 'center'
      }}>
        {/* Set Logger */}
        <div style={{
          backgroundColor: '#05070a',
          padding: '24px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              SET 0{activeSet} // TARGET: 8-10 REPS
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              PROGRESSIVE OVERLOAD ACTIVE
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '18px' }}>
            <div>
              <label style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                LOAD (KG)
              </label>
              <input
                type="number"
                value={loggedWeight}
                onChange={(e) => setLoggedWeight(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-xs)',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                REPS
              </label>
              <input
                type="number"
                value={loggedReps}
                onChange={(e) => setLoggedReps(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-xs)',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                RPE
              </label>
              <select
                value={rpe}
                onChange={(e) => setRpe(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '10px 8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-xs)',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem'
                }}
              >
                <option value={7.5}>7.5 (3 RIR)</option>
                <option value={8.0}>8.0 (2 RIR)</option>
                <option value={8.5}>8.5 (1-2 RIR)</option>
                <option value={9.0}>9.0 (1 RIR)</option>
                <option value={10}>10.0 (Max)</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleLogSet}
            className="btn-solid-titanium"
            style={{ width: '100%', borderRadius: 'var(--radius-xs)', padding: '10px' }}
          >
            <Check size={16} />
            <span>Complete Set 0{activeSet} & Start Rest</span>
          </button>

          {/* History */}
          <div style={{ marginTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '10px' }}>
            {completedSets.map((s, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                padding: '3px 0',
                color: 'var(--text-mid)'
              }}>
                <span>SET 0{s.set}: {s.weight}kg × {s.reps} reps</span>
                <span style={{ color: 'var(--accent-emerald)' }}>RPE {s.rpe} ✓</span>
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist Rest Clock */}
        <div style={{
          backgroundColor: '#05070a',
          padding: '28px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>
            INTRA-SET RECOVERY TIMER
          </span>

          <div style={{
            fontSize: '3.6rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            color: isRunning ? '#ffffff' : 'var(--text-mid)',
            lineHeight: 1,
            margin: '14px 0'
          }}>
            {formatTime(timeLeft)}
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '16px' }}>
            {isRunning ? 'Substrate recovery active. Replenishing ATP-CP reserves...' : 'Timer paused or complete.'}
          </p>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {[30, 60, 90, 120].map((sec) => (
              <button
                key={sec}
                onClick={() => startTimer(sec)}
                style={{
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  backgroundColor: selectedDuration === sec && isRunning ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                  color: selectedDuration === sec && isRunning ? '#000000' : 'var(--text-mid)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {sec}s
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="btn-ghost-dark"
              style={{ padding: '8px 18px', fontSize: '0.84rem' }}
            >
              {isRunning ? <Pause size={14} /> : <Play size={14} />}
              <span>{isRunning ? 'Pause' : 'Resume'}</span>
            </button>
            <button
              onClick={() => { setIsRunning(false); setTimeLeft(selectedDuration); }}
              className="btn-ghost-dark"
              style={{ padding: '8px 14px' }}
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
