const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    userCreator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    title: { type: String, required: true },
    description: { type: String },
    password: { type: String, required: true },
    imageUrl: { type: String },
    created: { type: Date, default: Date.now }
  }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event };