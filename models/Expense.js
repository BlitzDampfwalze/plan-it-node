const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
  {
    // eventID: { required: true, type: mongoose.Schema.Types.ObjectId, index: true },
    // userID: { required: true, type: String },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    expenseName: { type: String, required: true },
    amount: { type: Number, required: true },
    created: { type: Date, default: Date.now }
  }
);

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = { Expense };