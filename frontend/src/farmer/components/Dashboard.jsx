import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCrops,
  getCropStatuses,
  getAgreements,
  getCompensationReport,
  getPriceGuidance,
} from "../api/farmerApi";
import { getBuyerDemands } from "../api/buyerApi";

const Dashboard = () => {
  const [summary, setSummary] = useState({
    crops: 0,
    statuses: 0,
    agreements: 0,
    compensation: 0,
  });
  const [buyerDemands, setBuyerDemands] = useState([]);
  const [marketPrices, setMarketPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  const basePath = "/farmer"; // All links use this

  // ------------------ Live Market Price (simulated) ------------------
  const cropList = ["Rice", "Wheat", "Maize", "Millets"];
  const generatePrices = () => {
    const prices = cropList.map((crop) => ({
      crop,
      price: (Math.random() * (100 - 20) + 20).toFixed(2),
    }));
    setMarketPrices(prices);
  };

  // ------------------ Load Backend Data ------------------
  useEffect(() => {
    generatePrices(); // initialize live prices
    const priceInterval = setInterval(generatePrices, 5000); // update every 5 sec

    async function loadDashboard() {
      try {
        const [
          crops,
          statuses,
          agreements,
          compensation,
          demands,
        ] = await Promise.all([
          getCrops(),
          getCropStatuses(),
          getAgreements(),
          getCompensationReport(),
          getBuyerDemands(),
        ]);

        setSummary({
          crops: crops.length,
          statuses: statuses.length,
          agreements: agreements.filter((a) => !a.accepted).length,
          compensation: compensation.length,
        });

        setBuyerDemands(demands || []);
      } catch (err) {
        console.error("Dashboard load error", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();

    return () => clearInterval(priceInterval);
  }, []);

  if (loading) return <p>Loading Dashboard...</p>;

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h2>Farmer Dashboard</h2>
        <Link to={`${basePath}/profile`} className="profile-link">
          My Profile
        </Link>
      </header>

      {/* Summary Cards */}
      <div className="dashboard-grid">
        <div className="card">
          <h3>Crop Registration</h3>
          <p>{summary.crops} crops registered</p>
          <Link to={`${basePath}/crop-registration`}>Go</Link>
        </div>

        <div className="card">
          <h3>Crop Status</h3>
          <p>{summary.statuses} updates</p>
          <Link to={`${basePath}/crop-status`}>Go</Link>
        </div>

        <div className="card">
          <h3>Agreements</h3>
          <p>{summary.agreements} pending</p>
          <Link to={`${basePath}/agreements`}>View</Link>
        </div>

        <div className="card">
          <h3>Compensation</h3>
          <p>{summary.compensation} reports</p>
          <Link to={`${basePath}/compensation`}>View</Link>
        </div>
      </div>

      {/* Buyer Demands */}
      <div className="card full-width">
        <h3>Buyer Demands</h3>
        {buyerDemands.length > 0 ? (
          buyerDemands.slice(0, 3).map((d, i) => (
            <p key={i}>
              {d.crop} • {d.quantity} kg • ₹{d.price}/kg
            </p>
          ))
        ) : (
          <p>No buyer requests yet.</p>
        )}
        <Link to={`${basePath}/buyer-demands`}>View All</Link>
      </div>

      {/* Market Prices (live simulated) */}
      <div className="card market-card">
        <h3>Live Market Prices</h3>
        <div className="market-ticker">
          {marketPrices.map((item, idx) => (
            <span key={idx} className="ticker-item">
              {item.crop}: ₹{item.price}/kg
            </span>
          ))}
        </div>
        <small>Last updated: {new Date().toLocaleTimeString()}</small>
      </div>
    </div>
  );
};

export default Dashboard;