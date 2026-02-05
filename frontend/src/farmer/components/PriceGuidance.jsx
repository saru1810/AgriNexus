import React, { useEffect, useState } from "react";
import "./PriceGuidance.css";

const PriceGuidance = () => {
  const [prices, setPrices] = useState([]);

  // Simulated market price data (like gold rate concept)
  useEffect(() => {
    const marketPrices = [
      { crop: "Rice", price: 42, trend: "up" },
      { crop: "Wheat", price: 35, trend: "stable" },
      { crop: "Maize", price: 28, trend: "down" },
      { crop: "Millets", price: 55, trend: "up" },
    ];

    setPrices(marketPrices);
  }, []);

  return (
    <div className="price-guidance-container">
      <h2>📈 Market Price Guidance</h2>
      <p className="subtitle">
        Updated daily based on market trends (indicative only)
      </p>

      <table className="price-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Crop Name</th>
            <th>Price (₹ / kg)</th>
            <th>Trend</th>
          </tr>
        </thead>

        <tbody>
          {prices.map((item, index) => (
            <tr key={index}>
              <td>{new Date().toLocaleDateString()}</td>
              <td>{item.crop}</td>
              <td>₹ {item.price}</td>
              <td>
                {item.trend === "up" && (
                  <span className="trend up">⬆ Rising</span>
                )}
                {item.trend === "down" && (
                  <span className="trend down">⬇ Falling</span>
                )}
                {item.trend === "stable" && (
                  <span className="trend stable">➡ Stable</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="note">
        ⚠ Prices shown are advisory. Farmers are free to accept or reject buyer
        offers based on their own judgment.
      </div>
    </div>
  );
};

export default PriceGuidance;
