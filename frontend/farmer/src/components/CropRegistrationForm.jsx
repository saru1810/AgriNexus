import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerCrop } from "../api/farmerApi";

const CropRegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cropName: "",
    sowingDate: "",
    harvestDate: "",
    estimatedYield: "",
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

    if (!formData.cropName) tempErrors.cropName = "Crop name is required";
    if (!formData.sowingDate) tempErrors.sowingDate = "Sowing date is required";
    if (!formData.harvestDate)
      tempErrors.harvestDate = "Expected harvest date is required";
    if (
      formData.sowingDate &&
      formData.harvestDate &&
      new Date(formData.harvestDate) <= new Date(formData.sowingDate)
    ) {
      tempErrors.harvestDate = "Harvest date must be after sowing date";
    }
    if (!formData.estimatedYield)
      tempErrors.estimatedYield = "Estimated yield is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await registerCrop(formData); // Send data to backend
      setSuccess("Crop registered successfully!");
      setFormData({
        cropName: "",
        sowingDate: "",
        harvestDate: "",
        estimatedYield: "",
      });
    } catch (err) {
      setErrors({ submit: err.message || "Error registering crop" });
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

      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Crop Registration
      </h2>

      {success && <p className="text-green-600 text-center mb-4">{success}</p>}
      {errors.submit && <p className="text-red-600 text-center mb-4">{errors.submit}</p>}

      <form onSubmit={handleSubmit}>
        {/* Crop Name */}
        <div className="mb-3">
          <label className="block font-semibold mb-1">Crop Name</label>
          <input
            type="text"
            name="cropName"
            value={formData.cropName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g., Rice, Wheat"
          />
          {errors.cropName && <p className="text-red-600 text-sm">{errors.cropName}</p>}
        </div>

        {/* Sowing Date */}
        <div className="mb-3">
          <label className="block font-semibold mb-1">Sowing Date</label>
          <input
            type="date"
            name="sowingDate"
            value={formData.sowingDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.sowingDate && <p className="text-red-600 text-sm">{errors.sowingDate}</p>}
        </div>

        {/* Expected Harvest Date */}
        <div className="mb-3">
          <label className="block font-semibold mb-1">Expected Harvest Date</label>
          <input
            type="date"
            name="harvestDate"
            value={formData.harvestDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.harvestDate && <p className="text-red-600 text-sm">{errors.harvestDate}</p>}
        </div>

        {/* Estimated Yield */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Estimated Yield (Quintals)</label>
          <input
            type="number"
            name="estimatedYield"
            value={formData.estimatedYield}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Approximate value"
          />
          {errors.estimatedYield && <p className="text-red-600 text-sm">{errors.estimatedYield}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded font-semibold hover:bg-green-700 transition"
        >
          Register Crop
        </button>
      </form>
    </div>
  );
};

export default CropRegistrationForm;
