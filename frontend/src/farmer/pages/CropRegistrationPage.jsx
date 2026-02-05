import React from "react";
import { useNavigate } from "react-router-dom";
import CropRegistrationForm from "../components/CropRegistrationForm";

const CropRegistrationPage = () => {
  const navigate = useNavigate();

  // Optional: fetch farmerId from localStorage if needed for API
  // const farmerId = window.localStorage.getItem("farmerId") || "123";

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Crop Registration</h1>
        
      </div>

      {/* Crop Registration Form */}
      <div className="max-w-3xl mx-auto">
        <CropRegistrationForm />
      </div>
    </div>
  );
};

export default CropRegistrationPage;
