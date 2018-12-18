const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
  {
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    expenseName: { type: String, required: true },
    amount: { type: Number, required: true },
    created: { type: Date, default: Date.now }
  }
);

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = { Expense };