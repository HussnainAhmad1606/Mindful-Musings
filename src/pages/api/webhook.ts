// pages/api/webhook.js

import { buffer } from 'micro';
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-01',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      const buf = await buffer(req);

      
      event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
      
      switch (event.type) {
        case 'invoice.payment_succeeded':
          const invoiceSucceeded = event.data.object;
          console.log('Payment successful for subscription:', invoiceSucceeded);
          break;
        case 'invoice.payment_failed':
          const invoiceFailed = event.data.object;
          console.log('Payment failed for subscription:', invoiceFailed);
          break;
        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      res.status(200).json({ received: true });
    } catch (err) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
