import React, { useState } from 'react';
import somnisipLogo from '../assets/logos/somni_logo.png';
import productDemo from '../assets/productImages/product_demo.png';
import EmailCaptureModal from './EmailCaptureModal';
import { trackCTAClick } from '../utils/analytics';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreOrderClick = () => {
    trackCTAClick('Pre-order now', 'hero');
    setIsModalOpen(true);
  };

  const handleDemoClick = () => {
    trackCTAClick('Watch demo', 'hero');
    // For now, just track the click - you can add demo functionality later
    alert('Demo video coming soon! Sign up to be notified when it\'s ready.');
    setIsModalOpen(true);
  };

  return (
    <section className="bg-white">
      {/* Navigation Bar */}
      <nav className="px-4 sm:px-6 lg:px-8 py-4 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={somnisipLogo} 
              alt="Somnisip Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-neutral-900">Somnisip</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-neutral-600 hover:text-neutral-900 font-medium">Products</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 font-medium">Features</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 font-medium">Support</a>
            <button className="btn-primary px-6 py-2">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                No more spilled water.
                <br />
                <span className="text-primary-600">No more cluttered nightstand.</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                The wall-mounted bedside water dispenser that delivers fresh, clean water right to your pillow through a retractable hose system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handlePreOrderClick}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Early Access
                </button>
                <button 
                  onClick={handleDemoClick}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Watch demo
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-neutral-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Easy wall installation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>30-day money back</span>
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
