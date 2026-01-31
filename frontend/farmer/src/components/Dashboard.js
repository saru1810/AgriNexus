import React from "react";

const Dashboard = () => {
  // Example data (later can fetch from backend)
  const crops = [
    { id: 1, name: "Rice", status: "Healthy" },
    { id: 2, name: "Wheat", status: "Needs Attention" },
    { id: 3, name: "Maize", status: "Healthy" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Farmer Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="p-4 rounded-lg shadow-md bg-white border-l-4 border-green-500"
          >
            <h2 className="text-xl font-semibold">{crop.name}</h2>
            <p
              className={`mt-2 font-medium ${
                crop.status === "Healthy" ? "text-green-600" : "text-red-600"
              }`}
            >
              Status: {crop.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
