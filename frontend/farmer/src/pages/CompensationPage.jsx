import React from "react";
import CompensationReport from "../components/CompensationReport";

const CompensationPage = () => {
  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="bg-white p-5 rounded shadow max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-3 text-purple-700">
          Compensation Support Report
        </h1>

        <p className="text-gray-600 mb-4">
          This report compiles your crop records and failure details.
          You may use this document for government or insurance claims.
        </p>

        <CompensationReport />
      </div>
    </div>
  );
};

export default CompensationPage;
