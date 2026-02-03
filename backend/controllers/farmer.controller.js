// backend/controllers/farmer.controller.js

const crops = [];

exports.registerCrop = (req, res) => {
  const { farmerName, crop, quantity, location } = req.body;

  crops.push({
    farmerName,
    crop,
    quantity,
    location,
    status: "Normal"
  });

  res.json({
    message: "Crop registered successfully"
  });
};

exports.getCrops = (req, res) => {
  res.json(crops);
};
