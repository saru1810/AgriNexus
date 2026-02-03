import React, { useEffect, useState } from "react";
import { getCrops, reportCropFailure, getCompensationReport } from "../api/farmerApi";

const FailureReportForm = () => {
  const [crops, setCrops] = useState([]);
  const [formData, setFormData] = useState({
    cropName: "",
    failureDate: "",
    reason: "",
    description: "",
    photo: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchCrops() {
      try {
        const data = await getCrops();
        setCrops(data);
      } catch (err) {
        console.error("Failed to load crops", err);
      }
    }
    fetchCrops();
  }, []);

  function handleChange(e) {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const payload = new FormData();
      payload.append("cropName", formData.cropName);
      payload.append("failureDate", formData.failureDate);
      payload.append("reason", formData.reason);
      payload.append("description", formData.description);
      if (formData.photo) payload.append("photo", formData.photo);

      await reportCropFailure(payload);

      // auto-trigger compensation (digital proof)
      await getCompensationReport({ cropName: formData.cropName });

      setMessage("Crop failure reported successfully. Compensation initiated.");
      setTimeout(() => {
  navigate("/dashboard"); // Redirect to dashboard
}, 1200);
    } catch (err) {
      console.error(err);
      setMessage("Failed to submit failure report.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="form-container">
      <h2>Crop Failure Report</h2>

      <form onSubmit={handleSubmit}>
        <label>Crop Name</label>
        <select
          name="cropName"
          required
          value={formData.cropName}
          onChange={handleChange}
        >
          <option value="">Select Crop</option>
          {crops.map((crop) => (
            <option key={crop.id} value={crop.cropName}>
              {crop.cropName}
            </option>
          ))}
        </select>

        <label>Date of Failure</label>
        <input
          type="date"
          name="failureDate"
          required
          value={formData.failureDate}
          onChange={handleChange}
        />

        <label>Failure Reason</label>
        <select
          name="reason"
          required
          value={formData.reason}
          onChange={handleChange}
        >
          <option value="">Select Reason</option>
          <option value="Drought">Drought</option>
          <option value="Flood">Flood</option>
          <option value="Pest">Pest Infestation</option>
          <option value="Disease">Disease</option>
          <option value="Other">Other</option>
        </select>

        <label>Description</label>
        <textarea
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          placeholder="Brief description of the crop failure"
        />

        <label>Upload Photo Evidence</label>
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />

        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Failure Report"}
        </button>
      </form>

      {message && <p className="info-text">{message}</p>}
    </div>
  );
};

export default FailureReportForm;
