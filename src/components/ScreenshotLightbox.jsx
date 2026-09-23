import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, ExternalLink } from 'lucide-react';

export default function ScreenshotLightbox({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightbox = (idx) => {
    setSelectedIdx(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
    document.body.style.overflow = '';
  };

  const prevItem = () => {
    setSelectedIdx((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const nextItem = () => {
    setSelectedIdx((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation & Escape to close
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevItem();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextItem();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIdx, items.length]);

  return (
    <>
      {/* Grid of gallery cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '24px'
      }}>
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="obsidian-card glass-panel-interactive"
            style={{
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(15, 15, 18, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.09)'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              paddingTop: '62%',
              overflow: 'hidden',
              backgroundColor: '#000000'
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
                  objectPosition: 'top center',
                  imageRendering: '-webkit-optimize-contrast',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(8px)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <Maximize2 size={14} />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px'
              }}>
                <span className="badge-pill" style={{ fontSize: '0.65rem', padding: '3px 10px', background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)' }}>
                  {item.category || 'UI VIEW'}
                </span>
              </div>
            </div>

            <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-mid)', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
              <div style={{
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: '#ffffff',
                fontWeight: 600
              }}>
                <span>Click to Inspect Full-Res</span>
                <Eye size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Mounted Directly to document.body via Portal */}
      {selectedIdx !== null && typeof document !== 'undefined' && createPortal(
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2147483640,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out'
          }}
        >
          {/* Prominent High-Z-Index Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeLightbox();
            }}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close Lightbox"
            style={{
              position: 'fixed',
              top: '24px',
              right: '28px',
              backgroundColor: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              zIndex: 2147483647,
              cursor: 'pointer',
              boxShadow: '0 4px 25px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 255, 255, 0.5)',
              transition: 'transform 0.15s ease',
              pointerEvents: 'auto'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.12)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <X size={26} strokeWidth={2.6} style={{ pointerEvents: 'none' }} />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevItem();
            }}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevItem();
            }}
            aria-label="Previous image"
            style={{
              position: 'fixed',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '50%',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 2147483647,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.15s ease',
              pointerEvents: 'auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={28} style={{ pointerEvents: 'none' }} />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextItem();
            }}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextItem();
            }}
            aria-label="Next image"
            style={{
              position: 'fixed',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '50%',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 2147483647,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.15s ease',
              pointerEvents: 'auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={28} style={{ pointerEvents: 'none' }} />
          </button>

          {/* Modal Content (Image & Caption) */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1440px',
              width: '90vw',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'default',
              position: 'relative',
              zIndex: 2147483641
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <img
                src={items[selectedIdx].src}
                alt={items[selectedIdx].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '74vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 30px 90px -15px rgba(0, 0, 0, 0.98), 0 0 50px rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  imageRendering: '-webkit-optimize-contrast'
                }}
              />
            </div>
            <div style={{
              marginTop: '16px',
              textAlign: 'center',
              maxWidth: '750px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="badge-pill">
                  {items[selectedIdx].category}
                </span>
                <a
                  href={items[selectedIdx].src}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <span>Open Raw 4K Image</span>
                  <ExternalLink size={11} />
                </a>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', fontWeight: 700 }}>{items[selectedIdx].title}</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                {items[selectedIdx].description}
              </p>
              <div style={{
                marginTop: '4px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-dim)'
              }}>
                SLIDE {selectedIdx + 1} OF {items.length} · CLICK ANYWHERE OUTSIDE OR PRESS ESC TO CLOSE
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
