import React from "react";
import { useNavigate } from "react-router-dom";
import PriceGuidance from "../components/PriceGuidance";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between bg-white p-4 rounded shadow mb-6">
        <h1 className="text-2xl font-bold text-green-700">Welcome, Farmer</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-50 border px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          ← Back
        </button>
      </div>

      <p className="text-gray-600 mb-6">
        Manage your crops, track status, and get advisory support
      </p>

      {/* Price Guidance */}
      <div className="mb-6">
        <PriceGuidance />
      </div>

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <button
          onClick={() => navigate("/crop-registration")}
          className="bg-green-600 text-white p-4 rounded shadow hover:bg-green-700 transition font-semibold"
        >
          Crop Registration
        </button>

        <button
          onClick={() => navigate("/crop-status")}
          className="bg-blue-600 text-white p-4 rounded shadow hover:bg-blue-700 transition font-semibold"
        >
          Crop Status Update
        </button>

        <button
          onClick={() => navigate("/failure-report")}
          className="bg-red-600 text-white p-4 rounded shadow hover:bg-red-700 transition font-semibold"
        >
          Report Crop Failure
        </button>

        <button
          onClick={() => navigate("/compensation-report")}
          className="bg-purple-600 text-white p-4 rounded shadow hover:bg-purple-700 transition font-semibold"
        >
          Compensation Support Report
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
