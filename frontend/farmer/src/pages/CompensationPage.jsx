import React from "react";
import { useNavigate } from "react-router-dom";
import CompensationReport from "../components/CompensationReport";

const CompensationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-purple-700">
          Compensation Support Report
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-200 transition"
        >
          ← Back
        </button>
      </div>

      {/* Description */}
      <div className="bg-white p-5 rounded shadow max-w-3xl mx-auto mb-6">
        <p className="text-gray-600">
          This report compiles your crop records and failure details. You may
          use this document for government or insurance claims.
        </p>
      </div>

      {/* Compensation Report Component */}
      <CompensationReport />
    </div>
  );
};

export default CompensationPage;
