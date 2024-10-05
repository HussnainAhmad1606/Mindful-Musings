const mongoose = require('mongoose');
const { Schema } = mongoose;
const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], default: [] },
  isPremium: { type: Boolean, default: false },
  time: { type: Number, required: true },
  blocks: { type: Schema.Types.Mixed, required: true },
  version: { type: String, required: true }
    }, { timestamps: true });

mongoose.models = {}

module.exports = mongoose.model('Article', articleSchema)