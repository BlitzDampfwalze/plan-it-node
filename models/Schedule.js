const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema(
  {
    // userID: { required: true, type: mongoose.Schema.Types.ObjectId, index: true },
    // eventID
    // title: { type: String, required: true },
    date: { type: Date},
    details: { type: String, required: true },
    created: { type: Date, default: Date.now }
  }
);

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = { Schedule };