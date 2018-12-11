const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.now }
  }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event };