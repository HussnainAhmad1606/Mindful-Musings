import User from '@/models/User';
import connectDB from '@/middlewares/connectDB';
const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

import { NextApiRequest, NextApiResponse } from 'next';
const loginHandler = async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username } = req.body;
  try {
    const user = await User.findOne({username: username})

  const id = user.transactionId

  res.status(200).json({ type: "success", id: id});
  }
  catch(error) {
    res.status(400).json({type:"error", message: "Error getting transaction id"});
  }
};

export default connectDB(loginHandler);