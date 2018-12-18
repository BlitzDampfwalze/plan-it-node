const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    taskName: { type: String, required: true },
    completed: { type: Boolean, default: false },
    created: { type: Date, default: Date.now }
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };