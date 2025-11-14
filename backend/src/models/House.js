const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  location: { type: String, required: true }, // city or address
  price: { type: Number, required: true },
  rooms: { type: Number, default: 1 },
  photos: { type: [String], default: [] }, // URLs or paths
  videos: { type: [String], default: [] },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

HouseSchema.index({ location: 1 });
module.exports = mongoose.model('House', HouseSchema);
