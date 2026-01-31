import React, { useState } from "react";

const CropRegistrationForm = ({ onRegister }) => {
  const [cropName, setCropName] = useState("");
  const [cropType, setCropType] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cropName || !cropType || !area) {
      alert("Please fill all fields");
      return;
    }

    // Call the parent callback to register the crop
    onRegister({ cropName, cropType, area, status: "Healthy" });

    // Reset form
    setCropName("");
    setCropType("");
    setArea("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        Register New Crop
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Crop Name</label>
          <input
            type="text"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g., Rice"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Crop Type</label>
          <input
            type="text"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g., Cereal"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Area (in acres)</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g., 2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
        >
          Register Crop
        </button>
      </form>
    </div>
  );
};

export default CropRegistrationForm;
