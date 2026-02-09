// src/api/buyerApi.js
export const getBuyerDemands = async () => {
  // Mock data for grains and millets
  return [
    { crop: "Rice", quantity: 1000, price: 50 },       // 1000 kg at ₹50/kg
    { crop: "Wheat", quantity: 800, price: 45 },      // 800 kg at ₹45/kg
    { crop: "Maize", quantity: 600, price: 40 },      // 600 kg at ₹40/kg
    { crop: "Millets", quantity: 300, price: 60 },    // 300 kg at ₹60/kg
  ];
};
