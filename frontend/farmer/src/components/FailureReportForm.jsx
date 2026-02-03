import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reportCropFailure } from "../api/farmerApi";

const FailureReportForm = () => {
  const navigate = useNavigate();

  // Mock crops list (later from backend)
  const crops = ["Rice", "Wheat", "Maize", "Millets"];

  const [formData, setFormData] = useState({
    cropName: "",
    failureDate: "",
    reason: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess("");
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.cropName) tempErrors.cropName = "Please select a crop";
    if (!formData.failureDate) tempErrors.failureDate = "Failure date is required";
    if (!formData.reason) tempErrors.reason = "Cause / reason is mandatory";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await reportCropFailure(formData); // Send data to backend
      setSuccess("Crop failure reported successfully!");
      setFormData({
        cropName: "",
        failureDate: "",
        reason: "",
        notes: "",
      });
    } catch (err) {
      setErrors({ submit: err.message || "Error submitting report" });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-50 border p-2 rounded hover:bg-gray-100 transition"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
        Crop Failure Report
      </h2>

      {success && <p className="text-green-600 text-center mb-4">{success}</p>}
      {errors.submit && <p className="text-red-600 text-center mb-4">{errors.submit}</p>}

      <form onSubmit={handleSubmit}>
        {/* Crop Selection */}
        <div className="mb-3">
          <label className="block font-semibold mb-1">Crop</label>
          <select
            name="cropName"
            value={formData.cropName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">-- Select Crop --</option>
            {crops.map((crop, index) => (
              <option key={index} value={crop}>
                {crop}
              </option>
            ))}
          </select>
          {errors.cropName && <p className="text-red-600 text-sm">{errors.cropName}</p>}
        </div>

        {/* Failure Date */}
        <div className="mb-3">
          <label className="block font-semibold mb-1">Date of Failure</label>
          <input
            type="date"
            name="failureDate"
            value={formData.failureDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.failureDate && <p className="text-red-600 text-sm">{errors.failureDate}</p>}
        </div>

        {/* Cause / Reason */}
        <div className="mb-3">
          <label className="block font-semibold mb-1">Cause / Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            rows="3"
            placeholder="e.g., Flood, drought, pest attack, disease"
          />
          {errors.reason && <p className="text-red-600 text-sm">{errors.reason}</p>}
        </div>

        {/* Additional Notes */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Additional Notes (optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            rows="2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded font-semibold hover:bg-red-700 transition"
        >
          Submit Failure Report
        </button>
      </form>
    </div>
  );
};

export default FailureReportForm;
