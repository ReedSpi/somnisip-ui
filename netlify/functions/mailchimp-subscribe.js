// Netlify Function for Mailchimp subscription
// This keeps your API key secure on the server side

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email, interest, source } = JSON.parse(event.body);

    // Validate required fields
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    // Mailchimp API configuration from environment variables
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX || 'us1';

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
      console.error('Missing Mailchimp configuration');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Mailchimp API URL
    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    // Prepare subscriber data
    const subscriberData = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        INTEREST: interest || '',
        SOURCE: source || 'website'
      },
      tags: [source, interest].filter(Boolean)
    };

    // Make request to Mailchimp API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriberData)
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Handle specific Mailchimp errors
      if (responseData.title === 'Member Exists') {
        return {
          statusCode: 200,
          body: JSON.stringify({ 
            success: true, 
            message: 'Already subscribed',
            existing: true 
          })
        };
      }

      console.error('Mailchimp API error:', responseData);
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: responseData.detail || 'Subscription failed' 
        })
      };
    }

    // Success response
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed to Somnisip updates!',
        subscriber: {
          email: responseData.email_address,
          status: responseData.status,
          id: responseData.id
        }
      })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error' 
      })
    };
  }
};