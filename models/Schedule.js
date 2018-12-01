const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema(
  {
    // eventID:  { required: true, type: mongoose.Schema.Types.ObjectId, index: true },
    date: { type: Date },
    time: { type: Number },
    details: { type: String, required: true },
    created: { type: Date, default: Date.now }
  }
);

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = { Schedule };