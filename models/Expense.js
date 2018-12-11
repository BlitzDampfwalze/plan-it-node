const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
  {
    // eventID: { required: true, type: mongoose.Schema.Types.ObjectId, index: true },
    // userID: { required: true, type: String },
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    taskName: { type: String, required: true },
    completed: { type: Boolean, default: false },
    created: { type: Date, default: Date.now }
  }
);

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = { Expense };