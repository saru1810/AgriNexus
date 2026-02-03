import { useEffect, useState } from "react";
import { getDemands } from "../services/demandService";
import { useNavigate, useOutletContext } from "react-router-dom";

// ✅ Step 1 Feature: Risk Alert Component
const RiskAlert = ({ message, onClear }) => (
  <div style={alertContainer}>
    <div style={alertIcon}>⚠️</div>
    <div style={alertTextContainer}>
      <h4 style={alertTitle}>Supply Impact Alert (Phase 5.10)</h4>
      <p style={alertDescription}>{message}</p>
    </div>
    <button style={viewBtn} onClick={onClear}>
      View Alternatives
    </button>
  </div>
);

const BuyerDashboard = () => {
  const navigate = useNavigate();
  const { setHasAlert } = useOutletContext();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    matched: 0,
    quantity: 0,
    value: 0,
  });

  useEffect(() => {
    // Check alert status
    const isRead = localStorage.getItem("risk_alert_read") === "true";
    setIsAlertVisible(!isRead);

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

  const handleClearAlert = () => {
    localStorage.setItem("risk_alert_read", "true");
    setIsAlertVisible(false);
    setHasAlert(false);
    navigate('/buyer/supply-demand');
  };

  return (
    <div style={wrapper}>
      <h1 style={title}>📊 Buyer Dashboard</h1>

      {isAlertVisible && (
        <RiskAlert 
          message="Your agreed supply of Rice (1000kg) from Farmer A has been updated to 400kg due to weather failure." 
          onClear={handleClearAlert}
        />
      )}

      <div style={grid}>
        {/* ✅ Step 2: Trust Score Breakdown (Phase 7.16) */}
        <div style={trustCard}>
          <div style={trustHeader}>
            <h3 style={{ margin: 0, fontSize: '18px' }}>Buyer Trust Rating</h3>
            <span style={phaseTag}>Phase 7.16</span>
          </div>
          
          <div style={ratingFlex}>
            <p style={trustNumber}>4.8</p>
            <div style={starContainer}>
              <span style={starActive}>★★★★<span style={starInactive}>★</span></span>
              <p style={reliabilityText}>98% Reliability Score</p>
            </div>
          </div>

          <div style={breakdownContainer}>
            <div style={breakdownRow}>
              <span>Agreement Fulfillment</span>
              <span style={greenText}>100%</span>
            </div>
            <div style={breakdownRow}>
              <span>Demand Accuracy</span>
              <span style={greenText}>92%</span>
            </div>
          </div>
        </div>

        {/* Existing Stats Cards */}
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
          <p style={number}>₹{stats.value.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

/* --- Updated Styles --- */

const wrapper = { width: "100%" };
const title = { fontSize: "26px", marginBottom: "20px", color: "#1b2a3a" };
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

const number = { fontSize: "28px", fontWeight: "bold", color: "#1b5e20" };

// ✅ Trust Card Specific Styles
const trustCard = {
  background: "linear-gradient(135deg, #ffffff 0%, #f1f8e9 100%)",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  border: "1px solid #c8e6c9",
  gridColumn: "span 2", // Makes the card stand out
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const trustHeader = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" };
const phaseTag = { fontSize: "10px", background: "#1b5e20", color: "white", padding: "2px 8px", borderRadius: "10px", fontWeight: "bold" };
const ratingFlex = { display: "flex", alignItems: "center", gap: "20px", marginBottom: "10px" };
const trustNumber = { fontSize: "42px", fontWeight: "bold", color: "#1b5e20", margin: 0 };
const starContainer = { display: "flex", flexDirection: "column" };
const starActive = { color: "#fbc02d", fontSize: "20px", letterSpacing: '2px' };
const starInactive = { color: "#e0e0e0" };
const reliabilityText = { margin: "4px 0 0 0", fontSize: "12px", color: "#666", fontWeight: "bold" };
const breakdownContainer = { borderTop: "1px solid #e0e0e0", paddingTop: "10px", marginTop: "5px" };
const breakdownRow = { display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#555", marginBottom: "3px" };
const greenText = { color: "#2e7d32", fontWeight: "bold" };

// Alert Styles (Step 1)
const alertContainer = { display: 'flex', alignItems: 'center', background: '#fff5f5', border: '1px solid #feb2b2', borderLeft: '5px solid #e53e3e', padding: '20px', borderRadius: '10px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' };
const alertIcon = { fontSize: '24px', marginRight: '20px' };
const alertTextContainer = { flex: 1 };
const alertTitle = { margin: 0, color: '#c53030', fontSize: '16px', fontWeight: 'bold' };
const alertDescription = { margin: '5px 0 0', color: '#742a2a', fontSize: '14px' };
const viewBtn = { background: '#e53e3e', color: 'white', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', marginLeft: '20px', whiteSpace: 'nowrap' };

export default BuyerDashboard;