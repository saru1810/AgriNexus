import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCompensationReport } from "../api/farmerApi";

const CompensationReport = () => {
  const navigate = useNavigate();

  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const data = await getCompensationReport({}); // payload if needed
        setReportData(data);
      } catch (err) {
        setError(err.message || "Error fetching report");
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  const handleExportPDF = () => {
    console.log("Exporting Compensation Report as PDF:", reportData);
    alert("Compensation report exported as PDF (simulation)");
  };

  if (loading)
    return <p className="text-center text-gray-600 mt-6">Loading report...</p>;

  if (error)
    return <p className="text-center text-red-600 mt-6">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-50 border p-2 rounded hover:bg-gray-100 transition"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
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
          <strong>Estimated Yield:</strong> {reportData.estimatedYield}
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
        <p className="mt-1 text-gray-700">{reportData.failureReason}</p>
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
