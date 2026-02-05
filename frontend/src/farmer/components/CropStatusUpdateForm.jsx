// src/components/CropStatusUpdateForm.jsx
import React, { useState, useEffect } from "react";
import { getCrops, updateCropStatus } from "../api/farmerApi";

const CropStatusUpdateForm = ({ farmerId }) => {
  const [crops, setCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState("");
  const [status, setStatus] = useState("On Track");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const statusOptions = ["On Track", "Reduced Yield", "Crop Failed"];

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const data = await getCrops(); // fetch farmer's registered crops
        setCrops(data);
        if (data.length > 0) setSelectedCrop(data[0].crop); // default first crop
      } catch (err) {
        console.error(err);
        setMessage("Failed to fetch crops.");
      }
    };
    fetchCrops();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCrop || !status || !date) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const payload = { farmerId, crop: selectedCrop, status, date };
      await updateCropStatus(payload);
      setMessage("Crop status updated successfully!");
      setTimeout(() => {
  navigate("/dashboard"); // Redirect to dashboard
}, 1200);
      setDate("");
      setStatus("On Track");
      setSelectedCrop(crops.length > 0 ? crops[0].crop : "");
    } catch (err) {
      console.error(err);
      setMessage("Failed to update crop status. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="crop-status-update-form">
      <h2>Update Crop Status</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Crop Name:</label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            {crops.map((c, idx) => (
              <option key={idx} value={c.crop}>
                {c.crop}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {statusOptions.map((s, idx) => (
              <option key={idx} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Status"}
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default CropStatusUpdateForm;
