import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FunctionalRequirementsPage from './pages/FunctionalRequirementsPage';
import ArchitecturePage from './pages/ArchitecturePage';
import ExperiencePage from './pages/ExperiencePage';
import ModulesPage from './pages/ModulesPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Background ambient grid */}
        <div className="bg-grid-overlay" />

        {/* Sticky Glassmorphic Navbar */}
        <Navbar />

        {/* Main Routed Viewport Container */}
        <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<FunctionalRequirementsPage />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/requirements" element={<ModulesPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/gallery" element={<ExperiencePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Unified Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
