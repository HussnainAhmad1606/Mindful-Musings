import { verifyToken } from '@/utils/jwt';
import Article from '@/models/Article';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const loginHandler = async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.body.articleId);
        if (!deletedArticle) {
          return res.status(404).json({ type: "success", message: 'Article not found' });
        }
        res.status(200).json({ type: "success", message: "Article deleted successfully" });
      } catch (error) {
        res.status(400).json({ type: "error", message: 'Error deleting article' });
      }
};

export default connectDB(loginHandler);