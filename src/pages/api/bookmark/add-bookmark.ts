import { verifyToken } from '@/utils/jwt';
import Bookmark from '@/models/Bookmark';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const bookmarkHandler = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const previous = await Bookmark.findOne({username: req.body.username, articleId: req.body.articleId});
    if (previous){
      return res.status(400).json({type: "error", message: "Bookmark already exists"});
    }
        const comment = await Bookmark.create(req.body);
        res.status(201).json({ type: "success", comment:comment, message: "Bookmark Added Successfully" });
      } catch (error) {
        res.status(400).json({ type: "error", message: 'Error adding bookmark' });
      }
};

export default connectDB(bookmarkHandler);