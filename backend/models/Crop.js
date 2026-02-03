// backend/models/Crop.js

class Crop {
  constructor(farmerName, crop, quantity, status = "Normal") {
    this.farmerName = farmerName;
    this.crop = crop;
    this.quantity = quantity;
    this.status = status;
  }
}

module.exports = Crop;
