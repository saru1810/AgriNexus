function getPriceGuidance(cropName) {
  const prices = {
    rice: { min: 28, max: 35, demand: "HIGH" },
    wheat: { min: 22, max: 27, demand: "MEDIUM" },
    maize: { min: 18, max: 24, demand: "LOW" }
  };

  return prices[cropName.toLowerCase()] || null;
}

module.exports = { getPriceGuidance };
