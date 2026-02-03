import { useEffect, useState } from "react";
import {
  getDemands,
  deleteDemand,
  updateDemandStatus,
} from "../services/demandService";

const MyDemands = () => {
  const [demands, setDemands] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const loadDemands = () => {
    let data = getDemands();
    
    // ✅ PHASE 7.18 MOCK LOGIC: 
    // If the alert was read, we "simulate" that the Rice demand was mitigated
    const isMitigated = localStorage.getItem("risk_alert_read") === "true";
    data = data.map(d => 
      (d.crop.toLowerCase() === "rice" && isMitigated) 
      ? { ...d, status: "Risk Mitigated", source: "Farmer A ➔ Farmer C" } 
      : { ...d, source: "Original Supplier" }
    );
    
    setDemands(data);
  };

  useEffect(() => {
    loadDemands();
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("❗ Delete this demand?")) return;
    deleteDemand(id);
    loadDemands();
  };

  const handleStatusChange = (id, status) => {
    updateDemandStatus(id, status);
    loadDemands();
  };

  const handleViewResolution = (d) => {
    alert(`📄 AgriNexus Resolution Report (#${d.id})\n\nCrop: ${d.crop}\nIssue: 60% Supply Shortage (Weather)\nAction: Auto-matched with nearby Alternative\nNew Source: Farmer C\nStatus: Secure`);
  };

  const filteredDemands = demands.filter((d) => {
    const matchCrop = d.crop.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" ? true : d.status === statusFilter;
    return matchCrop && matchStatus;
  });

  return (
    <div style={pageWrapper}>
      <h1 style={title}>📋 My Demands</h1>

      <div style={filterBar}>
        <input
          type="text"
          placeholder="🔍 Search crop..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchInput}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={filterSelect}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Matched">Matched</option>
          <option value="Risk Mitigated">Risk Mitigated</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div style={card}>
        {filteredDemands.length === 0 ? (
          <p style={emptyText}>No matching demands found 🚜</p>
        ) : (
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Crop</th>
                <th style={th}>Qty (kg)</th>
                <th style={th}>Status</th>
                <th style={th}>Source Track</th>
                <th style={th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDemands.map((d) => (
                <tr key={d.id}>
                  <td style={td}><strong>{d.crop}</strong></td>
                  <td style={td}>{d.quantity}</td>
                  <td style={td}>
                    <span style={statusBadge(d.status)}>{d.status}</span>
                  </td>
                  <td style={td}><small>{d.source}</small></td>
                  <td style={td}>
                    {d.status === "Risk Mitigated" ? (
                      <button style={resolutionBtn} onClick={() => handleViewResolution(d)}>📄 Report</button>
                    ) : (
                      <button style={deleteBtn} onClick={() => handleDelete(d.id)}>❌ Delete</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

/* styles */
const pageWrapper = { width: "100%", maxWidth: "1100px", margin: "0 auto" };
const title = { fontSize: "26px", marginBottom: "15px", color: "#1b2a3a" };
const filterBar = { display: "flex", gap: "12px", marginBottom: "15px" };
const searchInput = { padding: "10px", borderRadius: "8px", border: "1px solid #ddd", width: "220px" };
const filterSelect = { padding: "10px", borderRadius: "8px", border: "1px solid #ddd" };
const card = { background: "white", borderRadius: "12px", padding: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)" };
const table = { width: "100%", borderCollapse: "collapse", fontSize: "14px" };
const th = { textAlign: "left", padding: "12px", borderBottom: "2px solid #e5e7eb", color: "#374151" };
const td = { padding: "12px", borderBottom: "1px solid #f0f0f0" };
const emptyText = { textAlign: "center", color: "#6b7280", padding: "20px" };

const deleteBtn = { background: "#ef4444", color: "white", border: "none", padding: "6px 10px", borderRadius: "6px", cursor: "pointer" };
const resolutionBtn = { background: "#1b5e20", color: "white", border: "none", padding: "6px 10px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" };

const statusBadge = (status) => ({
  padding: "4px 8px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "bold",
  color: "white",
  background: status === "Risk Mitigated" ? "#059669" : status === "Matched" ? "#16a34a" : status === "Cancelled" ? "#dc2626" : "#f59e0b"
});

export default MyDemands;