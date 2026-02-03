import React from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Page Header */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Farmer Dashboard</h1>
        <button
          onClick={() => navigate("/profile")}
          className="bg-gray-50 border px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          My Profile
        </button>
      </div>

      {/* Dashboard Component */}
      <div className="max-w-5xl mx-auto">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
