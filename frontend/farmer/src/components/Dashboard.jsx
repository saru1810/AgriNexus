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

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [
          crops,
          statuses,
          agreements,
          compensation,
          demands,
          prices,
        ] = await Promise.all([
          getCrops(),
          getCropStatuses(),
          getAgreements(),
          getCompensationReport(),
          getBuyerDemands(),
          getPriceGuidance(),
        ]);

        setSummary({
          crops: crops.length,
          statuses: statuses.length,
          agreements: agreements.filter(a => !a.accepted).length,
          compensation: compensation.length,
        });

        setBuyerDemands(demands);
        setMarketPrices(prices);
      } catch (err) {
        console.error("Dashboard load error", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) return <p>Loading Dashboard...</p>;

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h2>Farmer Dashboard</h2>
        <Link to="/profile" className="profile-link">
          My Profile
        </Link>
      </header>

      {/* Summary Cards */}
      <div className="dashboard-grid">
        <div className="card">
          <h3>Crop Registration</h3>
          <p>{summary.crops} crops registered</p>
          <Link to="/crop-registration">Go</Link>
        </div>

        <div className="card">
          <h3>Crop Status</h3>
          <p>{summary.statuses} updates</p>
          <Link to="/crop-status">Go</Link>
        </div>

        <div className="card">
          <h3>Agreements</h3>
          <p>{summary.agreements} pending</p>
          <Link to="/agreements">View</Link>
        </div>

        <div className="card">
          <h3>Compensation</h3>
          <p>{summary.compensation} reports</p>
          <Link to="/compensation">View</Link>
        </div>
      </div>

      {/* Buyer Demands */}
      <div className="card full-width">
        <h3>Buyer Demands</h3>
        {buyerDemands.slice(0, 3).map((d, i) => (
          <p key={i}>
            {d.crop} • {d.quantity} kg • ₹{d.price}/kg
          </p>
        ))}
        <Link to="/buyer-demands">View All</Link>
      </div>

      {/* Market Price – Gold-rate style */}
      <div className="card market-card">
        <h3>Live Market Prices</h3>
        <div className="market-ticker">
          {marketPrices.map((item, idx) => (
            <span key={idx} className="ticker-item">
              {item.crop}: ₹{item.price}/kg
            </span>
          ))}
        </div>
        <small>Last updated: {new Date().toLocaleString()}</small>
      </div>
    </div>
  );
};

export default Dashboard;
