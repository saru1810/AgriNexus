// Crop failure analysis logic

function detectFailure({ expectedYield, actualYield }) {
  if (actualYield >= expectedYield) {
    return {
      failed: false,
      reason: "Successful harvest"
    };
  }

  const lossPercentage =
    ((expectedYield - actualYield) / expectedYield) * 100;

  let severity = "LOW";

  if (lossPercentage > 50) severity = "HIGH";
  else if (lossPercentage > 25) severity = "MEDIUM";

  return {
    failed: true,
    lossPercentage: Math.round(lossPercentage),
    severity
  };
}

module.exports = { detectFailure };
