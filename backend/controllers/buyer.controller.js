// backend/controllers/buyer.controller.js

const demands = [];

exports.registerDemand = (req, res) => {
  const { buyerName, crop, quantity, location } = req.body;

  demands.push({
    buyerName,
    crop,
    quantity,
    location
  });

  res.json({
    message: "Buyer demand registered"
  });
};

exports.getDemands = (req, res) => {
  res.json(demands);
};
