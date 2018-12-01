const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    // eventID: { required: true, type: mongoose.Schema.Types.ObjectId, index: true },
    // userID: { required: true, type: String },
    taskName: { type: String, required: true },
    completed: { type: Boolean, default: false },
    created: { type: Date, default: Date.now }
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };