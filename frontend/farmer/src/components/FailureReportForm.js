import React, { useState } from "react";

const FailureReportForm = ({ onReport }) => {
  const [cropName, setCropName] = useState("");
  const [issue, setIssue] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cropName || !issue || !severity) {
      alert("Please fill all fields");
      return;
    }

    // Call parent callback to submit the report
    onReport({ cropName, issue, severity, date: new Date().toLocaleDateString() });

    // Reset form
    setCropName("");
    setIssue("");
    setSeverity("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-red-700">
        Report Crop Failure
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Crop Name</label>
          <input
            type="text"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g., Rice"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Issue Description</label>
          <textarea
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Describe the issue"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">-- Choose Severity --</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default FailureReportForm;
