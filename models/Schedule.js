const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema(
  {
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
    date: { type: Date },
    time: { type: Number },
    details: { type: String, required: true },
    location: String,
    created: { type: Date, default: Date.now }
  }
);

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = { Schedule };