import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Layers } from 'lucide-react';

export default function ScreenshotLightbox({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightbox = (idx) => setSelectedIdx(idx);
  const closeLightbox = () => setSelectedIdx(null);

  const prevItem = () => {
    setSelectedIdx((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const nextItem = () => {
    setSelectedIdx((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="glass-panel glass-panel-interactive"
            style={{
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              paddingTop: '62%',
              overflow: 'hidden',
              backgroundColor: '#050811'
            }}>
              <img
                src={item.src}
                alt={item.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(8px)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Maximize2 size={14} />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px'
              }}>
                <span className="badge-pill" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                  {item.category || 'UI VIEW'}
                </span>
              </div>
            </div>

            <div style={{ padding: '16px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {item.description}
                </p>
              </div>
              <div style={{
                marginTop: '12px',
                paddingTop: '10px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--cyan-primary)'
              }}>
                <span>Click to Inspect</span>
                <Eye size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          backgroundColor: 'rgba(3, 6, 12, 0.92)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--border-medium)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              zIndex: 10
            }}
          >
            <X size={22} />
          </button>

          {/* Nav arrows */}
          <button
            onClick={prevItem}
            style={{
              position: 'absolute',
              left: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--border-medium)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextItem}
            style={{
              position: 'absolute',
              right: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--border-medium)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Modal Content */}
          <div style={{
            maxWidth: '1100px',
            width: '100%',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img
              src={items[selectedIdx].src}
              alt={items[selectedIdx].title}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                border: '1px solid var(--border-medium)'
              }}
            />
            <div style={{
              marginTop: '18px',
              textAlign: 'center',
              maxWidth: '650px'
            }}>
              <span className="badge-pill badge-emerald" style={{ marginBottom: '8px' }}>
                {items[selectedIdx].category}
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>{items[selectedIdx].title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '6px' }}>
                {items[selectedIdx].description}
              </p>
              <div style={{
                marginTop: '10px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)'
              }}>
                SLIDE {selectedIdx + 1} OF {items.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
