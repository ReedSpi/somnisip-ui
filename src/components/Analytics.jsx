import React, { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 - Get ID from environment variables
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    let script1 = null;
    
    // Only load if GA_MEASUREMENT_ID is configured
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      // Load Google Analytics script
      script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);
    }

    return () => {
      // Cleanup if script was loaded
      if (script1 && document.head.contains(script1)) {
        document.head.removeChild(script1);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
