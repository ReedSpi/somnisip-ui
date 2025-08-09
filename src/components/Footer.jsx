import React from 'react';
import somnisipLogo from '../assets/logos/somni_logo_only.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-400/40 to-transparent mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={somnisipLogo} 
                alt="Somnisip Logo" 
                className="h-8 mr-3 object-contain filter brightness-0 invert"
              />
              <h3 className="text-2xl font-bold text-white">Somnisip</h3>
            </div>
            <p className="text-neutral-400 mb-4 max-w-md">
              Revolutionizing bedside hydration for better sleep and wellness. 
              Wake up refreshed, every single night.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            {currentYear} Somnisip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
