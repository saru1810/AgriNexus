import { useState, useEffect } from "react";

const SupplyDemand = () => {
  const [isRiskActive, setIsRiskActive] = useState(false);

  useEffect(() => {
    // Check if the user navigated here via the Risk Alert on the Dashboard
    const isRead = localStorage.getItem("risk_alert_read") === "true";
    setIsRiskActive(isRead);
  }, []);

  const data = [
    { crop: "Rice", quantity: 1000, price: 40, supplier: "Farmer A" },
    { crop: "Wheat", quantity: 500, price: 35, supplier: "Farmer B" },
  ];

  // Hardcoded alternative for Phase 5.11 Demo
  const alternatives = [
    { crop: "Rice", quantity: "600 (Gap Filler)", price: 42, supplier: "Farmer C", trust: "4.9 ⭐" },
  ];

  return (
    <div style={container}>
      <h1 style={titleStyle}>🤝 Supply vs Demand Matching</h1>

      {/* ✅ Phase 5.11: Alternative Matches UI (Visible only after Risk Alert) */}
      {isRiskActive && (
        <div style={alternativeSection}>
          <div style={altHeader}>
            <h3 style={{ margin: 0, color: '#2c5282' }}>⚡ Recommended Alternatives</h3>
            <span style={urgentTag}>Emergency Recovery</span>
          </div>
          <p style={{ fontSize: '14px', color: '#4a5568', margin: '10px 0' }}>
            To fulfill your <strong>Rice</strong> deficit caused by the recent alert, we recommend these high-trust farmers:
          </p>
          
          <table style={altTable}>
            <tbody>
              {alternatives.map((alt, idx) => (
                <tr key={idx} style={altRow}>
                  <td style={td}><strong>{alt.crop}</strong></td>
                  <td style={td}>{alt.quantity} kg</td>
                  <td style={td}>₹{alt.price}</td>
                  <td style={td}>{alt.supplier} <br/><small style={{color: '#2b6cb0'}}>{alt.trust}</small></td>
                  <td style={td}>
                    <button style={agreeBtn}>Quick Match</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Regular Supply Table */}
      <div style={tableWrapper}>
        <h3 style={{marginTop: 0, color: '#1b5e20'}}>Global Supply Pool</h3>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Crop</th>
              <th style={th}>Quantity (kg)</th>
              <th style={th}>Price (₹)</th>
              <th style={th}>Supplier</th>
              <th style={th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={td}>{item.crop}</td>
                <td style={td}>{item.quantity}</td>
                <td style={td}>{item.price}</td>
                <td style={td}>{item.supplier}</td>
                <td style={td}>
                  <button style={btn}>Agree</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ===== Styles ===== */
const container = { width: "100%" };
const titleStyle = { fontSize: "32px", marginBottom: "20px", color: "#1b2a3a" };

const tableWrapper = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  width: "100%",
};

const alternativeSection = {
  background: '#ebf8ff',
  border: '2px solid #3182ce',
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '30px',
  boxShadow: '0 4px 15px rgba(49, 130, 206, 0.2)',
};

const altHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const urgentTag = { background: '#3182ce', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' };

const altTable = { width: '100%', background: 'white', borderRadius: '8px', borderCollapse: 'collapse', marginTop: '10px' };
const altRow = { border: '1px solid #bee3f8' };

const table = { width: "100%", borderCollapse: "collapse", textAlign: "center" };
const th = { backgroundColor: "#1b5e20", color: "white", padding: "12px", fontSize: "16px" };
const td = { padding: "12px", borderBottom: "1px solid #e0e0e0", fontSize: "15px" };

const btn = { backgroundColor: "#ff9800", border: "none", color: "black", padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" };
const agreeBtn = { backgroundColor: "#3182ce", border: "none", color: "white", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" };

export default SupplyDemand;