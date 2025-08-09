import React, { useState } from 'react';
import { subscribeToMailchimp } from '../services/mailchimp';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribeToMailchimp(email, '', 'email_signup');
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an issue with your signup. Please try again.');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          Join the waitlist
        </h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
          Get an email when Somnisip is ready for next steps.
        </p>
        
        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg max-w-md mx-auto">
            <p className="font-medium">You’re on the list.</p>
            <p className="text-sm">We’ll send occasional updates.</p>
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
                Join the waitlist
              </button>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSignup;
