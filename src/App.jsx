import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './components/Analytics';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Analytics />
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-neutral-50">
        {/* Decorative background accents */}
        <span className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-200 opacity-30 blur-3xl animate-blob-slow" />
        <span className="pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary-100 opacity-40 blur-3xl animate-blob-slow animation-delay-4000" />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ProductShowcase />
              <EmailSignup />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;