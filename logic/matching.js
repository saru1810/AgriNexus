function matchCropAndDemand(crops, demands) {
  return demands.map(demand => {
    const matchedCrop = crops.find(
      crop =>
        crop.cropName === demand.cropName &&
        crop.estimatedYield >= demand.quantity &&
        crop.status === "ON_TRACK"
    );

    return {
      cropName: demand.cropName,
      quantity: demand.quantity,
      matchedCropDetails: matchedCrop
        ? {
            sowingDate: matchedCrop.sowingDate,
            harvestDate: matchedCrop.harvestDate
          }
        : null,
      matched: Boolean(matchedCrop)
    };
  });
}

module.exports = { matchCropAndDemand };
