import React from "react";
import { useNavigate } from "react-router-dom";
import PriceGuidance from "../components/PriceGuidance";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h1 className="text-2xl font-bold">
          Welcome, Farmer
        </h1>
        <p className="text-gray-600">
          Manage your crops, track status, and get advisory support
        </p>
      </div>

      {/* Price Guidance */}
      <div className="mb-6">
        <PriceGuidance />
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => navigate("/crop-registration")}
          className="bg-green-600 text-white p-4 rounded shadow hover:bg-green-700"
        >
          Crop Registration
        </button>

        <button
          onClick={() => navigate("/crop-status")}
          className="bg-blue-600 text-white p-4 rounded shadow hover:bg-blue-700"
        >
          Crop Status Update
        </button>

        <button
          onClick={() => navigate("/failure-report")}
          className="bg-red-600 text-white p-4 rounded shadow hover:bg-red-700"
        >
          Report Crop Failure
        </button>

        <button
          onClick={() => navigate("/compensation-report")}
          className="bg-purple-600 text-white p-4 rounded shadow hover:bg-purple-700"
        >
          Compensation Support Report
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
