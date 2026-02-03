function generateCompensationReport(data) {
  return {
    farmerName: data.farmerName,
    cropName: data.cropName,
    expectedYield: data.expectedYield,
    actualYield: data.actualYield,
    failureReason: data.reason,
    failureDate: data.failureDate,
    generatedAt: new Date().toISOString()
  };
}

module.exports = { generateCompensationReport };
