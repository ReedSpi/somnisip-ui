import React, { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Formspree endpoint - replace with your actual Formspree form ID
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: 'New Somnisip newsletter signup'
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          Stay Updated
        </h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
          Be the first to know when Somnisip launches. Get exclusive updates, early bird pricing, and sleep wellness tips.
        </p>
        
        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg max-w-md mx-auto">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm">We'll keep you updated on our progress.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Notify Me
              </button>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSignup;
