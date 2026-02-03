const express = require("express");
const router = express.Router();

const {
  registerCrop,
  getCrops
} = require("../controllers/farmer.controller");

router.post("/crop", registerCrop);
router.get("/crops", getCrops);

module.exports = router;

