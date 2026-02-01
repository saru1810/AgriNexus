import React, { useState } from "react";
import CropStatusUpdateForm from "../components/CropStatusUpdateForm";

const CropStatusPage = () => {
  const [crops, setCrops] = useState([
    { id: 1, name: "Rice", status: "Healthy" },
    { id: 2, name: "Wheat", status: "Needs Attention" },
    { id: 3, name: "Maize", status: "Healthy" },
  ]);

  const handleUpdateStatus = (cropId, status) => {
    const updatedCrops = crops.map((crop) =>
      crop.id === cropId ? { ...crop, status } : crop
    );
    setCrops(updatedCrops);
    alert("Crop status updated!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Update Crop Status
      </h1>

      <CropStatusUpdateForm crops={crops} onUpdateStatus={handleUpdateStatus} />

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Current Crop Status</h2>
        <ul className="list-disc pl-6">
          {crops.map((crop) => (
            <li key={crop.id}>
              {crop.name}:{" "}
              <span
                className={
                  crop.status === "Healthy"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {crop.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// src/pages/CropStatusPage.jsx
export default CropStatusPage; 

