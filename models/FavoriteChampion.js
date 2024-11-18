// models/FavoriteChampion.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteChampionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  championName: { type: String, required: true },
  role: { type: String },
  notes: { type: String },
  championImage: { type: String }, // Add this line
});

module.exports = mongoose.model('FavoriteChampion', favoriteChampionSchema);
