const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
  {
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    message: { type: String, required: true },
    created: { type: Date, default: Date.now }
  }
);

const Chat = mongoose.model('Chat', chatSchema);

module.exports = { Chat };