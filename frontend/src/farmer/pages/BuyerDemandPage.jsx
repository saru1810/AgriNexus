import React, { useEffect, useState } from "react";
import BuyerDemandCard from "../components/BuyerDemand";
import { getBuyerDemands } from "../api/buyerApi";
import { getCrops } from "../api/farmerApi"; // To get farmer's registered crops

const BuyerDemandPage = () => {
  const [demands, setDemands] = useState([]);
  const [farmerCrops, setFarmerCrops] = useState([]);

  useEffect(() => {
    // Fetch buyer demands
    const fetchDemands = async () => {
      try {
        const data = await getBuyerDemands();
        setDemands(data);
      } catch (err) {
        console.error("Error fetching buyer demands:", err);
      }
    };

    // Fetch farmer's registered crops
    const fetchFarmerCrops = async () => {
      try {
        const crops = await getCrops();
        setFarmerCrops(crops.map((c) => c.name.toLowerCase()));
      } catch (err) {
        console.error("Error fetching farmer crops:", err);
      }
    };

    fetchDemands();
    fetchFarmerCrops();
  }, []);

  const handleAccept = (demand) => {
    if (!farmerCrops.includes(demand.crop.toLowerCase())) {
      alert(
        "⚠ You have not registered this crop. This is advisory only, you can still proceed."
      );
    }

    // Navigate to Agreement preview page with demand data
    window.localStorage.setItem("selectedDemand", JSON.stringify(demand));
    window.location.href = "/agreement"; // Or use react-router navigate
  };

  return (
    <div className="buyer-demand-page">
      <h2>📋 Buyer Demands</h2>
      <p>
        View all demands. If your crop matches, the Accept button will be
        enabled.
      </p>

      <div className="demand-cards-container">
        {demands.map((demand, index) => {
          const isMatch = farmerCrops.includes(demand.crop.toLowerCase());
          return (
            <BuyerDemandCard
              key={index}
              demand={demand}
              onAccept={() => handleAccept(demand)}
              acceptEnabled={isMatch}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BuyerDemandPage;
