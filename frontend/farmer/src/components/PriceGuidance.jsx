import React from "react";

const PriceGuidance = ({ priceData }) => {
  // Use backend data if passed, otherwise fallback to mock
  const data = priceData ?? [
    { crop: "Rice", priceRange: "₹2,200 – ₹2,600 / quintal", demand: "High" },
    { crop: "Wheat", priceRange: "₹2,000 – ₹2,300 / quintal", demand: "Medium" },
    { crop: "Maize", priceRange: "₹1,800 – ₹2,100 / quintal", demand: "Medium" },
    { crop: "Millets", priceRange: "₹2,800 – ₹3,200 / quintal", demand: "High" },
  ];

  const getDemandStyle = (demand) => {
    if (demand === "High") return "text-green-600 font-semibold";
    if (demand === "Medium") return "text-yellow-600 font-semibold";
    return "text-red-600 font-semibold";
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-xl font-bold mb-3 text-center text-green-600">
        Price Guidance (Advisory Only)
      </h2>

      <p className="text-sm text-gray-600 mb-4 text-center">
        Indicative local market prices to help planning. Prices are not fixed.
      </p>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-200 pb-2"
          >
            <span className="font-semibold">{item.crop}</span>
            <span>{item.priceRange}</span>
            <span className={getDemandStyle(item.demand)}>{item.demand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceGuidance;
