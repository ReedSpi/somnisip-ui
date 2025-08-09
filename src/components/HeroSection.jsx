import React, { useState } from 'react';
import somniLogo from '../assets/logos/somni_logo.png';
import productDemo from '../assets/productImages/product_demo.png';
import EmailCaptureModal from './EmailCaptureModal';
import { trackCTAClick } from '../utils/analytics';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreOrderClick = () => {
    trackCTAClick('Pre-order now', 'hero');
    setIsModalOpen(true);
  };

  // Removed non-functional demo button handler

  return (
    <section className="bg-transparent">
      {/* Navigation Bar */}
      <nav className="px-4 sm:px-6 lg:px-8 py-6 border-b border-neutral-100 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <a href="/" aria-label="Somnisip home" className="flex items-center">
            <img 
              src={somniLogo} 
              alt="Somnisip" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain"
            />
          </a>
          {/* Centered logo; right side content intentionally removed */}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-4">
                Nighttime hydration, simplified.
              </h1>
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                A wall-mounted system that keeps water close and surfaces clear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handlePreOrderClick}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Join the waitlist
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-neutral-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Easy to install</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Easy to clean</span>
                </div>
              </div>
            </div>

            {/* Right Column - Product Showcase */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
                {/* Product Image */}
                <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={productDemo}
                    alt="Somnisip product demo"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">6ft</div>
                    <div className="text-xs text-neutral-500">Retractable hose</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">2L</div>
                    <div className="text-xs text-neutral-500">Water capacity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <EmailCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source="hero"
      />
    </section>
  );
};

export default HeroSection;
