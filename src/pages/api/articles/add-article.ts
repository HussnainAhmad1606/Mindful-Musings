import { verifyToken } from '@/utils/jwt';
import Article from '@/models/Article';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const loginHandler = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
        const article = await Article.create(req.body);
        res.status(201).json({ type: "success", data: article, message: "Article Added Successfully" });
      } catch (error) {
        res.status(400).json({ type: "error", message: 'Error creating article' });
      }
};

export default connectDB(loginHandler);