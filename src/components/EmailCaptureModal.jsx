import React, { useState } from 'react';
import { trackEmailSignup } from '../utils/analytics';
import { subscribeToMailchimp } from '../services/mailchimp';

const EmailCaptureModal = ({ isOpen, onClose, source = 'modal' }) => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track the signup attempt
      trackEmailSignup(source);
      
      // Subscribe to Mailchimp
      await subscribeToMailchimp(email, interest, source);
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail('');
        setInterest('');
      }, 2000);
      
    } catch (error) {
      console.error('Mailchimp signup error:', error);
      // Show user-friendly error message
      alert('There was an issue with your signup. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Get Early Access
              </h3>
              <p className="text-neutral-600">
                Be the first to know when Somnisip launches and get 20% off your first order.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Which model interests you most?
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a model</option>
                  <option value="basic">Basic ($79)</option>
                  <option value="plus">Plus ($159)</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3 disabled:opacity-50"
              >
                {isSubmitting ? 'Signing up...' : 'Get Early Access'}
              </button>
            </form>

            <p className="text-xs text-neutral-500 text-center mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              You're in!
            </h3>
            <p className="text-neutral-600">
              Thanks for your interest. We'll keep you updated on our launch progress.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailCaptureModal;
