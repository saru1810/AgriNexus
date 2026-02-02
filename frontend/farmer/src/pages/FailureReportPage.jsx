import React from "react";
import FailureReportForm from "../components/FailureReportForm";

const FailureReportPage = () => {
  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="bg-white p-5 rounded shadow max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-2 text-red-700">
          Crop Failure Report
        </h1>

        <p className="text-gray-600 mb-4">
          Report crop failure details accurately.  
          This information will be used for compensation and insurance support.
        </p>

        <FailureReportForm />
      </div>
    </div>
  );
};

export default FailureReportPage;
