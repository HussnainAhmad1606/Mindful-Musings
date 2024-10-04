// pages/api/create-payment-intent.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      // Create a Payment Intent for a one-time or recurring payment
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 2000, // Amount in smallest currency unit (e.g., 2000 = $20)
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
