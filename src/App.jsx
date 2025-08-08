import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './components/Analytics';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Analytics />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ProductShowcase />
              <Features />
              <Testimonials />
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