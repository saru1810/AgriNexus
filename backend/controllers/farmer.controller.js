const Crop = require("../models/Crop");

exports.registerCrop = async (req, res) => {
  try {
    const crop = await Crop.create(req.body);
    res.status(201).json(crop);
  } catch (err) {
    res.status(500).json({ message: "Failed to register crop" });
  }
};

exports.getCrops = async (req, res) => {
  const crops = await Crop.find();
  res.json(crops);
};

