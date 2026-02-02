import React from "react";
import CropStatusUpdateForm from "../components/CropStatusUpdateForm";

const CropStatusPage = () => {
  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="bg-white p-5 rounded shadow max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">
          Crop Status Update
        </h1>

        <p className="text-gray-600 mb-4">
          Update your crop status periodically.  
          These updates help maintain a reliable record of crop progress.
        </p>

        <CropStatusUpdateForm />
      </div>
    </div>
  );
};

export default CropStatusPage;
