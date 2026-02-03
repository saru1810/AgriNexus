const express = require("express");
const router = express.Router();

let demands = [];

// POST buyer demand
router.post("/demand", (req, res) => {
  const { buyerName, crop, quantity, location } = req.body;

  demands.push({
    buyerName,
    crop,
    quantity,
    location
  });

  res.json({ message: "Demand registered successfully" });
});

// GET all demands
router.get("/demands", (req, res) => {
  res.json(demands);
});

module.exports = router;
