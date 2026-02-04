import React from "react";
import { useNavigate } from "react-router-dom";
import FailureReportForm from "../components/FailureReportForm";

const FailureReportPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Report Crop Failure</h1>
        
      </div>

      {/* Failure Report Form */}
      <div className="max-w-3xl mx-auto">
        <FailureReportForm />
      </div>
    </div>
  );
};

export default FailureReportPage;
