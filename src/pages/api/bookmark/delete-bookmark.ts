import { verifyToken } from '@/utils/jwt';
import Bookmark from '@/models/Bookmark';
import connectDB from '@/middlewares/connectDB';


import { NextApiRequest, NextApiResponse } from 'next';
const deleteHandler = async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        const deletedBookmark = await Bookmark.findByIdAndDelete(req.body.bookmarkId);
        if (!deletedBookmark) {
          return res.status(404).json({ type: "success", message: 'Bokmark not found' });
        }
        res.status(200).json({ type: "success", message: "Bookmark deleted successfully" });
      } catch (error) {
        res.status(400).json({ type: "error", message: 'Error deleting bookmark' });
      }
};

export default connectDB(deleteHandler);