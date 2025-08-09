// Mailchimp API integration
// You'll need to set these environment variables in your .env file:
// VITE_MAILCHIMP_API_KEY=your_api_key
// VITE_MAILCHIMP_AUDIENCE_ID=your_audience_id
// VITE_MAILCHIMP_SERVER_PREFIX=your_server_prefix (e.g., us1, us2, etc.)

const MAILCHIMP_CONFIG = {
  apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY,
  audienceId: import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID,
  serverPrefix: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX || 'us1'
};

// For security reasons, we'll use a serverless function or backend endpoint
// Direct API calls from frontend expose your API key
export const subscribeToMailchimp = async (email, interest, source) => {
  try {
    // Use Netlify Function endpoint directly (recommended for this project)
    const response = await fetch('/.netlify/functions/mailchimp-subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        interest,
        source,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error('Subscription failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    
    // Fallback: Store locally if API fails
    const signupData = {
      email,
      interest,
      source,
      timestamp: new Date().toISOString(),
      status: 'pending_api'
    };
    
    const existingSignups = JSON.parse(localStorage.getItem('somnisip_signups') || '[]');
    existingSignups.push(signupData);
    localStorage.setItem('somnisip_signups', JSON.stringify(existingSignups));
    
    throw error;
  }
};

// Alternative: Use Mailchimp's embedded form (simpler but less customizable)
export const getMailchimpEmbedUrl = () => {
  // Replace with your actual Mailchimp form URL
  return 'https://somnisip.us1.list-manage.com/subscribe/post?u=YOUR_USER_ID&id=YOUR_LIST_ID';
};

// For development/testing - direct API call (NOT recommended for production)
export const subscribeDirectly = async (email, interest, source) => {
  if (!MAILCHIMP_CONFIG.apiKey || !MAILCHIMP_CONFIG.audienceId) {
    throw new Error('Mailchimp configuration missing');
  }

  const url = `https://${MAILCHIMP_CONFIG.serverPrefix}.api.mailchimp.com/3.0/lists/${MAILCHIMP_CONFIG.audienceId}/members`;
  
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      INTEREST: interest,
      SOURCE: source
    },
    tags: [source, interest].filter(Boolean)
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${MAILCHIMP_CONFIG.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || 'Subscription failed');
  }

  return await response.json();
};
