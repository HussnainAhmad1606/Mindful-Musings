const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      isPremium: {
        type: Boolean,
        default: false,
      },
      subscriptionStartDate: {
        type: Date,
        default: null, 
      },
      subscriptionEndDate: {
        type: Date,
        default: null,
      },
      paymentMethod: {
        type: String,
        enum: ['stripe'],
        default: null,
      },
      isAdmin: {
        type: Boolean,
        default: false
      }
    }, { timestamps: true });

mongoose.models = {}

module.exports = mongoose.model('User', userSchema)