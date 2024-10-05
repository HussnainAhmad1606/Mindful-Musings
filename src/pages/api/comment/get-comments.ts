import { verifyToken } from '@/utils/jwt';
import Comment from '@/models/Comment';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const loginHandler = async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        const comments = await Comment.find({articleId: req.body.articleId});
        res.status(200).json({ type: "success", comments: comments });
      } catch (error) {
        res.status(400).json({ type: "error", message: 'Error fetching comments' });
      }
};

export default connectDB(loginHandler);