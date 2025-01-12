// models/historyModel.js
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true,
  },
  action: {
    type: String,
    required: true, // e.g. login, search, read_article
  },
  data: {
    type: Object, // Additional data like query, article info, etc.
    required: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const History = mongoose.model('History', historySchema);
module.exports = History;