// src/components/CropRegistrationForm.jsx
import React, { useState } from "react";
import { registerCrop } from "../api/farmerApi";

const CropRegistrationForm = ({ farmerId }) => {
  const [crop, setCrop] = useState("Rice");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const cropOptions = ["Rice", "Wheat", "Maize", "Millets"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!crop || !quantity || !price || !harvestDate) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const payload = { farmerId, crop, quantity, price, harvestDate };
      await registerCrop(payload);
      setMessage("Crop registered successfully!");
      // clear form
      setQuantity("");
      setPrice("");
      setHarvestDate("");
      setCrop("Rice");
    } catch (err) {
      console.error(err);
      setMessage("Failed to register crop. Please try again.");
      setTimeout(() => {
  navigate("/dashboard"); // Redirect to dashboard
}, 1200);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="crop-registration-form">
      <h2>Register New Crop</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Crop Name:</label>
          <select value={crop} onChange={(e) => setCrop(e.target.value)}>
            {cropOptions.map((c, idx) => (
              <option key={idx} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Quantity (kg):</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>Expected Price (₹/kg):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>Expected Harvest Date:</label>
          <input
            type="date"
            value={harvestDate}
            onChange={(e) => setHarvestDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register Crop"}
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default CropRegistrationForm;
