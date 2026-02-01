const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Farmer API working" });
});

module.exports = router;
