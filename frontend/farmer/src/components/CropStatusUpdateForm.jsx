import React, { useState } from "react";

const CropStatusUpdateForm = () => {
  // Mock crop list (later from backend)
  const crops = ["Rice", "Wheat", "Maize", "Millets"];

  const [formData, setFormData] = useState({
    cropName: "",
    status: "",
    updateDate: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.cropName) tempErrors.cropName = "Please select a crop";
    if (!formData.status) tempErrors.status = "Please select crop status";
    if (!formData.updateDate)
      tempErrors.updateDate = "Update date is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Crop Status Updated:", formData);

    setSuccess("Crop status updated successfully!");

    setFormData({
      cropName: "",
      status: "",
      updateDate: "",
      notes: "",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Crop Status Update
      </h2>

      {success && (
        <p className="text-green-600 text-center mb-4">{success}</p>
      )}

      <form onSubmit={handleSubmit}>
        {/* Crop Selection */}
        <div className="mb-3">
          <label className="block font-semibold mb-1">Crop</label>
          <select
            name="cropName"
            value={formData.cropName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Select Crop --</option>
            {crops.map((crop, index) => (
              <option key={index} value={crop}>
                {crop}
              </option>
            ))}
          </select>
          {errors.cropName && (
            <p className="text-red-600 text-sm">{errors.cropName}</p>
          )}
        </div>

        {/* Status */}
        <div className="mb-3">
          <label className="block font-semibold mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Select Status --</option>
            <option value="On Track">On Track</option>
            <option value="Reduced Yield">Reduced Yield</option>
            <option value="Crop Failed">Crop Failed</option>
          </select>
          {errors.status && (
            <p className="text-red-600 text-sm">{errors.status}</p>
          )}
        </div>

        {/* Update Date */}
        <div className="mb-3">
          <label className="block font-semibold mb-1">
            Status Update Date
          </label>
          <input
            type="date"
            name="updateDate"
            value={formData.updateDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.updateDate && (
            <p className="text-red-600 text-sm">{errors.updateDate}</p>
          )}
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            Notes (optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="3"
            placeholder="Any observations..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-2 rounded font-semibold hover:bg-yellow-600 transition"
        >
          Update Status
        </button>
      </form>
    </div>
  );
};

export default CropStatusUpdateForm;
