import React from "react";
import { useNavigate } from "react-router-dom";
import PriceGuidance from "./PriceGuidance";
import DocGeneratorButton from "./DocGeneratorButton";

const Dashboard = ({ summaryData }) => {
  const navigate = useNavigate();

  // Use backend data if passed, otherwise fallback to mock
  const totalCrops = summaryData?.totalCrops ?? 5;
  const ongoingStatus = summaryData?.ongoingStatus ?? "On Track: 3, Reduced Yield: 1, Failed: 1";
  const activeAgreements = summaryData?.activeAgreements ?? 2;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mb-4 bg-gray-50 border p-2 rounded hover:bg-gray-100 transition"
      >
        ← Back
      </button>

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
        Farmer Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="font-semibold text-lg">Total Crops</h2>
          <p className="text-2xl font-bold text-green-600">{totalCrops}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="font-semibold text-lg">Crop Status</h2>
          <p className="text-gray-700">{ongoingStatus}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="font-semibold text-lg">Active Agreements</h2>
          <p className="text-2xl font-bold text-green-600">{activeAgreements}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => navigate("/crop-registration")}
          className="bg-green-600 text-white p-3 rounded font-semibold hover:bg-green-700 transition"
        >
          Crop Registration
        </button>
        <button
          onClick={() => navigate("/crop-status")}
          className="bg-yellow-600 text-white p-3 rounded font-semibold hover:bg-yellow-700 transition"
        >
          Crop Status Update
        </button>
        <button
          onClick={() => navigate("/failure-report")}
          className="bg-red-600 text-white p-3 rounded font-semibold hover:bg-red-700 transition"
        >
          Failure Reporting
        </button>
        <DocGeneratorButton />
      </div>

      {/* Price Guidance */}
      <div className="mb-6">
        <PriceGuidance />
      </div>
    </div>
  );
};

export default Dashboard;
