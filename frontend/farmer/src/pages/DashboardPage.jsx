import React from "react";
import { useNavigate } from "react-router-dom";
import PriceGuidance from "../components/PriceGuidance";

const DashboardPage = () => {
  const navigate = useNavigate();

  // Mock summary data
  const totalCrops = 5;
  const ongoingStatus = "On Track: 3, Reduced Yield: 1, Failed: 1";
  const activeAgreements = 2;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        Farmer Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h2 className="font-semibold text-lg">Total Crops</h2>
          <p className="text-2xl font-bold text-green-700">{totalCrops}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h2 className="font-semibold text-lg">Crop Status</h2>
          <p className="text-green-800">{ongoingStatus}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h2 className="font-semibold text-lg">Active Agreements</h2>
          <p className="text-2xl font-bold text-green-700">{activeAgreements}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={() => navigate("/crop-registration")}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded font-semibold transition"
        >
          Crop Registration
        </button>

        <button
          onClick={() => navigate("/crop-status")}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded font-semibold transition"
        >
          Crop Status Update
        </button>

        <button
          onClick={() => navigate("/failure-report")}
          className="bg-green-400 hover:bg-green-500 text-white p-3 rounded font-semibold transition"
        >
          Failure Reporting
        </button>

        <button
          onClick={() => navigate("/compensation-report")}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded font-semibold transition"
        >
          Compensation Report
        </button>

        <button
          onClick={() => navigate("/agreement")}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded font-semibold transition"
        >
          Farmer-Buyer Agreement
        </button>
      </div>

      {/* Price Guidance */}
      <div className="mb-6">
        <PriceGuidance />
      </div>
    </div>
  );
};

export default DashboardPage;
