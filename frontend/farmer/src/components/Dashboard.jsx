import React from 'react';
import PriceGuidance from './PriceGuidance';

const Dashboard = () => {
  // Mock data (can later fetch from backend)
  const totalCrops = 5;
  const ongoingStatus = 'On Track: 3, Reduced Yield: 1, Failed: 1';
  const activeAgreements = 2;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Farmer Dashboard</h1>

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button className="bg-green-500 text-white p-3 rounded font-semibold hover:bg-green-600 transition">
          Crop Registration
        </button>
        <button className="bg-yellow-500 text-white p-3 rounded font-semibold hover:bg-yellow-600 transition">
          Crop Status Update
        </button>
        <button className="bg-red-500 text-white p-3 rounded font-semibold hover:bg-red-600 transition">
          Failure Reporting
        </button>
      </div>

      {/* Price Guidance */}
      <div className="mb-6">
        <PriceGuidance />
      </div>
    </div>
  );
};

export default Dashboard;
