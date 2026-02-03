import React from "react";
import { useNavigate } from "react-router-dom";
import FailureReportForm from "../components/FailureReportForm";

const FailureReportPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-red-700">Crop Failure Report</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-50 border px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          ← Back
        </button>
      </div>

      <div className="bg-white p-5 rounded shadow max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">
          Report crop failure details accurately.  
          This information will be used for compensation and insurance support.
        </p>

        {/* Failure Report Form */}
        <FailureReportForm />
      </div>
    </div>
  );
};

export default FailureReportPage;
