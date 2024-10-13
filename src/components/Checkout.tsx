"use client"
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

// Initialize Stripe.js
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
    // Fetch session ID from our API route
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });

    const { sessionId } = await res.json();

    console.log(sessionId)
    const stripe = await stripePromise;


    // Redirect the user to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error('Error redirecting to checkout', error);
    }

    setLoading(false);
  };

  return (
    <button className='btn btn-primary' onClick={handleCheckout} disabled={loading}>
      {loading ? 'Processing...' : 'Subscribe Now'}
    </button>
  );
};

export default Checkout;
