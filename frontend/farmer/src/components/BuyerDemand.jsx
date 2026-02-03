import React, { useEffect, useState } from "react";
import { getBuyerDemands } from "../api/buyerApi";
import { getCrops } from "../api/farmerApi";
import { Link } from "react-router-dom";

const BuyerDemand = () => {
  const [demands, setDemands] = useState([]);
  const [farmerCrops, setFarmerCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [demandData, cropData] = await Promise.all([
          getBuyerDemands(),
          getCrops(),
        ]);

        setDemands(demandData);
        setFarmerCrops(cropData.map(c => c.cropName.toLowerCase()));
      } catch (err) {
        console.error("Error loading buyer demands", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading buyer demands...</p>;

  return (
    <div className="buyer-demand-container">
      <h2>Buyer Demands</h2>

      <div className="buyer-demand-grid">
        {demands.map((demand) => {
          const cropMatched = farmerCrops.includes(
            demand.crop.toLowerCase()
          );

          return (
            <div className="buyer-demand-card" key={demand.id}>
              <h3>{demand.crop}</h3>

              <p><strong>Quantity:</strong> {demand.quantity} kg</p>
              <p><strong>Buyer:</strong> {demand.buyerName}</p>
              <p><strong>Phone:</strong> {demand.phone}</p>

              {demand.location && (
                <p><strong>Location:</strong> {demand.location}</p>
              )}

              {!cropMatched && (
                <p className="warning-text">
                  You have not registered this crop (you may still proceed)
                </p>
              )}

              <div className="buyer-demand-actions">
                <Link
                  to={`/agreement-preview/${demand.id}`}
                  className="btn secondary"
                >
                  View Agreement
                </Link>

                <Link
                  to={`/agreement-preview/${demand.id}`}
                  className="btn primary"
                >
                  Accept Demand
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyerDemand;
