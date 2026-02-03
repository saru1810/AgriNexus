function createDemand(demand) {
  const { cropName, quantity, pricePerKg } = demand;

  if (!cropName || !quantity || !pricePerKg) {
    throw new Error("All demand fields required");
  }

  return {
    cropName,
    quantity,
    pricePerKg,
    status: "OPEN"
  };
}

module.exports = { createDemand };
