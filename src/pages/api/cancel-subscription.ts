import Stripe from 'stripe';
import connectDB from '@/middlewares/connectDB';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import User from '@/models/User';

const handler = async(req, res)=> {
  if (req.method === 'POST') {
    const { subscriptionId, username } = req.body; 

    try {
      const deletedSubscription = await stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: false
      });

  
      const result = await User.findOneAndUpdate(
        { username: username },
        { $set: { isPremium: false, subscriptionStartDate: null, paymentMethod: "", subscriptionEndDate: null, transactionId: "" } },
      );
      res.status(200).json({ type: "success", message: "Unsubscribed successful", deleted: deletedSubscription });
    } catch (error) {
      console.error('Error canceling subscription:', error);
      res.status(500).json({ type: "error", message: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}


export default connectDB(handler);