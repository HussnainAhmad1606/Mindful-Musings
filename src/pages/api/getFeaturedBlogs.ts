import { verifyToken } from '@/utils/jwt';
import Article from '@/models/Article';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const loginHandler = async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        const articles = await Article.find({}).limit(2);
        res.status(200).json({ type: "success", articles: articles });
      } catch (error) {
        res.status(400).json({ type:"error", message: 'Error fetching articles' });
      }
};

export default connectDB(loginHandler);