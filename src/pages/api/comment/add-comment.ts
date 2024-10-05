import { verifyToken } from '@/utils/jwt';
import Comment from '@/models/Comment';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const loginHandler = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
        const comment = await Comment.create(req.body);
        res.status(201).json({ type: "success", comment:comment, message: "Comment Added Successfully" });
      } catch (error) {
        res.status(400).json({ type: "error", message: 'Error adding comment' });
      }
};

export default connectDB(loginHandler);