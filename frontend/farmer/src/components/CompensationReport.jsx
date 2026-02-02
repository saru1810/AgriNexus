import React from "react";

const CompensationReport = () => {
  // Mock data (later comes from backend)
  const reportData = {
    cropName: "Rice",
    sowingDate: "2025-06-10",
    expectedHarvestDate: "2025-10-15",
    estimatedYield: "40 quintals",
    actualYield: "15 quintals",
    failureDate: "2025-09-20",
    failureReason: "Flood damage due to heavy rainfall",
  };

  const handleExportPDF = () => {
    console.log("Exporting Compensation Report as PDF:", reportData);
    alert("Compensation report exported as PDF (simulation)");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Compensation Support Report
      </h2>

      <p className="text-sm text-gray-600 mb-6 text-center">
        This report can be used for government compensation or insurance claims.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <strong>Crop Name:</strong> {reportData.cropName}
        </div>
        <div>
          <strong>Sowing Date:</strong> {reportData.sowingDate}
        </div>
        <div>
          <strong>Expected Harvest Date:</strong>{" "}
          {reportData.expectedHarvestDate}
        </div>
        <div>
          <strong>Estimated Yield:</strong>{" "}
          {reportData.estimatedYield}
        </div>
        <div>
          <strong>Actual Yield:</strong> {reportData.actualYield}
        </div>
        <div>
          <strong>Failure Date:</strong> {reportData.failureDate}
        </div>
      </div>

      <div className="mb-6">
        <strong>Failure Reason:</strong>
        <p className="mt-1 text-gray-700">
          {reportData.failureReason}
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={handleExportPDF}
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Export as PDF
        </button>
      </div>
    </div>
  );
};

export default CompensationReport;
