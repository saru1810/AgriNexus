// Compensation calculation logic

function calculateCompensation({ lossPercentage, landArea }) {
  const baseRatePerAcre = 5000; // government assumed value

  let compensationFactor = 0;

  if (lossPercentage > 50) compensationFactor = 1;
  else if (lossPercentage > 25) compensationFactor = 0.6;
  else compensationFactor = 0.3;

  const compensation =
    landArea * baseRatePerAcre * compensationFactor;

  return {
    compensationAmount: Math.round(compensation),
    currency: "INR"
  };
}

module.exports = { calculateCompensation };
