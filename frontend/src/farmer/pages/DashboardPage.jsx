import React from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* Page Header */}
      <div className="flex items-center justify-between bg-white p-5 rounded shadow mb-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold"></h1>
        
      </div>

      {/* Dashboard Component */}
      <div className="max-w-5xl mx-auto">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
