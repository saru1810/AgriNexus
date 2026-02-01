import React, { useState } from "react";
import CropRegistrationForm from "../components/CropRegistrationForm";

const CropRegistrationPage = () => {
  const [crops, setCrops] = useState([]);

  const handleRegisterCrop = (newCrop) => {
    const id = crops.length + 1;
    setCrops([...crops, { ...newCrop, id }]);
    alert(`${newCrop.cropName} registered successfully!`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Crop Registration
      </h1>

      <CropRegistrationForm onRegister={handleRegisterCrop} />

      {crops.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Registered Crops</h2>
          <ul className="list-disc pl-6">
            {crops.map((crop) => (
              <li key={crop.id}>
                {crop.cropName} ({crop.cropType}) - {crop.area} acres
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// src/pages/CropRegistrationPage.jsx
export default CropRegistrationPage; 

