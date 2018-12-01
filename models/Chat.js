const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    eventID: { required: true, type: String },
    userID: { required: true, type: String },
    message: { type: String, required: true },
    created: { type: Date, default: Date.now }
  }
);

const Chat = mongoose.model('Chat', chatSchema);

module.exports = { Chat };