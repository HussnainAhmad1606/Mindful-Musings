const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  body: { type: String, required: true },
  articleId: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
    }, { timestamps: true });

mongoose.models = {}

module.exports = mongoose.model('Comment', commentSchema)