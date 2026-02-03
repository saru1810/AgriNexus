import React from "react";
import { useNavigate } from "react-router-dom";
import CropRegistrationForm from "../components/CropRegistrationForm";

const CropRegistrationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-green-700">Crop Registration</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-50 border px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          ← Back
        </button>
      </div>

      <div className="bg-white p-5 rounded shadow max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">
          Register your crop details before harvest.  
          This record will be used for planning, monitoring, and compensation support.
        </p>

        {/* Crop Registration Form */}
        <CropRegistrationForm />
      </div>
    </div>
  );
};

export default CropRegistrationPage;
