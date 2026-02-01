const express = require("express");
const router = express.Router();

// POST: Generate compensation report
router.post("/", (req, res) => {
  res.json({
    message: "Compensation report generated successfully",
    reportId: "REP123",
    farmerId: "FARM001",
    crop: "Paddy",
    compensationAmount: 15000,
    status: "Generated"
  });
});

module.exports = router;
