const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    // userID: { required: true, type: mongoose.Schema.Types.ObjectId, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.now }
  }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event };