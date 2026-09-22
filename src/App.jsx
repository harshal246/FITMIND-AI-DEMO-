import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FunctionalRequirementsPage from './pages/FunctionalRequirementsPage';
import ArchitecturePage from './pages/ArchitecturePage';
import ExperiencePage from './pages/ExperiencePage';

export default function App() {
  const [activePage, setActivePage] = useState('functional');

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Background ambient grid */}
      <div className="bg-grid-overlay" />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Viewport Container */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {activePage === 'functional' && (
          <FunctionalRequirementsPage setActivePage={setActivePage} />
        )}
        {activePage === 'architecture' && (
          <ArchitecturePage />
        )}
        {activePage === 'experience' && (
          <ExperiencePage setActivePage={setActivePage} />
        )}
      </main>

      {/* Unified Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
