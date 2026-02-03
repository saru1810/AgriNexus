import React from "react";
import { useNavigate } from "react-router-dom";
import CropStatusUpdateForm from "../components/CropStatusUpdateForm";

const CropStatusPage = () => {
  const navigate = useNavigate();

  // Optional: fetch farmerId from localStorage if needed for API
  // const farmerId = window.localStorage.getItem("farmerId") || "123";

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Crop Status Update</h1>
        
      </div>

      {/* Crop Status Update Form */}
      <div className="max-w-3xl mx-auto">
        <CropStatusUpdateForm />
      </div>
    </div>
  );
};

export default CropStatusPage;
