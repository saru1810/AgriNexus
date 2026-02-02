import React from "react";

const PriceGuidance = () => {
  // Advisory-only mock data (can later come from backend)
  const priceData = [
    {
      crop: "Rice",
      priceRange: "₹2,200 – ₹2,600 / quintal",
      demand: "High",
    },
    {
      crop: "Wheat",
      priceRange: "₹2,000 – ₹2,300 / quintal",
      demand: "Medium",
    },
    {
      crop: "Maize",
      priceRange: "₹1,800 – ₹2,100 / quintal",
      demand: "Medium",
    },
    {
      crop: "Millets",
      priceRange: "₹2,800 – ₹3,200 / quintal",
      demand: "High",
    },
  ];

  const getDemandStyle = (demand) => {
    if (demand === "High") return "text-green-600 font-semibold";
    if (demand === "Medium") return "text-yellow-600 font-semibold";
    return "text-red-600 font-semibold";
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-xl font-bold mb-3 text-center">
        Price Guidance (Advisory Only)
      </h2>

      <p className="text-sm text-gray-600 mb-4 text-center">
        Indicative local market prices to help planning. Prices are not fixed.
      </p>

      <div className="space-y-3">
        {priceData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2"
          >
            <span className="font-semibold">{item.crop}</span>
            <span>{item.priceRange}</span>
            <span className={getDemandStyle(item.demand)}>
              {item.demand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceGuidance;
