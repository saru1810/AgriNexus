import React from "react";
import { useNavigate } from "react-router-dom";
import CompensationReport from "../components/CompensationReport";

const CompensationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Compensation Reports</h1>
        
      </div>

      {/* Compensation Report Component */}
      <div className="max-w-3xl mx-auto">
        <CompensationReport /> {/* Remove farmerId prop */}
      </div>
    </div>
  );
};

export default CompensationPage;
