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
    const data = getDemands();
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

  // ✅ Filter + Search Logic
  const filteredDemands = demands.filter((d) => {
    const matchCrop = d.crop.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "All" ? true : d.status === statusFilter;
    return matchCrop && matchStatus;
  });

  return (
    <div style={pageWrapper}>
      <h1 style={title}>📋 My Demands</h1>

      {/* ✅ Search + Filter UI */}
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
                <th style={th}>Quantity (kg)</th>
                <th style={th}>Price (₹)</th>
                <th style={th}>Status</th>
                <th style={th}>Created</th>
                <th style={th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDemands.map((d) => (
                <tr key={d.id}>
                  <td style={td}>{d.crop}</td>
                  <td style={td}>{d.quantity}</td>
                  <td style={td}>₹{d.price}</td>

                  <td style={td}>
                    <select
                      value={d.status}
                      onChange={(e) =>
                        handleStatusChange(d.id, e.target.value)
                      }
                      style={{
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                        background: statusColor(d.status),
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Matched">Matched</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                  <td style={td}>
                    {new Date(d.createdAt).toLocaleDateString()}
                  </td>

                  <td style={td}>
                    <button
                      style={deleteBtn}
                      onClick={() => handleDelete(d.id)}
                    >
                      ❌ Delete
                    </button>
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

const pageWrapper = {
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
};

const title = {
  fontSize: "26px",
  marginBottom: "10px",
  color: "#1b2a3a",
};

const filterBar = {
  display: "flex",
  gap: "12px",
  marginBottom: "15px",
};

const searchInput = {
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  width: "220px",
};

const filterSelect = {
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

const card = {
  background: "white",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  overflowX: "auto",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "15px",
};

const th = {
  textAlign: "left",
  padding: "12px",
  borderBottom: "2px solid #e5e7eb",
  color: "#374151",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #f0f0f0",
};

const emptyText = {
  textAlign: "center",
  color: "#6b7280",
  padding: "20px",
  fontSize: "16px",
};

const deleteBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "6px 10px",
  borderRadius: "6px",
  cursor: "pointer",
};

const statusColor = (status) => {
  if (status === "Matched") return "#16a34a";
  if (status === "Cancelled") return "#dc2626";
  return "#f59e0b";
};

export default MyDemands;
