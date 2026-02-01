import React, { useState } from "react";
import FailureReportForm from "../components/FailureReportForm";

const FailureReportPage = () => {
  const [reports, setReports] = useState([]);

  const handleReport = (report) => {
    setReports([...reports, report]);
    alert("Failure report submitted!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-700">
        Report Crop Failure
      </h1>

      <FailureReportForm onReport={handleReport} />

      {reports.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Submitted Reports</h2>
          <ul className="list-disc pl-6">
            {reports.map((report, index) => (
              <li key={index}>
                <strong>{report.cropName}</strong> - {report.issue} (
                <span
                  className={
                    report.severity === "High"
                      ? "text-red-600"
                      : report.severity === "Medium"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }
                >
                  {report.severity}
                </span>
                ) on {report.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// src/pages/FailureReportPages.jsx
export default FailureReportPage;
  

