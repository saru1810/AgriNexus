import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyerRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    mobile: "",
    district: "",
    buyerType: "Wholesaler",
    gst: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Professional Registration Data:", formData);
    alert("Registration Successful!");
    navigate("/buyer/dashboard");
  };

  return (
    <div style={container}>
      <div style={headerSection}>
        <h2 style={title}>📝 Register as a Buyer</h2>
        <p style={subtitle}>Join the AgriNexus ecosystem to connect directly with farmers.</p>
      </div>

      <div style={formCard}>
        <form onSubmit={handleSubmit} style={formGrid}>
          {/* Business Name */}
          <div style={inputGroup}>
            <label style={label}>Business / Personal Name</label>
            <input
              type="text"
              placeholder="e.g. Saravana Traders"
              style={input}
              required
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            />
          </div>

          {/* Mobile Number */}
          <div style={inputGroup}>
            <label style={label}>Mobile Number</label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              style={input}
              required
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
          </div>

          {/* Buyer Type Dropdown */}
          <div style={inputGroup}>
            <label style={label}>Buyer Category</label>
            <select 
              style={input} 
              onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
            >
              <option value="Wholesaler">Wholesaler</option>
              <option value="Retailer">Retailer</option>
              <option value="Food Processor">Food Processor</option>
              <option value="Exporter">Exporter</option>
            </select>
          </div>

          {/* District Selection */}
          <div style={inputGroup}>
            <label style={label}>Operating District (Tamil Nadu)</label>
            <select 
              style={input} 
              required
              onChange={(e) => setFormData({ ...formData, district: e.target.value })}
            >
              <option value="">Select District</option>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Madurai">Madurai</option>
              <option value="Thanjavur">Thanjavur</option>
            </select>
          </div>

          {/* GST - Optional but builds trust */}
          <div style={fullWidthInput}>
            <label style={label}>GST Number (Optional)</label>
            <input
              type="text"
              placeholder="Enter GSTIN for higher trust score"
              style={input}
              onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
            />
          </div>

          <div style={buttonContainer}>
            <button type="submit" style={submitButton}>
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- UPDATED STYLES FOR LAYOUT FIXES ---

const container = {
  width: "100%",
  maxWidth: "1000px", // Limits width to prevent horizontal stretching
  margin: "0 auto",
  padding: "20px",
  boxSizing: "border-box", // Essential to keep padding inside the width
};

const headerSection = {
  marginBottom: "30px",
};

const title = {
  fontSize: "28px",
  color: "#333",
  marginBottom: "8px",
};

const subtitle = {
  color: "#666",
  fontSize: "16px",
};

const formCard = {
  background: "white",
  padding: "30px", // Reduced from 40px to save space
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)", // Matches dashboard theme
  width: "100%",
  boxSizing: "border-box", // Prevents overflow
};

const formGrid = {
  display: "grid",
  // auto-fit handles responsiveness automatically
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
  gap: "20px",
};

const inputGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const fullWidthInput = {
  gridColumn: "1 / -1", // Spans the full width of the grid
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const label = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#444",
};

const input = {
  padding: "12px 15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.2s",
  width: "100%", // Ensures input fills the grid cell
  boxSizing: "border-box",
};

const buttonContainer = {
  gridColumn: "1 / -1",
  marginTop: "10px",
};

const submitButton = {
  background: "#1b5e20", // Matches sidebar
  color: "white",
  padding: "14px 30px",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.3s",
  width: "100%",
};

export default BuyerRegistration;