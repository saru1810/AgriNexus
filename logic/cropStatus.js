function updateCropStatus(crop, status) {
  crop.status = status;
  crop.lastUpdated = new Date().toISOString();
  return crop;
}

module.exports = { updateCropStatus };
