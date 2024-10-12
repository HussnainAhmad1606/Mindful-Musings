import { verifyToken } from '@/utils/jwt';
import Bookmark from '@/models/Bookmark';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const bookmarksHandler = async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        const bookmarks = await Bookmark.find({username: req.body.username}).populate('articleId');
        res.status(200).json({ type: "success", bookmarks: bookmarks });
      } catch (error) {
        res.status(400).json({ type: "error", message: 'Error fetching bookmarks' });
      }
};

export default connectDB(bookmarksHandler);