import { verifyToken } from '@/utils/jwt';
import Article from '@/models/Article';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const loginHandler = async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        const article = await Article.findById(req.body.articleId);
        if (!article) {
          return res.status(404).json({ type: "error", message: 'Article not found' });
        }
        res.status(200).json({ type: "success", article: article });
      } catch (error) {
        res.status(400).json({ type: "error", message: 'Error fetching article' });
      }
};

export default connectDB(loginHandler);