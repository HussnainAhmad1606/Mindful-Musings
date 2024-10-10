import { verifyToken } from '@/utils/jwt';
import Article from '@/models/Article';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const searchHandler = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const query = req.body.query;
    const results = await Article.aggregate([
        {
          $match: {
            $or: [
              { title: { $regex: query, $options: 'i' } }, 
              { description: { $regex: query, $options: 'i' } }, 
              { blocks: { $regex: query, $options: 'i' } }, 
              { author: { $regex: query, $options: 'i' } },
              { tags: { $in: [new RegExp(query, 'i')] } },
            ],
          },
        },
      ]);
        res.status(200).json({ type: "success", results: results });
      } catch (error) {
        res.status(400).json({ type: "error", message: 'Error searching for articles' });
      }
};

export default connectDB(searchHandler);