function registerCrop(data) {
  const { cropName, sowingDate, harvestDate, estimatedYield } = data;

  if (!cropName || !sowingDate || !harvestDate || !estimatedYield) {
    throw new Error("All crop fields required");
  }

  if (new Date(harvestDate) <= new Date(sowingDate)) {
    throw new Error("Harvest date must be after sowing date");
  }

  return {
    cropName,
    sowingDate,
    harvestDate,
    estimatedYield,
    status: "ON_TRACK"
  };
}

module.exports = { registerCrop };
