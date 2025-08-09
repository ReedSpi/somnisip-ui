// Helper function to track events
export const trackEvent = (eventName, parameters = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }
};

// Specific tracking functions for common actions
export const trackEmailSignup = (source = 'unknown') => {
  trackEvent('email_signup', {
    event_category: 'conversion',
    event_label: source,
    value: 1
  });
};

export const trackProductInterest = (productName, price) => {
  trackEvent('product_interest', {
    event_category: 'product',
    event_label: productName,
    value: parseFloat(price.replace('$', ''))
  });
};

export const trackCTAClick = (ctaText, location) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: `${ctaText} - ${location}`,
    value: 1
  });
};