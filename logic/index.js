const { matchCrop } = require("./cropMatching");
const { detectFailure } = require("./failureHandling");
const { calculateCompensation } = require("./compensation");

function processFarmerData(data) {
  const recommendedCrop = matchCrop(data);

  const failureResult = detectFailure({
    expectedYield: data.expectedYield,
    actualYield: data.actualYield
  });

  let compensation = null;

  if (failureResult.failed) {
    compensation = calculateCompensation({
      lossPercentage: failureResult.lossPercentage,
      landArea: data.landArea
    });
  }

  return {
    recommendedCrop,
    failureResult,
    compensation
  };
}

module.exports = { processFarmerData };
