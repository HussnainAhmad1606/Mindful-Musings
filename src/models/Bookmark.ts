const mongoose = require('mongoose');
const { Schema } = mongoose;
const bookmarkSchema = new mongoose.Schema({
  username: { type: String, required: true },
  articleId: { type: Schema.Types.ObjectId, required: true, ref:"Article" }
    }, { timestamps: true });

mongoose.models = {}

module.exports = mongoose.model('Bookmark', bookmarkSchema)