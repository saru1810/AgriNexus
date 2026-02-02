import React from "react";
import CropRegistrationForm from "../components/CropRegistrationForm";

const CropRegistrationPage = () => {
  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="bg-white p-5 rounded shadow max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">
          Crop Registration
        </h1>

        <p className="text-gray-600 mb-4">
          Register your crop details before harvest.  
          This record will be used for planning, monitoring, and compensation support.
        </p>

        <CropRegistrationForm />
      </div>
    </div>
  );
};

export default CropRegistrationPage;
