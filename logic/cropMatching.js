// Rule-based crop matching logic

function matchCrop({ soilType, rainfall, temperature }) {
  if (soilType === "loamy" && rainfall > 100 && temperature < 35) {
    return "Rice";
  }

  if (soilType === "black" && rainfall < 80) {
    return "Cotton";
  }

  if (soilType === "red" && rainfall < 60) {
    return "Millet";
  }

  if (rainfall > 70 && temperature < 30) {
    return "Maize";
  }

  return "Groundnut"; // default safe crop
}

module.exports = { matchCrop };

