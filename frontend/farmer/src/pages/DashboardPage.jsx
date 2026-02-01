import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import CropRegistrationForm from "../components/CropRegistrationForm";
import CropStatusUpdateForm from "../components/CropStatusUpdateForm";
import FailureReportForm from "../components/FailureReportForm";
import DocGeneratorButton from "../components/DocGeneratorButton";

const DashboardPage = () => {
  // Sample crops state (can later fetch from backend)
  const [crops, setCrops] = useState([
    { id: 1, name: "Rice", status: "Healthy", type: "Cereal", area: 2 },
    { id: 2, name: "Wheat", status: "Needs Attention", type: "Cereal", area: 1.5 },
  ]);

  // Sample reports state
  const [reports, setReports] = useState([]);

  // Add new crop
  const handleRegisterCrop = (newCrop) => {
    const id = crops.length + 1;
    setCrops([...crops, { ...newCrop, id }]);
    alert(`${newCrop.cropName} registered successfully!`);
  };

  // Update crop status
  const handleUpdateStatus = (cropId, status) => {
    const updatedCrops = crops.map((crop) =>
      crop.id === cropId ? { ...crop, status } : crop
    );
    setCrops(updatedCrops);
    alert("Crop status updated!");
  };

  // Submit failure report
  const handleReportFailure = (report) => {
    setReports([...reports, report]);
    alert("Failure report submitted!");
  };

  return (
    <div className="container mx-auto p-6">
      <Dashboard crops={crops} />

      <CropRegistrationForm onRegister={handleRegisterCrop} />
      <CropStatusUpdateForm crops={crops} onUpdateStatus={handleUpdateStatus} />
      <FailureReportForm onReport={handleReportFailure} />

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Generate Reports</h2>
        <DocGeneratorButton farmerData={{ crops, reports }} />
      </div>
    </div>
  );
};

// src/pages/DashboardPage.jsx
export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Dashboard Page</h2>
      <p>Welcome to the Farmer Dashboard!</p>
    </div>
  );
}

