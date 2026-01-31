import React, { useState } from "react";

const CropStatusUpdateForm = ({ crops, onUpdateStatus }) => {
  const [selectedCropId, setSelectedCropId] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedCropId || !status) {
      alert("Please select a crop and status");
      return;
    }

    // Call parent callback to update the status
    onUpdateStatus(Number(selectedCropId), status);

    // Reset form
    setSelectedCropId("");
    setStatus("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        Update Crop Status
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Select Crop</label>
          <select
            value={selectedCropId}
            onChange={(e) => setSelectedCropId(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">-- Choose Crop --</option>
            {crops.map((crop) => (
              <option key={crop.id} value={crop.id}>
                {crop.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">-- Choose Status --</option>
            <option value="Healthy">Healthy</option>
            <option value="Needs Attention">Needs Attention</option>
            <option value="Diseased">Diseased</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
        >
          Update Status
        </button>
      </form>
    </div>
  );
};

export default CropStatusUpdateForm;
