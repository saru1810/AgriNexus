import { useEffect, useState } from "react";
import { getDemands } from "../services/demandService";

const BuyerDashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    matched: 0,
    quantity: 0,
    value: 0,
  });

  useEffect(() => {
    const demands = getDemands();

    const total = demands.length;
    const pending = demands.filter((d) => d.status === "Pending").length;
    const matched = demands.filter((d) => d.status === "Matched").length;

    const quantity = demands.reduce((sum, d) => sum + Number(d.quantity), 0);
    const value = demands.reduce(
      (sum, d) => sum + Number(d.quantity) * Number(d.price),
      0
    );

    setStats({ total, pending, matched, quantity, value });
  }, []);

  return (
    <div style={wrapper}>
      <h1 style={title}>📊 Buyer Dashboard</h1>

      <div style={grid}>
        <div style={card}>
          <h3>Total Demands</h3>
          <p style={number}>{stats.total}</p>
        </div>

        <div style={card}>
          <h3>Pending Demands</h3>
          <p style={number}>{stats.pending}</p>
        </div>

        <div style={card}>
          <h3>Matched Demands</h3>
          <p style={number}>{stats.matched}</p>
        </div>

        <div style={card}>
          <h3>Total Quantity (kg)</h3>
          <p style={number}>{stats.quantity}</p>
        </div>

        <div style={card}>
          <h3>Total Value (₹)</h3>
          <p style={number}>₹{stats.value}</p>
        </div>
      </div>
    </div>
  );
};

/* styles */

const wrapper = {
  width: "100%",
};

const title = {
  fontSize: "26px",
  marginBottom: "20px",
  color: "#1b2a3a",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const number = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#1b5e20",
};

export default BuyerDashboard;
