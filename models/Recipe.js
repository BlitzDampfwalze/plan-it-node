const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    userID: { required: true, type: mongoose.Schema.Types.ObjectId, index: true },
    title: { type: String, required: true },
    dishType: { type: String, required: true },
    ingredients: String,
    instructions: { type: String, required: true },
    readyInMinutes: { type: Number, required: true },
    servings: { type: Number, require: true },
    source: { type: String },
    created: { type: Date, default: Date.now }
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = { Recipe };

