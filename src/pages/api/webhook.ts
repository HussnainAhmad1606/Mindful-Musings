// pages/api/webhook.js

import { buffer } from 'micro';
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'invoice.payment_succeeded') {
    const invoice = event.data.object;
    console.log('Payment successful for subscription', invoice);
  }

  if (event.type === 'invoice.payment_failed') {
    const invoice = event.data.object;
    console.log('Payment failed for subscription', invoice);
  }

  res.status(200).json({ received: true });
}
