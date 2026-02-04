// backend/models/Crop.js
// backend/models/Crop.js
const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    farmerName: String,
    crop: String,
    quantity: Number,
    price: Number,
    location: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", cropSchema);


