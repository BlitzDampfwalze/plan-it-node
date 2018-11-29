const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    // userID: { required: true, type: mongoose.Schema.Types.ObjectId, index: true },
    userName: { type: String, required: true },
    taskName: { type: String, required: true },
    completed: { type: Boolean, default: false },
    created: { type: Date, default: Date.now }
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };